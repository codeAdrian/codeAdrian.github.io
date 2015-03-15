$(document).ready(function () {
    $("#proLang").click(function () {
        $("#proLang_group").toggle("slow", function() {
        if ($("#proLang_group").css('display') == 'none') { $("#proLang span").attr('class', 'glyphicon glyphicon-menu-down'); }
        else { $("#proLang span").attr('class', 'glyphicon glyphicon-menu-up'); }
        });
    });

    $("#proLangRel").click(function () {
        $("#proLangRel_group").toggle("slow", function() {
        if ($("#proLangRel_group").css('display') == 'none') { $("#proLangRel span").attr('class', 'glyphicon glyphicon-menu-down'); }
        else { $("#proLangRel span").attr('class', 'glyphicon glyphicon-menu-up'); }
        });
    });

    $("#techSkills").click(function () {
        $("#techSkills_group").toggle("slow", function() {
        if ($("#techSkills_group").css('display') == 'none') { $("#techSkills span").attr('class', 'glyphicon glyphicon-menu-down'); }
        else { $("#techSkills span").attr('class', 'glyphicon glyphicon-menu-up'); }
        });
    });

        $("#otherSkills").click(function () {
        $("#otherSkills_group").toggle("slow", function() {
        if ($("#otherSkills_group").css('display') == 'none') { $("#otherSkills span").attr('class', 'glyphicon glyphicon-menu-down'); }
        else { $("#otherSkills span").attr('class', 'glyphicon glyphicon-menu-up'); }
        });
    });

        $("#a_skills_top").click(function() {
    $('html, body').animate({
        scrollTop: 0}, 500);
    });

    $("#a_C_Cpp").click(function() {
    $('html, body').animate({
        scrollTop: $("#C_Cpp").offset().top-50}, 500);
    });

    $("#a_Csharp").click(function() {
    $('html, body').animate({
        scrollTop: $("#Csharp").offset().top-50}, 500);
    });

    $("#a_HTML_CSS").click(function() {
    $('html, body').animate({
        scrollTop: $("#HTML_CSS").offset().top-50}, 500);
    });

    $("#a_JS_JQ").click(function() {
    $('html, body').animate({
        scrollTop: $("#JS_JQ").offset().top-50}, 500);
    });


});