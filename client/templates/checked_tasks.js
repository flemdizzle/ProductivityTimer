Template.checkedTasks.helpers({
    tasks: function() {
        return Tasks.find({checked: true});
    }
});