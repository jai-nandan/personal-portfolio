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
      "Built a real-time Face Detection System using Python and OpenCV, leveraging Haar Cascades and DNN to detect faces from webcams, videos, or images, gaining hands-on experience in computer vision and AI.",
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
      "Developed a simple and responsive Age Calculator using HTML, CSS, and JavaScript that calculates a user’s exact age in years, months, and days based on their birthdate. This project helped me strengthen my front-end development skills, JavaScript logic, and UI design fundamentals.",
    techStack: [ "HTML", " CSS", " js"],
    image: "assets/projects/project3.png",
    liveLink: "https://age-calculator-ebon-one.vercel.app/",
    githubLink: "https://github.com/jai-nandan/Age-Calculator",
  },
   {
    id: 4,
    number: "04",
    title: "Shri Paramhans Shop",
    description:
      "Created a responsive business website for Shri Param Hans Electrical and Electronics using HTML, CSS, and JavaScript, featuring product details, company information, customer feedback, and contact sections.",
    techStack: [ "HTML", " CSS", " js"],
    image: "assets/projects/project4.png",
    liveLink: "https://paramhans-shop.vercel.app/",
    githubLink: "https://github.com/jai-nandan/paramhans_shop",
  },
  {
    id: 5,
    number: "05",
    title: "Gst Invoice Generator",
    description:
      "ST Billing Web App – A simple web app to create GST invoices with automatic tax calculation and print-ready output using HTML, CSS, and JavaScript.",
    techStack: [ "HTML", " CSS", " js"],
    image: "assets/projects/project5.png",
    liveLink: "https://gst-invoice-gnerator.vercel.app/",
    githubLink: "https://github.com/jai-nandan/invoice-gnerator",
  }
];

const project = document.querySelector(".project");

let currentIndex = 0;

const renderProject = (index) => {
  const projectContent = projectList[index];

  const previousDisabled = currentIndex === 0;
  const nextDisabled = currentIndex === projectList.length - 1;

  project.innerHTML = `
        <div class="project-info">
            <h3>${projectContent?.number}</h3>
            <h4>${projectContent?.title}</h4>
            <p>
            ${projectContent?.description}
            </p>
            <div class="tech-stack">
                ${projectContent?.techStack
                  ?.map((tech, i) => {
                    return `<span key=${i}>${tech}</span>`;
                  })
                  .join(",")}
            </div>       
            <hr />
            <div class="links">
              <a href="${projectContent?.liveLink}">
                <i class="ph ph-arrow-right"></i>
              </a>
              <a href="${projectContent?.githubLink}">
                <i class="ph ph-github-logo"></i>
              </a>
            </div>
          </div>

          <div class="carousel">
            <img 
                src="${projectContent?.image}" 
                alt="${projectContent?.title}" 
            />

            <div class="arrows">
              <a href="#" id="previous" class='${
                previousDisabled ? "disabled-btn" : ""
              }'>
                <i class="ph ph-caret-left"></i>
              </a>
              <a href="#" id="next" class='${
                nextDisabled ? "disabled-btn" : ""
              }'>
                <i class="ph ph-caret-right"></i>
              </a>
            </div>
          </div>
  `;

  document.getElementById("previous").addEventListener("click", (e) => {
    e.preventDefault();

    if (currentIndex > 0) {
      currentIndex--;
      renderProject(currentIndex);
    }
  });

  document.getElementById("next").addEventListener("click", (e) => {
    e.preventDefault();

    if (currentIndex < projectList.length - 1) {
      currentIndex++;
      renderProject(currentIndex);
    }
  });
};

renderProject(currentIndex);


