const knex = require("knex");
const db = knex(require("../knexfile.js").development);

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
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

function findSteps(schemeId) {
  return db("steps as st")
    .join("schemes as sc", "sc.id", "st.scheme_id")
    .select("st.id", "sc.scheme_name", "st.step_number", "st.instructions")
    .where("sc.id", schemeId)
    .orderBy("st.step_number");
}

//CANNOT FIGURE OUT HOW TO RETURN ADDED SCHEME
function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .then(array => {
      findById(array[0]);
    });
}

//THE BELOW WILL RETURN COUNT OF UPDATED RECORDS BUT NOT findById AFTER IF UNCOMMENTED
function update(id, body) {
  return db("schemes")
    .where({ id })
    .update(body);
  // .then(updated => {
  //   findById(updated);
  // });
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}
