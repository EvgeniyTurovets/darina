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
    if($('.cab-tovar-slider').length){
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
    }
    


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

    $('.buy-garant--step2').on('click', function(){
        $.fancybox.close();
        $.fancybox.open({
            src: '#buy-garant2', 
            modal: true
        });
        return false
    })

    if($('#start_date').length){
        function customRange(input) 
        { 
        return {
                minDate: (input.id == "end_date" ? $("#start_date").datepicker("getDate") : new Date())
            }; 
        }

        // To set maxdate in startdate
        function customRangeStart(input) 
        { 
        return {
                maxDate:(input.id == "start_date" ? $("#end_date").datepicker("getDate") : null)
            }; 
        }


        $('#start_date').datepicker(
        {
            beforeShow: customRangeStart,
            maxDate: null,
            dateFormat: "yy.mm.dd",
            changeYear: true
        });
        
        $('#end_date').datepicker(
        {
            beforeShow: customRange,
            dateFormat: "yy.mm.dd",
            changeYear: true
        });
    }
    
    
    $('.filter-btn').on('click', function(){
        $('.zayvki__filter').addClass('active')
    })
    $('.zayvki__filter .fancybox-close').on('click', function(){
        $('.zayvki__filter').removeClass('active')
    })


    // заявка детально
    $(".otziv").validate({
        submitHandler: function(form) {
            // some other code
            // maybe disabling submit button
            // then:
            $.fancybox.open({
                src: '#otziv-modal', 
                modal: true
            });
        }
    });

    // новая заявка
    if($('.new-zayvka__chekboxes').length){
        if($(window).width() > 767){
            $('.new-zayvka__chekboxes').niceScroll({
                cursorfixedheight: 10,
                horizrailenabled:false,
            });
        }
    }
    


    $('.new-zayvka').validate({
        submitHandler: function(form) {
            
        }
    });


    // бонусы
    $('.bonus2').validate({
        submitHandler: function(form) {
            $.fancybox.open({
                src: '#bonus2-modal', 
                modal: true
            });
        }
    });
    
    $('.bonus-podpis').validate({
        submitHandler: function(form) {
            $.fancybox.open({
                src: '#bonus1-modal', 
                modal: true
            });
        }
    });

    if($(".eTimer").length){
        $(".eTimer").eTimer({
            etType: 0, etDate: "18.12.2020.0.0", etTitleText: "До окончания акции осталось:", etTitleSize: 20, etShowSign: 1, etSep: ":", etFontFamily: "Arial", etTextColor: "#a3a3a3", etPaddingTB: 15, etPaddingLR: 15, etBackground: "#333333", etBorderSize: 0, etBorderRadius: 2, etBorderColor: "white", etShadow: " 0px 0px 10px 0px #333333", etLastUnit: 4, etNumberFontFamily: "Impact", etNumberSize: 35, etNumberColor: "white", etNumberPaddingTB: 0, etNumberPaddingLR: 8, etNumberBackground: "#11abb0", etNumberBorderSize: 0, etNumberBorderRadius: 5, etNumberBorderColor: "white", etNumberShadow: "inset 0px 0px 10px 0px rgba(0, 0, 0, 0.5)"
        });
    }
    
    
    $('.ruletka__fon').on('submit', function(){
        $('.ruletka-round').removeClass('animate-round')
        $('.ruletka-round').addClass('animate-round')
        setTimeout(function(){
            $('.ruletka-round').removeClass('animate-round')
            
        },1000)
        setTimeout(function(){
            $.fancybox.open({
                src: '#bonus3-modal', 
                modal: true
            });
        },1500)

        
        return false
    })

    
})