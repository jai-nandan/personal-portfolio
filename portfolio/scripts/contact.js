/* ================= EMAILJS CONFIG ================= */
const PUBLIC_KEY = "ryRVrtHkW25WrBRbi";
const SERVICE_ID = "service_fllft5d";
const TEMPLATE_ID = "template_6645rny";

/* init once */
emailjs.init(PUBLIC_KEY);


/* ================= CONTACT MEDIA ================= */
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

if (media) {
  media.innerHTML = contactList
    .map(
      (c) => `
      <div class="media" data-id="${c.id}">
        <span><i class="${c.icon}"></i></span>
        <div class="contact-value">
          <p>${c.name}</p>
          <a href="${c.href}">${c.value}</a>
        </div>
      </div>
    `
    )
    .join("");
}


/* ================= FORM SEND ================= */
const form = document.getElementById("contact-form");
const sendBtn = document.getElementById("send-msg");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const params = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      message: form.message.value.trim(),
      reply_to: form.email.value.trim(),
    };

    /* ===== VALIDATION ===== */
    if (!params.name || !params.email || !params.phone || !params.message) {
      alert("Please fill all fields");
      return;
    }

    /* ===== BUTTON LOADING ===== */
    sendBtn.disabled = true;
    sendBtn.innerText = "Sending...";

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, params);

      alert("Message sent successfully ✅");
      form.reset();

    } catch (error) {
      console.error("EmailJS ERROR:", error);
      alert("Failed to send message ❌");
    }

    sendBtn.disabled = false;
    sendBtn.innerText = "Send Message";
  });
}
