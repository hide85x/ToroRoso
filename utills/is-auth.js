
module.exports = (req, res, next) => {
    try {
        const authHeader = req.get('Authorization')
        if (!authHeader) {
            const err = new Error('Not authenticated!')
            err.statusCode = 401;
            throw err;
        }
        const token = authHeader.split(' ')[1];
        if(!token) {
            const err = new Error('Not authenticated!')
            err.statusCode = 401;
            throw err;

        }
        console.log(`our precious token : ${token}  /is-auth`)
        req.token = token;

    }
    catch (err) {
        throw err // wystraczy ze thrrow error nie musimy go nextowac i dziala
    };
    next()
}