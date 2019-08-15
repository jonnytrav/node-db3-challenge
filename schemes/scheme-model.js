const knex = require("knex");
const db = knex(require("../knexfile.js").development);

module.exports = {
  find,
  findById
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first()
    .then(scheme => {
      if (scheme) {
        return scheme;
      } else {
        return null;
      }
    });
}
