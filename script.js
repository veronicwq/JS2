//Завдання 1
    const button = document.getElementById("myButton");
    const input = document.getElementById("textInput");

    button.addEventListener("click", function() {
      button.textContent = input.value;
    });

    //Завдання 2
    const image = document.getElementById("myImage");
    image.src = "https://via.placeholder.com/200x150/00ccff/ffffff?text=Нове+зображення";

    //Завдання 3
    const link = document.getElementById("myLink");
    const linkImg = document.getElementById("linkImage");

    link.href = "https://openai.com";
    linkImg.alt = "Логотип OpenAI";