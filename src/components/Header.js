import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cotizador de Criptomonedas</Text>
      </View>
      <View>
        <Image
          source={require('../../assets/images/cryptos.png')}
          style={styles.headerImg}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#004643',
    paddingVertical: 15,
  },
  headerTitle: {
    color: '#fffffe',
    fontSize: 18,
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  headerImg: {
    width: '100%',
    height: 150,
  },
});
