// axios.get("https://swapi.info/api/people/1")
// .then(res => {
//     console.log('response',res)
// })
// .catch((err) => {
//     console.log('error', err)
// })

const getStarWarPerson = async (id) => {
    try{
        const res = await axios.get(`https://swapi.info/api/people/${id}`)
        console.log(res.data)
    }
    catch(e){
        console.log('error', e)
    }
}

getStarWarPerson(5)
getStarWarPerson(10)
