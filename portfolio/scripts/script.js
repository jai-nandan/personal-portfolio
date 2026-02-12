const toggle = document.getElementById("menu-toggle");
const typingText = document.getElementById("typing-span");
const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

/* ================= MOBILE SCROLL FIX ================= */
// Function to sync the body scroll with the menu state
const updateScrollLock = () => {
  if (toggle && toggle.checked) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
};

// Listen for any manual changes to the checkbox (hamburger click)
toggle?.addEventListener("change", updateScrollLock);

/* ================= TYPING EFFECT ================= */
const words = [
  "AI/ML Enthusiast",
  "Data Scientist",
  "Python Developer",
  "Machine Learning Student",
  "Deep Learning Explorer",
  "AI Project Builder"
];

let wordIndex = 0, charIndex = 0, isDeleting = false;

const type = () => {
  const currentWord = words[wordIndex];
  const shouldDelete = isDeleting;

  typingText.textContent = currentWord.substring(0, charIndex + (shouldDelete ? -1 : 1));
  charIndex += shouldDelete ? -1 : 1;

  let delta = shouldDelete ? 100 : 100;

  if (!shouldDelete && charIndex === currentWord.length) {
    isDeleting = true;
    delta = 1000; // Wait at end
  } else if (shouldDelete && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    delta = 500; // Wait before next word
  }

  setTimeout(type, delta);
};

/* ================= TAB NAVIGATION ================= */
navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // 1. Close menu and FORCE unlock scroll
    if (toggle) {
      toggle.checked = false;
      updateScrollLock(); 
    }

    // 2. Handle active states
    navlinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    // 3. Switch Tabs
    const tabName = link.dataset.tab;
    tabs.forEach((tab) => {
      tab.classList.toggle("active", tab.id === tabName);
    });

    // 4. Dynamic Service Rendering
    if (tabName === "services") {
      renderServices();
    }
  });
});

/* ================= SERVICE RENDERER ================= */
function renderServices() {
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
      para: "Successfully completed the “Python Using AI Workshop” by AI For Techies, gaining practical experience in AI-assisted Python development.",
      link: "assets/certificates/Workshop Python Using Ai.pdf"
    },
    {
      id: 3,
      icon: "ph-certificate",
      text: "AI Tools Workshop",
      para: "Completed a 2-hour hands-on AI workshop exploring 10+ AI tools and their practical applications in productivity and automation.",
      link: "assets/certificates/WORKSHOP OF AI.pdf"
    }
  ];

  const services = document.getElementsByClassName("service-list");
  const html = serviceList.map(l => `
    <div class="box">
      <div class="head-icons">
        <i class="ph ${l.icon}"></i>
        <span>
          <a href="${l.link}" target="_blank" title="View Certificate">
            <i class="ph ph-file-pdf"></i>
          </a>
        </span>
      </div> 
      <h3>${l.text}</h3>
      <p>${l.para}</p>
    </div>
  `).join("");

  Array.from(services).forEach(ele => ele.innerHTML = html);
}

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", () => {
  if (typingText && words.length) type();
  updateScrollLock(); // Check if browser auto-filled the checkbox on refresh
});
