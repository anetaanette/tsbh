let counter = 0;
document.getElementById("increaseBtn").onclick = function() {
    counter +=1;
    document.getElementById("countLabel").innerHTML = counter;

    if (counter >= 32) {
        document.getElementById("allahuakbar").style.background = "rgba(240, 166, 161, 0.75)";
    }
}
document.getElementById("resetBtn").onclick = function() {
    counter = 0
    document.getElementById("countLabel").innerHTML = counter;
    document.getElementById("allahuakbar").style.background = "rgba(255, 255, 255, 0.9)";
}


let counter1 = 0;
document.getElementById("increaseBtn1").onclick = function() {
    counter1 +=1;
    document.getElementById("countLabel1").innerHTML = counter1;
    if (counter1 >= 32) {
        document.getElementById("alhamdulillah").style.background = "rgba(240, 166, 161, 0.75)";
    }
}
document.getElementById("resetBtn1").onclick = function() {
    counter1 = 0;
    document.getElementById("countLabel1").innerHTML = counter1;
    document.getElementById("alhamdulillah").style.background = "rgba(255, 255, 255, 0.9)";
}


let counter2 = 0;
document.getElementById("increaseBtn2").onclick = function() {
    counter2 +=1;
    document.getElementById("countLabel2").innerHTML = counter2;
    if (counter2 >= 32) {
        document.getElementById("subhanaallah").style.background = "rgba(240, 166, 161, 0.75)";
    }
}
document.getElementById("resetBtn2").onclick = function() {
    counter2 = 0
    document.getElementById("countLabel2").innerHTML = counter2;
    document.getElementById("subhanaallah").style.background = "rgba(255, 255, 255, 0.9)";
}