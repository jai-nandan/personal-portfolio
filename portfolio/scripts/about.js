const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
  if (aboutTabs) {
    aboutTabs[0].click();
  }
});

aboutTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    aboutTabs.forEach((a) => a.classList.remove("active"));
    tab.classList.add("active");

    aboutContent.forEach((c) => c.classList.remove("active"));

    document.getElementById(tab.dataset.section).classList.add("active");

    if (tab.dataset.section === "experience") {
      const experiences = document.querySelector(".experience-list");

      const experienceList = [
        {
          id: 1,
          date: "JUNE 2025- JULY 2025",
          position: "Python With AI Trainee",
          company: "Solitarie Infosys",
          details:
            "Completed hands-on training in Python and Machine Learning, and developed a Fake News Detection system involving data preprocessing, feature extraction, and model evaluation to improve prediction accuracy.",
        },
        
      ];

      const experienceContent = experienceList
        .map((ele) => {
          return `
            <div class="experience-box" key="${ele?.id}">
              <h4>${ele?.date}</h4>
              <h3>${ele?.position}</h3>

              <div class="company-name">
                <span></span>
                <p>${ele?.company}</p>
              </div>

              <p>${ele?.details}</p>
            </div>
        `;
        })
        .join("");

      if (experiences) {
        experiences.innerHTML = experienceContent;
      }
    } else if (tab.dataset.section === "education") {
      const education = document.querySelector(".education-list");

      const educationList = [
        {
          id: 1,
          date: "2023 - 2027",
          degree: "Bachelor of Technology in Computer Science and Engineering",
          institution: "SARDAR BEANT SINGH UNIVERSITY, GURDASPUR",
          details:
            "Studied core computer science subjects with a strong focus on Machine Learning  and AI, and built academic projects involving data analysis and model development using Python.",
        },
        {
          id: 2,
          date: "2022 - 2023",
          degree: "Higher Secondary Education (HSC - Science)",
          institution: "SHAHID MAJOR KULBIR SING RANA GOVT.SENIOR SECONDARY SCHOOL",
          details:
            "Focused on Physics, Chemistry, and Mathematics. Developed a strong foundation in logical thinking and problem-solving.",
        },
        {
          id: 3,
          date: "2020 - 2021",
          degree: "Secondary School Certificate (SSC)",
          institution: "ANAND MODERN SENIOR SECONDARY SCHOOL",
          details:
            "Completed basic schooling with distinction. Actively participated in computer clubs and tech-related events.",
        },
      ];

      const educationContent = educationList
        .map((ele) => {
          return `
            <div class="experience-box" key="${ele?.id}">
              <h4>${ele?.date}</h4>
              <h3>${ele?.degree}</h3>

              <div class="company-name">
                <span></span>
                <p>${ele?.institution}</p>
              </div>

              <p>${ele?.details}</p>
            </div>
        `;
        })
        .join("");

      if (education) {
        education.innerHTML = educationContent;
      }
    } else if (tab.dataset.section === "skills") {
      const skills = document.querySelector(".skill-list");

      const skillList = [
        {
          id: 1,
          name: "HTML - Hyper Text Markup Language",
          icon: "assets/skills/html.png",
        },
        {
          id: 2,
          name: "CSS - Cascading Style Sheet",
          icon: "assets/skills/css.png",
        },
        {
          id: 3,
          name: "JavaScript",
          icon: "assets/skills/js.png",
        },
        {
          id: 4,
          name: "Python",
          icon: "assets/skills/python.png",
        },
        
       
      ];

      const skillContent = skillList
        .map((ele) => {
          return `
            <div class="skill-box" key=${ele?.id}>
              <img 
              src=${ele?.icon}
              alt="${ele?.name}"
              title="${ele?.name}"
              loading="lazy"/>
            </div>
        `;
        })
        .join("");

      if (skills) {
        skills.innerHTML = skillContent;
      }
    } else if (tab.dataset.section === "about-me") {
      const myInfo = document.querySelector(".my-info");

      const infoList = [
        {
          id: 1,
          key: "Name : ",
          value: "JAI NANDAN",
        },
        {
          id: 2,
          key: "Country : ",
          value: "India",
        },
        {
          id: 3,
          key: "Industry : ",
          value: "Software & IT",
        },
        {
          id: 4,
          key: "Experience : ",
          value: "FRESHER",
        },
        {
          id: 5,
          key: "Address : ",
          value: "Arya Nagar Near Lic office, Dinanagar",
        },
      ];

      const infoContent = infoList
        .map((ele) => {
          return `
            <div class="info-box" key=${ele?.id}>
              <span>${ele?.key}</span>
              <span>${ele?.value}</span>
            </div>
        `;
        })
        .join("");

      if (myInfo) {
        myInfo.innerHTML = infoContent;
      }
    }
  });
});
