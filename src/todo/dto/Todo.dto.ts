/* eslint-disable prettier/prettier */
import { TodoStatusEnum } from "../enums/todo-status.enum";

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
    name: string;
    description: string;
    status: TodoStatusEnum;
}

export class UpdateTodoDTO {
    name: string;
    description: string;
    status: TodoStatusEnum;
}