function getItem(send, handleData){ 
    // console.log(JSON.stringify(send));
    // var item;
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