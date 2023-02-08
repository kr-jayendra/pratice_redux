const { createStore } = require("redux");
const { cakeRedcer } = require("./cake/cakeReducer");

const store = createStore(cakeRedcer);