<<<<<<< HEAD
// Main menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

// Nosotros submenu toggle
const nosotrosDiv = document.getElementById('nosotros-div');
const nosotrosToggle = document.getElementById('nosotros-toggle');
const nosotrosMenu = document.getElementById('nosotros-menu');
const backNosotros = document.getElementById('back-nosotros');

// Servicios submenu toggle
const serviciosToggle = document.getElementById('servicios-toggle');
const serviciosMenu = document.getElementById('servicios-menu');
const backServicios = document.getElementById('back-servicios');

// Toggle main menu
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close main menu
closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});

// mostrar opcions de Nosotros pero sense ocultar res i mostrant les opcions a sota del boto
nosotrosToggle.addEventListener('click', () => {
    nosotrosMenu.classList.toggle('hidden');
});

// mostrar opcions de Servicios pero sense ocultar res i mostrant les opcions a sota del boto
serviciosToggle.addEventListener('click', () => {
    serviciosMenu.classList.toggle('hidden');
=======
import './style.css'
// Mobile Menu Toggle Script
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
>>>>>>> f6cb5b55b77bd8c6bcc056ad9dc3073cc9db20f1
});
