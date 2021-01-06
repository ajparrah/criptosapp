import React, {useState, useEffect} from 'react';
import {View, TouchableHighlight, StyleSheet, Text, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {APICryptoCompare} from '../API/cryptoCompare';

const currencies = [
  {
    name: 'Dólar Estadounidense',
    code: 'USD',
  },
  {
    name: 'Euro',
    code: 'EUR',
  },
  {
    name: 'Peso Colombiano',
    code: 'COP',
  },
  {
    name: 'Peso Mexicano',
    code: 'MXN',
  },
  {
    name: 'Bolívar Soberano',
    code: 'VES',
  },
];

export const Form = ({formValues, setFormValues, setIsLoadingQuote}) => {
  const [cryptos, setCryptos] = useState([]);
  const {currencyCode, cryptoCode} = formValues;
  useEffect(() => {
    const getCryptos = async () => {
      try {
        const response = await fetch(APICryptoCompare.top10ByMarket);
        const allCryptos = await response.json();
        const {Data} = await allCryptos;
        setCryptos(Data);
      } catch (error) {
        console.log(
          `Ha ocurrido un error al consultar el endpoint: ${APICryptoCompare.top10ByMarket}`,
        );
      }
    };
    getCryptos();
  }, []);

  const handleQuote = () => {
    if (isFormValid()) {
      console.log(JSON.stringify(formValues, null, 3));
      setIsLoadingQuote(true);
    } else {
      Alert.alert('Error', 'Es obligatorio todos los campos', [
        {text: 'Aceptar'},
      ]);
    }
  };

  const isFormValid = () => {
    let result = false;
    if (cryptoCode.trim().length > 0 && currencyCode.trim().length > 0) {
      result = true;
    }
    return result;
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Moneda</Text>
        <Picker
          selectedValue={currencyCode}
          onValueChange={(currency) =>
            setFormValues({...formValues, currencyCode: currency})
          }>
          <Picker.Item
            key={'empty'}
            label={'Selecciona una moneda'}
            value={''}
          />
          {currencies.map((currency) => (
            <Picker.Item
              key={currency.code}
              label={currency.name}
              value={currency.code}
            />
          ))}
        </Picker>
      </View>
      <View>
        <Text>Criptomoneda</Text>
        <Picker
          selectedValue={cryptoCode}
          onValueChange={(crypto) =>
            setFormValues({...formValues, cryptoCode: crypto})
          }>
          <Picker.Item
            key={'empty'}
            label={'Selecciona una criptomoneda'}
            value={''}
          />
          {cryptos.map(({CoinInfo: crypto}) => (
            <Picker.Item
              key={crypto.Id}
              label={crypto.FullName}
              value={crypto.Name}
            />
          ))}
        </Picker>
      </View>
      <View>
        <TouchableHighlight style={styles.btnForm} onPress={handleQuote}>
          <Text style={styles.txtOnBtnForm}>Cotizar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: '2.5%',
  },
  btnForm: {
    backgroundColor: '#004643',
    marginTop: 10,
    paddingVertical: 13,
  },
  txtOnBtnForm: {
    textAlign: 'center',
    fontFamily: 'Lato-Black',
    color: '#fffffe',
  },
});
