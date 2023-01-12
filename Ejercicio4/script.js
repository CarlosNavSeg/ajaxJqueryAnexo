$('document').ready(function() {
    $('#formulario').submit(function(event) {
        event.preventDefault()
        $.get('formulario.php', $('#formulario').serialize(),
    function (data) {
        $('#contentValidator').html(data)
    })
    })
})
