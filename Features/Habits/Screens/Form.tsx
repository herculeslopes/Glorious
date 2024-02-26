import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Button, NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from "react-native"
import { database, executeQuery } from "../../../API/database";
import { Categories, Frequencies, Units } from "../types";
import { SQLError } from "expo-sqlite";
import { Dropdown, Field, Input, Label, Screen, Title } from "../../../Components/StyledComponents";
import SelectDropdown from "react-native-select-dropdown";
import { ScreenProps } from "../../../types";

const initialState = {
  isMeasurable: true,
  name: '',
  category: Categories.EDUCATIONAL,
  aim: 0,
  unit: Units.KG,
  frequency: Frequencies.DAILY,
}

const Form = ({ navigation }: ScreenProps) => {
  const [form, setForm] = useState(initialState);
  const queryClient = useQueryClient();

  // const { mutate: saveForm } = useMutation({
  //   mutationFn: async () => await database.transactionAsync(async transaction => {
  //     const result = await transaction.executeSqlAsync(`
  //       INSERT INTO habit (name, isMeasurable, category, aim, unit, frequency)
  //       VALUES (?, ?, ?, ?, ?, ?)
  //     `, ['Second Habit', 1, Categories.EDUCATIONAL, 1000, Units.REPETITIONS, Frequencies.DAILY]);
  //     console.log(result);
  //     return result.rows;
  //   }),
  //   onSuccess: (result) => {
  //     console.log(result);
  //   },
  //   onError: (error) => {
  //     console.log(error);
  //   }
  // });

  // const { mutate: saveForm } = useMutation({
  //   mutationFn: async () => {
  //     return await new Promise((resolve, reject) => {
  //       database.transaction(transaction => {
  //         transaction.executeSql(
  //           `
  //           INSERT INTO habit (name, isMeasurable, category, aim, unit, frequency)
  //           VALUES (?, ?, ?, ?, ?, ?)
  //           `,
  //           [form.name, form.isMeasurable ? 1 : 0, form.category, form.aim, form.unit, form.frequency],
  //           (_, result) => {
  //             console.log(result);
  //             resolve(result.rows._array);
  //             queryClient.invalidateQueries({ queryKey: ['habits-list'] });
  //           },
  //           (_, error) => {
  //             console.log('error: ', error);
  //             reject(error);
  //           }
  //         );
  //       })
  //     })
  //   },
  //   onSuccess: () => {
  //     setForm(initialState);
  //   }
  // })



  const { mutate: saveForm } = useMutation({
    mutationFn: async () => await executeQuery(
      `
      INSERT INTO habit (name, isMeasurable, category, aim, unit, frequency)
      VALUES (?, ?, ?, ?, ?, ?)
      `, [form.name, form.isMeasurable ? 1 : 0, form.category, form.aim, form.unit, form.frequency],
      // `, [null, 'form.isMeasurable', form.category, 'form.aim', form.unit, form.frequency],
    ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['habits-list'] });
      navigation.navigate('HabitsList');
      console.log('mutation succees');
    },
    onError: (error) => {
      console.log(error);
    }
  })

  const handleInput = (name: string, text: string) => {
    setForm({ ...form, [name]: text });
  }

  return (
    <Screen>
      <Title>Form</Title>

      <Field>
        <Label>Name</Label>
        <Input value={form.name} onChangeText={(text) => handleInput('name', text)} />
      </Field>

      <Field>
        <Label>Category</Label>
        <Input value={form.category} onChangeText={(text) => handleInput('category', text)} />

        <Dropdown
          data={Object.values(Categories)}
          defaultButtonText={initialState.category}
          onSelect={(selectedItem, index) => {
            handleInput('category', selectedItem)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
        />

      </Field>

      <Field>
        <Label>Aim</Label>
        <Input value={form.aim} keyboardType="numeric" onChangeText={(text) => handleInput('aim', text)} />
      </Field>

      <Field>
        <Label>Unit</Label>
        <Input value={form.unit} onChangeText={(text) => handleInput('unit', text)} />
      </Field>

      <Field>
        <Label>Frequency</Label>
        <Input value={form.frequency} onChangeText={(text) => handleInput('frequency', text)} />
      </Field>



      <Button onPress={() => saveForm()} title="save" />
    </Screen>
  )
}

export default Form;