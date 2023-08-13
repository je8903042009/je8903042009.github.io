// let bodyHeight = $("body").outerHeight();
// $(".innerWindow").css("height", bodyHeight);

$(".blogContainer.CanClick").on("click", (e) => {
    e.stopPropagation();
    let em = e.currentTarget;
    $(em).find(".innerWindow").eq(0).show("normal");
    console.log("show");
})

$(".innerWindow .smallImgBox").on("click", (e) => {
    e.stopPropagation();
    let em = e.currentTarget;
    let innerWindow = $(em).parents(".innerWindow").eq(0);

    innerWindow.find(".smallImgBox").removeClass("active");
    $(em).addClass("active");

    let imgSrc = $(em).find("img").eq(0).attr("src");
    innerWindow.find(".BigImgContainer img").eq(0).attr("src", imgSrc);
})

$(".innerWindow .cancel-btn").on("click", (e) => {
    e.stopPropagation();
    console.log("XX");
    let em = e.currentTarget;
    $(em).parents(".innerWindow").hide("normal");
    console.log("hide");
    // innerWindow.hide();
});
