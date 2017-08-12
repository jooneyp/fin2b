$("input[type=password]").keyup(function() {
    var re = new RegExp(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&+=])[\w!@#$%^&+=]{8,}$/);

    if (re.test($("#password1").val())) {
        $("#isvalid").removeClass("glyphicon-remove");
        $("#isvalid").addClass("glyphicon-ok");
        $("#isvalid").css("color","#00A41E");
    } else {
        $("#isvalid").removeClass("glyphicon-ok");
        $("#isvalid").addClass("glyphicon-remove");
        $("#isvalid").css("color","#FF0004");
    }

    if ($("#password1").val() == $("#password2").val() && $("#password1").val.length > 8) {
        $("#pwmatch").removeClass("glyphicon-remove");
        $("#pwmatch").addClass("glyphicon-ok");
        $("#pwmatch").css("color","#00A41E");
    } else {
        $("#pwmatch").removeClass("glyphicon-ok");
        $("#pwmatch").addClass("glyphicon-remove");
        $("#pwmatch").css("color","#FF0004");
    }
});
