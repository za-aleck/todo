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