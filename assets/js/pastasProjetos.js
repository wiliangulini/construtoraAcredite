const c = (el) => document.querySelector(el);
const ca = (el) => document.querySelectorAll(el);

let arrowEsp = document.getElementById("arrowEsp");
let down_e = document.querySelector(".down.esp");
let filter = document.getElementById('filter');

//ALVENARIA PASTAS
let Sombrio = () => {
  //Sombrio
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('Sombrio');
  coluna.querySelector('.photoHome').src = Alvenaria[0].Sombrio[0];

  c('.alvenaria.Sombrio').addEventListener('click', () => {
    window.location.href = 'sombrio.php';
  });
}

let alvenaria = () => {
  //alvenaria
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('alvenariaInt');
  coluna.querySelector('.photoHome').src = Alvenaria[2].alvenaria[0];

  c('.alvenaria.alvenariaInt').addEventListener('click', () => {
    window.location.href = 'alvenaria.php';
  });
}

let Alvenaria0 = () => {
  //Alvenaria0
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('Alvenaria0');
  coluna.querySelector('.photoHome').src = Alvenaria[1].Alvenaria0[0];

  c('.alvenaria.Alvenaria0').addEventListener('click', () => {
    window.location.href = 'alvenaria0.php';
  });
}

let Alvenaria1 = () => {
  //Alvenaria1
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('Alvenaria1');
  coluna.querySelector('.photoHome').src = Alvenaria[3].Alvenaria1[0];

  c('.alvenaria.Alvenaria1').addEventListener('click', () => {
    window.location.href = 'alvenaria1.php';
  });
}

let Alvenaria2 = () => {
  //Alvenaria2
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('Alvenaria2');
  coluna.querySelector('.photoHome').src = Alvenaria[4].Alvenaria2[0];

  c('.alvenaria.Alvenaria2').addEventListener('click', () => {
    window.location.href = 'alvenaria2.php';
  });
}

let Alvenaria3 = () => {
  //Alvenaria3
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('Alvenaria3');
  coluna.querySelector('.photoHome').src = Alvenaria[5].Alvenaria3[1];

  c('.alvenaria.Alvenaria3').addEventListener('click', () => {
    window.location.href = 'alvenaria3.php';
  });
}

let Alvenaria4 = () => {
  //Alvenaria4
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('Alvenaria4');
  coluna.querySelector('.photoHome').src = Alvenaria[6].Alvenaria4[0];

  c('.alvenaria.Alvenaria4').addEventListener('click', () => {
    window.location.href = 'alvenaria4.php';
  });
}

let Alvenaria5 = () => {
  //Alvenaria5
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('Alvenaria5');
  coluna.querySelector('.photoHome').src = Alvenaria[7].Alvenaria5[0];

  c('.alvenaria.Alvenaria5').addEventListener('click', () => {
    window.location.href = 'alvenaria5.php';
  });
}

let Alvenaria6 = () => {
  //Alvenaria6
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('Alvenaria6');
  coluna.querySelector('.photoHome').src = Alvenaria[8].Alvenaria6[0];

  c('.alvenaria.Alvenaria6').addEventListener('click', () => {
    window.location.href = 'alvenaria6.php';
  });
}

let Alvenaria7 = () => {
  //Alvenaria7
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('Alvenaria7');
  coluna.querySelector('.photoHome').src = Alvenaria[9].Alvenaria7[0];

  c('.alvenaria.Alvenaria7').addEventListener('click', () => {
    window.location.href = 'alvenaria7.php';
  });
}

let Alvenaria8 = () => {
  //Alvenaria8
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('Alvenaria8');
  coluna.querySelector('.photoHome').src = Alvenaria[10].Alvenaria8[0];

  c('.alvenaria.Alvenaria8').addEventListener('click', () => {
    window.location.href = 'alvenaria8.php';
  });
}

let Alvenaria9 = () => {
  //Alvenaria9
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('Alvenaria9');
  coluna.querySelector('.photoHome').src = Alvenaria[11].Alvenaria9[0];

  c('.alvenaria.Alvenaria9').addEventListener('click', () => {
    window.location.href = 'alvenaria9.php';
  });
}

let Alvenaria10 = () => {
  //Alvenaria10
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('Alvenaria10');
  coluna.querySelector('.photoHome').src = Alvenaria[12].Alvenaria10[0];

  c('.alvenaria.Alvenaria10').addEventListener('click', () => {
    window.location.href = 'alvenaria10.php';
  });
}

let Alvenaria11 = () => {
  //Alvenaria11
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('Alvenaria11');
  coluna.querySelector('.photoHome').src = Alvenaria[13].Alvenaria11[0];

  c('.alvenaria.Alvenaria11').addEventListener('click', () => {
    window.location.href = 'alvenaria11.php';
  });
}

let Alvenaria12 = () => {
  //Alvenaria12
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('Alvenaria12');
  coluna.querySelector('.photoHome').src = Alvenaria[14].Alvenaria12[0];

  c('.alvenaria.Alvenaria12').addEventListener('click', () => {
    window.location.href = 'alvenaria12.php';
  });
}

let Alvenaria13 = () => {
  //Alvenaria13
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('Alvenaria13');
  coluna.querySelector('.photoHome').src = Alvenaria[15].Alvenaria13[0];

  c('.alvenaria.Alvenaria13').addEventListener('click', () => {
    window.location.href = 'alvenaria13.php';
  });
}

let Alvenaria14 = () => {
  //Alvenaria14
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('Alvenaria14');
  coluna.querySelector('.photoHome').src = Alvenaria[16].Alvenaria14[9];

  c('.alvenaria.Alvenaria14').addEventListener('click', () => {
    window.location.href = 'alvenaria14.php';
  });
}

let BairroAlto = () => {
  //BairroAlto
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('BairroAlto');
  coluna.querySelector('.photoHome').src = Alvenaria[17].BairroAlto[0];

  c('.alvenaria.BairroAlto').addEventListener('click', () => {
    window.location.href = 'bairro-alto.php';
  });
}

let CampoComprido = () => {
  //CampoComprido
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('CampoComprido');
  coluna.querySelector('.photoHome').src = Alvenaria[18].CampoComprido[0];

  c('.alvenaria.CampoComprido').addEventListener('click', () => {
    window.location.href = 'campo-comprido.php';
  });
}

let CIC = () => {
  //CIC
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('CIC');
  coluna.querySelector('.photoHome').src = Alvenaria[19].CIC[10];

  c('.alvenaria.CIC').addEventListener('click', () => {
    window.location.href = 'CIC.php';
  });
}

let FazendaRioGrande = () => {
  //FazendaRioGrande
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('FazendaRioGrande');
  coluna.querySelector('.photoHome').src = Alvenaria[20].FazendaRioGrande[0];

  c('.alvenaria.FazendaRioGrande').addEventListener('click', () => {
    window.location.href = 'fazenda-rio-grande.php';
  });
}

let Guabirotuba = () => {
  //Guabirotuba
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('Guabirotuba');
  coluna.querySelector('.photoHome').src = Alvenaria[21].Guabirotuba[0];

  c('.alvenaria.Guabirotuba').addEventListener('click', () => {
    window.location.href = 'guabirotuba.php';
  });
}

let Imbituba = () => {
  //Imbituba
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('Imbituba');
  coluna.querySelector('.photoHome').src = Alvenaria[22].Imbituba[0];

  c('.alvenaria.Imbituba').addEventListener('click', () => {
    window.location.href = 'imbituba.php';
  });
}

let Mandirituba = () => {
  //Mandirituba
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('Mandirituba');
  coluna.querySelector('.photoHome').src = Alvenaria[23].Mandirituba[0];

  c('.alvenaria.Mandirituba').addEventListener('click', () => {
    window.location.href = 'mandirituba.php';
  });
}

let Matinhos = () => {
  //Matinhos
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('Matinhos');
  coluna.querySelector('.photoHome').src = Alvenaria[24].Matinhos[2];

  c('.alvenaria.Matinhos').addEventListener('click', () => {
    window.location.href = 'matinhos.php';
  });
}

let Piraquara = () => {
  //Piraquara
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('alvenaria');
  coluna.classList.add('Piraquara');
  coluna.querySelector('.photoHome').src = Alvenaria[25].Piraquara[0];

  c('.alvenaria.Piraquara').addEventListener('click', () => {
    window.location.href = 'piraquara.php';
  });
}

Sombrio();
Alvenaria0();
BairroAlto();
Imbituba();
FazendaRioGrande();
Mandirituba();
Alvenaria8();
Alvenaria11();
Alvenaria10();
Alvenaria7();
Piraquara();
Alvenaria6();
Matinhos();
Alvenaria12();
CampoComprido();
Alvenaria13();
Alvenaria3();
Alvenaria14();
Alvenaria1();
Alvenaria5();
Alvenaria2();
Alvenaria9();

alvenaria();
Alvenaria4();
CIC();
//Guabirotuba();


//MADEIRA PASTAS
let antonina = () => {
  //antonina
  let coluna = c('.fotos .one').cloneNode(true); 
  c('.insertFoto').append(coluna);
  coluna.classList.add('madeira');
  coluna.classList.add('antonina');
  coluna.querySelector('.photoHome').src = Madeira[0].antonina[0];

  c('.madeira.antonina').addEventListener('click', () => {
    window.location.href = 'antonina.php';
  });
}

let chacaraMedeira = () => {
  //chacara medeira
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('madeira');
  coluna.classList.add('chacaraMedeira');
  coluna.querySelector('.photoHome').src = Madeira[1].chacaraMadeira[0];
  
  c('.madeira.chacaraMedeira').addEventListener('click', () => {
    window.location.href = 'chacara-medeira.php';
  });
}

let Chale = () => {
  //Chale
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('madeira');
  coluna.classList.add('Chale');
  coluna.querySelector('.photoHome').src = Madeira[2].Chale[0];

  c('.madeira.Chale').addEventListener('click', () => {
    window.location.href = 'chale.php';
  });
}

let Chale1 = () => {
  //Chale1
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('madeira');
  coluna.classList.add('Chale1');
  coluna.querySelector('.photoHome').src = Madeira[3].Chale1[1];

  c('.madeira.Chale1').addEventListener('click', () => {
    window.location.href = 'chale1.php';
  });
}

let madeira = () => {
  //madeira
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('madeira');
  coluna.classList.add('madeira1');
  coluna.querySelector('.photoHome').src = Madeira[4].madeira[0];

  c('.madeira.madeira1').addEventListener('click', () => {
    window.location.href = 'madeira.php';
  });
}

let sobradoMadeira = () => {
  //sobradoMadeira
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('madeira');
  coluna.classList.add('sobradoMadeira');
  coluna.querySelector('.photoHome').src = Madeira[5].sobradoMadeira[0];

  c('.madeira.sobradoMadeira').addEventListener('click', () => {
    window.location.href = 'sobrados-madeira.php';
  });
}

Chale1();
madeira();
Chale();
chacaraMedeira();
antonina();
sobradoMadeira();

//SOBRADOS PASTAS

let Sobrado = () => {
  //Sobrado
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('sobrados');
  coluna.classList.add('Sobrado');
  coluna.querySelector('.photoHome').src = Sobrados[0].Sobrado[1];

  c('.sobrados.Sobrado').addEventListener('click', () => {
    window.location.href = 'Sobrado.php';
  });
}

let Sobrado1 = () => {
  //Sobrado1
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('sobrados');
  coluna.classList.add('Sobrado1');
  coluna.querySelector('.photoHome').src = Sobrados[1].Sobrado1[0];

  c('.sobrados.Sobrado1').addEventListener('click', () => {
    window.location.href = 'Sobrado1.php';
  });
}

let Sobrado2 = () => {
  //Sobrado2
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('sobrados');
  coluna.classList.add('Sobrado2');
  coluna.querySelector('.photoHome').src = Sobrados[2].Sobrado2[1];

  c('.sobrados.Sobrado2').addEventListener('click', () => {
    window.location.href = 'Sobrado2.php';
  });
}

let Sobrado3 = () => {
  //Sobrado3
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('sobrados');
  coluna.classList.add('Sobrado3');
  coluna.querySelector('.photoHome').src = Sobrados[3].Sobrado3[0];

  c('.sobrados.Sobrado3').addEventListener('click', () => {
    window.location.href = 'Sobrado3.php';
  });
}

let Sobrado4 = () => {
  //Sobrado4
  let coluna = c('.fotos .one').cloneNode(true);
  c('.insertFoto').append(coluna);
  coluna.classList.add('sobrados');
  coluna.classList.add('Sobrado4');
  coluna.querySelector('.photoHome').src = Sobrados[4].Sobrado4[1];

  c('.sobrados.Sobrado4').addEventListener('click', () => {
    window.location.href = 'Sobrado4.php';
  });
}

Sobrado();
Sobrado4();
Sobrado1();
Sobrado2();
Sobrado3();


//remove e add items ; 

let removeSobrados = () => {
  document.querySelectorAll('.sobrados').forEach((e) => {
    e.style.opacity = 0;
    setTimeout(() => {
      e.classList.add('none');
      e.classList.remove('block');
      e.style.opacity = 1;
    },250);
  });
}

let removeMadeira = () => {
  document.querySelectorAll('.madeira').forEach((e) => {
    e.style.opacity = 0;
    setTimeout(() => {
    e.classList.add('none');
    e.classList.remove('block');
      e.style.opacity = 1;
    },250);
  });
}

let removeAlvenaria = () => {
  document.querySelectorAll('.alvenaria').forEach((e) => {
    e.style.opacity = 0;
    setTimeout(() => {
    e.classList.add('none');
    e.classList.remove('block');
      e.style.opacity = 1;
    },250);
  });
}

let addSobrados = () => {
  document.querySelectorAll('.sobrados').forEach((e) => {
    e.style.opacity = 0;
    setTimeout(() => {
      e.classList.add('block');
      e.classList.remove('none');
      e.style.opacity = 1;
    },250);
  });
}

let addMadeira = () => {
  document.querySelectorAll('.madeira').forEach((e) => {
    e.style.opacity = 0;
    setTimeout(() => {
      e.classList.add('block');
      e.classList.remove('none');
      e.style.opacity = 1;
    },250);
  });
}

let addAlvenaria = () => {
  document.querySelectorAll('.alvenaria').forEach((e) => {
    e.style.opacity = 0;
    setTimeout(() => {
      e.classList.add('block');
      e.classList.remove('none');
      e.style.opacity = 1;
    },250);
  });
}


let downEsp = () => {
  
  if(down_e.style.display == "none") {
    
    down_e.style.opacity = 0;
    down_e.style.display = "block";
    setTimeout(() =>{
      down_e.style.opacity = 0.25;
      arrowEsp.style.transform = "rotate(45deg)";
    }, 100);
    setTimeout(() => {
      down_e.style.opacity = 0.5;
      arrowEsp.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down_e.style.opacity = 0.75;
      arrowEsp.style.transform = "rotate(135deg)";
    }, 200);
    setTimeout(() => {
      down_e.style.opacity = 1;
      arrowEsp.style.transform = "rotate(180deg)";
    }, 250); 

  } else if(down_e.style.display == "block") {

    down_e.style.opacity = 1;
    setTimeout(() => {
      down_e.style.opacity = 0.75;
      arrowEsp.style.transform = "rotate(135deg)";
    }, 100);
    setTimeout(() =>{
      down_e.style.opacity = 0.5;
      arrowEsp.style.transform = "rotate(90deg)";
    }, 150);
    setTimeout(() =>{
      down_e.style.opacity = 0.25;
      arrowEsp.style.transform = "rotate(45deg)";
    }, 200);
    setTimeout(() => {
      down_e.style.opacity = 0;
      arrowEsp.style.transform = "rotate(0deg)";
      down_e.style.display = "none";
    }, 250);  

  }
}

//filter-down
filter.addEventListener('click', () => {
  downEsp();
});

document.getElementById('arrowEsp').addEventListener('click', () => {
  downEsp();
});


//filter click
let radiocontainer = (elmnt) => {
  let n = elmnt.id;

  if(n == 'label0') {
    addAlvenaria();
    addMadeira();
    addSobrados();
  }else if(n == 'label1') {
    addAlvenaria();
    removeMadeira();
    removeSobrados();

  }else if(n == 'label2') {
    addMadeira();
    removeSobrados();
    removeAlvenaria();

  }else if(n == 'label3') {
    addSobrados();
    removeMadeira();
    removeAlvenaria();
  }

  let txt = document.getElementById(n).innerText;
  filter.innerHTML = txt;
  downEsp();
}


//menu, seleçao de projetos, com filtros na pagina ja aplicados ao abrir.

let menuID = localStorage.getItem('id_menu');

if(menuID == 'p-all' || menuID == 'all') {
  addAlvenaria();
  addMadeira();
  addSobrados();
  filter.innerHTML = "Todos";
}else if(menuID == 'p-brickwork' || menuID == 'alvenaria' || menuID == 'f_alvenaria') {
  addAlvenaria();
  removeMadeira();
  removeSobrados();
  filter.innerHTML = "Projetos de Alvenaria";
}else if(menuID == 'p-wood' || menuID == 'madeira' || menuID == 'f_madeira') {
  addMadeira();
  removeSobrados();
  removeAlvenaria();
  filter.innerHTML = "Projetos de Madeira";
}else if(menuID == 'p-loft' || menuID == 'sobrados' || menuID == 'f_sobrados') {
  addSobrados();
  removeMadeira();
  removeAlvenaria();
  filter.innerHTML = "Sobrados";
}

