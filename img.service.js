'use strict';


var gNextId = 1;
var gImgs;

function init() {
    gImgs = createImgs();
    // console.log(gImgs)
    renderImgs(gImgs);
}

function createImgs() {
    var imgs = [];

   imgs.push(createImage('img/1.jpg',['funny']),
        createImage('img/2.jpg',['dog']),
        createImage('img/3.jpg',['dog','baby']),
        createImage('img/4.jpg',['cat']),
        createImage('img/5.jpg',['baby']));

    return imgs;
}

function createImage(url, keywords) {
    return {
        id: gNextId++,
        url,
        keywords,
    };
}


function renderImgs(imgs) {
    var strHtml = imgs.map(function (img) {
        return `
        <img  src='${img.url}' onclick="initMemeEditor(${img.id},this)"  class="img img${img.id}" alt='meme picture'/>
        `
    })
        .join(' ')
        
    document.querySelector('.gallery').innerHTML = strHtml;
}



