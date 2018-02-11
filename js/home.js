$(document).ready(function () {
    getQuote();

    $('#quoteButton').on('click', function(){
        getQuote();
    })

    $('#twitterBird').on('click', function(){
        var quoteAndAuthor = $('#quoteArea').text()+ $('#authorArea').text();
        window.open('https://twitter.com/intent/tweet?text=' + quoteAndAuthor + '&via=StBrown12');

    });

});

function getQuote(){
    clearQuote();
    $.ajax({
        type: 'GET',
        url: 'https://api.forismatic.com/api/1.0/',
        data:{
           method:'getQuote',
           format:'json',
           key:'',
           lang:'en'
        },
        success: function(quote){
            var quoteContent = quote.quoteText;
            var quoteAuthor = quote.quoteAuthor;
            if(quoteAuthor.length === 0 || quoteAuthor === ''){
                quoteAuthor = "Unknown";
            }
            $('#quoteArea').append(quoteContent);
            $('#authorArea').append('-' + quoteAuthor);
        },
        error: function(){
            alert('FAILURE!');
        },
        cache:false    

    });
}

function clearQuote(){
    $('#quoteArea').empty();
    $('#authorArea').empty();
}
