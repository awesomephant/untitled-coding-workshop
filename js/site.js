function init() {
    
    
    let todoList = document.querySelector('.todo')
    let headlines = document.querySelectorAll('h2, h3, h4, h5')
    let todoListItems = todoList.querySelectorAll('li')
    
    for (let i = 0; i < todoListItems.length; i++) {
        let li = todoListItems[i];
        let text = li.innerHTML;
        li.innerHTML = ''
        let checkbox = document.createElement('input')
        let span = document.createElement('span')
        checkbox.setAttribute('type', 'checkbox')
        checkbox.addEventListener('change', function(e){
            console.log(this.checked)
        })
        span.innerHTML = text;
        li.insertAdjacentElement('afterbegin', span)
        li.insertAdjacentElement('afterbegin', checkbox)
    }
    for (let i = 0; i < headlines.length; i++){
        let h = headlines[i];
        let id = headlines[i].innerText.replace(/ /g, '-').toLowerCase();
        h.setAttribute('id', id)
    }

}

window.addEventListener('DOMContentLoaded', function () {
    init()
})