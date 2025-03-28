import * as ko from "knockout";
const taskStates = {
  pending: "Pending",
  aging: "Aging",
  completed: "Completed",
};

export class Task {
  constructor({ msg, blocking }) {
    this.msg = msg;
    this.blocking = blocking;
    this.Status(taskStates.pending);
  }

  msg;
  blocking;
  Status = ko.observable();

  timeout = window.setTimeout(() => {
    console.warn("this task is aging:", this);
    this.Status(taskStates.aging);
  }, 5000);

  markComplete = () => {
    window.clearTimeout(this.timeout);
    this.Status(taskStates.completed);
  };

  // Should this task block user input?
  IsBlocking = ko.pureComputed(
    () => this.blocking && this.Status() != taskStates.completed
  );

  addStatus = (status) => {
    this.Status(status);
    window.clearTimeout(this.timeout);
  };
}

export class ProgressTask {
  constructor({ msg, blocking }) {
    this.msg = msg;
    this.blocking = blocking;
    this.Status(taskStates.pending);
  }

  msg;
  blocking;
  Status = ko.observable();

  updateProgress = ({ percentDone }) => {
    this.Status(`${parseInt(percentDone * 100)}%`);
  };

  setTimeout = () =>
    window.setTimeout(() => {
      console.warn("this task is aging:", this);
      this.Status(`${this.Status()} (${taskStates.aging})`);
    }, 50000);

  resetTimeout = () => {
    window.clearTimeout(this.timeout);
    this.timeout = this.setTimeout();
  };

  timeout = this.setTimeout();

  markComplete = () => {
    window.clearTimeout(this.timeout);
    this.Status(taskStates.completed);
  };

  // Should this task block user input?
  IsBlocking = ko.pureComputed(
    () => this.blocking && this.Status() != taskStates.completed
  );

  static Create(params) {
    return new ProgressTask(params);
  }
}
