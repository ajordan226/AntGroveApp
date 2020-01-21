import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'

const Images = () => (
	<View style = {styles.container}>
		<Image source = {{uri: 'https://products.advanced-online.com/CU1/featured/6-25-CZ9801A.jpg'}} 
   		style = {{width: 350, height: 75}}
   />
   </View>
)
export default Images

const styles = StyleSheet.create ({
   container: {
      alignItems: 'flex-end',
   }
})