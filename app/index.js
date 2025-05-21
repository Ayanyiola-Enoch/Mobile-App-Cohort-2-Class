import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

const index = () => {
  return (
    <View style={styles.page}>

      {/*} <View style={styles.flexContainer}>
        <View style={styles.box1}>
          <Text>App</Text>
        </View>

        <View style={styles.box2}></View>
        <View style={styles.box2}></View>
      </View>*/}
      <View style={styles.flexContainer}>
        <Image source={require('../assets/images/icon.png')} style={{ width: 100, height: 100 }} />

        <View>

          <Text>Name: <TextInput placeholder='Enter your name' style={{borderWidth:1, paddingLeft:10}}/>
          </Text>

          <Text>Phone number: <TextInput placeholder='Enter your number' keyboardType='number-pad' style={{borderWidth:1}}/></Text>

          <Text>Password: <TextInput placeholder='Enter your password' keyboardType='visible-password' secureTextEntry={true} style={{borderWidth:1}}/></Text>


        </View>

      </View>

    </View>
  )
}
export default index;


const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },

  flexContainer: {
    // alignItems:"center",
    justifyContent: "center",
    marginTop:10,
    paddingHorizontal:20

  }



})




