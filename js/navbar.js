function display(btn) {
    switch (btn) {
        case 'first':
                document.getElementById('first').classList.toggle('dnone')
            break;
        case 'second':
                document.getElementById('second').classList.toggle('dnone')
            break;
    }
}

function navtoggle() {
    document.getElementById('nav').classList.toggle('sidebar-active')
    document.getElementById('button').classList.toggle('btn-active')
    ham=document.getElementById('ham');
    if(ham.innerText=="=")
        ham.innerText="x";
    else
        ham.innerText="=";
}
for(const link of document.getElementsByClassName("link")) {
    link.onmousemove = e => {
      const decimal = e.clientX / link.offsetWidth;
      
      const basePercent = 80,
            percentRange = 20,
            adjustablePercent = percentRange * decimal;
      
      const lightBluePercent = basePercent + adjustablePercent;
      
      link.style.setProperty("--light-blue-percent", `${lightBluePercent}%`);
    }
  }