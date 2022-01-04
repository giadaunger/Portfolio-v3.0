let indexValue = 1;
showImg(indexValue);

function bottomSliders(e){
    showImg(indexValue = e);
}

function sideSlide(e){
    showImg(indexValue += e);
}

function showImg(e){
    let i;
    let img = document.querySelectorAll('.SHimg'); 
    let sliders = document.querySelectorAll('.bottomSliders span'); 

    if(e > img.length){
        indexValue = 1;
    }
    if(e < 1){
        indexValue = img.length;
    }
    
    for(i = 0; i < img.length; i++){
        img[i].style.display = 'none';
    }

    for(i = 0; i < sliders.length; i++){
        sliders[i].style.background = '#262626';
    }
    
    img[indexValue -1].style.display = 'block';
    sliders[indexValue -1].style.background = '#e290e2';
}


function navFunc() {
    const x = document.getElementById("dropDownMenu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function scrollTopAnimated() {
    $("html, body").animate({ scrollTop: "0" });
}