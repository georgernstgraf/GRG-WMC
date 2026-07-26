export default class TodoItem {
  constructor(text, completed = false, priority = 3) {
    this.text = text;
    this.completed = completed;
    this.priority = priority;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  get priority() {
    return this._priority;
  }

  set priority(value) {
    if (!Number.isInteger(value) || value < 1 || value > 5) {
      throw new Error('Priority must be an integer between 1 and 5.');
    }

    this._priority = value;
  }
}