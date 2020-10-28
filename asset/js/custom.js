$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');



    $('.dropdown-menu').on('click',function(event){
        event.stopPropagation();
    })


    $('.closeNotificationDropDown button').on('click',function(event){
       $('#notificationsDropDown .dropdown-menu').toggleClass('show');
       $("#notificationsDropDown button").attr("aria-expanded","false");
    })

    $('#closeNotification2').on('click',function(event){
       $('#notificationsdrop2Menu').toggleClass('show');
       $("#mainnotificationBtntoggle").attr("aria-expanded","false");
    })




    $('#reportsLeftBtnToggle').on('click',function(){
        $('#reportsPlageLeftSidebarMobile').toggleClass('show');
    })

    $('#reportLinkCloseToggle').on('click',function(){
        $('#reportsPlageLeftSidebarMobile').removeClass('show');
    })



    $('#notificationsDropDown .notidrop').on('click',function(){
        $('.menuMobileContainer #collapseExample.collapse').removeClass('show');
        $("#mennubar2MobileMenu .mobileMenuToggle button").attr("aria-expanded","false");
    })

    $('.radioAction').on('click',function(){
        $('.radioAction').removeClass('active');
        $(this).addClass('active');
    })










});
