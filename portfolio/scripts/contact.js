const media = document.querySelector(".contact-media");

const contactList = [
  {
    id: 1,
    icon: "ph ph-phone-call",
    name: "Phone",
    value: "+91 7740044761",
    href: "tel:+917740044761",
  },
  {
    id: 2,
    icon: "ph ph-envelope",
    name: "E-Mail",
    value: "jainandan2409@gmail.com",
    href: "mailto:jainandan2409@gmail.com",
  },
  {
    id: 3,
    icon: "ph ph-map-pin-area",
    name: "Country",
    value: "India",
    href: "#",
  },
];

const contactContent = contactList
  .map((ele) => {
    return `
    <div class="media" key="${ele?.id}">
        <span>
            <i class="${ele?.icon}"></i>
        </span>

        <div class="contact-value">
            <p>${ele?.name}</p>
            <a href="${ele?.href}">${ele?.value}</a>
        </div>
    </div>
    `;
  })
  .join("");

if (media) media.innerHTML = contactContent;

const sendBtn = document.querySelector("#send-msg");

const originalText = sendBtn.innerHTML;
const originalStyles = {
  backgroundColor: sendBtn.style.backgroundColor,
  color: sendBtn.style.color,
  border: sendBtn.style.border,
  boxShadow: sendBtn.style.boxShadow,
};

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    sendBtn.innerHTML = "Sending...";
    sendBtn.style.backgroundColor = "gray";
    sendBtn.style.color = "white";
    sendBtn.style.border = "none";
    sendBtn.style.boxShadow = "none";
    sendBtn.disabled = true;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !phone || !message) {

      sendBtn.innerHTML = originalText;
      Object.assign(sendBtn.style, originalStyles);
      sendBtn.disabled = false;

      return Toastify({
        text: "All fields are required !",
        duration: 3000,
        gravity: "top",
        position: "center",
        close: true,
        style: {
          background: "rgb(206, 16, 16)",
        },
      }).showToast();
    }

    emailjs
      .send("service_xpmg44l", "template_tdopczg", {
        name,
        email,
        phone,
        message,
      })
      .then(
        () => {
          Toastify({
            text: "Message Sent !",
            duration: 3000,
            gravity: "top",
            position: "center",
            close: true,
            style: {
              background: "rgb(9, 222, 38)",
            },
          }).showToast();

          setTimeout(() => {
            sendBtn.innerHTML = originalText;
            Object.assign(sendBtn.style, originalStyles);
            sendBtn.disabled = false;
          }, 2000);
        },
        (error) => {
          console.log("FAILED...", error);

          Toastify({
            text: "Message Failed. Try again.",
            duration: 3000,
            gravity: "top",
            position: "center",
            close: true,
            style: {
              background: "rgb(206, 16, 16)",
            },
          }).showToast();

          sendBtn.innerHTML = originalText;
          Object.assign(sendBtn.style, originalStyles);
          sendBtn.disabled = false;
        }
      );
  });
