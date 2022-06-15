'use strict'


var gMeme;
var gCtx;
var gImgObj;

function init(){
    console.log('hi mor ,good lack')
}


function createGmeme(imgId) {
    return {
        selectedImgId: imgId,
        txts: [createTxt('Your Text', 150, 70), createTxt('Your Text', 150, 300)]
    };
}

function initMemeEditor(imgId) {
    toggleView();
    gMeme = createGmeme(imgId);
    initCanvas();
    // renderTxtsEditor();
}
function createTxt(line, x, y) {
    return {
        //object txt = {property:value}
        line: line,
        size: 40,
        align: 'left',
        color: '#000000', // in color picker, if choosing color from platte notice it stays "solid".
        fontFamily: 'Impact',
        isOutline: true,
        lineWidth: 2, // outline width
        strokeStyle: '#ffffff',
        isShadow: false,
        shadowColor: '#000000',
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 0,
        x: x,
        y: y
    };
}

function initCanvas() {

    var canvas = document.querySelector('.meme-canvas');
    gCtx = canvas.getContext('2d');

    gImgObj = new Image();
    gImgObj.src = getImgSrc();

    gImgObj.onload = function () {
        canvas.width = gImgObj.width;
        canvas.height = gImgObj.height;
        gMeme.txts[1].y = gImgObj.height - 70;

        // drawCanvas();
    };
}

function getImgSrc() {
    var imgIdx = gImgs.findIndex(function (img) {
        return gMeme.selectedImgId === img.id;
    });

    return gImgs[imgIdx].url;
}











function toggleView() {
    document.querySelector('.meme').classList.toggle('hidden');
    document.querySelector('.gallery-continer').classList.toggle('hidden');
}

