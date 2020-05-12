//document.getElementById('getUser').addEventListener('click', getUser);


    fetch('https://jsonplaceholder.typicode.com/users/1')
     .then((res) => res.json())
     .then(data => {
        let output =`
        <h2>${data.name}</h2>
        <p>${data.email}</p>
        <p>${data.phone}</p>
    `;

        document.getElementById('result').innerHTML =  output;
    });
    fetch('https://jsonplaceholder.typicode.com/users/2')
    .then((res) => res.json())
    .then(data => {
        let output1 = `
        <h2>${data.name}</h2>
        <p>${data.email}</p>
        <p>${data.phone}</p>  
        `;
        document.getElementById('results').innerHTML = output1;
    });
    fetch('https://jsonplaceholder.typicode.com/users/3')
    .then((res) => res.json())
    .then(data => {
        let output2 = `
        <h2>${data.name}</h2>
        <p>${data.email}</p>
        <p>${data.phone}</p>  
        `;
        document.getElementById('results2').innerHTML = output2;
    });
    fetch('https://jsonplaceholder.typicode.com/users/4')
    .then((res) => res.json())
    .then(data => {
        let output3 = `
        <h2>${data.name}</h2>
        <p>${data.email}</p>
        <p>${data.phone}</p>  
        `;
        document.getElementById('results3').innerHTML = output3;
    });
    fetch('https://jsonplaceholder.typicode.com/users/5')
    .then((res) => res.json())
    .then(data => {
        let output4 = `
        <h2>${data.name}</h2>
        <p>${data.email}</p>
        <p>${data.phone}</p>  
        `;
        document.getElementById('results4').innerHTML = output4;
    });
    fetch('https://jsonplaceholder.typicode.com/users/6')
    .then((res) => res.json())
    .then(data => {
        let output5 = `
        <h2>${data.name}</h2>
        <p>${data.email}</p>
        <p>${data.phone}</p>  
        `;
        document.getElementById('results5').innerHTML = output5;
    });fetch('https://jsonplaceholder.typicode.com/users/7')
    .then((res) => res.json())
    .then(data => {
        let output6 = `
        <h2>${data.name}</h2>
        <p>${data.email}</p>
        <p>${data.phone}</p>  
        `;
        document.getElementById('results6').innerHTML = output6;
    });
    fetch('https://jsonplaceholder.typicode.com/users/8')
    .then((res) => res.json())
    .then(data => {
        let output7 = `
        <h2>${data.name}</h2>
        <p>${data.email}</p>
        <p>${data.phone}</p>  
        `;
        document.getElementById('results7').innerHTML = output7;
    });
    fetch('https://jsonplaceholder.typicode.com/users/9')
    .then((res) => res.json())
    .then(data => {
        let output8 = `
        <h2>${data.name}</h2>
        <p>${data.email}</p>
        <p>${data.phone}</p>  
        `;
        document.getElementById('results8').innerHTML = output8;
    });
    fetch('https://jsonplaceholder.typicode.com/users/10')
    .then((res) => res.json())
    .then(data => {
        let output9 = `
        <h2>${data.name}</h2>
        <p>${data.email}</p>
        <p>${data.phone}</p>  
        `;
        document.getElementById('results9').innerHTML = output9;
    }) 
