$(document).ready(function () {
    addThreads();

    $('.submit').click(function(event){
        // console.log (Date.now());
        event.preventDefault();
        console.log('adding comment');
        var send = {
            TableName: "Answers",
            Item: {
                'aId': 'a' + Date.now(),
                'ans': $('.comment').val(),
                'qId': 'q0004',
                'user_id': 's3607170',
                'user_name': 'Alex Jarvis'
            }
        }
        addItem(send);
        // console.log(send);
        // location.reload();
    });
});

function addThreads() {
    var send = {
        TableName: "Answers"
    }
    scanTable(send, handleData);
}

function handleData(item) {

    if (typeof item == 'undefined') {
        console.log("Item is undefined");
    }
    else {
        var items = item.Items;

        items.forEach(element => {
            // console.log(element);
            $('.answer').append(
                '<div class="media mb-4">' +
                '<img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">' +
                '<div class="media-body">' +
                '<h5 class="mt-0">' + element.user_name + '</h5>' + element.ans +
                '</div>' +
                '</div>');
        });
    }
}