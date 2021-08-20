

const inputSearch = document.querySelector(".inputSearch")
const containerResultsList = document.querySelector(".containerResultsList")
const searchRecentContainer = document.querySelector(".searchRecentContainer")
const containerResults= document.querySelector(".containerResults")
const API_SEARCH_URL = "http://localhost:3000/api/search?name="
const search = document.querySelector('.boats-btn')
const list= document.querySelector(".list")





inputSearch.addEventListener('keyup', e => {
    if (e.key === 'Escape') {
        containerResults.style.display = 'none'
        searchRecent.style.display = 'none'
        containerResultsList.style.display = 'none'
      
    } else {
        doSearch()
    }
})



function doSearch() {
    const value = inputSearch.value
    containerResults.style.display = 'block'
    containerResultsList.style.display = 'block'

    fetch(API_SEARCH_URL+value)
        .then(res => res.json())
        .then(res => {
            list.innerHTML = ''

            if (res.meta.total === 0) {
                list.innerHTML = 'Sorry! there are no boats on this location :('
            } else {
                res.data.location.forEach(location => {
                    
                    list.innerHTML +=  "<li>"+location.location+"</li>"
                })
                list.querySelectorAll("li").forEach(element =>{
                    element.addEventListener("click", copypaste)
                })
            }
        })
}


function copypaste (){
    let value = this.innerText
    inputSearch.value = value
    containerResults.style.display = 'none'
    containerResultsList.style.display = 'none'
}


window.addEventListener("click", function(event){
    console.log(event)
})




window.addEventListener('click', (e) => {
          const clickOutside = e.composedPath().includes(search)
         if (!clickOutside) {
              containerResults.style.display = 'none'
          containerResultsList.style.display = 'none'
     }
 })




