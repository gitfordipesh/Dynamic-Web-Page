const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    navMenu.classList.toggle("active");
})
//Scroll Function to the window
window.addEventListener("scroll", function () {
    let head = document.querySelector(".nav-menu")       
    let head2 = document.querySelector("header");
    if (window.scrollY >= 150) {
      head2.style.backgroundColor = "#3949ab";
      head.style.backgroundColor = "#3949ab";
      head2.style.padding = "0px";
      head.style.top = "50px";
      head2.style.transition = "0.3s";
    }
    else if (window.scrollY <= 150) {
      head2.style.backgroundColor = "transparent";
      head.style.backgroundColor = "transparent";
      head.style.top = "70px";
      head2.style.padding = "10px 0px";
    }
  })
  // API Data
let fdata = fetch("https://reqres.in/api/users?page=2");
fdata
  .then((res) => res.json())
  .then((data) => {
    const html = data.data
      .map((user) => {
        return `
        <div class="box-members">
          <div class="image-m1">
            <img src=${user.avatar} alt="">
          </div>
          <div class="data">
              <h3>${user.first_name} ${user.last_name}</h3>
              <h6 class="designation">${user.email}</h6>
              <p class="about-person">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.
              </p>
              <a href="#" target="_blank"><i class="fa-brands fa-twitter blue-text"></i>
              <span class="tweet blue-text">@${(user.first_name).toLowerCase()}${(user.last_name).toLowerCase()}</span>
              </a>
          </div>
        </div>
       `;
      })
      .join("");
    document.querySelector(".apidata").insertAdjacentHTML('afterbegin', html)
  });
  