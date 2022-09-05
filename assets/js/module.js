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
  $(".fade_img01 .fade_item:not(:first-child)").hide();
  setInterval(function () {
    $(".fade_img01 .fade_item:first-child")
      .fadeOut("slow")
      .next(".fade_item")
      .fadeIn("slow")
      .end()
      .appendTo(".fade_img01");
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