const yes = document.getElementsByClassName('btn')[0]
const no = document.getElementsByClassName('btn')[1]
var pageHeightStart = window.document.body.getBoundingClientRect().width
var pageWidth = window.document.body.scrollWidth;
var defaultScale = 1;
var currentTextPosition = 0
var text = ["don't say no.. 😭", "Click yes..", "I am so lonely 🥺", "Haha you can't escape me! 😈", "Click the Yes.. 🤕", 
"You won't regret..", "come on!", "haha try more 😈", "Gonna chase you like you chase that button 💦","Imma make you happy fr fr 👀",
"omg you still going at it? 😰", "heyyy come on... 😩"]
const funnyText = document.querySelector('.funny_text')
/* redirects */

yes.addEventListener('click', function(){
  window.location = window.document.baseURI + 'yes.html'
})

function omg(){
  funnyText.innerHTML = "really?...😳"
}

function leave(){
  funnyText.innerHTML = text[4]
}


// default position in text
function setText(position){
  funnyText.innerHTML = text[position]
}

setText(currentTextPosition)

// triggers random movement 
function startMotion(){
    no.style.position = 'absolute'
    no.style.top =  `${(Math.random() * 700 ).toFixed(0)}px`
    no.style.right =  `${(Math.random() * 700).toFixed(0)}px`
    no.style.left =  `${(Math.random() * 700).toFixed(0)}px`
    no.style.bottom =  `${(Math.random() * 700).toFixed(0)}px`
}




no.addEventListener('click', function(){


  currentTextPosition = Math.ceil((Math.random() * 11))

  setText(currentTextPosition)

    
    yes.style.transform = `scale(${(defaultScale += 0.4).toFixed(2)})`
    
    if (defaultScale > 2.00) {
      
      
      startMotion();
      
        
    }
    let currentPageHeight = window.document.body.getBoundingClientRect().width

    if (pageHeightStart > currentPageHeight) {
      console.log('yes')
      startMotion()
    }
   
})

