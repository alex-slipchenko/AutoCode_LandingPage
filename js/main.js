// ----------preloader-------


   $('.nav-btn,.offer__btn,.buttons__long').click(function(){
    $('#exampleModal').arcticmodal();
});

   $('.menu-btn').click(function(){
    $('#exampleModal-1').arcticmodal();
});

// -----------slider-------
$('.one-time').slick({
    autoplay: true,
    autoplaySpeed: 2000,
});


// --------------slider-2----------
$('.sl').slick({
    slidesToShow: 6,
    slidesToScroll:6,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  
});

// ------------------arcticmodal----------


function initMap(){
    var element = document.getElementById('map')
    var pos = {lat:48.453254 , lng:  35.024880};
    var opt = {
        center: pos,
        zoom:17,
    };

    var myMap = new google.maps.Map(element, opt);

    var marker = new google.maps.Marker ({
        position: pos,
        map: myMap,
        title: "AutoCode",
        icon: {
            url: "img/Arrow_8.png",
            scaledSize: new google.maps.Size(64, 64),
        }
    });


    var InfoWindow = new google.maps.InfoWindow({
        content:'<h4>AutoCode</h4><p>Автострахование ОСАГО И ЗЕЛЕНАЯ КАРТА</p>'
    });

     InfoWindow.open(myMap, marker);

    marker.addListener('click', function(){
        InfoWindow.open(myMap, marker);
    });
};

$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
});
$('.overlay').click(function() {
    $(this).removeClass('open');
    $('.navBurger').removeClass('active');
});


        



