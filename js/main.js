// add fixed class To Header
let fixedHead = document.querySelector(".header")

// handle Header Links 
let linksBtn = document.querySelector(".header .links-btn")
let linksParent = document.querySelector(".header .links-par")
let overlay = document.createElement("div")

linksBtn.addEventListener("click", () => {
   linksParent.classList.toggle("open")
   linksBtn.classList.toggle("clicked")
   overlay.classList.toggle("overlay")
   document.body.append(overlay)
})

// add Show class To Scroll Btn
let btn = document.querySelector(".toUp-btn")

window.onscroll = () => {
   if (window.scrollY >= 180) {
      fixedHead.classList.add("fixed")
      btn.classList.add("show")
   } else {
      fixedHead.classList.remove("fixed")
      btn.classList.remove("show")
   }
}

// Select F A Q links And Handle it
let faqLinks = document.querySelectorAll(".faq .faq-list a");

faqLinks.forEach(a => {
   a.addEventListener("click", () => {
      faqLinks.forEach(link => {
         link.parentNode.classList.remove("show")
         link.classList.remove("opened")
      })
      a.classList.toggle("opened")
      a.parentNode.classList.toggle("show")
   })
})


// Swiper For Testimonials Section
var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   grabCursoraa: true,
   loop: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   }
});