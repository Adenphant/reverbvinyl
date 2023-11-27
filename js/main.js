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
      <div id="tracklist" >`
    for (let i = 0; i < record.tracks.length; i++) {
      html += /*html*/`
            <p>${[i + 1]}. ${record.tracks[i]}</p>
      `;
    }
    html += /*html*/`
      </div>
      <div id="productDetails">
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
          <li>${record.}</li>
          <li>${record.}</li>
          <li>${record.}</li>
          <li>${record.}</li>
          <li>${record.}</li>
          <li>${record.}</li>
        </ul>
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

// function albumDetails(){
//   let t = document.getElementById("tracklist");
//   let p = document.getElementById("productDetails");
//   if(t.style.display === "block" && p.style.display === "none"){
//     t.style.display = "none";
//     p.style.display === "block"
//   } else {
//     p.style.display = "none";
//     t.style.display === "block"
//   }
// }

// Records page append__________
// Append til Records side + Sorter + Filter
function appendRecords(records) {
  let html = "";
  for (const record of records) {
      html += /*html*/`
          <article>
            <img src="${record.albumCover}">
            <p class="album-title">${record.albumTitle}</p>
            <p class="artist-title">${record.artistName}</p>
            <p>${record.id}</p>
            <p>Condition: ${record.condition}</p>
            <p>${record.description}</p>
      `;
      if (record.inStock > 0) {
        html+=`
        <p>Avalibility: <span class="green">In Stock</span></p>
        `
      } else{
        html+=`
        <p>Avalibility: Out of Stock</p>
        `
      }
      for (let i = 0; i < record.tracks.length; i++) {
        html += /*html*/`
              <p>${[i + 1]}. ${record.tracks[i]}</p>
        `;
      }
      html += /*html*/`
      </article>
    `;
    // console.log(record.condition);
  }
  
  document.querySelector(".records").innerHTML = html;
}

// if (!_selectedUserId) {
//   navigateTo("users");
// }
// function appendAlbumsIndex(albums){
//   let html = "";
//   for (let i = 0; i < 1 && i < albums.length; i++) {
//     for (const album of albums){
//     html+=`
//     <div class="album">
//       <a href="index.html"><img src="${album.albumCover}" alt="${album.albumTitle}"></a>
//       <div>
//           <strong class="album-title">${album.albumTitle}</strong>
//           <p class="artist-title">${album.artistName}</p>
//       </div>
//     </div>
//     `
//   }
// }
//   document.querySelector(".recordsIndex").innerHTML = html;
// }