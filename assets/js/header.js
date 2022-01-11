let nav = document.getElementById('navbarDropdown');
let drop = document.querySelector('.dropdown-menu');

nav.addEventListener('mouseover', () => {
  drop.style.display = 'block';
});
nav.addEventListener('mouseout', () => {
  drop.style.display = 'none';
});
drop.addEventListener('mouseover', () => {
  drop.style.display = 'block';
});
drop.addEventListener('mouseout', () => {
  drop.style.display = 'none';
});

//menu select - pegar id do menu armazenar em localStorage pra depois usar no filtro e fazer a seleçao em projetos;
let menuSelect = (e) => {
  let id_menu = e.id;

  localStorage.setItem('id_menu', id_menu);
}


//footer select - pegar id do footer armazenar em localStorage pra depois usar no filtro e fazer a seleçao em projetos;
let footerSelect = (e) => {
  let id_menu = e.id;

  localStorage.setItem('id_menu', id_menu);
}

if(screen.width <= 768) {
  document.querySelector('.nav-link.dropdown-toggle').setAttribute('href','javascript:void(0);');
}

window.addEventListener('scroll', () => {
  if(window.scrollY >= 40) {
    document.querySelector('.headerBack').style.mixBlendMode = "normal";
    document.querySelector('.headerBack').style.background = "#FFF";
    document.querySelectorAll('.nav-link').forEach((e) => {
      e.style.color = "#000";
    });
    document.querySelector('.navbar-brand img').setAttribute('src','assets/images/logo/logo-menu.webp');
  } else {
    document.querySelector('.headerBack').style.mixBlendMode = "multiply";
    document.querySelector('.headerBack').style.background = "#ddd";
    document.querySelectorAll('.nav-link').forEach((e) => {
      if(screen.width <= 768) {
        e.style.color = "#fb7b22";
      } else {
        e.style.color = "#fff";
      }
    });
    document.querySelector('.navbar-brand img').setAttribute('src','assets/images/index/logo.webp');
  }

  if(screen.width <= 768) {
    if(window.scrollY >= 40) {
      document.querySelector('.navbar-toggler-icon svg').style.fill = "#000";
    } else {
      document.querySelector('.navbar-toggler-icon svg').style.fill = "#fff";
    }
  }
});