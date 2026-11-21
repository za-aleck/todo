const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const todo = document.querySelector('.todo')
const ul = document.createElement('ul')
todo.append(ul) 
btn.onclick= function(){
    const name = input.value
    input.value=''
    if(!name.trim()){
        alert('Введите задачу')
        return
    }
product.push({
        name:name,
        id: Date.now(),
        edited:false,
    })
    
localStorage.setItem('x',JSON.stringify(product))

render()
}
     
//}


function getItem(i,item){
const li = document.createElement('li')
li.textContent = `${i+1}. ${item.name}`

  const btnDelete = document.createElement('button') 
  btnDelete.textContent = 'удалить'
  btnDelete.classList.add('btn-delete')
btnDelete.onclick = function () {
  const idx = product.findIndex(p => p.id === item.id)
  if (idx !== -1) product.splice(idx, 1)
  localStorage.setItem('x', JSON.stringify(product))
  render()
}
  //li.append(btnDelete)
  
 // return li

//кнопка изменить
 const btnEdit = document.createElement('button') 
  btnEdit.textContent = 'готово'
  btnEdit.classList.add('btn-edit')
  if(item.edited){ 
    li.style.color = 'green';
    btnEdit.classList.add('active')
}
btnEdit.onclick = function () {
   item.edited = !item.edited
  localStorage.setItem('x', JSON.stringify(product))
  render()
}
  li.append(btnEdit,btnDelete)
  
  return li
}
console.log(JSON.parse(localStorage.getItem('x')))
const product=JSON.parse(localStorage.getItem('x') || '[]')
function render(){
 ul.innerHTML = ''
 for (let i = 0; i < product.length; i++) {
 ul.prepend(getItem(i,product[i]))
 } 
}

render()
//поиск

const search = document.querySelector('.search')
let query = ''
search.oninput = function () {
  query = search.value.trim().toLowerCase()
  search_1()
}
function search_1() {
  ul.innerHTML = ''
  input.value-''
  const filtered = product.filter(p =>
    p.name.toLowerCase().includes(query)
  )

  if (filtered.length === 0) {
    
    const li = document.createElement('li')
    li.classList.add('search-li')
    li.textContent = query ? 'Ничего не найдено' : 'Список пуст'
    todo.append(ul)
    ul.append(li)
    return
  }

for(let i = 0; i < filtered.length; i++) {
    ul.prepend(getItem(i, filtered[i]))
  }
}
search_1()



//футер активные
const btnActive = document.querySelector('.btn-active')
btnActive.onclick=active
function active() {
 ul.innerHTML = ''
  const filteredActive = product.filter(p =>
    p.edited == false
  )

if(filteredActive.length === 0) {
    
    const li = document.createElement('li')
    li.classList.add('search-li')
    li.textContent = filteredActive ? 'Ничего не найдено' : 'Список пуст'
    todo.append(ul)
    ul.append(li)
    return
  }

for(let i = 0; i < filteredActive.length; i++) {
    ul.prepend(getItem(i, filteredActive[i]))
  
}
}
//футер неактивные
const btnNoActive = document.querySelector('.btn-noactive')
btnNoActive.onclick=noActive
function noActive() {
 ul.innerHTML = ''
  const filteredNoActive = product.filter(p =>
    p.edited == true
  )

if(filteredNoActive.length === 0) {
    
    const li = document.createElement('li')
    li.classList.add('search-li')
    li.textContent = filteredNoActive ? 'Ничего не найдено' : 'Список пуст'
    todo.append(ul)
    ul.append(li)
    return
  }

for(let i = 0; i < filteredNoActive.length; i++) {
    ul.prepend(getItem(i, filteredNoActive[i]))
  
}
}
//футер все
const btn_All = document.querySelector('.btn-all')
btn_All.onclick= btnAll
function btnAll() {
 ul.innerHTML = ''
 // const filteredBtnAll = product.filter(p =>
  //  p.edited
//  )

if(product.length === 0) {
    
    const li = document.createElement('li')
    li.classList.add('search-li')
    li.textContent = product ? 'Ничего не найдено' : 'Список пуст'
    todo.append(ul)
    ul.append(li)
    return
  }

for(let i = 0; i < product.length; i++) {
    ul.prepend(getItem(i,product[i]))
  
}
}
