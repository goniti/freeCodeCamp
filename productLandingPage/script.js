$(document).ready(function () {
  const body = $("html, body"); // Selector body/html $(document) or $("html, body")
  const nav = $(".navbar__link"); // Link Class
  const active = "navbar__link--is-active"; // Active Class

  nav.click(function (e) {
    let hash = $(this).attr("href"); // Take all link from nav
    console.log(hash);

    const addHash = () => {
      //Add #link to url
      window.location.hash = hash;
    };
    //Smooth Effect
    body.stop().animate(
      {
        scrollTop: $(hash).offset().top,
      },
      500,
      addHash
    );
    e.preventDefault();
    return false;
  });

  $(document).scroll(function () {
    let scrollPos = $(this).scrollTop() + 1;
    nav.each(function () {
      let currLink = $(this);
      let item = $(currLink.attr("href"));
      currLink.removeClass(active);
      if (
        item.position().top <= scrollPos &&
        item.position().top + item.height() > scrollPos
      ) {
        currLink.addClass(active);
      }
    });
  });
});
