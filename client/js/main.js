function getItem(table, keyType, key){

    var mapKey = new Map();
    mapKey.set(keyType, key);
    console.log(JSON.stringify(mapKey));

    var type = keyType;
    var send = {
        TableName: table,
        Key: {
            type: key
        }
    }

    // console.log(JSON.stringify(send));

    $.ajax({
        datatype: "json",
        url: "/form",
        type:   "post",
        data: JSON.stringify(send),
        contentType: "application/json",
        success: function(data){
            item = data;
        }
    });

    return item;
}