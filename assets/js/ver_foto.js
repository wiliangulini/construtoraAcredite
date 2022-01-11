/* ver foto
$(() => {
  $('.link').on('click', () => {
    let img = $(this).find('img').attr('src');
    $(".divbox img").attr("src",img);

    $(".bgbox, .divbox").fadeIn("fast");
    
  });

  $(".bgbox, #svg").on("click", () => {
    $(".bgbox, .divbox").fadeOut("fast");
  });

});


 ver foto ( em desenvolvimento );
 col.setAttribute('data-key', i);
 col.querySelector('.photoHome').addEventListener('click', (e) => {
   console.log('clicou');
 });*/