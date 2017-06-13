var videos = ['life','russian_kid','miku_dance','miku_gun','impro','miku_russian','monkey', 'ayaya']

$(document).ready(function(){
    videos.forEach(function(video) {
        var title = video.replace("_", " ")
        .toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        var url = "./video/"+video+".webm"
        $('.content').append(
        '<div class="row">'+
            '<div class="col-md-7">'+
        '<h3>'+title+'</h3>'+
            '<video controls>'+
        '<source src='+url+'>'+
            '</video>'+
            '</div>'+
            '</div>'+

        '<hr>'
        )
    });
});