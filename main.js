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
/*
var fahrenheit = document.getElementById("text").value;
function somethingelse(fahrenheit) {
    document.getElementById("result").innerHTML = fahrenheit
}
function celsiuss(params) {
    return (5/9) * (fahrenheit-32);
}
*/


car = {
    owner_first_name : "baa",
    owner_last_name : "sheep",
    owner_full_name : function full_name(owner_first_name, owner_last_name) {
        return this.owner_full_name = owner_first_name + owner_last_name;
        },
    car_brand : "lamborghini",
    car_model : "hurricane"
}
    

console.log(this.car.car_model);
function car2(car) {
    
}
/*function result(celsiuss) {
    document.getElementById("result").innerHTML = "Your result is "+celsiuss;
}
*/