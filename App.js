import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';

const App = () => {
  return (
    <>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          {/* Se usa flexDirection row para aprovechar el contexto de flexbox. Es decir, se usa el concepto de que cuando es row y se coloca flex:1 este asigna al contenedor el maximo tamaño a lo ancho y no lo alto como lo haria por defecto al tener el column... Column con flex:1 ajusta completamente de forma vertical, y Row con flex:1 ajusta completamente de forma horizontal */}
          <Image
            source={require('./assets/images/bg.jpg')}
            style={styles.header}
          />
        </View>
        <View style={{marginHorizontal: 10}}>
          <Text style={styles.titleSection}>¿Qué hacer en Paris?</Text>
          <ScrollView horizontal>
            <View>
              <Image
                source={require('./assets/images/activity1.jpg')}
                style={styles.activity}
              />
            </View>
            <View>
              <Image
                source={require('./assets/images/activity2.jpg')}
                style={styles.activity}
              />
            </View>
            <View>
              <Image
                source={require('./assets/images/activity3.jpg')}
                style={styles.activity}
              />
            </View>
            <View>
              <Image
                source={require('./assets/images/activity4.jpg')}
                style={styles.activity}
              />
            </View>
            <View>
              <Image
                source={require('./assets/images/activity5.jpg')}
                style={styles.activity}
              />
            </View>
          </ScrollView>

          <Text style={styles.titleSection}>Mejores locaciones</Text>
          <ScrollView>
            <View>
              <Image
                source={require('./assets/images/best1.jpg')}
                style={styles.bestLocation}
              />
            </View>
            <View>
              <Image
                source={require('./assets/images/best2.jpg')}
                style={styles.bestLocation}
              />
            </View>
            <View>
              <Image
                source={require('./assets/images/best3.jpg')}
                style={styles.bestLocation}
              />
            </View>
          </ScrollView>

          <Text style={styles.titleSection}>Locaciones en L.A</Text>
          <View style={styles.listLocation}>
            <View style={styles.listItemLocation}>
              <Image
                source={require('./assets/images/hospedaje1.jpg')}
                style={styles.bestLocation}
              />
            </View>
            <View style={styles.listItemLocation}>
              <Image
                source={require('./assets/images/hospedaje2.jpg')}
                style={styles.bestLocation}
              />
            </View>
            <View style={styles.listItemLocation}>
              <Image
                source={require('./assets/images/hospedaje3.jpg')}
                style={styles.bestLocation}
              />
            </View>
            <View style={styles.listItemLocation}>
              <Image
                source={require('./assets/images/hospedaje4.jpg')}
                style={styles.bestLocation}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 150,
  },
  titleSection: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  activity: {
    width: 250,
    height: 270,
    marginRight: 10,
  },
  bestLocation: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  listLocation: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listItemLocation: {
    flexBasis: '49%',
  },
});

export default App;
