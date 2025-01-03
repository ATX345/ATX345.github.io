document.addEventListener("DOMContentLoaded", () => {
    const contentsFast = document.getElementById("contents-fast");
    const contentsSecond = document.getElementById("contents-second");
  
    // コンテンツの表示切り替え関数
    function toggleContents() {
      if (window.innerWidth <= 768) {
        // コンテンツの表示切り替え
        contentsFast.style.display = "none";
        contentsSecond.style.display = "block";
      } else {
        // コンテンツの表示切り替え
        contentsFast.style.display = "block";
        contentsSecond.style.display = "none";
      }
    }
  
    // 初期状態を設定
    toggleContents();
  
    // ウィンドウリサイズ時に切り替え
    window.addEventListener("resize", toggleContents);
  });
  