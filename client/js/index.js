$(document).ready(function(){
    $(".submit-btn").click(function(){
        var password = $(".password").val();
        var item = getItem("User", "user_id", $('.user').val());

        if(typeof item == 'undefined') {
            console.log("Item is undefined");
        }
        else if(item.password === password) {
            $(".result").text("Password matches");
        }
        else {
            $(".result").text("Passwords do not match");
        }
    });
});