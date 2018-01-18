function taskController(rootElement) {

    taskView(rootElement, tasks, {
        onDone,
        onDelete,
        onMove
    });

    taskAddFormView(rootElement, {
        onSubmit
    });

    function onDone(task, status) {
        tasks.done(task, status);
    }

    function onDelete(task) {
        tasks.delete(task);
    }

    function onSubmit(text) {
        tasks.add(text);
    }

    function onMove(task) {
        tasks.move(task);
    }
}