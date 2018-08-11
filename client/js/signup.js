$(document).ready(function(){
    $(".form").submit(function(event){
        event.preventDefault();
        var send = {
            TableName: 'User',
            Item: {
                'user_id': $('.user').val(),
                'password': $('.password').val(),
                'fName': $('.fName').val(),
                'lName': $('.lName').val(),
                'down_votes': 0,
                'up_votes': 0,
                'total_votes': 0
            }
        }
        addItem(send);
    });
});