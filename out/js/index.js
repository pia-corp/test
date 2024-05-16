//================================
// AOS setting
//================================
jQuery(function ($) {
  var replaceWidth = 768;
  var windowWidth = parseInt(window.innerWidth);
  if (windowWidth > replaceWidth) {
    AOS.init({
      duration: 1200,
    });
  } else {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }
});
$(window).on("load", function () {
  AOS.refresh();
});

//=========================================
// IMG CHANGE
//=========================================
$(window).on("load resize", function () {
  var $elem = $(".js-image-switch");
  var sp = "/sp/";
  var pc = "/pc/";
  var replaceWidth = 768;
  function imageSwitch() {
    var windowWidth = parseInt(window.innerWidth);
    $elem.each(function () {
      var $this = $(this);
      if (windowWidth > replaceWidth) {
        $this.attr("src", $this.attr("src").replace("/sp/", "/pc/"));
        // Retina-Srcset.js
        var retinaCheck = window.devicePixelRatio;
        if (retinaCheck >= 2) {
          // Retina分岐
          $("img.retina").each(function () {
            var retinaimg = $(this)
              .attr("src")
              .replace(/\.(?=(?:png|jpg|jpeg)$)/i, "@2x.");
            $(this).attr("srcset", retinaimg + " 2x");
          });
        }
      } else {
        $this.attr("src", $this.attr("src").replace("/pc/", "/sp/"));
      }
    });
  }
  imageSwitch();
  var resizeTimer;
  $(window).on("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      imageSwitch();
    }, 200);
  });
});

//================================
// swiper setting
//================================
jQuery(function ($) {
  const breakpoint = window.matchMedia("(max-width:768px)");
  let mySwiper;
  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      return SpSwiper();
    } else if (breakpoint.matches === false) {
      return PcSwiper();
    }
  };
  textlink
  const ThumbnailText = new Swiper(".ranking-textlink-block", {
    slidesPerView: "auto",
    allowTouchMove: false,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
  const PcSwiper = function () {
    mySwiper = new Swiper(".swiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      paginationClickable: true,
      centeredSlides: true,
      speed: 800,
      slidesPerView: 1.4,
      spaceBetween: 30,
      thumbs: {
        swiper: ThumbnailText,
      },
    });
  };
  const SpSwiper = function () {
    mySwiper = new Swiper(".swiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      paginationClickable: true,
      centeredSlides: true,
      speed: 800,
      slidesPerView: 1.31,
      spaceBetween: 15,
      thumbs: {
        swiper: ThumbnailText,
      },
    });
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
});

//================================
// HEADER MENU
//================================
$(function () {
  var pos;

  $(".menu-btn").click(function () {
    $(this).toggleClass("active");
    $(".header-menu").toggleClass("active");
    if ($(".header-menu").hasClass("active")) {
      pos = $(window).scrollTop();
      $("body").addClass("active").css({ top: -pos });
      $(".header-menu").fadeIn(300);
      $(".header-common-head").fadeOut(300);
    } else {
      $("body").removeClass("active").css({ top: 0 });
      $(".header-menu").fadeOut(300);
      $(".header-common-head").fadeIn(300);
      window.scrollTo(0, pos);
    }
  });

  $(".js-header-btn").click(function () {
    // ヘッダーメニューが表示されているかチェック
    if ($(".header-menu").hasClass("active")) {
      // ヘッダーメニューを非表示にする
      $(".menu-btn").removeClass("active");
      $(".header-menu").removeClass("active").fadeOut(300);
      $(".header-common-head").fadeIn(300);
      $("body").removeClass("active").css({ top: 0 });
      window.scrollTo(0, pos);
    }

    // .c-modal_wrapの表示状態を切り替える
    if ($(".c-modal_wrap").css("visibility") != "visible") {
      $(".c-modal_wrap").css({ opacity: "1", visibility: "visible" });
      $("body").addClass("modal-active");
    } else {
      $(".c-modal_wrap").css({ opacity: "0", visibility: "hidden" });
      $("body").removeClass("modal-active");
    }
  });

  $(".c-modal_close").click(function () {
    $(".c-modal_wrap").css({ opacity: "0", visibility: "hidden" });
    $("body").removeClass("modal-active");
    if ($(".header-common-head").css("display") == "none") {
      $(".header-common-head").css("display", "block");
    }
  });

  $(document).on("click", function (e) {
    if (
      !$(e.target).closest(".c-modal_content").length &&
      !$(e.target).is(".js-header-btn")
    ) {
      $(".c-modal_wrap").css({ opacity: "0", visibility: "hidden" });
      $("body").removeClass("modal-active");
      if ($(".header-common-head").css("display") == "none") {
        $(".header-common-head").css("display", "block");
      }
    }
  });
});

//================================
// ONLINE SHOP
//================================
$(function () {
  $(".online-shop-btn").on("click", function () {
    $(this).parent().toggleClass("open");
  });
  let windowSize = window.innerWidth;
  if (windowSize <= 768) {
    $(".menu-btn").on("click", function () {
      if ($(this).hasClass("active")) {
        const poss = $(".header .online-shop-btn").offset().top;
        $(".header .online-shop-btn").on("click", function () {
          $(".header-menu")
            .not(":animated")
            .animate({ scrollTop: poss }, 400, "swing", function () {});
        });
      }
    });
  }
});

//================================
// INDEX SMOOTH SCROLL
//================================
$(".review-index-list li").click(function () {
  var target = $(this).data("link");
  var position = $("#" + target).offset().top;
  let windowSize = window.innerWidth;
  if (windowSize <= 768) {
    $("html,body").animate({ scrollTop: position - 80 }, 600, "easeOutQuart");
  } else {
    $("html,body").animate({ scrollTop: position - 50 }, 600, "easeOutQuart");
  }
  return false;
});

//=========================================
// PC SHOP MENU
//=========================================
$(function () {
  $(".right-menu li a").on("mouseover", function () {
    // 画像のURLを取得
    var currentSrc = $(this).children("img").attr("src");

    // 新しいURLを生成して設定（例：_hoverを追加）
    var newSrc = currentSrc.replace(".svg", "_w.svg");

    // 画像を切り替える
    $(this).children("img").attr("src", newSrc);
  });

  // マウスアウトイベントを設定（元の画像に戻す）
  $(".right-menu li a").on("mouseout", function () {
    // 画像のURLを取得
    var currentSrc = $(this).children("img").attr("src");

    // 元のURLに戻す（例：_hoverを削除）
    var originalSrc = currentSrc.replace("_w.svg", ".svg");

    // 画像を切り替える
    $(this).children("img").attr("src", originalSrc);
  });
});

//=========================================
// FOOTER MENU CHANGE IMG
//=========================================
$(function () {
  var rwdPoint = 768;

  function slideImgChange() {
    if ($(window).width() <= rwdPoint) {
      $(".footer-img").each(function () {
        var changeImg = $(this).attr("src").replace("_pc.", "_sp.");
        $(this).attr("src", changeImg);
      });
    } else {
      $(".footer-img").each(function () {
        var changeImg = $(this).attr("src").replace("_sp.", "_pc.");
        $(this).attr("src", changeImg);
      });
    }
  }

  //読み込み時の処理
  slideImgChange();

  //リサイズ時の処理
  $(window).on("resize", function (event) {
    event.preventDefault();
    slideImgChange();
  });
});