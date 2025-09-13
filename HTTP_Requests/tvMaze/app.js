const form = document.querySelector('#searchForm');
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.dir(form)
    const searchTerm = form.children.query.value;
    const res = axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    console.log(res)
})