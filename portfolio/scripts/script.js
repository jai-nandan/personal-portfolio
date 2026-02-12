const toggle = document.getElementById("menu-toggle");

if (toggle && toggle.checked) {
  document.body.classList.add("no-scroll");
} else {
  document.body.classList.remove("no-scroll");
}

const words = [
  "AI/ML Enthusiast",
  "Data Scientist",
  "Python Developer",
  "Machine Learning Student",
  "Deep Learning Explorer",
  "AI Project Builder"
];

const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () => {
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex == currentWord.length) {
      isDeleting = true;
      setTimeout(type, nextWordDelay);
    } else {
      setTimeout(type, typingDelay);
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex == 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, erasingDelay);
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) type();
});

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    navlinks.forEach((l) => l.classList.remove("active"));

    link.classList.add("active");

    const tabName = link.dataset.tab;

    tabs.forEach((tab) => {
      if (tab.id === tabName) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });

    if (link.dataset.tab === "services") {
      const serviceList = [
  {
    id: 1,
    icon: "ph-certificate",
    text: "PYTHON WITH AI TRAINING",
    para: "Completed hands-on training in Python and Machine Learning, covering data preprocessing, model training, and evaluation.",
    link: "assets/certificates/Training Certificate (Solitaire Infosys).pdf"
  },
  {
    id: 2,
    icon: "ph-certificate",
    text: "Python Using AI Workshop",
    para: "Successfully completed the “Python Using AI Workshop” by AI For Techies, gaining practical experience in AI-assisted Python development. Learned to create interactive visualizations efficiently, debug code faster, and write optimized Python code using AI tools, reflecting a strong commitment to continuous learning and modern development practices.",
    link: "assets/certificates/Workshop Python Using Ai.pdf"
  },
  {
    id: 3,
    icon: "ph-certificate",
    text: "AI Tools Workshop",
    para: "Completed a 2-hour hands-on AI workshop exploring 10+ AI tools and their practical applications in productivity, automation, and real-world problem solving.",
    link : "assets/certificates/WORKSHOP OF AI.pdf"

  },
  
];

      const services = document.getElementsByClassName("service-list");

      const innerContent = serviceList
        .map((l) => {
          return `
          <div class="box">
            <div class="head-icons">
                 <i class="ph ${l?.icon}"></i>
                 <span>
                   <a href="${l?.link}" target="_blank" title="View Certificate">
                      <i class="ph ph-file-pdf"></i>
                       </a>
                          </span>
            </div> 

              <h3>${l?.text}</h3>
              <span id="spacer"></span>
              <p>
                ${l?.para}
              </p>
          </div>
          `;
        })
        .join("");

      Array.from(services).forEach((ele) => {
        ele.innerHTML = innerContent;
      });
    }

    toggle.checked = false;
  });
});
