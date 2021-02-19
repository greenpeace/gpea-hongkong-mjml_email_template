$(document).ready(function() {
  (function() {
    $('.en__field--text').each(function() {
      $(this)
        .find('.en__field__input--text')
        .attr(
          'placeholder',
          $(this)
          .children('.en__field__label')
          .html()
        );
    });
    /* ******************************************* */
    /* CUSTOM VARIABLES - CHANGE FOR YOUR CAMPAIGN */
    /* ******************************************* */
    /* Set the Identifier for the Ticket HTML Element */
    // This is the URL the page uses to pull the signatures from
    var counterBaseUrl = 'https://global-petition-counter.appspot.com/counter/';
    var tickerElementId = '#ticker';
    /* Set the campaign for the global petition counter */
    var counterCampaign = 'antarctic';
    /* ***************************** */
    /* START OF SCRIPT - DO NOT EDIT */
    /* ***************************** */
    /* Get Petition Count */
    var counter = $('.counter');
    $.ajax({
      type: 'GET',
      url: counterBaseUrl + counterCampaign,
      dataType: 'json',
      success: function(response) {
        ticker(response.unique_count, tickerElementId);
      }
    });

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function ticker(n, identifier) {
      /* Update the value */
      $('.counter').text(n);
      var count = n;
      var target = 3000000;
      var percent = count / target * 100;
      var percentage = $('.progress-bar').attr('aria-valuenow');
      $('.progress-bar').width(percent + '%');
      $(identifier).text(n);
      /* Perform animation */
      $(identifier).each(function() {
        $(this)
          .prop('Counter', 0)
          .animate({
            Counter: $(this).text()
          }, {
            duration: 1600,
            easing: 'swing',
            step: function(now) {
              $(this).text(Math.ceil(now));
            },
            /* Add comma */
            complete: function() {
              $(identifier).text(numberWithCommas(n));
            }
          });
      });
    }
  })();

  var longScroll = (function(viewportHeight) {
    var scrollPos = function() {
      return document.documentElement.scrollTop || document.body.scrollTop || 0;
    };
    // scroll position toggle function
    function toggleFormBtn(viewportHeight) {
      if (scrollPos() - viewportHeight >= 0) {
        $('.cta').addClass('form--visible');
      } else {
        $('.cta').removeClass('form--visible');
      }
    }

    function toggleContent(viewportHeight) {
      if (scrollPos() - viewportHeight >= 0) {
        $('.content-body').addClass('content--visible');
      } else {
        $('.content-body').removeClass('content--visible');
      }
    }

    return {
      toggleFormBtn: toggleFormBtn,
      toggleContent: toggleContent
    };
  })();

  var scrollMode = (function() {
    // Variables
    var viewportWidth = function() {
        return $('body').width();
      },
      viewportHeight = function() {
        return $(window).height();
      },
      scrollPos = function() {
        return (
          document.documentElement.scrollTop || document.body.scrollTop || 0
        );
      };
    // Handlers
    var toggleScrollHandler = function() {
      longScroll.toggleFormBtn(viewportHeight());
      longScroll.toggleContent(viewportHeight());
    };
    // init detect device
    function init() {
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
    // re calculate
    function reCalculate() {
      console.log('reCalculated');
      if (viewportWidth() > 640) {
        $('html')
          .removeClass('mobile')
          .addClass('desktop');
      } else {
        $('html')
          .removeClass('desktop')
          .addClass('mobile');
      }
    }
    return {
      do: init,
      reCalculate: reCalculate
    };
  })();

  scrollMode.do();

  // resize
  $(window).on(
    'resize',
    debounce(function() {
      console.log('reResized');
      scrollMode.reCalculate();
    }, 250)
  );
});

$(document).ready(function() {
  var formInteraction = function(e) {
    $(this)
      .parents('.en__field__element')
      .toggleClass('input--focused');
  };

  $('.en__field__input, #en__field_supporter_NOT_TAGGED_6').on(
    'focus blur',
    formInteraction
  );

  $('.en__field--emailAddress input').on('click', function() {
    expandForm();
  });

  function expandForm() {
    $('.form-container').addClass('form--active');
  }

  function fblogin() {
    FB.login(
      function(response) {
        FB.api('/me?fields=id,name,birthday,email', function(response) {
          if (response) {
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
            $('.form-or').slideUp('600');
            $('.form-social').slideUp('400');
          } else {
            console.log('Not authorzied');
            ga('send', 'event', 'fblogin', 'login', 'fblogin:not_authorized');
          }
        });
      }, { scope: 'public_profile,email,user_birthday' }
    );
  }
  $('.signnow button').click(function() {
    $('html, body').animate({
        scrollTop: $('#enform').offset().top
      },
      300
    );
  });
  $('.login__fb').click(function(event) {
    fblogin();
  });
  $('.login__fb').click(function(event) {
    expandForm();
  });

  /*

  $('#en__field_supporter_NOT_TAGGED_19').on('blur', function() {
    var firstName = $('.en__field__input.en__field__input--hidden[name=\'supporter.firstName\']');
    firstName.value = this.value.split(' ')[0];
    console.log(firstName.value);
  });

  */
});

// functions

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function transitionE() {
  var t,
    el = document.createElement('f');

  var transitions = {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd'
  };

  for (t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }
}

function animationE() {
  var t,
    el = document.createElement('f');

  var animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd'
  };

  for (t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
}

// rollCall scripts
// <div id="rollCall">&nbsp;</div>

/*
$(function() {
  function executeRollCall(dataUrl, display) {
    if (!dataUrl) {
      console.log("No data url passed");
      return false;
    }

    if (!display || display == 0 || display % 1 !== 0) {
      display = 5;
    }

    var ret = $.ajax({
      url: dataUrl,
      crossDomain: true,
      dataType: "jsonp"
    });

    ret.done(function(data) {
      var result = data;

      result.rows.reverse();

      var wrap = $("#rollCall");

      var count = result.rows.length;

      for (var i = 0; i < count; i++) {
        var name = $.trim(result.rows[i].columns[0].value);
        var country = $.trim(result.rows[i].columns[1].value);

        if (i < display) {
          var row =
            '<div style="display:block;" class="row" >' +
            name +
            " " +
            country +
            "</div>";
        } else {
          var row =
            '<div style="display:none;" class="row" >' +
            name +
            " " +
            country +
            "</div>";
        }

        wrap.append(row);
      }
    });
  }
  var dataUrl =
    "https://e-activist.com/ea-dataservice/data.service?service=RollCall&token=7a06c0fc-32fe-43f1-8a1b-713b3ea496e1&campaignId=55893&dataSet=1&contentType=json";
  var count = 10;
  executeRollCall(dataUrl, count);
});
*/