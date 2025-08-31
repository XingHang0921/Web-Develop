const req = new XMLHttpRequest()

req.onload = function(){
    console.log("its loaded");
    const data = JSON.parse(this.responseText)
    console.log(data.name, data.height);
}
req.onerror = function(){
    console.log("err");
    console.log(this);
}
req.open("GET", "https://swapi.info/api/people/1")
req.send();