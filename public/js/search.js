

const inputSearch = document.querySelector(".inputSearch")
const containerResultsList = document.querySelector(".containerResultsList")
const searchRecentContainer = document.querySelector(".searchRecentContainer")
const containerResults= document.querySelector(".containerResults")
const API_SEARCH_URL = "http://localhost:3001/api/search?name="
const search = document.querySelector('.boats-btn')





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
            containerResultsList.innerHTML = ''

            if (res.meta.total === 0) {
                containerResultsList.innerHTML = 'No se encontraron planetas :('
            } else {
                res.data.location.forEach(location => {
                    
                    containerResultsList.innerHTML +=  "<ul>"+"<li>"+location.location+"</li>"+"</ul>"
                })
                
            }
        })
}


window.addEventListener('click', (e) => {
    const clickOutside = e.composedPath().includes(search)
    if (!clickOutside) {
        containerResults.style.display = 'none'
        containerResultsList.style.display = 'none'
    }
})




