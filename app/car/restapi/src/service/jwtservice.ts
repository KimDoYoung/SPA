import { Request } from 'express'
import jwt from 'jsonwebtoken'
import { logger, config } from '../config'
import { User } from '../types'

export default class JwtService{
    static getUserIdFromRequest = ( req: Request ): string | null => {
        const token = this.extractTokenFromRequest(req)
        if(!token){
            return null
        }
        const jwtPayload = this.decodeJWT(token)
        return (jwtPayload as any)?.user_id || null
    }
    static extractTokenFromRequest = ( req: Request): string | undefined => {
        const TOKEN_PREFIX = 'Bearer '
        // const auth = req.headers.authorization
        const auth = req.cookies.auth_token
        const token = auth?.includes(TOKEN_PREFIX)
                    ? auth.split(TOKEN_PREFIX)[1]
                    : auth;
        return token
    }
    static decodeJWT = (token: string) => {
        try {
            const decodedToken = jwt.verify(token, config.JWT_SECRET_KEY!)
            return decodedToken
        } catch (error) {
            logger.error(error)           
        }
    }
    static createJWT = async (user: User): Promise<string> =>{
        const token = jwt.sign(
            { user_id: user.user_id, user_nm: user.user_nm},
            config.JWT_SECRET_KEY!
        );
        return token
    }

}