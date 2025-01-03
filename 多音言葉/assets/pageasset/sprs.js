document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splash");
    const mainContent = document.getElementById("main-content");

    // 3秒後にスプラッシュ画面をフェードアウトさせる
    setTimeout(() => {
      splash.style.opacity = "0"; // スプラッシュ画面をフェードアウト
      setTimeout(() => {
        splash.style.display = "none"; // スプラッシュ画面を非表示

        // メインコンテンツをフェードイン
        mainContent.style.visibility = "visible"; // メインコンテンツを表示
        setTimeout(() => {
          mainContent.style.opacity = "1"; // メインコンテンツをフェードイン
        }, 14500); // 少し遅れてフェードイン
      }, 1000); // 1秒後にスプラッシュ画面を非表示
    }, 1000); // 3秒後にスプラッシュ画面をフェードアウト
  });