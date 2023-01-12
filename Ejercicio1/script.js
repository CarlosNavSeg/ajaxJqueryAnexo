$('document').ready( function() {
    $('#contentDeployer').click(
        $.ajax({
        url: "tex.txt",
        })
        .fail( function() {
            alert('fichero no encontrado')
        })
        .done(function (data) {
            $('#contentSurface').html(data)
        })
)})