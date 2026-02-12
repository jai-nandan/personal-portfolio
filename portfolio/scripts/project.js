/* ================= PROJECT DATA ================= */

const projectList = [
  {
    id: 1,
    number: "01",
    title: "Fake News Detection System",
    description:
      "Built an AI-Based Fake News Detector Android app using Java and TensorFlow Lite, applying NLP and ML models for real-time, offline fake news prediction.",
    techStack: ["Python", "Flask", "HTML", "Jupyter Notebook", "Advanced CSS", "TensorFlow Lite"],
    image: "assets/projects/project1.png",
    liveLink: "#",
    githubLink: "https://github.com/jai-nandan/fake_news_detection",
  },
  {
    id: 2,
    number: "02",
    title: "Face Detection System",
    description:
      "Built a real-time Face Detection System using Python and OpenCV, leveraging Haar Cascades and DNN to detect faces from webcams, videos, or images.",
    techStack: ["Python", "Flask", "HTML", "Jupyter Notebook", "Advanced CSS", "TensorFlow Lite"],
    image: "assets/projects/project2.png",
    liveLink: "#",
    githubLink: "https://github.com/jai-nandan/face_detection",
  },
  {
    id: 3,
    number: "03",
    title: "Age Calculator",
    description:
      "Responsive Age Calculator using HTML, CSS, and JavaScript that calculates exact age in years, months, and days.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "assets/projects/project3.png",
    liveLink: "https://age-calculator-ebon-one.vercel.app/",
    githubLink: "https://github.com/jai-nandan/Age-Calculator",
  },
  {
    id: 4,
    number: "04",
    title: "Shri Paramhans Shop",
    description:
      "Responsive business website with product details, company info, feedback, and contact sections.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "assets/projects/project4.png",
    liveLink: "https://paramhans-shop.vercel.app/",
    githubLink: "https://github.com/jai-nandan/paramhans_shop",
  },
  {
    id: 5,
    number: "05",
    title: "GST Invoice Generator",
    description:
      "Web app to create GST invoices with automatic tax calculation and print-ready output.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "assets/projects/project5.png",
    liveLink: "https://gst-invoice-gnerator.vercel.app/",
    githubLink: "https://github.com/jai-nandan/invoice-gnerator",
  },
  {
    id: 6,
    number: "06",
    title: "Shop Management System",
    description:
      "System to manage products, companies, salesmen, defective items, and payments using localStorage.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "assets/projects/project6.png",
    liveLink: "https://shop-manager-blush.vercel.app/",
    githubLink: "https://github.com/jai-nandan/shop-inventory",
  }
];


/* ================= STATE ================= */

const projectContainer = document.querySelector(".project");
let currentIndex = 0;


/* ================= TEMPLATE ================= */

function createProjectHTML(data, index) {

  const isFirst = index === 0;
  const isLast = index === projectList.length - 1;

  const techStackHTML = data.techStack
    .map(tech => `<span>${tech}</span>`)
    .join(" ");

  return `
    <div class="project-info">
        <h3>${data.number}</h3>
        <h4>${data.title}</h4>
        <p>${data.description}</p>

        <div class="tech-stack">${techStackHTML}</div>
        <hr />

        <div class="links">
          <a href="${data.liveLink}" target="_blank">
            <i class="ph ph-arrow-right"></i>
          </a>
          <a href="${data.githubLink}" target="_blank">
            <i class="ph ph-github-logo"></i>
          </a>
        </div>
    </div>

    <div class="carousel">
        <img src="${data.image}" alt="${data.title}" />

        <div class="arrows">
          <a href="#" id="previous" class="${isFirst ? "disabled-btn" : ""}">
            <i class="ph ph-caret-left"></i>
          </a>
          <a href="#" id="next" class="${isLast ? "disabled-btn" : ""}">
            <i class="ph ph-caret-right"></i>
          </a>
        </div>
    </div>
  `;
}


/* ================= RENDER ================= */

function renderProject(index) {
  const data = projectList[index];
  projectContainer.innerHTML = createProjectHTML(data, index);
}


/* ================= NAVIGATION (Event Delegation) ================= */

projectContainer.addEventListener("click", (e) => {

  const prevBtn = e.target.closest("#previous");
  const nextBtn = e.target.closest("#next");

  if (prevBtn && currentIndex > 0) {
    e.preventDefault();
    currentIndex--;
    renderProject(currentIndex);
  }

  if (nextBtn && currentIndex < projectList.length - 1) {
    e.preventDefault();
    currentIndex++;
    renderProject(currentIndex);
  }
});


/* ================= INIT ================= */

renderProject(currentIndex);
