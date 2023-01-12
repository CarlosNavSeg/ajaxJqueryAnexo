$('document').ready( function() {
    let element = document.createElement('img')
    element.setAttribute('src', 'cargando.gif')
    $('#contentDeployer').click(
        $('#contentSurface').html(element),
        $.ajax({
        url: "paginalenta.php",
        })
        .done(function (data) {
            $('#contentSurface').html(data)
            $('#contentSurface').remove($('img'))
        })
        .fail(function (xhr, ajax, thrownError) {
            alert(xhr.status)
            $('#contentSurface').remove($('img'))
        })
)})