function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }
function myFunction2() {
    document.getElementById("demo").innerHTML = "Paragraph not changed.";
  }
function something(params) {
    document.write(5+6)
}
function bla() {
    document.save()
}
let fahrenheit = document.getElementById("cel")
function celsiuss(params) {
    return (5/9) * (fahrenheit-32);
}
function result(celsiuss) {
    document.getElementById("result").innerHTML = "Your result is "+celsiuss;
}