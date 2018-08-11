function getItem(send, handleData){ 
    send.reqType = "getItem";
    return $.ajax({
        datatype: "json",
        url: "/form",
        type:   "post",
        data: JSON.stringify(send),
        contentType: "application/json",
        success: function(data){
            handleData(data);
        }
    });
    // console.log(item);
}

function addItem(send) {
    $.ajax({
        datatype: "json",
        url: "/form",
        type:   "post",
        data: JSON.stringify(send),
        contentType: "application/json",
        success: function(data){
            handleData(data);
        }
    });
}

