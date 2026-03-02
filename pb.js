document.addEventListener("DOMContentLoaded", () => {

  // ===== ROLAGEM SUAVE =====
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ===== BOTÃO WHATSAPP =====
  const whatsappBtn = document.createElement("a");
  whatsappBtn.href = "https://wa.me/5583987341197";
  whatsappBtn.target = "_blank";
  whatsappBtn.rel = "noopener noreferrer";
  whatsappBtn.innerHTML = `
    <div style="
      position:fixed;
      bottom:20px;
      right:20px;
      background-color:#FF0000;
      color:#000000;
      border-radius:10%;
      width:90px;
      height:60px;
      display:flex;
      align-items:center;
      justify-content:center;
      box-shadow:0 4px 12px rgba(0,0,0,0.2);
      z-index:1000;
      cursor:pointer;
      transition:transform 0.3s ease;
    ">
     📱 <span style="margin-left:8px;font-weight:bold;">Paraíba / PB</span>
    </div>
  `;
  document.body.appendChild(whatsappBtn);

  // ===== CARROSSEL AUTOMÁTICO =====
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-item');

  if (track && slides.length > 0) {
    let index = 0;

    setInterval(() => {
      index++;
      if (index >= slides.length) {
        index = 0;
      }
      track.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);
  }

});