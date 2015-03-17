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
        scrollTop: $("#box_C_Cpp").offset().top-50}, 500);
    });

    $("#a_Csharp").click(function() {
    $('html, body').animate({
        scrollTop: $("#box_Csharp").offset().top-50}, 500);
    });

    $("#a_HTML_CSS").click(function() {
    $('html, body').animate({
        scrollTop: $("#box_HTML_CSS").offset().top-50}, 500);
    });

    $("#a_JS_JQ").click(function() {
    $('html, body').animate({
        scrollTop: $("#box_JS_JQ").offset().top-50}, 500);
    });

    $("#a_PHP_lang").click(function() {
    $('html, body').animate({
        scrollTop: $("#PHP_lang").offset().top-50}, 500);
    });

    $("#a_MySQL_DB").click(function() {
    $('html, body').animate({
        scrollTop: $("#MySQL_DB").offset().top-50}, 500);
    });

    $("#a_Matlab").click(function() {
    $('html, body').animate({
        scrollTop: $("#Matlab").offset().top-50}, 500);
    });

    $("#a_ASP_MVC").click(function() {
    $('html, body').animate({
        scrollTop: $("#ASP_MVC").offset().top-50}, 500);
    });

    $("#a_frontend").click(function() {
    $('html, body').animate({
    scrollTop: $("#frontend_dev").offset().top-50}, 500);
    });

    $("#a_backend").click(function() {
    $('html, body').animate({
    scrollTop: $("#backend_dev").offset().top-50}, 500);
    });

    $(".a_programming_related").click(function() {
    $('html, body').animate({
    scrollTop: $("#programming_related").offset().top-50}, 500);
    });

        $(".a_technical_skills").click(function() {
    $('html, body').animate({
    scrollTop: $("#technical_skills").offset().top-50}, 500);
    });
});