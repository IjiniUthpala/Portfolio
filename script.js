// Add a scroll to top button
const scrollToTopButton = document.createElement("button");
scrollToTopButton.innerHTML = "&#8593;";
scrollToTopButton.style.position = "fixed";
scrollToTopButton.style.bottom = "20px";
scrollToTopButton.style.right = "20px";
scrollToTopButton.style.backgroundColor = "#333";
scrollToTopButton.style.color = "#fff";
scrollToTopButton.style.border = "none";
scrollToTopButton.style.borderRadius = "50%";
scrollToTopButton.style.padding = "10px";
scrollToTopButton.style.display = "none";
document.body.appendChild(scrollToTopButton);

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 500) {
		scrollToTopButton.style.display = "block";
	} else {
		scrollToTopButton.style.display = "none";
	}
});

scrollToTopButton.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});

// Add a hamburger menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector("nav ul");

hamburgerMenu.addEventListener("click", () => {
	navLinks.classList.toggle("open");
});

// Add a custom cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
	cursor.style.left = e.clientX + "px";
	cursor.style.top = e.clientY + "px";
});

// Add a scroll reveal effect
const revealElements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
	revealElements.forEach((element) => {
		const elementPosition = element.getBoundingClientRect();
		const revealThreshold = 100;

		if (elementPosition.top < window.innerHeight - revealThreshold) {
			element.classList.add("reveal-visible");
		}
	});
});

document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseover', function() {
        // Highlight or animate skill icon
        this.classList.add('highlight');
    });
    skill.addEventListener('mouseout', function() {
        // Remove highlight or animation
        this.classList.remove('highlight');
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const button = this.querySelector('button');
    button.innerHTML = 'Sending...';

    setTimeout(() => {
        button.innerHTML = 'Message Sent!';
        button.disabled = true;
    }, 2000);
});
