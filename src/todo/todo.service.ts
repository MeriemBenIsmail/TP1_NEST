/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Todo } from './Modal/todo.modal';
import { v4 as uuid4 } from 'uuid';
import { CreateTodoDTO, FindTodoResponseDTO, UpdateTodoDTO } from './dto/todo.dto';

@Injectable() 
export class TodoService {
    constructor() {
        this.todos = []
    }
    private todos: Todo[] ;

    
    getTodoById(todoId: string) : FindTodoResponseDTO {
        return this.todos.find((todo) => {
            return todo.id === todoId;
        });
    }
    
    deleteTodoById( todoId: string) : string {
        this.todos = this.todos.filter(todo => todo.id !== todoId);
        return todoId;
    }
   
    updateTodoById(params,todoId: string): UpdateTodoDTO {
        let updatedTodo ;
        this.todos = this.todos.map((todo) => {
           if(todo.id === todoId){
            updatedTodo = {...todo,...params};
            return updatedTodo;
           }
           return todo
        })
        return updatedTodo
        
    }

    getTodos() : FindTodoResponseDTO[]{
       
        return this.todos;
    }
  
    addTodo(body: CreateTodoDTO): CreateTodoDTO {
        let newTodo = new Todo();
        newTodo.id = uuid4();
        newTodo = {...newTodo,...body}
        
        this.todos.push(newTodo);

        return newTodo;
    }
}