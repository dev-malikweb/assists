const imageReplacements = {
// الأندية الإنجليزية 
'https://stad.yalla-shoots.io/wp-content/uploads/2023/09/burnley.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/12.png',//بيرنلي
'https://stad.yalla-shoots.io/wp-content/uploads/2021/07/udQ6ns69PctCv143h-GeYw_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/105.png',//مانشستر يونايتد
'https://stad.yalla-shoots.io/wp-content/uploads/2021/07/z44l-a0W1v5FmgPnemV6Xw_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/110.png',//مانشستر سيتي
'https://stad.yalla-shoots.io/wp-content/uploads/2022/01/Zr6FbE-8pDH7UBpWCO8U9A_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/29.png',//نوتنجهام فورست
'https://stad.yalla-shoots.io/wp-content/uploads/2021/07/QOUce0WQBYqnkSmN6_TxGA_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/63.png',//برينتفورد
'https://stad.yalla-shoots.io/wp-content/uploads/2021/08/Untitled-5-copy.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/107.png',//ايفرتون
'https://stad.yalla-shoots.io/wp-content/uploads/2021/07/fhBITrIlbQxhVB6IjxUO6Q_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/106.png',//تشيلسي
'https://stad.yalla-shoots.io/wp-content/uploads/2021/08/uyNNelfnFvCEnsLrUL-j2Q_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/109.png',//استون فيلا
'https://stad.yalla-shoots.io/wp-content/uploads/2021/07/0iShHhASp5q1SL4JhtwJiw_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/108.png',//ليفربول
'https://stad.yalla-shoots.io/wp-content/uploads/2021/08/bXkiyIzsbDip3x2FFcUU3A_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/113.png',//وست هام يونايتد
'https://stad.yalla-shoots.io/wp-content/uploads/2021/07/4us2nCgl6kgZc0t3hpW75Q_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/104.png',//ارسنال
'https://stad.yalla-shoots.io/wp-content/uploads/2021/07/download-1.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/114.png',//توتنهام
'https://stad.yalla-shoots.io/wp-content/uploads/2023/02/sheffield.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/20.png',//شيفيلد يونايتد
'https://stad.yalla-shoots.io/wp-content/uploads/2021/08/96CcNNQ0AYDAbssP0V9LuQ_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/116.png',//نيوكاسل يونايتد
'https://stad.yalla-shoots.io/wp-content/uploads/2021/08/UDYY4FSlty6fXFBzvFfcyw_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/22.png',//ليستر سيتي
'https://stad.yalla-shoots.io/wp-content/uploads/2021/08/8piQOzndGmApKYTcvyN9vA_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/10.png',//كريستال بالاس
'https://stad.yalla-shoots.io/wp-content/uploads/2021/09/EKIe0e-ZIphOcfQAwsuEEQ_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/38.png',//برايتون

// الأندية الإسبانية
'https://stad.yalla-shoots.io/wp-content/uploads/2021/08/pk-hNCNpGM_JDoHHvLVF-Q_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/143.png',//اوساسونا
'https://stad.yalla-shoots.io/wp-content/uploads/2021/07/hCTs5EX3WjCMC5Jl3QE4Rw_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/135.png',//اشبيلية
'https://stad.yalla-shoots.io/wp-content/uploads/2021/07/download-3.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/132.png',//برشلونة
'https://stad.yalla-shoots.io/wp-content/uploads/2021/08/wpdhixHP_sloegfP0UlwAw_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/158.png',//سيلتا فيجو
'https://stad.yalla-shoots.io/wp-content/uploads/2021/07/Th4fAVAZeCJWRcKoLW7koA_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/131.png',//ريال مدريد
'https://stad.yalla-shoots.io/wp-content/uploads/2021/09/srAAE0bOnCppUrlbJpFiHQ_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/134.png',//اتلتيكو مدريد
'https://stad.yalla-shoots.io/wp-content/uploads/2022/11/ud-almeria.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/138.png',//الميريا
'https://stad.yalla-shoots.io/wp-content/uploads/2021/08/Ss21P4CUmigjrEtcoapjVg_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/142.png',//ريال مايوركا

// الأندية الإيطالية
'https://stad.yalla-shoots.io/wp-content/uploads/2021/09/GoeTFIVAZLA5JWk0-A6B0A_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/266.png',//ساسولو
'https://stad.yalla-shoots.io/wp-content/uploads/2021/07/Lv6xmBlUIpN3GAFhtf6nqQ_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/226.png',//يوفنتوس
'https://stad.yalla-shoots.io/wp-content/uploads/2021/07/VoKsJ6RitaHGhsM62e6AXQ_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/227.png',//ميلان
'https://stad.yalla-shoots.io/wp-content/uploads/2021/08/Y23PEIJgTvK3Qpm9il1MGA_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/316.png',//هيلاس فيرونا
'https://stad.yalla-shoots.io/wp-content/uploads/2021/08/vyezOynQ97AOBHEaClxZrg_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/237.png',//امبولي
'https://stad.yalla-shoots.io/wp-content/uploads/2023/01/inter.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/224.png',//إنتر ميلان
'https://stad.yalla-shoots.io/wp-content/uploads/2023/08/bologna.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/245.png',//بولونيا
'https://stad.yalla-shoots.io/wp-content/uploads/2021/07/PWRLYBJqlGrAAsKkUN6eng_96x96-1.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/234.png',//نابولي
'https://stad.yalla-shoots.io/wp-content/uploads/2021/09/ovE3HSEx4GWXkW8GU7KVhA_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/235.png',//تورينو
'https://stad.yalla-shoots.io/wp-content/uploads/2021/08/BQdP4jUBFJfG7U_JBsFIMg_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/225.png',//روما
'https://stad.yalla-shoots.io/wp-content/uploads/2022/10/lecce.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/246.png',//ليتشي

// الأندية الفرنسية
'https://stad.yalla-shoots.io/wp-content/uploads/2023/08/paris-sg.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/480.png',//باريس سان جيرمان
'https://stad.yalla-shoots.io/wp-content/uploads/2021/08/KfBX1kHNj26r9NxpqNaTkA_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/469.png',//مارسيليا

// الأندية الألمانية
'https://stad.yalla-shoots.io/wp-content/uploads/2021/07/cmntP5q_pHL7g5LfkRiw_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/331.png',//بايرن ميونخ
'https://stad.yalla-shoots.io/wp-content/uploads/2021/09/بوخوم.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/343.png',//بوخوم
'https://stad.yalla-shoots.io/wp-content/uploads/2021/08/FZnTSH2rbHFos4BnlWAItw_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/341.png',//دورتموند
'https://stad.yalla-shoots.io/wp-content/uploads/2021/07/nCdwmPlnAA041M4HDMzmkg_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/339.png',//فولفسبورج
'https://stad.yalla-shoots.io/wp-content/uploads/2023/09/preusen-munster.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/423.png',//بروسيا مونستر

// الأندية المصرية
'https://stad.yalla-shoots.io/wp-content/uploads/2023/09/al-ahly.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/8200.png',//الأهلي
'https://stad.yalla-shoots.io/wp-content/uploads/2021/06/RDTXHVLGhO3Emt27QslOCw_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/8201.png',//الزمالك
'https://stad.yalla-shoots.io/wp-content/uploads/2021/06/Ra_Fuh-xdYTK41_UUigPVA_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/8310.png',//المقاولون العرب

// الأندية السعودية
'https://stad.yalla-shoots.io/wp-content/uploads/2023/01/al-okhdood.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/55794.png',//الاخدود
'https://stad.yalla-shoots.io/wp-content/uploads/2022/10/al-khaleej.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/12138.png',//الخليج
'https://stad.yalla-shoots.io/wp-content/uploads/2023/01/al-nasr.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/7549.png',//النصر
'https://stad.yalla-shoots.io/wp-content/uploads/2021/08/8S9rNUFk1YO27XsLV6jn_Q_96x96.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/8946.png',//الاهلي السعودي
'https://stad.yalla-shoots.io/wp-content/uploads/2023/02/uhud.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/14903.png',//أحد
'https://stad.yalla-shoots.io/wp-content/uploads/2023/02/al-kholood.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/55800.png',//الخلود

// فرق دوري أبطال أوروبا


// فرق دوري أبطال أفريقيا


// الفرف الامريكية
'https://stad.yalla-shoots.io/wp-content/uploads/2023/06/inter-miami.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/54729.png',//إنتر ميامي
'https://stad.yalla-shoots.io/wp-content/uploads/2023/08/orlando-city.png': 'https://cdn.statically.io/gh/dev-malikweb/images/teams-imgs/12204.png',//أورلاندو سيتي


};
function replaceImages() {
const tableImages = document.querySelectorAll('.team-logo img');

tableImages.forEach((img) => {
const currentImageSrc = img.getAttribute('src');
if (imageReplacements[currentImageSrc]) {
img.setAttribute('src', imageReplacements[currentImageSrc]);
}
});
}
setInterval(replaceImages, 50);
