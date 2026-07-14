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

/* ========== WATCH-STYLE DRAGGABLE GRID ========== */
(function() {
    // ----- EDIT THESE IMAGE PATHS -----
    const gridImages = [
        'about us photos/photo_10_2026-07-04_13-57-58.jpg',
        'about us photos/photo_11_2026-07-04_13-57-58.jpg',
        'about us photos/photo_12_2026-07-04_13-57-58.jpg',
        'about us photos/photo_14_2026-07-04_13-57-58.jpg',
        'about us photos/photo_15_2026-07-04_13-57-58.jpg',
        'about us photos/photo_16_2026-07-04_13-57-58.jpg',
        'about us photos/photo_17_2026-07-04_13-57-58.jpg',
        'about us photos/photo_18_2026-07-04_13-57-58.jpg',
        'about us photos/photo_19_2026-07-04_13-57-58.jpg',
        'about us photos/photo_1_2026-07-04_13-57-58.jpg',
        'about us photos/photo_20_2026-07-04_13-57-58.jpg',
        'about us photos/photo_21_2026-07-04_13-57-58.jpg',
        'about us photos/photo_22_2026-07-04_13-57-58.jpg',
        'about us photos/photo_23_2026-07-04_13-57-58.jpg',
        'about us photos/photo_24_2026-07-04_13-57-58.jpg',
        'about us photos/photo_25_2026-07-04_13-57-58.jpg',
        'about us photos/photo_26_2026-07-04_13-57-58.jpg',
        'about us photos/photo_27_2026-07-04_13-57-58.jpg',
        'about us photos/photo_28_2026-07-04_13-57-58.jpg',
        'about us photos/photo_29_2026-07-04_13-57-58.jpg',
        'about us photos/photo_2_2026-07-04_13-57-58.jpg',
        'about us photos/photo_30_2026-07-04_13-57-58.jpg',
        'about us photos/photo_31_2026-07-04_13-57-58.jpg',
        'about us photos/photo_32_2026-07-04_13-57-58.jpg',
        'about us photos/photo_33_2026-07-04_13-57-58.jpg',
        'about us photos/photo_34_2026-07-04_13-57-58.jpg',
        'about us photos/photo_35_2026-07-04_13-57-58.jpg',
        'about us photos/photo_36_2026-07-04_13-57-58.jpg',
        'about us photos/photo_37_2026-07-04_13-57-58.jpg',
        'about us photos/photo_38_2026-07-04_13-57-58.jpg',
        'about us photos/photo_39_2026-07-04_13-57-58.jpg',
        'about us photos/photo_3_2026-07-04_13-57-58.jpg',
        'about us photos/photo_40_2026-07-04_13-57-58.jpg',
        'about us photos/photo_41_2026-07-04_13-57-58.jpg',
        'about us photos/photo_42_2026-07-04_13-57-58.jpg',
        'about us photos/photo_43_2026-07-04_13-57-58.jpg',
        'about us photos/photo_44_2026-07-04_13-57-58.jpg',
        'about us photos/photo_45_2026-07-04_13-57-58.jpg',
        'about us photos/photo_46_2026-07-04_13-57-58.jpg',
        'about us photos/photo_47_2026-07-04_13-57-58.jpg',
        'about us photos/photo_48_2026-07-04_13-57-58.jpg',
        'about us photos/photo_49_2026-07-04_13-57-58.jpg',
        'about us photos/photo_4_2026-07-04_13-57-58.jpg',
        'about us photos/photo_50_2026-07-04_13-57-58.jpg',
        'about us photos/photo_51_2026-07-04_13-57-58.jpg',
        'about us photos/photo_52_2026-07-04_13-57-58.jpg',
        'about us photos/photo_5_2026-07-04_13-57-58.jpg',
        'about us photos/photo_6_2026-07-04_13-57-58.jpg',
        'about us photos/photo_7_2026-07-04_13-57-58.jpg',
        'about us photos/photo_8_2026-07-04_13-57-58.jpg',
        'about us photos/photo_9_2026-07-04_13-57-58.jpg',
        'about us photos/image wcrc.png',
        'about us photos/photo_2026-07-07_22-52-23.jpg',
        'about us photos/WhatsApp Image 2026-07-14 at 14.07.15 (1).jpeg',
        'about us photos/WhatsApp Image 2026-07-14 at 14.07.15.jpeg',
        'about us photos/WhatsApp Image 2026-07-14 at 16.51.21.jpeg',
        // Add more as needed...
    ];

    const container = document.getElementById('watchGridContainer');
    const stage = document.getElementById('watchGridStage');
    if (!container || !stage || gridImages.length === 0) return;

    // --- Build the honeycomb grid ---
    function buildGrid() {
        container.innerHTML = '';
        const n = gridImages.length;
        const cols = Math.ceil(Math.sqrt(n * 1.5));   // roughly a honeycomb shape
        const rows = Math.ceil(n / cols);
        const spacingX = 120;   // horizontal spacing between centers
        const spacingY = 108;   // vertical spacing (tighter due to hexagonal packing)

        // Offset every other row for hex effect
        gridImages.forEach((src, i) => {
            const row = Math.floor(i / cols);
            const col = i % cols;
            const offsetX = (col - (cols-1)/2) * spacingX;
            const offsetY = (row - (rows-1)/2) * spacingY;
            const hexShift = row % 2 === 0 ? spacingX / 2 : 0;

            const item = document.createElement('div');
            item.className = 'watch-grid-item';
            item.style.left = (offsetX + hexShift) + 'px';
            item.style.top = offsetY + 'px';

            const img = document.createElement('img');
            img.src = src;
            img.alt = 'صورة ' + (i+1);
            img.loading = 'lazy';
            img.draggable = false;

            img.onerror = function() {
                this.style.display = 'none';
            };

            item.appendChild(img);
            container.appendChild(item);
        });

        // Reset grid position to center
        container.style.transform = 'translate(0px, 0px)';
        currentTranslate = { x: 0, y: 0 };
    }

    // --- Drag & inertia logic ---
    let isDragging = false;
    let startX = 0, startY = 0;
    let currentTranslate = { x: 0, y: 0 };
    let dragStartTranslate = { x: 0, y: 0 };
    let velocity = { x: 0, y: 0 };
    let lastMoveTime = Date.now();
    let lastMoveX = 0, lastMoveY = 0;
    let inertiaFrame;

    function applyTransform() {
        container.style.transform = `translate(${currentTranslate.x}px, ${currentTranslate.y}px)`;
    }

    function startDrag(e) {
        isDragging = true;
        stage.style.cursor = 'grabbing';
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        startX = clientX;
        startY = clientY;
        dragStartTranslate = { ...currentTranslate };
        velocity = { x: 0, y: 0 };
        cancelAnimationFrame(inertiaFrame);
        // Disable snap transition while dragging
        container.style.transition = 'none';
        e.preventDefault();
    }

    function onDrag(e) {
        if (!isDragging) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const deltaX = clientX - startX;
        const deltaY = clientY - startY;

        currentTranslate.x = dragStartTranslate.x + deltaX;
        currentTranslate.y = dragStartTranslate.y + deltaY;
        applyTransform();

        // Capture velocity
        const now = Date.now();
        const dt = now - lastMoveTime;
        if (dt > 0) {
            velocity.x = (clientX - lastMoveX) / dt * 15;  // scale for inertia
            velocity.y = (clientY - lastMoveY) / dt * 15;
        }
        lastMoveTime = now;
        lastMoveX = clientX;
        lastMoveY = clientY;
    }

    function endDrag() {
        if (!isDragging) return;
        isDragging = false;
        stage.style.cursor = 'grab';
        container.style.transition = 'transform 0.15s ease-out';

        // Apply inertia
        if (Math.abs(velocity.x) > 0.5 || Math.abs(velocity.y) > 0.5) {
            let vx = velocity.x;
            let vy = velocity.y;
            function step() {
                if (Math.abs(vx) < 0.05 && Math.abs(vy) < 0.05) {
                    container.style.transition = 'transform 0.15s ease-out';
                    return;
                }
                currentTranslate.x += vx;
                currentTranslate.y += vy;
                vx *= 0.95;
                vy *= 0.95;
                applyTransform();
                inertiaFrame = requestAnimationFrame(step);
            }
            container.style.transition = 'none';
            inertiaFrame = requestAnimationFrame(step);
        }
    }

    stage.addEventListener('mousedown', startDrag);
    stage.addEventListener('touchstart', startDrag, { passive: false });
    window.addEventListener('mousemove', onDrag);
    window.addEventListener('touchmove', onDrag, { passive: false });
    window.addEventListener('mouseup', endDrag);
    window.addEventListener('touchend', endDrag);

    // Prevent default drag on images inside the grid
    container.addEventListener('dragstart', e => e.preventDefault());

    // Build on load
    buildGrid();
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
// ═══════════════ PERSPECTIVE GRID ═══════════════
(function() {
  const GRID_SIZE = 30;                 // Change density (e.g., 30, 50)
  const container = document.getElementById('perspectiveGrid');
  if (!container) return;

  // Set CSS grid dimensions
  container.style.gridTemplateColumns = `repeat(${GRID_SIZE}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${GRID_SIZE}, 1fr)`;

  // Create tiles
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const tile = document.createElement('div');
    tile.className = 'grid-tile';
    fragment.appendChild(tile);
  }
  container.appendChild(fragment);
})();
