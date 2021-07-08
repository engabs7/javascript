function add() {
    var no1 = document.getElementById("first").value;
    var no2 = document.getElementById("second").value;
    var result = Number(no1) + Number(no2);
    document.getElementById("res").innerHTML = result;
}

function sub() {
    var no1 = document.getElementById("first").value;
    var no2 = document.getElementById("second").value;
    var result = Number(no1) - Number(no2);
    document.getElementById("res").innerHTML = result;
}

function mul() {
    var no1 = document.getElementById("first").value;
    var no2 = document.getElementById("second").value;
    var result = Number(no1) * Number(no2);
    document.getElementById("res").innerHTML = result;
}

function div() {
    var no1 = document.getElementById("first").value;
    var no2 = document.getElementById("second").value;
    if (Number(no1) > Number(no2)) {
        var result = Number(no1) / Number(no2);
        document.getElementById("res").innerHTML = result;
    } else {
        document.getElementById("res").innerHTML = 0;
    }
}

function avg() {
    var no1 = document.getElementById("first").value;
    var no2 = document.getElementById("second").value;
    var result = (Number(no1) + Number(no2)) / 2;
    document.getElementById("res").innerHTML = result;
}

function add() {
    var no1 = document.getElementById("first").value;
    var no2 = document.getElementById("second").value;
    var result = Number(no1) + Number(no2);
    document.getElementById("res").innerHTML = result;
}

function light() {
    document.getElementById("sun").style.visibility = "hidden";
    document.getElementById("moon").style.visibility = "visible";
    document.body.style.background = "white";
    document.getElementById("in2-text").style.color = "black";
    document.getElementById("f").style.color = "black";
    document.getElementById("s").style.color = "black";
    document.getElementById("res").style.color = "black";
}

function dark() {
    document.getElementById("moon").style.visibility = "hidden";
    document.getElementById("sun").style.visibility = "visible";
    document.body.style.background = "black";
    document.getElementById("in2-text").style.color = "white";
    document.getElementById("f").style.color = "white";
    document.getElementById("s").style.color = "white";
    document.getElementById("res").style.color = "white";

}

function aboutShow() {
    document.getElementById("aboutMe").innerHTML = "Abbas";
}


function animation1() {
    document.getElementById("in1").style.height = "400px";
    document.getElementById("in2").style.visibility = "visible";
    document.getElementById("in2").style.bottom = "200px";
    document.getElementById("arrow").style.visibility = "visible";

}

function hide() {
    document.getElementById("in2").style.visibility = "hidden";
    document.getElementById("in1").style.height = "0px";
    document.getElementById("arrow").style.visibility = "hidden";
}