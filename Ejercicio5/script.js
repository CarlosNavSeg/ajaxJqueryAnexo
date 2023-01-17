var url = "https://restcountries.com/v2/region/europe"
$.ajax({
    url: url,
    method: 'GET',
    }).done(function(result){
    for(var i=0; i<result.length; i++){
        $('#data').append(
        ('<p>' + result[i].name + '</p>')
        );
    }
    }).fail(function(err){
    throw err;
    });
