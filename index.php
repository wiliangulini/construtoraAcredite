<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, user-scalable=1">
    <meta name="description" content="Procurando Construir a casa dos seus sonhos sem dores de cabeça e gastos extras? Temos tudo que você precisa. Construtora Acredite." />
    <meta name="keywords" content="casa pronta, casa rápida, casa semipronta, venda de casa, comprar casa, comprar casa online, casa de madeira, casas de madeira, sobrados de madeira, sobrados de alvenaria, casas de alvenaria, casa pre fabricada, casas pre fabricadas, Casas Pre Fabricadas, Casas pré fabricadas, Casas em Alvenaria em Curitiba, Casas em Madeira em Curitiba, Construção Sobrados" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Wilian Gulini" />
    <title>Construtora Acredite | Casas Pre Fabricadas</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <style>
      section.background {
        background-image: url('assets/images/index/capa.webp');
      }     
      section.section {
        background-image: url('assets/images/projetos-alvenaria/Sombrio/10.webp');
      } 
      section.apresentacao {
        background-image: url('assets/images/index/video.webp');
      }
    </style>
    <link rel="shortcut icon" href="assets/images/logo/favicon.webp">
    <link rel="stylesheet" href="assets/css/header-footer.css" />
    <link rel="stylesheet" href="assets/css/section-mapa.css" />
    <link rel="stylesheet" href="assets/css/section-video.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
  </head>
  <body>
    <?php include 'assets/includes/header.php'; ?>
    <section class='background'>
      <div class='container'>
        <div class='row title'>
          <div class='titleInt'>
            <h1>Construtora <span class='laranja'>Acredite</span>,<br> prazer em estar!</h1>
            <img class="logoCentral" src="assets/images/logo/LOGO PRINCIPAL SEM FUNDO.webp" alt="logo central" />
          </div>
        </div>
      </div>
      <img class='wave' src='assets/images/wave.webp' alt="wave" />
    </section>
    <article>
      <div class="container">
        <div class="row one">
        <img class="logoWhite" src="assets/images/menina.webp" alt="logo white" />
        <h2>Oii, estou aqui para tirar seu maior desejo do papel</h2>
          <div class="col-sm-4 col-md-4 col-lg-4">
            <div class="txt">
              <p class="h4"><strong>Quer conhecer nossos projetos?</strong></p>
              <p class="h6 one">Separamos alguns para você</p>
            </div>
            <div class='button'>
              <a href='projetos.php' class='btn-orange'><strong><i>Clique aqui</i></strong></a>
            </div>
          </div>
          <div class="col-sm-4 col-md-4 col-lg-4">
            <div class="txt">
              <p class="h4"><strong>Se quiser tirar dúvidas</strong></p>
              <p class="h6">Estou aqui, é so me chamar no Whatsapp</p>
            </div>
            <div class='button'>
              <a target="_blank" href='https://api.whatsapp.com/send?phone=554197996053&amp;text=Entre+em+contato+agora' class='btn-orange'><strong><i>Clique aqui</i></strong></a>
            </div>
          </div>
          <div class="col-sm-4 col-md-4 col-lg-4">
            <div class="txt">
              <p class="h4"><strong>Quer nos conhecer</strong></p>
              <p class="h6 three">Vamos te contar a nossa história</p>
            </div>
            <div class='button'>
              <a href='empresa.php' class='btn-orange'><strong><i>Clique aqui</i></strong></a>
            </div>
          </div>
        </div>
        <div class="row foto justify-content-center">
          <div class="title">
            <p class='h1'><strong><span class='laranja'>PROJETOS</span></strong></p>
            <p class="h3">CONHEÇA OS PROJETOS QUE DESENVOLVEMOS PARA VOCÊ</p>
          </div>
          <div id="animate"></div>
          <div class="row photo" id="photo">
            <div class="col-sm-4 col-md-4 col-lg-4">
              <img src="assets/images/index/3.webp" alt="dunas do deserto" />
              <p class="h2">CASAS EM ALVENARIA</p>
              <div class="mask" >
                <div class="button zero d-flex justify-content-center w-100"><a onclick="cardSelect(this)" id='alvenaria' class="btn btn-grey" href="projetos.php"><strong>Saiba Mais</strong></a></div>
              </div>
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4">
              <img src="assets/images/index/2.webp" alt="dunas do deserto" />
              <p class="h2">CASAS EM MADEIRA</p>
              <div class="mask">
                <div class="button one d-flex justify-content-center w-100"><a onclick="cardSelect(this)" id='madeira' class="btn btn-grey" href="projetos.php"><strong>Saiba Mais</strong></a></div>
              </div>
            </div>
            <div class="col-sm-4 col-md-4 col-lg-4">
              <img src="assets/images/index/1.webp" alt="dunas do deserto" />
              <p class="h2">SOBRADOS</p>
              <div class="mask">
                <div class="button two d-flex justify-content-center w-100"><a onclick="cardSelect(this)" id='sobrados' class="btn btn-grey" href="projetos.php"><strong>Saiba Mais</strong></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-6 d-flex justify-content-between align-items-center">
            <img src="assets/images/projeto-personalizado.webp" alt='projeto personalizado imagem' />
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6 txt">
            <div class="title d-flex flex-column">
              <p class="h1 one"><span class='laranja'>Acredite</span></p>
            </div>
            <p class="h6">Trazemos mudança no mercado de construção, mostrando que é possivel ter excelência de atendimento, execução é entrega com um ótimo custo benefício.</p>
            <a href="contato.php" class="btn btn-orange">SAIBA MAIS</a>
          </div>
        </div>
      </div>
    </section>
    <section class="projetos">
      <div class="container">
        <div class="title">
          <p class='h1'><strong class='laranja'>PORTFÓLIO</strong></p>
          <p class="h3">CONHEÇA ALGUNS TRABALHOS REALIZADOS PELA CONSTRUTORA <span class="laranja">ACREDITE</span></p>
        </div>
        <div id="animate3"></div>
        <div class="row photo3" id="photo3">
          <div class="col-sm-2 col-md-2 col-lg-2">
            <img src="assets/images/index/portfolio/1.webp" alt="dunas do deserto" />
            <div class="mask" >
              <div class="button zero d-flex justify-content-center w-100"><a class="btn btn-grey" href="galeria.php"><strong>Veja Mais</strong></a></div>
            </div>
          </div>
          <div class="col-sm-2 col-md-2 col-lg-2">
            <img src="assets/images/index/portfolio/2.webp" alt="dunas do deserto" />
            <div class="mask">
              <div class="button one d-flex justify-content-center w-100"><a class="btn btn-grey" href="galeria.php"><strong>Veja Mais</strong></a></div>
            </div>
          </div>
          <div class="col-sm-2 col-md-2 col-lg-2">
            <img src="assets/images/index/portfolio/3.webp" alt="dunas do deserto" />
            <div class="mask">
              <div class="button two d-flex justify-content-center w-100"><a class="btn btn-grey" href="galeria.php"><strong>Veja Mais</strong></a></div>
            </div>
          </div>
          <div class="col-sm-2 col-md-2 col-lg-2">
            <img src="assets/images/index/portfolio/4.webp" alt="dunas do deserto" />
            <div class="mask">
              <div class="button one d-flex justify-content-center w-100"><a class="btn btn-grey" href="galeria.php"><strong>Veja Mais</strong></a></div>
            </div>
          </div>
          <div class="col-sm-2 col-md-2 col-lg-2">
            <img src="assets/images/index/portfolio/5.webp" alt="dunas do deserto" />
            <div class="mask">
              <div class="button two d-flex justify-content-center w-100"><a class="btn btn-grey" href="galeria.php"><strong>Veja Mais</strong></a></div>
            </div>
          </div>
        </div>
        <div id="animate4"></div>
        <div class="row photo4" id="photo4">
          <div class="col-sm-2 col-md-2 col-lg-2">
            <img src="assets/images/galeria/61.webp" alt="dunas do deserto" />
            <div class="mask" >
              <div class="button zero d-flex justify-content-center w-100"><a class="btn btn-grey" href="galeria.php"><strong>Veja Mais</strong></a></div>
            </div>
          </div>
          <div class="col-sm-2 col-md-2 col-lg-2">
            <img src="assets/images/index/portfolio/7.webp" alt="dunas do deserto" />
            <div class="mask">
              <div class="button one d-flex justify-content-center w-100"><a class="btn btn-grey" href="galeria.php"><strong>Veja Mais</strong></a></div>
            </div>
          </div>
          <div class="col-sm-2 col-md-2 col-lg-2">
            <img src="assets/images/index/portfolio/8.webp" alt="dunas do deserto" />
            <div class="mask">
              <div class="button two d-flex justify-content-center w-100"><a class="btn btn-grey" href="galeria.php"><strong>Veja Mais</strong></a></div>
            </div>
          </div>
          <div class="col-sm-2 col-md-2 col-lg-2">
            <img src="assets/images/index/portfolio/9.webp" alt="dunas do deserto" />
            <div class="mask">
              <div class="button one d-flex justify-content-center w-100"><a class="btn btn-grey" href="galeria.php"><strong>Veja Mais</strong></a></div>
            </div>
          </div>
          <div class="col-sm-2 col-md-2 col-lg-2">
            <img src="assets/images/galeria/15.webp" alt="dunas do deserto" />
            <div class="mask">
              <div class="button two d-flex justify-content-center w-100"><a class="btn btn-grey" href="galeria.php"><strong>Veja Mais</strong></a></div>
            </div>
          </div>
        </div>
        <div id="animate5"></div>
        <div class="row photo5" id="photo5">
          <div class="col-sm-2 col-md-2 col-lg-2">
            <img src="assets/images/galeria/21.webp" alt="dunas do deserto" />
            <div class="mask" >
              <div class="button zero d-flex justify-content-center w-100"><a class="btn btn-grey" href="galeria.php"><strong>Veja Mais</strong></a></div>
            </div>
          </div>
          <div class="col-sm-2 col-md-2 col-lg-2">
            <img src="assets/images/galeria/52.webp" alt="dunas do deserto" />
            <div class="mask">
              <div class="button one d-flex justify-content-center w-100"><a class="btn btn-grey" href="galeria.php"><strong>Veja Mais</strong></a></div>
            </div>
          </div>
          <div class="col-sm-2 col-md-2 col-lg-2">
            <img src="assets/images/index/portfolio/13.webp" alt="dunas do deserto" />
            <div class="mask">
              <div class="button two d-flex justify-content-center w-100"><a class="btn btn-grey" href="galeria.php"><strong>Veja Mais</strong></a></div>
            </div>
          </div>
          <div class="col-sm-2 col-md-2 col-lg-2">
            <img src="assets/images/index/portfolio/14.webp" alt="dunas do deserto" />
            <div class="mask">
              <div class="button one d-flex justify-content-center w-100"><a class="btn btn-grey" href="galeria.php"><strong>Veja Mais</strong></a></div>
            </div>
          </div>
          <div class="col-sm-2 col-md-2 col-lg-2">
            <img src="assets/images/index/portfolio/15.webp" alt="dunas do deserto" />
            <div class="mask">
              <div class="button two d-flex justify-content-center w-100"><a class="btn btn-grey" href="galeria.php"><strong>Veja Mais</strong></a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <article class="const">
      <div class="container">
        <div class="title">
          <p class="h1 laranja">ACOMPANHE NOSSAS REDES SOCIAIS</p>
        </div>
        <div class="row">
          <div class="col-sm-6 col-md-6 col-lg-6 d-flex flex-column align-items-center one">
            <div class="logo">
              <img src="assets/images/logo/LOGO PRINCIPAL SEM FUNDO.webp" alt="logo" />
            </div>
            <p class="h6">A equipe <span class="laranja">ACREDITE</span> esta pronta para te atender e tirar todas as suas dúvidas. Nossos projetos são personalizados de acordo com seu terreno e o valor que deseja investir!</p>
            <div class="social">
              <a target="_blank" href="https://api.whatsapp.com/send?phone=5541997996053&amp;text=Gostaria%20de%20agendar%20uma%20consulta%20com%20voc%C3%AAs"><img src="assets/images/index/whatsapp.webp" alt="whatsapp icon" class="whats" /></a>
              <a target="_blank" href="https://www.instagram.com/construtoraacredite/"><img src="assets/images/index/instagram.webp" alt="instagram icon" class="insta" /></a>
              <a target="_blank" href="https://www.facebook.com/construtoraacredite"><img src="assets/images/index/facebook.webp" alt="facebook icon" class="face" /></a>
              <a target="_blank" href="https://youtube.com/channel/UC3XPCjqTx2jsqQ-PYY0JSYQ"><img src="assets/images/index/youtube.webp" alt="youtube icon" class="youtube" /></a>
              <a href="tel:5541997996053"><img src="assets/images/index/telephone.webp" alt="telefone icon" class="tel" /></a>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-6">
            <div class="img d-flex justify-content-center">
              <img src="assets/images/index/cel.webp" alt="celular" />
            </div>
          </div>
        </div>
      </div>
    </article>
    <?php include "assets/includes/section-video.php"; ?>
    <?php include 'assets/includes/sectionMapa.php'; ?>
    <?php include 'assets/includes/btn-whats.php'; ?>
    <?php include 'assets/includes/footer.php'; ?>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="assets/js/script.js"></script>
    
  </body>
</html>