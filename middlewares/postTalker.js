const fs = require('fs/promises');

const FILETALKER = './talker.json';

const postTalker = async (req, res, next) => {
  try {
    const { name, age, talk } = req.body;
    const { watchedAt, rate } = talk;
    const talkers = JSON.parse(await fs.readFile(FILETALKER, 'utf8'));
    
    const countId = talkers.length + 1;
    const newTalker = { id: countId, name, age, talk: { watchedAt, rate } };

    talkers.push(newTalker);
    const stringTalkers = JSON.stringify(talkers);

    await fs.writeFile(FILETALKER, stringTalkers);

    return res.status(201).json(newTalker);
  } catch (err) {
    next(err);
  }
};

module.exports = { postTalker };
