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

});