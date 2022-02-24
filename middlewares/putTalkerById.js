const fs = require('fs/promises');

const FILETALKER = './talker.json';

const putTalkerById = async (req, res, next) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const talkers = JSON.parse(await fs.readFile(FILETALKER, 'utf8'));
    const filterIdObj = talkers.find((user) => user.id === Number(id));
    
    // filtrei pela posição que estava o objeto dentro do array
    const talkerIndexObj = talkers.indexOf(filterIdObj);
    Object.assign(filterIdObj, body);

    const newTalker = talkers[talkerIndexObj];
    
    await fs.writeFile(FILETALKER, JSON.stringify(talkers));

    return res.status(200).json(newTalker);
  } catch (err) {
    next(err);
  }
};

module.exports = { putTalkerById };
