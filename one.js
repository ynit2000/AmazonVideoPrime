var favChannels = [
    { img_url: "/Amazon/media/LionsgatePlay.jpg" },
    { img_url: "/Amazon/media/Discovery.jpg" },
    { img_url: "/Amazon/media/BBC_PLAYER.png" },
    { img_url: "/Amazon/media/MANORAMAMAX.jpg" },
    { img_url: "/Amazon/media/hoichoi.jpg" },
    { img_url: "/Amazon/media/Chaupal.png" },
    { img_url: "/Amazon/media/Anime.jpg" },
    { img_url: "/Amazon/media/Erosnow.jpg" },
    { img_url: "/Amazon/media/Mubi.jpg" },
    { img_url: "/Amazon/media/Vrott.png" },
    { img_url: "/Amazon/media/Stingray.png" },
    { img_url: "/Amazon/media/Docubay.jpg" },
];

favChannels.map(function (elem) {
    var div = document.createElement('div');
    div.setAttribute("class", "channelDiv");

    var image = document.createElement('img');
    image.setAttribute("src", elem.img_url);

    div.append(image);
    document.querySelector(".channelBtn").append(div);

});

localStorage.setItem("favChannels", JSON.stringify(favChannels));