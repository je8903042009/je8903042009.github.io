$(".hasSubLayer").on("mouseenter mouseleave", (e) => {
    let em = e.currentTarget;
    e.stopPropagation();
    $(em).find(".Layer").eq(0).toggle();
})

$(document).scroll((e) => {
    let em = e.currentTarget;
    $("header").toggleClass("sticky", $(em).scrollTop() > 0);
    if ($(em).scrollTop() > 0) {
        $("header .logoImg").attr("src", "/Interior/logo/Block_ID.svg");
    } else {
        $("header .logoImg").attr("src", "/Interior/logo/white_ID.svg");
    }
})

$(".Layer-One li").on("click", (e) => {
    let em = e.currentTarget;
    let activeArea = $(em).find("a").eq(0);
    $(".Layer-One li").find("a").removeClass("active");
    $(activeArea).addClass("active");
})

// $(".fa-navicon").on("click", (e) => {
//     let em = e.currentTarget;
//     $(em).toggleClass("fa-navicon");
//     $(em).toggleClass("fa-remove");
//     // $(".NavBarMenu").toggle();
//     $(".Layer-One").toggleClass("active");
// })

$(".mobile-navBarBtn").on("click", (e) => {
    let em = e.currentTarget;
    $(em).toggleClass("active");
    $(em).find("i").toggleClass("fa-navicon");
    $(em).find("i").toggleClass("fa-remove");
    // $(".NavBarMenu").toggle();
    $(".NavBarMenu").toggleClass("active");
    $(".Layer-One").toggleClass("active");
})

$(".LineBtn").on("click", (e) => {
    e.stopPropagation();
    $(".LineLinkContainer").fadeToggle();
    $(".LineLinkContainer").toggleClass("active");
})

$(".ToTopBtn").on("click", (e) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})

// $(".cupboard .PrdListContainer").scrollLeft(1000);