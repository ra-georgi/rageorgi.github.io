

window.onscroll = function() {
    const nav=document.querySelector(".navbar")
    var top=window.scrollY;
    // console.log(top)
    if (top >= 0.8*window.innerHeight){
        nav.classList.add("navscroll")
    }else{
        nav.classList.remove("navscroll")
    }

}





