
// smooth scroll
const navWrapper = document.querySelector(".Wrapper");
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navWrapper.classList.add("paddingTop");
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// making the sidebar and sidebar container visible
const sidebar = document.querySelector(".bar");
const toggleButton = document.querySelector(".menubar");
const closeButton = document.querySelectorAll(".close");

function toggleSidebar() {
    if(sidebar.classList.contains("active")){
        sidebar.classList.remove("active");
    }
    else{
        sidebar.classList.add("active");
    }
}

function closeSidebar() {
    sidebar.classList.remove("active");
}

toggleButton.addEventListener("click", toggleSidebar);

closeButton.forEach(button => button.addEventListener("click", closeSidebar));