var password

$(document).ready(function(){

});

function addThreads() {
    var send = {
        TableName: "Questions"
    }
    scanTable(send, handleData);
}

function handleData(item) {

    if(typeof item == 'undefined') {
        console.log("Item is undefined");
    }
    else {
        var items = item.Items;

        items.forEach(element => {
            $('.subbed').append('<li><big><font color="blue"><u>'+ element.Title +'</font></u></big><div class="arrow-up"></div><div class="arrow-down"></div></li>');
            if(element.Views > viewThreshold) {
                $('.popular').append('<li><big><font color="blue"><u>'+ element.Title +'</font></u></big><div class="arrow-up"></div><div class="arrow-down"></div></li>');
            }
        });
    }
}