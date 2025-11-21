let activeSection = "about"

// Initialize the portfolio
document.addEventListener("DOMContentLoaded", () => {
  createFloatingParticles()
})

// Create floating particles and stars
function createFloatingParticles() {
  const particlesContainer = document.querySelector(".floating-particles")
  if (!particlesContainer) return

  particlesContainer.innerHTML = ""

  // Create enhanced floating dots
  for (let i = 0; i < 15; i++) {
    const particle = document.createElement("div")
    particle.className = "floating-particle"
    particle.style.cssText = `
            position: absolute;
            width: ${3 + Math.random() * 3}px;
            height: ${3 + Math.random() * 3}px;
            background: linear-gradient(45deg, #60a5fa, #a855f7, #22d3ee);
            border-radius: 50%;
            opacity: ${0.4 + Math.random() * 0.4};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatEnhanced ${6 + Math.random() * 6}s ease-in-out infinite ${i * 0.2}s;
            box-shadow: 0 0 10px rgba(96, 165, 250, 0.3);
        `
    particlesContainer.appendChild(particle)
  }

  // Create floating stars
  for (let i = 0; i < 8; i++) {
    const star = document.createElement("div")
    star.className = "floating-star"
    star.innerHTML = "✦"
    star.style.cssText = `
            position: absolute;
            color: #93c5fd;
            opacity: ${0.6 + Math.random() * 0.4};
            font-size: ${16 + Math.random() * 8}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 60}%;
            animation: twinkleEnhanced ${2 + Math.random() * 3}s ease-in-out infinite ${i * 0.4}s;
            z-index: 10;
            text-shadow: 0 0 15px rgba(147, 197, 253, 0.7);
            cursor: pointer;
            transition: all 0.3s ease;
        `

    star.addEventListener("mouseenter", () => {
      star.style.transform = "scale(1.5) rotate(180deg)"
      star.style.textShadow = "0 0 25px rgba(147, 197, 253, 1)"
      star.style.color = "#60a5fa"
    })

    star.addEventListener("mouseleave", () => {
      star.style.transform = "scale(1) rotate(0deg)"
      star.style.textShadow = "0 0 15px rgba(147, 197, 253, 0.7)"
      star.style.color = "#93c5fd"
    })

    star.addEventListener("click", () => {
      star.style.animation = "starExplode 0.6s ease-out"
      setTimeout(() => {
        star.style.animation = `twinkleEnhanced ${2 + Math.random() * 3}s ease-in-out infinite`
      }, 600)
    })

    particlesContainer.appendChild(star)
  }
}

// Handle contact clicks
function handleContactClick(type) {
  if (type === "connect") {
    // Scroll to contact section
    const contactSection = document.querySelector(".contact-section")
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
    return
  }

  switch (type) {
    case "email":
      window.location.href = "mailto:youssefmohamedelbasouny@gmail.com"
      break
    case "linkedin":
      window.open("https://www.linkedin.com/in/yousef-el-basuony/", "_blank")
      break
    case "github":
      // Fixed the broken URL here
      window.open("https://github.com/yousef-elbasuony", "_blank")
      break
  }
}

// Handle view projects
function handleViewProjects() {
  handleSectionChange("projects")
  setTimeout(() => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }, 100)
}

// Handle section changes
function handleSectionChange(section) {
  activeSection = section

  // Update navigation buttons
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("active")
  })

  // Add active class to current button
  const currentBtn = document.querySelector(`[onclick="handleSectionChange('${section}')"]`)
  if (currentBtn) {
    currentBtn.classList.add("active")
  }

  // Update content sections
  document.querySelectorAll(".content-section").forEach((sec) => {
    sec.classList.remove("active")
  })

  // Show current section
  const currentSection = document.getElementById(section)
  if (currentSection) {
    currentSection.classList.add("active")
  }
}