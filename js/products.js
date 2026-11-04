window.DUNOVA_PRODUCTS = [
  {
    id: "clean-court-low",
    name: "Clean Court Low",
    nameAr: "حذاء كورت منخفض أبيض",
    price: 36,
    blurb: "Clean low-top court sneaker, smooth upper and rubber sole. Goes with thobe or jeans. Colors: white, beige. Sizes 39\u201344.",
    blurbAr: "حذاء منخفض بتصميم نظيف ونعل مطاطي. يناسب الثوب أو الجينز. الألوان: أبيض، بيج. المقاسات 39\u201344.",
    image: "images/white-court-1.jpg",
    gallery: ["images/white-court-1.jpg", "images/white-court-2.jpg"],
    sizes: ["39", "40", "41", "42", "43", "44"]
  },
  {
    id: "knit-slip-on-chunky",
    name: "Knit Slip-On Cloud",
    nameAr: "حذاء محبوك بدون أربطة بنعل سميك",
    price: 39,
    blurb: "Breathable knit upper, thick cushioned sole, no laces. Colors: sand, black, beige, black/white. Sizes 39\u201348.",
    blurbAr: "جزء علوي محبوك قابل للتنفس ونعل سميك مريح بدون أربطة. الألوان: رملي، أسود، بيج، أسود/أبيض. المقاسات 39\u201348.",
    image: "images/knit-slipon-1.jpg",
    gallery: ["images/knit-slipon-1.jpg", "images/knit-slipon-2.jpg", "images/knit-slipon-3.jpg", "images/knit-slipon-4.jpg"],
    sizes: ["39", "40", "41", "42", "43", "44", "45", "46", "47", "48"]
  },
  {
    id: "sock-knit-runner",
    name: "Sock Knit Runner",
    nameAr: "حذاء جوربي محبوك",
    price: 42,
    blurb: "Sock-fit knit slip-on with a light white chunky sole. Colors: black/white, all black. Sizes 39\u201346.",
    blurbAr: "حذاء جوربي محبوك بنعل أبيض خفيف. الألوان: أسود/أبيض، أسود بالكامل. المقاسات 39\u201346.",
    image: "images/sock-slipon-1.jpg",
    gallery: ["images/sock-slipon-1.jpg", "images/sock-slipon-3.jpg"],
    sizes: ["39", "40", "41", "42", "43", "44", "45", "46"]
  }
];

window.dunovaProductCard = function (p) {
  return (
    '<a class="card" href="product.html?id=' + encodeURIComponent(p.id) + '">' +
      '<div class="card-media"><img src="' + p.image + '" alt="' + p.name + '"></div>' +
      '<div class="card-body">' +
        '<h3>' + p.name + '</h3>' +
        '<div class="ar-line">' + p.nameAr + '</div>' +
        '<div class="card-foot"><span class="price">$' + p.price + '</span><span class="muted">Ships from Putian</span></div>' +
      '</div>' +
    '</a>'
  );
};

window.dunovaWhatsAppLink = function (text) {
  var msg = text || "Hi Dunova, I want to order sneakers.";
  return "https://wa.me/?text=" + encodeURIComponent(msg);
};
