// ═══════════════ STUDY PLAN HOTSPOTS ═══════════════----------------------------------------------------------------------------------------------------------------------------------------------------
// ═══════════════════════════════════════════════════════════--------------------------------------------------------------------------------------------------------------------------------------------
// كل عنصر هو زر فوق صورة الخطة. النِسَب (top/left/w/h) محسوبة آليًا
// من موقع الصندوق في الصورة (٪ من أبعاد الصورة).
// type:'link'    (الأزرار الزرقاء)  -> اكتب الرابط داخل url: ''
// type:'subject' (الأزرار السوداء)  -> عدّل بيانات المادة في subjectsData بالأسفل
const planHotspots = [
  { id:'hs1', type:'link', top:11.74, left:89.53, w:6.84, h:4.14, url:'https://lagnetalsanafer.com/materials/general-chemistry/' },
  { id:'hs2', type:'link', top:11.93, left:78.45, w:7.96, h:3.96, url:'https://lagnetalsanafer.com/materials/engineering-economy/' },
  { id:'hs3', type:'link', top:11.78, left:67.75, w:7.01, h:4.13, url:'https://lagnetalsanafer.com/materials/physics101/' },
  { id:'hs4', type:'link', top:11.94, left:45.95, w:7.56, h:3.96, url:'https://lagnetalsanafer.com/materials/probability/' },
  { id:'hs5', type:'link', top:11.72, left:35.27, w:7.30, h:3.96, url:'https://lagnetalsanafer.com/materials/calculus101/' },
  { id:'hs6', type:'link', top:11.91, left:24.80, w:7.70, h:3.94, url:'https://lagnetalsanafer.com/materials/calculus102/' },
  { id:'hs7', type:'link', top:12.15, left:13.73, w:7.56, h:3.94, url:'https://lagnetalsanafer.com/materials/differential-equations/' },
  { id:'hs8', type:'link', top:11.91, left:2.70, w:8.09, h:3.94, url:'https://lagnetalsanafer.com/materials/engineering-workshop/' },
  { id:'hs9', type:'link', top:21.36, left:89.64, w:6.50, h:3.94, url:'https://lagnetalsanafer.com/materials/chemistry-lab/' },
  { id:'hs10', type:'link', top:21.11, left:78.33, w:7.42, h:3.96, url:'https://lagnetalsanafer.com/materials/military-sciences/' },
  { id:'hs11', type:'link', top:21.60, left:68.30, w:6.76, h:3.96, url:'https://lagnetalsanafer.com/materials/physics102/' },
  { id:'hs12', type:'link', top:21.19, left:57.26, w:6.90, h:3.96, url:'https://lagnetalsanafer.com/materials/physics-lab1/' },
  { id:'hs13', type:'link', top:21.56, left:35.40, w:7.03, h:3.96, url:'https://lagnetalsanafer.com/materials/statics/' },
  { id:'hs14', type:'link', top:21.56, left:24.65, w:7.69, h:3.96, url:'https://lagnetalsanafer.com/materials/linear-algebra/' },
  { id:'hs15', type:'link', top:21.56, left:13.73, w:7.56, h:3.96, url:'https://lagnetalsanafer.com/materials/numerical-methods/' },
  { id:'hs16', type:'link', top:21.32, left:2.94, w:8.09, h:3.96, url:'https://lagnetalsanafer.com/materials/computer-science/' },
  { id:'hs17', type:'subject', top:31.20, left:90.05, w:6.89, h:3.94, subject:'subj1' },
  { id:'hs18', type:'subject', top:30.77, left:78.45, w:7.60, h:3.94, subject:'subj2' },
  { id:'hs19', type:'subject', top:31.13, left:67.54, w:7.69, h:3.94, subject:'subj3' },
  { id:'hs20', type:'subject', top:31.13, left:57.17, w:6.89, h:3.94, subject:'subj4' },
  { id:'hs21', type:'subject', top:30.96, left:46.42, w:6.89, h:3.94, subject:'subj5' },
  { id:'hs22', type:'subject', top:31.37, left:35.35, w:7.55, h:3.94, subject:'subj6' },
  { id:'hs23', type:'subject', top:30.77, left:24.43, w:7.44, h:3.94, subject:'subj7' },
  { id:'hs24', type:'link', top:31.22, left:13.73, w:7.56, h:3.96, url:'https://lagnetalsanafer.com/materials/autocad/' },
  { id:'hs25', type:'link', top:31.22, left:2.81, w:7.83, h:3.94, url:'https://lagnetalsanafer.com/materials/programming/' },
  { id:'hs26', type:'subject', top:40.65, left:90.15, w:6.22, h:3.94, subject:'subj8' },
  { id:'hs27', type:'subject', top:40.47, left:78.67, w:7.29, h:3.94, subject:'subj9' },
  { id:'hs28', type:'subject', top:40.65, left:67.60, w:7.56, h:3.94, subject:'subj10' },
  { id:'hs29', type:'subject', top:40.65, left:56.73, w:7.51, h:3.94, subject:'subj11' },
  { id:'hs30', type:'subject', top:40.47, left:46.09, w:7.58, h:3.94, subject:'subj12' },
  { id:'hs31', type:'subject', top:40.28, left:35.01, w:8.09, h:3.96, subject:'subj13' },
  { id:'hs32', type:'subject', top:40.13, left:24.43, w:7.55, h:4.56, subject:'subj14' },
  { id:'hs33', type:'subject', top:40.62, left:3.00, w:7.69, h:3.94, subject:'subj15' },
  { id:'hs34', type:'subject', top:50.31, left:89.31, w:7.56, h:3.94, subject:'subj16' },
  { id:'hs35', type:'subject', top:50.31, left:79.07, w:6.62, h:3.94, subject:'subj17' },
  { id:'hs36', type:'subject', top:50.31, left:67.64, w:7.83, h:3.94, subject:'subj18' },
  { id:'hs37', type:'subject', top:50.07, left:56.85, w:7.71, h:3.94, subject:'subj19' },
  { id:'hs38', type:'subject', top:50.12, left:46.33, w:7.42, h:3.94, subject:'subj20' },
  { id:'hs39', type:'subject', top:50.12, left:35.05, w:7.83, h:3.94, subject:'subj21' },
  { id:'hs40', type:'subject', top:49.88, left:24.50, w:8.00, h:3.94, subject:'subj22' },
  { id:'hs41', type:'subject', top:50.10, left:13.88, w:7.20, h:3.94, subject:'subj23' },
  { id:'hs42', type:'subject', top:50.27, left:2.88, w:7.65, h:3.94, subject:'subj24' },
  { id:'hs43', type:'subject', top:59.67, left:89.12, w:7.61, h:3.94, subject:'subj25' },
  { id:'hs44', type:'subject', top:59.50, left:78.81, w:7.25, h:3.94, subject:'subj26' },
  { id:'hs45', type:'subject', top:59.23, left:67.64, w:7.50, h:4.73, subject:'subj27' },
  { id:'hs46', type:'subject', top:59.72, left:56.73, w:8.04, h:3.94, subject:'subj28' },
  { id:'hs47', type:'subject', top:59.80, left:46.05, w:7.69, h:4.05, subject:'subj29' },
  { id:'hs48', type:'subject', top:59.27, left:35.58, w:7.42, h:4.69, subject:'subj30' },
  { id:'hs49', type:'subject', top:59.18, left:24.57, w:7.16, h:4.84, subject:'subj31' },
  { id:'hs50', type:'subject', top:59.68, left:13.91, w:7.36, h:3.94, subject:'subj32' },
  { id:'hs51', type:'subject', top:59.68, left:3.28, w:7.56, h:3.94, subject:'subj33' },
  { id:'hs52', type:'subject', top:68.91, left:89.26, w:7.29, h:3.94, subject:'subj34' },
  { id:'hs53', type:'subject', top:68.72, left:78.79, w:6.76, h:4.84, subject:'subj35' },
  { id:'hs54', type:'subject', top:68.97, left:67.91, w:7.42, h:4.31, subject:'subj36' },
  { id:'hs55', type:'subject', top:69.57, left:57.01, w:7.15, h:3.94, subject:'subj37' },
  { id:'hs56', type:'subject', top:68.72, left:46.23, w:7.69, h:4.84, subject:'subj38' },
  { id:'hs57', type:'subject', top:69.17, left:35.56, w:7.34, h:3.94, subject:'subj39' },
  { id:'hs58', type:'subject', top:69.42, left:24.62, w:7.66, h:3.94, subject:'subj40' },
  { id:'hs59', type:'subject', top:68.80, left:14.35, w:6.89, h:4.69, subject:'subj41' },
  { id:'hs60', type:'link', top:78.68, left:24.65, w:7.17, h:3.96, url:'https://lagnetalsanafer.com/materials/english101/' },
  { id:'hs61', type:'link', top:78.68, left:13.90, w:7.83, h:3.96, url:'https://lagnetalsanafer.com/materials/english102/' },
  { id:'hs62', type:'link', top:78.87, left:3.26, w:7.16, h:3.96, url:'https://lagnetalsanafer.com/materials/technical-writing/' },
  { id:'hs63', type:'link', top:88.28, left:24.81, w:7.04, h:3.96, url:'https://lagnetalsanafer.com/materials/arabic/' },
  { id:'hs64', type:'link', top:88.52, left:13.90, w:7.45, h:3.96, url:'https://lagnetalsanafer.com/materials/national-education/' },
  { id:'hs65', type:'link', top:88.77, left:3.23, w:7.56, h:3.96, url:'https://lagnetalsanafer.com/materials/invention/' },
];

// بيانات كل مادة (مفتاح كل مادة subj1, subj2 ... يطابق subject: في planHotspots أعلاه)
// ─────────────────────────────────────────────────────────────────────────────
// كيفية الإضافة:
//
// title  : اسم المادة
// icon   : إيموجي يظهر في رأس النافذة (اختياري، الافتراضي 📖)
//
// books  : كل كتاب هو { label:'اسم الكتاب', url:'رابط الكتاب', cover:'مسار/رابط صورة الغلاف (اختياري)' }
// summaries / videos / mid / final :
//          كل عنصر هو { label:'اسم العنصر', url:'رابط PDF أو الفيديو' }
// ─────────────────────────────────────────────────────────────────────────────
const subjectsData = {
  subj1: {
    title: 'Circuit Lab', icon: '⚡',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj2: {
    title: 'Circuit 2', icon: '⚡',
    books: [{ label: 'Fundamentals of electrical cicrcuits',  url: 'academic papers/circuits 1 and 2/fundementals of circuits 7th edition.pdf', cover: 'books mockups/Fundamentals of electrical cicrcuits.png' },
    { label: 'Fundamentals of electrical cicrcuits solutions', url: 'academic papers/circuits 1 and 2/solution of fundementals of circuits 7th edition.pdf', cover: 'books mockups/Fundamentals of electrical cicrcuits solutions.png' },
    { label: 'Engineering circuit analysis', url: 'academic papers/circuits 1 and 2/Engineering circuit analysis 9th edition.pdf', cover: 'books mockups/engineering circuit analysis.png' },
    { label: 'Engineering circuit analysis solutions', url: 'academic papers/circuits 1 and 2/solutions of engineering circuit analysis 9th edition.pdf', cover: 'books mockups/engineering circuit analysis solutions.png' },
    { label: 'Introductory circuit analysis', url: 'academic papers/circuits 1 and 2/Introductory circuit analysis 13th edition.pdf', cover: 'books mockups/introductory circuit analysis.png' },      
    { label: 'electric circuits', url: 'academic papers/circuits 1 and 2/electric circuits 11th edition.pdf', cover: 'books mockups/electric circuits.png' },
    { label: 'تحليل الدوائر الكهربائية والالكترونية', url: 'academic papers/circuits 1 and 2/تحليل الدوائر الكهربائية والالكترونية.pdf', cover: 'books mockups/تحليل الدوائر الكهربائية.png' },
    { label: 'تحليل الدوائر الكهربائية والالكترونية حلول', url: 'academic papers/circuits 1 and 2/حلول كتاب تحليل الدوائر الكهربائية والالكترونية.pdf', cover: 'books mockups/حلول تحليل الدوائر الكهربائية.png' }],
    summaries: [{ label: 'سلايدات م.ياسين', url: 'academic papers/circuits 1 and 2/sumaries/سلايدات مهندس ياسين سيركت 2.pdf' },{ label: 'دوسية احمد خواجا', url: 'academic papers/circuits 1 and 2/sumaries/احمد خواجا سيركت 2.pdf' }], videos: [{ label: 'احمد خواجا', url: 'https://www.youtube.com/playlist?list=PLfHIBOSWCljUsYwx7Q9HxH-ZK9B8uiv94' },{ label: 'مهندس كريم', url: 'https://www.youtube.com/playlist?list=PLFM6wDAJoh-88gjdMrSJ28aPkw2-9uR6f' }], mid: [{ label: '2025', url: 'academic papers/circuits 1 and 2/pastpapers/ميد 2025 سيركت 2.pdf' },{ label: '2024', url: 'academic papers/circuits 1 and 2/pastpapers/امتحان ميد 2024.pdf' },{ label: '2024', url: 'academic papers/circuits 1 and 2/pastpapers/ميد2024 سيركت2.pdf' },{ label: '2024', url: 'academic papers/circuits 1 and 2/pastpapers/ميد 2024 سيركت2.pdf' },{ label: '2023', url: 'academic papers/circuits 1 and 2/pastpapers/ميد 2023 سيركت 2.pdf' },{ label: '2023', url: 'academic papers/circuits 1 and 2/pastpapers/امتحان ميد 2023 سيركت2.pdf' },{ label: '2023', url: 'academic papers/circuits 1 and 2/pastpapers/ميد2023 سيركت 2.pdf' },{ label: '2022', url: 'academic papers/circuits 1 and 2/pastpapers/ميد 2022 سيركت 2.pdf' },{ label: '2022', url: 'academic papers/circuits 1 and 2/pastpapers/ميد 2022 سيركت 2.pdf' },{ label: 'ميد', url: 'academic papers/circuits 1 and 2/pastpapers/ميد سيركت 2.pdf' },{ label: '2019', url: 'academic papers/circuits 1 and 2/pastpapers/ميد 2019 سيركت2.pdf' },{ label: '2016', url: 'academic papers/circuits 1 and 2/pastpapers/ميد 2016 سيركت 2.pdf' },], final: [{ label: '2024', url: 'academic papers/circuits 1 and 2/pastpapers/فاينل 2024 سيركت 1.pdf' },{ label: '2023', url: 'academic papers/circuits 1 and 2/pastpapers/فاينل 2023 سيركت 2.pdf' },{ label: '2022', url: 'academic papers/circuits 1 and 2/pastpapers/فاينل 2022 سيركت 2.pdf' },{ label: 'فاينل', url: 'academic papers/circuits 1 and 2/pastpapers/فاينل سيركت 2.pdf' },]
  },
  subj3: { 
   title: 'Circuit 1', icon: '⚡',
    books: [ { label: 'Fundamentals of electrical cicrcuits',  url: 'academic papers/circuits 1 and 2/fundementals of circuits 7th edition.pdf', cover: 'books mockups/Fundamentals of electrical cicrcuits.png' },
    { label: 'Fundamentals of electrical cicrcuits solutions', url: 'academic papers/circuits 1 and 2/solution of fundementals of circuits 7th edition.pdf', cover: 'books mockups/Fundamentals of electrical cicrcuits solutions.png' },
    { label: 'Engineering circuit analysis', url: 'academic papers/circuits 1 and 2/Engineering circuit analysis 9th edition.pdf', cover: 'books mockups/engineering circuit analysis.png' },
    { label: 'Engineering circuit analysis solutions', url: 'academic papers/circuits 1 and 2/solutions of engineering circuit analysis 9th edition.pdf', cover: 'books mockups/engineering circuit analysis solutions.png' },
    { label: 'Introductory circuit analysis', url: 'academic papers/circuits 1 and 2/Introductory circuit analysis 13th edition.pdf', cover: 'books mockups/introductory circuit analysis.png' },      
    { label: 'electric circuits', url: 'academic papers/circuits 1 and 2/electric circuits 11th edition.pdf', cover: 'books mockups/electric circuits.png' },
    { label: 'تحليل الدوائر الكهربائية والالكترونية', url: 'academic papers/circuits 1 and 2/تحليل الدوائر الكهربائية والالكترونية.pdf', cover: 'books mockups/تحليل الدوائر الكهربائية.png' },
    { label: 'تحليل الدوائر الكهربائية والالكترونية حلول', url: 'academic papers/circuits 1 and 2/حلول كتاب تحليل الدوائر الكهربائية والالكترونية.pdf', cover: 'books mockups/حلول تحليل الدوائر الكهربائية.png' }],
    summaries: [{ label: 'سلايدات م.ياسين', url: 'academic papers/circuits 1 and 2/sumaries/سلايدات مهندس ياسين سيركت 1.pdf' },{ label: 'دفتر د.امجد الهندي', url: 'academic papers/circuits 1 and 2/sumaries/دفتر د.امجد الهندي.pdf' },{ label: 'سبارك جديد', url: 'academic papers/circuits 1 and 2/sumaries/ملخص سبارك جديد سيركت 1.pdf' },{ label: 'زيرو ون', url: 'academic papers/circuits 1 and 2/sumaries/زيرو ون سيركت 1.pdf' },{ label: 'سبارك', url: 'academic papers/circuits 1 and 2/sumaries/ملخص سبارك سيركت 1.pdf' }], videos: [{ label: 'سبارك', url: 'https://www.youtube.com/playlist?list=PL4Itv3LsZJuyWPRdr8mR849IKdb05XNX1' },{ label: 'سامر عيسى', url: 'https://www.youtube.com/playlist?list=PLawhbyHTpbgG2VR16b5y8v05-yW4kB-jP' },{ label: 'تسلا', url: 'https://www.youtube.com/playlist?list=PL2C_OpeEqP-LgiDcixQR4QyN2n9EQTwuR' },{ label: 'SREE', url: 'https://www.youtube.com/playlist?list=PLNBj23z192s-4nPfxC8jTxyayuuJRyTGz' }], mid: [{ label: '2026', url: 'academic papers/circuits 1 and 2/pastpapers/ميد 2026 سيركت 1.pdf' },{ label: 'ميكاب 2025', url: 'academic papers/circuits 1 and 2/pastpapers/ميد ميكاب 2025 سيركت 1.pdf' },{ label: '2025', url: 'academic papers/circuits 1 and 2/pastpapers/ميد2025  سيركت 1.pdf' },{ label: '2025', url: 'academic papers/circuits 1 and 2/pastpapers/ميد 2025 سيركت 1.pdf' },{ label: '2024', url: 'academic papers/circuits 1 and 2/pastpapers/ميد 2024 سيركت 1.pdf' },{ label: 'ميد', url: 'academic papers/circuits 1 and 2/pastpapers/امتحان ميد سيركت 1.pdf' },{ label: 'ميد', url: 'academic papers/circuits 1 and 2/pastpapers/ميد سيركت 1.pdf' },{ label: 'شاشات', url: 'academic papers/circuits 1 and 2/pastpapers/ميد شاشات 2020-2021 سيركت 1.pdf' },{ label: '2015', url: 'academic papers/circuits 1 and 2/pastpapers/ميد 2015 سيركت 1.pdf' },{ label: '2014', url: 'academic papers/circuits 1 and 2/pastpapers/ميد 2014 سيركت 1.pdf' }], final: [{ label: '2024', url: 'academic papers/circuits 1 and 2/pastpapers/فاينل 2024 سيركت 1.pdf' },{ label: '2015-2018', url: 'academic papers/circuits 1 and 2/pastpapers/فاينل 2018-2015 سيركت 1.pdf' }]
  },
  subj4: {
    title: 'Electronics device (1)', icon: '💡',
    books: [{ label: 'Electronic devices and circuit theory',  url: 'academic papers/electronics 1/Electronics Devices and Circuit Theory 11th Edition.pdf', cover: 'books mockups/electronics devices and circuit theory.png' },
           { label: 'Solutions of electronic devices and circuit theory',  url: 'academic papers/electronics 1/solution of Electronics Devices and Circuit Theory 11th Edition.pdf', cover: 'books mockups/solutions of electronics devices and circuit theory.png' }],
    summaries: [{ label: 'سلايدات د.ماجد', url: 'academic papers/electronics 1/summarize/سلايدات د.ماجد.pdf' },{ label: 'دفتر م.خولة', url: 'academic papers/electronics 1/summarize/دفتر م.خولة.pdf' },{ label: 'سلايدات محمد عايد', url: 'academic papers/electronics 1/summarize/سلايدات محمد عايد.pdf' },{ label: 'دفتر سبيكتروم', url: 'academic papers/electronics 1/summarize/مخلص الكترونيات سبيكتروم.pdf' }], videos: [{ label: 'سبارك', url: 'https://www.youtube.com/playlist?list=PL4Itv3LsZJuyt-6bhNl99zDhkwf2zyaHo' },{ label: 'محمد عايد', url: 'https://www.youtube.com/playlist?list=PLkXK5Ys6YkPJeYfEHo8Rei1dToH6hB5e1' }], mid: [{ label: '2026', url: 'academic papers/electronics 1/past papers/ميد 2026.pdf' },{ label: '2025', url: 'academic papers/electronics 1/past papers/ميد 2025.pdf' },{ label: '2024', url: 'academic papers/electronics 1/past papers/ميد 2024.pdf' },{ label: '2023', url: 'academic papers/electronics 1/past papers/2023electronics1.pdf' },{ label: '2023', url: 'academic papers/electronics 1/past papers/electronics Mid 2023.pdf' },{ label: '2023', url: 'academic papers/electronics 1/past papers/ميد 2023.pdf' },{ label: '2022', url: 'academic papers/electronics 1/past papers/ميد 2022.pdf' },{ label: '2016', url: 'academic papers/electronics 1/past papers/ميد 2016.pdf' },{ label: '2012', url: 'academic papers/electronics 1/past papers/ميد 2012.pdf' }], final: [{ label: '2025', url: 'academic papers/electronics 1/past papers/فاينل 2025.pdf' },{ label: '2024', url: 'academic papers/electronics 1/past papers/فاينل 2024.pdf' },{ label: 'شاشات', url: 'academic papers/electronics 1/past papers/شاشات فاينل.pdf' }]
  },
  subj5: {
    title: 'Electronics 1 Lab', icon: '💡',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj6: {
    title: 'Machine components', icon: '⚙️',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj7: {
    title: 'Communications and data transmission', icon: '📶',
    books: [{ label: 'Data communictaions and networking',  url: 'academic papers/communication/data comunication and networking.pdf', cover: 'books mockups/data communictaions and networking.png' },
            { label: 'Solutions of data communictaions and networking.png',  url: 'academic papers/communication/solutions of data comunication and networking.pdf', cover: 'books mockups/solutions of data communictaions and networking.png' },
           { label: 'Data and computer communtications',  url: 'academic papers/communication/Data and computer comunications.pdf', cover: 'books mockups/data and computer communtications.png' }],
    summaries: [{ label: 'Network Roaa Bassam', url: 'academic papers/communication/summarize/Network-Roaa Bassam2021-1.pdf' }], videos: [], mid: [{ label: '2024', url: 'academic papers/communication/pastpapers/mid 2024.pdf' },{ label: '2023', url: 'academic papers/communication/pastpapers/Mid T2.2023.pdf' },{ label: '2023', url: 'academic papers/communication/pastpapers/Mid T3.2023.pdf' },{ label: '2023', url: 'academic papers/communication/pastpapers/mid 2023.pdf' },{ label: '2022', url: 'academic papers/communication/pastpapers/mid 2022.pdf' },{ label: '2022', url: 'academic papers/communication/pastpapers/ميد 2022.pdf' }], final: [{ label: '2023', url: 'academic papers/communication/pastpapers/فاينل اتصالات 2023 امتحان.pdf' },{ label: '2023', url: 'academic papers/communication/pastpapers/امتحان فاينل اتصالات 2023.pdf' },{ label: '2023', url: 'academic papers/communication/pastpapers/اتصالات فاينل 2023.pdf' },{ label: '2022', url: 'academic papers/communication/pastpapers/final comm 2022.pdf' },{ label: '2022', url: 'academic papers/communication/pastpapers/final 2022.pdf' }]
  },
  subj8: {
    
    title: 'Electrical machines Lab', icon: '⚡',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj9: {
    title: 'Electrical machines 1', icon: '⚡',
    books: [{ label: 'Electric machinary fundamentals',  url: 'academic papers/electric machines 1/electric machinery fundamentals 4th edition.pdf', cover: 'books mockups/electric machinary fundamentals.png' },
           { label: 'Solutions of electric machinary fundamentals.png',  url: 'academic papers/electric machines 1/solutions of electic machinary 4th edition.pdf', cover: 'books mockups/solutions of electric machinary fundamentals.png' },
           { label: 'قوى كهربائية | الآلات الكهربائية',  url: 'academic papers/electric machines 1/الآلات الكهربائية.pdf', cover: 'books mockups/قوى كهربائية الالات الكهربائية.png' },],
    summaries: [{ label: 'سلايدات م.ياسين', url: 'academic papers/electric machines 1/summary/Dr.Yassin Machine سلايدات.pdf' },{ label: 'Rules summary by MAE', url: 'academic papers/electric machines 1/summary/Machines Rules Summary By MAE.pdf' },{ label: 'سلايدات المادة', url: 'academic papers/electric machines 1/summary/سلايدات المادة.pdf' },{ label: 'ملخص سبارك', url: 'academic papers/electric machines 1/past papers/ملخص سبارك.pdf' }], videos: [{ label: 'سبارك', url: 'https://www.youtube.com/playlist?list=PL4Itv3LsZJuzUczJi0fCg8zknagNt3dzp' },{ label: 'حل سنوات (سبارك)', url: 'https://www.youtube.com/playlist?list=PL4Itv3LsZJuy_gf83Q3cuLTDWh0UU8Nbi' },{ label: 'د.احمد ابو الرب', url: 'https://www.youtube.com/playlist?list=PLdL3o9rqPLb5to3kyjXMawC14zsAWp6Uu' },{ label: 'لطفي الشريف', url: 'https://www.youtube.com/playlist?list=PLJqRpPcJQ_g3CwChbNr6GJkd8jbP-E7av' }], mid: [{ label: '2026', url: 'academic papers/electric machines 1/past papers/ميد 2026.pdf' },{ label: '2023', url: 'academic papers/electric machines 1/past papers/ميد 2023.pdf' }], final: [{ label: 'بنك اسئلة', url: 'academic papers/electric machines 1/past papers/Machines TEST BANK By MAE.pdf' },{ label: 'شاشات', url: 'academic papers/electric machines 1/past papers/شاشات سبارك.pdf' },{ label: '2010', url: 'academic papers/electric machines 1/past papers/فاينل 2010.pdf' },]
  },
  subj10: {
    title: 'Signal and Systems', icon: '📡',
    books: [{ label: 'Signal & Systems Alan V.',  url: 'academic papers/signal and systems/Signals and Systems 2nd Edition by alan v..pdf', cover: 'books mockups/signal and systems alan v.png' },
           { label: 'Signal and Systems Schaums outlines',  url: 'academic papers/signal and systems/signals and systems 2nd edition scham outline.pdf', cover: 'books mockups/signal and systems schaum outline.png' },],
    summaries: [{ label: 'سلايدات د.جودت', url: 'academic papers/signal and systems/suammriez/سلايدات د.جودت.pdf' },{ label: 'Signal & Systems by MAE', url: 'academic papers/signal and systems/suammriez/Signals & Systems By MAE & AF.pdf' },{ label: 'دوسية م.نبال', url: 'academic papers/signal and systems/suammriez/دوسية م.نبال.pdf' },{ label: 'Fourier transform and Laplace transform table', url: 'academic papers/signal and systems/suammriez/Fourier transform and Laplace transform.pdf' }], videos: [{ label: 'بشار زيود', url: 'https://www.youtube.com/watch?v=SPskSm8N3FY' },{ label: 'ملخص سبيكتروم', url: 'https://www.youtube.com/watch?v=ARB7PBRlPGc' },{ label: 'شرح على سلايدات دكتور جودت', url: 'https://www.youtube.com/playlist?list=PLmtVLconakTY6y0Thd050QsvkHTJF8TWa' }], mid: [{ label: '2025', url: 'academic papers/signal and systems/pastpapers/ميد 2025.pdf' },{ label: '2024', url: 'academic papers/signal and systems/pastpapers/ميد 2024.pdf' },{ label: '2023', url: 'academic papers/signal and systems/pastpapers/ميد 2023.pdf' },{ label: '2023', url: 'academic papers/signal and systems/pastpapers/امتحان ميد 2023.pdf' },{ label: '2023', url: 'academic papers/signal and systems/pastpapers/Signal Mid 2023.pdf' },{ label: '2008', url: 'academic papers/signal and systems/pastpapers/ميد 2008.pdf' }], final: [{ label: '2025', url: 'academic papers/signal and systems/pastpapers/فاينل 2025.pdf' },{ label: '2023', url: 'academic papers/signal and systems/pastpapers/فاينل 2023.pdf' }]
  },
  subj11: {
    title: 'Power electronics', icon: '⚡',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj12: {
    title: 'Power electronics Lab', icon: '⚡',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj13: {
    title: 'Dynamics and vibration', icon: '🌀',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj14: {
    title: 'Mechatronics applications in renewable energy', icon: '🪫🍃',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj15: {
    title: 'Digital logic design', icon: '1️⃣ 0️⃣ ',
    books: [{ label: 'Digital design with an introduction to verilog HDL',  url: 'academic papers/digital logic design/digital deisgn with an introduction to the verliog hdl.pdf', cover: 'books mockups/digital design with an introduction to verilog hdl.png' },
           { label: 'solutions of digital design with an introduction to verilog HDL',  url: 'academic papers/digital logic design/solutions of digital design with an introduction to the verliog hdl 5th edition.pdf', cover: 'books mockups/digital design with an introduction to verilog hdl solutions.png' }],
    summaries: [{ label: 'تخطيط الكتاب د.مازن', url: 'academic papers/digital logic design/summaries/الكتاب مع تخطيط د.مازن.pdf' },{ label: 'دفتر م.سماح', url: 'academic papers/digital logic design/summaries/دفتر م.سماح.pdf' },{ label: 'سلايدات د.شرحبيل', url: 'academic papers/digital logic design/summaries/سلايدات د.شرحبيل.pdf' },{ label: 'دفتر المادة', url: 'academic papers/digital logic design/summaries/دفتر المادة.pdf' }], videos: [{ label: 'مهندس سامر', url: 'https://drive.google.com/drive/folders/1bN5m11Z-zCsAMwpOBeZ4bJ6BQ9GOkhht' },{ label: 'نتالي الكايد', url: 'https://www.youtube.com/playlist?list=PLjiyR6nPcbxy_nbEQHBj5MwGicZRTRM_w' }], mid: [{ label: '2026', url: 'academic papers/digital logic design/pastpapers/ميد لوجيك 2026 - فصل2.pdf' },{ label: '2025', url: 'academic papers/digital logic design/pastpapers/امتحان ميد 2025.pdf' },{ label: '2025', url: 'academic papers/digital logic design/pastpapers/ميد 2025.pdf' },{ label: '2023', url: 'academic papers/digital logic design/pastpapers/ميد 2023.pdf' },{ label: '2017', url: 'academic papers/digital logic design/pastpapers/ميد 2017.pdf' },{ label: '2016', url: 'academic papers/digital logic design/pastpapers/امتحان ميسد 2016.pdf' },{ label: '2016', url: 'academic papers/digital logic design/pastpapers/ميد 2016.pdf' }], final: [{ label: '2025', url: 'academic papers/digital logic design/pastpapers/فاينل 2025.pdf' },{ label: '2025', url: 'academic papers/digital logic design/pastpapers/فاينل2025.pdf' },{ label: 'شاشات زيرو ون', url: 'academic papers/digital logic design/pastpapers/شاشات زيرو ون.pdf' },{ label: 'شاشات سبارك', url: 'academic papers/digital logic design/pastpapers/شاشات سبارك.pdf' },{ label: 'فاينل', url: 'academic papers/digital logic design/pastpapers/فاينل.pdf' },{ label: '2018', url: 'academic papers/digital logic design/pastpapers/فاينل 2018.pdf' },{ label: '2016', url: 'academic papers/digital logic design/pastpapers/فاينل 2016.pdf' },]
  },
  subj16: {
    title: 'Advance control systems', icon: '🧠',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj17: {
    title: 'Control systems Lab', icon: '🧠',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj18: {
    title: 'Control systems', icon: '🧠',
    books: [ { label: 'Modern control engineering',  url: 'https://drive.google.com/drive/folders/1dwU_9bNs5So3XGK4hN3hQhXXAAAaTuEm', cover: 'books mockups/Modern control engineering.png' },
    { label: 'Modern control engineering solutions', url: 'https://drive.google.com/drive/folders/1IxOwEZ2ym7hLi8PNLwLGOWCiIgnVT1X-', cover: 'books mockups/Modern control engineering solutions.png' }],
    summaries: [ { label: 'سلايدات المادة', url: 'https://drive.google.com/drive/folders/1wjytH0OrjVi4b06_Flbez3hHsoKOJMn2' }, { label: 'مرجع عربي للمادة', url: 'https://drive.google.com/drive/folders/1N0pdQhTVJeNWr_1kOpirHQNbsDL32CwM' }, { label: 'دوسية المادة', url: 'https://drive.google.com/file/d/1RT2Xxt8szWKIAaASmrl0dT3ITsxmUhrM/view' }, { label: 'دفاتر المادة', url: 'https://drive.google.com/drive/folders/1-6YNC_Qo50_1NJs-Wyxmo6488iAqqarQ' }], videos: [ { label: 'شرح سبيكتروم', url: 'https://www.youtube.com/playlist?list=PLRNaExsfJ1qs6LF5rdDHq9w0S3YueJQwS' }], mid: [ { label: 'اسئلة سنوات الكتروني', url: 'https://drive.google.com/drive/folders/1EZfrqC35wE8xltmmdrd3_-et4mC90W8W' },  { label: 'اسئلة سنوات فريق سبارك', url: 'https://drive.google.com/drive/folders/1OlRE0jhoQ5Jn5EwdFA3UNlCCkcV2sW5V' }], final: [{ label: 'اسئلة سنوات سبيكتروم', url: 'https://drive.google.com/drive/folders/1rtgPqs_aTl8bJQSly3nfky6hLePyjk3K' }]
  },
  subj19: {
    title: 'Electrical drive', icon: '⚡',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj20: {
    title: 'Electrical drive Lab', icon: '⚡',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj21: {
    title: 'Mechatronics Systems Design', icon: '🦾',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj22: {
    title: 'CNC', icon: '🔩',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj23: {
    title: 'Assembly Lab', icon: '💾 ',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj24: {
    title: 'Assembly', icon: '💾 ',
    books: [ { label: 'Assembly language for x86 processors',  url: 'academic papers/assembly/Assembly language for x86 processors 7th edition.pdf', cover: 'books mockups/assembly language for x86.png' },
            { label: 'Assembly language step by step programming with linux',  url: 'academic papers/assembly/Assembly Language Step By Step Programming with Linux 3rd edition.pdf', cover: 'books mockups/Assembly Language Step By Step Programming with Linux 3rd edition.png' },],
    summaries: [{ label: 'سلايدات م.روز', url: 'academic papers/assembly/summarize/سلايدات م.روز.pdf' },{ label: 'دفتر م.نوال', url: 'academic papers/assembly/summarize/دفتر م.نوال.pdf' },{ label: 'دفتر سبارك', url: 'academic papers/assembly/summarize/دفتر سبارك.pdf' }], videos: [{ label: 'زيرو ون', url: 'https://www.youtube.com/playlist?list=PLL4N3hz14nvEI2-RTSjySl_BOKfKLsO5r' },{ label: 'مهندسة روز', url: 'https://drive.google.com/drive/folders/1RAiuZeQRSnifTyggKp7GPbatWiBU7meb' },{ label: 'سبارك', url: 'https://www.youtube.com/playlist?list=PL4Itv3LsZJuzvacR1ReJxHbayiyr7VqhD' },{ label: 'عمر عيد', url: 'https://www.youtube.com/playlist?list=PLF1ZTFPI256E' }], mid: [{ label: '2026', url: 'academic papers/assembly/pastpapers/ميد 2026.pdf' },{ label: '2025', url: 'academic papers/assembly/pastpapers/ميد 2025.pdf' },{ label: '2023', url: 'academic papers/assembly/pastpapers/ميد 2023.pdf' },{ label: '2022', url: 'academic papers/assembly/pastpapers/ميد 2022.pdf' },{ label: '2022', url: 'academic papers/assembly/pastpapers/امتحان ميد 2022.pdf' },{ label: '2021', url: 'academic papers/assembly/pastpapers/ميد 2021.pdf' },{ label: 'شاشات', url: 'academic papers/assembly/pastpapers/شاشات ميد.pdf' },{ label: '2018', url: 'academic papers/assembly/pastpapers/ميد 2018.pdf' },{ label: '2016', url: 'academic papers/assembly/pastpapers/ميد 2016.pdf' }], final: [{ label: '2025', url: 'academic papers/assembly/pastpapers/فاينل 2025.pdf' },{ label: '2023', url: 'academic papers/assembly/pastpapers/فاينل 2023.pdf' },{ label: '2022', url: 'academic papers/assembly/pastpapers/امتحان فاينل 2022.pdf' },{ label: '2022', url: 'academic papers/assembly/pastpapers/فاينل 2022.pdf' },{ label: 'شاشات', url: 'academic papers/assembly/pastpapers/شاشات فاينل.pdf' },{ label: 'فاينل', url: 'academic papers/assembly/pastpapers/فاينل.pdf' }]
  },
  subj25: {
    title: 'Protection', icon: '🔌',
    books: [ { label: 'Hand book for protection engineers',  url: 'academic papers/protection/HANDBOOK for protection engineers.pdf', cover: 'books mockups/Hand book for protection engineers.png' },
           { label: 'Protective relaying principles and applications',  url: 'academic papers/protection/protection relaying principles and applications.pdf', cover: 'books mockups/protective relaying principles and applications.png' },
           { label: 'Electrical installation hand book protection, control and electrical devices',  url: 'academic papers/protection/electrical installation hanbook protection, control and electrical devices.pdf', cover: 'books mockups/Electrical installation hand book protection, control and electrical devices.png' }],
    summaries: [ 
      {
    label: 'Fuses',
    type: 'folder',
    items: [
      { label: 'Fuse characteristics', url: 'academic papers/protection/summaries/سلايدات المادة/Fuses/2_Fuse_Characteristics.pdf' },
      { label: 'Electrical installation practice', url: 'academic papers/protection/summaries/سلايدات المادة/Fuses/03 Fuses (1).pdf' },
      { label: 'Electrical components', url: 'academic papers/protection/summaries/سلايدات المادة/Fuses/ESD_1_Electrical_Components.pdf' },
      { label: 'Fuses switch gear circuit breaker', url: 'academic papers/protection/summaries/سلايدات المادة/Fuses/Fuses Switch gear Circuit breakers.pdf' },
      { label: 'General purpose fuses', url: 'academic papers/protection/summaries/سلايدات المادة/Fuses/GPEU_FerrulegG.pdf   fuses.pdf' },
      { label: 'Guide to fuse selection', url: 'academic papers/protection/summaries/سلايدات المادة/Fuses/Guide_to_Fuse_Selection.pdf' },
      { label: 'IP protection classes', url: 'academic papers/protection/summaries/سلايدات المادة/Fuses/IP_Protection_Classes_01.pdf' },
      { label: 'Fuseology', url: 'academic papers/protection/summaries/سلايدات المادة/Fuses/_Fuse_Classes.pdf' },
      { label: 'Safety switches fuses', url: 'academic papers/protection/summaries/سلايدات المادة/Fuses/safety_switches fuses.pdf' },
    ]
      },
      {
    label: 'Resistors',
    type: 'folder',
    items: [
      { label: 'Linear Potentiometers for Structural Engineering', url: 'academic papers/protection/summaries/سلايدات المادة/resistors/Linear Potentiometers for Structural Engineering.pdf' },
      { label: 'Resistance', url: 'academic papers/protection/summaries/سلايدات المادة/resistors/Resistance.pdf' },
      { label: 'Resistors & Colour Coding', url: 'academic papers/protection/summaries/سلايدات المادة/resistors/Resistors & Colour Coding.pdf' },
      { label: 'Resistors and resistance', url: 'academic papers/protection/summaries/سلايدات المادة/resistors/Resistors and resistance.pdf' },
      { label: 'Resistors', url: 'academic papers/protection/summaries/سلايدات المادة/resistors/Resistors.pdf' },
      { label: 'Semiconductor Electronics', url: 'academic papers/protection/summaries/سلايدات المادة/resistors/Semiconductor Electronics.pdf' },
    ]
      },
      {
    label: 'Electrical switches',
    type: 'folder',
    items: [
      { label: 'Electrical Symbols', url: 'academic papers/protection/summaries/سلايدات المادة/Electrical Switches/3..pdf' },
      { label: 'Electrical Symbols and Line Diagrams', url: 'academic papers/protection/summaries/سلايدات المادة/Electrical Switches/Electrical Symbols and Line Diagrams.pdf' },
      { label: 'Switches for Industrial applications', url: 'academic papers/protection/summaries/سلايدات المادة/Electrical Switches/indrlcat.pdft ype of switches.pdf' },
      { label: 'Industrial control', url: 'academic papers/protection/summaries/سلايدات المادة/Electrical Switches/industrial control.pdf' },
      { label: 'Residentia electrical devices', url: 'academic papers/protection/summaries/سلايدات المادة/Electrical Switches/residentia electrical devices.pdf' },
      { label: 'Switch Basics', url: 'academic papers/protection/summaries/سلايدات المادة/Electrical Switches/switch basics_web08.pdf' },
      { label: 'Switches', url: 'academic papers/protection/summaries/سلايدات المادة/Electrical Switches/switches.pdf' },
    ]
      },
       {
    label: 'Circuit breakers',
    type: 'folder',
    items: [
      { label: 'المصهرات والقواطع الآلية', url: 'academic papers/protection/summaries/سلايدات المادة/Circuit Breakers/التمديدات الكهربائية للدكتور محمد عالية.pdf' },
      { label: 'The basic functions of LV switch gear', url: 'academic papers/protection/summaries/سلايدات المادة/Circuit Breakers/Fuses Switch gear Circuit breakers.pdf' },
      { label: 'التحكم الكهربائي الصناعي والآلي', url: 'academic papers/protection/summaries/سلايدات المادة/Circuit Breakers/التحكم الكهربائي الصناعي والآلي.pdf' },
      { label: 'LV switch gear: functions & selections', url: 'academic papers/protection/summaries/سلايدات المادة/Circuit Breakers/EIG-H-LV-switchgear.pdf' },
      { label: 'Distribution boards', url: 'academic papers/protection/summaries/سلايدات المادة/Circuit Breakers/Distribution Boards.pdf' },
      { label: 'Circuit breakers lighting', url: 'academic papers/protection/summaries/سلايدات المادة/Circuit Breakers/11 circuit breakers lighting.pdf' },
    ]
      },
       {
    label: 'Contractors',
    type: 'folder',
    items: [
      { label: 'Motor control', url: 'academic papers/protection/summaries/سلايدات المادة/Contactors/Contactors relays.pdf' },
      { label: 'Motor starter', url: 'academic papers/protection/summaries/سلايدات المادة/Contactors/Motor Starter.pdf' },
      { label: 'Contractors & Relays', url: 'academic papers/protection/summaries/سلايدات المادة/Contactors/Contactors & Relays.pdf' },
    ]
      },
         {
    label: 'Sensors',
    type: 'folder',
    items: [
      { label: 'Basics of sensors', url: 'academic papers/protection/summaries/سلايدات المادة/Sensors/Basic of ensors.pdf' },
      { label: 'Fundamentals of sensing', url: 'academic papers/protection/summaries/سلايدات المادة/Sensors/FUNDAMENTALS OF SENSING.pdf' },
    ]
      },
           {
    label: 'Relays',
    type: 'folder',
    items: [
      { label: 'Relay', url: 'academic papers/protection/summaries/سلايدات المادة/Relays/Lect1.pdf' },
      { label: 'Programming timer', url: 'academic papers/protection/summaries/سلايدات المادة/Relays/PLCHAPTER07 Timer relays.pdf' },
      { label: 'Relays automobile types', url: 'academic papers/protection/summaries/سلايدات المادة/Relays/Relays Autombile types.pdf' },
      { label: 'Sequential process control', url: 'academic papers/protection/summaries/سلايدات المادة/Relays/Relays.pdf' },
      { label: 'schem contactors and relays', url: 'academic papers/protection/summaries/سلايدات المادة/Relays/schems contactors and relays(Autosaved).pdf' },
      { label: 'Sheldon Munns', url: 'academic papers/protection/summaries/سلايدات المادة/Relays/sheldon-munns_a (1) (1).pdf' },
      { label: 'Time delay relay', url: 'academic papers/protection/summaries/سلايدات المادة/Relays/time delay relaye applications.pdf' },
    ]
      },
           {
    label: 'Relays',
    type: 'folder',
    items: [
      { label: 'Relay', url: 'academic papers/protection/summaries/سلايدات المادة/Relays/Lect1.pdf' },
      { label: 'Programming timer', url: 'academic papers/protection/summaries/سلايدات المادة/Relays/PLCHAPTER07 Timer relays.pdf' },
      { label: 'Relays automobile types', url: 'academic papers/protection/summaries/سلايدات المادة/Relays/Relays Autombile types.pdf' },
      { label: 'Sequential process control', url: 'academic papers/protection/summaries/سلايدات المادة/Relays/Relays.pdf' },
      { label: 'schem contactors and relays', url: 'academic papers/protection/summaries/سلايدات المادة/Relays/schems contactors and relays(Autosaved).pdf' },
      { label: 'Sheldon Munns', url: 'academic papers/protection/summaries/سلايدات المادة/Relays/sheldon-munns_a (1) (1).pdf' },
      { label: 'Time delay relay', url: 'academic papers/protection/summaries/سلايدات المادة/Relays/time delay relaye applications.pdf' },
    ]
      },
    { label: 'Electrical components', url: 'academic papers/protection/summaries/سلايدات المادة/Others/elcromechancal components devices.pdf' }, ], videos: [], mid: [{ label: '2025',  url: 'academic papers/protection/past papers/ميد 2025.pdf'},{ label: 'ميد',  url: 'academic papers/protection/past papers/ميد.pdf'},{ label: '2016',  url: 'academic papers/protection/past papers/ميد 2016.pdf'},{ label: '2015',  url: 'academic papers/protection/past papers/ميد 2015.pdf'},{ label: 'Circuit breakers test bank',  url: 'academic papers/protection/past papers/Circuit Breaker - Multiple Choice Questions.pdf'},], final: [{ label: 'شاشات',  url: 'academic papers/protection/past papers/فاينل شاشات.pdf'},]
  },
  subj26: {
    title: 'SCADA', icon: '📊',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj27: {
    title: 'PLC', icon: '🎛️',
    books: [ { label: 'Programmable logic controllers',  url: 'academic papers/plc/Programmable Logic Controllers (Frank D. Petruzella).pdf', cover: 'books mockups/Programmable logic controllers.png' },
           { label: 'Programmable controllers theory and implementation',  url: 'academic papers/plc/ourdev_259231.pdf', cover: 'books mockups/programmable controllers theory and implementation.png' },
           { label: 'Process control instrumentation technology',  url: 'academic papers/plc/process control instrumentation technology.pdf', cover: 'books mockups/Process control instrumentation technology.png' },],
    summaries: [{ label: 'سلايدات د.معزوز الصلاحات',  url: 'academic papers/plc/summaries/د.معزوز الصلاحات.pdf'},{ label: 'سلايدات المادة',  url: 'academic papers/plc/summaries/Plc slides.pdf'},{ label: 'ملخص سبيكتروم جديد',  url: 'academic papers/plc/summaries/ملخص PLC نظري.pdf'},{ label: 'Timer and counter examples',  url: 'academic papers/plc/summaries/16-Timers and counters example.pdf'},{ label: 'ملخص سبيكتروم',  url: 'academic papers/plc/summaries/ملخص.pdf'},], videos: [{ label: 'م.يامن الترك',  url: 'https://www.youtube.com/playlist?list=PLq3QKKpXDEYpcWftOlcyiJ99fs_7AsBJM'},], mid: [{ label: '2025',  url: 'academic papers/plc/pastpapers/mid 2025.pdf'},{ label: '2024',  url: 'academic papers/plc/pastpapers/mid 2024.pdf'},{ label: '2023',  url: 'academic papers/plc/pastpapers/mid2023.pdf'},{ label: '2016',  url: 'academic papers/plc/pastpapers/mid 2016.pdf'},{ label: '2016',  url: 'academic papers/plc/pastpapers/mid 2016 exam.pdf'}], final: [{ label: '2024',  url: 'academic papers/plc/pastpapers/final 2024.pdf'},{ label: 'شاشات',  url: 'academic papers/plc/pastpapers/final شاشات.pdf'},]
  },
  subj28: {
    title: 'Industrial Processes', icon: '🏭',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj29: {
    title: 'Hydraulic drives', icon: '🔩',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj30: {
    title: 'Hydraulic drives Lab', icon: '🔩',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj31: {
    title: 'MEMs', icon: '⚙️',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj32: {
    title: 'Sensors and Actuators Lab', icon: '📏',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj33: {
    title: 'Sensors and Actuators', icon: '📏',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj34: {
    title: 'Applied Engineering Materials', icon: '🏗️ ',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj35: {
    title: 'Machine element design', icon: '🧊',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj36: {
    title: 'PLC Lab', icon: '🎛️',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj37: {
    title: 'Industrial Processes', icon: '🏭',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj38: {
    title: 'Special topics in mechatronics engineering', icon: '🤖',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj39: {
    title: 'Robotics Dynamics and Analysis', icon: '🤖',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj40: {
    title: 'Robotics engineering', icon: '🤖',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
  subj41: {
    title: 'Robotics Dynamics and Analysis Lab', icon: '🤖',
    books: [],
    summaries: [], videos: [], mid: [], final: []
  },
};

// ─── RENDER HOTSPOTS ───
function renderPlanHotspots() {
  const wrap = document.getElementById('planHotspots');
  if (!wrap) return;
  wrap.innerHTML = planHotspots.map(h => `
    <div class="plan-hotspot ${h.type === 'link' ? 'link-type' : 'subject-type'}"
         style="top:${h.top}%; left:${h.left}%; width:${h.w}%; height:${h.h}%;"
         data-id="${h.id}"
         title="${h.type === 'link' ? 'رابط خارجي' : (subjectsData[h.subject] ? subjectsData[h.subject].title : h.subject)}"
         onclick="handleHotspotClick('${h.id}')"></div>
  `).join('');
}

function handleHotspotClick(id) {
  if (calibrationMode) return;
  const h = planHotspots.find(x => x.id === id);
  if (!h) return;
  if (h.type === 'link') {
    if (!h.url) { alert('لم يتم تحديد رابط لهذا الزر بعد.'); return; }
    window.open(h.url, '_blank');
  } else {
    openSubjectModal(h.subject);
  }
}

// ─── SUBJECT MODAL ───

// Render a simple link list (summaries, videos, mid, final)
// ─── BUILD LINK LIST WITH FOLDER SUPPORT (USING <details>) ───
function buildLinkList(containerId, items, emptyText) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!items || items.length === 0) {
    el.innerHTML = `<span class="subject-list-empty">${emptyText || 'لا يوجد محتوى مضاف بعد'}</span>`;
    return;
  }

  let html = '';
  items.forEach(item => {
    if (item.type === 'folder' && item.items && item.items.length > 0) {
      // Folder – uses <details> for native expand/collapse
      html += `
        <details class="subject-folder">
          <summary class="subject-folder-header">
            <span class="subject-folder-label">${item.label}</span>
            <span class="subject-folder-count">(${item.items.length})</span>
          </summary>
          <div class="subject-folder-content">
            ${buildLinkListInner(item.items)}
          </div>
        </details>
      `;
    } else if (item.url) {
      // Simple link
      html += `
        <a class="subject-link-item" href="${item.url}" target="_blank" rel="noopener">
          <span>${item.label}</span>
          <span class="link-arrow">↗</span>
        </a>
      `;
    }
  });
  el.innerHTML = html;
}

// ─── HELPER: recursive rendering for nested folders ───
function buildLinkListInner(items) {
  let html = '';
  items.forEach(item => {
    if (item.type === 'folder' && item.items && item.items.length > 0) {
      html += `
        <details class="subject-folder" style="margin-right: 16px;">
          <summary class="subject-folder-header">
            <span class="subject-folder-label">${item.label}</span>
            <span class="subject-folder-count">(${item.items.length})</span>
          </summary>
          <div class="subject-folder-content">
            ${buildLinkListInner(item.items)}
          </div>
        </details>
      `;
    } else if (item.url) {
      html += `
        <a class="subject-link-item" href="${item.url}" target="_blank" rel="noopener" style="padding-right: 20px;">
          <span>${item.label}</span>
          <span class="link-arrow">↗</span>
        </a>
      `;
    }
  });
  return html;
}

// Render book covers grid
function buildBooksGrid(containerId, books) {
  const el = document.getElementById(containerId);
  if (!books || books.length === 0) {
    el.innerHTML = `<span class="subject-list-empty">لا يوجد كتب مضافة بعد</span>`;
    return;
  }
  el.innerHTML = books.map(b => {
    const coverContent = b.cover
      ? `<img src="${b.cover}" alt="${b.label}" onerror="this.parentElement.innerHTML=this.parentElement.getAttribute('data-fallback')">`
      : `<div class="subject-book-cover-placeholder"><span>📗</span><span>${b.label}</span></div>`;
    return `
      <a class="subject-book-card" href="${b.url || '#'}" target="_blank" rel="noopener">
        <div class="subject-book-cover" data-fallback='<div class="subject-book-cover-placeholder"><span>📗</span><span>${b.label}</span></div>'>
          ${coverContent}
        </div>
        <span class="subject-book-label">${b.label}</span>
      </a>
    `;
  }).join('');
}

function openSubjectModal(subjectKey) {
  const data = subjectsData[subjectKey];
  if (!data) return;

  // Header
  document.getElementById('subjectTitle').textContent = data.title;
  document.getElementById('subjectTitleIcon').textContent = data.icon || '📖';

  // Books
  buildBooksGrid('subjectBooks', data.books);
  document.getElementById('subjectBooksBlock').style.display =
    (data.books && data.books.length > 0) ? '' : 'none';

  // Summaries
  buildLinkList('subjectSummaries', data.summaries);
  document.getElementById('subjectSummariesBlock').style.display =
    (data.summaries && data.summaries.length > 0) ? '' : 'none';

  // Videos
  buildLinkList('subjectVideos', data.videos);
  document.getElementById('subjectVideosBlock').style.display =
    (data.videos && data.videos.length > 0) ? '' : 'none';

  // Past papers
  const hasPapers = (data.mid && data.mid.length > 0) || (data.final && data.final.length > 0);
  buildLinkList('subjectMid', data.mid);
  buildLinkList('subjectFinal', data.final);
  document.getElementById('subjectPapersBlock').style.display = hasPapers ? '' : 'none';

  // If nothing at all, show a message somewhere
  const hasAny = (data.books && data.books.length) ||
    (data.summaries && data.summaries.length) ||
    (data.videos && data.videos.length) ||
    (data.mid && data.mid.length) ||
    (data.final && data.final.length);
  if (!hasAny) {
    // Show all blocks hidden but add a general message
    document.getElementById('subjectBooksBlock').style.display = '';
    document.getElementById('subjectBooks').innerHTML =
      `<span class="subject-list-empty">لا يوجد محتوى مضاف لهذه المادة بعد</span>`;
  }

  document.getElementById('subjectModalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSubjectModal(e) {
  if (e && e.target !== document.getElementById('subjectModalOverlay')) return;
  document.getElementById('subjectModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── CALIBRATION MODE (لمساعدتك بتحديد/تعديل مواقع الأزرار يدويًا) ───
let calibrationMode = false;
function toggleCalibration() {
  calibrationMode = !calibrationMode;
  document.getElementById('planImgWrap').classList.toggle('calib-mode', calibrationMode);
  const readout = document.getElementById('calibReadout');
  readout.style.display = calibrationMode ? 'block' : 'none';
  readout.textContent = calibrationMode
    ? 'وضع التحديد مفعّل: اضغط في أي مكان على الصورة لمعرفة نسبة top/left الخاصة بهذه النقطة'
    : '';
}
document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('planImg');
  if (img) {
    img.addEventListener('click', (e) => {
      if (!calibrationMode) return;
      const rect = img.getBoundingClientRect();
      const left = ((e.clientX - rect.left) / rect.width * 100).toFixed(2);
      const top = ((e.clientY - rect.top) / rect.height * 100).toFixed(2);
      document.getElementById('calibReadout').textContent = `top: ${top}%   left: ${left}%`;
    });
  }
  renderPlanHotspots();
});

