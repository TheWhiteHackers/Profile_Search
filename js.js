const btn = document.getElementById("sbtn")
const text = document.getElementById("stext")
const profilebox = document.querySelector(".profile")



text.addEventListener("keyup", (event)=>{
    
    let textval = event.target.value
    if (textval !== ""){
        // console.log(textval);
        fetchprofile(textval);
    }
    
})

function showprofile(profile){
    console.log("data came!", profile);
    profilebox.innerHTML=`
    <div class="card mt-4" style="width: 18rem;">
    
    <div class="card-body">
      <h5 class="card-title mt-2">Contact Information</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Username: ${profile.username}</li>
      <li class="list-group-item">Name: ${profile.name}</li>
      <li class="list-group-item">Email: ${profile.email}</li>
      <li class="list-group-item">Phone Number: ${profile.phone}</li>
      <li class="list-group-item">Address: ${profile.address.city}, ${profile.address.street}, ${profile.address.suite}, ${profile.address.zipcode}</li>
      <li class="list-group-item">Company: ${profile.company.name}</li>
      <li class="list-group-item">Catch Phrase: ${profile.company.catchPhrase}</li>
      

    </ul>
  </div>`
};


function fetchprofile(username){
    const profile = fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
    .then(res=>res.json())
    .then(data=>{
        console.log("Data:", data);
        
        const checker = document.getElementById("checker")
        if (data.length === 0){
          checker.innerHTML="<p>This username doesn't exist</p>"
      } else {
          showprofile(data[0]);
          checker.innerHTML="";
      }
   
});}

// console.log(fetchprofile("Bret"));







