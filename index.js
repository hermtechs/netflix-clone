const tabs = document.querySelectorAll('.tab-icon');
const contents = document.querySelectorAll('.content')

tabs.forEach(tab=>{
    tab.addEventListener('click', addBorder)
})
function removeBorder(){
    tabs.forEach(tab=>tab.parentElement.classList.remove('tab-border'))
}
function addBorder(e){    
removeBorder();     
const clickedTab = e.target;
clickedTab.parentElement.classList.add('tab-border')
//showing/unhiding tab-content
const clickedTabName = clickedTab.id;
const tabToBeDisplayed = document.querySelector(`.${clickedTabName}-content`)
hideAllContent();

//then display that particular tab content
tabToBeDisplayed.classList.remove('hide-content')
console.log('showed')
}

//hiding all tab content
function hideAllContent(){
    contents.forEach(content=>{
        content.classList.add('hide-content')
        console.log('hidden')
    })
}