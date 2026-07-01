function video(){
    this.t = document.getElementById("share"),
    this.s = "video_20260701_190335.mp4",
    this.btn = document.getElementById("btn"),
    this.res()
}

video.prototype.res = function(){
    let file = document.createElement("video");
    file.src = this.s;
    file.muted = false;

    file.addEventListener("loadeddata", () => {
        this.act(file);
    });
}

video.prototype.act = function(f){
    let ctx = this.t.getContext("2d");

    this.t.width = 460;
    this.t.height = 800;

    const draw = () => {
        ctx.drawImage(f, 0, 0, this.t.width, this.t.height);

        if (!f.paused && !f.ended) {
            requestAnimationFrame(draw);
        }
    };

    this.btn.addEventListener("click", () => {
        f.play();
        draw();
        this.btn.style.display="none";
    });
}

window.addEventListener("load",()=>{
  new video();
})