import { Component, OnInit } from '@angular/core';

import {TaskService} from "../../services/task.service";
import {Task} from '../../Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }
  onDelete(task: Task):void {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter((taskItem) => taskItem.id !== task.id));
  }
  toggleTask(task:  Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }


  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
