getID("showNav").onclick = show;
function show(){
    getID("bar").classList.remove("fa-bars");
    getID("bar").classList.add("fa-close");
    getID("nav").style.display = 'block'

    getID("showNav").onclick = close;
}
function close(){
    getID("bar").classList.add("fa-bars");
    getID("bar").classList.remove("fa-close");
    getID("showNav").onclick = show;
    getID("nav").style.display = 'none'
}

// for dark
getID("dark").addEventListener("click",dark)
function dark(){
    const getLocal = localStorage.getItem("dark");
    
    if(!getLocal){
        localStorage.setItem("dark", "dark");
        document.body.classList.add("dark")
    }
    else{
        if (localStorage.getItem("dark")==='dark') {
            document.body.classList.remove("dark");
            localStorage.removeItem("dark")
        
        }

    }
}
const getLocal = localStorage.getItem("dark");
if(getLocal){
    document.body.classList.add("dark")
}

// for resizeBy body 
function resize(){
    if(innerWidth>=900){
        getID("showNav").style.display = 'none';
        getID("nav").style.display = 'block'
        getID("navUl").style.display = 'flex'
    }
    else{
        getID("showNav").style.display = 'block'
        
    }
}
