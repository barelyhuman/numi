//Select Products Section
const productsSection = document.querySelector("#products");

//Select Team Section
const teamSection = document.querySelector("#team");

//Select Alumini Sub Section in Team
const aluminiCollection = teamSection
  .querySelector(".alumini")
  .querySelector(".collection");

//Select CurrentTeam Sub Section in Team
const currentTeamCollection = teamSection
  .querySelector(".current-team")
  .querySelector(".collection");

//Select Products collection div;
const productCollection = productsSection.querySelector(".collection");

//Define constants for the app;
const api = "https://ghostxen.github.io/numiapi/";
const socialLinks = [
  {
    name: "Email",
    icon: "fa fa-envelope",
    link: "mailto:team@numixproject.org",
    color: "#2d2d2d"
  },
  {
    name: "Facebook",
    icon: "fa fa-facebook",
    link: "https://www.facebook.com/numixproject",
    color: "#3b5998"
  },
  {
    name: "Twitter",
    icon: "fa fa-twitter",
    link: "https://twitter.com/numixproject",
    color: "#00aced"
  },
  {
    name: "Reddit",
    icon: "fa fa-reddit-alien",
    link: "https://www.reddit.com/r/numix/",
    color: "#FF5700"
  },
  {
    name: "Google Plus",
    icon: "fa fa-google-plus",
    link: "https://plus.google.com/+NumixProjectOrg",
    color: "#d34836"
  }
];

function fetchTeam() {
  fetch(api + "team/main.json")
    .then(res => res.json())
    .then(rdata => {
      addToTeamCollection(rdata);
    });
}

function fetchProducts() {
  fetch(api + "products/main.json")
    .then(res => res.json())
    .then(rdata => {
      addToProductCollection(rdata);
    });
}

function normalizeName(name) {
  const temp = name.trim().split(" ");
  const a = temp.map(x => {
    return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
  });
  return a.join(" ");
}

function addToTeamCollection(data) {
  const alumini = data.filter(item => !item.currentMember);
  const currentTeam = data.filter(item => item.currentMember);
  alumini.forEach(item => {
    const di = document.createElement("div");
    const im = document.createElement("img");
    const di2 = document.createElement("div");
    const pt = document.createElement("p");
    const pt2 = document.createElement("p");
    di.className = "card";
    im.className = "card-image";
    di2.className = "card-info";
    pt.className = "card-title";
    pt2.className = "card-subtitle";
    im.src = item.avatar;
    pt.textContent = normalizeName(item.name);
    pt2.textContent = item.position;
    di.onclick = () => {
      window.open(item.url, "_blank");
    };
    di2.appendChild(pt);
    di2.appendChild(pt2);
    di.appendChild(im);
    di.appendChild(di2);
    aluminiCollection.appendChild(di);
  });
  currentTeam.forEach(item => {
    const di = document.createElement("div");
    const im = document.createElement("img");
    const di2 = document.createElement("div");
    const pt = document.createElement("p");
    const pt2 = document.createElement("p");
    di.className = "card";
    im.className = "card-image";
    di2.className = "card-info";
    pt.className = "card-title";
    pt2.className = "card-subtitle";
    im.src = item.avatar;
    pt.textContent = normalizeName(item.name);
    pt2.textContent = item.position;
    di.onclick = () => {
      window.open(item.url, "_blank");
    };
    di2.appendChild(pt);
    di2.appendChild(pt2);
    di.appendChild(im);
    di.appendChild(di2);
    currentTeamCollection.appendChild(di);
  });
}

function addToProductCollection(data) {
  data.forEach(item => {
    const di = document.createElement("div");
    const im = document.createElement("img");
    const di2 = document.createElement("div");
    const pt = document.createElement("p");
    const pt2 = document.createElement("p");
    di.className = "card";
    im.className = "card-image";
    di2.className = "card-info";
    pt.className = "card-title";
    pt2.className = "card-subtitle";
    im.src = api + item.image;
    pt.textContent = item.name;
    pt2.textContent =
      item.type.charAt(0).toUpperCase() + item.type.slice(1).toLowerCase();
    di2.appendChild(pt);
    di2.appendChild(pt2);
    di.appendChild(im);
    di.appendChild(di2);
    productCollection.appendChild(di);
  });
}

function socialIcons() {
  const iconsContainer = document.querySelector("#social-icons");
  socialLinks.forEach(social => {
    const di = document.createElement("div");
    const spa = document.createElement("span");
    di.className = "icon";
    spa.className = social.icon;
    di.onmouseover = () => {
      di.style.backgroundColor = social.color;
    };
    di.onmouseout = () => {
      di.style.backgroundColor = "transparent";
    };
    di.onclick = () => {
      window.open(social.link, "_blank");
    };
    di.appendChild(spa);
    iconsContainer.appendChild(di);
  });
}

function main() {
  fetchProducts();
  fetchTeam();
  socialIcons();
}

main();
