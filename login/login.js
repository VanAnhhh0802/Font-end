var adminApi = 'http://localhost:3000/Account';
fetch(adminApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(admin) {
        console.log(admin);
    })