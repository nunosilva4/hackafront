
$(document).ready(function () {
    getMissions();
});

function getMissions() {
    $.ajax({
        url: 'http://localhost:8080/gangstergram/api/mission',
        async: true,
        success: successCallback,
        error: errorCallback
    });

}

function errorCallback(request, status, error) {
    return;
}

function successCallback(response) {
    populateWithMissions(response);
}

function populateWithMissions(missions) {
    var missionsTable = $('#missionstable').empty();

    missionsTable.append($('<tr>').addClass('tabletop')
        .append($('<td>').append('<b>Title'))
        .append($('<td>').append('<b>Description'))
        .append($('<td>').append('<b>Rep Cost'))
        .append($('<td>').append('<b>Success Rate'))
        .append($('<td>').append('<b>Rep Reward'))
    )

    for (c of missions) {
        missionsTable.append($('<tr>')
            .append($('<td>').append(c.title))
            .append($('<td>').append(c.description))
            .append($('<td>').append(c.repCost))
            .append($('<td>').append(c.successRate * 100 + '%'))
            .append($('<td>').append(c.repReward))
        )
    }
}