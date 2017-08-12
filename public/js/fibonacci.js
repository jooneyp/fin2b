$('#calcFibonacci').click(function() {
    var number = parseFloat($('#n').val());
    if(isNaN(number)) {
        alert('Please input a number!');
        $('#n').val('');
        return;
    }

    var data = {};
	data.n = number.toString();
    $.ajax({
        type: 'POST'
        , data: JSON.stringify(data)
        , contentType: 'application/json'
        , url: 'calcFibonacci'
        ,success: function(data, status, request) {
            $('#result').text(data.result);
        }
    })
});
