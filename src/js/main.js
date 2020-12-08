$(function(){
   
    

    // валидация
    $(".valid").validate({
        submitHandler: function(form) {
            // some other code
            // maybe disabling submit button
            // then:
            $.fancybox.open({
                src: '#regmodal', 
                modal: true
            });
        }
    });

    $("#add-tovar-valid").validate({
        submitHandler: function(form) {
            // some other code
            // maybe disabling submit button
            // then:
            $.fancybox.open({
                src: '#zayvka', 
                modal: true
            });
        }
    });

    $(".l-data-valid").validate()
    $(".l-data-valid2").validate()
    
    $.validator.messages.required = 'Это поле обязательно для заполнения';
    $.validator.messages.email = 'Email введен не правильно';


    // личные данные
    if($( "#datepicker" ).length){
        $( "#datepicker" ).datepicker({ dateFormat: 'yy.mm.dd' });
    }
    

    $('.input--watch button').on('click', function(){
        $(this).closest('.input--watch').toggleClass('active')
        if($(this).closest('.input--watch').hasClass('active') == 1){
            $(this).closest('.input--watch').find('input').attr('type', 'text');
        }
        else{
            $(this).closest('.input--watch').find('input').attr('type', 'password');
        }
    })
    

    // селектор
    if($('.c-select').length){
        $('.c-select').selectric()
    }
    


    // карточка товара
    $('.cab-tovar-slider').slick({
        arrows: false,
        fade: true,
        asNavFor: '.cab-tovar-slider-nav',
    })

    $('.cab-tovar-slider-nav').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.cab-tovar-slider',
        focusOnSelect: true,
    })


    $('.fancybox-g').fancybox({
        buttons: [
            "zoom",
            //"share",
            // "slideShow",
            //"fullScreen",
            //"download",
            "thumbs",
            "close"
        ],
    })
})