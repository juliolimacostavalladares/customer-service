import { IPasswordHas } from "../../app/providers/passoword.hash.provider";
import bcrypt from "bcrypt"
class PasswordHashProvider implements IPasswordHas {
  private readonly saltRounds: number
  private  bcrypt = bcrypt
  constructor(saltRounds = 10) {
    this.saltRounds = saltRounds
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await this.bcrypt.genSalt(this.saltRounds)
    const hash = this.bcrypt.hash(password, salt)
    return hash
  }

  async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword)
  }

}

export { PasswordHashProvider }