// código desenvolvido baseado na monitoria do Gabriel Gaspar, repósitorio abaixo
// https://github.com/tryber/sd-015-b-live-lectures/tree/monitoria/22.6

const fs = require('fs/promises');

const TALKERFILE = './talker.json';

const searchTalker = async (req, res, next) => {
  try {
    const { name = '' } = req.query;
    const talkers = JSON.parse(await fs.readFile(TALKERFILE, 'utf8'));
    
    const filteredTalkerName = talkers.filter((talk) => { 
      const lowerCaseQuery = name.toLowerCase();
      const lowerCaseNameTalker = talk.name.toLowerCase();
      return lowerCaseNameTalker.includes(lowerCaseQuery);
    });

    return res.status(200).json(filteredTalkerName);
  } catch (err) {
    next(err);
  }
};

module.exports = { searchTalker };
