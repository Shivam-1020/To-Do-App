function addTask(){
  let newTask = document.createElement('li')
  const taskList = document.getElementById('talkList')
taskList.appendChild(newTask)
newTask.textContent = document.getElementById('inputTask').value
document.getElementById('inputTask').value = ""
deleteTask(newTask)
}

function deleteTask(newTask){
  let deleteBtn = document.createElement('button')
  deleteBtn.textContent = "Delete"
  newTask.appendChild(deleteBtn)
  deleteBtn.onclick = function(){
    newTask.remove()
  }
}