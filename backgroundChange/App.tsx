import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

function App(): React.JSX.Element {

  const [randomBackground, setRandomBackground] = useState("#ffffff");
  const [randomShape, setRandomShape] = useState("circle");

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color);
  };

  const generateShape = () => {
    const shapes = ["circle", "square", "triangle", "pentagon", "hexagon", "rectangle"];
    const randomIndex = Math.floor(Math.random() * shapes.length);
    setRandomShape(shapes[randomIndex]);
  };

  const renderShape = () => {
    switch (randomShape) {
      case 'circle':
        return <View style={styles.circle} />;
      case 'square':
        return <View style={styles.square} />;
      case 'triangle':
        return (
          <View style={styles.triangleContainer}>
            <View style={styles.triangle} />
          </View>
        );
      case 'pentagon':
        return (
          <View style={styles.pentagonContainer}>
            <View style={styles.pentagon}>
              <View style={styles.pentagonBefore} />
            </View>
          </View>
        );
      case 'hexagon':
        return (
          <View style={styles.hexagonContainer}>
            <View style={styles.hexagon}>
              <View style={styles.hexagonBefore} />
              <View style={styles.hexagonAfter} />
            </View>
          </View>
        );
      case 'rectangle':
        return <View style={styles.rectangle} />;
      default:
        return null;
    }
  };

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, { backgroundColor: randomBackground }]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionButton}>
            <Text style={styles.actionButtonTxt}>Change Color</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={generateShape}>
          <View style={styles.actionButton}>
            <Text style={styles.actionButtonTxt}>Change Shape</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.shapeContainer}>
          {renderShape()}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButton: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  actionButtonTxt: {
    fontSize: 24,
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  shapeContainer: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ffffff',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#ffffff',
  },
  triangleContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  triangle: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#ffffff',
  },
  rectangle: {
    width: 150,
    height: 100,
    backgroundColor: '#ffffff',
  },
  pentagonContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pentagon: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 70,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#ffffff',
    position: 'relative',
  },
  pentagonBefore: {
    position: 'absolute',
    top: -30,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderTopWidth: 30,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#ffffff',
  },
  hexagonContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hexagon: {
    width: 50,
    height: 86.6, // Height to maintain the hexagon shape
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hexagonBefore: {
    position: 'absolute',
    top: -25,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 25,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#ffffff',
  },
  hexagonAfter: {
    position: 'absolute',
    bottom: -25,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderTopWidth: 25,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#ffffff',
  },
});

export default App;
