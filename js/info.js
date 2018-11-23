function moveTitle(elem) {
    // console.log(elem.nextElementSibling.innerHTML);

    // elem.style.pointerEvents="none";
    var pos = 0;
    // var ypos = 0;
    var moveInt = setInterval(move, 80);

    function move() {
        if (pos == -15) {
            clearInterval(moveInt);
            elem.style.pointerEvents = "auto";
        } else {
        	elem.style.pointerEvents = "none";
            pos--;
            // console.log(pos);
            elem.style.top = pos+70 + 'px';
            elem.style.left = pos + 'px';
            
            var texts = document.getElementsByClassName('text');
            var titles = document.getElementsByClassName('title');
            for (i = 0; i < texts.length; i++) {
                texts[i].style.display = "none";
            }
            for (i = 0; i < titles.length; i++) {
                titles[i].style.display = "none";
            }
            elem.style.display = "block";
            elem.nextElementSibling.style.top = "120px";
            elem.nextElementSibling.style.display = "block";
        }
    }
}

function moveBack(elem) {
  	console.log('here');
    var pos = 0;
    
    // var moveInt = setInterval(move, 100);

    // // function move() {
    //     if (pos == 40) {
    //         clearInterval(moveInt);          
    //       
    //     } else {

    //         pos++;
            
           var texts = document.getElementsByClassName('text');
            for (i = 0; i < texts.length; i++) {
                texts[i].style.display = "none";
            } 
            
            
            var titles = document.getElementsByClassName('title');

            for (i = 0; i < titles.length; i++) {
                var toppos = (i * 40) + 100;
                // console.log(toppos);
                titles[i].style.top = toppos + 'px';
                titles[i].style.display="block";
                titles[i].style.left='80px';
                console.log(titles[i]);
              
            }
          
      
    //     }
    // }
}

// SET POSITION ABS TITLES EQUEALLY SPACED
var titles = document.getElementsByClassName('title');

for (i = 0; i < titles.length; i++) {
    var toppos = (i * 40) + 100;
    // console.log(toppos);
    titles[i].style.top = toppos + 'px';
    titles[i].style.left = "80px";
}





