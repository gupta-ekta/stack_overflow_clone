import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]

        let decodeData = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decodeData?.id 

        next()
    } catch (error) {
        console.log(error)
        return res
            .status(500)
            .json(responseHandler(false, 500, 'Server Error', null));
    }
}

export default auth;