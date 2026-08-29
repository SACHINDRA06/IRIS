/**
 * AharaX Wellness - Core Logic
 * Handles animations, global state, and Supabase integration
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // 2. Header Scroll Effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 3. Simple Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.card, .section h2, .hero-content');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        revealObserver.observe(el);
    });

    // 4. Booking Form Logic (Supabase Ready)
    /* 
       To connect to Supabase:
       1. Include <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script> in your HTML.
       2. Initialize with your keys:
       const supabase = supabase.createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_ANON_KEY');
    */
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(bookingForm);
            const data = Object.fromEntries(formData.entries());

            console.log('Submission Received:', data);
            
            // To be replaced with actual Supabase call:
            // const { data, error } = await supabase.from('bookings').insert([data]);
            
            showToast('Success!', 'Your booking request has been sent. We will contact you soon.');
            bookingForm.reset();
        });
    }

    // 5. Toast Notification System
    function showToast(title, message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <div style="background: white; border-left: 5px solid var(--primary); padding: 1rem 1.5rem; border-radius: 16px; box-shadow: var(--shadow-lg); position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); z-index: 2000; animation: slideUp 0.3s ease;">
                <h4 style="color: var(--primary); margin-bottom: 0.25rem;">${title}</h4>
                <p style="font-size: 0.9rem; color: var(--text-muted);">${message}</p>
            </div>
        `;
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    }

    // 6. Pre-select service from URL
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan');
    if (plan) {
        const select = document.getElementById('serviceSelect');
        if (select) {
            if (plan === 'basic' || plan === 'standard') select.value = 'weight-loss';
            if (plan === 'premium') select.value = 'pcos';
        }
    }
});

// Added UI interaction functions for the Customer Dashboard
function switchTab(tabId, el) {
  // Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(c => {
    c.style.display = 'none';
    c.classList.remove('active');
  });
  // Show selected tab
  const target = document.getElementById(tabId + 'Tab');
  if (target) {
    target.style.display = 'block';
    target.classList.add('active');
  }
  // Update active nav link styling
  document.querySelectorAll('.dash-nav-link').forEach(l => l.classList.remove('active'));
  if (el) el.classList.add('active');
}

function globalSearch(query) {
  // Simple client‑side filtering: hide any .panel-main elements that don't contain the query
  const panels = document.querySelectorAll('.panel-main');
  panels.forEach(p => {
    const text = p.innerText.toLowerCase();
    const match = text.includes(query.toLowerCase());
    p.style.display = match ? 'block' : 'none';
  });
}

function toggleNotifications() {
  const center = document.getElementById('notificationCenter');
  if (!center) return;
  const isOpen = center.style.right === '0px' || center.style.right === '0';
  center.style.right = isOpen ? '-400px' : '0px';
}

function addWater() {
  const countEl = document.getElementById('waterCount');
  const progressEl = document.getElementById('waterProgress');
  if (!countEl || !progressEl) return;
  let current = parseFloat(countEl.innerText);
  current = Math.min(3.0, (current + 0.1).toFixed(1));
  countEl.innerText = current;
  progressEl.style.width = (current / 3 * 100) + '%';
}

function joinVideo() {
  alert('Joining video call...');
}

function logMeal(type) {
  alert('Logged ' + type + ' meal');
}

function selectDate(el, date) {
  document.querySelectorAll('.date-slot').forEach(d => d.classList.remove('selected'));
  el.classList.add('selected');
  const span = document.getElementById('selectedDate');
  if (span) span.innerText = date;
}

function confirmBooking() {
  const date = document.getElementById('selectedDate')?.innerText || 'unknown';
  alert('Booking confirmed for ' + date);
}

// Add Keyframes to Style
const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideUp {
        from { transform: translate(-50%, 100px); opacity: 0; }
        to { transform: translate(-50%, 0); opacity: 1; }
    }
`;
document.head.appendChild(style);
