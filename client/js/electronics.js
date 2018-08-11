const viewThreshold = 10;

$(document).ready(function(){
    addThreads();
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
            if(element.course === 'Electronics') {
                $('.questions').append(
                    '<div class="card mb-4">' +
                
                '<div class="card-body">' +
             '<a class="clearfix small z-1" href="discussion.html">' +
                  '<p class="card-text"><h4>'+ element.title +'</h4></p>' +
                  '</a>' +
                  '<b>Subscribed Course:</b> '+ element.course +' <br>' +
                  '<b>Timestamp:</b> '+ element.timestamp +
                '</div>' +
              '</div>');
            }
        });
    }
}