let Name = prompt("Please enter your name");
let gender = prompt("pleas enter your gender");
if (gender !== "male" && gender !== "female") {
    gender = prompt(" please the gender only male or female");
}
let text;
if (gender === "male") {
    text = ("Mr.")
}
else if (gender === "female") {
    text = ("Ms.")
}
let age = prompt("pleas enter your age");
if (age <= 0) {
    age = prompt("pleas enter your real age");
}
let skip = confirm("do you want to see the welcoming message?");
if (skip) {
    let welcoming = alert(" welcome " + text + Name);

}


let Questions = [];
Questions[0] = prompt(" Do you speak English?");
Questions[1] = prompt("Do you speak Turkish?");
Questions[2] = prompt("Do you speak German?");

for (let i = 0; i < 3; i++) {
    switch (Questions[i]) {
        case "yes":
        case "y":
        case "YES":
        case "Y":
        case "Yes":
            break;
        case "no":
        case "n":
        case "NO":
        case "N":
        case "No":
            break;
        default:
            Questions[i] = "invalid";
    }
}

console.log(Questions);

