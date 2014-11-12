// simple-todos.js
if (Meteor.isClient) {
  Template.body.events({
    "submit .new-task": function(event) {

      var text = event.target.text.value;

      Tasks.insert({
        text:text,
        createdAt: new Date()
      });

      event.target.text.value = "";

      return false;
    },
    //start the timer
    "click .start": function() {
      var minutes = 0;
      var seconds = 3;
      var timerID;
      $('.start').hide();
      $('.delete').hide();
      $('.new-task').hide();
      $('.changeDiv').show();
      $('.changeDiv').text("Time Remaining: " + minutes + ":" + seconds);
      timerID = setInterval(updateTime, 1000);

      function updateTime() {
        seconds --;
        if(seconds === 0){
          if(minutes === 0){
            clearInterval(timerID);
            $('.changeDiv').hide();
            $('.start').show();
            $('.delete').show();
            $('.new-task').show();
          }else{
            seconds = 59;
            minutes --;
          }
        }
        $('.changeDiv').text("Time Remaining: " + minutes + ":" + seconds);
      }

    }

  });

  Template.task.events({
    "click .toggle-checked": function() {

      Tasks.update(this._id, {$set: {checked: ! this.checked}});
    },
    "click .delete": function() {
      Tasks.remove(this._id);
    }
  });

  // This code only runs on the client
  // remove this after refactoring templates
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({});
    }
  });
}