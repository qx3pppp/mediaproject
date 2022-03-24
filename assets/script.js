let name = "athbi";

let object = {
  deathnote: {
    name: "sometitle ",
    info: "cool",
    img: "./assets/images/deathnote.jpg",
  },
  aot: {
    name: "attack on titan",
    info: "انمي جدا جدا جدا جدا قوي",
    img: "./assets/images/aot.jpg",
  },
  demon: {
    name: "Demon slayer",
    info: "cool",
    img: "./assets/images/demon.jpg",
  },
};

function changeBox(type) {
  if (type == "moveis") {
    //شيلل كل البوكسات
    document.getElementById("moviesList").style.display = "flex";
    document.getElementById("showsList").style.display = "none";
    document.getElementById("animeList").style.display = "none";
    //طلع لي بوكس الموفيز فقط
  } else if (type == "anime") {
    //شيلل كل البوكسات
    document.getElementById("moviesList").style.display = "none";
    document.getElementById("showsList").style.display = "none";
    document.getElementById("animeList").style.display = "flex";
    //طلع لي بوكس الانمي فقط
  } else if (type == "shows") {
    //شيلل كل البوكسات
    document.getElementById("moviesList").style.display = "none";
    document.getElementById("showsList").style.display = "flex";
    document.getElementById("animeList").style.display = "none";
    //طلع لي بوكس المسلسلات فقط
  }
}

function viewinfo(key) {
  document.getElementById("infoContainer").style.display = "flex";
  let dataName = object[key]["name"];
  let dataInfo = object[key]["info"];
  let dataImg = object[key]["img"];
  document.getElementById("detail-title").innerHTML = dataName;
  document.getElementById("detail-info").innerHTML = dataInfo;
  document.getElementById("detail-img").src = dataImg;
}

function closeWindow() {
  document.getElementById("infoContainer").style.display = "none";
}
