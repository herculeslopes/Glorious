import { Pressable, StyleSheet, Text, View } from "react-native";
import { CategoryIconMap, Habit, Units } from "./types";
import { FontAwesome5 } from "@expo/vector-icons";

const Preview: React.FC<{ habit: Habit, width: number }> = ({ habit, width }) => {
  const {
    title,
    category,
    aim,
    unit,
  } = habit;


  


  return (
    <View style={[styles.container, { width: width }]}>
      <View style={styles.pressableContainer}>
        <Pressable style={styles.pressable} android_ripple={{ color: '#777777' }}>
          <View>
            {/* <Text style={styles.icon}>Icon</Text> */}
            <FontAwesome5 name={CategoryIconMap[category]} size={32} color="#28E7FF" />
          </View>

          <View style={styles.counterContainer}>
            <Text style={styles.counterText}>0/{aim}{unit === Units.REPETITIONS ? '' : unit}</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>

  )
}

// const componentWidth = ;

const styles = StyleSheet.create({
  container: {
    // width: 100,
    width: '50%',
  },
  
  titleContainer: {
    alignItems: 'center',
  },
  
  title: {
    color: '#fff',

  },

  pressableContainer: {
    overflow: 'hidden',
    borderRadius: 5,
  },

  pressable: {
    backgroundColor: '#242424',
    // height: 100,
    aspectRatio: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    color: '#28E7FF',
  },

  counterContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },

  counterText: {
    fontSize: 10,
    color: '#777777',
  }
})

export default Preview;