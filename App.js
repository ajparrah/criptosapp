import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import {APICryptoCompare} from './src/API/cryptoCompare';
import {Form} from './src/components/Form';
import {Header} from './src/components/Header';
import {QuotePrices} from './src/components/QuotePrices';

const App = () => {
  const [formValues, setFormValues] = useState({
    currencyCode: '',
    cryptoCode: '',
  });
  const {cryptoCode, currencyCode} = formValues;
  const [quote, setQuote] = useState({});
  const [isLoadingQuote, setIsLoadingQuote] = useState(false);
  useEffect(() => {
    if (isLoadingQuote) {
      const calculateQuote = async () => {
        try {
          const response = await fetch(
            APICryptoCompare.quoteByCryptoToCurrency(cryptoCode, currencyCode),
          );
          const {DISPLAY: data} = await response.json();
          const prices = data[cryptoCode][currencyCode];
          const newQuote = {
            symbol: prices.TOSYMBOL,
            price: prices.PRICE,
            changeOnLast24Hours: prices.CHANGEPCT24HOUR,
            higherLast24Hours: prices.HIGH24HOUR,
            lowerLast24Hours: prices.LOW24HOUR,
            lastUpdate: prices.LASTUPDATE,
          };
          setQuote(newQuote);
          setIsLoadingQuote(false);
        } catch (error) {
          Alert.alert(
            'Error en solicitud',
            'Ha ocurrido un error al tratar de hacer la cotización',
            [{text: 'Aceptar'}],
          );
        }
      };
      calculateQuote();
    }
  }, [isLoadingQuote, cryptoCode, currencyCode]);

  return (
    <>
      <ScrollView style={styles.content}>
        <Header />
        <Form
          formValues={formValues}
          setFormValues={setFormValues}
          setIsLoadingQuote={setIsLoadingQuote}
        />
        {isLoadingQuote ? (
          <ActivityIndicator
            size="large"
            color="#004643"
            style={{marginTop: 30}}
          />
        ) : (
          Object.keys(quote).length > 0 && <QuotePrices quote={quote} />
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#e8e4e6',
  },
});

export default App;
