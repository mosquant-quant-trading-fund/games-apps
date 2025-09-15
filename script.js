// Cookie Consent Management
function showCookieConsent() {
    const cookieConsent = document.getElementById('cookieConsent');
    if (!localStorage.getItem('cookieConsent')) {
        setTimeout(() => {
            cookieConsent.classList.add('show');
        }, 2000);
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    hideCookieConsent();
    console.log('Cookies accepted');
}

function rejectCookies() {
    localStorage.setItem('cookieConsent', 'rejected');
    hideCookieConsent();
    console.log('Cookies rejected');
}

function hideCookieConsent() {
    const cookieConsent = document.getElementById('cookieConsent');
    cookieConsent.classList.remove('show');
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            
            if (targetId === '#') {
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// App card interactions
function initAppCardInteractions() {
    const appCards = document.querySelectorAll('.app-card');
    
    appCards.forEach(card => {
        card.addEventListener('click', () => {
            const appName = card.querySelector('h4').textContent;
            showAppModal(appName);
        });
        
        // Hover effects disabled
        // card.addEventListener('mouseenter', () => {
        //     card.style.transform = 'translateY(-5px) scale(1.02)';
        // });
        
        // card.addEventListener('mouseleave', () => {
        //     card.style.transform = 'translateY(0) scale(1)';
        // });
    });
}

// Modal for app details
function showAppModal(appName) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('appModal');
    if (!modal) {
        modal = createAppModal();
        document.body.appendChild(modal);
    }
    
    // Update modal content
    const modalTitle = modal.querySelector('.modal-title');
    const modalContent = modal.querySelector('.modal-content-text');
    
    modalTitle.textContent = appName;
    modalContent.innerHTML = `
        <p><strong>Mô tả:</strong> Ứng dụng ${appName} là một trong những ứng dụng phổ biến nhất hiện tại.</p>
        <p><strong>Đánh giá:</strong> ⭐⭐⭐⭐⭐ (4.5/5)</p>
        <p><strong>Lượt tải:</strong> 1M+ lượt tải</p>
        <p><strong>Kích thước:</strong> 50MB</p>
        <p><strong>Phiên bản:</strong> 2.1.0</p>
        <p><strong>Nhà phát triển:</strong> PlayGooo Team</p>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function createAppModal() {
    const modal = document.createElement('div');
    modal.id = 'appModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title"></h2>
                <span class="modal-close" onclick="closeAppModal()">&times;</span>
            </div>
            <div class="modal-body">
                <div class="modal-content-text"></div>
                <div class="modal-actions">
                    <button class="btn-download" onclick="downloadApp()">Tải xuống</button>
                    <button class="btn-cancel" onclick="closeAppModal()">Đóng</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    const modalStyles = `
        .modal {
            display: none;
            position: fixed;
            z-index: 10000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            backdrop-filter: blur(5px);
            justify-content: center;
            align-items: center;
        }
        
        .modal-content {
            background: white;
            border-radius: 15px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            animation: modalSlideIn 0.3s ease;
        }
        
        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: translateY(-50px) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            border-bottom: 1px solid #eee;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 15px 15px 0 0;
        }
        
        .modal-title {
            margin: 0;
            font-size: 1.5rem;
        }
        
        .modal-close {
            font-size: 2rem;
            cursor: pointer;
            transition: color 0.3s ease;
        }
        
        .modal-close:hover {
            color: #ff6b6b;
        }
        
        .modal-body {
            padding: 1.5rem;
        }
        
        .modal-content-text p {
            margin-bottom: 1rem;
            line-height: 1.6;
        }
        
        .modal-actions {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
            justify-content: center;
        }
        
        .btn-download, .btn-cancel {
            padding: 0.8rem 2rem;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        .btn-download {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .btn-download:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
        
        .btn-cancel {
            background: #6c757d;
            color: white;
        }
        
        .btn-cancel:hover {
            background: #5a6268;
            transform: translateY(-2px);
        }
    `;
    
    // Add styles to head if not already added
    if (!document.getElementById('modalStyles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'modalStyles';
        styleSheet.textContent = modalStyles;
        document.head.appendChild(styleSheet);
    }
    
    return modal;
}

function closeAppModal() {
    const modal = document.getElementById('appModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function downloadApp() {
    alert('Tính năng tải xuống sẽ được triển khai sớm!');
    closeAppModal();
}

// Search functionality - DISABLED
// function initSearch() {
//     const searchInput = document.createElement('input');
//     searchInput.type = 'text';
//     searchInput.placeholder = 'Tìm kiếm ứng dụng...';
//     searchInput.className = 'search-input';
    
//     const searchContainer = document.createElement('div');
//     searchContainer.className = 'search-container';
//     searchContainer.appendChild(searchInput);
    
//     // Insert search after hero section
//     const hero = document.querySelector('.hero');
//     hero.parentNode.insertBefore(searchContainer, hero.nextSibling);
    
//     // Add search styles
//     const searchStyles = `
//         .search-container {
//             text-align: center;
//             margin: 2rem 0;
//         }
        
//         .search-input {
//             width: 100%;
//             max-width: 500px;
//             padding: 1rem 1.5rem;
//             border: 2px solid #e9ecef;
//             border-radius: 25px;
//             font-size: 1rem;
//             outline: none;
//             transition: all 0.3s ease;
//         }
        
//         .search-input:focus {
//             border-color: #667eea;
//             box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
//         }
//     `;
    
//     if (!document.getElementById('searchStyles')) {
//         const styleSheet = document.createElement('style');
//         styleSheet.id = 'searchStyles';
//         styleSheet.textContent = searchStyles;
//         document.head.appendChild(styleSheet);
//     }
    
//     // Search functionality
//     searchInput.addEventListener('input', (e) => {
//         const searchTerm = e.target.value.toLowerCase();
//         const appCards = document.querySelectorAll('.app-card');
        
//         appCards.forEach(card => {
//             const appName = card.querySelector('h4').textContent.toLowerCase();
//             const section = card.closest('.section');
            
//             if (appName.includes(searchTerm)) {
//                 card.style.display = 'block';
//                 section.style.display = 'block';
//             } else {
//                 card.style.display = 'none';
//             }
//         });
        
//         // Hide sections with no visible cards
//         const sections = document.querySelectorAll('.section');
//         sections.forEach(section => {
//             const visibleCards = section.querySelectorAll('.app-card[style*="block"], .app-card:not([style*="none"])');
//             if (visibleCards.length === 0 && searchTerm !== '') {
//                 section.style.display = 'none';
//             } else {
//                 section.style.display = 'block';
//             }
//         });
//     });
// }

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Scroll to top functionality
function initScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    document.body.appendChild(scrollToTopBtn);
    
    // Add scroll to top styles
    const scrollToTopStyles = `
        .scroll-to-top {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            border: none;
            border-radius: 50%;
            background: #f94570;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .scroll-to-top.show {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-to-top:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }
    `;
    
    if (!document.getElementById('scrollToTopStyles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'scrollToTopStyles';
        styleSheet.textContent = scrollToTopStyles;
        document.head.appendChild(styleSheet);
    }
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
}

// Theme toggle functionality - DISABLED
// function initThemeToggle() {
//     const themeToggle = document.createElement('button');
//     themeToggle.innerHTML = '🌙';
//     themeToggle.className = 'theme-toggle';
//     themeToggle.onclick = toggleTheme;
    
//     const header = document.querySelector('.header .container');
//     header.appendChild(themeToggle);
    
//     // Add theme toggle styles
//     const themeToggleStyles = `
//         .theme-toggle {
//             background: rgba(255,255,255,0.2);
//             border: none;
//             border-radius: 50%;
//             width: 40px;
//             height: 40px;
//             font-size: 1.2rem;
//             cursor: pointer;
//             transition: all 0.3s ease;
//             margin-left: 1rem;
//         }
        
//         .theme-toggle:hover {
//             background: rgba(255,255,255,0.3);
//             transform: scale(1.1);
//         }
        
//         [data-theme="dark"] {
//             background-color: #1a1a1a;
//             color: #e0e0e0;
//         }
        
//         [data-theme="dark"] .app-card {
//             background: #2d2d2d;
//             color: #e0e0e0;
//             border-color: #404040;
//         }
        
//         [data-theme="dark"] .about-section {
//             background: #2d2d2d;
//             color: #e0e0e0;
//         }
//     `;
    
//     if (!document.getElementById('themeToggleStyles')) {
//         const styleSheet = document.createElement('style');
//         styleSheet.id = 'themeToggleStyles';
//         styleSheet.textContent = themeToggleStyles;
//         document.head.appendChild(styleSheet);
//     }
// }

// function toggleTheme() {
//     const body = document.body;
//     const themeToggle = document.querySelector('.theme-toggle');
    
//     if (body.getAttribute('data-theme') === 'dark') {
//         body.removeAttribute('data-theme');
//         themeToggle.innerHTML = '🌙';
//         localStorage.setItem('theme', 'light');
//     } else {
//         body.setAttribute('data-theme', 'dark');
//         themeToggle.innerHTML = '☀️';
//         localStorage.setItem('theme', 'dark');
//     }
// }

// Initialize saved theme - DISABLED
// function initSavedTheme() {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//         document.body.setAttribute('data-theme', 'dark');
//         const themeToggle = document.querySelector('.theme-toggle');
//         if (themeToggle) {
//             themeToggle.innerHTML = '☀️';
//         }
//     }
// }

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('appModal');
    if (modal && e.target === modal) {
        closeAppModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAppModal();
    }
});

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    showCookieConsent();
    initSmoothScrolling();
    initAppCardInteractions();
    // initSearch(); // DISABLED
    initLazyLoading();
    initScrollToTop();
    // initThemeToggle(); // DISABLED
    // initSavedTheme(); // DISABLED
    
    console.log('PlayGooo.fun website initialized successfully!');
});

// Floating animation disabled
// function addFloatingAnimation() {
//     const appCards = document.querySelectorAll('.app-card');
    
//     appCards.forEach((card, index) => {
//         card.style.animationDelay = `${index * 0.1}s`;
//         card.classList.add('floating');
//     });
    
//     const floatingStyles = `
//         .floating {
//             animation: floating 3s ease-in-out infinite;
//         }
        
//         @keyframes floating {
//             0%, 100% {
//                 transform: translateY(0px);
//             }
//             50% {
//                 transform: translateY(-10px);
//             }
//         }
//     `;
    
//     if (!document.getElementById('floatingStyles')) {
//         const styleSheet = document.createElement('style');
//         styleSheet.id = 'floatingStyles';
//         styleSheet.textContent = floatingStyles;
//         document.head.appendChild(styleSheet);
//     }
// }

// Initialize floating animation after a delay - DISABLED
// setTimeout(addFloatingAnimation, 1000);
