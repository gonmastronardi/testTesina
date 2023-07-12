const jsonfile = require("jsonfile");
const fieldNormalizerFactory = require("./classes/fieldNormalizerFactory");
const ObjectNormalizer = require("./classes/ObjectNormalizer");


const inputFile = "./data/dataSet.json";
let outputFile = "./data/output.json";

let unusefulWordsForName = [
  "Celular",
  "Liberado",
  "Libre",
  "Cuotas",
  "Sin",
  "Interes",
  "Original",
  "Nuevo",
  "Modelo",
  "\\*1\\*",
];

//configuration for each field of the JSON object to normalize
var configuration = {
  name: fieldNormalizerFactory.cleanNormalizer(unusefulWordsForName),
  price: fieldNormalizerFactory.monetaryAmountNormalizer,

};


//creates an ObjectNormalizer with the previous configuration
const normalizer = new ObjectNormalizer(configuration);

//reads the input file and it calls normalize method from ObjectNormalizer 
jsonfile
  .readFile(inputFile)
  .then(result => normalizer.normalizeObjectsInMap(result))
  .then(result => jsonfile.writeFile(outputFile, result))
  .catch(err => console.error(err));