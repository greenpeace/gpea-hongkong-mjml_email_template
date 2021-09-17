$(document).ready(function () {
  (function () {
    function enFormFieldInit() {
      const email = document.getElementById('en__field_supporter_emailAddress');
      const phone = document.getElementById('en__field_supporter_phoneNumber');
      if (email !== null && phone !== null) {
        email.setAttribute('type', 'email');
        phone.setAttribute('type', 'tel');
      }
      $('.en__field--text').each(function () {
        $(this)
          .find('.en__field__input--text')
          .attr(
            'placeholder',
            $(this)
            .children('.en__field__label')
            .html()
          );
      });
    }
    enFormFieldInit();
    /* ******************************************* */
    /* CUSTOM VARIABLES - CHANGE FOR YOUR CAMPAIGN */
    /* ******************************************* */
    /* Set the Identifier for the Ticket HTML Element */
    // This is the URL the page uses to pull the signatures from
    var counterBaseUrl = 'https://global-petition-counter.appspot.com/counter/';
    var tickerElementId = '#ticker';
    /* Set the campaign for the global petition counter */
    var counterCampaign = 'palmoil';
    /* ***************************** */
    /* START OF SCRIPT - DO NOT EDIT */
    /* ***************************** */
    /* Get Petition Count */
    var counter = $('.counter');
    $.ajax({
      type: 'GET',
      url: counterBaseUrl + counterCampaign,
      dataType: 'json',
      success: function (response) {
        ticker(response.unique_count, tickerElementId);
      },
    });

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function ticker(n, identifier) {
      /* Update the value */
      $('.counter').text(n);
      var count = n;
      var target = 2000000;
      var percent = (count / target) * 100;
      var percentage = $('.progress-bar').attr('aria-valuenow');
      $('.progress-bar').width(percent + '%');
      $(identifier).text(n);
      /* Perform animation */
      $(identifier).each(function () {
        $(this)
          .prop('Counter', 0)
          .animate({
            Counter: $(this).text(),
          }, {
            duration: 1600,
            easing: 'swing',
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
            /* Add comma */
            complete: function () {
              $(identifier).text(numberWithCommas(n));
            },
          });
      });
    }
  })();
});
//
$(function () {
  //
  $(window).on(
    'resize',
    debounce(function () {
      console.log('reResized');
      scrollMode.do();
    }, 250)
  );
  //
  var longScroll = (function (viewportHeight) {
    var scrollPos = function () {
      return document.documentElement.scrollTop || document.body.scrollTop || 0;
    };

    // scroll position toggle function
    function toggleFormBtn(viewportHeight) {
      if (scrollPos() - viewportHeight >= 0) {
        $('.mobile-sign-now').addClass('visible');
      } else {
        $('.mobile-sign-now').removeClass('visible');
      }
    }
    //
    var scrolltrigger0 = 1;
    var scrolltrigger25 = 1;
    var scrolltrigger50 = 1;
    var scrolltrigger75 = 1;
    var scrolltrigger100 = 1;

    function checkScrollDepth() {
      var innerheight = $(document).height() - $(window).height();
      var scroll = Math.round((scrollPos() / innerheight) * 100);
      if (scroll < 25 && scrolltrigger0) {
        ga('send', 'event', 'scroll depth', 'percentage', '0%');
        console.log('0%');
        scrolltrigger0 = 0;
      }
      if (scroll >= 25 && scrolltrigger25) {
        ga('send', 'event', 'scroll depth', 'percentage', '25%');
        console.log('25%');
        scrolltrigger25 = 0;
      }
      if (scroll >= 50 && scrolltrigger50) {
        ga('send', 'event', 'scroll depth', 'percentage', '50%');
        console.log('50%');
        scrolltrigger50 = 0;
      }
      if (scroll >= 75 && scrolltrigger75) {
        ga('send', 'event', 'scroll depth', 'percentage', '75%');
        console.log('75%');
        scrolltrigger75 = 0;
      }
      if (scroll === 100 && scrolltrigger100) {
        ga('send', 'event', 'scroll depth', 'percentage', '100%');
        console.log('100%');
        scrolltrigger100 = 0;
      }
    }
    return {
      toggleFormBtn: toggleFormBtn,
      checkScrollDepth: checkScrollDepth,
    };
  })();
  // longScroll
  var viewportWidth = function () {
    return $('body').width();
  };
  var viewportHeight = function () {
    return $(window).height();
  };
  var toggleScrollHandler = function () {
    longScroll.toggleFormBtn(viewportHeight());
  };
  var toggleScrollDepth = function () {
    longScroll.checkScrollDepth();
  };
  //
  var scrollMode = (function () {
    // init detect device
    function init() {
      $(window).on('scroll', toggleScrollDepth);
      if (viewportWidth() > 640) {
        $('html')
          .removeClass('mobile')
          .addClass('desktop');
      } else {
        $('html')
          .removeClass('desktop')
          .addClass('mobile');
        $(window)
          .off('scroll', toggleScrollHandler)
          .on('scroll', toggleScrollHandler);
      }
    }
    return {
      do: init,
    };
  })();
  scrollMode.do();
  // scrollMode
  const mainShare = () => {
    // WEB SHARE API
    if (navigator.share) {
      // we can use web share!
      navigator
        .share({
          title: '',
          text: 'Hi 你知唔知每日平均約有25隻紅毛猩猩不幸身亡！👉 ',
          url: 'https://act.gp/2Q2TrPo',
        })
        .then(() => console.log('Successfully shared'))
        .catch(error => console.log('Error sharing:', error));
    } else {
      // provide a fallback here
      fbShare();
    }
  };
  const fbShare = () => {
    var baseURL = 'https://www.facebook.com/sharer/sharer.php';
    var u =
      'https://act.greenpeace.org/page/33664/action/1?ea.tracking.id=facebook&utm_campaign=2018-palmoil&utm_source=facebook&utm_medium=social&utm_content=main_share';
    var t = (window.innerHeight - 436) / 2;
    var l = (window.innerWidth - 626) / 2;
    window.open(
      baseURL + '?u=' + encodeURIComponent(u),
      '_blank',
      'width=626,height=436,top=' + t + ',left=' + l
    );
  };
  const whatsAppShare = () => {
    var w =
      'https://api.whatsapp.com/send?text=Hi 你知唔知每日平均約有25隻紅毛猩猩不幸身亡！👉 https://act.gp/2PXybdO';
    window.open(w, '_blank');
  };
  var fbLogin = function () {
    FB.login(
      function (response) {
        FB.api('/me?fields=id,name,birthday,email', function (response) {
          if (response) {
            console.log(response);
            var logYear = response.birthday.split('/')[2];
            $('#en__field_supporter_emailAddress').val(response.email);
            $('#en__field_supporter_NOT_TAGGED_19').val(response.name);
            $('#en__field_supporter_NOT_TAGGED_6').val('01/01/' + logYear);
            $('.en__field--checkbox input[type=\'checkbox\']').attr(
              'checked',
              'true'
            );
            ga('send', 'event', 'fblogin', 'login', 'fblogin:connected');
            // animation
            //
            $('.form-or').slideUp('600');
            $('.form-social').slideUp('400');
          } else {
            console.log('Not authorzied');
            ga('send', 'event', 'fblogin', 'login', 'fblogin:not_authorized');
          }
        });
      }, {
        scope: 'public_profile,email,user_birthday',
      }
    );
  };
  var formInteraction = function () {
    $(this)
      .parents('.en__field__element')
      .toggleClass('input--focused');
  };

  var expandForm = function () {
    $('.enform').addClass('form--active');
    $('.mobile-sign-now').addClass('visually-hidden');
    $('.en__component.en__component--copyblock').hide();
    $('.en__component.en__component--contactblock').hide();
  };

  var collapseForm = function () {
    $('.enform').removeClass('form--active');
    $('.mobile-sign-now').removeClass('visually-hidden');
    $('.en__component.en__component--copyblock').show();
    $('.en__component.en__component--contactblock').show();
  };
  // declare events
  $('.en__field__input, #en__field_supporter_NOT_TAGGED_6').on(
    'focus blur',
    formInteraction()
  );
  $('.en__field--emailAddress input').on('click', function () {
    expandForm();
  });
  $('.enform__close').on('click', function () {
    collapseForm();
  });
  $('.mobile-sign-now span').on('click', function () {
    $('html, body').animate({
        scrollTop: $('.enform').offset().top,
      },
      300
    );
    expandForm();
  });
  $('.login__fb').click(function (event) {
    fbLogin();
  });
  $('.button--share').click(function (e) {
    e.preventDefault;
    mainShare();
  });
  // event listener
  AOS.init({
    // once: false, // whether animation should happen only once - while scrolling down
    //mirror: false, // whether elements should animate out while scrolling past them
    offset: 150,
    duration: 1000,
    easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
  });
});
// AOS
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
// functions
