document.addEventListener("DOMContentLoaded", function() {
    const navbarHTML = `
          <nav class="nav-bar">
            <a href="/多音言葉/">
            <img src="/多音言葉/assets/img/logo.webp" width="170" class="left-logo" draggable="false">
          </a> 
            <ul>
              <li><a href="/多音言葉/">Home</a></li>
              <li><a href="/多音言葉/news/">News</a></li>
             <!-- <li><a href="/多音言葉/Dev/">Dev</a></li> -->
               <li><a href="/多音言葉/about/">多音言葉について</a></li>
              <li><a href="/多音言葉/app/">ソフトウェア</a></li>

              <ul>
                <li class="dropdown">
                  <a href="/多音言葉/support/" class="dropbtn" tabindex="0">サポート▼</a>
                  <div class="dropdown-content">
                                               
                    <div class="dropdown-submenu">
                      <a href="#" class="submenu-btn" tabindex="0">お問い合わせ▶</a>
                      <div class="submenu-content">
                        <a href="/多音言葉/support/foam/" tabindex="0">フォーム</a>
                        <a href="/多音言葉/support/mail/" tabindex="0">メール</a>
                      </div>
                    </div>

                   <div class="dropdown-submenu">
                      <a href="#" class="submenu-btn" tabindex="0">サポート▶</a>
                      <div class="submenu-content">
                        <a href="/多音言葉/support/guide/" tabindex="0">ガイド</a>
                        <a href="/多音言葉/support/TechSupport/" tabindex="0">技術サポート</a>
                         <a href="/多音言葉/support/FAQ/" tabindex="0">FAQ</a>
                      </div>
                    </div>
                    
                  </div>
                </li>
              </ul>  





    
              <ul>
                <li class="dropdown">
                  <a href="/多音言葉/content/" class="dropbtn" tabindex="0">公式コンテンツ▼</a>
                  <div class="dropdown-content">
                                                  
                    <div class="dropdown-submenu">
                      <a href="#" class="submenu-btn" tabindex="0">音楽▶</a>
                      <div class="submenu-content">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" tabindex="0">Reverie</a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" tabindex="0">Horizon</a>
                      </div>
                    </div>
    
                    <div class="dropdown-submenu">
                      <a href="#" class="submenu-btn" tabindex="0">イラスト▶</a>
                      <div class="submenu-content">
                        <a href="https://x.com/ybk__oO/status/1870193457735868459" tabindex="0">屋箱</a>
                        <a href="https://media.discordapp.net" tabindex="0">鍋</a>
                      </div>
                    </div>
                    
                  </div>
                </li>
              </ul>     
            </ul>
            <a href="/多音言葉/SNS/">
            <img src="/多音言葉/assets/img/link.svg" width="40" class="right-logo" draggable="false">
            </a>
          </nav>
    `;


    document.getElementById('navbar-mein').innerHTML = navbarHTML;
});


