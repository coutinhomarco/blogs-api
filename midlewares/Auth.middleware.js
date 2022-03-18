const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const { authorization } = await req.headers;
    
    // Para testar no local descomente a proxima linha e troque as variaveis de authorization para token
    // nas linhas 9 e 10

    const token = authorization.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Token not found' });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.tokenData = decoded.data;

    next();
  } catch (error) {
      if (error.name.includes('Token')) {
        return res.status(401).json({ message: 'Expired or invalid token' });
}
      next(error);
  }
};