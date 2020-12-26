let bar = document.createElement("div");
bar.style.height = "0.5rem";
bar.style.width = "0";
bar.style.backgroundColor = "#000000";
bar.style.position = "fixed";
bar.style.top = "0";
bar.style.left = "0";
bar.style.zIndex = "1";
bar.style.transition = "0.2s";

document.body.append(bar);

const container = document.querySelector(".container");
const nav = document.getElementsByTagName("nav");
const footer = document.getElementsByTagName("footer");
const credits = document.querySelector(".post-credits");
let descriptions = [
  "Tv trailblazer. Infuriatingly humble bacon geek. Evil alcohol fanatic. General music buff.",
  "Zombie fanatic. Unapologetic beer enthusiast. Web specialist. Total travel aficionado. Prone to fits of apathy. Reader.",
  "Hardcore internet fanatic. Coffee guru. Beer nerd. Gamer. Web expert. Organizer. Typical student.",
  "Subtly charming coffee enthusiast. Friend of animals everywhere. Lifelong zombie guru. Organizer.",
  "General troublemaker. Writer. Typical social media junkie. Web maven. Hardcore analyst.",
  "Web practitioner. Organizer. Incurable food specialist. Analyst. Devoted student.",
  "Internet fanatic. Coffee enthusiast. Travel maven. Freelance tv fanatic. Passionate beer lover. Bacon trailblazer. Hardcore musicaholic.",
  "Total social media ninja. Travel scholar. Friendly bacon advocate. Alcohol fanatic. Passionate coffee fanatic.",
  "Typical gamer. Infuriatingly humble beer maven. Extreme organizer. Alcohol scholar.",
  "Bacon lover. Infuriatingly humble explorer. Total internet evangelist. Travel trailblazer.",
  "Wannabe travel nerd. Certified student. Pop culture lover. Award-winning twitter junkie. Total social media trailblazer. Explorer.",
  "Hipster-friendly food guru. Coffee trailblazer. Zombie advocate. Problem solver. Total tv fanatic. Evil writer.",
  "Introvert. Student. Proud alcohol buff. Writer. Travel enthusiast. Infuriatingly humble analyst. Unapologetic food ninja.",
  "Analyst. Lifelong reader. Avid bacon junkie. Professional coffee evangelist. Award-winning food specialist.",
  "Friendly internet fan. Coffee enthusiast. Lifelong problem solver. Falls down a lot. Proud music junkie."
];

generatePostAuthor();

async function generatePostAuthor() {
  const postAuthorResponse = await fetch('https://randomuser.me/api/?results=1&inc=name,location,email,dob,phone,cell,picture&nat=br', {
    headers: {
      'Accept': 'application/json'
    }
  });

  let description = descriptions[Math.floor(Math.random()*descriptions.length)];

  const author = await postAuthorResponse.json();
  author.results.map((author) => {
    let authorDiv = document.createElement("div");
    authorDiv.classList.add("author");
    
    let authorInfoDiv = document.createElement("div");
    authorInfoDiv.classList.add("author-info");

    let fullName = `${author.name.title} ${author.name.first} ${author.name.last}`

    let img = document.createElement("img");
    img.src = `${author.picture.large}`;
    img.alt = fullName;

    let authorName = document.createElement("span");
    let authorEmail = document.createElement("span");
    let authorLocation = document.createElement("span");
    let authorPhone = document.createElement("span");
    let authorCellphone = document.createElement("span");
    let authorDescription = document.createElement("span");

    let authorNameText = document.createTextNode(`Author: ${fullName}, ${author.dob.age} years old`);
    let authorEmailText = document.createTextNode(`Contact me at: ${author.email}`);
    let authorLocationText = document.createTextNode(`${author.location.city}, ${author.location.state} - ${author.location.country}`);
    let authorPhoneText = document.createTextNode(`Business phone: ${author.phone}`);
    let authorCellphoneText = document.createTextNode(`Personal phone: ${author.cell}`);
    let authorDescriptionText = document.createTextNode(`About me: ${description}`);
    
    authorDiv.appendChild(img);
    
    authorName.appendChild(authorNameText);
    authorEmail.appendChild(authorEmailText);
    authorLocation.appendChild(authorLocationText);
    authorPhone.appendChild(authorPhoneText);
    authorCellphone.appendChild(authorCellphoneText);
    authorDescription.appendChild(authorDescriptionText);
    
    authorInfoDiv.appendChild(authorName);
    authorInfoDiv.appendChild(authorEmail);
    authorInfoDiv.appendChild(authorLocation);
    authorInfoDiv.appendChild(authorPhone);
    authorInfoDiv.appendChild(authorCellphone);
    authorInfoDiv.appendChild(authorDescription);
    
    credits.appendChild(authorDiv);
    credits.appendChild(authorInfoDiv);
  });
}

function updateBarWidth() {
  const containerHeight = container.offsetHeight;
  const pagePositionY = window.pageYOffset;
  const offset = Math.round(nav[0].offsetHeight + footer[0].offsetHeight);
  
  const updatedBarWidth = Math.round(pagePositionY * 100 / (containerHeight - offset));
  bar.style.width = updatedBarWidth + "%";
}

window.addEventListener("load", () => {
  document.addEventListener("scroll", updateBarWidth);
});