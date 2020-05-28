const div = document.createElement("div");
div.className = 'demo';
document.body.appendChild(div);

let dragging = false;
let lastX;
let lastY;
div.onmousedown = function (e) {
  dragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
}

document.onmousemove = function (e) {
  if (dragging) {
    let deltaX = e.clientX - lastX;
    let deltaY = e.clientY - lastY; //计算鼠标移动的相对距离
    let top = parseInt(div.style.top) || 0; //计算出当前div位置
    let left = parseInt(div.style.left) || 0;
    let resX = left + deltaX;
    let resY = top + deltaY;
    if (resX < 0) resX = 0;
    if (resY < 0) resY = 0;


    div.style.left = resX + 'px'; 
    div.style.top = resY + 'px';

    lastX = e.clientX;
    lastY = e.clientY;
  }
}

document.onmouseup = function (e) {
  dragging = false;
}
