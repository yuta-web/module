"use strict";
// ハンバーガー
const ham = document.querySelector('.js-hamburger');
const nav =  document.querySelector('.js-slide');
const linksInPage = document.querySelectorAll('a[href^="#"]');
const links = document.querySelectorAll('.sp a[href^="#"]');
ham.addEventListener('click', () => {
  ham.classList.toggle('is-active');
  nav.classList.toggle('is-active');
})

// スライダー
$(function () {
  $(".js-kv__slide .p-kv__slide__item:not(:first-child)").hide();
  setInterval(function () {
    $(".js-kv__slide .p-kv__slide__item:first-child")
      .fadeOut("slow")
      .next(".p-kv__slide__item")
      .fadeIn("slow")
      .end()
      .appendTo(".js-kv__slide");
  }, 5000);
});

// スムーズスクロール
linksInPage.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    let href = link.getAttribute('href');
    let target = document.getElementById(href.replace("#", ""));
    const targetHeight = target.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const position = targetHeight + offset;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  })
});

let fadeInTarget = document.querySelectorAll('.js-fadein');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('is-active');
    }
  }
});

//ページジャンプ
const pagetopBtn = document.querySelector('#js-page-top');
pagetopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});