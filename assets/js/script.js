//seleciona os elementos que contem a animaçao
let elem = $("#animate");
let rowPhoto = $("#photo")

function scrollAnimate(elem) {
  let docViewTop = $(window).scrollTop();
  let docViewBottom = docViewTop + $(window).height();

  let elemTop = $(elem).offset().top;
  let elemBottom = elemTop + $(elem).height();

  return((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).on("scroll", function() {
  if(scrollAnimate(elem)) {
    rowPhoto.addClass('animate__animated');
    rowPhoto.addClass('animate__fadeInUp');
    rowPhoto.css("--animate-duration","1s");
  }
});

//photo3
let elemento3 = $("#animate3");
let rowPhoto3 = $("#photo3")

function scrollAnimateThree(elemento3) {
  let docViewTopThree = $(window).scrollTop();
  let docViewBottomThree = docViewTopThree + $(window).height();

  let elemTopThree = $(elemento3).offset().top;
  let elemBottomThree = elemTopThree + $(elemento3).height();

  return((elemBottomThree <= docViewBottomThree) && (elemTopThree >= docViewTopThree));
}

$(window).on("scroll", function() {
  if(scrollAnimateThree(elemento3)) {
    rowPhoto3.addClass('animate__animated');
    rowPhoto3.addClass('animate__fadeInUp');
    rowPhoto3.css("--animate-duration","1s");
  }
});

//photo4
let elemento4 = $("#animate4");
let rowPhoto4 = $("#photo4")

function scrollAnimateFour(elemento4) {
  let docViewTopFour = $(window).scrollTop();
  let docViewBottomFour = docViewTopFour + $(window).height();

  let elemTopFour = $(elemento4).offset().top;
  let elemBottomFour = elemTopFour + $(elemento4).height();

  return((elemBottomFour <= docViewBottomFour) && (elemTopFour >= docViewTopFour));
}

$(window).on("scroll", function() {
  if(scrollAnimateFour(elemento4)) {
    rowPhoto4.addClass('animate__animated');
    rowPhoto4.addClass('animate__fadeInUp');
    rowPhoto4.css("--animate-duration","1s");
  }
});

//photo5
let elemento5 = $("#animate5");
let rowPhoto5 = $("#photo5")

function scrollAnimateFive(elemento5) {
  let docViewTopFive = $(window).scrollTop();
  let docViewBottomFive = docViewTopFive + $(window).height();

  let elemTopFive = $(elemento5).offset().top;
  let elemBottomFive = elemTopFive + $(elemento5).height();

  return((elemBottomFive <= docViewBottomFive) && (elemTopFive >= docViewTopFive));
}

$(window).on("scroll", function() {
  if(scrollAnimateFive(elemento5)) {
    rowPhoto5.addClass('animate__animated');
    rowPhoto5.addClass('animate__fadeInUp');
    rowPhoto5.css("--animate-duration","1s");
  }
});

//card select - pegar id dos 3 cards grande armazenar em localStorage pra depois usar no filtro e fazer a seleçao em projetos;
let cardSelect = (e) => {
  let id_menu = e.id;

  localStorage.setItem('id_menu', id_menu);
}