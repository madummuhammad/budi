$('#owl-carousel-1').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

$('#owl-carousel-2').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});

var nombrePage = $(".card-pagination").length;

showPage = function (pagination) {
    if (pagination < 0 || pagination >= nombrePage) return;

    $(".card-pagination").hide().eq(pagination).show();
    $("#pagin li").removeClass("active").eq(pagination).addClass("active");
}

// Go to Left
$(".prev").click(function () {
    showPage($("#pagin ul .active").index() - 1);
});

// Go to Right
$(".next").click(function () {
    showPage($("#pagin ul .active").index() + 1);
});

$("#pagin ul a").click(function (e) {
    e.preventDefault();
    showPage($(this).parent().index());
});

showPage(0);

$(function () {
    var bookOptions = {
        height: 500
        , width: 800
        , maxHeight: 600
        , centeredWhenClosed: true
        , hardcovers: true
        , pageNumbers: false
        , toolbar: "lastLeft, left, right, lastRight, toc, zoomin, zoomout, slideshow, flipsound, fullscreen, thumbnails, download"
        , thumbnailsPosition: 'left'
        , responsiveHandleWidth: 50
        , lightbox: "#show_book"
        , lightboxColor: "#eee"
        , toolbarPosition: "bottom"
        , pdf: "assets/img/buku_pdf/alia_juga_berani.pdf"

    };

    $('#book').wowBook(bookOptions);
});

$(function () {
    var bookOptions2 = {
        height: 500
        , width: 800
        , maxHeight: 600
        , centeredWhenClosed: true
        , hardcovers: true
        , pageNumbers: false
        , toolbar: "lastLeft, left, right, lastRight, toc, zoomin, zoomout, slideshow, flipsound, fullscreen, thumbnails, download"
        , thumbnailsPosition: 'left'
        , responsiveHandleWidth: 50
        , lightbox: "#show_si_saloi"
        , lightboxColor: "#eee"
        , toolbarPosition: "bottom"
        , pdf: "assets/img/buku_pdf/si_saloi.pdf"

    };

    $('#book_si_saloi').wowBook(bookOptions2);
});