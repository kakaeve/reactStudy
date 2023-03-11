class Todo {
  id: string;
  text: string;
  constructor(inputText: string) {
    this.text = inputText;
    this.id = new Date().toISOString();
  }
}

export default Todo;
