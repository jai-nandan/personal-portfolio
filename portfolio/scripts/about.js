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

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) type();
});

/* ================= DATA ================= */
const DATA = {
  experience: [
    {
      date: "JUNE 2025 - JULY 2025",
      position: "Python With AI Trainee",
      company: "Solitaire Infosys",
      details: "Completed hands-on training in Python and Machine Learning and developed a Fake News Detection System including preprocessing, feature extraction and model evaluation.",
      link: "assets/certificates/Confrmation_solitarie.pdf", // Optional certificate
      pdfTitle: "Confirmation Letter", // New property
      pdfLink: "assets/certificates/Confrmation_solitarie.pdf" // Path to the offer letter PDF
    },
    {
    date: "FEBRUARY 2026 - present",
      position: "Intership(Artificial Intelligence)",
      company: "Persevex",
      details: "Currently interning in Artificial Intelligence and Machine Learning, gaining hands-on experience in AI development and deployment.",
      link: "assets/certificates/Internship_Acceptance.pdf", // Optional certificate
      pdfTitle: "Offer Letter", // New property
      pdfLink: "assets/certificates/Internship_Acceptance.pdf" // Path to the offer letter PDF
    }
  ],
  education: [
    {
      date: "2023 - 2027",
      degree: "B.Tech Computer Science & Engineering",
      institution: "Sardar Beant Singh University, Gurdaspur",
      details: "Focused on AI, ML and Data Analysis using Python."
    },
    {
      date: "2022 - 2023",
      degree: "Higher Secondary (Science)",
      institution: "SMKSR Govt. Sr. Sec. School",
      details: "Physics, Chemistry, Mathematics"
    },
    {
      date: "2020 - 2021",
      degree: "Secondary School",
      institution: "Anand Modern Sr. Sec. School",
      details: "Strong logical and technical foundation"
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
        { name: "Python", icon: "assets/skills/python.png" },
        
      ]
    },
    {
      title: "Database",
      items: [
       
      ]
    },
    {
      title: "Tools",
      items: [
        { name: "Git Hub", icon: "assets/skills/logo-github_.png" },
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
      id: 1,
      icon: "ph-certificate",
      title: "PYTHON WITH AI TRAINING",
      description: "Completed hands-on training in Python and Machine Learning, covering data preprocessing, model training, and evaluation.",
      link: "assets/certificates/Training Certificate (Solitaire Infosys).pdf"
    },
    {
      id: 2,
      icon: "ph-certificate",
      title: "Python Using AI Workshop",
      description: "Successfully completed the “Python Using AI Workshop” by AI For Techies, gaining practical experience in AI-assisted Python development.",
      link: "assets/certificates/Workshop Python Using Ai.pdf"
    },
    {
      id: 3,
      icon: "ph-certificate",
      title: "AI Tools Workshop",
      description: "Completed a 2-hour hands-on AI workshop exploring 10+ AI tools and their practical applications.",
      link: "assets/certificates/WORKSHOP OF AI.pdf"
    }
  ]
};

/* ================= TAB SWITCHING ================= */
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => tabs[0]?.click());

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

  // Close menu if open (for mobile)
  if (toggle) toggle.checked = false;
  updateBodyScroll();
}

/* ================= RENDER CONTROLLER ================= */
function renderSection(section) {
  switch (section) {
    case "experience":
      renderExperience();
      break;
    case "education":
      renderEducation();
      break;
    case "skills":
      renderSkills();
      break;
    case "about-me":
      renderAbout();
      break;
    case "services":
      renderServices();
      break;
  }
}

/* ================= EXPERIENCE ================= */
function renderExperience() {
  const container = document.querySelector(".experience-list");
  if (!container) return;

  container.innerHTML = DATA.experience.map(exp => `
    <div class="experience-box">
      <h4>${exp.date}</h4>
      <h3>${exp.position}</h3>
      <div class="company-name">
        <span></span>
        <p>${exp.company}</p>
      </div>
      <p>${exp.details}</p>
      ${exp.pdfLink ? `
        <a href="${exp.pdfLink}" target="_blank" class="pdf-link">
          <i class="ph ph-file-pdf"></i> ${exp.pdfTitle}
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
      <div class="company-name"><span></span><p>${ed.institution}</p></div>
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
      <h3 class="skill-heading">${cat.title}</h3>
      <div class="skill-grid">
        ${cat.items.map(skill => `
          <div class="skill-box">
            <img src="${skill.icon}" alt="${skill.name}" title="${skill.name}" loading="lazy">
            <p>${skill.name}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

/* ================= ABOUT ME ================= */
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

/* ================= SERVICES ================= */
function renderServices() {
  const container = document.querySelector(".service-list");
  if (!container) return;

  container.innerHTML = DATA.services.map(service => `
    <div class="box">
      <div class="head-icons">
        <i class="ph ${service.icon}"></i>
        <span>
          <a href="${service.link}" target="_blank" title="View Certificate">
            <i class="ph ph-file-pdf"></i>
          </a>
        </span>
      </div>
      <h3>${service.title}</h3>
      <span id="spacer"></span>
      <p>${service.description}</p>
    </div>
  `).join("");
}
