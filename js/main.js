    
var dataGlasses = []
fetch("https://61d6e2a235f71e0017c2e877.mockapi.io/glasses")
.then(respond => respond.json())
.then(respond => {
  
    dataGlasses = [...respond]
    showSP(respond)
})
function showSP (dataGlasses){
    let content = ''
    dataGlasses.map(item => {
        content += `
        <div class="col-4">
        <div class="glass__item" onclick="handleClick('${item.id}')">
        <img class="glass__img" src="${item.src}" alt="glass${item.id}">
                        
         </div>
                       
                   </div>
        
        `
    })
    document.getElementById("vglassesList").innerHTML = content
}


let listGlasses 
function handleClick (id) {
    listGlasses =  dataGlasses.find(item => {
        return item.id === id
    })
    renderGlasses()
}
window.handleClick = handleClick


const renderGlasses = () =>{
    document.getElementById("avatar").innerHTML = `<img src="${listGlasses.virtualImg}" alt="">`
    renderInfor()

}

const  renderInfor = () => {
    let content =  `
    <h1 class="glass__heading">
    ${listGlasses.name} - ${listGlasses.brand} (${listGlasses.color})
    </h1>
    <span>$${listGlasses.price}</span>
    <p>${listGlasses.description}</p> 
    `
    
       
    document.getElementById("glassesInfo").innerHTML = content
    document.getElementById("glassesInfo").style.display = "block"
}
