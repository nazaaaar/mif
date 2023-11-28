document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    document.getElementById("datepicker").min = tomorrow.toISOString().split('T')[0];

    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 21);
    document.getElementById("datepicker").max = maxDate.toISOString().split('T')[0];

    var usedDates = [];
    for (var i = 0; i < 3; i++) {
        var usedDate = new Date(tomorrow);
        usedDate.setDate(tomorrow.getDate() + [2, 9, 11][i]);
        usedDates.push(usedDate.toISOString().split('T')[0]);
    }

    function isDateUsed(date) {
        return usedDates.includes(date);
    }

    document.getElementById("datepicker").addEventListener("input", function () {
        const selectedDate = this.value;
        if (isDateUsed(selectedDate)) {
            alert("This date has already been used. Please select another date.");
            this.value = ""; // Clear the input if the date is already used
        }
    });
});

function isWeekend(date) {
    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    let dayOfWeek = date.getDay();

    // Check if the day is Sunday (0) or Saturday (6)
    return dayOfWeek === 0 || dayOfWeek === 6;
}
function updateGodServices() {
    const dropdown1Value = document.getElementById("god").value;

    const dropdown2 = document.getElementById("god-service");

    dropdown2.innerHTML = "";

    if (dropdown1Value === "Перун") {
        dropdown2.options.add(new Option("Виклик грому та блискавки", "15"));
        dropdown2.options.add(new Option("Захист від стихійних лих", "25"));
    } else if (dropdown1Value === "Дажбог") {
        dropdown2.options.add(new Option("Сонячна енергія для зарядки", "10"));
        dropdown2.options.add(new Option("Організація яскравого сонячного дня", "30"));
    } else if (dropdown1Value === "Стрибог") {
        dropdown2.options.add(new Option("Сприяння веснянім вітрам", "12"));
        dropdown2.options.add(new Option("Збільшення швидкості вітру", "20"));
    } else if (dropdown1Value === "Сварог") {
        dropdown2.options.add(new Option("Запуск вогненного шоу", "18"));
        dropdown2.options.add(new Option("Виготовлення вогненної зброї або інструментів", "35"));
    } else if (dropdown1Value === "Велес") {
        dropdown2.options.add(new Option("Покращення родючості землі", "22"));
        dropdown2.options.add(new Option("Поради щодо розвитку сільськогосподарських справ", "12"));
    } else if (dropdown1Value === "Мокоша") {
        dropdown2.options.add(new Option("Благословення на здоров'я та родючість", "28"));
        dropdown2.options.add(new Option("Наведення порядку в домашньому господарстві", "15"));
    } else if (dropdown1Value === "Чорнобог та Білобог") {
        dropdown2.options.add(new Option("Захист від негативних впливів", "20"));
        dropdown2.options.add(new Option("Допомога в досягненні балансу в житті", "40"));
    } else if (dropdown1Value === "Ярило") {
        dropdown2.options.add(new Option("Подарунок весняного тепла та світла", "15"));
        dropdown2.options.add(new Option("Підтримка весняних фестивалів та заходів", "25"));
    } else if (dropdown1Value === "Мара") {
        dropdown2.options.add(new Option("Захист від негоди та повеней", "18"));
        dropdown2.options.add(new Option("Допомога у з'явленні джерела чистої води", "30"));
    } else if (dropdown1Value === "Леля") {
        dropdown2.options.add(new Option("Поради та підтримка в коханні та стосунках", "15"));
        dropdown2.options.add(new Option("Організація романтичного свята для двох", "25"));
    }
}

function updatePrice(){
    const dropdown2 = document.getElementById("god-service");
    const priceText = document.getElementById("price");
    const datePicker = document.getElementById("datepicker");

    const selectedOption = dropdown2.options[dropdown2.selectedIndex];
    let price = parseInt(selectedOption.value);


    if (isWeekend(new Date(datePicker.value))){
        price*=1.4;
        price = Math.round(price);
    }

    if (price===1){
        priceText.innerText="Дана послуга вам буде коштувати "+price+" молитву."
    }
    else if( price>1 && price<5){
        priceText.innerText="Дана послуга вам буде коштувати "+price+" молитви."
    }
    else{
        priceText.innerText="Дана послуга вам буде коштувати "+price+" молитв."
    }

}

function toggleTable() {
    const table = document.getElementById("godsTable");
    const button = document.getElementById("gods-table-button")
    if (table.style.display === "none" || table.style.display === "") {
        table.style.display = "table"; // Show the table
        button.innerText="Сховати";
    } else {
        table.style.display = "none"; // Hide the table
        button.innerText="Дізнатися більше про богів";
    }
}

function submitForm() {
    const form = document.getElementById("myForm");
    const successMessage = document.getElementById("successMessage");

    form.style.display = 'none';

    successMessage.innerHTML = "Вашу форму відправлено";
    successMessage.style.display = 'block';
}
