let b = 1,
  c = 1,
  g = 0,
  s = 0,
  i = 0;
const img = document.getElementById("image");
console.log(img.src);

if (img === "http://127.0.0.1:5500/javascript/imageeditor/index.html") {
  document.getElementById("image").style.display = "none";
}
function uploadImage() {
  const file = document.getElementById("upload").files[0];

  const fileURL = URL.createObjectURL(file);

  document.getElementById("image").src = fileURL;
  document.getElementById("image").style.display = "block";
  document.getElementById("uploadlabel").style.display = "none";
  applyFilter();
}
function applyFilter() {
  document.getElementById("image").style.filter = ` brightness(${b})
  contrast(${c})
  grayscale(${g}%)
  sepia(${s}%)
  invert(${i}%)`;
}
function brighthandle() {
  const value = document.getElementById("bright").value;
  b = (value * 2) / 100;
  applyFilter();
}
function contrasthandle() {
  const value = document.getElementById("contrast").value;
  c = (value * 2) / 100;
  applyFilter();
}
function grayscaleh() {
  const value = document.getElementById("gray").value;
  g = value;
  applyFilter();
}
function sepiahandle() {
  const value = document.getElementById("sepia").value;
  s = value;
  applyFilter();
}
function inverthandle() {
  const value = document.getElementById("invert").value;
  i = value;
  applyFilter();
}
function reset() {
  b = 1;
  c = 1;
  g = 0;
  s = 0;
  i = 0;

  applyFilter();
  document.getElementById("bright").value = "50";
  document.getElementById("contrast").value = "50";
  document.getElementById("sepia").value = "0";
  document.getElementById("invert").value = "0";
  document.getElementById("gray").value = "0";
}
function download() {
  if (img.src === "http://127.0.0.1:5500/javascript/imageeditor/index.html") {
    alert("Please Upload the Image First");
    return;
  }
  if (!img.complete) {
    alert("Image Upload is in Progress. Please wait....");
    return;
  }

  const canvas = document.createElement("canvas");

  const ct = canvas.getContext("2d");

  //fetch the original width and height of image
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  const filter = getComputedStyle(img).filter;
  ct.filter = filter === "none" ? "none" : filter;
  ct.drawImage(img, 0, 0, canvas.width, canvas.height);
  const dataurl = canvas.toDataURL("image/png");
  const anchortag = document.createElement("a");
  anchortag.href = dataurl;
  anchortag.download = "editedImage.png";
  document.body.appendChild(anchortag);
  anchortag.click();
  document.body.removeChild(anchortag);
}
