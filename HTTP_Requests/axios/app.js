// axios.get("https://swapi.info/api/people/1")
// .then(res => {
//     console.log('response',res)
// })
// .catch((err) => {
//     console.log('error', err)
// })

// const getStarWarPerson = async (id) => {
//     try{
//         const res = await axios.get(`https://swapi.info/api/people/${id}`)
//         console.log(res.data)
//     }
//     catch(e){
//         console.log('error', e)
//     }
// }

// getStarWarPerson(5)
// getStarWarPerson(10)

const btn = document.querySelector('#btn')
const jokes = document.querySelector('#jokes')
const getDadJoke = async () =>{
    try{
        const config = {headers:{Accept: 'application/json'}}
        const res = await axios.get("https://icanhazdadjoke.com/", config)
        return res.data.joke;
    } catch(e) {
        return 'no jokes avaliable'
    }
}
const addNewJoke = async () => {
    const joke = await getDadJoke();
    const newLI = document.createElement('li')
    newLI.append(joke)
    jokes.append(newLI)
}

btn.addEventListener('click', function(){
    addNewJoke()})