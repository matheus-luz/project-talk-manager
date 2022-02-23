const crypto = require('crypto');
// me basei nesse site para gerar o token https://www.section.io/engineering-education/data-encryption-and-decryption-in-node-js-using-crypto/

const postLogin = async (req, res, next) => {
  try {
    const token = crypto.randomBytes(8).toString('hex');
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = { postLogin };
