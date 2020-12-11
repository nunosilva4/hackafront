
var crewId;

var avatarForm = "/gangster_proj/resources/avatars/"

$(document).ready(function () {

    $('#select').hide();
    $('#avatar1').hide();
    $('#avatar2').hide();
    $('#avatar3').hide();
    $('#avatar4').hide();
    $('#avatar5').hide();
    $('#submit-btn').click(submitClick());
    //$('#sign-up').click(signUpClick());
});

function submitClick() {

    return function (event) {

        event.preventDefault();
        successCallback();
    }

}

function errorCallback(error) {


    console.log(error);


}

function successCallback() {

    document.getElementById('register').style.display = "none";
    document.getElementById('select').style.display = "inline";
    chooseCrew();
}

function chooseCrew() {


    $(".crew1").click(function () {
        console.log("lkzsdkjsd")
        crewId = 1;
        $.ajax({
            url: 'http://localhost:8080/gangstergram/api/crew/1',
            async: true,
            success: pickcrew,
            error: errorcrew
        });
    })

    $(".crew2").click(function () {
        crewId = 2;
        $.ajax({
            url: 'http://localhost:8080/gangstergram/api/crew/2',
            async: true,
            success: pickcrew,
            error: errorcrew
        });
    })

    $(".crew3").click(function () {
        crewId = 3;
        $.ajax({
            url: 'http://localhost:8080/gangstergram/api/crew/3',
            async: true,
            success: pickcrew,
            error: errorcrew
        });
    })

    $(".crew4").click(function () {
        crewId = 4;
        $.ajax({
            url: 'http://localhost:8080/gangstergram/api/crew/4',
            async: true,
            success: pickcrew,
            error: errorcrew
        });
    })

    $(".crew5").click(function () {
        crewId = 5;
        $.ajax({
            url: 'http://localhost:8080/gangstergram/api/crew/5',
            async: true,
            success: pickcrew,
            error: errorcrew
        });
    })
}

function pickcrew(response) {

    //crewId = response.id;
    console.log(crewId);
    document.getElementById('select').style.display = "none";
    switch (response.id) {
        case 1:
            document.getElementById('avatar1').style.display = "inline";
            chooseVagosAvatar();
            break;
        case 2:
            document.getElementById('avatar2').style.display = "inline";
            chooseYardieAvatar();
            break;
        case 3:
            document.getElementById('avatar3').style.display = "inline";
            chooseBloodAvatar();
            break;
        case 4:
            document.getElementById('avatar4').style.display = "inline";
            chooseYakuzaAvatar();
            break;
        case 5:
            document.getElementById('avatar5').style.display = "inline";
            chooseAryanAvatar();
            break;
    }
}

function errorcrew() {

}

function chooseVagosAvatar() {

    $("#vfemale1").click(function () {
        avatarForm += "losvagos/LV_Female_1.png"
        submitForm();
    })

    $("#vfemale2").click(function () {
        avatarForm += "losvagos/LV_Female_2.png"
        submitForm();
    })

    $("#vfemale3").click(function () {
        avatarForm += "losvagos/LV_Female_3.png"
        submitForm();
    })

    $("#vmale1").click(function () {
        avatarForm += "losvagos/LV_Male_1.png"
        submitForm();
    })

    $("#vmale2").click(function () {
        avatarForm += "losvagos/LV_Male_2.png"
        submitForm();
    });
}

function chooseYardieAvatar() {

    $("#yfemale1").click(function () {
        avatarForm += "yardies/Yardie_Female_1.png"
        submitForm();
    })

    $("#yfemale2").click(function () {
        avatarForm += "yardies/Yardie_Female_2.png"
        submitForm();
    })
    $("#ymale1").click(function () {
        avatarForm += "yardies/Yardie_Male_1.png"
        submitForm();
    })
    $("#ymale2").click(function () {
        avatarForm += "yardies/Yardie_Male_2.png"
        submitForm();
    })

}

function chooseBloodAvatar() {


    $("#bfemale1").click(function () {
        avatarForm += "bloods/Bloods_Female_1.png"
        submitForm();
    })

    $("#bfemale2").click(function () {
        avatarForm += "bloods/Bloods_Female_2.png"
        submitForm();
    })
    $("#bmale1").click(function () {
        avatarForm += "bloods/Bloods_Male_1.png"
        submitForm();
    })
    $("#bmale2").click(function () {
        avatarForm += "bloods/Bloods_Male_2.png"
        submitForm();
    })

}

function chooseAryanAvatar() {

    $("#afemale1").click(function () {
        avatarForm += "aryans/AR_Female_1.png"
        submitForm();
    })

    $("#afemale2").click(function () {
        avatarForm += "aryans/AR_Female_2.png"
        submitForm();
    })
    $("#amale1").click(function () {
        avatarForm += "aryans/AR_Male_1.png"
        submitForm();
    })
    $("#amale2").click(function () {
        console.log('batata');
        avatarForm += "aryans/AR_Male_2.png"
        submitForm();
    });
}

function chooseYakuzaAvatar() {

    $("#yfemale1").on('click', function () {
        avatarForm += "yakuza/Yakuza_F_1.png"
        submitForm();
    })

    $("#yfemale2").click(function () {
        avatarForm += "yakuza/Yakuza_F_2.png"
        submitForm();
    })
    $("#yfemale3").click(function () {
        avatarForm += "yakuza/Yakuza_F_3.png"
        submitForm();
    })
    $("#yfemale4").click(function () {
        avatarForm += "yakuza/Yakuza_F_4.png"
        submitForm();
    })

    $("#yfemale5").click(function () {
        avatarForm += "yakuza/Yakuza_F_5.png"
        submitForm();
    })

    $("#ymale1").click(function () {
        avatarForm += "yakuza/Yakuza_M_1.png"
        submitForm();
    })
    $("#ymale2").click(function () {
        avatarForm += "yakuza/Yakuza_M_2.png"
        submitForm();
    })
    $("#ymale3").click(function () {
        avatarForm += "yakuza/Yakuza_M_3.png"
        submitForm();
    })

    $("#ymale4").click(function () {
        avatarForm += "yakuza/Yakuza_M_4.png"
        submitForm();
    })
    $("#ymale5").click(function () {
        avatarForm += "yakuza/Yakuza_M_5.png"
        submitForm();
    });
}

function submitForm() {

    console.log($('#street-name-input').val());
    console.log($('#real-name-input').val());
    console.log($('#email-input').val())
    console.log($('#password-input').val());
    console.log(avatarForm);
    $.ajax({
        url: 'http://localhost:8080/gangstergram/api/gangster',
        type: 'POST',
        data: JSON.stringify({
            streetName: $('#street-name-input').val(),
            realName: $('#real-name-input').val(),
            email: $('#email-input').val(),
            password: $('#password-input').val(),
            avatar: avatarForm
        }),
        async: true,
        contentType: 'application/json',
        success: savecrew,
        //success: loadProfilePage,
        error: errorCallback

    });
}

function savecrew(response) {
    console.log(response)
    gangsterId = response.id;
    console.log(gangsterId);
    console.log(crewId);
    $.ajax({
        url: 'http://localhost:8080/gangstergram/api/gangster/' + gangsterId + '/selectcrew/' + crewId,
        type: 'PUT',
        //data: crewId,
        async: true,
        //contentType: 'application/json',
        success: loadProfilePage,
        error: errorCallback,
        crossDomain: true,
    });
}

function loadProfilePage() {
    window.location.href = "/gangster_proj/profile/profile.html";
}


