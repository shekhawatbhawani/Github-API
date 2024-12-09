let button = document.querySelector("button");

let container = document.querySelector(".container");

button.addEventListener("click", () => {
  let username = document.querySelector("input").value;
  let api = "https://api.github.com/users/";
  
  let API = api + username;
  
  fetch(API)
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);
    if (data) {
      let box = document.createElement("div");
      let avatar_url = data.avatar_url;
      let name = data.name;
      let bio = data.bio;
      let follower = data.followers;
      let following = data.following;
      let pulic = data.public_repos;
      let gists = data.public_gists;
        box.innerHTML = `
          <div class="box">
   <img src="${avatar_url}" alt="">
   <p>Name : <span class="left">${name}</span></p>
   <p>Bio : <span class="left"> ${bio}</span></p>
   <p>follower : <span class="left">${follower}</span></p>
   <p>following : <span class="left">${following}</span></p>
   <p>Public Respository : <span class="left"> ${pulic}</span></p>
   <p>Publich Gists : <span class="left">${gists}</span></p>
   </div>
        `;
      
        document.body.append(box);
      } else if (data.message == "Not Found") {
        let div = document.createElement("div");
        div.classList.add("Not-found");
        div.textContent = "User Name Not Found";
        document.body.append(div);
        box.style.display="none"
        setTimeout(() => {
          div.style.display = "none";
        }, 4000);
      }
      
    });
});
