colorBox = {
    conf: {
        maxwidth: 200,
        maxheight: 200,
        minwidth: 30,
        minheight: 30,
        playfieldH: 600,
        playfieldW: 800,
        boxes: undefined,
        randW: undefined,
        randH: undefined
    },
    createBoxes: function (count) {
        var boxContainer = document.getElementById('playfield'),
            frag = document.createDocumentFragment(),
            divs,
            box,
            id = "colorbox";
        for (var i = 0; i < count; i++) {
            divs = document.createElement('div');
            divs.className = 'box';
            divs.setAttribute("style",
                "background-color: " + colorBox.randomHex() + "; " +
                "width: " + colorBox.randomWidth() + "px; " +
                "height: " + colorBox.randomHeight() + "px; " +
                "top: " + colorBox.randomPosY() + "px; " +
                "left: " + colorBox.randomPosX() + "px;"
                );
            frag.appendChild(divs);
            boxContainer.appendChild(frag);
        }
        var elements = document.getElementsByTagName('div');
        for(var x=0; x < elements.length; x++) {
            var el = elements[x];
            for (var y in el) {
                if (y == 'className') {
                    if(el[y] == 'box') {
                        colorBox.dragBox(el);
                    }
                }
            }
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
    },
    dragBox: function (elems) {
        function fixPageXY(e) {
            if (e.pageX == null && e.clientX != null ) {
                var html = document.documentElement;
                var body = document.body;

                e.pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
                e.pageX -= html.clientLeft || 0;

                e.pageY = e.clientY + (html.scrollTop || body && body.scrollTop || 0);
                e.pageY -= html.clientTop || 0;
            }
        }
        elems.onmousedown = function () {
            elems.style.position = 'absolute';
            var self = this,
                styleHeight = elems.style.height,
                styleWidth = elems.style.width,
                getWidth = styleWidth.replace('px', ''),
                getHeight = styleHeight.replace('px', '');
                w = getWidth / 2;
                h = getHeight / 2;
            elems.onmousemove = function(e) {
                e = e || event;
                fixPageXY(e);
                console.log(e.pageX);
                self.style.left = e.pageX-w+'px';
                self.style.top = e.pageY-h+'px';
            };
            this.onmouseup = function () {
                document.onmousemove = null;
            };
        };
        elems.ondragstart = function () {
            return false;
        };
    }
};