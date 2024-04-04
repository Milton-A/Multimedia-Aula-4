let playlistItems = document.querySelectorAll("#playlist ul li");
let videoPlayer = document.getElementById("video-player");
let pauseImage = document.getElementById("image");
function changeVideo(source, element) {
  videoPlayer.src = source;
  videoPlayer.load();
  videoPlayer.play();
  let title = document.getElementById("title");
  playlistItems.forEach((item) => {
    item.classList.remove('selected')
    if (item.children.length > 0) {

      item.children[0].classList.add("none");

    }
  });
  element.classList.contains("selected") ? element.classList.remove("selected") : element.classList.add("selected")
  element.children[0].classList.contains("none") ? element.children[0].classList.remove("none") : element.children[0].classList.add("none")
  const newTitle = element.children[1].innerHTML;
  title.innerHTML = newTitle;
  if (element.children.length > 0) {
    const source = element.children[0].src
    pauseImage.style.backgroundImage = `url('${source}')`
  }
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
videoPlayer.addEventListener('play', function () {
  if (videoPlayer.classList.contains("none")) videoPlayer.classList.remove("none")
  if (!pauseImage.classList.contains("none")) pauseImage.classList.add("none")
});

function playVideo() {
  videoPlayer.play();
  showHiddenVideoAndImage();
}