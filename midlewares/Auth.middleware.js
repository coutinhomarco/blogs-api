const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = req.header.authorization;

  if (!token) return { code: 401, data: { message: 'Unauthorized' } };

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    req.tokenData = decoded.data;

    next();
  } catch (error) {
      if (error.name.includes('Token')) {
        return (
          { code: 401, data: { message: 'Expired or invalid token' } }); 
}
      next(error);
  }
};