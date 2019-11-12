import { Component, OnInit } from "@angular/core";
import { ToDo } from "../interface/to-do";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  post: ToDo;

  constructor() {}

  ngOnInit() {}
}
