const jwt = require('jsonwebtoken')

const token = jwt.sign({
    name: "tp",
    id: "tp"
}, 'secreto', { algorithm: 'HS256' })

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
        const verified = jwt.verify(token, "secreto")
        req.user = verified
        next()
    } catch (error) {
        res.sendStatus(403).json({error: 'El token no es válido'})
    }
}

module.exports = verifyToken;