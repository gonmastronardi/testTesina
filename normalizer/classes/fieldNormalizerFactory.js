const MonetaryAmountNormalizer = require("./fields/MonetaryAmountNormalizer");
const CleanNormalizer = require('./fields/CleanNormalizer')


module.exports = {
  monetaryAmountNormalizer: new MonetaryAmountNormalizer(),
  cleanNormalizer: params => new CleanNormalizer(params)
};
