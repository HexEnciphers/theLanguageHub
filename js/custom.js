$(window).scroll(function () {

    if ($(window).scrollTop() >= 50) {
        $('.top-bar').addClass('animated slideInDown bg-green shadow-sm');
        $('.bt-top').addClass('visible');
    } else {
        $('.top-bar ').removeClass('animated slideInDown bg-green shadow-sm');
        $('.bt-top').removeClass('visible');
    }
});
$(document).ready(function(){
    $('.owl-testimonial').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        autoHeight:true,
        navText : ['<i class="left-testimonial-arrow" aria-hidden="true"></i>','<i class="right-testimonial-arrow" aria-hidden="true"></i>']
    })
    $('.owl-results').owlCarousel({
        loop:true,
        nav:true,
        items:3,
        center:true,
        autoHeight:true,
        navText : ['<i class="left-testimonial-arrow" aria-hidden="true"></i>','<i class="right-testimonial-arrow" aria-hidden="true"></i>']
    })
    $('.owl-quotes').owlCarousel({
        loop:true,
        margin:10,
        items:1,
        autoHeight:true,

    })
    $('.speaking-tasks').owlCarousel({
        loop:true,
        margin:50,
        padding:50,
        nav:true,
        items:3,

        navText : ['<i class="left-blog-arrow" aria-hidden="true"></i>','<i class="right-blog-arrow" aria-hidden="true"></i>']

    })

        var length = $("#quote").find('.item').length;
        var items = $("#quote").find('.item');
        var counter = 0;
        items[counter].classList.add('active');
        counter++;
        //console.log(items[counter]);
        setInterval(() => {
            console.log(counter);
            // items[counter] = $(this);
            // items[counter].html('sdasd');

            items.removeClass('active');
            items[counter].classList.add('active');
            //console.log(items[counter]);
            counter++;

            if(counter == items.length){
                counter = 0;
            }
        }, 5000);
});
