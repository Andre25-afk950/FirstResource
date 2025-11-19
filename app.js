let video = document.createElement("video");
video.src="Res/res.mp4";
let createVideo = function(){
  let box = document.getElementsByClassName("vidio");
  
  let gambar = new Image();
  gambar.src="Res/thumbnail.jpg";
  
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  let cWidth = canvas.width = 640;
  let cHeight = canvas.height = 320;
  canvas.setAttribute("class","draw")
  box[0].append(canvas);
  gambar.onload = function(){
    ctx.drawImage(gambar,0,0,cWidth,cHeight);
  }
  video.addEventListener("play",dVideo)
    
  function dVideo(){
    ctx.clearRect(0,0,cWidth,cHeight)
    ctx.drawImage(video,0,0,cWidth,cHeight)
    requestAnimationFrame(dVideo);
  }
}

//setTitle
let setTitle = {
 title:"Zhao Lusi ~ Black Veil Bride",
 init:function(){
  let title = document.querySelector(".title");
  title.textContent = this.title; 
 }
}

// set lirik
let setLrc = function(){
  let box = document.querySelector(".lirik")
  let xhr = new XMLHttpRequest();
  
  xhr.open("GET","lirik.txt",true);
  xhr.send();
  
  xhr.onload = function(){
   box.innerHTML = xhr.responseText;
  }
}
function btnPlay(){
    let box = document.getElementsByClassName("vidio");
    let btn = document.createElement("canvas");
    let ctxBtn = btn.getContext("2d");
    let bWidth = btn.width = 75;
    let bHeight = btn.height = 32;
    
    let playImage = new Image();
    playImage.src = "Res/play.png";
    
    box[0].append(btn);
    btn.setAttribute("class","plyBtn")
    
    playImage.onload = function(){
      ctxBtn.drawImage(playImage,0,0,bWidth,bHeight)
    }
    //play button
    btn.addEventListener("click",()=>{
    video.play();
    btn.style.display="none";
    })
    
  }
function update(){
  createVideo();
  setLrc();
  setTitle.init()
  btnPlay();
}
update();
