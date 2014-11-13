Template.modal.events({
    "click #modal-submit": function(event) {
        event.preventDefault();
        $('#myModal').modal('toggle');
        $.each($('.checked-modal'), function(key, value){
			Tasks.remove($(this).data("id"));
			console.log($(this).text());
        });
    }
});