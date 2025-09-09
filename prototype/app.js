//make new funtion in the template function database of String called prototype
String.prototype.yell = function (){
    return `${this.toUpperCase()} !!!!!!asdasfa`
}

//overwrite
Array.prototype.pop = function(){
    return 'ill never pop'
}

//__proto__ is a property name that reference to prototype
//prototype is the actual object that we can add function to