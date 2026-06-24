interface Task {
  id: number;
  title: string;
  completed: boolean;
}

class TaskManager {
  private tasks: Task[] = [];

  addTask(title: string): void {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };

    this.tasks.push(newTask);
    console.log(`Task Added: ${title}`);
  }

  completeTask(id: number): void {
    const task = this.tasks.find((t) => t.id === id);

    if (task) {
      task.completed = true;
      console.log(`Task Completed: ${task.title}`);
    } else {
      console.log("Task not found");
    }
  }

  listTasks(): void {
    console.log("\nTask List:");
    this.tasks.forEach((task) => {
      console.log(
        `[${task.completed ? "✓" : " "}] ${task.id} - ${task.title}`
      );
    });
  }
}

// Usage
const manager = new TaskManager();

manager.addTask("Learn TypeScript");
manager.addTask("Push project to GitHub");

manager.listTasks();

const firstTaskId = manager["tasks"][0].id;
manager.completeTask(firstTaskId);

manager.listTasks();