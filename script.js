

colorBox = {
    conf: {
        maxwidth: 200,
        maxheight: 200,
        minwidth: 30,
        minheight: 30
    },
    createBoxes: function (name) {
        var boxContainer = document.getElementById('playfield'),
            frag = document.createDocumentFragment(),
            divs,
            id = "colorbox";
        for (var i = 0; i < name; i++) {
            divs = document.createElement('div');
            divs.setAttribute("id", id + (i+1));
            frag.appendChild(divs);
            boxContainer.appendChild(frag);
        }
    },
    test: function () {
        
    }
};