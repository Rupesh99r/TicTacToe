function enter(x) {
    var t = document.getElementById("turn").innerHTML;
    t = t[10] + "";
    if (document.getElementById(x + "").innerHTML == 'O' || document.getElementById(x + "").innerHTML == 'X') {
        document.getElementById("turn").innerHTML = "element is already filled choose another element";
        return;
    }
    document.getElementById(x + "").innerHTML = t;
    let e1 = document.getElementById("1").innerHTML + "";
    let e2 = document.getElementById("2").innerHTML + "";
    let e3 = document.getElementById("3").innerHTML + "";
    let e4 = document.getElementById("4").innerHTML + "";
    let e5 = document.getElementById("5").innerHTML + "";
    let e6 = document.getElementById("6").innerHTML + "";
    let e7 = document.getElementById("7").innerHTML + "";
    let e8 = document.getElementById("8").innerHTML + "";
    let e9 = document.getElementById("9").innerHTML + "";
    let b1 = e1 == t && e2 == t && e3 == t;
    let b2 = e6 == t && e5 == t && e4 == t;
    let b3 = e7 == t && e8 == t && e9 == t;
    let b4 = e1 == t && e4 == t && e7 == t;
    let b5 = e2 == t && e5 == t && e8 == t;
    let b6 = e3 == t && e6 == t && e9 == t;
    let b7 = e1 == t && e5 == t && e9 == t;
    let b8 = e3 == t && e5 == t && e7 == t;
    let endgame = b1 || b2 || b3 || b4 || b5 || b6 || b7 || b8;
    if (endgame == true) {
        document.getElementById("turn").innerHTML = "winner is " + t;
        check(b1, b2, b3, b4, b5, b6, b7, b8);
        return;
    }
    else {
        if (t == 'O') document.getElementById("turn").innerHTML = "now it is X turn";
        if (t == 'X') document.getElementById("turn").innerHTML = "now it is O turn";
        if (e1.length == 1 && e2.length == 1 && e3.length == 1 && e4.length == 1 && e5.length == 1 && e6.length == 1 && e7.length == 1 && e8.length == 1 && e9.length == 1) {
            document.getElementById("turn").innerHTML = "draw";
        }

    }
}
function replay() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById((i + "")).innerHTML = "";
        document.getElementById(i + "").style.background = "orange";
    }
    document.getElementById("turn").innerHTML = "now it is O turn";
}
function check(b1, b2, b3, b4, b5, b6, b7, b8) {
    if (b1 == true) {
        document.getElementById("1").style.background = "red";
        document.getElementById("2").style.background = "red";
        document.getElementById("3").style.background = "red";
    }
    else if (b2 == true) {
        document.getElementById("4").style.background = "red";
        document.getElementById("5").style.background = "red";
        document.getElementById("6").style.background = "red";
    }
    else if (b3 == true) {
        document.getElementById("7").style.background = "red";
        document.getElementById("8").style.background = "red";
        document.getElementById("9").style.background = "red";
    }
    else if (b4 == true) {
        document.getElementById("1").style.background = "red";
        document.getElementById("4").style.background = "red";
        document.getElementById("7").style.background = "red";
    }
    else if (b5 == true) {
        document.getElementById("2").style.background = "red";
        document.getElementById("5").style.background = "red";
        document.getElementById("8").style.background = "red";
    }
    else if (b6 == true) {
        document.getElementById("3").style.background = "red";
        document.getElementById("6").style.background = "red";
        document.getElementById("9").style.background = "red";
    }
    else if (b7 == true) {
        document.getElementById("1").style.background = "red";
        document.getElementById("5").style.background = "red";
        document.getElementById("9").style.background = "red";
    }
    else if (b8 == true) {
        document.getElementById("3").style.background = "red";
        document.getElementById("5").style.background = "red";
        document.getElementById("7").style.background = "red";
    }
}