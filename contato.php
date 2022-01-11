<?php

include "phpmailer/class.phpmailer.php";

if(isset($_POST["nome"]) && !empty($_POST["nome"])) {

    $para_email = ($_POST["email"]);
    $para_nome = ($_POST["nome"]);
    $tel = ($_POST["tel"]);

    function email($para_email, $para_nome, $assunto, $html) {
        $mail2 = new PHPMailer;
        $mail2->IsSMTP();

       

        $mail2->From =$_POST["email "];
        $mail2->FromName = $_POST["nome"];

        $mail2->Host = "mail.construtoraacredite.com.br";
        $mail2->Port = 465;
        $mail2->SMTPAuth = true;
        $mail2->Username = "donjua00@construtoraacredite.com.br";
        $mail2->Password = "teste";
        $mail2->SMTPSecure = 'ssl';

        $mail2->setFrom('donjua00@construtoraacredite.com.br','Construtora Acredite');
        $mail2->AddAddress($para_email, $para_nome);

        $mail2->Subject = $assunto;

        $mail2->AltBody = "Para ver essa mensagem, use um programa compatível com HTML!";

        $mail2->MsgHTML($html);

        if ($mail2->Send()) {
            return "1";
        } else {
            return $mail2->ErrorInfo;
        }
    }

    $corpo_email = "<p>Nome: ".$para_nome."</p> <p>Email: ".$para_email."</p><p>Telefone: ".$tel."</p> <p>mensagem: ".$_POST["textarea"]."</p>";
    if(isset($_POST["submit"])) {
        email("construtora.acredite@gmail.com", $para_nome, $para_email, $corpo_email);

    }
    
    
}
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, user-scalable=1">
    <meta name="description" content="Todos os nosso projetos para analisar e ver qual lhe agrada. Temos tudo que você precisa. Construtora Acredite." />
    <meta name="keywords" content="casa pronta, casa rápida, casa semipronta, venda de casa, comprar casa, comprar casa online, casa de madeira, casas de madeira, sobrados de madeira, sobrados de alvenaria, casas de alvenaria, casa pre fabricada, casas pre fabricadas, Casas Pre Fabricadas, Casas pré fabricadas, Casas em Alvenaria em Curitiba, Casas em Madeira em Curitiba, Construção Sobrados" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Wilian Gulini" />
    <title>Contato</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <style>
      section.background {
        background-image: url('assets/images/index/capa.webp');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover ;
      } 
    </style>
    <link rel="shortcut icon" href="assets/images/logo/favicon.webp">
    <link rel="stylesheet" href="assets/css/header-footer.css" />
    <link rel="stylesheet" href="assets/css/contato.css" />
  </head>
  <body>
    <?php include 'assets/includes/header.php'; ?>

    <section class='background'>
      <div class='container'>
        <div class='row'>
          <div class='title'>
            <h1 class="contato"><strong class='laranja'>Contato: </strong></h1>
          </div>
        </div>
      </div>
      <img class="logoWhite" src="assets/images/menina.webp" alt="logo white" />
      <div class="relative">
        <div class="backWhite"></div>
        <h2>Deseja ver valores ou tirar algumas duvidas?<br> Nos ligue ou mande uma mensagem pelo whatssApp</h2>
      </div>
      </div>
      <img class='wave' src='assets/images/wave.webp' alt="wave" />
    </section>
    <section class="form">
      <div class="container">
        <div class="title">
          <p class="h2">Entre em contato conosco.</p>
          <p class="h2 laranja">Solicite um Orçamento</p>
          <div class="titleInt">
            <p class="h6">Nos conte sobre o seu projeto, vamos transformar seu sonho em realidade</p>
            <div class="control d-flex">
              <p>Nos envie um e-mail:</p>
            <a class="laranja" href="mailto:construtoraacredite@gmail.com" data-type="mail" data-content='construtoraacredite@gmail.com' data-auto-recognition="true">construtoraacredite@gmail.com</a>
            </div>
            <div class="control d-flex whats">
              <p>Ou então nos chame no <a href="https://api.whatsapp.com/send?phone=5541997996053&amp;text=Gostaria%20de%20agendar%20uma%20consulta%20com%20voc%C3%AAs">WhatsApp<img src="assets/images/index/whatsapp.webp" alt="whatsapp icon" class="whats" /></a></p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10">
            <form class="w-100 d-flex justify-content-center align-items-center flex-column" method="POST" action="">
              <input type="text" name="nome" placeholder="Seu Nome" required/>
              <input type="email" name="email" placeholder="Seu E-mail" required/>
              <input type="number" name="tel" placeholder="Seu Telefone" required/>
              <textarea name="textarea" placeholder="Sua Mensagem" required></textarea>
              <input type="submit" name="submit" value="Enviar" />
            </form>
          </div>
        </div>
      </div>
    </section>

    <?php include 'assets/includes/btn-whats.php'; ?>
    <?php include 'assets/includes/footer.php'; ?>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </body>
</html>