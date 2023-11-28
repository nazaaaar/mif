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
    var dayOfWeek = date.getDay();

    // Check if the day is Sunday (0) or Saturday (6)
    return dayOfWeek === 0 || dayOfWeek === 6;
}
function updateGodServices() {
    const dropdown1Value = document.getElementById("god").value;

    const dropdown2 = document.getElementById("god-service");

    dropdown2.innerHTML = "";

    if (dropdown1Value === "Перун") {
        dropdown2.options.add(new Option("Option A", "6"));
        dropdown2.options.add(new Option("Option B", "4"));
    } else if (dropdown1Value === "Дажбог") {
        dropdown2.options.add(new Option("Option X", "7"));
        dropdown2.options.add(new Option("Option Y", "4"));
    }
}

function updatePrice(){
    const dropdown2 = document.getElementById("god-service");
    const priceText = document.getElementById("price");
    const datePicker = document.getElementById("datepicker");

    const selectedOption = dropdown2.options[dropdown2.selectedIndex];
    let price = parseInt(selectedOption.value);

    if (isWeekend(datePicker.value)){
        price*=1.2;
        price = Math.round(price);
    }

    if (price===1){
        priceText.innerText="Дана послуга вам буде коштувати"+price+" молитву."
    }
    else if( price>1 && price<5){
        priceText.innerText="Дана послуга вам буде коштувати"+price+" молитви."
    }
    else{
        priceText.innerText="Дана послуга вам буде коштувати"+price+" молитв."
    }

}