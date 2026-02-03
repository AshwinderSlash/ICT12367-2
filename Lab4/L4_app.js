const smallImg = Document.querySelectorAll(".gallary img")
const fullImg = Document.querySelector(".full img")
const modal = Document.querySelector(".modal")
smallImg.forEach(img => {
    img.addEventListener("click",()=>{
        const fullsize = img.getAttribute("alt")
        const patch = 'galaxy/full/${fullsize}.jpg'
        fullImg.src=patch
        modal.classList.add("open")
    })
})
modal.addaddEventListener("click",(e)=>{
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open")
    }
})