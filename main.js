$(document).ready(function () {
    $("img").click(function () {
        var houseNum = $(this).attr("id");

        $.get("https://anapioficeandfire.com/api/houses/" + houseNum + "", function (res) {

            var html_str = "<p>Name: " + res.name + "</p>";
            html_str += "<p>Words: " + res.words + "</p>";
            html_str += "<p>Titles: " + res.titles + "</p>";

            $(".house-details").html(html_str);
        }, "json");
    });
});
