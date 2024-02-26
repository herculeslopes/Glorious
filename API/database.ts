import * as SQLite from 'expo-sqlite';

export const database = SQLite.openDatabase('places.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((transaction) => {
      transaction.executeSql(
        `CREATE TABLE IF NOT EXISTS habit (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        isMeasurable BOOLEAN NOT NULL,
        category TEXT NOT NULL,
        aim REAL NOT NULL,
        unit TEXT NOT NULL,
        frequency TEXT NOT NULL
      )`,
        [],
        (_, result) => {
          resolve(result);
        },
        (_, error: SQLite.SQLError | null) => {
          reject(error);
          return true;
        },
      );
    });
  });

  return promise;
}

export const executeQuery = async (sql: string, params: any[]) => {
  return await new Promise((resolve, reject) => {
    database.transaction(transaction => {
      transaction.executeSql(sql, params,
        (_, result) => {
          resolve(result.rows._array);
        },
        (_, error) => {
          reject(error);
          return true;
        },
      );
    })
  });
}

// const Fetch = async () => await executeQuery();

// export const initt = async () => {
//   const response = await database.transactionAsync((transaction) => {

//   });
// }