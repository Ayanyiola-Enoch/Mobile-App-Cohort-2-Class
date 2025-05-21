import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const index = () => {
  return (
    <View style={styles.page}>

      <View style={styles.flexContainer}>
        <View style={styles.box1}>
          <Text>App</Text>
        </View>

        <View style={styles.box2}></View>
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
  subText: {
    color: "#fff",
    fontWeight: "200",
  },
  box1: {
    height: 80,
    width: 80,
    borderWidth: 4,
    borderColor: "red",
    alignItems:"center",
    justifyContent:"center"
    // paddingVertical: 10,
    // paddingHorizontal: 10,
    // borderRadius:10,
    // borderBottomRightRadius:10,
    // margin: 20
  },
  box2: {
    height: 80,
    width: 80,
    borderWidth: 4,
    // alignSelf:"flex-end"
    // margin: 20

  },
  flexContainer:{
    display:"flex",
    justifyContent:"center",
    // alignItems:"center",

  }



})




