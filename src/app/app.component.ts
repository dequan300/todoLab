import { Component } from "@angular/core";
import { ToDo } from "./interface/to-do";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  todos: ToDo[] = [{ task: "gym", completed: false }];

  // title = "TODO List";
  // newPost: ToDo = {
  //   task: "",
  //   completed: false
  // };
  newToDo: ToDo = {
    task: "",
    completed: false
  };
  newTask() {
    this.todos.push(this.newToDo);
    this.newToDo = { task: "", completed: false };
  }
  delete(index) {
    this.todos.splice(index, 1);
  }
}
