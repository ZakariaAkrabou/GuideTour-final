exports.AuthorizationUser = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ error: 'Access denied: No token provided' });
    }
    try {
        const decoded = JWT.verify(token.replace('Bearer ', ''), 'GAHDYSB');
        req.userId = decoded.userid;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};