let container = document.getElementById("container");
let users = generateUsers();

async function generateUsers() {
  const usersResponse = await fetch('https://randomuser.me/api/?results=9&exc=location,email,registered,dob,phone,cell,id&nat=br', {
    headers: {
      'Accept': 'application/json'
    }
  });

  const users = await usersResponse.json();
  users.results.map((user) => {
    let userDiv = document.createElement("div");
    userDiv.classList.add("user");

    let imgBorder = document.createElement("div");
    imgBorder.classList.add("image-border-wrap");

    let img = document.createElement("img");
    img.src = `${user.picture.large}`;
    img.alt = `${user.name.first} ${user.name.last}`;

    let usernameSpan = document.createElement("span");
    let usernameText = document.createTextNode(`${user.login.username}`);
    
    imgBorder.appendChild(img);
    userDiv.appendChild(imgBorder);
    usernameSpan.appendChild(usernameText);
    userDiv.appendChild(usernameSpan);

    container.appendChild(userDiv);
  });
}
