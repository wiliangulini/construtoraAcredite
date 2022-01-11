const q = (el) => document.querySelector(el);
const qa = (el) => document.querySelectorAll(el);

let button = document.getElementById('button');
let buttonPrev = document.getElementById('buttonPrev');

 
let Matinhos = () => {
    Alvenaria.map((foto, index) => {
    
    let Matinhos = foto.Matinhos;
    for(let i in Matinhos) {
      let col = q('.fotos .one').cloneNode(true);
            
      //data key pra pegar imagem
      col.setAttribute('data-key', i);
      //evento de clique pegando a key e usando no array pra pegar o src correto
      col.querySelector('.link').addEventListener('click', (e) => {

        //chave da imagem
        let key = e.target.closest('.one').getAttribute('data-key');

        //salvar chave da foto que abriu pra depois usar pra passar imagem
        localStorage.setItem('chave',key);
        
        //src da imagem
        let endereco = Matinhos[key];
                
        //remove class none de button e buttonPrev
        button.classList.remove('none');
        buttonPrev.classList.remove('none');
        
        if(localStorage.getItem('chave') == "2") {
          button.classList.add('none');
        }

        if(localStorage.getItem('chave') == "0") {
          buttonPrev.classList.add('none');
        }
        q('.divbox img').setAttribute('src', endereco);
        q('.divbox').style.display = 'block';
        q('.bgbox').style.display = 'block';

      });

      //passar imagem
      button.addEventListener('click', () => {
        if(buttonPrev.classList.contains('none') == true) {
          buttonPrev.classList.remove('none');
        }
        let chave = localStorage.getItem('chave');
        let n_chave = parseFloat(chave);
        let n_key = n_chave + 1;

        setTimeout(() => {
          localStorage.setItem('chave', n_key);
        }, 100);

        let n_end = Matinhos[n_key];
        
        if(n_key == 2) {

          console.log('entrou');
          button.classList.add('none');
          q('.divbox img').setAttribute('src', n_end);

        } else if(n_key >= 0 && n_key <= 1) {

          console.log('passou');
          q('.divbox img').setAttribute('src', n_end);

        }

      });
  
      //voltar imagem
      buttonPrev.addEventListener('click', () => {

        if(button.classList.contains('none') == true) {
          button.classList.remove('none');
        }

        let chave = localStorage.getItem('chave');
        let n_chave = parseFloat(chave);
        
        let n_key = n_chave - 1;

        setTimeout(() => {
          localStorage.setItem('chave', n_key);
        }, 100);

        let n_end = Matinhos[n_key];
        
        if(n_key == 0) {

          console.log('entrou');
          buttonPrev.classList.add('none');
          q('.divbox img').setAttribute('src', n_end);

        } else if(n_key >= 0 && n_key <= 1) {

          console.log('passou');
          q('.divbox img').setAttribute('src', n_end);

        }

      });
      //preencher info
      q('.insertFoto').append(col);
      col.querySelector('.photoHome').src = Matinhos[i];  
    }
  
  });
}

Matinhos();

//fechar bgbox e divbox
q('.bgbox').addEventListener('click', () => {
  q('.divbox').style.display = 'none';
  q('.bgbox').style.display = 'none';
});
document.getElementById('svg').addEventListener('click', () => {
  q('.divbox').style.display = 'none';
  q('.bgbox').style.display = 'none';
});