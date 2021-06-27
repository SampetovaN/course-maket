import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from "../../Task";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() color: string | undefined;
  @Output() btnClick: EventEmitter<Task> = new EventEmitter ()

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.btnClick.emit()
  }
}
