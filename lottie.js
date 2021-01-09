let btn = document.querySelector('#resume-btn')
let svgContainer = document.getElementById('svg')
const animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_u4yrau.json'
})

btn.addEventListener('click', ()=>{  
  animItem.goToAndPlay(0, true)
})