onload = () => {
  document.body.classList.remove("container");
  setTimeout(function(){
    let divs = document.getElementsByClassName("flower__light");
    for(let i=0; i<divs.length;i++){
        let elem = divs[i];
        elem.classList.add("d-none");
    }
  }, 5000);
};