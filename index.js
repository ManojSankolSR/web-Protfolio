

const dialog1=document.getElementById("MenuDialog");



let currTheme=document.getElementById('styleId');
let selectedTheme= localStorage.getItem("selectedTheme");
if(selectedTheme){
    let presTheme=selectedTheme=='Light'? 'style.css' :  'darkStyle.css';
    currTheme.href= presTheme;
}
else{
    localStorage.setItem("selectedTheme","Light");

}




document.getElementById('visiblityDiv').classList.remove("hidden");




document.getElementById("Ham").addEventListener("click",()=>{
    dialog1.showModal();

});
document.getElementById("close").addEventListener("click",()=>{
    dialog1.close();

});

document.getElementById("ThemetoggleDialog").addEventListener("click",()=>{
    event.preventDefault();

    // document.body.classList.toggle('darkMode');
    
    let theme=document.getElementById('styleId').getAttribute('href');

    if(theme==='style.css' ){
        document.getElementById('styleId').setAttribute('href','darkStyle.css');
        document.getElementById('ThemetoggleDialog').innerHTML=`<img src="svgs/moon-filled-to-sunny-filled-loop-transition.svg" alt="">`;
        localStorage.setItem("selectedTheme","Dark");
       

    }else{
        document.getElementById('styleId').setAttribute('href','style.css');
        document.getElementById('ThemetoggleDialog').innerHTML=`<img src="svgs/sunny-filled-loop-to-moon-filled-loop-transition.svg" alt=""></img>`;
        localStorage.setItem("selectedTheme","Light");
        
    }
    console.log(theme);
    

});
document.getElementById("Themetoggle").addEventListener("click",()=>{
    event.preventDefault();

    // document.body.classList.toggle('darkMode');
    
    let theme=document.getElementById('styleId').getAttribute('href');

    if(theme==='style.css' ){
        document.getElementById('styleId').setAttribute('href','darkStyle.css');
        document.getElementById('Themetoggle').innerHTML=`<img src="svgs/moon-filled-to-sunny-filled-loop-transition.svg" alt="">`;
        localStorage.setItem("selectedTheme","Dark");
       

    }else{
        document.getElementById('styleId').setAttribute('href','style.css');
        document.getElementById('Themetoggle').innerHTML=`<img src="svgs/sunny-filled-loop-to-moon-filled-loop-transition.svg" alt=""></img>`;
        localStorage.setItem("selectedTheme","Light");
        
    }
    console.log(theme);
    

});



