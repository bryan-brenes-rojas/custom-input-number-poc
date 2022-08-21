import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @ViewChild('inputElement', { static: true }) inputElement!: MatInput;
  emailFormControl = new FormControl(0, []);
  min = 0;
  max = 100;
  step = 1;

  constructor() {}

  ngOnInit(): void {}

  public arrowClick(event: MouseEvent, dir: 'up' | 'down'): void {
    event.preventDefault();
    const currentValue = this.emailFormControl.value ?? 0;
    const newValue =
      dir === 'up' ? currentValue + this.step : currentValue - this.step;
    this.emailFormControl.setValue(newValue);
  }
}
