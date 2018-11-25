// GET PAGE URL END
let urlSnipper = (path) => {
    page = path.split("/").pop();
    return page;
}
let pathName = window.location.pathname;
let sitePathPageName = urlSnipper(pathName);

// STYLE SELECTED NAV ITEM
if (sitePathPageName === 'info.html') {
    let navItems = document.getElementsByClassName('navlink');
    // console.log(navItems[0].getAttribute("href"));
    for (i = 0; i < navItems.length; i++) {
        console.log(i);
        let pageName = urlSnipper(navItems[i].getAttribute("href"));
        console.log(sitePathPageName, pageName);
        if (pageName === sitePathPageName) {
            console.log(navItems[i]);
            navItems[i].style.fontSize = "26px";
        }
    }

    // ANIMATE LIST ITEMS, POP UP INFO
    function moveTitle (elem) {
        var pos = 0;
        // var ypos = 0;
        var moveInt = setInterval(move, 20);

        function move() {
            if (pos == 40) {
                clearInterval(moveInt);
                elem.style.pointerEvents = "auto";
            } else {
                elem.style.pointerEvents = "none";
                pos++;
                // console.log(pos);
                elem.style.top = pos + 40 + 'px';
                elem.style.left = pos + 'px';

                let texts = document.getElementsByClassName('text');
                let titles = document.getElementsByClassName('title');
                // let label = document.getElementsByClassName('')
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

        var texts = document.getElementsByClassName('text');
        for (i = 0; i < texts.length; i++) {
            texts[i].style.display = "none";
        }
        var titles = document.getElementsByClassName('title');
        for (i = 0; i < titles.length; i++) {
            var toppos = (i * 40) + 100;
            // console.log(toppos);
            titles[i].style.top = toppos + 'px';
            titles[i].style.display = "block";
            titles[i].style.left = '80px';
            console.log(titles[i]);
        }
    }

    // SET POSITION ABS TITLES EQUEALLY SPACED
    var titles = document.getElementsByClassName('title');

    for (i = 0; i < titles.length; i++) {
        var toppos = (i * 40) + 100;
        // console.log(toppos);
        titles[i].style.top = toppos + 'px';
        titles[i].style.left = "80px";
    }
}


    