// Add your code here
function submitData(name, email){
    return fetch("http://localhost:3000/users",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body:JSON.stringify({
            name: name,
            email: email
        })
    })
    .then (response => response.json())
    .then (data => {
        const body = document.querySelector("body");
        const p = document.createElement("p");
        p.textContent = `ID: ${data.id}`;
        body.appendChild(p);
    })
    .catch(error => {
        const body = document.querySelector("body");
        const p = document.createElement("p");
        p.textContent = error.message;
        body.appendChild(p);
    })
}