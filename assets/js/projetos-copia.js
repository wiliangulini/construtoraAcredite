const q = (el) => document.querySelector(el);
const qa = (el) => document.querySelectorAll(el);

let arrowEsp = document.getElementById("arrowEsp");
let down_e = document.querySelector(".down.esp");
let filter = document.getElementById('filter');

let coluna = q('.fotos .one').cloneNode(true);
q('.insertFoto').append(coluna);
coluna.querySelector('.photoHome').src = Madeira[0].antonina[0];

 
let wood = () => {
  Madeira.map((foto, index) => {
    
    //antonina
    let antonina = foto.antonina;


    for(let i in antonina) {
      q('.fotos .one').classList.add('madeira');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('alvenaria');
      let col = q('.fotos .one').cloneNode(true);

      //ver foto ( em desenvolvimento );
      col.setAttribute('data-key', i);
      col.querySelector('.photoHome').addEventListener('click', (e) => {
        console.log('clicou');
      });

      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = antonina[i];  
    }
  
    //chacara madeira
    let medeira = foto.chacaraMadeira;
    
    for(let i in medeira) {
      q('.fotos .one').classList.add('madeira');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('alvenaria');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = medeira[i];  
    }
  
    //Chale
    let chale = foto.Chale;
  
    for(let i in chale) {
      q('.fotos .one').classList.add('madeira');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('alvenaria');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = chale[i];  
    }
  
    //Chale1
    let chale1 = foto.Chale1;
  
    for(let i in chale1) {
      q('.fotos .one').classList.add('madeira');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('alvenaria');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = chale1[i];  
    }
  
    //madeira
    let madeira = foto.madeira;
  
    for(let i in madeira) {
      q('.fotos .one').classList.add('madeira');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('alvenaria');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = madeira[i];  
    }
  
    //sobrados madeira
    let sobradoMadeira = foto.sobradoMadeira;
  
    for(let i in sobradoMadeira) {
      q('.fotos .one').classList.add('madeira');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('alvenaria');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = sobradoMadeira[i];  
    }
  
  
  });

}

let brickwork = () => {

  Alvenaria.map((foto1, index1) =>{

    //sombrio
    let sombrio = foto1.Sombrio;
  
    for(let i in sombrio) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = sombrio[i];  
    }
  
    //alvenaria
    let alvenaria = foto1.alvenaria;
  
    for(let i in alvenaria) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = alvenaria[i];  
    }
  
    //Alvenaria0
    let Alvenaria0 = foto1.Alvenaria0;
  
    for(let i in Alvenaria0) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Alvenaria0[i];  
    }
  
    //Alvenaria1
    let Alvenaria1 = foto1.Alvenaria1;
  
    for(let i in Alvenaria1) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Alvenaria1[i];  
    }
  
    //Alvenaria2
    let Alvenaria2 = foto1.Alvenaria2;
  
    for(let i in Alvenaria2) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Alvenaria2[i];  
    }
  
    //Alvenaria3
    let Alvenaria3 = foto1.Alvenaria3;
  
    for(let i in Alvenaria3) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Alvenaria3[i];  
    }
  
    //Alvenaria4
    let Alvenaria4 = foto1.Alvenaria4;
  
    for(let i in Alvenaria4) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Alvenaria4[i];  
    }
  
    //Alvenaria5
    let Alvenaria5 = foto1.Alvenaria5;
  
    for(let i in Alvenaria5) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Alvenaria5[i];  
    }
  
    //Alvenaria6
    let Alvenaria6 = foto1.Alvenaria6;
  
    for(let i in Alvenaria6) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Alvenaria6[i];  
    }
  
    //Alvenaria7
    let Alvenaria7 = foto1.Alvenaria7;
  
    for(let i in Alvenaria7) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Alvenaria7[i];  
    }
  
    //Alvenaria8
    let Alvenaria8 = foto1.Alvenaria8;
  
    for(let i in Alvenaria8) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Alvenaria8[i];  
    }
  
    //Alvenaria9
    let Alvenaria9 = foto1.Alvenaria9;
  
    for(let i in Alvenaria9) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Alvenaria9[i];  
    }
  
    //Alvenaria10
    let Alvenaria10 = foto1.Alvenaria10;
  
    for(let i in Alvenaria10) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Alvenaria10[i];  
    }
  
    //Alvenaria11
    let Alvenaria11 = foto1.Alvenaria11;
  
    for(let i in Alvenaria11) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Alvenaria11[i];  
    }
  
    //Alvenaria12
    let Alvenaria12 = foto1.Alvenaria12;
  
    for(let i in Alvenaria12) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Alvenaria12[i];  
    }
  
    //Alvenaria13
    let Alvenaria13 = foto1.Alvenaria13;
  
    for(let i in Alvenaria13) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Alvenaria13[i];  
    }
  
    //Alvenaria14
    let Alvenaria14 = foto1.Alvenaria14;
  
    for(let i in Alvenaria14) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Alvenaria14[i];  
    }
  
    //BairroAlto
    let BairroAlto = foto1.BairroAlto;
  
    for(let i in BairroAlto) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = BairroAlto[i];  
    }
  
    //CampoComprido
    let CampoComprido = foto1.CampoComprido;
  
    for(let i in CampoComprido) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = CampoComprido[i];  
    }
  
    //CIC
    let CIC = foto1.CIC;
  
    for(let i in CIC) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = CIC[i];  
    }
  
    //FazendaRioGrande
    let FazendaRioGrande = foto1.FazendaRioGrande;
  
    for(let i in FazendaRioGrande) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = FazendaRioGrande[i];  
    }
  
    //Guabirotuba
    let Guabirotuba = foto1.Guabirotuba;
  
    for(let i in Guabirotuba) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Guabirotuba[i];  
    }
  
    //Imbituba
    let Imbituba = foto1.Imbituba;
  
    for(let i in Imbituba) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Imbituba[i];  
    }
  
    //Mandirituba
    let Mandirituba = foto1.Mandirituba;
  
    for(let i in Mandirituba) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Mandirituba[i];  
    }
  
    //Matinhos
    let Matinhos = foto1.Matinhos;
  
    for(let i in Matinhos) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Matinhos[i];  
    }
  
    //Piraquara
    let Piraquara = foto1.Piraquara;
  
    for(let i in Piraquara) {
      q('.fotos .one').classList.add('alvenaria');
      q('.fotos .one').classList.remove('sobrados');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Piraquara[i];  
    }
  
  });

}

let loft = () => {

  Sobrados.map((foto2, index2) => {

    //Sobrado
    let Sobrado = foto2.Sobrado;
  
    for(let i in Sobrado) {
      q('.fotos .one').classList.add('sobrados');
      q('.fotos .one').classList.remove('alvenaria');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Sobrado[i];  
    }
  
    //Sobrado1
    let Sobrado1 = foto2.Sobrado1;
  
    for(let i in Sobrado1) {
      q('.fotos .one').classList.add('sobrados');
      q('.fotos .one').classList.remove('alvenaria');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Sobrado1[i];  
    }
  
    //Sobrado2
    let Sobrado2 = foto2.Sobrado2;
  
    for(let i in Sobrado2) {
      q('.fotos .one').classList.add('sobrados');
      q('.fotos .one').classList.remove('alvenaria');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Sobrado2[i];  
    }
  
    //Sobrado3
    let Sobrado3 = foto2.Sobrado3;
  
    for(let i in Sobrado3) {
      q('.fotos .one').classList.add('sobrados');
      q('.fotos .one').classList.remove('alvenaria');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Sobrado3[i];  
    }
  
    //Sobrado4
    let Sobrado4 = foto2.Sobrado4;
  
    for(let i in Sobrado4) {
      q('.fotos .one').classList.add('sobrados');
      q('.fotos .one').classList.remove('alvenaria');
      q('.fotos .one').classList.remove('madeira');
      let col = q('.fotos .one').cloneNode(true);
  
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Sobrado4[i];  
    }
  
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

//inciar com seleçao TODOS 
brickwork(); 
wood();
loft();

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

// ver foto
$(() => {
  $('.insertFoto .one .photoHome').on('click', () => {
    let img = $('.insertFoto .one .photoHome').attr('src');
    $(".divbox img").attr("src",img);

    $(".bgbox, .divbox").fadeIn("fast");
    
  });

  $(".bgbox, #svg").on("click", () => {
    $(".bgbox, .divbox").fadeOut("fast");
  });

});
