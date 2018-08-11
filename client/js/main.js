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
}

function addItem(send) {
    send.reqType = "addItem";
    console.log('adding item');
    console.log(JSON.stringify(send));
    $.ajax({
        type: 'POST',
        datatype: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(send),
        success: function(data){
            location.reload();
            return;
        },
        error: function(){
            // alert('error');
            return;
        }
    });
}

function scanTable(send, handleData) {
    send.reqType = "scanTable";
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
}

function queryTable(send, handleData) {
    send.reqType = "queryTable";
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
}

