// module.exports = {
//     i18n: {
//         locales: ['bn', 'en'],
//         defaultLocale: 'bn',
//     },
// }


// next-i18next.config.js
const i18n = {
    locales: ['bn', 'en'],
    defaultLocale: 'bn',
};


module.exports = {
    i18n,
    localePath:
        typeof window === 'undefined'
            ? require('path').resolve('./public/locales')
            : '/public/locales',
    ns: ['common'],
};
