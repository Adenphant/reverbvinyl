"use strict";

/* ---------- Global Variables ---------- */
let _records = [];
let frontpageRecords = [];
let page = 0;

// Fetching the data from our JSON file
async function fetchRecords() {
  // const url = "json/records.json";
  const response = await fetch('json/records.json');
  const data = await response.json();
  _records = data;
}

/* Insert data into our functions and initialize it------ */

async function initApp() {
    await fetchRecords();
    appendRecords(_records);
    appendRecordsIndex(_records);
}

initApp();

// Appending the 8 albums you see on the frontpage (8 albums)__________
function appendRecordsIndex(records){
  let html = "";
  for (let i = 0; i < 8 && i < records.length; i++) {
    // console.log(records[i]);
    let record = records[i];
    html+=`
    <div class="album">
      <img src="${record.albumCover}" onclick="showDetailView('${record.id}')" alt="${record.albumTitle}">
      <div>
          <strong class="album-title">${record.albumTitle}</strong>
          <p class="artist-title">${record.artistName}</p>
      </div>
    </div>
    `
}
  document.querySelector(".recordsIndex").innerHTML = html;
}

// Detail View___________________
function showDetailView(id) {
  const record = _records.find(record => record.id == id);
  let html = "";

  html+=`
    <section class="wrapper">
    <div class="detailWrapper">
    
    <img src="${record.albumCover}" id="hideonmobile" onclick="showDetailView('${record.id}')">
    <div id="detailAll">
    <h1 class="hideonmobile">${record.albumTitle}</h1>
    <h3 class="hideonmobile">${record.artistName}</h3>
    `
    if (record.inStock > 0) {
      html+=`
      <strong>Avalibility: <span class="green regular">In Stock</span></strong>
      `
    } else{
      html+=`
      <strong>Avalibility: <span class="red regular">Out of Stock</span></strong>
      `
    }
    html += /*html*/`
    <br><strong>Condition: <span class="regular">Mint</span></strong> 
    <p>${record.description}</p>
    <p id="detailPrice">${record.price} dkk</p>
    <a href="${record.discogsLink}" class="main-btn">Buy now</a>
    
    <div id="albumDetailsContainer">
      <button onclick="showTracklist()" class="active2 leftButton">Tracklist</button>
      <button onclick="showProductDetails()" class="rightButton">Details</button>
    </div>
    
      <div id="tracklist" >
      <ul>`
    for (let i = 0; i < record.tracks.length; i++) {
      html += /*html*/`
            <p>${[i + 1]}. ${record.tracks[i]}</p>
      `;
    }
/* 
  .join() only works if teh accesed key's value is in a form of an array
 */
    html += /*html*/`
    </ul>
    </div>
    <div id="productDetails">     
      <div id="productGrid">
        <p>Artist</p>
        <p>${record.artistName}</p>
        <p>Title</p>
        <p>${record.albumTitle}</p>
        <p>Producer(s)</p>
        <p>${record.producers.join(', ')}</p>
        <p>Release</p>
        <p>${record.release}</p>
        <p>Genre</p>
        <p>${record.genre.join(', ')}</p>
        <p>Style</p>
        <p>${record.style.join(', ')}</p>
        <p>Duration</p>
        <p>${record.duration}</p>
        <p>Location</p>
        <p>${record.location}</p>
        <p>Label</p>
        <p>${record.label}</p>
        <p>Condition</p>
        <p>${record.condition}</p>
        <p>In Stock</p>
        <p>${record.inStock}</p>
      </div>
    </div>
    </div>
    </div>
    <h2>We also recommend</h2>
    <div class="gridcontainer">`
    let records = _records;
    for (let i = 0; i < 4 && i < records.length; i++) {
      // console.log(records[i]);
      let record = records[i];
      html+=`
      <div class="album">
        <img src="${record.albumCover}" onclick="showDetailView('${record.id}')" alt="${record.albumTitle}">
        <div>
            <strong class="album-title">${record.albumTitle}</strong>
            <p class="artist-title">${record.artistName}</p>
        </div>
      </div>
      `
  } html+=`
    
    </div>
    </section>
  `
  document.querySelector("#detailView").innerHTML = html;
  navigateTo("detailView");
}

// Show tracklist if hidden
function showTracklist(){
  console.log("tracklist button");
  let t = document.getElementById("tracklist");
  let p = document.getElementById("productDetails");
  if(t.style.display = "none"){
    p.style.display = "none";
    t.style.display = "block"
  } 
}
// Show product details if hidden
function showProductDetails(){
  console.log("pd button");
  let t = document.getElementById("tracklist");
  let p = document.getElementById("productDetails");
  if(p.style.display = "none"){
    t.style.display = "none";
    p.style.display = "block"
  } 
}

// Records page append__________
// Append til Records side + Sorter + Filter
function appendRecords(records) {
  let html = "";
  for (const record of records) {
      html += /*html*/`
      <div class="album">
        <img src="${record.albumCover}" onclick="showDetailView('${record.id}')" alt="${record.albumTitle}">
        <div>
          <strong class="album-title">${record.albumTitle}</strong>
          <p class="artist-title">${record.artistName}</p>
        </div>
      </div>
    `;
    // console.log(record.condition);
  }
  
  document.querySelector(".records").innerHTML = html;
}

// Filter by Genre
function filterByGenre(genre) {
  // resetFilterByEnrollment();
  if (genre === "all") {
      appendRecords(_records);
  } else {
      const results = _records.filter(record => record.genre.includes(genre));
      appendRecords(results);
  }
}

// Search by genre and artist
function search(value) {
  resetFilterByGenre();
  value = value.toLowerCase();
  const results = _records.filter(record => {
      const album = record.albumTitle.toLowerCase();
      const artist = record.artistName.toLowerCase();
      // const genre = record.genre.some(value.includes(record.genre));
      if (album.includes(value) || artist.includes(value)) {
          return record;
      }
  });
  appendRecords(results);
}

//reset array
function resetFilterByGenre() {
  document.querySelector("#filterByGenre").value = "all";
}

// HEADER__________
// const menu = document.getElementById("header-links-mobile");
// menu.classList.remove("showMenu");
function showMobileHeader() {
  const menu = document.getElementById("header-links-mobile");
  if (menu.classList.contains("showMenu")){
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }
}

// document.getElementById("burgermenu").addEventListener("click", showMobileHeader());
