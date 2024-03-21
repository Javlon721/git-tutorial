function increment(el) {
  const btn = document.querySelector(el);
  const incrementEl = document.querySelector('.counter__number');
  btn.addEventListener("click", () => {
    console.log(true)
    incrementEl.innerHTML = +incrementEl.innerHTML + 1;
    console.log(window.innerWidth)
     console.log(window.innerHeight)
  });
}
