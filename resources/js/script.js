$(document).ready(function(){

    // FOR STICKY NAVIGATION
    var position = $(window).scrollTop(); 

    // should start at 0

    $('.js--section-features').waypoint(function(direction) {
        if(direction=='down'){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky')
        }
    },{
        offset:'60px'
    });

    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
    });
    
    $('.js--scroll-to-features').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });

    // Navigation scroll

    $(function(){
        $("a[href*='#']:not([href='#'])").click(function(){
            if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
                var target = $(this.hash);
                target = target.length ? target : $('[name='+this.hash.slice(1)+']');
                if(target.length){
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    // Animation on scroll
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated animate__fadeIn');
    },{
        offset:'40%'
    })

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated animate__fadeInUp');
    },{
        offset:'40%'
    })

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated animate__fadeIn');
    },{
        offset:'30%'
    })

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated animate__pulse');
    },{
        offset:'40%'
    })

    /*----Mobile navigation---------*/
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');
        if(icon.attr('name')=='menu'){
            icon.attr('name','close');
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
        }else{
            icon.attr('name','menu');
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }
        nav.slideToggle(200);
        
    });


});