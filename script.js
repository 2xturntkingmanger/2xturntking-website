window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.transition = "opacity 0.8s ease";
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 800);
  }, 1800);
});

// Smooth button animation
const buttons = document.querySelectorAll(".buttons a");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-6px) scale(1.05)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0) scale(1)";
  });
});

// Easter egg: type "glory"
let typed = "";

window.addEventListener("keydown", (e) => {
  typed += e.key.toLowerCase();

  if (typed.length > 5) {
    typed = typed.slice(-5);
  }

  if (typed === "glory") {
    alert("⚡ ALL GLORY TO GOD ⚡");
    typed = "";
  }
});
