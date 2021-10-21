import React from 'react'
import {StatusBar} from 'expo-status-bar'
import {StyleSheet, Text, SafeAreaView, View} from 'react-native'
import {useFonts, Roboto_700Bold, Roboto_300Light_Italic} from '@expo-google-fonts/roboto'

import HomeScreen from './src/telas/Start'
import Hospital from './src/telas/Hospital'
import Map from './src/telas/Map'

export default function App(){
  const [loadedFont] = useFonts({
    "Roboto300": Roboto_300Light_Italic,
    "RobotoBold": Roboto_700Bold
  })

  if(!loadedFont){
    <View>
      <Text>Loading...</Text>
    </View>
  }
  return(
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Map />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center'
  }
})