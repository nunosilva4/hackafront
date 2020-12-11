
$(document).ready(function () {

    getCrews();

});

function getCrews() {
    $.ajax({
        url: 'http://localhost:8080/gangstergram/api/crews',
        async: true,
        success: successCallback,
        error: errorCallback
    });

}

function errorCallback(request, status, error) {
    return;
}

function successCallback(response) {
    populateCrews(response);
}

function populateCrews() {
   var container = $("crew1");

   container.append($())
}