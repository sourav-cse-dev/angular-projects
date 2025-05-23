import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  imports: [CommonModule],
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.scss',
})
export class StopwatchComponent {
  elapsedTime = 0;
  isRunning = false;
  intervalRef: any;
  status = '';

  startStop() {
    this.isRunning ? this.stop() : this.start();
  }

  private start() {
    this.isRunning = true;
    this.intervalRef = setInterval(() => {
      this.elapsedTime += 1;
    }, 100);
    this.status = 'Stopwatch started';
  }

  private stop() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    this.status = 'Stopwatch stopped';
  }

  reset() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    this.elapsedTime = 0;
    this.status = 'Stopwatch reset';
  }
}
