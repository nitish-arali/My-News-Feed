let newsAccordion = document.getElementById("newsAccordion");
var savedNews = [];
let data;
document.getElementById("headline").innerHTML = "Top News";
var loadingTime;

//Loader Function
function loadFunction() {
  loadingTime = setTimeout(showPage, 3500);
}
function showPage() {
  document.getElementById("load").classList.remove("load");
}

function loader() {
  document.getElementById("load").classList.add("load");
  loadFunction();
}

//Sending API request
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
  } else {
    console.log("Some Error Occured");
  }
};

function All() {
  loader();
  document.getElementById("headline").innerHTML = "Top News";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=all", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
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
    } else {
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function Automobile() {
  loader();
  document.getElementById("headline").innerHTML = "Automobile News";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=automobile", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
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
    } else {
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function Business() {
  loader();
  document.getElementById("headline").innerHTML = "Business News";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=business", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
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
    } else {
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function Entertainment() {
  loader();
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
    } else {
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function Hatke() {
  loader();
  document.getElementById("headline").innerHTML = "Unconventional News";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=hatke", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
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
    } else {
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function Miscellaneous() {
  loader();
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
    } else {
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function National() {
  loader();
  document.getElementById("headline").innerHTML = "National News";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=national ", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
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
    } else {
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function Politics() {
  loader();
  document.getElementById("headline").innerHTML = "Politics";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=politics", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
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
    } else {
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function Science() {
  loader();
  document.getElementById("headline").innerHTML = "Science News";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=science", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
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
    } else {
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function Sports() {
  loader();
  document.getElementById("headline").innerHTML = "Sports News";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=sports", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
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
    } else {
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function Startup() {
  loader();
  document.getElementById("headline").innerHTML = "StartUp News";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=startup", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
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
    } else {
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function Technology() {
  loader();
  document.getElementById("headline").innerHTML = "Technology News";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=technology", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
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
    } else {
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

function World() {
  loader();
  document.getElementById("headline").innerHTML = "World News";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://inshorts.deta.dev/news?category=world", true);
  xhttp.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      data = json.data;
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
    } else {
      console.log("Some Error Occured");
    }
  };
  xhttp.send();
}

//function to save news to local storage
function BookmarkNews(index) {
  document.getElementById("bookmark-el_" + index).classList.add("redHeart");
  var z = data[index];
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
  console.log(index);
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
xhttp.send();
