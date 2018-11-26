// GET PAGE URL END
let urlSnipper = (path) => {
    page = path.split("/").pop();
    return page;
}
let pathName = window.location.pathname;
let sitePathPageName = urlSnipper(pathName);

console.log(sitePathPageName);

// STYLE SELECTED NAV ITEM
  let navItems = document.getElementsByClassName('navlink');
    // console.log(navItems[0].getAttribute("href"));
    for (i = 0; i < navItems.length; i++) {
        console.log(i);
        let pageName = urlSnipper(navItems[i].getAttribute("href"));
        console.log(sitePathPageName, pageName);
        if (pageName === sitePathPageName) {
            console.log(navItems[i]);
            navItems[i].style.fontSize = "24px";
        }
    }

//////INDEX PAGE/////////////

//cycle words in banner
if (sitePathPageName === 'index.html') {
    console.log('here');
    let bannerTargeting = () => {

        let banner = document.getElementById("banner-home");
        let targeting = setInterval(bannerChange, 5000);

        function bannerChange() {

            if (banner.innerHTML.indexOf("planning") !== -1) {
                console.log('planning');
                banner.innerHTML = "<h1>targeting nutrients?</h1>";
                clearInterval(targeting);
                bannerCounting();
            }
        }
    }
    // console.log('heres');

    let bannerCounting = () => {
        // console.log('here');
        let banner = document.getElementById("banner-home");
        let counting = setInterval(bannerChange, 5000);

        function bannerChange() {
            // banner.innerHTML="ha"; 
            if (banner.innerHTML.indexOf("targeting") !== -1) {
                console.log('targeting');
                banner.innerHTML = "<h1>counting calories?</h1>";
                clearInterval(counting);
                bannerSmallBus();
            }
        }
    }

    let bannerSmallBus = () => {
        let banner = document.getElementById("banner-home");
        let smallBus = setInterval(bannerChange, 5000);

        function bannerChange() {
            // banner.innerHTML="ha"; 
            if (banner.innerHTML.indexOf("counting") !== -1) {
                console.log('targeting');
                banner.innerHTML = "<h1>small business?</h1>";
                clearInterval(smallBus);
                bannerPlanning();
            }
        }
    }
    let bannerPlanning = () => {
        let banner = document.getElementById("banner-home");
        let planning = setInterval(bannerChange, 5000);

        function bannerChange() {
            // banner.innerHTML="ha"; 
            if (banner.innerHTML.indexOf("small") !== -1) {
                console.log('targeting');
                banner.innerHTML = "<h1>planning healthy meals?</h1>";
                clearInterval(planning);
                bannerTargeting();
            }
        }
    }
    bannerTargeting();
}


////////INFO PAGE///////////////////
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
        let pos = 0;
        let moveInt = setInterval(move, 10);

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
        let pos = 0;

        let texts = document.getElementsByClassName('text');
        for (i = 0; i < texts.length; i++) {
            texts[i].style.display = "none";
        }
        let titles = document.getElementsByClassName('title');
        for (i = 0; i < titles.length; i++) {
            let toppos = (i * 40) + 100;
            // console.log(toppos);
            titles[i].style.top = toppos + 'px';
            titles[i].style.display = "block";
            titles[i].style.left = '80px';
            console.log(titles[i]);
        }
    }

    // SET POSITION ABS TITLES EQUEALLY SPACED
    let titles = document.getElementsByClassName('title');

    for (i = 0; i < titles.length; i++) {
        let toppos = (i * 40) + 100;
        // console.log(toppos);
        titles[i].style.top = toppos + 'px';
        titles[i].style.left = "80px";
    }
}











/////////ABOUT PAGE////////////////////////////////
//modal for legal terms
if (sitePathPageName === 'about.html') {
    let modal = document.getElementById('legal-modal');
    let modalBtn = document.getElementsByClassName("terms")[0];
console.log(modalBtn);
    let close = document.getElementById("close-modal");
    modalBtn.onclick = () => {
        modal.style.display = "block";
        let wrapper = document.getElementsByClassName('main-about');
        console.log(wrapper);
        wrapper[0].style.display.backgroundColor = "rgba(255,255,255,.5)";

    }
    close.onclick = () => {
        modal.style.display = "none";
    }
    // close modal from outside modal
    window.onclick = (event) => {
        console.log('window');
        if (event.target == modal) {
            modal.style.display = "none";

        }
    }
}

