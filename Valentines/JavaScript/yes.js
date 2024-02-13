const box = document.querySelector('.rose')
const btn = document.querySelector('.rose-btn')
const glass = document.querySelector('.notmuch')
const tulip = document.querySelector('.tulip')
const tulipOverlay = document.querySelector('.Tulip-overlay')
box.addEventListener('click', function(){
    this.style.opacity = 0;
    setTimeout(() => {
        this.attributes[0].nodeValue = "./Assets/rose.gif"
        this.style.opacity = 1;
    }, 500);
})


btn.addEventListener('click', function(){
  glass.style.opacity = 0;
  setTimeout(() => {
    glass.style.display = "none";
  }, 100);
})

function tulipBtn(){
  tulipOverlay.style.display = "block";
  setTimeout(() => {
   tulipOverlay.style.opacity = 1;
  }, 300);
}

function tulipBtnOff(){
  tulipOverlay.style.opacity = 0;
  setTimeout(() => {
   tulipOverlay.style.display = "none";
  }, 300);
}


tulip.addEventListener('click', () => {
  window.location = `${window.location.origin}/LUVYOU.html`
  
})

