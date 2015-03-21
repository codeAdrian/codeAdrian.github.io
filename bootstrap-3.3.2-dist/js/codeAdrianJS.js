$(document).ready(function () {

    $("#img-intro").fadeTo( 1500 , 1);

    $("#a_gallery_jm").click(function () {
        $("#gallery_jm").toggle("slow", function() {
        if ($("#gallery_jm").css('display') == 'none') { $("#a_gallery_jm span").attr('class', 'glyphicon glyphicon-menu-down'); }
        else { $("#a_gallery_jm span").attr('class', 'glyphicon glyphicon-menu-up'); }
        });
    });

    $("#a_gallery_ieee").click(function () {
        $("#gallery_ieee").toggle("slow", function() {
        if ($("#gallery_ieee").css('display') == 'none') { $("#a_gallery_ieee span").attr('class', 'glyphicon glyphicon-menu-down'); }
        else { $("#a_gallery_ieee span").attr('class', 'glyphicon glyphicon-menu-up'); }
        });
    });

    $("#a_gallery_misc").click(function () {
        $("#gallery_misc").toggle("slow", function() {
        if ($("#gallery_misc").css('display') == 'none') { $("#a_gallery_misc span").attr('class', 'glyphicon glyphicon-menu-down'); }
        else { $("#a_gallery_misc span").attr('class', 'glyphicon glyphicon-menu-up'); }
        });
    });

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

        $("#a_projects_top").click(function() {
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

    $("#a_omnivision").click(function() {
    $('html, body').animate({
    scrollTop: $("#g_omnivision").offset().top-50}, 500);
    });

    $("#a_hexagonal").click(function() {
    $('html, body').animate({
    scrollTop: $("#g_hexagonal").offset().top-50}, 500);
    });

    $(".a_computerVision").click(function() {
    $('html, body').animate({
    scrollTop: $("#g_computerVision").offset().top-50}, 500);
    });

    $("#a_imageToASCII").click(function() {
    $('html, body').animate({
    scrollTop: $("#g_imageToASCII").offset().top-50}, 500);
    });

    $("#a_blockRunnerRampage").click(function() {
    $('html, body').animate({
    scrollTop: $("#g_blockRunnerRampage").offset().top-50}, 500);
    });

    $("#a_foodlyApp").click(function() {
    $('html, body').animate({
    scrollTop: $("#g_foodlyApp").offset().top-50}, 500);
    });

    $("#a_foodlyWeb").click(function() {
    $('html, body').animate({
    scrollTop: $("#g_foodlyWeb").offset().top-50}, 500);
    });

    $("#a_easyLearn").click(function() {
    $('html, body').animate({
    scrollTop: $("#g_easyLearn").offset().top-50}, 500);
    });

    $("#a_codeAdrianWeb").click(function() {
    $('html, body').animate({
    scrollTop: $("#g_codeAdrianWeb").offset().top-50}, 500);
    });

    $("#a_kernelFlter").click(function() {
    $('html, body').animate({
    scrollTop: $("#g_kernelFlter").offset().top-50}, 500);
    });

    $(".a_roboticsProjects").click(function() {
    $('html, body').animate({
    scrollTop: $("#g_roboticsProjects").offset().top-50}, 500);
    });

    $("#a_histogram").click(function() {
    $('html, body').animate({
    scrollTop: $("#g_histogram").offset().top-50}, 500);
    });
});