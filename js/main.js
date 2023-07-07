let elMovieList = document.querySelector('.movie_list')
let elSelYear = document.querySelector('.select_year')
let elSelRating = document.querySelector('.select_rating')
let elSelCategory = document.querySelector('.select_catagoriy')
let elSearchInp = document.querySelector('.search_inp')
let elSearchBtn = document.querySelector('.search_btn')
const partMovie = movies.splice(0,100)

function mapper(data){
  elMovieList.innerHTML=''
  data.forEach((item)=>{
    let newLi = document.createElement('li')
    newLi.innerHTML = `
    <div class="card" style="width: 16rem;height:27rem;">
    <img src="https://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.Title.length > 20 ? item.Title.toString().split('').splice(0,20).join('') + '... ': item.Title}</h5>
      <p class="card-text">${item.movie_year}</p>
      <p class="card-text">${item.Categories}</p>
      <p class="card-text">${item.imdb_rating}</p>
      <a href="https://www.youtube.com/watch?v=${item.ytid}" target="_blank" class="btn btn-primary">watch movie</a>
    </div>
  </div>
    `
    elMovieList.appendChild(newLi)
})
}
mapper(partMovie)

elSelYear.addEventListener('change', (e)=>{
    if(elSelYear.value == 'old'){
      mapper(partMovie.sort((a,b)=> a.movie_year-b.movie_year))
    }else{
      mapper(partMovie.sort((a,b)=> b.movie_year-a.movie_year))
    }
})

elSelRating.addEventListener('change', (e)=>{
  if(elSelRating.value == 'min'){
    mapper(partMovie.sort((a,b)=> a.imdb_rating-b.imdb_rating))
  }else{
    mapper(partMovie.sort((a,b)=> b.imdb_rating-a.imdb_rating))
  }
})


const categoryArr = []
partMovie.forEach((item) =>{
  if(categoryArr.includes(item.Categories) == false){
    categoryArr.push(item.Categories);
  }
})



categoryArr.forEach((item) =>{
  let newOption= document.createElement('option')
  newOption.textContent = item
  newOption.value = item
  elSelCategory.appendChild(newOption)
})

elSelCategory.addEventListener('change', (e)=>{
    mapper(partMovie.filter((item) => item.Categories ==
    elSelCategory.value));
})

elSearchBtn.addEventListener('click', () =>{
    console.log(elSearchInp.value);
    console.log(partMovie.filter((item) => item.Title ==
    elSearchInp.value));
})