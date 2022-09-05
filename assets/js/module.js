"use strict";

const ham = document.querySelector('.js-hamburger');
const nav =  document.querySelector('.js-slide');
const linksInPage = document.querySelectorAll('a[href^="#"]');
const links = document.querySelectorAll('.sp a[href^="#"]');

ham.addEventListener('click', () => {
  ham.classList.toggle('is-active');
  nav.classList.toggle('is-active');
})

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

links.forEach(link => {
  link.addEventListener('click', () => {
    ham.classList.remove('is-active');
    nav.classList.remove('is-active');
  });
})