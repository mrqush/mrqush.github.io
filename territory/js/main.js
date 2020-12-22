let regText = document.getElementById('register__text');
let submitButton = document.getElementById('submit');

// $(document).ready(function(){
//     $("#submit").click(function(){
//         regText.classList.add('show');
//     })
// });

$("#form").submit(function (e) { // Устанавливаем событие отправки для формы с id=form
    e.preventDefault();
     var form_data = $(this).serialize(); // Собираем все данные из формы
     $.ajax({
         type: "POST", // Метод отправки
         url: "send.php", // Путь до php файла отправителя
         data: form_data,
         success: function () {
             // Код в этом блоке выполняется при успешной отправке сообщения
            //  alert("Ваше сообщение отправлено!");
             regText.classList.add('show');
             submitButton.classList.add('hide');
         }
     });
 });