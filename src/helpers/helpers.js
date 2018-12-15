export const timerCounter = (num) => {
  const currentTime = num.split(':').reduce((a,b) => parseInt(a*60) + parseInt(b));
  const nextTime = currentTime - 1;
  Math.floor(nextTime / 60);
  const getSeconds = Math.round((nextTime / 60) * 100 + Number.EPSILON) / 100 % 1;
  const seconds = Math.round(getSeconds * 100 + Number.EPSILON) / 100 * 60;
  return `${Math.floor(nextTime / 60)}:${Math.round(seconds)}`;
}

export const numTransform = (num) => {
  return `${num}`.split(':').map(num => num.length < 2 ? `0${num}` : num).join(':');
}

