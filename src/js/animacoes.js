document.addEventListener('DOMContentLoaded', function (event) {
    
    var dataText = ["Desenvolvedora Front-end","Desenvolvedora Web"];

    function typeWriter(text, i, fnCallback) {
       
        if (i < (text.length)) {
            document.querySelector(".typewriter").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true" class="cursorDigitacao"></span>';

            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 130);
        }
        else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }
   
    function StartTextAnimation(i) {
        typeWriter(dataText[i], -1, function () {
            if (i === dataText.length - 1) {
                setTimeout(function () {
                    StartTextAnimation(0);
                }, 2300);
            } else {
                StartTextAnimation(i + 1);
            }
        });
    }
    
    StartTextAnimation(0);
});
