$(".hasSubLayer").on("mouseenter mouseleave click", (e) => {
    let em = e.currentTarget;
    e.stopPropagation();
    $(em).find(".Layer").eq(0).toggle();
})

$(document).scroll((e) => {
    let em = e.currentTarget;
    $("header").toggleClass("sticky", $(em).scrollTop() > 0);
    if ($(em).scrollTop() > 0) {
        $("header .logoImg").attr("src", "/logo/Block_ID.svg");
    } else {
        $("header .logoImg").attr("src", "/logo/white_ID.svg");
    }
})

$(".Layer-One li").on("click", (e) => {
    let em = e.currentTarget;
    let activeArea = $(em).find("a").eq(0);
    $(".Layer-One li").find("a").removeClass("active");
    $(activeArea).addClass("active");
})

$(".fa-navicon").on("click", (e) => {
    let em = e.currentTarget;
    $(em).toggleClass("fa-navicon");
    $(em).toggleClass("fa-remove");
    $(".Layer-One").toggleClass("active");
})

$(".LineBtn").on("click", (e) => {
    $(".LineLinkContainer").toggleClass("active");
})

$(".ToTopBtn").on("click", (e) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})

// $(".cupboard .PrdListContainer").scrollLeft(1000);