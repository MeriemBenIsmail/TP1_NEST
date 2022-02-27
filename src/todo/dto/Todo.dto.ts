/* eslint-disable prettier/prettier */
import { TodoStatusEnum } from "../enums/todo-status.enum";
import { IsNotEmpty, MaxLength, MinLength, ValidationArguments } from 'class-validator';



export class FindTodoResponseDTO {
    id: string;
    name: string;
    description: string;
    status: TodoStatusEnum;
}
export class TodoResponseDTO {
    id: string;
    name: string;
    description: string;
    status: TodoStatusEnum;
}
export class CreateTodoDTO {
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(10)
    name: string;

    @IsNotEmpty({
       
    })
    @MinLength(10, {
        message: "Description doit avoir au moins 10 caractères"
    })
    description: string;

    status: TodoStatusEnum;
}

export class UpdateTodoDTO {
    name: string;
    description: string;
    status: TodoStatusEnum;
}