//http://data.fixer.io/api/latest?access_key=76fba654a3098e4868ceb6651f3eac6a

//https://restcountries.eu/rest/v2/all

//https://restcountries.eu/rest/v2/currency/{currency}

const axios = require('axios');

// const getExchangeRate = (from, to) => {
//     return axios.get(`http://data.fixer.io/api/latest?access_key=76fba654a3098e4868ceb6651f3eac6a`).then(response => {
//         const euro = 1 / response.data.rates[from];
//         const rate = euro * response.data.rates[to];
//         return rate;
//     });
// }

const getExchangeRate = async (from, to) => {
    const response = await axios.get(`http://data.fixer.io/api/latest?access_key=76fba654a3098e4868ceb6651f3eac6a`);
    const euro = 1 / response.data.rates[from];
    return euro * response.data.rates[to];;
}

const getCountries = async (currencyCode) => {
    const res = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
    return res.data.map(country => country.name);
}

// const convertCurrency = (from, to, amount) => {
//     let convertedAmount;

//     return getExchangeRate(from, to).then(rate => {
//         convertedAmount = (amount * rate).toFixed(2);
//         //console.log(convertedAmount);
//         return getCountries(to);
//     }).then(countries => {
//         //console.log(countries);
//         return `${amount} ${from} is worth ${convertedAmount} ${to}. 
//         You can spend it in the following countries: ${countries.join(', ')}`;
//     }).catch(e => {
//         //console.log(e);
//     });
// }

const convertCurrency = async (from, to, amount) => {
    const exchangeRate = await getExchangeRate(from, to);
    const countryList = await getCountries(to);

    convertedAmount = (amount * rate).toFixed(2);

    return `${amount} ${from} is worth ${convertedAmount} ${to}. 
        You can spend it in the following countries: ${countries.join(', ')}`;
}

const doWork = async () => {
    return 10;
}

doWork().then(data => {
    console.log(data);
}).catch(e => {
    console.log('Something went wrong');
});

// getExchangeRate('USD', 'CAD').then(rate => {
//     console.log(rate);
// });

// getCountries('CAD').then(countries => {
//     console.log(countries);
// });

convertCurrency('USD', 'CAD', 20).then(message => {
    console.log(message);
}).catch(e => {
    console.log(e.message);
});