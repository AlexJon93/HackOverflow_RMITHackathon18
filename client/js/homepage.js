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
            $('.subbed').append(
                '<div>' +
                '<div class="card-body">' +
                  '<a class="clearfix small z-1" href="Electronics.html">' +
                    '<p class="card-text">' +
                        '<h4> '+ element.title +' </h4>' +
                    '</p>' +
                  '</a>' +
                  '<b>Subscribed Course:</b> ' + element.course +
                  '<br>' +
                  '<b>Timestamp:</b>' + element.timestamp +
                  '<b>Views:</b>' + element.views +
                '</div>' +
              '</div>');
            if(element.views > viewThreshold) {
                $('.popular').append(
                    '<div>' +
                    '<div class="card-body">' +
                      '<a class="clearfix small z-1" href="Electronics.html">' +
                        '<p class="card-text">' +
                            '<h4> '+ element.title +' </h4>' +
                        '</p>' +
                      '</a>' +
                      '<b>Subscribed Course:</b> ' + element.course +
                      '<br>' +
                      '<b>Timestamp:</b>' + element.timestamp +
                      '<b>Views:</b>' + element.views +
                    '</div>' +
                  '</div>');
            }
        });
    }
}