function maybeOpenDrawer (carousel, drawer){
  if($(drawer).is(":visible")){
  }
  else{
    $(drawer).show();
  }
  $('html,body').animate({scrollTop: $(carousel).offset().top}, "slow");
}

function closeDrawer (target){
  $(target).hide();
  $(target).find('.drawer-content').html("");
}

function loadVideoContent (target, title, url, width, height){
  target.html($('<div></div>', { class: 'embed-responsive embed-responsive-16by9' })
              .append($('<iframe></iframe>', { class: 'media-embed embed-responsive-item',
                                               src: url })
                      .attr('webkitallowfullscreen','')
                      .attr('mozallowfullscreen','')
                      .attr('allowfullscreen','')));
}

function loadImageContent (target, title, url, width, height){
  target.html($('<img />', { class: 'img-responsive', src: url, alt: title }));
}

function loadHTMLContent (target, title, url, width, height){
  target.load(url.concat(" .container-fluid"));
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
      var target   = drawer.find('.drawer-content');

      buttons.each(function (){

        var button = $(this);
        var title  = button.data('title');
        var url    = button.data('url');
        var width  = button.data('width');
        var height = button.data('height');

        switch (button.data('type')) {
        case "video":
          button.click(function(){
            loadVideoContent(target, title, url, width, height);
            $(drawer).css('max-width', width);
            maybeOpenDrawer(carousel, drawer);
            return false;
          });
          break;
        case "image":
          button.click(function(){
            loadImageContent(target, title, url, width, height);
            $(drawer).css('max-width', '50%');
            maybeOpenDrawer(carousel, drawer);
            return false;
          });
          break;
        case "html":
          button.click(function(){
            loadHTMLContent(target, title, url, width, height);
            $(drawer).css('max-width', '100%');
            maybeOpenDrawer(carousel, drawer);
            return false;
          });
          break;
        }
      });

      close.click(function(){
        closeDrawer(drawer);
        return false;
      });
    }
  );
});
