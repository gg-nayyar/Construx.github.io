let options = {
    root: document.querySelector(".building_container"),
    rootMargin: "0px",
    threshold: 1,
};

let callback = (entries,observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log("hi");
            const [ building2, buildingBottom, building5, semicircle ] = [document.querySelector(".building2"), document.querySelector(".building-bottom"), document.querySelector(".building5"),document.querySelector(".semi-circle")];
            building2.classList.add("animate__building2");
            buildingBottom.classList.add("animate__building_bottom");
            building5.classList.add("animate__building5");
            semicircle.classList.add("animate__semicircle");
        }
    });
}
let observer = new IntersectionObserver(callback, {threshold: 1 });
let target = Array.from(document.getElementsByClassName("building"));

for(let i = 0; i < target.length; i++){
    const t = target[i];
    observer.observe(t);
}