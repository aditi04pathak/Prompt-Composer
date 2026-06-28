// --- MOCK PROMPTS DATA ---
const MOCK_PROMPTS = [
  {
    id: 'p1',
    title: 'Ethereal Forest Magic',
    prompt: 'Enchanted forest with glowing mushrooms, fairy lights dancing between ancient trees, magical atmosphere, soft ethereal lighting, fantasy art style, 8k resolution, photorealistic',
    result: 'https://images.pexels.com/photos/1438248/pexels-photo-1438248.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'landscape',
    creator: {
      name: 'Sarah Jenkins',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Sarah',
      username: '@sarah_designs',
      verified: true
    },
    likes: 892,
    uses: 2100,
    liked: false
  },
  {
    id: 'p2',
    title: 'Modern Architecture Minimalist',
    prompt: 'Minimalist concrete building with large glass windows, geometric shapes, water reflection pool in front, natural lighting, architectural photography, clean lines, sunset sky',
    result: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'architecture',
    creator: {
      name: 'Alex Rivera',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Alex',
      username: '@alex_arch',
      verified: false
    },
    likes: 654,
    uses: 1800,
    liked: false
  },
  {
    id: 'p3',
    title: 'Ocean Sunset Golden Hour',
    prompt: 'Golden hour beach scene with gentle waves breaking, warm orange and pink sky, sun setting on the horizon, peaceful atmosphere, cinematic composition, high resolution, 35mm lens',
    result: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'photography',
    creator: {
      name: 'Emma Watson',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Emma',
      username: '@emma_captures',
      verified: true
    },
    likes: 1203,
    uses: 3200,
    liked: false
  },
  {
    id: 'p4',
    title: 'Cyberpunk Street Rain',
    prompt: 'Neon-lit cyberpunk street in Neo-Tokyo, wet pavement reflecting bright pink and cyan lights, flying vehicles high above, a lone wanderer in a holographic trench coat, highly detailed',
    result: 'https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'digital-art',
    creator: {
      name: 'Dan Chen',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Dan',
      username: '@danchen_art',
      verified: false
    },
    likes: 2450,
    uses: 6100,
    liked: false
  },
  {
    id: 'p5',
    title: 'Delicious Gourmet Pizza',
    prompt: 'Wood-fired gourmet pizza on a rustic wooden board, bubbling mozzarella cheese, fresh basil leaves, cherry tomatoes, steam rising, professional food photography, shallow depth of field',
    result: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'food',
    creator: {
      name: 'Chef Mario',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Mario',
      username: '@mario_eats',
      verified: true
    },
    likes: 412,
    uses: 890,
    liked: false
  },
  {
    id: 'p6',
    title: 'Retro Futuristic Cyber-car',
    prompt: 'DeLorean style cybercar driving on a vaporwave highway, glowing synthwave grid sunset in background, palm tree silhouettes, 80s retrowave vibe, neon colors, digital painting',
    result: 'https://images.pexels.com/photos/381228/pexels-photo-381228.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'abstract',
    creator: {
      name: 'Dan Chen',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Dan',
      username: '@danchen_art',
      verified: false
    },
    likes: 1980,
    uses: 4500,
    liked: false
  },
  {
    id: 'p7',
    title: 'Cyberpunk Fashion Model',
    prompt: 'Model wearing high-tech futuristic street fashion, reflective metallic visor, LED accents in jacket, dark industrial background with smoke, cyberpunk runway look, hyperrealistic',
    result: 'https://images.pexels.com/photos/157675/pexels-photo-157675.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'fashion',
    creator: {
      name: 'Sophie Vart',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Sophie',
      username: '@sophie_trends',
      verified: true
    },
    likes: 721,
    uses: 1340,
    liked: false
  },
  {
    id: 'p8',
    title: 'Cute Tiny Dragon',
    prompt: 'A tiny adorable baby dragon sitting on a stone, big expressive crystal eyes, breathing a tiny puff of magical spark, fantasy illustration, Pixar style character design, 3D render',
    result: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'character',
    creator: {
      name: 'Sarah Jenkins',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Sarah',
      username: '@sarah_designs',
      verified: true
    },
    likes: 1530,
    uses: 3900,
    liked: false
  }
];

// --- MOCK NOTIFICATIONS ---
const MOCK_NOTIFICATIONS = [
  { id: 'n1', type: 'like', senderName: 'Sarah Jenkins', senderAvatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Sarah', promptTitle: 'Ocean Sunset Golden Hour', time: '5m ago', read: false },
  { id: 'n2', type: 'follow', senderName: 'Chef Mario', senderAvatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Mario', promptTitle: null, time: '2h ago', read: false },
  { id: 'n3', type: 'like', senderName: 'Alex Rivera', senderAvatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Alex', promptTitle: 'Cyberpunk Street Rain', time: '1d ago', read: true }
];

// --- MOCK MODEL LIST ---
const MOCK_MODELS = [
  { id: 'gpt-4o', name: 'GPT-4o (OpenAI) 🟢', url: 'https://chatgpt.com' },
  { id: 'gemini-pro', name: 'Gemini Pro (Google) 🔵', url: 'https://gemini.google.com' },
  { id: 'claude-sonnet', name: 'Claude 3.5 Sonnet (Anthropic) 🟠', url: 'https://claude.ai' },
  { id: 'perplexity-pro', name: 'Perplexity AI 🟢', url: 'https://perplexity.ai' },
  { id: 'midjourney', name: 'Midjourney 🎨', url: 'https://midjourney.com' }
];

// --- MOCK CHATBOT CONVERSATIONS ---
const CHATBOT_FAQ = {
  'hi': 'Hello! I am the yourPrompty AI assistant. How can I help you design your prompts today? 🎨',
  'hello': 'Hi there! Ready to write some amazing AI prompts? Tell me what you want to create! ✨',
  'help': 'I can help you with:\n1. Prompt structure advice\n2. Selecting the right AI model\n3. Browsing categories\nJust ask me anything!',
  'model': 'We support Midjourney v6, DALL-E 3, Stable Diffusion, and Flux.1 Dev. Each has unique styles! 🤖',
  'midjourney': 'Midjourney is great for rich, painterly, artistic, and photorealistic landscapes/characters. Use detailed descriptors!',
  'dalle': 'DALL-E 3 is excellent at following exact text instructions and complex compositions. Perfect for clear text rendering!',
  'flux': 'Flux.1 Dev offers top-tier photorealism, text accuracy, and high speed. It is a new favorite among creators!'
};

// --- AUTHENTICATION ROUTING ---
function checkAuth() {
  const path = window.location.pathname;
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

  if (path.includes('main.html') && !isLoggedIn) {
    window.location.href = 'login.html';
  } else if (path.includes('login.html') && isLoggedIn) {
    window.location.href = 'main.html';
  }
}

// Run auth check immediately on load
checkAuth();

// --- EXECUTE MAIN LOGIC WHEN DOM LOADED ---
document.addEventListener('DOMContentLoaded', () => {
  const isLoginPage = window.location.pathname.includes('login.html');

  if (isLoginPage) {
    initLoginPage();
  } else {
    initMainPage();
  }
});

// --- LOGIN PAGE LOGIC ---
function initLoginPage() {
  const authForm = document.getElementById('auth-form');
  const toggleAuthBtn = document.getElementById('toggle-auth-btn');
  const cardTitle = document.getElementById('card-title');
  const cardDesc = document.getElementById('card-desc');
  const submitBtnText = document.getElementById('submit-btn-text');
  const toggleLabel = document.getElementById('toggle-label');
  const toggleLink = document.getElementById('toggle-link');
  const nameGroup = document.getElementById('name-group');
  const usernameGroup = document.getElementById('username-group');
  const confirmGroup = document.getElementById('confirm-group');

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const nameInput = document.getElementById('full-name');
  const usernameInput = document.getElementById('username');
  const confirmInput = document.getElementById('confirm-password');

  const passwordToggle = document.querySelector('.password-toggle');
  const errorMessage = document.getElementById('error-message');

  let isLoginMode = true;

  // Show/Hide password
  if (passwordToggle) {
    passwordToggle.addEventListener('click', () => {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      const eyeIcon = passwordToggle.querySelector('svg');
      if (eyeIcon) {
        if (type === 'text') {
          eyeIcon.innerHTML = `<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" y1="2" x2="22" y2="22"></line>`;
        } else {
          eyeIcon.innerHTML = `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle>`;
        }
      }
    });
  }

  // Toggle between Login and Signup modes
  if (toggleLink) {
    toggleLink.addEventListener('click', (e) => {
      e.preventDefault();
      isLoginMode = !isLoginMode;
      errorMessage.style.display = 'none';

      if (isLoginMode) {
        cardTitle.innerText = 'Welcome Back!';
        cardDesc.innerText = 'Sign in to continue your journey';
        submitBtnText.innerText = 'Sign In';
        toggleLabel.innerText = "Don't have an account?";
        toggleLink.innerText = 'Sign Up';

        nameGroup.style.display = 'none';
        usernameGroup.style.display = 'none';
        confirmGroup.style.display = 'none';

        nameInput.removeAttribute('required');
        usernameInput.removeAttribute('required');
        confirmInput.removeAttribute('required');
      } else {
        cardTitle.innerText = 'Join yourPrompty';
        cardDesc.innerText = 'Create your account and get started';
        submitBtnText.innerText = 'Create Account';
        toggleLabel.innerText = 'Already have an account?';
        toggleLink.innerText = 'Sign In';

        nameGroup.style.display = 'block';
        usernameGroup.style.display = 'block';
        confirmGroup.style.display = 'block';

        nameInput.setAttribute('required', '');
        usernameInput.setAttribute('required', '');
        confirmInput.setAttribute('required', '');
      }
    });
  }

  // Form submission
  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      errorMessage.style.display = 'none';

      const email = emailInput.value.trim();
      const password = passwordInput.value;

      if (!isLoginMode) {
        const confirmPassword = confirmInput.value;
        if (password !== confirmPassword) {
          showError('Passwords do not match');
          return;
        }
      }

      // Simulate API loading
      const btn = authForm.querySelector('.btn-primary');
      const originalText = btn.innerHTML;
      btn.innerHTML = `<div style="width: 1rem; height: 1rem; border: 2px solid rgba(255,255,255,0.3); border-top: 2px solid white; border-radius: 50%; animation: spin 1s linear infinite; margin-right: 0.5rem; display: inline-block;"></div> Loading...`;
      btn.disabled = true;

      setTimeout(() => {
        // Successful login/signup simulation
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userEmail', email);
        sessionStorage.setItem('userName', isLoginMode ? 'Creative User' : nameInput.value.trim());
        sessionStorage.setItem('userAvatar', `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(email)}`);

        window.location.href = 'main.html';
      }, 1200);
    });
  }

  function showError(msg) {
    errorMessage.innerText = msg;
    errorMessage.style.display = 'block';
    errorMessage.classList.add('animate-shake');
    setTimeout(() => {
      errorMessage.classList.remove('animate-shake');
    }, 500);
  }
}

// --- MAIN PAGE LOGIC ---
let activeCategory = 'all';
let currentSearch = '';
let listPrompts = [...MOCK_PROMPTS];
let unreadNotificationsCount = MOCK_NOTIFICATIONS.filter(n => !n.read).length;

function initMainPage() {
  // Update Profile Data
  const userName = sessionStorage.getItem('userName') || 'Creative User';
  const userAvatar = sessionStorage.getItem('userAvatar') || 'https://api.dicebear.com/7.x/initials/svg?seed=user';

  // Set User Profile Avatars
  const profileAvatarImgs = document.querySelectorAll('.user-avatar-img');
  profileAvatarImgs.forEach(img => {
    img.src = userAvatar;
    img.alt = userName;
  });

  const welcomeNameElement = document.getElementById('welcome-name');
  if (welcomeNameElement) {
    welcomeNameElement.innerText = `Welcome, ${userName.split(' ')[0]}!`;
  }

  // Bind Header Dropdown actions
  setupDropdowns();

  // Render Notifications
  renderNotifications();

  // Render Category Selectors
  setupCategories();

  // Initial Prompts Feed Load
  renderPrompts();

  // Search input events
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      renderPrompts();
    });
  }

  // Setup Chatbot Drawer
  setupChatbot();

  // Setup Image Zoom Modal
  setupZoomModal();
}

function setupDropdowns() {
  const profileBtn = document.getElementById('profile-menu-btn');
  const profileDropdown = document.getElementById('profile-dropdown');
  const mainBtn = document.getElementById('main-menu-btn');
  const mainDropdown = document.getElementById('main-dropdown');

  const notificationsBtn = document.getElementById('notifications-btn');
  const notificationsDropdown = document.getElementById('notifications-dropdown');

  const signOutBtn = document.getElementById('sign-out-btn');

  // Toggle Profile Dropdown
  if (profileBtn && profileDropdown) {
    profileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle('active');
      if (mainDropdown) mainDropdown.classList.remove('active');
      if (notificationsDropdown) notificationsDropdown.classList.remove('active');
    });
  }

  // Toggle Main Menu Dropdown
  if (mainBtn && mainDropdown) {
    mainBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mainDropdown.classList.toggle('active');
      if (profileDropdown) profileDropdown.classList.remove('active');
      if (notificationsDropdown) notificationsDropdown.classList.remove('active');
    });
  }

  // Toggle Notifications Tray
  if (notificationsBtn && notificationsDropdown) {
    notificationsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notificationsDropdown.classList.toggle('active');
      if (profileDropdown) profileDropdown.classList.remove('active');
      if (mainDropdown) mainDropdown.classList.remove('active');

      // Mark notifications as read when tray is opened
      if (notificationsDropdown.classList.contains('active')) {
        MOCK_NOTIFICATIONS.forEach(n => n.read = true);
        unreadNotificationsCount = 0;
        updateNotificationsBadge();
        renderNotifications();
      }
    });
  }

  // Sign out click
  if (signOutBtn) {
    signOutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      sessionStorage.clear();
      window.location.href = 'login.html';
    });
  }

  // Click outside to close all
  document.addEventListener('click', () => {
    if (profileDropdown) profileDropdown.classList.remove('active');
    if (mainDropdown) mainDropdown.classList.remove('active');
    if (notificationsDropdown) notificationsDropdown.classList.remove('active');

    // Close any open model selector dropdowns
    document.querySelectorAll('.model-selector-dropdown').forEach(d => {
      d.classList.remove('active');
    });
  });
}

function updateNotificationsBadge() {
  const badge = document.getElementById('notification-badge');
  if (badge) {
    if (unreadNotificationsCount > 0) {
      badge.style.display = 'flex';
      badge.innerText = unreadNotificationsCount;
    } else {
      badge.style.display = 'none';
    }
  }
}

function renderNotifications() {
  updateNotificationsBadge();
  const listContainer = document.getElementById('notification-list');
  if (!listContainer) return;

  if (MOCK_NOTIFICATIONS.length === 0) {
    listContainer.innerHTML = `
      <div style="padding: 2rem 1rem; text-align: center; color: #9ca3af;">
        <p style="font-weight: 500; font-size: 0.875rem;">No notifications yet</p>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = MOCK_NOTIFICATIONS.map(n => {
    let message = '';
    let iconSvg = '';
    if (n.type === 'like') {
      message = `liked your prompt <b>${n.promptTitle}</b>`;
      iconSvg = `<svg style="color: #ef4444; width: 1rem; height: 1rem;" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>`;
    } else if (n.type === 'follow') {
      message = `started following you`;
      iconSvg = `<svg style="color: #9333ea; width: 1rem; height: 1rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="22" y1="11" x2="16" y2="11"></line></svg>`;
    }

    return `
      <div class="notification-item ${!n.read ? 'unread' : ''}">
        <img src="${n.senderAvatar}" class="creator-avatar" alt="${n.senderName}" style="width: 2.25rem; height: 2.25rem;">
        <div style="flex: 1;">
          <p style="font-size: 0.8125rem; color: #374151; line-height: 1.3;">
            <b>${n.senderName}</b> ${message}
          </p>
          <span style="font-size: 0.75rem; color: #9ca3af;">${n.time}</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.25rem;">
          ${iconSvg}
          ${!n.read ? '<div style="width: 0.5rem; height: 0.5rem; background-color: var(--primary-purple); border-radius: 50%;"></div>' : ''}
        </div>
      </div>
    `;
  }).join('');
}

function setupCategories() {
  const categoryContainer = document.getElementById('category-bar');
  if (!categoryContainer) return;

  const categories = [
    { id: 'all', name: 'All', emoji: '🎯' },
    { id: 'photography', name: 'Photography', emoji: '📸' },
    { id: 'casual', name: 'Casual', emoji: '😎' },
    { id: 'character', name: 'Character', emoji: '👤' },
    { id: 'product-review', name: 'Product Review', emoji: '⭐' },
    { id: 'landscape', name: 'Landscape', emoji: '🏔️' },
    { id: 'digital-art', name: 'Digital Art', emoji: '🎨' },
    { id: 'abstract', name: 'Abstract', emoji: '🌈' },
    { id: 'food', name: 'Food', emoji: '🍕' },
    { id: 'fashion', name: 'Fashion', emoji: '👗' },
    { id: 'architecture', name: 'Architecture', emoji: '🏛️' },
    { id: 'general', name: 'General', emoji: '📋' }
  ];

  categoryContainer.innerHTML = categories.map(cat => `
    <button class="category-btn ${activeCategory === cat.id ? 'active' : ''}" data-id="${cat.id}">
      <span>${cat.emoji}</span>
      <span>${cat.name}</span>
    </button>
  `).join('');

  // Click handler
  categoryContainer.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      categoryContainer.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-id');
      renderPrompts();
    });
  });
}

function renderPrompts() {
  const feedContainer = document.getElementById('pinterest-grid');
  if (!feedContainer) return;

  // Filter list
  const filtered = listPrompts.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(currentSearch) ||
      p.prompt.toLowerCase().includes(currentSearch) ||
      p.creator.name.toLowerCase().includes(currentSearch);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    feedContainer.style.display = 'block';
    feedContainer.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 6rem 1rem; text-align: center; width: 100%;">
        <div style="width: 4rem; height: 4rem; background: linear-gradient(135deg, #f5f3ff, #fdf2f8); border-radius: 1rem; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin-bottom: 1rem;">🎨</div>
        <h3 style="font-size: 1.125rem; font-weight: 600; color: #374151; margin-bottom: 0.5rem;">No prompts found</h3>
        <p style="font-size: 0.875rem; color: #6b7280; max-width: 20rem;">Try tweaking your keywords or category filters!</p>
      </div>
    `;
    return;
  }

  // Restore column display
  feedContainer.removeAttribute('style');

  // Build grid items
  feedContainer.innerHTML = filtered.map((prompt, index) => {
    const selectedModelName = prompt.selectedModel
      ? (MOCK_MODELS.find(m => m.id === prompt.selectedModel)?.name || prompt.selectedModel)
      : 'Select AI Model 🤖';

    // Set heights dynamically based on index for Masonry grid look
    const heights = [280, 360, 320, 400, 300, 340];
    const imageH = heights[index % heights.length];

    return `
      <div class="prompt-card animate-fade-in-up" style="animation-delay: ${index * 0.05}s">
        <!-- Card Image -->
        <div class="card-image-container">
          <img src="${prompt.result}" class="card-image zoomable-img" alt="${prompt.title}" style="height: ${imageH}px;">
          <span class="card-category-badge">${prompt.category.toUpperCase()}</span>
          
          <button class="like-button-overlay ${prompt.liked ? 'liked' : ''}" data-id="${prompt.id}">
            <svg style="width: 1.25rem; height: 1.25rem;" viewBox="0 0 24 24" fill="${prompt.liked ? 'currentColor' : 'none'}" stroke="${prompt.liked ? 'none' : 'currentColor'}" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
          </button>
          
          <!-- Confetti overlay container -->
          <div class="confetti-container" id="confetti-${prompt.id}"></div>
        </div>

        <!-- Card Body -->
        <div class="card-body">
          <!-- Creator Profile -->
          <div class="creator-section">
            <img src="${prompt.creator.avatar}" class="creator-avatar" alt="${prompt.creator.name}">
            <div style="flex: 1; line-height: 1.2;">
              <p style="font-size: 0.8125rem; font-weight: 700; color: #111827;">
                ${prompt.creator.name} 
                ${prompt.creator.verified ? '<span style="color: #2563eb; margin-left: 0.15rem; font-weight: bold;">✓</span>' : ''}
              </p>
              <p style="font-size: 0.75rem; color: #6b7280;">${prompt.creator.username}</p>
            </div>
          </div>

          <!-- Prompt Title -->
          <h3 style="font-size: 0.9375rem; font-weight: 700; color: #111827; margin-bottom: 0.5rem; line-height: 1.3;">
            ${prompt.title}
          </h3>

          <!-- Prompt Box -->
          <div class="prompt-box">
            <p class="prompt-text line-clamp-3">
              <strong style="color: var(--primary-purple);">Prompt:</strong> ${prompt.prompt}
            </p>
            <button class="copy-btn" data-prompt="${prompt.prompt.replace(/"/g, '&quot;')}" data-id="${prompt.id}">
              <svg style="width: 1rem; height: 1rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
          </div>

          <!-- Model Selector -->
          <div class="model-selector" style="position: relative;">
            <button class="model-selector-btn" data-id="${prompt.id}">
              <span>${selectedModelName}</span>
              <svg style="width: 0.75rem; height: 0.75rem; color: #9ca3af;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>
            </button>
            <div class="model-selector-dropdown" id="dropdown-${prompt.id}">
              ${MOCK_MODELS.map(model => `
                <div class="model-option" data-prompt-id="${prompt.id}" data-model-id="${model.id}">
                  <span>${model.name}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Stats Bar -->
          <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8125rem; font-weight: 500; color: #6b7280; padding-top: 0.5rem; border-top: 1px solid #f3f4f6;">
            <div style="display: flex; align-items: center; gap: 0.25rem; cursor: pointer;" class="card-like-stats" data-id="${prompt.id}">
              <svg style="width: 0.875rem; height: 0.875rem; color: ${prompt.liked ? '#ef4444' : '#6b7280'};" viewBox="0 0 24 24" fill="${prompt.liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
              <span id="likes-count-${prompt.id}">${prompt.likes.toLocaleString()}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.25rem;">
              <svg style="width: 0.875rem; height: 0.875rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              <span>${prompt.uses.toLocaleString()} uses</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Re-bind actions on dynamic elements
  bindPromptActions();
}

function bindPromptActions() {
  // Liking (Double click image or Heart click)
  document.querySelectorAll('.like-button-overlay, .card-like-stats').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const promptId = btn.getAttribute('data-id');
      toggleLikePrompt(promptId);
    });
  });

  // Zoomable Image
  document.querySelectorAll('.zoomable-img').forEach(img => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      openZoomModal(img.src);
    });
  });

  // Clipboard copy
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const promptText = btn.getAttribute('data-prompt');
      const promptId = btn.getAttribute('data-id');

      navigator.clipboard.writeText(promptText).then(() => {
        // Change copy button state temporarily
        const oldHtml = btn.innerHTML;
        btn.innerHTML = `<svg style="width: 1rem; height: 1rem; color: #10b981;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
        btn.style.borderColor = '#10b981';
        btn.style.backgroundColor = '#ecfdf5';

        // Spawn confetti celebration
        triggerConfetti(promptId);

        setTimeout(() => {
          btn.innerHTML = oldHtml;
          btn.style.borderColor = '';
          btn.style.backgroundColor = '';
        }, 2000);
      });
    });
  });

  // Model Selector Dropdown Toggles
  document.querySelectorAll('.model-selector-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const promptId = btn.getAttribute('data-id');

      // Close other dropdowns
      document.querySelectorAll('.model-selector-dropdown').forEach(d => {
        if (d.id !== `dropdown-${promptId}`) {
          d.classList.remove('active');
        }
      });

      const targetDropdown = document.getElementById(`dropdown-${promptId}`);
      if (targetDropdown) {
        targetDropdown.classList.toggle('active');
      }
    });
  });

  // Select Model Option
  document.querySelectorAll('.model-option').forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      const promptId = opt.getAttribute('data-prompt-id');
      const modelId = opt.getAttribute('data-model-id');

      // Update prompt object
      const targetPrompt = listPrompts.find(p => p.id === promptId);
      if (targetPrompt) {
        targetPrompt.selectedModel = modelId;
      }

      // Close dropdown
      const dropdown = document.getElementById(`dropdown-${promptId}`);
      if (dropdown) dropdown.classList.remove('active');

      // Re-render
      renderPrompts();

      // Copy prompt automatically to clipboard and redirect to model link
      if (targetPrompt) {
        navigator.clipboard.writeText(targetPrompt.prompt).then(() => {
          // Trigger confetti on the card
          triggerConfetti(promptId);

          // Get model URL details
          const modelObj = MOCK_MODELS.find(m => m.id === modelId);
          if (modelObj) {
            let modelUrl = modelObj.url;
            // Pre-fill query param
            if (modelId === 'gpt-4o') {
              modelUrl = `https://chatgpt.com/?q=${encodeURIComponent(targetPrompt.prompt)}`;
            } else if (modelId === 'gemini-pro') {
              modelUrl = `https://gemini.google.com/?q=${encodeURIComponent(targetPrompt.prompt)}`;
            } else if (modelId === 'claude-sonnet') {
              modelUrl = `https://claude.ai/?prompt=${encodeURIComponent(targetPrompt.prompt)}`;
            } else if (modelId === 'perplexity-pro') {
              modelUrl = `https://perplexity.ai/?q=${encodeURIComponent(targetPrompt.prompt)}`;
            }

            // Show toast notification
            showToast(`✨ Prompt copied! Opening ${modelObj.name}...`);

            // Wait slightly so they see the toast and confetti, then open in new tab!
            setTimeout(() => {
              window.open(modelUrl, '_blank');
            }, 800);
          }
        });
      }
    });
  });
}

function toggleLikePrompt(id) {
  const prompt = listPrompts.find(p => p.id === id);
  if (!prompt) return;

  prompt.liked = !prompt.liked;
  if (prompt.liked) {
    prompt.likes += 1;
    // Animate badge increment and icons
    triggerConfetti(id);
  } else {
    prompt.likes -= 1;
  }

  // Update DOM directly for stats and overlays to avoid redrawing everything and losing scroll position
  const likesCountSpan = document.getElementById(`likes-count-${id}`);
  if (likesCountSpan) {
    likesCountSpan.innerText = prompt.likes.toLocaleString();
  }

  const likeOverlay = document.querySelector(`.like-button-overlay[data-id="${id}"]`);
  if (likeOverlay) {
    if (prompt.liked) {
      likeOverlay.classList.add('liked');
      likeOverlay.querySelector('svg').setAttribute('fill', 'currentColor');
      likeOverlay.querySelector('svg').setAttribute('stroke', 'none');
    } else {
      likeOverlay.classList.remove('liked');
      likeOverlay.querySelector('svg').setAttribute('fill', 'none');
      likeOverlay.querySelector('svg').setAttribute('stroke', 'currentColor');
    }
  }

  // Update like stats icon color
  const likeStatsIcon = document.querySelector(`.card-like-stats[data-id="${id}"] svg`);
  if (likeStatsIcon) {
    if (prompt.liked) {
      likeStatsIcon.style.color = '#ef4444';
      likeStatsIcon.setAttribute('fill', 'currentColor');
    } else {
      likeStatsIcon.style.color = '#6b7280';
      likeStatsIcon.setAttribute('fill', 'none');
    }
  }
}

// Confetti generator for card copying or liking
function triggerConfetti(promptId) {
  const container = document.getElementById(`confetti-${promptId}`);
  if (!container) return;

  container.innerHTML = '';
  const colors = ['#9333ea', '#ec4899', '#3b82f6', '#10b981', '#f59e0b', '#ef4444'];
  const piecesCount = 20;

  for (let i = 0; i < piecesCount; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';

    // Random styling
    const size = Math.random() * 6 + 4;
    const color = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = `${size}px`;
    piece.style.height = `${size}px`;
    piece.style.backgroundColor = color;
    piece.style.borderRadius = '50%';

    // Spread calculation
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 80 + 30;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    const rotation = Math.random() * 360;

    piece.style.setProperty('--x', `${x}px`);
    piece.style.setProperty('--y', `${y}px`);
    piece.style.setProperty('--r', `${rotation}deg`);

    piece.style.animation = 'confettiFall 1s cubic-bezier(0.1, 0.8, 0.3, 1) forwards';
    container.appendChild(piece);
  }
}

// --- IMAGE ZOOM MODAL LOGIC ---
let zoomModal, zoomImage;

function setupZoomModal() {
  zoomModal = document.getElementById('zoom-modal');
  zoomImage = document.getElementById('zoom-image');

  if (zoomModal) {
    zoomModal.addEventListener('click', () => {
      zoomModal.classList.remove('active');
    });
  }
}

function openZoomModal(src) {
  if (zoomModal && zoomImage) {
    zoomImage.src = src;
    zoomModal.classList.add('active');
  }
}

// --- CHATBOT SYSTEM ---
function setupChatbot() {
  const floatBtn = document.getElementById('chatbot-float');
  const drawer = document.getElementById('chatbot-drawer');
  const closeBtn = document.getElementById('chatbot-close');
  const input = document.getElementById('chatbot-input');
  const sendBtn = document.getElementById('chatbot-send');
  const msgContainer = document.getElementById('chatbot-messages');

  if (!floatBtn || !drawer) return;

  // Open / Close Toggle
  floatBtn.addEventListener('click', () => {
    drawer.classList.toggle('active');
    if (drawer.classList.contains('active') && input) {
      input.focus();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('active');
    });
  }

  // Send message events
  if (sendBtn && input) {
    const handleSend = () => {
      const text = input.value.trim();
      if (!text) return;

      appendChatMessage(text, 'user');
      input.value = '';

      // Auto response
      setTimeout(() => {
        const lower = text.toLowerCase();
        let reply = "That sounds interesting! Try adding style adjectives like 'cinematic lighting', 'masterpiece', or specifying an art style like 'vector illustration' to refine your output! 🎨";

        // Match faq key
        for (const [key, val] of Object.entries(CHATBOT_FAQ)) {
          if (lower.includes(key)) {
            reply = val;
            break;
          }
        }
        appendChatMessage(reply, 'bot');
      }, 1000);
    };

    sendBtn.addEventListener('click', handleSend);
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleSend();
    });
  }
}

function appendChatMessage(text, sender) {
  const container = document.getElementById('chatbot-messages');
  if (!container) return;

  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${sender}`;
  bubble.innerHTML = text.replace(/\n/g, '<br>');

  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

// Toast Notification trigger
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg style="width: 1rem; height: 1rem; color: var(--primary-purple); flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path></svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  // Remove toast from DOM after animation completes
  setTimeout(() => {
    toast.remove();
  }, 3000);
}
