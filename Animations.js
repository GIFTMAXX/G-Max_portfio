document.addEventListener("mousemove", (e) => {
  const shadow = document.querySelector(".mouse-shadow");
  shadow.style.left = `${e.clientX}px`;
  shadow.style.top = `${e.clientY}px`;
});

const shadow = document.getElementById('shadow');
    document.addEventListener('mousemove', e => {
      shadow.style.left = e.pageX + 'px';
      shadow.style.top = e.pageY + 'px';
    });

    const launchBtn = document.getElementById('launchBtn');
    const backBtn = document.getElementById('backBtn');
    const hero = document.getElementById('hero');
    const secondPage = document.getElementById('secondPage');

    launchBtn.addEventListener('click', e => {
      e.preventDefault();
      hero.classList.add('zoom-out');
      setTimeout(() => {
        hero.style.display = 'none';
        secondPage.classList.add('active');
      }, 1000);
    });

    backBtn.addEventListener('click', () => {
      secondPage.classList.remove('active');
      hero.style.display = 'flex';
      setTimeout(() => {
        hero.classList.remove('zoom-out');
        hero.classList.add('zoom-in');
        setTimeout(() => {
          hero.classList.remove('zoom-in');
        }, 1000);
      }, 100);
    });
    logoClick.addEventListener('click', () => {
      secondPage.classList.remove('active');
      hero.style.display = 'flex';
      setTimeout(() => {
        hero.classList.remove('zoom-out');
        hero.classList.add('zoom-in');
        setTimeout(() => {
          hero.classList.remove('zoom-in');
        }, 1000);
      }, 100);
    });