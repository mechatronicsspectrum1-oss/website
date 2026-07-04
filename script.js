// ─── CURSOR GLOW ───
const glow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// ─── NAV SCROLL ───
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ─── HAMBURGER ───
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
}

// Close the mobile nav tray automatically once a link is clicked
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#navLinks a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
      document.getElementById('hamburger').classList.remove('open');
    });
  });
});

// ─── REVEAL ON SCROLL ───
function triggerReveal() {
  const reveals = document.querySelectorAll('.reveal:not(.visible)');
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) el.classList.add('visible');
  });
}
window.addEventListener('scroll', triggerReveal);
triggerReveal();

// ─── VIDEO SCROLL PARALLAX ───
const heroVideo = document.getElementById('hero-video');
window.addEventListener('scroll', () => {
  if (!heroVideo) return;
  const scrollY = window.scrollY;
  const vh = window.innerHeight;
  const progress = Math.min(scrollY / vh, 1);
  heroVideo.style.transform = `scale(${1 + progress * 0.08}) translateY(${progress * 30}px)`;
  heroVideo.style.opacity = 0.55 - progress * 0.3;
});
/* ========== 3D Cylinder Carousel Init ========== */
(function() {
    // ----- CONFIG: edit these image paths -----
    const carouselImages = [
        'about us photos/1.jpg',
        'about us photos/2.jpg',
        'about us photos/3.jpg',
        'about us photos/4.jpg',
        'about us photos/5.jpg',
        'about us photos/6.jpg',
        'about us photos/7.jpg',
        'about us photos/8.jpg'
        // Add more as needed...
    ];

    const ring = document.getElementById('carousel3DRing');
    const stage = document.getElementById('carousel3DStage');
    if (!ring || !stage || carouselImages.length === 0) return;

    // ----- Helper: get current card width from CSS variable -----
    function getCardWidth() {
        const style = getComputedStyle(document.documentElement);
        const raw = style.getPropertyValue('--card-w').trim();
        if (raw) return parseFloat(raw);
        const vw = window.innerWidth;
        if (vw <= 480) return 130;
        if (vw <= 768) return 160;
        return 220;
    }

    // ----- Build the carousel -----
    function buildCarousel() {
        ring.innerHTML = '';
        const n = carouselImages.length;
        const cardWidth = getCardWidth();
        const angleStepDeg = 360 / n;
        const angleStepRad = (angleStepDeg * Math.PI) / 180;

        // Cylinder radius so cards touch edge-to-edge
        const radius = (cardWidth / 2) / Math.tan(angleStepRad / 2);

        ring.style.setProperty('--card-w', cardWidth + 'px');
        ring.style.setProperty('--radius', radius + 'px');
        ring.style.setProperty('--anim-speed', Math.max(24, n * 4) + 's');

        carouselImages.forEach((src, i) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'صورة للفريق ' + (i + 1);
            img.className = 'carousel-3d-card';
            img.loading = 'lazy';
            img.draggable = false;

            const rotateY = i * angleStepDeg;
            img.style.transform = `rotateY(${rotateY}deg) translateZ(${radius}px)`;

            img.onerror = function() {
                this.style.display = 'none';
            };

            ring.appendChild(img);
        });

        // Restart animation
        ring.style.animation = 'none';
        ring.offsetHeight;
        ring.style.animation = '';
    }

    buildCarousel();

    // ----- Rebuild on resize (debounced) -----
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(buildCarousel, 250);
    });

    // ----- Drag to rotate -----
    let isDragging = false;
    let startX = 0;
    let dragRotation = 0;

    stage.addEventListener('mousedown', onDragStart);
    stage.addEventListener('touchstart', onDragStart, { passive: false });
    window.addEventListener('mousemove', onDragMove);
    window.addEventListener('touchmove', onDragMove, { passive: false });
    window.addEventListener('mouseup', onDragEnd);
    window.addEventListener('touchend', onDragEnd);

    function onDragStart(e) {
        isDragging = true;
        startX = e.touches ? e.touches[0].clientX : e.clientX;
        ring.style.animationPlayState = 'paused';

        const computed = getComputedStyle(ring).transform;
        if (computed && computed !== 'none') {
            const matrix = new DOMMatrixReadOnly(computed);
            const decompose = matrix.decompose ? matrix.decompose() : null;
            if (decompose && decompose.rotate) {
                const q = decompose.rotate;
                const siny = 2 * (q.w * q.y + q.z * q.x);
                const cosy = 1 - 2 * (q.y * q.y + q.z * q.z);
                dragRotation = Math.atan2(siny, cosy) * (180 / Math.PI);
            }
        }
        e.preventDefault();
    }

    function onDragMove(e) {
        if (!isDragging) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const deltaX = clientX - startX;
        const sensitivity = 0.4;
        const newRotation = dragRotation + deltaX * sensitivity;
        ring.style.transform = `rotateY(${newRotation}deg)`;
    }

    function onDragEnd() {
        if (!isDragging) return;
        isDragging = false;
        setTimeout(() => {
            if (!isDragging) {
                ring.style.animationPlayState = '';
                ring.style.transition = 'transform 0.6s ease-out';
                ring.style.transform = '';
                setTimeout(() => { ring.style.transition = ''; }, 650);
            }
        }, 300);
    }
})();
// ═══════════════ GPA CALCULATOR ═══════════════
const GPA_COURSES = 9;
const gradeLabels = ["A","A-","B+","B","B-","C+","C","C-","D+","D","D-","F"];
const newW = [4,3.75,3.5,3.25,3,2.75,2.5,2,1.75,1.25,1,0.5];
const oldW = [4,3.75,3.5,3,2.75,2.5,2,1.75,1.5,1,0.75,0.5];

function gpaOpts(weights) {
  return gradeLabels.map((l,i) => `<option value="${i}">${l} (${weights[i]})</option>`).join('');
}

function gpaInit() {
  let html = '';
  for (let i = 0; i < GPA_COURSES; i++) {
    const active = i < 4;
    html += `
    <div class="gpa-course${active?'':' off'}" id="gpac-${i}">
      <div class="gpa-course-header">
        <label class="gpa-toggle">
          <input type="checkbox" id="gpa-en-${i}" ${active?'checked':''} onchange="gpaToggle(${i});gpaCalc()">
          <span class="gpa-toggle-slider"></span>
        </label>
        <input class="gpa-course-name" type="text" placeholder="المادة ${i+1}" ${active?'':'disabled'}>
      </div>
      <div class="gpa-course-body">
        <div class="gpa-field">
          <label>الساعات</label>
          <select id="gpa-h-${i}" onchange="gpaCalc()" ${active?'':'disabled'}>
            <option value="3">3 ساعات</option>
            <option value="2">2 ساعة</option>
            <option value="1">1 ساعة</option>
            <option value="0">0 ساعة</option>
          </select>
        </div>
        <div class="gpa-field">
          <label>العلامة المتوقعة</label>
          <select id="gpa-g-${i}" onchange="gpaCalc()" ${active?'':'disabled'}>${gpaOpts(newW)}</select>
        </div>
      </div>
      <div class="gpa-rep-row">
        <input type="checkbox" id="gpa-rep-${i}" onchange="gpaToggleRep(${i});gpaCalc()">
        <label for="gpa-rep-${i}">مادة معادة؟</label>
      </div>
      <div class="gpa-old-section" id="gpa-old-sect-${i}" style="display:none;">
        <div class="gpa-radio-row">
          <label><input type="radio" name="gpa-ws-${i}" value="new" checked onchange="gpaUpdateOld(${i});gpaCalc()"> وزن جديد</label>
          <label><input type="radio" name="gpa-ws-${i}" value="old" onchange="gpaUpdateOld(${i});gpaCalc()"> وزن قديم</label>
        </div>
        <div class="gpa-field">
          <select id="gpa-old-${i}" onchange="gpaCalc()" style="width:100%;">
            <option disabled selected value="-1">اختر العلامة السابقة</option>
            ${gpaOpts(newW)}
          </select>
        </div>
      </div>
    </div>`;
  }
  document.getElementById('gpa-courses').innerHTML = html;
  gpaCalc();
}

function gpaToggle(i) {
  const on = document.getElementById(`gpa-en-${i}`).checked;
  const card = document.getElementById(`gpac-${i}`);
  card.classList.toggle('off', !on);
  card.querySelectorAll('select, input[type=text]').forEach(el => el.disabled = !on);
  document.getElementById(`gpa-en-${i}`).disabled = false;
  if (on) gpaToggleRep(i); else document.getElementById(`gpa-old-sect-${i}`).style.display = 'none';
}

function gpaToggleRep(i) {
  const isRep = document.getElementById(`gpa-rep-${i}`).checked;
  const isOn = document.getElementById(`gpa-en-${i}`).checked;
  document.getElementById(`gpa-old-sect-${i}`).style.display = (isRep && isOn) ? 'block' : 'none';
}

function gpaUpdateOld(i) {
  const sel = document.getElementById(`gpa-old-${i}`);
  const cur = sel.value;
  const isOld = [...document.getElementsByName(`gpa-ws-${i}`)].some(r => r.checked && r.value === 'old');
  sel.innerHTML = `<option disabled value="-1">اختر العلامة السابقة</option>${gpaOpts(isOld ? oldW : newW)}`;
  sel.value = (cur !== '-1' && cur !== '') ? cur : '-1';
}

function gpaCalc() {
  const curH = parseFloat(document.getElementById('gpa-curH').value) || 0;
  const curG = parseFloat(document.getElementById('gpa-curG').value) || 0;
  let totalPts = curH * curG, totalH = curH, warnShown = false;

  for (let i = 0; i < GPA_COURSES; i++) {
    if (!document.getElementById(`gpa-en-${i}`).checked) continue;
    const h = parseFloat(document.getElementById(`gpa-h-${i}`).value);
    const g = newW[parseInt(document.getElementById(`gpa-g-${i}`).value)];
    let isRep = document.getElementById(`gpa-rep-${i}`).checked;
    if (isRep && curH === 0) { warnShown = true; isRep = false; }
    if (isRep) {
      const oldIdx = parseInt(document.getElementById(`gpa-old-${i}`).value);
      if (oldIdx >= 0) {
        const isOld = [...document.getElementsByName(`gpa-ws-${i}`)].some(r => r.checked && r.value === 'old');
        totalPts = totalPts - (h * (isOld ? oldW[oldIdx] : newW[oldIdx])) + (h * g);
      } else { totalPts += h * g; totalH += h; }
    } else { totalPts += h * g; totalH += h; }
  }

  document.getElementById('gpa-warn').style.display = warnShown ? 'block' : 'none';
  let res = totalH > 0 ? Math.min(Math.max(totalPts / totalH, 0), 4) : 0;
  document.getElementById('gpa-resGPA').textContent = res.toFixed(2);
  document.getElementById('gpa-resH').textContent = totalH;
  let rate = '---';
  if (totalH > 0) {
    if (res >= 3.65) rate = 'امتياز';
    else if (res >= 3.00) rate = 'جيد جداً';
    else if (res >= 2.50) rate = 'جيد';
    else if (res >= 2.00) rate = 'مقبول';
    else rate = 'ضعيف';
  }
  document.getElementById('gpa-resRate').textContent = rate;
}

function gpaReset() {
  document.getElementById('gpa-curH').value = '';
  document.getElementById('gpa-curG').value = '';
  gpaInit();
}

function openGPA() {
  const overlay = document.getElementById('gpaOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (!document.getElementById('gpa-courses').innerHTML) gpaInit();
}

function closeGPA() {
  document.getElementById('gpaOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('gpaOverlay')) closeGPA();
}

// Close on Escape
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeGPA(); });
