function addFunc() {
    if(document.querySelector('.input-sec input').value.length == 0){
                 alert("You Have Not Entered Any Task");
             }
 else if(document.querySelector('.input-sec input').value.length > 65){
     alert("Task length is too long")
 }
   else{
              document.querySelector('#mylist').innerHTML += `
             <div class="task">
             <span id="taskname">${document.querySelector('.input-sec input').value} </span>
             <button class="delete">
             <i class="far fa-trash-alt"></i>
             </button>
         </div>`; 
     var current_tasks = document.querySelectorAll('.delete');
     for (var i = 0; i < current_tasks.length; i++) {
         current_tasks[i].onclick = function() {
             this.parentNode.remove();
         }
     }
    var tasks = document.querySelectorAll('.task');
     for (var i = 0; i < tasks.length; i++) {
         tasks[i].onclick = function() {
             this.classList.toggle('checked');
         }
     }
      document.querySelector('.input-sec input').value = "";
   }
 }