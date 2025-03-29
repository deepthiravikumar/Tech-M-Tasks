const tasks = [
    { name: "HTML Tasks", isCompleted: true, dueDate: "01-12-2025" },
    { name: "CSS Tasks", isCompleted: true, dueDate: "21-06-2025" },
    { name: "Javascript Tasks", isCompleted: false, dueDate: "01-09-2025" },
    { name: "Java Tasks", isCompleted: false, dueDate: "09-05-2025" }
];
function getIncompleteTasks(taskList) {
    return taskList.filter(task => !task.isCompleted);
}

const transformedTask = tasks.map(function (task) {
    const today = new Date().toString().split('T')[0];
    if (task.dueDate < today && !task.isCompleted) {
        task.name = `[Overdue] ${task.name}`;
    }
    return task;
});

const totalTasks = () => tasks.length;
const completedTaskCount = () => tasks.filter(task => task.isCompleted).length;

console.log("Incomplete Tasks:", getIncompleteTasks(tasks));
console.log("Transformed Tasks:", transformedTasks);
console.log("Total Tasks:", totalTasks());
console.log("Completed Tasks:", completedTaskCount());