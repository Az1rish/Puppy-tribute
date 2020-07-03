$(document).ready(function() {
    $("#roscoe > div:gt(0)").hide();

    setInterval(function() {
        $('#roscoe > div:first')
            .fadeOut(2000)
            .next()
            .fadeIn(2000)
            .end()
            .appendTo('#roscoe');
    }, 5000);

    $("#morgan > div:gt(0)").hide();

    setInterval(function() {
        $('#morgan > div:first')
            .fadeOut(1500)
            .next()
            .fadeIn(1500)
            .end()
            .appendTo('#morgan');
    }, 4000);

    $("#both > div:gt(0)").hide();

    setInterval(function() {
        $('#both > div:first')
            .fadeOut(2000)
            .next()
            .fadeIn(2000)
            .end()
            .appendTo('#both');
    }, 4500);
});