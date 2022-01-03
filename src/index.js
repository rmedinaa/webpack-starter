import './styles.css';
import {Todo,TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

console.log(todoList.todos);

todoList.todos.forEach(todo => crearTodoHtml(todo));
//Opción alterna a esta sintaxis
//todoList.todos.forEach(crearTodoHtml()); Se usa cuando solo hay un argumento

console.log('todos',todoList.todos);