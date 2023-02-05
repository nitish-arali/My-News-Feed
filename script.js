let newsAccordion = document.getElementById("newsAccordion");
var savedNews = [];
let data;
document.getElementById("headline").innerHTML = "Top News";
const xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://inshorts.deta.dev/news?category=all", true);
xhttp.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    data = json.data;
    console.log(data);
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
            <p class="card-text"><small class="text-muted"style="font-family: Gabriola;font-size: large">by ${element["author"]},&ensp; ${element["date"]},&ensp; ${element["time"]}</small></p>
            <a href="${element["url"]}" class="btn btn-primary">Read More</a>&emsp;&emsp;
                      <button onclick="BookmarkNews(${index})">
                          <a href="#" class="btn btn-primary">
                          <span class="glyphicon glyphicon-bookmark" id="bookmark-el" >&ensp;</span>Bookmark </a>
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
    console.log("Some Error Occured");
  }
};

function All() {
  document.getElementById("headline").innerHTML = "Top News";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=science", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
      console.log(data);
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
            <p class="card-text"><small class="text-muted"style="font-family: Gabriola;font-size: large">by ${element["author"]},&ensp; ${element["date"]},&ensp; ${element["time"]}</small></p>
            <a href="${element["url"]}" class="btn btn-primary">Read More</a>&emsp;&emsp;
                      <button onclick="BookmarkNews(${index})">
                          <a href="#" class="btn btn-primary">
                          <span class="glyphicon glyphicon-bookmark" id="bookmark-el" >&ensp;</span>Bookmark </a>
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
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function Automobile() {
  document.getElementById("headline").innerHTML = "Automobile News";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=automobile", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
      console.log(data);
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
              <p class="card-text"><small class="text-muted"style="font-family: Gabriola;font-size: large">by ${element["author"]},&ensp; ${element["date"]},&ensp; ${element["time"]}</small></p>
              <a href="${element["url"]}" class="btn btn-primary">Read More</a>&emsp;&emsp;
                        <button onclick="BookmarkNews(${index})">
                            <a href="#" class="btn btn-primary">
                            <span class="glyphicon glyphicon-bookmark" id="bookmark-el" >&ensp;</span>Bookmark </a>
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
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function Business() {
  document.getElementById("headline").innerHTML = "Business News";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=business", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
      console.log(data);
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
            <p class="card-text"><small class="text-muted"style="font-family: Gabriola;font-size: large">by ${element["author"]},&ensp; ${element["date"]},&ensp; ${element["time"]}</small></p>
            <a href="${element["url"]}" class="btn btn-primary">Read More</a>&emsp;&emsp;
                      <button onclick="BookmarkNews(${index})">
                          <a href="#" class="btn btn-primary">
                          <span class="glyphicon glyphicon-bookmark" id="bookmark-el" >&ensp;</span>Bookmark </a>
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
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function Entertainment() {
  document.getElementById("headline").innerHTML = "Entertainment News";
  const xhttp = new XMLHttpRequest();
  xhttp.open(
    "GET",
    "https://inshorts.deta.dev/news?category=entertainment",
    true
  );
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
      console.log(data);
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
              <p class="card-text"><small class="text-muted"style="font-family: Gabriola;font-size: large">by ${element["author"]},&ensp; ${element["date"]},&ensp; ${element["time"]}</small></p>
              <a href="${element["url"]}" class="btn btn-primary">Read More</a>&emsp;&emsp;
                        <button onclick="BookmarkNews(${index})">
                            <a href="#" class="btn btn-primary">
                            <span class="glyphicon glyphicon-bookmark" id="bookmark-el" >&ensp;</span>Bookmark </a>
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
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function Hatke() {
  document.getElementById("headline").innerHTML = "Unconventional News";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=hatke", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
      console.log(data);
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
              <p class="card-text"><small class="text-muted"style="font-family: Gabriola;font-size: large">by ${element["author"]},&ensp; ${element["date"]},&ensp; ${element["time"]}</small></p>
              <a href="${element["url"]}" class="btn btn-primary">Read More</a>&emsp;&emsp;
                        <button onclick="BookmarkNews(${index})">
                            <a href="#" class="btn btn-primary">
                            <span class="glyphicon glyphicon-bookmark" id="bookmark-el" >&ensp;</span>Bookmark </a>
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
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function Miscellaneous() {
  document.getElementById("headline").innerHTML = "Miscellaneous";
  const xhttp = new XMLHttpRequest();
  xhttp.open(
    "GET",
    "https://inshorts.deta.dev/news?category=miscellaneous",
    true
  );
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
      console.log(data);
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
            <p class="card-text"><small class="text-muted"style="font-family: Gabriola;font-size: large">by ${element["author"]},&ensp; ${element["date"]},&ensp; ${element["time"]}</small></p>
            <a href="${element["url"]}" class="btn btn-primary">Read More</a>&emsp;&emsp;
                      <button onclick="BookmarkNews(${index})">
                          <a href="#" class="btn btn-primary">
                          <span class="glyphicon glyphicon-bookmark" id="bookmark-el" >&ensp;</span>Bookmark </a>
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
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function National() {
  document.getElementById("headline").innerHTML = "National News";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=national ", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
      console.log(data);
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
            <p class="card-text"><small class="text-muted"style="font-family: Gabriola;font-size: large">by ${element["author"]},&ensp; ${element["date"]},&ensp; ${element["time"]}</small></p>
            <a href="${element["url"]}" class="btn btn-primary">Read More</a>&emsp;&emsp;
                      <button onclick="BookmarkNews(${index})">
                          <a href="#" class="btn btn-primary">
                          <span class="glyphicon glyphicon-bookmark" id="bookmark-el" >&ensp;</span>Bookmark </a>
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
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function Politics() {
  document.getElementById("headline").innerHTML = "Politics";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=politics", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
      console.log(data);
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
              <p class="card-text"><small class="text-muted"style="font-family: Gabriola;font-size: large">by ${element["author"]},&ensp; ${element["date"]},&ensp; ${element["time"]}</small></p>
              <a href="${element["url"]}" class="btn btn-primary">Read More</a>&emsp;&emsp;
                        <button onclick="BookmarkNews(${index})">
                            <a href="#" class="btn btn-primary">
                            <span class="glyphicon glyphicon-bookmark" id="bookmark-el" >&ensp;</span>Bookmark </a>
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
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function Science() {
  document.getElementById("headline").innerHTML = "Science News";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=science", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
      console.log(data);
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
              <p class="card-text"><small class="text-muted"style="font-family: Gabriola;font-size: large">by ${element["author"]},&ensp; ${element["date"]},&ensp; ${element["time"]}</small></p>
              <a href="${element["url"]}" class="btn btn-primary">Read More</a>&emsp;&emsp;
                        <button onclick="BookmarkNews(${index})">
                            <a href="#" class="btn btn-primary">
                            <span class="glyphicon glyphicon-bookmark" id="bookmark-el" >&ensp;</span>Bookmark </a>
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
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function Sports() {
  document.getElementById("headline").innerHTML = "Sports News";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=sports", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
      console.log(data);
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
              <p class="card-text"><small class="text-muted"style="font-family: Gabriola;font-size: large">by ${element["author"]},&ensp; ${element["date"]},&ensp; ${element["time"]}</small></p>
              <a href="${element["url"]}" class="btn btn-primary">Read More</a>&emsp;&emsp;
                        <button onclick="BookmarkNews(${index})">
                            <a href="#" class="btn btn-primary">
                            <span class="glyphicon glyphicon-bookmark" id="bookmark-el" >&ensp;</span>Bookmark </a>
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
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function Startup() {
  document.getElementById("headline").innerHTML = "StartUp News";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=startup", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
      console.log(data);
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
              <p class="card-text"><small class="text-muted"style="font-family: Gabriola;font-size: large">by ${element["author"]},&ensp; ${element["date"]},&ensp; ${element["time"]}</small></p>
              <a href="${element["url"]}" class="btn btn-primary">Read More</a>&emsp;&emsp;
                        <button onclick="BookmarkNews(${index})">
                            <a href="#" class="btn btn-primary">
                            <span class="glyphicon glyphicon-bookmark" id="bookmark-el" >&ensp;</span>Bookmark </a>
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
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function Technology() {
  document.getElementById("headline").innerHTML = "Technology News";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=technology", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
      console.log(data);
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
              <p class="card-text"><small class="text-muted"style="font-family: Gabriola;font-size: large">by ${element["author"]},&ensp; ${element["date"]},&ensp; ${element["time"]}</small></p>
              <a href="${element["url"]}" class="btn btn-primary">Read More</a>&emsp;&emsp;
                        <button onclick="BookmarkNews(${index})">
                            <a href="#" class="btn btn-primary">
                            <span class="glyphicon glyphicon-bookmark" id="bookmark-el" >&ensp;</span>Bookmark </a>
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
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function World() {
  document.getElementById("headline").innerHTML = "World News";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=world", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
      console.log(data);
      let newsHtml = "";
      data.forEach(function (element, index) {
        let news = `<div class="card mb-3" style="max-width: 100%;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${element["imageUrl"]}" class="card-img-top" alt="${element["title"]}" style ="width = 100%">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" style="font-family:Trebuchet MS; font-size:large">
            <strong>${element["title"]}</strong></h5>
            <p class="card-text" style="font-family:Nirmala UI;">${element["content"]}</p>
            <p class="card-text"><small class="text-muted"style="font-family: Gabriola;font-size: large">
            by ${element["author"]},&ensp; ${element["date"]},&ensp; ${element["time"]}</small></p>
            <a href="${element["url"]}" class="btn btn-primary">Read More</a>&emsp;&emsp;
                <button onclick="BookmarkNews(${index})">
                    <a href="#" class="btn btn-primary">
                    <span class="glyphicon glyphicon-bookmark" id="bookmark-el">&ensp;</span>Bookmark</a>
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
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function BookmarkNews(index) {
  console.log(index);
  var z = data[index];
  var x = JSON.stringify(z);
  savedNews.push(x);
  localStorage.setItem("SavedNews", savedNews);
  console.log(savedNews);
}

function GetSavedNews() {
  document.getElementById("headline").innerHTML = "Saved News";
  var x = localStorage.getItem("SavedNews");
  var z = "[" + x + "]";
  var y = JSON.parse(z);

  if (y.length > 0) {
    data = y;
    console.log(data);
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
            <p class="card-text"><small class="text-muted"style="font-family: Gabriola;font-size: large">by ${element["author"]},&ensp; ${element["date"]},&ensp; ${element["time"]}</small></p>
            <a href="${element["url"]}" class="btn btn-primary">Read More</a>&emsp;&emsp;
                      <button onclick="BookmarkNews(${index})">
                          <a href="#" class="btn btn-primary">
                          <span class="glyphicon glyphicon-bookmark" id="bookmark-el" >&ensp;</span>Bookmark </a>
                        </div>
                        </button>
            </div>
        </div>
      </div>
    </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  }
}
xhttp.send();
