const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

      if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('showMenu')
        })
            navClose.addEventListener('click',() =>{
                navMenu.classList.remove('showMenu')
            })
      }


// Use if u need to remove when we click on each link
const navLink = document.querySelectorAll('.nav-links')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('showMenu')
}

navLink.forEach(n => n.addEventListener('click', linkAction));



// ------------------- skills --------------------

const skillsContent = document.getElementsByClassName('skills-content'),
      skillsHeader = document.querySelectorAll('.skills-header')
    
function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(i=0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills-content skills-close'
    }            //used according to video

    if(itemClass === 'skills-content skills-close'){
        this.parentNode.className = 'skills-content skills-open';
    }

    // if(itemClass === 'skills-content skills-open'){
    //     this.parentNode.className = 'skills-content skills-close';
    // }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})


// ------------------- Qualification --------------------

const tabs = document.querySelectorAll('[data-target]'),
      tabcontents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target);

        tabcontents.forEach(tabcontent =>{
            tabcontent.classList.remove('qualification-active')
        })
            target.classList.add('qualification-active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification-active')
        })
            tab.classList.add('qualification-active')
    })
})


// ------------------- Services --------------------

const modelViews = document.querySelectorAll('.services-model'),
      modelBtns = document.querySelectorAll('.services-btn'),
      modelCloses = document.querySelectorAll('.services-model-close');

let model = function(modelClick){
    modelViews[modelClick].classList.add('active-model')
}

modelBtns.forEach((modelBtn, i) =>{
    modelBtn.addEventListener('click', () => {
            model(i);
        })
})

modelCloses.forEach((modelclose) =>{
    modelclose.addEventListener('click', () =>{
        modelViews.forEach((modelView) =>{
            modelView.classList.remove('active-model')
        })
    })
})


// ------------------- Portfolio Swipper --------------------

const swiperPortfolio = new Swiper('.portfolio-container', {
  
    // cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    keyboard: true,
  });



  const swiperTestimonial = new Swiper('.testimonial-container', {
  
    loop: true,
    grabCursor: true,
    spaceBetween:46,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
  });



// -------------------  Scroll UP --------------------

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 620) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);



// -------------------  Dark Light Theme --------------------

const themeButton = document.getElementById('theme-btn');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';


if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})