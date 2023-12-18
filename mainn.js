/*---------idex---winbox----*/7
const introduct = document.getElementById("introductions");
const winintru = document.getElementById("cardintru");

introduct.addEventListener('click',() => {
  const introductionswinbox =  new WinBox({
      title: 'intruduction ',
      
      background: '#519975',
      width:'800px',
      height: '500px',
      top:'50',
      left:'300',
      right:'20',
      bottom:'20',
      border: 2,
      
      mount: winintru,
  })
});
const shemas = document.getElementById("shemas");
const cardshema = document.getElementById("cardshema");

shemas.addEventListener('click',() => {
  const shemawinbox =  new WinBox({
      title: 'shema',
      
      background: '#519975',
      width:'800px',
      height: '500px',
      top:'50',
      left:'300',
      right:'20',
      bottom:'20',
      border: 2,
      
      mount: cardshema,
  })
});