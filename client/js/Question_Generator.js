$(document).ready(function () {

    $('.submit').click(function(){
        // event.preventDefault();
        // console.log('adding comment');
        var send = {
            TableName: "Questions",
            Item: {
                'qId': 'q' + Date.now(),
                'timestamp': new Date(),
                'course': 'Electronics',
                'title': $('.title').val(),
                'views': 0
            }
        }
        addItem(send);
    });
});