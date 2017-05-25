
$(document).ready(function () {
    
    $('.nav-link').click(function(e) {
        $('.nav-link').parent().removeClass('active');
        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
        // e.preventDefault();
    });

    // $('a').click(function() {
    //     $('html, body').animate({
    //         scrollTop: $( $.attr(this, 'href') ).offset().top
    //     - 60}, 1000);
    //     return false;
    // });

    $(window).on("scroll", function() {
    if($(window).scrollTop() > 60) {
      $(".navbar").addClass("novabar");
    } else {
      $(".navbar").removeClass("novabar");
    }
  });
    

   var topMenu = jQuery("#menu"),
                offset = 40,
                topMenuHeight = topMenu.outerHeight(),
                // All list items
                menuItems =  topMenu.find('a[href*="#"]'),
                // Anchors corresponding to menu items
                scrollItems = menuItems.map(function(){
                  var href = jQuery(this).attr("href"),
                  id = href.substring(href.indexOf('#')),
                  item = jQuery(id);
                  //console.log(item)
                  if (item.length) { return item; }
                });

    console.log(topMenuHeight);

            // so we can get a fancy scroll animation
            menuItems.click(function(e){
              var href = jQuery(this).attr("href"),
                id = href.substring(href.indexOf('#'));
                  offsetTop = href === "#" ? 0 : jQuery(id).offset().top-topMenuHeight+1;
              jQuery('html, body').stop().animate({ 
                  scrollTop: offsetTop -10
              }, 800);
              e.preventDefault();
            });

            // Bind to scroll
            jQuery(window).scroll(function(){
               // Get container scroll position
               var fromTop = jQuery(this).scrollTop()+topMenuHeight;

               // Get id of current scroll item
               var cur = scrollItems.map(function(){
                 if (jQuery(this).offset().top < fromTop + 58){
                    return this;
                 }else{
                     
                 }
                   
               });

               // Get the id of the current element
               cur = cur[cur.length-1];
               var id = cur && cur.length ? cur[0].id : "";               

               menuItems.parent().removeClass("active");
               if(id){
                    menuItems.parent().end().filter("[href*='#"+id+"']").parent().addClass("active");
               }

            })
});

