import { View, Text, TextInput, TouchableOpacity } from "react-native"; //importar tags que vao ser utilizadas
import styles from "./style";
import React, { useState } from "react";

export default function Login() {
  //criando a função e já exportando com export defalut
  const [user, setUser] = useState(""); //user com um valor inicial de uma string vazia (''). A função useState retorna dois valores: o estado atual (user) e uma função para atualizar esse estado (setUser)
  const [pass, setPass] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <Text style={styles.title}>Login</Text>
      <View style={styles.box}>
        <TextInput
          style={styles.inputBox}
          placeholder="User"
          onChangeText={setUser}
          value={user}
        ></TextInput>
      </View>
      <View style={styles.box}>
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          onChangeText={setPass}
          value={pass}
          secureTextEntry={true}
        ></TextInput>
      </View>
      <View style={styles.box}>
        <TouchableOpacity 
        style={styles.butto} 
        onPress={() => 
            {console.log('user: ' , user)
             console.log('senha:', pass)
        }} 

        > 
       <Text style={styles.white}>Enviar</Text> 
        </TouchableOpacity>
      </View>
    </View>
  );
}
