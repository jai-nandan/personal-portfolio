/* ================= MENU TOGGLE SCROLL ================= */
const toggle = document.getElementById("menu-toggle");

function updateBodyScroll() {
  if (toggle && toggle.checked) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
}

toggle?.addEventListener("change", updateBodyScroll);

/* ================= TYPING EFFECT ================= */
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

const typingDelay = 100;
const erasingDelay = 100;
const nextWordDelay = 1000;

function type() {
  const currentWord = words[wordIndex];

  if (!typingText) return;

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, nextWordDelay);
    } else {
      setTimeout(type, typingDelay);
    }

  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, erasingDelay);
    }
  }
}

/* ================= DATA ================= */
const DATA = {
  experience: [
    {
      date: "JUNE 2025 - JULY 2025",
      position: "Python With AI Trainee",
      company: "Solitaire Infosys",
      details: "Completed hands-on training in Python and Machine Learning and developed a Fake News Detection System.",
      pdfTitle: "Confirmation Letter",
      pdfLink: "assets/certificates/Confrmation_solitarie.pdf"
    },
    {
      date: "FEBRUARY 2026 - APRIL 2026",
      position: "Internship (Artificial Intelligence)",
      company: "Persevex",
      details: "Currently interning in AI & ML with hands-on development experience.",
      pdfTitle: "Offer Letter",
      pdfLink: "assets/certificates/Internship_Acceptance.pdf"
    },
    {
      date: "JUNE 2026 - AUGUST 2026",
      position: "Internship (Data Science)",
      company: "IIT Jammu",
      details: "Working on AI/ML applications and real-world data science projects.",
      pdfTitle: "Offer Letter",
      pdfLink: "assets/certificates/IIT -Jammu.pdf"
    }
  ],

  education: [
    {
      date: "2023 - 2027",
      degree: "B.Tech CSE",
      institution: "Sardar Beant Singh University",
      details: "Focused on AI, ML, Data Science"
    },
    {
      date: "2022 - 2023",
      degree: "Higher Secondary",
      institution: "SMKSR Govt School",
      details: "Science Stream"
    },
    {
      date: "2020 - 2021",
      degree: "Secondary School",
      institution: "Anand Modern School",
      details: "Strong fundamentals"
    }
  ],

  skills: [
    {
      title: "Frontend",
      items: [
        { name: "HTML", icon: "assets/skills/html.png" },
        { name: "CSS", icon: "assets/skills/css.png" },
        { name: "JavaScript", icon: "assets/skills/js.png" }
      ]
    },
    {
      title: "Backend",
      items: [
        { name: "Python", icon: "assets/skills/python.png" }
      ]
    },
    {
      title: "Tools",
      items: [
        { name: "GitHub", icon: "assets/skills/logo-github_.png" },
        { name: "VS Code", icon: "assets/skills/vss.png" },
        { name: "Jupyter", icon: "assets/skills/jupyter.png" },
        { name: "Vercel", icon: "assets/skills/vercel-icon.webp" },
        { name: "Netlify", icon: "assets/skills/netlify.png" }
      ]
    }
  ],

  about: [
    ["Name", "Jai Nandan"],
    ["Country", "India"],
    ["Industry", "Software & IT"],
    ["Experience", "Fresher"],
    ["Address", "Arya Nagar, Dinanagar"]
  ],

  services: [
    {
      icon: "ph-certificate",
      title: "Python With AI Training",
      description: "Hands-on AI/ML training with project work.",
      link: "assets/certificates/Training Certificate (Solitaire Infosys).pdf"
    },
    {
      icon: "ph-certificate",
      title: "Python Using AI Workshop",
      description: "AI-assisted Python development workshop.",
      link: "assets/certificates/Workshop Python Using Ai.pdf"
    },
    {
      icon: "ph-certificate",
      title: "AI Tools Workshop",
      description: "Learned 10+ AI tools and applications.",
      link: "assets/certificates/WORKSHOP OF AI.pdf"
    },
    {
      icon: "ph-certificate",
      title: "AI Training (Preservex)",
      description: "Fundamentals of AI and ML training program.",
      link: "assets/certificates/Persevex_Tranning.pdf"
    }
  ]
};

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", () => {
  if (words.length) type();

  renderServices();
  renderExperience();
  renderEducation();
  renderSkills();
  renderAbout();

  tabs[0]?.click();
});

/* ================= TAB SYSTEM ================= */
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => activateTab(tab));
});

function activateTab(tab) {
  tabs.forEach(t => t.classList.remove("active"));
  tab.classList.add("active");

  contents.forEach(c => c.classList.remove("active"));

  const sectionId = tab.dataset.section;
  document.getElementById(sectionId)?.classList.add("active");

  renderSection(sectionId);

  if (toggle) toggle.checked = false;
  updateBodyScroll();
}

function renderSection(section) {
  switch (section) {
    case "experience": renderExperience(); break;
    case "education": renderEducation(); break;
    case "skills": renderSkills(); break;
    case "about-me": renderAbout(); break;
    case "services": renderServices(); break;
  }
}

/* ================= SERVICES ================= */
function renderServices() {
  const container = document.querySelector(".service-list");
  if (!container) return;

  container.innerHTML = DATA.services.map(service => `
    <div class="box">

      <div class="head-icons">
        <i class="ph ${service.icon}"></i>

        <span>
          <a href="${service.link}" target="_blank">
            <i class="ph ph-file-pdf"></i>
          </a>
        </span>
      </div>

      <h3>${service.title}</h3>

      <p>${service.description}</p>

    </div>
  `).join("");
}

/* ================= EXPERIENCE ================= */
function renderExperience() {
  const container = document.querySelector(".experience-list");
  if (!container) return;

  container.innerHTML = DATA.experience.map(exp => `
    <div class="experience-box">
      <h4>${exp.date}</h4>
      <h3>${exp.position}</h3>
      <p>${exp.company}</p>
      <p>${exp.details}</p>

      ${exp.pdfLink ? `
        <a class="pdf-link" href="${exp.pdfLink}" target="_blank">
          📄 ${exp.pdfTitle}
        </a>
      ` : ""}
    </div>
  `).join("");
}

/* ================= EDUCATION ================= */
function renderEducation() {
  const container = document.querySelector(".education-list");
  if (!container) return;

  container.innerHTML = DATA.education.map(ed => `
    <div class="experience-box">
      <h4>${ed.date}</h4>
      <h3>${ed.degree}</h3>
      <p>${ed.institution}</p>
      <p>${ed.details}</p>
    </div>
  `).join("");
}

/* ================= SKILLS ================= */
function renderSkills() {
  const container = document.querySelector(".skill-list");
  if (!container) return;

  container.innerHTML = DATA.skills.map(cat => `
    <div class="skill-category">
      <h3>${cat.title}</h3>

      <div class="skill-grid">
        ${cat.items.map(skill => `
          <div class="skill-box">
            <img src="${skill.icon}" alt="${skill.name}">
            <p>${skill.name}</p>
          </div>
        `).join("")}
      </div>

    </div>
  `).join("");
}

/* ================= ABOUT ================= */
function renderAbout() {
  const container = document.querySelector(".my-info");
  if (!container) return;

  container.innerHTML = DATA.about.map(info => `
    <div class="info-box">
      <span>${info[0]} :</span>
      <span>${info[1]}</span>
    </div>
  `).join("");
}