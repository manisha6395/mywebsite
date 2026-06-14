// Language Switch

let isHindi = false;

const langBtn = document.getElementById("langBtn");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

langBtn.addEventListener("click", () => {

    if (!isHindi) {

        title.innerText = "सर्वश्रेष्ठ AI टूल्स खोजें";

        subtitle.innerText =
        "चैट, इमेज, वीडियो और कोडिंग के लिए शक्तिशाली AI टूल्स खोजें।";

        langBtn.innerText = "English";

        isHindi = true;

    } else {

        title.innerText = "Discover The Best AI Tools";

        subtitle.innerText =
        "Explore powerful AI tools for Chat, Images, Videos and Coding.";

        langBtn.innerText = "हिंदी";

        isHindi = false;
    }

});


// Scroll Animation

const cards = document.querySelectorAll(
'.tool-card, .cat'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

},{
    threshold:0.2
});

cards.forEach((card)=>{

    card.style.opacity="0";
    card.style.transform="translateY(50px)";
    card.style.transition="all 0.8s ease";

    observer.observe(card);

});


// Counter Animation

const counters = document.querySelectorAll(".stats h3");

counters.forEach(counter => {

    const targetText = counter.innerText;
    const target = parseInt(targetText);

    let count = 0;

    const updateCounter = () => {

        if(count < target){

            count += Math.ceil(target / 100);

            if(count > target){
                count = target;
            }

            counter.innerText = count + "+";

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = targetText;
        }
    };

    updateCounter();

});


// Navbar Background Change

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 100){

        navbar.style.background =
        "rgba(0,0,0,0.85)";

    } else {

        navbar.style.background =
        "rgba(255,255,255,0.05)";
    }

});


// Search Button Demo

const searchBtn =
document.querySelector(".search-box button");

searchBtn.addEventListener("click", () => {

    const value =
    document.querySelector(".search-box input").value;

    if(value.trim() === ""){

        alert("Please enter a tool name");

    } else {

        alert("Searching for: " + value);

    }

});


// Typing Effect

const texts = [
    "AI Tools",
    "Chat AI",
    "Image AI",
    "Video AI",
    "Coding AI"
];

let textIndex = 0;
let charIndex = 0;

function typeEffect(){

    const heading =
    document.getElementById("title");

    if(!heading) return;

    const currentText =
    texts[textIndex];

    heading.innerHTML =
    currentText.substring(0, charIndex);

    charIndex++;

    if(charIndex <= currentText.length){

        setTimeout(typeEffect,120);

    }else{

        setTimeout(() => {

            charIndex = 0;

            textIndex++;

            if(textIndex >= texts.length){
                textIndex = 0;
            }

            typeEffect();

        },1500);
    }

}

setTimeout(typeEffect,2000);
function showTool(title, description){
    document.getElementById("toolTitle").innerText = title;
    document.getElementById("toolDescription").innerText = description;
    document.getElementById("toolPopup").style.display = "flex";
}

function closePopup(){
    document.getElementById("toolPopup").style.display = "none";
}
function filterTools(type){

    const cards = document.querySelectorAll(".tool-card");

    cards.forEach(card => {

        const cardType = card.getAttribute("data-type");

        if(type === "all"){
            card.style.display = "block";
        }
        else if(cardType === type){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });
}
