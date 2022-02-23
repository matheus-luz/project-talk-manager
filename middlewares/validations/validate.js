// regex - https://www.codegrepper.com/code-examples/javascript/javascript+email+validation+regex
function regex(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const validateEmail = (email, res) => {
  if (!email) res.status(400).json({ message: 'O campo "email" é obrigatório' });
  const emailRegex = regex(email);
  if (!emailRegex) {
  return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
};

const validatePassword = (password, res) => {
  if (!password) res.status(400).json({ message: 'O campo "password" é obrigatório' });
  if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
};

const validate = (req, res, next) => {
  const { email, password } = req.body;
  validateEmail(email, res);
  validatePassword(password, res);

  next();
};

module.exports = { validate };
