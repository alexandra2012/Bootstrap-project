$(document).ready(function(){
    $('[data-bs-toggle="popover"]').popover();
    $('[data-bs-toggle="tooltip"]').tooltip();
 
    $('#liveToastBtn').click(() => {
      $('.toast').toast('show')
    })
});
