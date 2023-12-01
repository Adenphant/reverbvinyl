/* <div id="productGrid">
        <p>Artist</p>
        <p>${record.artistName}</p>
        <p>Title</p>
        <p>${record.albumTitle}</p>
        <p>Producer(s)</p>
        <p>${record.producers[0]}</p>
        <p>Release</p>
        <p>${record.release}</p>
        <p>Duration</p>
        <p>${record.duration}</p>
        <p>Genre</p>
        <p>${record.genre}</p>
        <p>Style</p>
        <p>${record.style[0]}</p>
        <p>Location</p>
        <p>${record.location}</p>
        <p>Label</p>
        <p>${record.label}</p>
        <p>Condition</p>
        <p>${record.condition}</p>
        <p>In Stock</p>
        <p>${record.inStock}</p>
      </div>
    <div class="flex2">
        <ul id="productKeys">
          <li>Artist</li>
          <li>Title</li>
          <li>Producer(s)</li>
          <li>Release</li>
          <li>Duration</li>
          <li>Genre</li>
          <li>Label</li>
          <li>Condition</li>
          <li>In Stock</li>
        </ul>
        <ul id="productValues">
          <li>${record.artistName}</li>
          <li>${record.albumTitle}</li>
          <li>${record.producers[0]}</li>
          <li>${record.release}</li>
          <li>${record.duration}</li>
          <li>${record.genre}</li>
          <li>${record.label}</li>
          <li>${record.condition}</li>
          <li>${record.inStock}</li>
        </ul>
      </div>

      <div id="productDetails">
      <ul>
        <li>Artist</li>
        <li>${record.artistName}</li>
      </ul>
      <ul>
        <li>Title</li>
        <li>${record.albumTitle}</li>
      </ul>
      <ul>
        <li>Genre</li>
        <li>${record.genre.join(', ')}</li>
      </ul>
      <ul>
        <li>Style</li>
        <li>${record.style.join(', ')}</li>
      </ul>
      <ul>
      <li>Producers</li>
      <li>${record.producers.join(', ')}</li>
    </ul>
    </div>
      TEST
        <ul>
          <li>Artist</li>
          <li>artistName</li>
        </ul> */

// function myFunction() {
//   // Get the checkbox
//   let checkBox = document.getElementById("menu-toggle");
//   // Get the output text
//   let text = document.getElementById("#header-links-mobile");

//   // If the checkbox is checked, display the output text
//   if (checkBox.checked == true){
//     text.style.display = "block";
//   } else {
//     text.style.display = "none";
//   }
// }

// Sort by
// function orderBy(option){
//   if(option === "titleA"){
//     orderByAlbumtitleA();
//   } 
//   else if(option === "titleZ"){
//     orderByAlbumtitleZ();
//   }
// }

// function orderByAlbumtitleA(){
//   _records.sort((a, b) => {
//     return a.albumTitle.localCompare(b.albumTitle)
//   });
//   appendRecords(_records);
// }

// function orderByAlbumtitleZ(){
//   _records.sort((record1, record2) => {
//     return record1.albumTitle.localCompare(record2.albumTitle)
//   });
//   appendRecords(_records);
// }
// Rap/Hip-Hop, Rock, Electronic, Soul, Jazz, RnB
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