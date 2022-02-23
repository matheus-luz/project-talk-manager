function regexDate(testdate) {
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  return dateRegex.test(testdate);
}

const validateName = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: 'O campo "name" é obrigatório',
    }); 
  } 

  if (name.length < 3) {
    return res.status(400).json({
    message: 'O "name" deve ter pelo menos 3 caracteres',
    }); 
  }

  next();
};

const validateAge = (req, res, next) => {
  const { age } = req.body;

  if (!age) {
    return res.status(400).json({
      message: 'O campo "age" é obrigatório',
    }); 
  } 

  if (age < 18) {
    return res.status(400).json({
    message: 'A pessoa palestrante deve ser maior de idade',
    }); 
  }

  next();
};

const validateObjTalker = (req, res, next) => {
  const { talk } = req.body;
  if (!talk || !talk.watchedAt || !talk.rate) {
    return res.status(400)
    .json({ message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }

  next();
};

const validTalkRate = (req, res, next) => {
  const { talk } = req.body;

  if (talk.rate < 1 || talk.rate > 5) { 
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  next();
};

const validateDate = (req, res, next) => {
  const { talk } = req.body;
  
  const date = regexDate(talk.watchedAt);

  if (!date) {
    return res.status(400)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  
  next();
};

const validateTalker = [
  validateName, 
  validateAge, 
  validateObjTalker,
  validTalkRate,
  validateDate, 
];

module.exports = { validateTalker };
