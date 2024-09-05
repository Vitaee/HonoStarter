import { IsString, IsNumber, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateUserValidation {
  @IsString()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
  
}
