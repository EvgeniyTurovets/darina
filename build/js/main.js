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

    $.validator.messages.required = 'Это поле обязательно для заполнения';
    $.validator.messages.email = 'Email введен не правильно';
})