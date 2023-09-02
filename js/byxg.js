//轮播图逻辑
let pic_status = 0
let time_int = setInterval(next, 4000)

function prev() {
    if (pic_status == 0) {
        pic_status = 3
    } else {
        pic_status--
    }
    pic_dom_xuanran()
}

function next() {
    pic_status++
    pic_dom_xuanran()
}

function pic_dom_xuanran() {
    console.log(document.querySelector('.swiper_wrapper'));
    document.querySelector('.swiper_wrapper').style.transform = `translateX(-${pic_status%4*1920}px)`
    clearInterval(time_int)
    time_int = setInterval(next, 4000)
}


addEventListener('scroll',function(){
    if(document.documentElement.scrollTop < 100){
        document.querySelector('.header_two').style.display = 'none'
    }else{
        document.querySelector('.header_two').style.display = 'block'

    }
})


// document.documentElement.scrollHeight ==
// document.documentElement.scrollTop +
//   document.documentElement.clientHeight