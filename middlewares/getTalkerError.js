const getTalkerError = (err, req, res, _next) => {
  res.status(500).send(`Erro: ${err.message}`);
};

module.exports = { getTalkerError };