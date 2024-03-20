const fs = require("fs");
const path = require("path");
let products = require("../data/productsDataBase.json");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

