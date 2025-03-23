import { StyleSheet, Text, TextInput, View , Dimensions , TouchableOpacity , StatusBar } from 'react-native'
import React, { Children } from 'react'
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import { useEffect , useState } from 'react';

 // video 5

const App = () => {

  const [inputTextValue , setInputTextValue] = useState(null);
  const [list , setlist] = useState(null);

  console.log("HI from app js")

  const handleAddData = async() => {
    try {
      const response = await database().ref("todo/2").set({
        value : inputTextValue ,
      })
      console.log(response)
      console.log("data added")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden = {true} />
      <View>
        <Text style = {{textAlign : 'center' , fontSize : 20 , fontWeight : 'bold', paddingTop : 10}} >Todo App</Text>
      <TextInput style={styles.inputBox} placeholder='Enter any Value' value={inputTextValue} onChangeText = {(value) => setInputTextValue(value)} />
      <TouchableOpacity style={styles.addButton} onPress={handleAddData} >
        <Text  >Add</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default App

const {height,width} = Dimensions.get('screen')
 
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  inputBox:{
    width:width - 30,
    borderRadius:15,
    borderWidth:2,
    marginTop:10,
    marginVertical:10,
    padding:10
  },
  addButton:{
    backgroundColor:'lightblue',
    alignItems:'center',
    padding:10,
    borderRadius:10,
  }
})

























// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import firestore from '@react-native-firebase/firestore';
// import database from '@react-native-firebase/database';
// import { useEffect , useState } from 'react';

// const App = () => {

//   const [mydata , setMydata] = useState(null)

//   useEffect(() => {
//     getDatabase()
//   })
  
//   const getDatabase = async () => {
//     try {
//       const data = await firestore().collection("testing").doc("bCPHInlFkeEoTuWPFN2D").get()
//       console.log(data._data);
//       setMydata(data._data)

//       const data2 = await database().ref('users/1').once('value')
//       console.log(data2.val())
//       setMydata(data2.val())
//     } catch (err) {
//       console.log(err)
//     }

//     setMydata(data2.val())
//   }

//   return (
//     <View>
//       <Text>Name : {mydata ? mydata.name : "Loading"}</Text>
//       <Text>Age : {mydata ? mydata.age : "Details"}</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})