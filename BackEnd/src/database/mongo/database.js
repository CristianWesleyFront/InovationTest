const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigratório";
mongoose.Error.messages.Number.min =
  "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.Number.max =
  "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'.";
mongoose.Error.messages.String.enum =
  "'{VALUE}' não é válido para o atributo '{PATH}'.";

const warning = mongoose.connection;

warning.on("open", () => {
  console.log("Everything is okay, mongodb is connecting success");
});
warning.on("error", () => {
  console.log("Error, falied connecting mongodb");
});

module.exports = mongoose.connect("mongodb://localhost:27017/INOVATIONTEST", {
  useNewUrlParser: true
});
