$('document').ready( function() {
    $('#contentDeployer').click(
        $.getJSON('//restcountries.eu/rest/v2/all', function(data) {
            $('#contentSurface').load(JSON.parse(data))
        })
)})