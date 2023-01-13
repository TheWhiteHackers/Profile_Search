const btn = document.getElementById("sbtn")
const text = document.getElementById("stext")




text.addEventListener("keyup", (event)=>{
    
    let textval = event.target.value
    if (textval !== ""){
        console.log(textval);
    }
    
    
})

function fetchprofile(username){
    const profile = fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
})}

console.log(fetchprofile("Bret"));