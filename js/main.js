
var source = $("#card-template").html();
var template = Handlebars.compile(source);

$('.generi').find('li').click(function () {
    $('.generi').find('li').removeClass('active');
    $(this).addClass('active');
    var selectedGen = $(this).text();
    if (selectedGen == "" || selectedGen == 'ALL'){
        $('.card').show();
    }else {
        $('.card').each(function () {
            if(selectedGen.toLowerCase() == $(this).data('genere').toLowerCase()){
                $(this).show();
            }else{
                $(this).hide();
            }
        })
    }
});

$.ajax({
    url:'https://flynn.boolean.careers/exercises/api/array/music',
    method: 'GET',
    success: function (data) {
        var albums = data.response;
        for (var i = 0; i < albums.length; i++) {
            var album = albums[i];
            var dataAlbum = {
                cover: album.poster,
                album: album.title,
                artist: album.author,
                year: album.year,
                genere: album.genre
            }
            var albumCard = template(dataAlbum);
            $('.card-container').append(albumCard);
        }
    },
    error: function () {

    }
})
