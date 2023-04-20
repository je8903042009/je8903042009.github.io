$(".siteNode").on("click", (e) => {
    let em = e.currentTarget;
    let TargetNodeName = em.dataset.node;
    let nowNodeName = $(".siteNode.active").attr("data-node");

    if (TargetNodeName == nowNodeName) return;

    $(".siteNode").removeClass("active");
    $(em).addClass("active");

    $(`.blogListContainer[data-name="${nowNodeName}"]`).slideUp(1000);
    $(`.blogListContainer[data-name="${TargetNodeName}"]`).slideDown(2000);
})