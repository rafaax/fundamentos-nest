import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreateUserDTO {
    
    @IsString()
    name: string;
    
    @IsEmail()    
    email: string;

    @IsString()
    dob: string;

    @IsString()
    cep: number;
}