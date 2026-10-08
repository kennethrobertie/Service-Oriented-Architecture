/**
 * Satu pintu ekspor untuk semua router.
 * Tanpa file ini, index.js penuh require satu per satu.
 */
const contohRouter = require("./contoh");
const bukuRouter = require("./buku");
const axiosRouter = require("./contohAxios");
const userRoutes = require("./userRoutes"); // Import file user.js milikm

module.exports = {
  contohRouter,
  bukuRouter,
  axiosRouter,
  userRoutes
};
