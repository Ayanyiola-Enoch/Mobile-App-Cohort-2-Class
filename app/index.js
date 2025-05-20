import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const index = () => {
  return (
    <View style={styles.page}>

      <View style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image
          source={require('../assets/images/icon.png')}
          style={{ width: 100, height: 100, borderRadius: 50, }}
        />
        <TouchableOpacity style={{ backgroundColor: "green", width: 70, height: 28, }}>
          <Text style={{ color: "white" }}>Click me</Text>
        </TouchableOpacity>
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
    color: "green",
    fontWeight: "light"
  },



})




