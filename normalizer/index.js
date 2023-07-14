import jsonfile from "jsonfile";
import ObjectNormalizer from "./classes/ObjectNormalizer";
import configuration from './common/config';

const inputFile = "./data/dataSet.json";
let outputFile = "./data/output.json";

//creates an ObjectNormalizer with the previous configuration
const normalizer = new ObjectNormalizer(configuration);

//reads the input file and it calls normalize method from ObjectNormalizer 
jsonfile
  .readFile(inputFile)
  .then(result => normalizer.normalizeObjectsInMap(result))
  .then(result => jsonfile.writeFile(outputFile, result))
  .catch(err => console.error(err));