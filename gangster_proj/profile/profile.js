
$(document).ready(function () {

    $('#sign-in').click(signInClick());
    $('#crew-btn').click(btnclick());
    $("#mugbtn").click(mugbtnclick());
});

function signInClick() {

    return function(event) {

        event.preventDefault();

        var id = $('#id-input').val();
        var password = $('#password-input').val();
        $.ajax({
            url: 'http://localhost:8080/gangstergram/api/gangster/' + id,
            async: true,
            success: authenticate,
            error: errorCallback
        });
    }
}

function errorCallback() {

    location.reload(); 
}

function authenticate(gangster) {

    var password = $('#password-input').val();


    if (password === gangster.password) {

         return window.location.href="/gangster_proj/profile/profile.html";
    } 
        
    location.reload();
}

function mugbtnclick() {

    return function(event) {

        event.preventDefault();
        return window.location.href="/gangster_proj/choose-mission/choose-mission.html";
    }

}

function btnclick() {

    return function(event) {

        event.preventDefault();
        return window.location.href="/gangster_proj/crew-profile/crew-profile.html";
    }
}



function hideFromPopo() {

    $("#").click(fadeContainer);

}

function fadeContainer() {
    document.getElementById("container").style.animation = "fade in";
}