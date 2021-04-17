// Add your code here
function submitData(name, email) {
     fetch("http://localhost:3000/users", {
          method: "POST", 
          headers: {
            'content-type': 'application/json', 
            accept: 'application/json' 
        }, 
        body: JSON.stringify({ 
            name: name, 
            email: email
        }) 
    }) 
        .then(response => response.json()) 
        .then(response => { 
            let p = document.createElement("p") 
            const body = document.querySelector("body") 
            p.id = response.id 
            p.innerHTML = response.name 
            body.append(p) 
        })
        .catch()
    }