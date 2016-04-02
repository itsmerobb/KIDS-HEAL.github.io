function loadVideoContent (carousel, drawer, title, url, width, height){
  $(drawer).find('.drawer-content').html(
      '<div class="embed-responsive embed-responsive-16by9"> \
<iframe class="media-embed embed-responsive-item" \
src="" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> \
</div>');
  $(drawer).find(".media-embed").attr("src", url);
  if($(drawer).is(":visible")){
  }
  else{
    $(drawer).show();
  }
  $('html,body').animate({scrollTop: $(carousel).offset().top}, "slow");
}

function loadImageContent (carousel, drawer, title, url, width, height){
  $(drawer).find('.drawer-content').html("<img class='img-responsive' src='' />")
  $(drawer).find(".drawer-content img").attr("src", url);
  $(drawer).show();
  $('html,body').animate({scrollTop: $(carousel).offset().top}, "slow");
}

function closeContent (target){
  $(target).hide();
  $(target).find('.drawer-content').html("");
}

$(document).ready(function(){
  $('.slick-carousel').slick(
    {
      slidesToShow: 5,
      slidesToScroll: 5,
      dots: true,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
  );

  $(".carousel").each(
    function (event) {
      var carousel = $(this);
      var buttons  = carousel.find(".slick-carousel .thumb a");
      var drawer   = carousel.find(".drawer");
      var close    = drawer.find(".close-button");

      buttons.each(function (){

        var button = $(this);
        var title  = button.data('title');
        var url    = button.data('url');
        var width  = button.data('width');
        var height = button.data('height');

        switch (button.data('type')) {
        case "video":
          button.click(function(){
            loadVideoContent(carousel, drawer, title, url, width, height);
            return false;
          });
          break;
        case "image":
          button.click(function(){
            loadImageContent(carousel, drawer, title, url, width, height);
            return false;
          });
          break;
        }
      });

      close.click(function(){
        closeContent(drawer);
        return false;
      });
    }
  );
});
