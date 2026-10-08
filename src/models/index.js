const User = require('./User');
const connection = require('../databases/connection'); // Asumsi

const models = {
    User
    // Model lain (Category, Transaction, Budget) akan ditambahkan anggota lain nanti
};

// Inisialisasi relasi jika diperlukan (akan ditambahkan Rafael nanti untuk belongsToMany dll)
// Object.keys(models).forEach(modelName => {
//     if (models[modelName].associate) {
//         models[modelName].associate(models);
//     }
// });

module.exports = { connection, ...models };