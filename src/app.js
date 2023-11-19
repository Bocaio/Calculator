function addToDisplay(a) {
    let display = document.getElementsByName("display")[0];
    display.value += a;
}
function ac() {
    let display =document.getElementsByName("display") [0];
    display.value = null;
}
function del() {
    let display = document.getElementsByName("display")[0];
    display.value = display.value.slice(0,-1);
}
function result(){
    let display = document.getElementsByName("display") [0];
    display.value = eval(display.value);
}