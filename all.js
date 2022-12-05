// singleproduct

$('.innerimage').on('click',function(){
    var innerImgUrl = $(this).attr('src');
    $('#mainimage').attr('src',innerImgUrl);
    
})



