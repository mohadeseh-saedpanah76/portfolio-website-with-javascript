const header = document.getElementById('header')


/* =============Change background header ============ */
const scrollHeader = ()=>{
   this.scrollY >=50 ? header.classList.add('scroll-header')
                 : header.classList.remove('scroll-header')
}
window.addEventListener('scroll' , scrollHeader)