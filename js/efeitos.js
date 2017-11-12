$('#menu').on('show.bs.collapse', function(){
    $('.banner-header').css('transform', 'translate(-50%, 0%)');
});

$('#menu').on('hide.bs.collapse', function(){
    $('.banner-header').css('transform', 'translate(-50%, -50%)');
});