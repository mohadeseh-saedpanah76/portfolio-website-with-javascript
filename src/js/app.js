const header = document.getElementById('header')
const modalView = document.querySelector('.services__modal')
const modalContent = document.querySelectorAll('.services__modal-content')
const modalCloseBtn = document.querySelectorAll('.services__modal-close')
const modalShowBtn = document.querySelectorAll('.services__button')
const workItem = document.querySelectorAll('.work__item')
const navLink = document.querySelectorAll('.nav__link')


/* =============Change background header ============ */
//  زمانی که به سمت پایین اسکرول شود رنگ هدر تغییر کند

const scrollHeader = ()=>{
   this.scrollY >=50 ? header.classList.add('scroll-header')
                 : header.classList.remove('scroll-header')
}
window.addEventListener('scroll' , scrollHeader)


/* ============= Modal Active ============= */
//  این قسمت برای باز کردن مودال در بخش سرویس ها است 

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
//  این قسمت برای ساخت فیلتر برای بخش کارها است
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


/*============ SWIPER TESTIMONAIL ============ */
//  این قطعه کد یک اسلایدر برای قسمت کامنت ها میسازه
//ورودی اول تابع زیر همان تگ دیو نگهدارنده ی اصلی است

let swiperTestimonial = new Swiper(".swiper", {
   spaceBetween: 24,
   loop : true,
   grabCursor:true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
       576: {
         slidesPerView: 2,
       },
       768: {
         slidesPerView: 2,
         spaceBetween: 48,
       },
     },
 });


 /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// اینجا میگه زمانی که اسکرول می کنی
// به هر سکشنی که رسیدی در نووبار رنگ ایکون مربوط به اون سکشن عوض بشه

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset
	sections.forEach(item =>{
		const sectionHeight = item.offsetHeight
		const sectionTop = item.offsetTop - 58
		const sectionId = item.getAttribute('id')
		const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        //  داخل نوو منو رو میدهa خط بالا تگ های
        // یعنی سکشن کلاس تگ های لینک هستند
        // گه قراره به آنها کلاس اکتیو لینک اضافه بشه

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
           
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}

window.addEventListener('scroll', scrollActive)


/* active link in nav-menu */
function activeLink (){
   navLink.forEach((item)=>{
      item.classList.remove('avtive-link')
   })

   this.classList.add('active-link')
}


navLink.forEach((item)=>{
   item.addEventListener('click' , activeLink)
})


/*============ LIGHT & DARK THEME ========== */
//  برای تغییر تم و ذخیره ی تغییرات تم سایت

const themeButton = document.getElementById('theme-button')
const body = document.querySelector('body')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

//  اگر قبلا تم و آیکونی توسط کاربر انتخاب شده باشد از لوکال استورج گرفته میشود
// تا هنگام ورود کاربر همان تم انتخاب شده نمایش داده شود

const selectedTheme = localStorage.getItem('selectedTheme')
const selectedIcon = localStorage.getItem('selectedIcon')


// حال باید توسط توابع تم و آیکون فعلی وبسایت گرفته شود
const getCurrentTheme = () => body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'


//براساس تمی که قبلا کاربر انتخاب کرده است تم جدید انتخاب می شود
if(selectedTheme){
   body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
   themeButton.classList[selectedIcon ==='bx bx-moon' ? 'add' : 'remove'](iconTheme)
}


//  فعال کردن یا غیر فعال کردن تم با کلیک روی آیکون
themeButton.addEventListener('click', ()=>{
   body.classList.toggle(lightTheme)
   themeButton.classList.toggle(iconTheme)

   //حال باید تم و آیکونی که انتخاب شده است را در لوکال استورج ذخیره کنیم
   localStorage.setItem('selectedTheme' , getCurrentTheme())
   localStorage.setItem('selectedIcon' , getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
   origin: 'top',
   distance :'60px',
   duration: 2500,
   delay : 400,
})

sr.reveal('.home__data')
sr.reveal('.home__social , .home__scroll' , {origin:'bottom' , delay:900})
sr.reveal('.home__handle', {delay:700})