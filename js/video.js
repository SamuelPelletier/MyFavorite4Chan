var videos = ['best_news','speed_run','good_man','shop','escape_anime','nice_presenter','speed_car','life','russian_kid','miku_dance','miku_gun','impro','miku_russian','monkey', 'ayaya']

$(document).ready(function(){
    videos.forEach(function(video) {
        var title = video.replace("_", " ")
        .toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        var url = "./video/"+video+".webm"
        $('.content').append(
        '<div class="row">'+
            '<div class="col-md-7 video-container">'+
        '<h3>'+title+'</h3>'+
            '<video>'+
        '<source src='+url+'>'+
            '</video>'+
            '</div>'+
            '</div>'+


        '<hr>'
        )
    });

    $('video').hover(function (){
        $(this).attr('controls', true);
    }, function(){
        $(this).attr('controls', false);
    });



});