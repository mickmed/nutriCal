// GET PAGE URL END
let urlSnipper = (path) => {
    page = path.split("/").pop();
    return page;
}
let pathName = window.location.pathname;
let sitePathPageName = urlSnipper(pathName);

//////INDEX PAGE/////////////
//cycle words in banner
if (sitePathPageName === 'index.html') {
    console.log('here');
    let bannerTargeting = () => {

        var banner = document.getElementById("banner-home");
        // var pos = 0;
        var targeting = setInterval(bannerChange, 5000);

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
        var banner = document.getElementById("banner-home");
        // var pos = 0;
        var counting = setInterval(bannerChange, 5000);

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
        var banner = document.getElementById("banner-home");
        // var pos = 0;
        var smallBus = setInterval(bannerChange, 5000);

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
        var banner = document.getElementById("banner-home");
        // var pos = 0;
        var planning = setInterval(bannerChange, 5000);

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

/////////ABOUT PAGE////////////////////////////////
//modal for legal terms
if (sitePathPageName === 'about.html') {
    var modal = document.getElementById('legal-modal');
    var modalBtn = document.getElementById("terms");
console.log(modalBtn);
    var close = document.getElementById("close-modal");
    modalBtn.onclick = () => {
        modal.style.display = "block";
        var wrapper = document.getElementsByClassName('main-about');
        console.log(wrapper);
        wrapper[0].style.display.backgroundColor = "red";
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