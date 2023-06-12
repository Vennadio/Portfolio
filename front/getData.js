function showMiniPage() {
var miniPage = document.getElementById("miniPage");
miniPage.style.display = "block";
}

function logout() {
window.location.href = "main.html";
}


function fetchAndRenderFlights() {
    fetch('http://localhost:3000/api/flights')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const arrivalList = document.getElementById('arrival-list');
    
  

        data.result.forEach(flight => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            const button = document.createElement('button');
            button.textContent = 'buy';
            li.textContent = `${flight.nameFlight} ${flight.Date} ${flight.Time} \t ${flight.PriceRUB}`;
            a.href = 'https://www.aeroflot.ru/xx-en';
            button.addEventListener('click', () => {
              window.location.href = a.href;
            }); 
            li.appendChild(a);
            li.appendChild(button);
            arrivalList.appendChild(li);
          });
          
  
      })
      .catch(error => {
        console.error('Ошибка при выполнении запроса:', error);
      });
  }
  
document.addEventListener('DOMContentLoaded', function() {
    fetchAndRenderFlights();
});