let playlistItems = document.querySelectorAll("#playlist ul li");
let videoPlayer = document.getElementById("video-player");
let pauseImage = document.getElementById("image");
function changeVideo(source, element) {
  videoPlayer.src = source;
  videoPlayer.load();
  videoPlayer.play();
  playlistItems.forEach((item) => item.classList.remove('selected'));
  videoPlayer.classList.contains("selected") ? videoPlayer.classList.remove("selected") : videoPlayer.classList.add("selected")
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
  currentSelectedIndex++
  console.log(currentSelectedIndex)
  playlistItems[currentSelectedIndex].click();
}
function showHiddenVideoAndImage() {
  videoPlayer.classList.contains("none") ? videoPlayer.classList.remove("none") : videoPlayer.classList.add("none")
  pauseImage.classList.contains("none") ? pauseImage.classList.remove("none") : pauseImage.classList.add("none")
}
videoPlayer.addEventListener('pause', function () { showHiddenVideoAndImage() });

function playVideo() {
  videoPlayer.play();
  showHiddenVideoAndImage();
}