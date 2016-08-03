$(document).ready(function() {
    function ball() {

        $('#ball').click(function() {

            var num = Math.floor(Math.random() * 14);

            if (num === 0) {
                console.log('1');
                $('#ball').attr('src', 'picture/1.png');
            } else if (num === 1) {
                console.log('2');
                $('#ball').attr('src', 'picture/2.png');
            } else if (num === 2) {
                console.log('3');
                $('#ball').attr('src', 'picture/3.png');
            } else if (num === 3) {
                console.log('4');
                $('#ball').attr('src', 'picture/4.png');
            } else if (num === 4) {
                console.log('5');
                $('#ball').attr('src', 'picture/5.png');
            } else if (num === 5) {
                console.log('6');
                $('#ball').attr('src', 'picture/6.png');
            } else if (num === 6) {
                console.log('6');
                $('#ball').attr('src', 'picture/7.png');
            } else if (num === 7) {
                console.log('6');
                $('#ball').attr('src', 'picture/8.png');
            } else if (num === 8) {
                console.log('6');
                $('#ball').attr('src', 'picture/9.png');
            } else if (num === 9) {
                console.log('6');
                $('#ball').attr('src', 'picture/10.png');
            } else if (num === 10) {
                console.log('6');
                $('#ball').attr('src', 'picture/11.png');
            } else if (num === 11) {
                console.log('6');
                $('#ball').attr('src', 'picture/12.png');
            } else if (num === 12) {
                console.log('6');
                $('#ball').attr('src', 'picture/13.png');
            } else if (num === 13) {
                console.log('6');
                $('#ball').attr('src', 'picture/14.png');
            }
        });
    }
    ball();
});