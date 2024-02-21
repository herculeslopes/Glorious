import { useState } from "react";
import { NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from "react-native"

const Form = () => {
  const [form, setForm] = useState({
    name: '',
  });
  
  const handleInput = (name: string, text: string) => {
    setForm({ ...form, [name]: text });
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} onChangeText={(text) => handleInput('name', text)} />
      <Text>{form.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: 'white',
    fontSize: 44,
    fontWeight: 'bold',
  },

  label: {
    color: 'white',
  },

  input: {
    // height: 40,
    borderBottomColor: 'white',
    color: 'white',
    fontSize: 24,
    backgroundColor: '#242424',
    borderRadius: 5,
    padding: 5,
  }
});

export default Form;