const db = require('../db/index')
const StylesProduct = require('./models')

const getStyles = async(pId, cb) => {
  try {
    const query = {productId:pId}
    const styles = await StylesProduct.find(query)
    console.log(styles)
    cb(null, styles);
  } catch(err) {
    cb(err);
  }
};

const getProducts = async(pId, cb) => {
  try {
    const query = {productId: pId }
    const styles = await StylesProduct.find(query)
    console.log(styles)
    cb(null, styles);
  } catch(err) {
    res.send('Error  ' + err)
    cb(err);
  }
};

module.exports = {getProducts, getStyles}
