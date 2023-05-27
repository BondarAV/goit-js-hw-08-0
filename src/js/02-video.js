import Player from "@vimeo/player";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const lastTime = localStorage.getItem("videoplayer-current-time");

if (lastTime !== null && lastTime !== undefined) {
  player.setCurrentTime(lastTime);
}

player.on(
  "timeupdate",
  _.throttle((event) => {
    localStorage.setItem("videoplayer-current-time", String(event.seconds));
  }, 1000)
);
