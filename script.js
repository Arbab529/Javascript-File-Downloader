const fileInput = document.querySelector("input");
var downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    fetchFile(fileInput.value);
})

function fetchFile(url){
    fetch(url)
    .then(response=> response.blob())
    .then(file=>{
        // *Create url of passed object
       let tempURL = URL.createObjectURL(file);
       let aTag = document.createElement("a");
       aTag.href = tempURL;
       aTag.download = "download_ "+ Math.ceil(Math.random()*10000);
       document.body.appendChild(aTag);
       aTag.click();
       aTag.remove();
    })
}