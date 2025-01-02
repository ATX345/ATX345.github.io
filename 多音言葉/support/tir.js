document.addEventListener("DOMContentLoaded", function() {
    const tirHTML = `
<body class="no-select">
  <div class="grid-container">
    <!-- タイル1 -->
    <a href="PASGEN.html" class="tile">
      <img src="hatena.svg" class="icon></img>
      <div class="title">FAQ よくある質問</div>
    </a>
    <!-- タイル2 -->
    <a href="PASGENPRO.html" class="tile">
      <img src="PASGEN_icon.svg" class="icon">
      <div class="title">PAS GEN PRO</div>
      <div class="description">パスワードジェネレータプロフェッショナル</div>
  </a>
    <!-- タイル1 -->
    <a href="AES.html" class="tile">
      <img class="icon" src="AES.jpg"></img>
      <div class="title">AES</div>
      <div class="description">AES</div>
    </a>
    <!-- タイル2 -->
    <a href="AES-GCM.html" class="tile">
      <img src="AES-GCM.jpg" class="icon">
      <div class="title">AES-GCM</div>
      <div class="description">AES-GCM</div>
  </a>
    <!-- タイル1 -->
    <a href="bese64.html" class="tile">
      <img class="icon" src="bese64.jpg"></img>
      <div class="title">bese64</div>
      <div class="description">bese64</div>
    </a>
    <!-- タイル2 -->
    <a href="XDZO.html" class="tile">
      <img src="XDZO.jpg" class="icon">
      <div class="title">XDZO</div>
      <div class="description">XDZO</div>
  </a>
     <!-- タイル1 -->
     <a href="PASGEN.html" class="tile">
      <img class="icon" src="PASGEN_icon.svg"></img>
      <div class="title">PAS GEN</div>
      <div class="description">パスワードジェネレータ</div>
    </a>
    <!-- タイル2 -->
    <a href="PASGENPRO.html" class="tile">
      <img src="PASGEN_icon.svg" class="icon">
      <div class="title">PAS GEN PRO</div>
      <div class="description">パスワードジェネレータプロフェッショナル</div>
  </a>

  </div>
</body>`;
    
    document.getElementById('tir').innerHTML = tirHTML;
});
