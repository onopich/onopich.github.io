$(function(){
    var leftel=$('div.script_main_item');
    var rightel=$('div.full_item');
    rightel.hide();
    rightel.filter(':first').show();
    leftel.filter(':first').addClass('script_main_item_active').removeClass('script_main_item');
    leftel.click(function() {
        if ($(this).hasClass('script_main_item_active')) {
            // window.location='/usl/'+this.id;
        }
        else{
            leftel.removeClass('script_main_item_active').addClass('script_main_item');
            $(this).addClass('script_main_item_active').removeClass('script_main_item');
            curthis=this;
            if(($.browser.msie)&&($.browser.version<=8)){
                //rightel.filter(':visible').fadeOut(1000,function() {rightel.filter('#'+curthis.id).fadeIn(1000);});
                rightel.hide();
                rightel.filter('#'+curthis.id).show();
            }else{
                rightel.filter(':visible').fadeOut(1000,function() {rightel.filter('#'+curthis.id).fadeIn(1000);});
            }
        };
    });
});