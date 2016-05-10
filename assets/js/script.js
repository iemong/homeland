$(function(){
    /* variable */
    var header       = $('header');
    var footer       = $('footer');
    var shareButton  = $('.btn--share');
    var sidebar      = $('aside');
    var textCol      = "#dcdcdc";
    var textColNow   = "#164a66";
    var h            = $(window).height();
    var naviButtonSP = $('.navi__button__inner');
    var naviSP       = $('.navi__content');
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
    /* navigation */
    naviButtonSP.on('click', function(){
        $(this).toggleClass('on');
        if($(this).hasClass('on')){
            $(this).css({'background-position':'0 50px'});
            $(this).parent().css({'background-color':textColNow});
            naviSP.stop().animate({'top':'10%'}, function(){
                $(this).find('a').removeClass('disabled');
            }).find('a').addClass('disabled');
            $(window).on('touchmove.noScroll', function(e) {
                e.preventDefault();
            });
        } else {
            $(this).css({'background-position':'0 0'});
            $(this).parent().css({'background-color':'transparent'});
            naviSP.stop().animate({'top':'-100%'}).find('a').addClass('disabled');
            $(window).off('.noScroll');
        }
    });
    naviSP.on('click', "a.disabled", function(){
        return false;
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
    var accordionInner = accordion.children('p');
    accordionInner.css({"cursor": "pointer"});
    accordionInner.on('click', function(){
        var parent = $(this).parent();
        parent.toggleClass('on');
        if(parent.hasClass('on')){
            parent.next().slideDown(500, function(){
                $(this).stop().animate({opacity:1});
            });
        } else {
            parent.next().stop().animate({opacity:0},function(){
                $(this).slideUp(500);
            });
        }
    });

    /* caststaff */
    var modalContentHeight,modalImageHeight,modalTextHeight;
    var modal      = $('.modal');
    var modalInner = $('.modal__inner');
    var modalBG    = $('.modal__BG');
    var modalClose = $('.modal__close');
    var kantoku    = $('.staff__kantoku');
    var modalStaff = $('.modal__inner--staff');

    $('.cast__memberList__child').hover(
        function(){
            $(this).find('img').attr('src', $(this).find('img').attr('src').replace('_off', '_on'));
        },
        function(){
            $(this).find('img').attr('src', $(this).find('img').attr('src').replace('_on', '_off'));
        }
    ).on('click', function(){
        var imageSrc = $(this).attr('data-src');
        var title    = $(this).attr('data-tit');
        var content  = $(this).attr('data-content');
        modalImageHeight = $('.modal .imageBox').outerHeight();
        modalTextHeight  = $('.modal .textBox').outerHeight();
        if(modalImageHeight > modalTextHeight) {
            modalContentHeight = modalImageHeight;
        } else {
            modalContentHeight = modalTextHeight;
        }
        modal.fadeIn();
        modalInner.fadeIn();
        //modalInner.css({'height': modalContentHeight + 50});
        modalInner.find('.imageBox img').attr('src', imageSrc);
        modalInner.find('.textBox__tit').html(title);
        modalInner.find('.textBox__text').html(content);
    });

    kantoku.on('click', function(){
        var title    = $(this).attr('data-tit');
        var content  = $(this).attr('data-content');
        var width = $(window).width();
        modalImageHeight = $('.modal .imageBox').outerHeight();
        modalTextHeight = $('.modal .textBox').outerHeight();
        if(modalImageHeight > modalTextHeight) {
            modalContentHeight = modalImageHeight;
        } else {
            modalContentHeight = modalTextHeight;
        }
        modal.fadeIn();
        modalStaff.fadeIn();
        modalStaff.css({'height': 350});
        modalStaff.find('.textBox__tit').html(title);
        modalStaff.find('.textBox__text').html(content);
    });
    modalBG.on('click', function(){
        modal.fadeOut();
        modalInner.fadeOut();
        modalStaff.fadeOut();
    });
    modalClose.on('click', function(){
        modal.fadeOut();
        modalInner.fadeOut();
        modalStaff.fadeOut();
    });
});
