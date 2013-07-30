colorBox = {
    conf: {
        maxwidth: 200,
        maxheight: 200,
        minwidth: 30,
        minheight: 30,
        playfieldTop: undefined,
        playfieldLeft: undefined,
        playfieldRight: undefined,
        playfieldBottom: undefined
    },
    createBoxes: function (count) {
        var boxContainer = document.getElementById('playfield'),
            frag = document.createDocumentFragment(),
            divs,
            el,
            id = "colorbox";
        for (var i = 0; i < count; i++) {
            divs = document.createElement('div');
            divs.className = id + (i + 1) + ' box';
            divs.setAttribute("style",
                "background-color: " + colorBox.randomHex() + "; " +
                "width: " + colorBox.randomWidth() + "px; " +
                "height: " + colorBox.randomHeight() + "px; "// +
                "top: " + colorBox.randomPosY() + "px; " +
                "left: " + colorBox.randomPosX() + "px;"
                );
            frag.appendChild(divs);
            boxContainer.appendChild(frag);
        }
    },
    randomWidth: function () {
        return Math.floor(Math.random() * (colorBox.conf.maxwidth - colorBox.conf.minwidth + 1) + colorBox.conf.minwidth + 1);
    },
    randomHeight: function () {
        return Math.floor(Math.random() * (colorBox.conf.maxheight - colorBox.conf.minheight + 1) + colorBox.conf.minheight + 1);
    },
    randomHex: function () {
        var letters = "0123456789ABCDEF".split(''),
            color = "#";

        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 15)];
        }

        return color;
    },
    randomPosY: function () {
        return Math.floor(Math.random() * (colorBox.conf.playfieldH - colorBox.conf.maxheight));
    },
    randomPosX: function () {
        return Math.floor(Math.random() * (colorBox.conf.playfieldW - colorBox.conf.maxwidth));
    }
};