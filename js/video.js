var videos = ['nice_shot','helicopter_vs_russian','skeleton_song','drive_style','cat_war','deutch_kalitat','night_theme','golf','cat_club','i_fear_you', 'best_news', 'speed_run', 'good_man', 'shop', 'escape_anime', 'nice_presenter', 'speed_car', 'life', 'russian_kid', 'miku_dance', 'miku_gun', 'impro', 'miku_russian', 'monkey', 'ayaya']
var pagination = 10


$(document).ready(function () {
    var nbrPage = Math.trunc(videos.length / pagination)
    if (videos.length % pagination > 0) {
        nbrPage++
    }
    function parse_query_string(query) {
        var vars = query.split("&");
        var query_string = {};
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            // If first entry with this name
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = decodeURIComponent(pair[1]);
                // If second entry with this name
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
                query_string[pair[0]] = arr;
                // If third or later entry with this name
            } else {
                query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return query_string;
    }

    var result = parse_query_string(document.URL.split("?").pop())
    if (result.page <= 1 || result.page === undefined) {
        videos = videos.slice(0, pagination)
    } else {
        videos = videos.slice((result.page - 1) * pagination, result.page * pagination)
    }

    videos.forEach(function (video) {
        var title = video.replace(/_/g, " ")
            .toLowerCase().replace(/\b[a-z]/g, function (letter) {
                return letter.toUpperCase();
            });
        var url = "./video/" + video + ".webm"
        $('.content').append(
            '<div class="row">' +
            '<div class="col-md-7 video-container">' +
            '<h3>' + title + '</h3>' +
            '<video>' +
            '<source src=' + url + '>' +
            '</video>' +
            '</div>' +
            '</div>' +


            '<hr>'
        )
    });

    $('video').hover(function () {
        $(this).attr('controls', true);
    }, function () {
        $(this).attr('controls', false);
    });

    var pagePrev = (result.page-1 <= 0) ? 1 : result.page-1
    var pageNext = (result.page+1 > nbrPage) ? nbrPage : result.page+1

    $('.content').append('<ul style="margin-left: calc(50% - 34px * '+(nbrPage+2)+'/2)" class="pagination"></ul>')
    $('.pagination').append('<li><a href="?page='+pagePrev+'" class="prev">&laquo</a></li>')
    for(i = 1; i < nbrPage+1; i++){
        var active = (result.page == i ) ? 'active' : ''
        if(i === 1 && result.page === undefined){
            active = 'active'
        }
        $('.pagination').append('<li><a class="page '+active+'" href="?page='+i+'">'+i+'</a></li>')
    }
    $('.pagination').append('  <li><a href="?page='+pageNext+'" class="next">&raquo;</a></li>')


});