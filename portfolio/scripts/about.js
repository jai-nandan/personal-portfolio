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
  document.getElementById(tab.dataset.section)?.classList.add("active");

  renderSection(tab.dataset.section);
}

/* ================= DATA ================= */

const DATA = {

  experience: [
    {
      date: "JUNE 2025 - JULY 2025",
      position: "Python With AI Trainee",
      company: "Solitaire Infosys",
      details:
        "Completed hands-on training in Python and Machine Learning and developed a Fake News Detection System including preprocessing, feature extraction and model evaluation."
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
        { name: "Flask", icon: "assets/skills/flask.png" }
      ]
    },
    {
      title: "Database",
      items: [
        { name: "MySQL", icon: "assets/skills/mysql.png" },
        { name: "SQLite", icon: "assets/skills/sqlite.png" }
      ]
    },
    {
      title: "Tools",
      items: [
        { name: "Git", icon: "assets/skills/git.png" },
        { name: "VS Code", icon: "assets/skills/vscode.png" },
        { name: "Jupyter", icon: "assets/skills/jupyter.png" }
      ]
    }
  ],

  about: [
    ["Name", "Jai Nandan"],
    ["Country", "India"],
    ["Industry", "Software & IT"],
    ["Experience", "Fresher"],
    ["Address", "Arya Nagar, Dinanagar"]
  ]
};


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
      <div class="company-name">
        <span></span>
        <p>${ed.institution}</p>
      </div>
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
