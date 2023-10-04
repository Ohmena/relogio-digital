const horas = document.querySelector('.horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');

const getTime = () => {
  const todayDate = new Date();
  return {
    hours: todayDate.getHours(),
    minutes: todayDate.getMinutes(),
    seconds: todayDate.getSeconds(),
  };
};

//Adiciona um 0 na frente caso o número seja menor que 10
const formatNumber = (num) => {
  return num < 10 ? `0${num}` : num;
};

setInterval(() => {
  const { hours, minutes, seconds } = getTime();

  horas.innerHTML = formatNumber(hours);
  minutos.innerHTML = formatNumber(minutes);
  segundos.innerHTML = formatNumber(seconds);
});
