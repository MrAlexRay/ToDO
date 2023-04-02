// 1 задача добавление списка дел
//найдем форму при отправке которой произойдет добавление

const form = document.querySelector("#form"); //создали константу записали в нее форм
const taskInput = document.querySelector("#taskInput"); //создали константу записали в нее инпут
const tasksList = document.querySelector("#tasksList"); //наши задачи (записанные)
const emptyList = document.querySelector("#emptyList"); //список дел пуст его будем скрывать
//дальше нужно отслеживать форму (отправка)
//чтобы форма не перезагружала страницу в фунцкии параметр ивент e или event
form.addEventListener("submit", addTask); //2 аргумента принимает (addEventListener) субмит собственно при нажатии

//Удаление задач
tasksList.addEventListener('click', deleteTask)

//Отмечаем задачу завершенной!
tasksList.addEventListener('click', doneTask)




// ---------------------------
//проверим хранится ли что то в локал сторэйдж  !!!НЕКОРРЕКТ СЕЙВ!!! ПОСЛЕ ПЕРЕЗАГРУЗКИ!
if (localStorage.getItem('tasksHTML')) {//вернет разметку из localstorage
    //если мы от туда что достанем запишем в таск лист
    tasksList.innerHTML = localStorage.getItem('tasksHTML');
    
}

// --------------------------

//Функции:
// упростим код, функцию которую передавали опишем как отдельную функцию и передадим ее в addeventlistener 
function addTask (event) { //функция добавления задач

// отменяет стандартное поведение (отравка формы не reload страницы)
event.preventDefault(); 
    
//Достаем текст задачи из поля ввода
const taskText = taskInput.value;

//Делаю раззметку для новой задачи
const taskHTML = `<li class="list-group-item d-flex justify-content-between task-item">
<span class="task-title">${taskText}</span>
<div class="task-item__buttons">
    <button type="button" data-action="done" class="btn-action">
        <img src="img/yes.png" alt="Done" width="18" height="18">
    </button>
    <button type="button" data-action="delete" class="btn-action">
        <img src="img/no.png" alt="Delete" width="18" height="18">
    </button>
</div>
</li>`; //шаблонная строка (будет генерироваться для каждой дальнейшей задачи)

//Добавим нашу задачу на страницу мы хотим его добавить в тэг ul
tasksList.insertAdjacentHTML('beforeend', taskHTML);  // есть element и text, но мы обращаемся именно к html потому что мы всталяем именно фрагмент html кода 
// Есть вариант вставки afterend чтобы главное было выше, а есть beforeend, только добавленное будет не выше а ниже!


//Очистка поля инпут! Для новых дел
taskInput.value = ""; //очистили 
taskInput.focus() //метод фокус нужен чтобы заного не кликать по инпуту чтобы добавить новое дело!

//Убираем текст ,,Список дел пуст,,
if (tasksList.children.length > 1) { //children возвращет нам html коллекцию элементов которые внутри него, в нашем случае это 2 li
emptyList.classList.add("none"); //скрывать будем его следующим образом будем добавлять класс с помощью класслист.add 
}


saveHTMLtoLS(); // не корректный сейв после перезагрузки
}

//Фунцкия на удаление
function deleteTask(event){
    
    //у кнопок есть атрибут дата эктион (будем смотреть на значение этого атрибута)
    //Проверка на то что клик был по кнопке удалить задачу
    if (event.target.dataset.action === 'delete') { //обращаемся к атрибуту dataset чтобы работать и выбираем .action
        // console.log("Delete"); проверка что кнопка найдена и работает
        const parenNode = event.target.closest('li')//метед closest ищет среди родителей этих кнопок
        parenNode.remove();

    }   

    if (tasksList.children.length === 1) { //children возвращет нам html коллекцию элементов которые внутри него, в нашем случае это 2 li
        emptyList.classList.remove("none"); //скрывать будем его следующим образом будем добавлять класс с помощью класслист.add 
        }




        saveHTMLtoLS(); //не коррект сейв после перезагрузки
}
//Функция на зеленую галучку)
function doneTask(event){
    //проверяем что клик на зеленой галочке
    if(event.target.dataset.action === "done"){ // читается это так (если клик был по элементу у которого есть дата эктион то мы выполняем действие)
        
        const parentNode = event.target.closest('li');
        const taskTitle = parentNode.querySelector('span');
        taskTitle.classList.toggle("task-title--done"); //передаем без точки т.к. работаем через classList  (task-title--done этот класс будет добавлен к задаче)
        //add или toggle -add нам позволяет добавить эту задачу выполненной и все а если мы случайно? то тогл морэжет это вернуть!
        
    }

    saveHTMLtoLS(); //не коррект сейв после перезагрузки
}


//два способа соранения данных после обновления страницы:
//не корректный! хранения разметки в localstorage -локал хранилище в браузере
//application слева раздел storage и там записанны данные
function saveHTMLtoLS() {
    localStorage.setItem('tasksHTML', tasksList.innerHTML); //tasksHTML ключ который создали и в нем будем хранить разметку


}


