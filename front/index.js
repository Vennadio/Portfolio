document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const data = {
      name: name,
      email: email,
      password: password
    };
  
    fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message); 

      })
      .catch(error => {
        console.error('Ошибка:', error);
      });
  });



  
