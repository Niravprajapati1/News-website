
  const url = "https://api.thenewsapi.com/v1/news/top?api_token=whIfWwb6ycjYjsEQSlCMg8iz6PwvkasigcltwF7L&locale=in&limit=5"
  ;
 
 const url2 = "https://api.thenewsapi.com/v1/news/all?api_token=whIfWwb6ycjYjsEQSlCMg8iz6PwvkasigcltwF7L&language=en&categories=business%2Ctech&exclude_categories=travel&published_after=2022-05-04";
 fetch(url)
    .then(url => url.json())
    .then(result => news(result.data))
fetch(url2)
  .then(url2 => url2.json())
  .then(result => news(result.data))
let news = articles => {
  
  
articles.forEach(article =>{
 
let ArticlesDesc = document.createElement('div');
ArticlesDesc.classList.add('Card')
let mainSection = document.getElementById('mainSection').appendChild(ArticlesDesc);
    ArticlesDesc.innerHTML = `<div id="allCards">
    <div class="box m-5" id="card">
      <div><img src="${article.image_url}" id = "newsimage" alt=""></>
      <div class="card-body">
        <h5 class="card-title">${article.title}</h5>
        <p class="card-text">${article.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">source : ${article.source}</li>
        <li class="list-group-item">publish at ${article.published_at}</li>
        
      </ul>
      <a href="${article.url}" class="btn btn-primary">show more</a>
      </div>
    </div>
    </div>`
  }

  )
  
};
