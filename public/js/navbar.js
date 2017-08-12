var now;

function timer() {
    var year = now.getFullYear();
    var month = addZeros(now.getMonth(), 2);
    var date = addZeros(now.getDate(), 2);
    var hour = addZeros(now.getHours(), 2);
    var minute = addZeros(now.getMinutes(), 2);
    var second = addZeros(now.getSeconds(), 2);

    var timeString = year + "년 " + month + "월 " + date + "일 " + hour + "시 " + minute + "분 " + second + "초";
    $('#timer').text(timeString);

    now.setSeconds(now.getSeconds() + 1);
}

function addZeros(num, digit) {
    var zero = '';
    num = num.toString();
    if (num.length < digit) {
        for (i = 0; i < digit - num.length; i++) {
            zero += '0';
        }
    }
    return zero + num;
}

setInterval(function(){timer()}, 1000);

$(window).on('load', function() {

    $.ajax({
        type: 'GET'
        , url: 'getServerTime'
        , success: function(data, status, request) {
            var serverDateHeader = request.getResponseHeader('Date');
            now = new Date(Date.parse(serverDateHeader));
            timer();
        }
    });

    $('[data-toggle="tabajax"]').click(function(e) {
        e.preventDefault();
        var $this = $(this),
            loadurl = $this.attr('href'),
            targ = $this.attr('data-target');

        $.get(loadurl, function(data) {
            $(targ).html(data);
        });

        $this.tab('show');
        return false;
    });
});
