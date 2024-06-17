import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';



function App(): React.JSX.Element {

  const [randomBackground,setRandomBackground] = useState("#ffffff");

  const generateColor =()=>{
    const hexRange = "0123456789ABCDEF";
    let color = "#";
    for (let i=0; i<6; i++){
      color += hexRange[Math.floor(Math.random()*16)] // it will generate 6 digit hex color and Math.floor(Math.random()*16) this will generate random number from 0 to 15 and it is a index we are choosing for hexRange array
    }
    setRandomBackground(color);
  }
  return ( // TouchableOpacity it will create press me as a button
    <>
      <StatusBar backgroundColor={randomBackground} /> 
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
      
        <TouchableOpacity onPress={generateColor}> 
          <View style={styles.actionButton}>
            <Text style={styles.actionButtonTxt}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
      
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center', // it will go x-axis 
    justifyContent: 'center', // it will go y-axis
  },
  actionButton: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionButtonTxt:{
    fontSize: 24,
    color: '#ffffff',
    textTransform: 'uppercase',
  }
});

export default App;
