(() => {
  const menuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.querySelector(".mobile-close");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");

  const openMenu = () => {
    mobileMenu.classList.add("open");
    mobileMenu.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-open");
  };

  const closeMenu = () => {
    mobileMenu.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
  };

  menuBtn?.addEventListener("click", openMenu);
  closeBtn?.addEventListener("click", closeMenu);
  mobileLinks.forEach(link => link.addEventListener("click", closeMenu));

  // document.querySelectorAll(".faq-question").forEach(button => {
  //   button.setAttribute("aria-expanded", "false");
  //   button.addEventListener("click", () => {
  //     const item = button.closest(".faq-item");
  //     const answer = item.querySelector(".faq-answer");
  //     const isOpen = item.classList.contains("open");

  //     document.querySelectorAll(".faq-item.open").forEach(openItem => {
  //       openItem.classList.remove("open");
  //       openItem.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");
  //     });

  //     if (!isOpen) {
  //       item.classList.add("open");
  //       button.setAttribute("aria-expanded", "true");
  //     }
  //   });
  // });

  const revealItems = document.querySelectorAll(
    ".about-content,.about-image,.box-item,.process-image,.process-content,.visits-card,.faq-container,.slider,.contact-cta,.top-footer,.footer-col"
  );

  revealItems.forEach(el => el.classList.add("reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(el => observer.observe(el));
})();