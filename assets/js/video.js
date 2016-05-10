
$(function(){
    var videoBox = $('.videoBox');
    var videoCtr = $('.videoCtr');
    var counter = 0;
    var modalFlag = false;

    $(window).on('load resize', function() {
        var videoBoxChild      = $(".videoBox__child");
        var videoBoxChildNum   = videoBoxChild.length;
        var videoBoxChildImage = videoBoxChild.find("img");
        var videoBoxChildText  = videoBoxChild.find(".videoBox__child__textBox");
        var videoLink = videoBoxChild.find('a');
        var width              = videoBoxChildImage.width();
        var height1            = videoBoxChildImage.height();
        var height2            = videoBoxChildText.innerHeight();
        var num = counter%5;
        
        // コントローラ色
        videoCtr.find('.videoCtr__numList ul li span').eq(counter).css('background-color','white');
        videoBoxChild.removeClass('current').eq(num).addClass('current');
        //ボタンアクション
        var leftBtn  = $(".videoCtr__button.l-left");
        var rightBtn = $(".videoCtr__button.l-right");
        

        // メディアクエリー的なやつ
        if ($('.sp_navi').css('display') === 'none') {
            // 横並び
            videoBoxChild.each(function(i){
                $(this).css('left', 290 + 400 * i);
            });
            //高さ設定
            videoBox.css({'height':341,'width':'100%'});
            videoBoxChild.css({'height':341,'width':width});
            //モーダル処理ON
            modalFunc();
            //矢印
            buttonEffect(leftBtn, -1, 290);
            buttonEffect(rightBtn, 1, 290);
        } else {
            // 横並び
            videoBoxChild.each(function(i){
                $(this).css('left',width * i);
            });
            //高さ設定
            videoBox.css({'height':height1 + height2,'width':width});
            videoBoxChild.css({'height':height1 + height2,'width':width});
            //モーダル処理OFF
            videoLink.off();
            //矢印
            buttonEffect(leftBtn, -1, 0);
            buttonEffect(rightBtn, 1, 0);
        }
        function buttonEffect(button, addVal, calibrateVal){
            button.off().on('click', function(){
                counter += addVal;
                num = counter%5;
                videoBoxChild.removeClass('current').eq(num).addClass('current');
                if(num > 5) {
                    num-=5;
                }else if(num < 0) {
                    num+=5;
                }
                videoCtr.find('.videoCtr__numList ul li span').css('background-color','#0a2d3e').eq(num).css('background-color','white');
                videoBoxChild.each(function(i){
                    $(this).stop().animate({'left': calibrateVal + $(this).width() * (i-num)});
                });
                console.log(num);
            });
        }
        function modalFunc(){
            var modal = $('.videoModal');
            videoLink.on('click', function(e){
                $(this).parent()
                modal.fadeIn();
                var youtubeLink = $(this).attr('data-movie');
                modal.find('.videoModal__content').html('<iframe  src="'+ youtubeLink + '" frameborder="0" allowfullscreen></iframe>');
                e.preventDefault();
            });
            modal.find('.videoModal__bg').on('click', function(){
                modal.fadeOut();
            });
        }
    });
});
