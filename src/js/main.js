$(function(){
    // клик вне модалки
    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".fancybox-content"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $.fancybox.close();
		}
    });
    

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

    $(".l-data-valid").validate()
    $(".l-data-valid2").validate()
    
    $.validator.messages.required = 'Это поле обязательно для заполнения';
    $.validator.messages.email = 'Email введен не правильно';


    // личные данные
    $( "#datepicker" ).datepicker({ dateFormat: 'yy.mm.dd' });

    $('.input--watch button').on('click', function(){
        $(this).closest('.input--watch').toggleClass('active')
        if($(this).closest('.input--watch').hasClass('active') == 1){
            $(this).closest('.input--watch').find('input').attr('type', 'text');
        }
        else{
            $(this).closest('.input--watch').find('input').attr('type', 'password');
        }
    })
    
})