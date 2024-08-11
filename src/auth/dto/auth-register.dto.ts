import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class AuthRegisterDTO {

    @IsEmail()
    email:string

    @IsString()
    login:string


    @IsStrongPassword()
    password: string

}