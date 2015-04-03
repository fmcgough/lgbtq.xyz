(function() {
    var colours = ['rgb(255, 51, 204)',
        'rgb(102, 255, 204)',
        'rgb(0, 255, 0)',
        'rgb(204, 51, 255)',
        'rgb(242, 255, 0)'];
    $("body").css("background-color", colours[0]);

    function change() {
        var colour = $("body").css("background-color");
        var idx = colours.indexOf(colour);
        var newIdx = idx + 1;
        if (newIdx == colours.length) {
            newIdx = 0;
        }
        $("body").css("background-color", colours[newIdx]);
    };

    setInterval(change, 200);
})();
