// fetch("https://swapi.info/api/people/1")
//     .then(res => {
//         console.log("resolved", res);
//         return res.json()
//     })
//     .then(data => {
//         console.log('JSON done', data)
//         return fetch("https://swapi.info/api/people/2")
//     })
//     .then(res =>{
//         console.log('json2')
//         return res.json()
//     })
//     .then(data =>{
//         console.log(data)
//     })
//     .catch(e => {
//         console.log('error', e)
//     })

const loadStarWarPeople = async () => {
    try{
        const res = await fetch("https://swapi.info/api/people/1")
        const data = await res.json();
        console.log(data);
        //2
        const res2 = await fetch("https://swapi.info/api/people/2")
        const data2 = await res2.json();
        console.log(data2);
    }
    catch(e){
        console.log('error', e)
    }
    
}

loadStarWarPeople();