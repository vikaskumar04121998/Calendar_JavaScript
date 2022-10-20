today = new Date();

currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function bg_change_of_date() {
    let change_date = document.getElementById("date_bg_change").value;
    var dates = [];

    for (let i = 0; i < 6; i++) {

        for (let j = 0; j < 7; j++) {

            if (document.getElementById('calendar').rows[i].cells[j].innerHTML === change_date) {

                if (document.getElementById('calendar').rows[i].cells[j].style.backgroundColor === "green") {
                    document.getElementById('calendar').rows[i].cells[j].style.backgroundColor = "white";
                } else {
                    document.getElementById('calendar').rows[i].cells[j].style.backgroundColor = "green";
                }

            }

        }

    }

    document.getElementById("date_bg_change").value = "";
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);

    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();

    tbl = document.getElementById("calendar-body");

    tbl.innerHTML = "";

    selectYear.value = year;
    selectMonth.value = month;

    let date = 1;

    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {

            if (i === 0 && j < firstDay) {
                cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement("td");
                cellText = document.createTextNode(date);
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }

        }

        tbl.appendChild(row);
    }

}


// check how many days in a month code from https://dzone.com/articles/determining-number-days-month
function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}