function createToDoList() {
  let container = document.querySelector(".container");
  //Создаю див тудусписок-1
  let divContainerZadanieFirst = document.createElement("div");
  divContainerZadanieFirst.textContent = "ToDoSpisok-2";
  divContainerZadanieFirst.setAttribute("class", "display-4 mb-2");
  container.append(divContainerZadanieFirst);
  //Создаю див Список задач для мамы
  let h4_mb_5 = document.createElement("div");
  h4_mb_5.textContent = "Задания мамы";
  h4_mb_5.setAttribute("class", "h4 mb-5");
  container.append(h4_mb_5);
  //создаю див (лист заданий)
  let card_mb4 = document.createElement("div");
  card_mb4.setAttribute("class", "card mb-4");
  //cоздаю ul
  let ul_tasks_Lists = document.createElement("ul");
  ul_tasks_Lists.setAttribute("id", "tasksList"); //даю класс ul
  ul_tasks_Lists.setAttribute("class", "list-group list-group-flush");

  let li_empty_List = document.createElement("li"); //cozdal prostoy li
  li_empty_List.setAttribute("id", "emptyList");
  li_empty_List.setAttribute("class", "list-group-item empty-list");

  let div_empty_list_title = document.createElement("div");
  div_empty_list_title.setAttribute("class", "empty-list__title");
  div_empty_list_title.textContent = "Список дел пуст";

  //картинка котика
  let imgEasyLiCat = document.createElement("img");
  imgEasyLiCat.setAttribute("src", "img/lazaphone.jpg");
  imgEasyLiCat.setAttribute("alt", "Empty");
  imgEasyLiCat.setAttribute("width", "96");

  container.append(card_mb4);
  card_mb4.append(ul_tasks_Lists);
  // ul_tasks_Lists.append(li_empty_List); //простой лишка
  // ul_tasks_Lists.append(li_group_item); //сложный лишка
  // li_empty_List.append(imgEasyLiCat); //пулл котика
  // li_empty_List.append(div_empty_list_title); //список дел пуст пулл

  // Вторая часть блока дива с инпутом и т.д.
  let divCardBgLight = document.createElement("div");
  divCardBgLight.setAttribute("class", "card bg-light");
  //див добавить новую задачу
  let divCardHeader = document.createElement("div");
  divCardHeader.setAttribute("class", "card-header");
  divCardHeader.textContent = "Добавить новую задачу";
  //див создание формы
  let divCardBody = document.createElement("div");
  divCardBody.setAttribute("class", "card-body");

  //создание самой формы внутри дива
  let formochka = document.createElement("form");
  formochka.setAttribute("id", "form");
  //создание внутри формы дива
  let divFormGroup = document.createElement("div");
  divFormGroup.setAttribute("class", "form-group");

  //созадние инпута в див
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("class", "form-control");
  input.setAttribute("id", "taskInput");
  input.setAttribute("placeholder", "Текс задачи");
  input.setAttribute("required", "required");

  //Мини комментарий
  let miniCommentarriySmall = document.createElement("small");
  miniCommentarriySmall.setAttribute("id", "emailHelp");
  miniCommentarriySmall.setAttribute("class", "form-text text-muted");
  miniCommentarriySmall.textContent = "Сюда записываем наши задачки :D";

  //создание кнопки баттон добавить
  let buttonAddToDo = document.createElement("button");
  buttonAddToDo.setAttribute("type", "submit");
  buttonAddToDo.setAttribute("class", "f");
  buttonAddToDo.textContent = "Добавить";

  function buttonVizovFunc() {
    //   //Сделать кнопку не активной при зашрузке html страницы
    document.addEventListener("DOMContentLoaded", () => {
      buttonAddToDo.disabled = true;
    });

    //   //Если фокус уходит с инпута => кнопка перестает работать
    addEventListener("click", (event) => {
      // buttonAddToDo.disabled = false;
      if (event.target != input) {
        buttonAddToDo.disabled = true;
        if (event.target == buttonAddToDo) {
          buttonAddToDo.disabled = false;
        }
      }
      if (event.target == input) {
        buttonAddToDo.disabled = false;
      }
    });
  }
  buttonVizovFunc();

  //аппенд созданной 2 части

  container.append(divCardBgLight); // в контейнер второй блок пулл
  divCardBgLight.append(divCardHeader); //пулл текст добавть новую задачу
  divCardBgLight.append(divCardBody); //пулл блока для формы
  divCardBody.append(formochka); //пулл формы
  formochka.append(divFormGroup); //пулл в форму див
  divFormGroup.append(input);
  divFormGroup.append(miniCommentarriySmall);
  formochka.append(buttonAddToDo);
}
createToDoList();

let Border__ButtonsMPB = document.querySelector(".Border__ButtonsMPB");
let button_FirstMPB = document.querySelector(".Mama");
let button_SecondMPB = document.querySelector(".Papa");
let button_ThreeMPB = document.querySelector(".Babushka");

//

//

//
//
// // 1 задача добавление списка дел
// //найдем форму при отправке которой произойдет добавление

const form = document.querySelector("#form"); //создали константу записали в нее форм
const taskInput = document.querySelector("#taskInput"); //создали константу записали в нее инпут
const tasksList = document.querySelector("#tasksList"); //наши задачи (записанные)
const emptyList = document.querySelector("#emptyList"); //список дел пуст его будем скрывать

let tasks = []; //массив для сохраннения
let tasks_two = [];

//проверка есть ли в localstorage данные
//он вернет строчку или нулл
if (localStorage.getItem("tasksMother")) {
  tasks = JSON.parse(localStorage.getItem("tasksMother")); //если есть что-то парсим в масив
}

//РРрРрРрР
tasks.forEach(function (task) {
  const cssClass = task.done ? "task-title task-title--done" : "task-title";

  //Делаю раззметку для новой задачи
  const taskHTML = `<li id="${task.id}"class="list-group-item d-flex justify-content-between task-item">
<span class="${cssClass}">${task.text}</span>
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
  tasksList.insertAdjacentHTML("beforeend", taskHTML); // есть element и text, но мы обращаемся именно к html потому что мы всталяем именно фрагмент html кода
});

//cоздание переменной с начальными данными
let ageres = [
  {
    name: "Купить молоко",
    done: true,
  },
  {
    name: "Сделать уборку",
    done: false,
  },
];

//дальше нужно отслеживать форму (отправка)
//чтобы форма не перезагружала страницу в фунцкии параметр ивент e или event
form.addEventListener("submit", addTask); //2 аргумента принимает (addEventListener) субмит собственно при нажатии
//Удаление задач
tasksList.addEventListener("click", deleteTask);
//Отмечаем задачу завершенной!
tasksList.addEventListener("click", doneTask);
//Функции:
// упростим код, функцию которую передавали опишем как отдельную функцию и передадим ее в addeventlistener

function addTask(event) {
  //функция добавления задач
  // отменяет стандартное поведение (отравка формы не reload страницы)
  event.preventDefault();
  //Достаем текст задачи из поля ввода
  const taskText = taskInput.value;
  //Текст мало хранить нужно и статус задачи.
  const newTask = {
    id: Date.now(), // формирования айди в милисекундах уникальный
    text: taskText,
    done: false,
  };

  //Добавляем задачу в массив с задачами.
  tasks.push(newTask);

  //  console.log(newTasks); проверка что объект работает
  // console.log(tasks);проверка что   массив заполняется
  //формируем сss класс (используем чтобы отобразить нужный класс)
  const cssClass = newTask.done ? "task-title task-title--done" : "task-title";

  //Делаю раззметку для новой задачи
  const taskHTML = `<li id="${newTask.id}"class="list-group-item d-flex justify-content-between task-item">
<span class="${cssClass}">${newTask.text}</span>
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
  tasksList.insertAdjacentHTML("beforeend", taskHTML); // есть element и text, но мы обращаемся именно к html потому что мы всталяем именно фрагмент html кода
  // Есть вариант вставки afterend чтобы главное было выше, а есть beforeend, только добавленное будет не выше а ниже!
  //Очистка поля инпут! Для новых дел
  taskInput.value = ""; //очистили
  taskInput.focus(); //метод фокус нужен чтобы заного не кликать по инпуту чтобы добавить новое дело!
  saveToLocalStorage(); // вызов функции сохранения в локалстор
}
//Фунцкия на удаление
function deleteTask(event) {
  //у кнопок есть атрибут дата эктион (будем смотреть на значение этого атрибута)
  //Проверка на то что клик был по кнопке удалить задачу
  if (event.target.dataset.action === "delete") {
    //обращаемся к атрибуту dataset чтобы работать и выбираем .action
    // console.log("Delete"); проверка что кнопка найдена и работает
    const parenNode = event.target.closest("li"); //метед closest ищет среди родителей этих кнопок

    //Прежде чем удалим ее надо удалить ее из данных
    // Определяем ID задачи
    const id = Number(parenNode.id); // нужно найти элемент в массиве или отфильтровать массив
    //находим индекс задачи в массиве
    tasks = tasks.filter((task) => task.id !== id);

    //сохр в локалстор
    saveToLocalStorage();

    //удаление задачи из разметки
    parenNode.remove();
  }
}

//Функция на зеленую галочку)
function doneTask(event) {
  //проверяем что клик на зеленой галочке
  if (event.target.dataset.action === "done") {
    // читается это так (если клик был по элементу у которого есть дата эктион то мы выполняем действие)

    const parentNode = event.target.closest("li"); //closest() возвращает ближайший родительский элемент (или сам элемент)
    const taskTitle = parentNode.querySelector("span");
    //определяем айди задачи
    const id = Number(parentNode.id); //Number служит для присвоения строки в число

    const task = tasks.find(function (task) {
      if (task.id === id) {
        return true;
      }
    }); // Различие от файндИндекса что файнд он возвращает не индекс а найденный элемент
    console.log(task);
    task.done = !task.done; //свойство ddone true/false переворачиваем чтобы в данные хранили не только false!

    //сохр в локалстор
    saveToLocalStorage();

    taskTitle.classList.toggle("task-title--done"); //передаем без точки т.к. работаем через classList  (task-title--done этот класс будет добавлен к задаче)
    //add или toggle -add нам позволяет добавить эту задачу выполненной и все а если мы случайно? то тогл морэжет это вернуть!
  }

  //сохранение на уровне данных
}

//для показа и отображения блока котика
// function checkEmptyList() {
//   if (tasks.length === 0) {
//     const emptyListElement = `<li id="emptyList" class="list-group-item empty-list">
//             <img src="img/lazaphone.jpg" alt="Empty" width="96" />
//             <div class="empty-list__title">Список дел пуст</div>
//           </li>`;

//     tasks.insertAdjacentHTML("afterbegin", emptyListHTML);
//   } //что внутри массива
// }

//Сразу размещенные задания

function saveToLocalStorage() {
  //Сохранение в LocalStorage
  localStorage.setItem("tasksMother", JSON.stringify(tasks)); // "tasks это наш ключ" 2 -аргумент - и мы хотим записать массив или объект его необходимо трансформировать в JSON.stringify(tasks)
  //он сначала преобразуется в JSON а потом сохраняется
}

function StandartZadaniya() {
  for (let i = 0; i < ageres.length; i++) {
    input = document.querySelector(".form-control");
    input.value = ageres[i].name;
    //console.log(ageres[i].name);
    buttonAddToDo = document.querySelector(".f");
    console.log(buttonAddToDo);

    buttonAddToDo.click();
  }
  tasks_two.push(ageres);
}
if (localStorage.length == 0) {
  StandartZadaniya();
}
