import navbar from "../components/navbar.js";
import header from "../components/header.js";
import footer from "../components/footer.js";
import bottom from "../components/bottomdiv.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("logo_section").innerHTML = header();
document.getElementById("container").innerHTML = footer();
document.getElementById("bottom").innerHTML = bottom();

let date = new Date();
let cday = date.getDay();
let cdate = "0" + date.getDate();
let month = date.getMonth();
let cyear = date.getFullYear();

let day = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];

for (let i = 0; i < day.length; i++) {
    if (i == (+cdate)) {
        cday = day[i - 1];
    }
}

let arr = ["January", "February", "March", "April", "May", "Jun", "July", "August",
    "September", "October", "November", "December"];
for (let i = 0; i < arr.length; i++) {
    if (i == (+month)) {
        month = arr[i];
    }
}

document.getElementById('date').append(cdate+"th"+ " " + month + " " + " " + cyear);
