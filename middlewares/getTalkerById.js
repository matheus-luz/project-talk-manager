const fs = require('fs/promises');

const TALKERFILE = './talker.json';

const getTalkerById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await fs.readFile(TALKERFILE, 'utf8');
    const parseNames = JSON.parse(data);
    const talkered = parseNames
      .find((user) => user.id === Number(id));
    
    if (!talkered) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' }); 

    return res.status(200).json(talkered);
  } catch (err) {
    next(err);
  }
};

module.exports = { getTalkerById };
