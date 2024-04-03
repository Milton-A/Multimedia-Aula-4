var playlistItems = document.querySelectorAll("#playlist ul li");

function changeVideo(source, element) {
  var videoPlayer = document.getElementById("video-player");
  videoPlayer.src = source;
  videoPlayer.load();
  videoPlayer.play();
  playlistItems.forEach((item)=>item.classList.remove('selected'));
  element.classList.contains("selected")?element.classList.remove("selected") : element.classList.add("selected") 
}

function prevVideo() {
  var currentSelectedIndex = Array.from(playlistItems).findIndex((item) =>
    item.classList.contains("selected")
  );
 
  var prevSelectedIndex = currentSelectedIndex - 1;
  if (prevSelectedIndex >= 0) {
    playlistItems[prevSelectedIndex].click();
  }
}

function nextVideo() {
  var currentSelectedIndex = Array.from(playlistItems).findIndex((item) =>
      item.classList.contains("selected")
  );
  currentSelectedIndex ++
  console.log(currentSelectedIndex)
  playlistItems[currentSelectedIndex].click();
}
