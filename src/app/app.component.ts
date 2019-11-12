import { Component } from "@angular/core";
import { ToDo } from "./interface/to-do";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  todos: ToDo[] = [];

  // title = "TODO List";
  // newPost: ToDo = {
  //   task: "",
  //   completed: false
  // };

  newTask(newInput) {
    let newPost: ToDo = { task: "", completed: false };
    this.todos.push(newPost);
  }
}
