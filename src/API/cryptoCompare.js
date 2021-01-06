export const APICryptoCompare = {
  top10ByMarket:
    'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD',
  quoteByCryptoToCurrency: (cryptoCode, currencyCode) =>
    `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCode}&tsyms=${currencyCode}`,
};
