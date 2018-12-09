$(document).ready(function(){
    $('[data-header]').load('common/header.html');
    $('[data-navsidebar]').load('common/navsidebar.html',function(data){
        $('.sidebar-menu').tree();
    });
    $('[data-footer]').load('common/footer.html');
    $('[data-controlsidebar]').load('common/controlsidebar.html');
})