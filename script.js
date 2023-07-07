let newsAccordion = document.getElementById("newsAccordion");
var savedNews = [];
let newsData;
const headline = document.getElementById("headline").innerHTML;

//Loader Function
function removeLoader() {
  document.getElementById("load").classList.remove("load");
}

function addLoader() {
  document.getElementById("load").classList.add("load");
}

//onLoad function

function onLoadFunction() {
  addLoader();
  callApi("all");
}

function callApi(value) {
  addLoader();
  document.getElementById("headline").innerHTML =
    value === "all" ? "Top News" : value.toUpperCase();
  fetch(`https://inshorts-news-api-henna.vercel.app/news?category=${value}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      newsData = data.data;
      console.log(newsData);
      let newsHtml = "";
      newsData.forEach(function (element, index) {
        let news = `<div class="card mb-3" style="max-width: 100%;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${element["imageUrl"]}" class="card-img-top" alt="${element["title"]}" style ="width = 100%">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" style="font-family:Trebuchet MS; font-size:large"><strong>${element["title"]}</strong></h5>
            <p class="card-text" style="font-family:Nirmala UI;">${element["content"]}</p>
            <p class="card-text"><small class="text-muted"style="font-family: Gabriola;font-size: large">by ${element["author"]},&ensp; ${element["date"]},&ensp; ${element["time"]}</small></p>
            <a href="${element["url"]}" class="btn btn-primary">Read More</a>&emsp;&emsp;
                      <button onclick="BookmarkNews(${index})">
                      <a><span class="fas fa-heart" aria-hidden="true" id="bookmark-el_${index}"> </span></a>
                        </div>
                      </button>
            </div>
        </div>
      </div>
    </div>`;
        newsHtml += news;
      });
      newsAccordion.innerHTML = newsHtml;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      removeLoader();
    });
}

//function to save news to local storage
function BookmarkNews(index) {
  document.getElementById("bookmark-el_" + index).classList.add("redHeart");
  var z = newsData[index];
  var x1 = localStorage.getItem("SavedNews");
  var y = [];
  var m = 0;

  if (x1 != "null" && x1 != null) {
    y = JSON.parse(x1);
    if (y != null) {
      m = y.filter((f) => f.title == z.title).length;
    }
  }

  if (m != undefined && m == 0) {
    localStorage.clear();
    y.push(z);
    var d = JSON.stringify(y);
    localStorage.setItem("SavedNews", d);
  } else {
    alert("News Already Saved");
  }
}
//deleting the specific news from local storage and rendering it
function deleteNews(index) {
  var s = localStorage.getItem("SavedNews");
  var s1 = JSON.parse(s);
  s1.splice(index, 1);
  var t = JSON.stringify(s1);

  localStorage.clear();
  localStorage.setItem("SavedNews", t);

  GetSavedNews();
}

//rendering the saved news from local storage
function GetSavedNews() {
  document.getElementById("headline").innerHTML = "Saved News";
  var x = localStorage.getItem("SavedNews");
  if (x != "null" || x != null) {
    var y = JSON.parse(x);

    if (y.length > 0) {
      data = y;
      let newsHtml = "";
      data.forEach(function (element, index) {
        let news = `<div class="card mb-3" style="max-width: 100%;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${element["imageUrl"]}" class="card-img-top" alt="${element["title"]}" style ="width = 100%">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title" style="font-family:Trebuchet MS; font-size:large"><strong>${element["title"]}</strong></h5>
                <p class="card-text" style="font-family:Nirmala UI;">${element["content"]}</p>
                <p class="card-text"><small class="text-muted"style="font-family: Gabriola;font-size: large">
                    by ${element["author"]},&ensp; ${element["date"]},&ensp; ${element["time"]}</small></p>
                <a href="${element["url"]}" class="btn btn-primary" target=-blank>Read More</a>&emsp;&emsp;
                <button onclick="deleteNews(${index})">
                <a><span class="fa fa-trash-o" style=" font-size: 28px;" aria-hidden="true" id="delete-el"> </span></a>
                  </div>
                </button>
                </div>
            </div>
          </div>
        </div>`;
        newsHtml += news;
      });
      newsAccordion.innerHTML = newsHtml;
    } else {
      newsAccordion.innerHTML = "<h3>No News Saved<h3>";
    }
  } else {
    newsAccordion.innerHTML = "<h3>No News Saved<h3>";
  }
}
