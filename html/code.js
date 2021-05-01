
/* MAIN */

function fixes() {
    resize_fonts();
}


function resize_fonts() {

    console.log(ro.layout);

    var maxPages = 2;
    var maxIterations = 10;


    var default_font_size = 11;
    var default_line_height = 1.2;

    var count = 0
    while (ro.layout.numberOfPages > maxPages && count < maxIterations) {
        var nodes = document.querySelectorAll(".autofit");
        default_font_size = default_font_size * 0.99;
        default_line_height = default_line_height * 0.99;

        for (var i=0; i<nodes.length; i++) {
            var node = nodes[i];
            node.style.fontSize = default_font_size + "pt";
            node.style.lineHeight = default_line_height + "em";
        }
        ro.layout.forceRelayout();
        count++;
    }

    console.log(ro.layout);
}

