$(document).on('click', function (e) {
 if(e.target.type!="checkbox"){
    $('input[type="checkbox"]').attr('checked',false);
 }
});