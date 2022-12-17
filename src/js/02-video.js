import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

localStorage.getItem('videoplayer-current-time')
  ? player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  : 0;
player.on(
  'timeupdate',
  throttle(function (evt) {
    localStorage.setItem('videoplayer-current-time', evt.seconds);

    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
  }, 1000)
);
