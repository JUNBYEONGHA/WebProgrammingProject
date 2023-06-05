function canvasimgmaker(canvasname , imgsrc)
  {
    var canvas = document.getElementById(canvasname);
    var context = canvas.getContext("2d");
    var img = new Image();
    img.onload = function(){
      context.drawImage(img, 0, 0, canvas.width , canvas.height);
    }
    img.src = imgsrc;
  }