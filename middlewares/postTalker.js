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

    await fs.writeFile(FILETALKER, JSON.stringify(talkers));

    return res.status(201).json(newTalker);
  } catch (err) {
    next(err);
  }
};

module.exports = { postTalker };
