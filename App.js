import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.generalBox}>
          <View style={styles.box1}>
            <Image
              source={require('./assets/images/png/logotipo.png')}
              style={{width: '100%', height: 100}}
            />
          </View>
          <View style={styles.box2}>
            <Text>Como</Text>
          </View>
          <View style={styles.box3}>
            <Text>Tu</Text>
          </View>
          <View style={styles.box4}>
            <Text>Estas?</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  generalBox: {
    //width: '100%',
  },
  box1: {
    backgroundColor: 'white',
    padding: 25,
  },
  box2: {
    backgroundColor: 'yellow',
    padding: 25,
  },
  box3: {
    backgroundColor: 'red',
    padding: 25,
  },
  box4: {
    backgroundColor: 'white',
    padding: 25,
  },
});

export default App;
