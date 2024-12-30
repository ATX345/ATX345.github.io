document.addEventListener("DOMContentLoaded", function() {
  const navSubHTML = `
<button class="unique-menu-button" id="menuButton">≡</button>
<div class="unique-overlay" id="menuOverlay">
<a href="/多音言葉/">HOME</a>
<a href="/多音言葉/news/">NEWS</a>
<a href="/多音言葉/about/">多音言葉について</a>
<a href="/多音言葉/support/foam/">お問い合わせ</a>
<a href="/多音言葉/support/">サポート</a>
<a href="/多音言葉/support/guide/">ガイド</a>
<a href="/多音言葉/support/FAQ/">FAQ</a>
<a href="/多音言葉/content/">公式コンテンツ</a>
<a href="/多音言葉/SNS/">SNS</a>
<a href="/多音言葉/PrivacyPolicyTermsofUse/">プライバシーポリシー/利用規約</a>
</div>
`;
  
  document.getElementById('navbar-sub').innerHTML = navSubHTML;
});


