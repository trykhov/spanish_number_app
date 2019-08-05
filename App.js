import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo';


const listBackgroundColor = {
  1: "#01CBC6",
  2: "#E8290B",
  3: "#AE1438",
  4: "#2475B0",
  5: "#30336B",
  6: "#0A3D62",
  7: "#26AE60",
  8: "#10A881",
  9: "#218F76",
  10: "#DFAF2B"
}

const soundList = {
  one: require('./assets/one.wav'),
  two: require('./assets/two.wav'),
  three: require('./assets/three.wav'),
  four: require('./assets/four.wav'),
  five: require('./assets/five.wav'),
  six: require('./assets/six.wav'),
  seven: require('./assets/seven.wav'),
  eight: require('./assets/eight.wav'),
  nine: require('./assets/nine.wav'),
  ten: require('./assets/ten.wav')
}

export default class App extends React.Component {

  playSound = async num => {
    const soundObject = new Audio.Sound(); // sound object
    try {
      let path = soundList[num];
      await soundObject.loadAsync(path);
      await soundObject
        .playAsync()
        .then(async playbackStatus => {
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        }).catch(error => {
          console.log(error);
        })
    } catch(error) {
      console.log(error);
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>OSpanish</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
