const left =document.querySelector(".left"),
      right = document.querySelector(".right"),
      bar = document.querySelector(".bar"),
      editor = document.querySelector(".editor"),
      run =  document.querySelector(".btn-run"),
      iframe = document.querySelector(".iframe"),
      darkmode = document.querySelector(".btn-dark"),
      emenu = document.querySelector(".editor-menu"),
      lightmode = document.querySelector(".btn-light");


const drag = (e) => {
    e.preventDefault();
    document.selection ? document.selection.empty():window.getSelection().removeAllRanges();
    left.style.width = (e.pageX - bar.OffsetWidth /3 )+"px";
    
}

bar.addEventListener("mousedown",() => {

    document.addEventListener("mousemove",drag);
})


bar.addEventListener("mouseup",() => {

    document.removeEventListener("mousemove",drag);
})


run.addEventListener("click",()=>{
    const html = editor.textContent;
    iframe.src = "data:text/html;charset=utf-8,"+encodeURI
    (html);
})

darkmode.addEventListener("click",()=>{
    editor.style.backgroundColor="#363836";
    emenu.style.backgroundColor="#363836";
    editor.style.color="#eee";
    
})


lightmode.addEventListener("click",()=>{
    editor.style.backgroundColor="";
    emenu.style.backgroundColor="";
    editor.style.color="";
})


document.querySelector("div").addEventListener("input", (e) => {

    if (document.getElementById("live").checked) {
      editor.addEventListener("keyup", () => {
        const html = editor.textContent;
        iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
      });
    }
  });