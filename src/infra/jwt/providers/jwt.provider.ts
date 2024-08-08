import { IJwtRepository } from "../repositories/jwt.repository";
import JsonWebToken, { JwtPayload } from "jsonwebtoken";

class JsonWebTokenProvider implements IJwtRepository<JwtPayload>{
  private jsonWebToken = JsonWebToken
  private secretKey: string
  private expiresIn: string

  constructor(secretKey = 'JULIOLIMA1225', expiresIn = '1h' ) {
    this.secretKey = secretKey
    this.expiresIn = expiresIn
  }
  
  signToken(data: object): string {
    try {
      const jwt =  this.jsonWebToken.sign(data, this.secretKey,  { expiresIn: this.expiresIn })
      return jwt
    } catch (error) {
      throw new  Error("Error to generate your token jwt" + error)
    }
  }

  verifyToken(jwt: string): string | JsonWebToken.JwtPayload {
    try {
      const jwtPayload  =  this.jsonWebToken.verify(jwt, this.secretKey)
      return jwtPayload
     } catch (error) {
       throw new  Error("You don't have permission to access this resource")
     }
  }
}
  

export { JsonWebTokenProvider }