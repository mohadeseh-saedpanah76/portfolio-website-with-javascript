const header = document.getElementById('header')
const modalView = document.querySelector('.services__modal')
const modalContent = document.querySelectorAll('.services__modal-content')
const modalCloseBtn = document.querySelectorAll('.services__modal-close')
const modalShowBtn = document.querySelectorAll('.services__button')
const workItem = document.querySelectorAll('.work__item')


/* =============Change background header ============ */
const scrollHeader = ()=>{
   this.scrollY >=50 ? header.classList.add('scroll-header')
                 : header.classList.remove('scroll-header')
}
window.addEventListener('scroll' , scrollHeader)


/* ============= Modal Active ============= */

modalShowBtn.forEach((item)=>{
   item.addEventListener('click', ()=>{
      modalView.classList.add('active-modal')
   })
})

modalCloseBtn.forEach((item)=>{
   item.addEventListener('click',()=>{
      modalView.classList.remove('active-modal')
   })
})

/* ============ Mixitup Filter Works ============ */

// نگهدارنده ی اصلی استdiv ورودی اول تابع زیر همان 

let filterWorks = mixitup('.work__container' , {
   selectors : {
      // مقدار تارگت میشود کلاس تگ هایی که فیلتر روی آنها باید انجام شود
      target: '.work__card'
   },
   animation : {
      duration : 300
   }
});

/* active work */
function activeWork (){
   workItem.forEach((item)=>{
      item.classList.remove('active-work')
   })
   this.classList.add('active-work')
}

workItem.forEach((item)=>{
   item.addEventListener('click' , activeWork)
})

