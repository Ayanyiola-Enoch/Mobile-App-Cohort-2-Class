import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const index = () => {
  return (
    <View style={styles.page}>

      <View>
        <Text style={{ fontSize: 20, fontWeight: "800" }}>Your Name</Text>
        <Text style={styles.subText}>Junior Mobile App Developer</Text>
      </View>
    </View>
  )
}
export default index;


const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1
  },
  subText:{
    color:"green",
    fontWeight:"light"
  }


})




