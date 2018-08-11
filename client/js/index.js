$(document).ready(function(){
    $(".submit-btn").click(function(){
        $.ajax({
            datatype: "json",
            url: "/form",
            type:   "post",
            data: JSON.stringify({"user": $(".user").val(), "password": $(".password").val()}),
            contentType: "application/json",
            success: function(data){
                var result = data.result;
                if(result)
                {
                    $(".result").text("User exists");
                }
                else
                {
                    $(".result").text("User does not exist");
                }
            },
        });
    });
});