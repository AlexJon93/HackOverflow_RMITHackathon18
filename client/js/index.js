var password

$(document).ready(function(){
    $(".form").submit(function(event){
        event.preventDefault();
        password = $(".password").val();
        var send = {
            TableName: "User",
            Key: {
                "user_id": $('.user').val()
            }
        }
        getItem(send, handleData);
        // console.log(item);
    });
});

function handleData(item) {

    console.log(item);
    if(typeof item == 'undefined') {
        console.log("Item is undefined");
    }
    else if(item.password === password) {
        $(".result").text("Password matches");
    }
    else {
        $(".result").text("Passwords do not match");
    }
}