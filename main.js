let item = ["sellers","arrivals","sale","order","console"]

item.forEach((el)=>{
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.querySelector(`#${el}`);
        let isDown = false;
        let startX;
        let scrollLeft;
    
        container.addEventListener('mousedown', (e) => {
            isDown = true;
            container.classList.add('active');
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });
    
        container.addEventListener('mouseleave', () => {
            isDown = false;
            container.classList.remove('active');
        });
    
        container.addEventListener('mouseup', () => {
            isDown = false;
            container.classList.remove('active');
        });
    
        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 3; // Adjust the scroll speed
            container.scrollLeft = scrollLeft - walk;
        });
    
        container.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });
    
        container.addEventListener('touchend', () => {
            isDown = false;
        });
    
        container.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - container.offsetLeft;
            const walk = (x - startX) * 3; // Adjust the scroll speed
            container.scrollLeft = scrollLeft - walk;
        });
    });

})


var menuBar = document.querySelector(".head-wrapper>div:nth-child(1)>div:nth-child(1)>i")
var leftToRight = document.querySelector(".head-wrapper>div:nth-child(2)")
var eachElement = document.querySelectorAll(".head-wrapper>div:nth-child(2)>a")

var searchbox = document.querySelector(".head-wrapper>div:nth-child(3)>div:nth-child(1)")

const mediaQuery = window.matchMedia("(max-width:1200px)")

function handleMediaQuery(e){
     if(e.matches === true){
        menuBar.addEventListener("click",()=>{
                searchbox.style.display = "none"
            leftToRight.style.left = "-40%"
     
            leftToRight.style.transition ="1s"
        })

        eachElement.forEach((el)=>{
              el.addEventListener("click",()=>{
                leftToRight.style.left = "-100%"
                leftToRight.style.transition ="1s"
                searchbox.style.display = "flex"

              })
        })

     }


}


handleMediaQuery(mediaQuery)

mediaQuery.addEventListener("change",handleMediaQuery)


document.getElementById('clickableImage').onclick = function() {
    window.location.href = 'index.html';
  };