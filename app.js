NubmerQ = document.querySelector(".Ncart")
Nubmerofcar = document.querySelector(".Nubmerofcart")
wrapper = document.querySelector(".wrapper")
slideMeDown = document.querySelector(".slideMeDown")
name12 = document.querySelector("#name")
review1 = document.querySelector("#review")
lengthoftext = document.querySelector("#lengthoftext")
error = document.querySelector("#error")

function Validator() {
    if (name12.innerHTML == "") {
        name12 = "Customer";
        console.log(name12);
    }
    if (review1.value.length == 0) {
        error.style.display = "block";
        error.style.color = "#a80e0e";
    } else {
        document.getElementById('postForm').submit();
        window.location.reload();
    }
}

function start() {
    const x = Number(NubmerQ.textContent);
    console.log(x);
    NubmerQ.innerHTML++;
}

function negative() {
    if (Nubmerofcar.innerHTML > 1) {
        Nubmerofcar.innerHTML--;
    }
}

function positive() {
    console.log(NubmerQ.value);
    Nubmerofcar.innerHTML++;
}

function addtocart() {
    const theCurrentOrederNumber = Number(NubmerQ.textContent);
    const theCurrentPlseNumber = Number(Nubmerofcar.textContent);
    NubmerQ.innerHTML = theCurrentPlseNumber + theCurrentOrederNumber;
}

function review() {
    wrapper.style.display = "inline";
    let marLeft = 1000;
    setInterval(Slide, 0.1);

    function Slide() {
        const marleftdivver = 100;
        if (marLeft < 1) {
            slideMeDown.style.marginLeft = 0;
            clearInterval;
        } else {
            marLeft -= 3;
            slideMeDown.style.marginLeft = marLeft + "px";
        }
    }
    // console.log('done function called');
}



var getStyle = function(e, styleName) {
    var styleValue = "";
    if (document.defaultView && document.defaultView.getComputedStyle) {
        styleValue = document.defaultView.getComputedStyle(e, "").getPropertyValue(styleName);
    } else if (e.currentStyle) {
        styleName = styleName.replace(/\-(\w)/g, function(strMatch, p1) {
            return p1.toUpperCase();
        });
        styleValue = e.currentStyle[styleName];
    }
    return styleValue;
}

function trake() {
    console.log('trake function called');
    error.style.display = "none";
    var nubmerofchreter = review1.value.length;
    console.log(nubmerofchreter);
    if (nubmerofchreter < 500) {
        lengthoftext.innerHTML = nubmerofchreter + 1;
    }
}