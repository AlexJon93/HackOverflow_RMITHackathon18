var password

$(document).ready(function(){
    $(".submit-btn").click(function(){
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