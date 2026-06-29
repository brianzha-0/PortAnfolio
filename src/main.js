import './style.css'
import heroImg from './assets/hi.png'
import villain from './assets/hero.png'
import bru from './assets/heroriginal.png'
import background from './assets/background.jpg';
import foregroundImg from './assets/foreground.jpg';
import project1 from './assets/enveloped_in_developing.jpg'
import project2 from './assets/whtmidoing.jpg'; import project4 from './assets/peachy.jpg'
import project3 from './assets/e-wall.jpg'

document.querySelector('#app').innerHTML = `
<nav class="navbar">
    <div class="logo"><img src="${project2}" id="bruh" width="100%" height="68px" style="display: block;"></div>

    <ul class="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>

    <button id="idk" class="menu-toggle">☰</button>
</nav>

<header id="hero" class="parallax" style="background-image:url('${villain}');">

    <div class="overlay"></div>

    <div class="hero-content">

        <div class="hero-text" style="top: 116px; position: relative;">
            <h1>Brian Zhao</h1></br>
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Web Developer</h2>

            <pre>
                      What person     will building make me, and where will it take me?
                     Let us find out, together . . .
            </pre>

            <!--<a href="#projects" class="hero-btn">
                View Portfolio
            </a>-->
        </div>

        <div class="hero-image"">
            <img src="${heroImg}" class="fade-element" alt="Hero Image" width="40%" height="50%">
        </div>

    </div>

</header>

</br>

<section>
    <div class="parallax-content">
        <h2 style="font-size: 35.2px; font-family: Tahoma; font-weight: bold;">As a creator in the making, I'll learn the best by doing whatever I can to progress vigorously—though not so much as rigorously.</h2>
    </div>
</section>

</br></br></br>

<section id="projects">

    <h2 id="unique" style="font-size: 51px; color: rgb(60, 70, 80);"><p style="margin-left: 30%; background: rgb(186, 211, 252); width: 450px; height: 70px;"><span style="color: #003C8D;">P</span> <span style="color: #104D84;">O</span> <span style="color: #075CAC;">R</span> <span style="color: #3C85CA;">T</span> <span style="color: #73A5D8;">F</span> <span style="color: #9EC6E9;">O</span> <span style="color: #CFE2F3;">L</span> <span style="color: #E1E5F1;">I</span> <span style="color: #F1EFF0;">O</span></p>PROJECTS</h2>
    </br>
    <div class="project-grid">

        <div class="project-card">
            <img src="${project3}" width="40%" height="30%">
        </div>

        <div class="project-card">
            <img src="${project1}">
        </div>

        <div class="project-card">
            <img src="${project4}" width="80%" height="60%">
        </div>

    </div>
    </br></br>
</section>

<section id="about">

    <h2>About Me</h2>

    <pre style="text-align: left;">
I began a piecing together of various rudimentary technologies using web design as early as in the fourth grade.
Ever since, taking time on and off to bring out the best of my own crafty abilities has been a main goal of mine.

                                                  Ground Rules:
                                        > Showing up comes before "showing off"
                                        > Great people are everywhere
                                        > A person that wants to be right is always bright
    </pre>
    </br></br>
</section>

<section id="contact">
    <h2>Contact Another Proactive Person:</h2>
    <!--<h2 style="bottom: 300px; left: 550px; position: fixed;">Me</h2>-->
    <p><a href="https://github.com/brianzha-0"><img src=${bru} width="343px" height="361px"></a></p>
    <!--<h1 style="button: 300px; left: 550px; position: fixed;">You</h1>-->
</section>
`

const nav = document.querySelector(".nav-links")
const button = document.querySelector(".menu-toggle")

button.onclick = () => nav.classList.toggle("active")

window.addEventListener("scroll", () => {

    const y = window.scrollY

    document.getElementById("hero").style.backgroundPositionY =
        `${y * 0.5}px`

    document.querySelector(".parallax").style.backgroundPositionY =
        `${y * 0.3}px`

})

const hero = document.getElementById("hero");
let current = 0;

window.addEventListener("scroll", () => {
  const rect = hero.getBoundingClientRect();
  const target = rect.top * 0.4;

  current += (target - current) * 0.08;

  hero.style.backgroundPosition = `center ${current}px`;
});

const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const night = document.getElementById("idk");
var cnt = 0;

night.onclick = function() {
  const element = document.querySelector('.nav-links');
  const isEven = (cnt % 2 === 0);
  
  if (isEven) {
    document.body.style.backgroundImage = `url("${foregroundImg}")`;
    document.body.classList.add('dark-mode'); 

    document.querySelectorAll("p, pre, h1, h2").forEach(el => {
      el.style.color = "yellow";
    });
  } 
  else {
    document.body.style.backgroundImage = `url("${background}")`;
    document.body.classList.remove('dark-mode'); 

    document.querySelectorAll("p, pre, h1, h2").forEach(el => {
      el.style.color = `rgb(10, 4, 40)`;
    });
  }

  if (element) {
    element.classList.toggle('is-even', isEven);
    element.classList.toggle('is-odd', !isEven);
  }

  cnt += 1;
}