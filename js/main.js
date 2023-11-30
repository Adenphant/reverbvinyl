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
    <section>
    <div class="detailWrapper">
    <h1>${record.albumTitle}</h1>
    <h3>${record.artistName}</h3>
    
    <img src="${record.albumCover}" onclick="showDetailView('${record.id}')">
    
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
    </div>
    <div id="albumDetailsContainer">
      <button onclick="showTracklist()" class="active2 leftButton">Tracklist</button>
      <button onclick="showProductDetails()" class="rightButton">Details</button>
    </div>
    <div class="detailWrapper">
      <div id="tracklist" >
      <ul>`
    for (let i = 0; i < record.tracks.length; i++) {
      html += /*html*/`
            <li>${[i + 1]}. ${record.tracks[i]}</li>
      `;
    }
    html += /*html*/`
      </ul>
      </div>
      <div id="productDetails">
        <div class="flex2">
          <ul id="productKeys">
            <li>Artist</li>
            <li>Title</li>
            <li>Producer(s)</li>
            <li>Release</li>
            <li>Duration</li>
            <li>Genre</li>
            <li>Style</li>
            <li>Location</li>
            <li>Label</li>
            <li>Condition</li>
            <li>In Stock</li>
          </ul>
          <ul id="productValues">
            <li>${record.artistName}</li>
            <li>${record.albumTitle}</li>
            <li>${record.producers}</li>
            <li>${record.release}</li>
            <li>${record.duration}</li>
            <li>${record.genre}</li>
            <li>${record.style}</li>
            <li>${record.location}</li>
            <li>${record.label}</li>
            <li>${record.condition}</li>
            <li>${record.inStock}</li>
          </ul>
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

// Sort by
function orderBy(option){
  if(option === "titleA"){
    orderByAlbumtitleA();
  } 
  else if(option === "titleZ"){
    orderByAlbumtitleZ();
  }
}

function orderByAlbumtitleA(){
  _records.sort((a, b) => {
    return a.albumTitle.localCompare(b.albumTitle)
  });
  appendRecords(_records);
}

function orderByAlbumtitleZ(){
  _records.sort((record1, record2) => {
    return record1.albumTitle.localCompare(record2.albumTitle)
  });
  appendRecords(_records);
}

// function compareStrings(a, b) {
//   // Assuming you want case-insensitive comparison

//   return (a < b) ? -1 : (a > b) ? 1 : 0;
// }
// function orderByTitle(){
//   _records.sort((a, b) => {
//     a = a.toLowerCase();
//     b = b.toLowerCase();
//     return a.albumTitle < b.albumTitle ? -1 : a.albumTitle > b.albumTitle ? 1 : 0;
//   });
// }