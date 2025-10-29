// indexjs.js otimizado para landing page

document.addEventListener("DOMContentLoaded", () => {
  // Rolagem suave
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Botão flutuante do WhatsApp
  const whatsappBtn = document.createElement("a");
  whatsappBtn.href = "https://wa.me/5583987341197";
  whatsappBtn.target = "_blank";
  whatsappBtn.rel = "noopener noreferrer";
  whatsappBtn.innerHTML = `
    <div style="
      position:fixed;
      bottom:20px;
      right:20px;
      background-color:#25d366;
      color:#fff;
      border-radius:50%;
      width:60px;
      height:60px;
      display:flex;
      align-items:center;
      justify-content:center;
      box-shadow:0 4px 12px rgba(0,0,0,0.2);
      z-index:1000;
      cursor:pointer;
      transition:transform 0.3s ease;
    ">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.79 11.79 0 0012 0C5.37 0 .05 5.33.05 11.93c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.65a12.09 12.09 0 005.7 1.47c6.63 0 11.95-5.33 11.95-11.93a11.8 11.8 0 00-3.43-8.41zM12 21.55a9.53 9.53 0 01-4.86-1.3l-.35-.2-3.74.98 1-3.64-.24-.38a9.46 9.46 0 01-1.47-5.1C2.34 6.98 6.68 2.64 12 2.64a9.63 9.63 0 016.81 2.82 9.5 9.5 0 012.8 6.8c0 5.31-4.34 9.55-9.61 9.55zm5.6-7.38c-.3-.15-1.77-.86-2.05-.96-.27-.1-.47-.15-.67.15s-.76.96-.93 1.16c-.17.2-.34.22-.64.07a7.76 7.76 0 01-2.3-1.41 8.58 8.58 0 01-1.6-2c-.17-.3 0-.45.13-.6.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.5h-.58c-.2 0-.52.07-.8.38-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.05 4.48 2.96 1.28 2.96.86 3.5.82.54-.04 1.77-.72 2.02-1.42.25-.7.25-1.28.18-1.42-.08-.14-.28-.23-.58-.38z"/>
      </svg>
    </div>
  `;
  whatsappBtn.addEventListener("mouseenter", () => {
    whatsappBtn.firstElementChild.style.transform = "scale(1.1)";
  });
  whatsappBtn.addEventListener("mouseleave", () => {
    whatsappBtn.firstElementChild.style.transform = "scale(1)";
  });
  document.body.appendChild(whatsappBtn);

  // Rastreamento de cliques em CTA
  const trackClick = label => {
    console.log(`Clique em: ${label}`); // substitua por evento GA/Pixel se quiser
    // Exemplo Google Ads:
    // gtag('event', 'conversion', {'send_to': 'AW-XXXXXXX/abc123', 'event_label': label});
  };

  document.querySelectorAll('a[href^="tel:"], a[href^="https://wa.me"]').forEach(btn => {
    btn.addEventListener("click", () => trackClick(btn.href.includes("wa.me") ? "WhatsApp" : "Telefone"));
  });
});
