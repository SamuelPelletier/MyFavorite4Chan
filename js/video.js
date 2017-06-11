var videos = ['miku_dance','miku_gun','impro','miku_russian','monkey', 'ayaya']

$(document).ready(function(){
    videos.forEach(function(video) {
        var url = "./video/"+video+".webm"
        $('.content').append(
        '<div class="row">'+
            '<div class="col-md-7">'+
        '<h3>Miku Dance</h3>'+
            '<video controls>'+
        '<source src='+url+'>'+
            '</video>'+
            '</div>'+
            '</div>'+

        '<hr>'
        )
    });
});