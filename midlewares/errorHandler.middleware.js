module.exports = (error, _req, res, _next) => res.status(500).json({ error: error.message });