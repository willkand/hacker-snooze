let newsContainer = document.querySelector("#news-container");
let newsList = document.createElement("ol");
newsList.className = "newsList";
newsContainer.appendChild(newsList);

fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(function (res){
        return res.json();
    })
    .then(function (data) {
        return data;
    })
    .then(function(newsId) {
        for (let i = 0; i < 500; i++) {
            fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId[i]}.json?print=pretty`)
                .then(function (res) {
                    return res.json();
                })
                .then(function (data) {
                    console.log(data);
                   
                    const news = document.createElement("li");
                    news.className = "news"

                    newsList.appendChild(news);

                    news.innerHTML = `<a href="${data.url}">${data.title}</a> <br /> ${data.score} points, by ${data.by} | ${data.descendants} comments` ;
                })
        }
    })