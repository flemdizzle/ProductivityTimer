// simple-todos.js
Tasks = new Mongo.Collection("tasks");

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

    "click .start": function() {
      var seconds = 1500;
      var timerID;

      $('.changeDiv').text("Time Remaining:" + seconds);
      timerID = setInterval(updateTime, 1000);

      function updateTime() {
        seconds --;
        $('.changeDiv').text("Time Remaining:" + seconds);
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
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({});
    }
  });
}