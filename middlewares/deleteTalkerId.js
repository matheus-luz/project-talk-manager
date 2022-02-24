const fs = require('fs/promises');

const FILETALKER = './talker.json';

const deleteTalkerId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const talkers = JSON.parse(await fs.readFile(FILETALKER, 'utf8'));
    const filterIdObj = talkers.find((user) => user.id === Number(id));
    
    const talkerIndex = talkers.indexOf(filterIdObj);

    // me basei nesse artigo para usar o splice https://www.delftstack.com/pt/howto/javascript/javascript-remove-object-from-array/#:~:text=e%20filter()%20.-,Use%20o%20m%C3%A9todo%20splice()%20para%20remover%20um%20objeto%20de,adicionando%20novos%20elementos%20no%20local.
    talkers.splice(talkerIndex, 1);
    
    await fs.writeFile(FILETALKER, JSON.stringify(talkers));

    return res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = { deleteTalkerId };
