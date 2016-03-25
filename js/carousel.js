$(document).ready(function(){
  $('.slick-carousel').slick();

  $('.modal').on('show.bs.modal', function (event) {

    // Button that triggered the modal
    var button = $(event.relatedTarget)

    // Extract info from data-* attributes
    var title = button.data('title');
    var url = button.data('url');
    var width = button.data('width');
    var height = button.data('height');

    var modal = $(this);
    modal.find('.modal-title').text(title)
    modal.find('.modal-body .media-embed').attr("src",url)
    //modal.find('.modal-body .video-embed').attr("width",width)
    //modal.find('.modal-body .video-embed').attr("height",height)
  });
});
