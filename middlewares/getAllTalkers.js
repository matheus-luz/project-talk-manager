const fs = require('fs/promises');

const TALKERFILE = './talker.json';

const getAllTalkers = async (_req, res, _next) => {
  try {
    const data = await fs.readFile(TALKERFILE, 'utf8');
    const parseNames = JSON.parse(data);
    return res.status(200).json(parseNames);
  } catch (err) {
    return res.status(200).json([]);
  }
};

module.exports = { getAllTalkers };
