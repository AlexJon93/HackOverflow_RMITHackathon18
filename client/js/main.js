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

