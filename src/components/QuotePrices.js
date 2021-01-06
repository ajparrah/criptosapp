import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const QuotePrices = ({quote}) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.fontWhite,
          styles.fontTitleDetails,
          {textAlign: 'center'},
        ]}>
        Cotización
      </Text>
      <View>
        <Text
          style={[styles.fontWhite, styles.fontTitle]}>{`${quote.price}`}</Text>
      </View>
      <View style={styles.detailQuote}>
        <Text style={[styles.fontWhite, styles.fontTitleDetails]}>
          Precio más alto del dia:
        </Text>
        <Text style={[styles.fontWhite, styles.fontDetails]}>
          {quote.higherLast24Hours}
        </Text>
      </View>
      <View style={styles.detailQuote}>
        <Text style={[styles.fontWhite, styles.fontTitleDetails]}>
          Precio más bajo del dia:
        </Text>
        <Text style={[styles.fontWhite, styles.fontDetails]}>
          {quote.lowerLast24Hours}
        </Text>
      </View>
      <View style={styles.detailQuote}>
        <Text style={[styles.fontWhite, styles.fontTitleDetails]}>
          Variación en las últimas 24 horas:
        </Text>
        <Text style={[styles.fontWhite, styles.fontDetails]}>
          {quote.changeOnLast24Hours}
        </Text>
      </View>
      <View style={styles.detailQuote}>
        <Text style={[styles.fontWhite, styles.fontTitleDetails]}>
          Actualizado:
        </Text>
        <Text style={[styles.fontWhite, styles.fontDetails]}>
          {quote.lastUpdate}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#004643',
    marginTop: 10,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 27,
  },
  fontWhite: {
    color: '#e8e4e6',
  },
  fontTitle: {
    fontSize: 35,
    fontFamily: 'Lato-Black',
  },
  fontTitleDetails: {
    fontSize: 18,
    fontWeight: '100',
  },
  fontDetails: {
    fontSize: 20,
    marginLeft: 5,
    fontFamily: 'Lato-Black',
  },
  detailQuote: {
    flexDirection: 'row',
    width: '100%',
  },
});
