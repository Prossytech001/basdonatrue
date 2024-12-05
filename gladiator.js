function initSilde() {
    const conSlide = document.querySelector(".slide-wrapper .slide-con");
    const imageList = document.querySelectorAll(".slide-wrapper .slide-button");
    const maxScrolleft = conSlide.scrollWidth - conSlide.clientWidth;
     
    imageList.forEach(button => {
        button.addEventListener("click", () => {
           const direction = button.id === "prev" ? -1 : 1;
           const scrollAmount = conSlide.clientWidth * direction;
           conSlide.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    const handle = () => {
        imageList[0].style.display = conSlide.scrollLeft <= 0 ? "none" : "block";
        imageList[1].style.display = conSlide.scrollLeft >= maxScrolleft ? "none" : "block";
    }
    
    conSlide.addEventListener("scroll", () => {
        handle();
    });
 }


 window.addEventListener('load', initSilde);
 