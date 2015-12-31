$(function(){
    /* variable */
    var header      = $('header');
    var footer      = $('footer');
    var shareButton = $('.btn--share');
    var sidebar     = $('aside');
    var textCol     = "#dcdcdc";
    var textColNow  = "#164a66";
    var h = $(window).height();

    $('#wrap').css('display','none');
    $('#loader-bg ,#loader').height(h).css('display','block');
    /* load */
    $(window).on('load', function(){
        $('#loader-bg').delay(900).fadeOut(800);
        $('#loader').delay(600).fadeOut(300);
        $('#wrap').css('display', 'block');
        header.fadeIn(1000,function(){
            footer.slideToggle(800,"easeOutExpo");
        });
    });

    /* social */
    $("#share").jsSocials({
            showLabel: false,
            showCount: false,
            shares: ["twitter", "facebook", "googleplus", "pinterest"]
    });
    shareButton.on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('on');
        if($(this).hasClass('on')){
            sidebar.animate({
                right: 0
            });
        } else {
            sidebar.animate({
                right: "-55px"
            });
        }
    });

    /* news */
    var accordion      = $('.js-accordion');
    var accordionInner = accordion.find('p');
    accordionInner.css({"cursor": "pointer"});
    accordionInner.on('click', function(){
        var parent = $(this).parent();
        parent.toggleClass('on');
        if(parent.hasClass('on')){
            parent.next().slideDown(500, function(){
                $(this).animate({opacity:1});
            });
        } else {
            parent.next().animate({opacity:0},function(){
                $(this).slideUp(500);
            });
        }

        //articleContent.show();
    });
});
