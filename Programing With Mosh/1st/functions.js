
function greet(){
   console.log('Hello World') //it print Hello World
}

function oneName(name, place){
   console.log(name + place) //it print name as Haseeb. but, place not print
}

function twoNames(firstName, lastName){
   console.log(firstName + lastName)
}

oneName('Haseeb'); //Calling Function with argument
oneName('Edavanna'); //it is undefined
twoNames('Haseeb', 'Edavanna'); //it will print as HaseebEdavanna (without space)