Template.modal.events({
    "click #modal-submit": function(event) {
        event.preventDefault();
        $('#myModal').modal('toggle');
        $.each($('.checked-modal'), function(key, value){
			Tasks.remove($(this).data("id"));
			// need to add insert new user data
			Completed.insert({
				text:$(this).text(),
				completedAt: new Date(),
				owner: Meteor.userId(),
				username: Meteor.user().username
			});
        });
    }
});