document.addEventListener("DOMContentLoaded", () => {
    const navbarMein = document.getElementById("navbar-mein");
    const navbarSub = document.getElementById("navbar-sub");
    const menuButton = document.getElementById("menuButton");
    const menuOverlay = document.getElementById("menuOverlay");
  
    // ナビゲーションの切り替え関数
    function toggleNavbar() {
      if (window.innerWidth <= 768) {
        navbarMein.style.display = "none";
        navbarSub.style.display = "block";
      } else {
        navbarMein.style.display = "block";
        navbarSub.style.display = "none";
      }
    }
  
    // 初期状態を設定
    toggleNavbar();
  
    // ウィンドウリサイズ時に切り替え
    window.addEventListener("resize", toggleNavbar);
  
    // メニューボタンのクリック処理
    if (menuButton && menuOverlay) {
      menuButton.addEventListener("click", () => {
        menuOverlay.classList.toggle("open");
      });
    } else {
      console.error("menuButton または menuOverlay が見つかりません");
    }
  });
  


        