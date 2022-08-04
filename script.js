
/* This was too complicated for me! XD*/
var indexValue = 1;

showImg(indexValue);

function btn_slide(e)
{
	showImg(indexValue = e);
}

function side_slide(e) 
{
	showImg(indexValue += e);
}

function showImg(e)
{
	graphicAnimation();
	
  var i;
  const img = document.querySelectorAll('img');
  const slider = document.querySelectorAll('.btn-sliders span');
  if(e > img.length){indexValue = 1}
  if(e < 1){indexValue = img.length}
  for(i = 0; i < img.length; i++){
	img[i].classList.remove("on");
  }
  
  for(i = 0; i < slider.length; i++){
    slider[i].classList.remove("on");
  }
  

  img[indexValue-1].classList.add("on");
  
  slider[indexValue-1].classList.add("on");
  
}

function graphicAnimation()
{
	var el = document.querySelector("#title");
	
	if(el.classList.contains("animate"))
		document.querySelector("#title").classList.remove("animate");
	else
		document.querySelector("#title").classList.add("animate");
}


/* Lets use some keyboard! */
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

	// left arrow
    if (e.keyCode == '37')
    	side_slide(-1)

	
	// right arrow
    if (e.keyCode == '39')
    	side_slide(1)

}
