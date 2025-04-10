
let buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", function(){
      
        document.body.style.background = btn.style.backgroundColor;
    });
});
