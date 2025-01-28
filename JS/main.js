// Initialize Lucide icons
lucide.createIcons();

// Navigation items data
const navItems = [
    "Qo'mita",
    "Faoliyat",
    "Axborot xizmati",
    "Davlat xizmatlari",
    "Investitsiya salohiyati",
    "Ochiq ma'lumotlar",
    "Me'yoriy hujjatlar",
    "Bog'lanish"
];

// Side navigation items data
const sideNavItems = [
    "Katta hajmli va og'ir vaznli yuklarni tashishga ruxsatnoma olish",
    "Qo'mita yangiliklari",
    "Ochiq ma'lumotlar reyestri",
    "Qo'mitaga murojaat"
];

// Social links data
const socialLinks = [
    { icon: 'facebook', url: '#' },
    { icon: 'instagram', url: '#' },
    { icon: 'message-circle', url: '#' },
    { icon: 'youtube', url: '#' }
];

// Create navigation menu
const navMenu = document.getElementById('nav-menu');
navItems.forEach(item => {
    const li = document.createElement('li');
    li.className = 'group py-4 relative';
    li.innerHTML = `
        <button class="flex items-center gap-1 text-white hover:text-secondary px-4 py-2 transition duration-300">
            ${item}
            <i data-lucide="chevron-down" class="h-4 w-4 ml-1"></i>
        </button>
        <div class="absolute hidden group-hover:block bg-white shadow-md min-w-[160px] z-10">
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 transition duration-300">Submenu 1</a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 transition duration-300">Submenu 2</a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 transition duration-300">Submenu 3</a>
        </div>
    `;
    navMenu.appendChild(li);
});

// Create side navigation
const sideNav = document.getElementById('side-nav');
sideNavItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'flex items-center gap-2';
    div.innerHTML = `
        <div class="w-2 h-2 rounded-full bg-secondary"></div>
        <a href="#" class="text-lg text-white hover:text-secondary transition duration-300 transform hover:-translate-x-1">
            ${item}
        </a>
    `;
    sideNav.appendChild(div);
});

// Create social links
const socialLinksContainer = document.getElementById('social-links');
socialLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.className = 'flex items-center justify-center w-10 h-10 bg-white rounded-full hover:bg-secondary transition duration-300 transform hover:scale-110';
    a.innerHTML = `<i data-lucide="${link.icon}" class="text-primary"></i>`;
    socialLinksContainer.appendChild(a);
});

// Add mobile menu toggle functionality
const mobileMenuButton = document.createElement('button');
mobileMenuButton.className = 'md:hidden text-white p-2';
mobileMenuButton.innerHTML = '<i data-lucide="menu"></i>';
navMenu.parentNode.insertBefore(mobileMenuButton, navMenu);

mobileMenuButton.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('flex-col');
});

// Add responsive classes to navMenu
navMenu.classList.add('md:flex', 'hidden');

// Reinitialize Lucide icons after dynamic content creation
lucide.createIcons();