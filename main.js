
  const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ae8ac7611e9c44ac896a3309adf84180";
  fetch(url)
    .then(data => data.json())
    .then(result => news(result.articles))

let news = articles => {
  
  
  articles.forEach(article =>{
let ArticlesDesc = document.createElement('div');
let cards = document.getElementById('cards').appendChild(ArticlesDesc);
    ArticlesDesc.innerHTML = `<div id="allCards">
    <div class="card" style="width: 30rem;">
      <img src="${article.urlToImage}" class="card-img-top" id = "newsimage" alt="internet connection error">
      <div class="card-body">
        <h5 class="card-title">${article.title}</h5>
        <p class="card-text">${article.description}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">author : ${article.author}</li>
        <li class="list-group-item">publish at ${article.publishedAt}</li>
        
      </ul>
      <a href="${article.url}" class="btn btn-primary">show more</a>
      </div>
    </div>
    </div>`
  }

  )
  
};
