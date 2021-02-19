// JavaScript Document
$(document).ready(function() {
  //site preparation on load
  (function() {
    var title = document.getElementsByClassName('section-title');

    for (var i = 0; i < title.length; i++) {
      $(title[i])
        .find('span')
        .each(function() {
          var text = $(this).text(),
            frag = document.createDocumentFragment();

          for (var k = 0; k < text.length; k++) {
            var span = document.createElement('span'),
              char = document.createTextNode(text[k]);

            $(span).css({
              'transition-delay': k / 10 + 's'
            });
            span.appendChild(char);
            frag.appendChild(span);
          }

          this.innerHTML = '';
          this.appendChild(frag);
        });
    }

    $('.section').addClass('section--rendered');
  })();

  var status = {
    showBtn: null,
    pageRendered: false
  };

  var initFullPage = (function() {
    function init() {
      if (!$('html').hasClass('fp-enabled')) {
        $('.main').fullpage({
          anchors: [
            'section-1',
            'section-2',
            'section-3',
            'section-4',
            'section-5'
          ],
          menu: '.sidebar-nav',
          sectionSelctor: '.section',
          verticalCentered: false,
          responsiveWidth: 481,
          responsiveHeight: 600,
          afterLoad: function(anchorLink, index) {
            $(this).addClass('section--entered');

            $(this)
              .find('.section-title')
              .addClass('section-title--entered');

            $(this)
              .find('.section-subtitle')
              .addClass('section-subtitle--entered');

            $(this)
              .find('.section-txt')
              .addClass('section-txt--entered');
          },
          afterResize: function() {
            var sectionHeight = $('.section').height(),
              bodyWidth = $('body').width();

            //if(sectionHeight < 600){

            //$('.section').css({'height':'600px'});

            //}

            if (bodyWidth <= 640) {
              $('.section').css({
                height: 'auto'
              });
              $.fn.fullpage.destroy('all');
            }
          }
        });
      }
    }

    return {
      do: init
    };
  })();

  var longScroll = (function(viewportHeight) {
    var scrollPos = function() {
      return document.documentElement.scrollTop || document.body.scrollTop || 0;
    };

    function initSection(viewportHeight) {
      for (var i = 0; i < $('.section').length; i++) {
        var s = $('.section').eq(i);

        if (s.offset().top - scrollPos() <= viewportHeight / 1.5) {
          s.addClass('section--entered');

          s.find('.section-title').addClass('section-title--entered');

          s.find('.section-subtitle').addClass('section-subtitle--entered');

          s.find('.section-txt').addClass('section-txt--entered');
        }
      }

      if ($('.section--entered').length == $('.section').length) {
        scrollMode.removeInitSectionHandler();
        scrollMode.bindToggleFormBtnHandler();
        status.pageRendered = true;
      }

      toggleFormBtn(viewportHeight);
    }

    function toggleFormBtn(viewportHeight) {
      if (scrollPos() - viewportHeight >= 0) {
        $('.form-container').addClass('form--visible');
      } else {
        $('.form-container').removeClass('form--visible');
      }
    }

    return {
      initSection: initSection,
      toggleFormBtn: toggleFormBtn
    };
  })();

  var scrollMode = (function() {
    var viewportWidth = function() {
        return $('body').width();
      },
      viewportHeight = function() {
        return $(window).height();
      },
      initSectionHandler = function() {
        longScroll.initSection(viewportHeight());
      },
      toggleFormBtnHandler = function() {
        longScroll.toggleFormBtn(viewportHeight());
      };

    var scrollPos = function() {
      return document.documentElement.scrollTop || document.body.scrollTop || 0;
    };

    function init() {
      if (viewportWidth() > 640) {
        initFullPage.do();
        $('html')
          .removeClass('mobile')
          .addClass('desktop');
      } else {
        $('html')
          .removeClass('desktop')
          .addClass('mobile');

        if (scrollPos() == 0) {
          longScroll.initSection(viewportHeight());
        }

        $(window)
          .off('scroll', initSectionHandler)
          .on('scroll', initSectionHandler);
      }
    }

    function reCalculate() {
      if (viewportWidth() > 640) {
        initFullPage.do();
        $('html')
          .removeClass('mobile')
          .addClass('desktop');
        $(window).off('scroll', initSectionHandler);
        $(window).off('scroll', toggleFormBtnHandler);
      } else {
        $('html')
          .removeClass('desktop')
          .addClass('mobile');
        if ($('.section--entered').length != $('.section').length) {
          $(window)
            .off('scroll', initSectionHandler)
            .on('scroll', initSectionHandler);
        }

        $(window)
          .off('scroll', toggleFormBtnHandler)
          .on('scroll', toggleFormBtnHandler);
      }
    }

    function removeInitSectionHandler() {
      $(window).off('scroll', initSectionHandler);
    }

    function bindInitSectionHandler() {
      $(window)
        .off('scroll', initSectionHandler)
        .on('scroll', initSectionHandler);
    }

    function removeToggleFormBtnHandler() {
      $(window).off('scroll', toggleFormBtnHandler);
    }

    function bindToggleFormBtnHandler() {
      $(window)
        .off('scroll', toggleFormBtnHandler)
        .on('scroll', toggleFormBtnHandler);
    }

    return {
      do: init,
      reCalculate: reCalculate,
      bindInitSectionHandler: bindInitSectionHandler,
      removeInitSectionHandler: removeInitSectionHandler,
      bindToggleFormBtnHandler: bindToggleFormBtnHandler,
      removeToggleFormBtnHandler: removeToggleFormBtnHandler
    };
  })();

  scrollMode.do();

  var uiBinding = (function() {
    var scrollPos = function() {
      return document.documentElement.scrollTop || document.body.scrollTop || 0;
    };

    var viewMode = function() {
      return $('html').hasClass('desktop') ?
        'desktop' :
        $('html').hasClass('mobile') ? 'mobile' : null;
    };

    var expandForm = function(e) {
      e.preventDefault();

      $('body').css({
        overflow: 'hidden'
      });

      function prepareForm() {
        var deferred = $.Deferred();

        if ($('html').hasClass('ios')) {
          if (status.pageRendered == false) {
            scrollMode.removeInitSectionHandler();
          } else {
            scrollMode.removeToggleFormBtnHandler();
          }

          $('.main').css({ position: 'fixed', top: -scrollPos() });

          deferred.resolve(1);
        } else {
          deferred.resolve(1);
        }

        return deferred.promise();
      }

      if (
        $(this).is('.home-cta__btn') ||
        $('body').hasClass('fp-viewing-section-1')
      ) {
        status.showBtn = false;
      } else {
        status.showBtn = true;
      }

      prepareForm().done(function(resp) {
        $('.form-container')
          .addClass('form--ready form--focused form--visible')
          .on(transitionE() + '.formTransition', function(e) {
            if (
              $(e.target).is('#phone_numberDiv') &&
              e.originalEvent.propertyName == 'height'
            ) {
              $('.form-container')
                .addClass('form--active')
                .off(transitionE() + '.formTransition');
              $(
                '#email, .eaSubmitButton, .home-cta__btn',
                '.en__submit button'
              ).off('click.expandForm');
            }
          });
      });
    };

    var collapseForm = function(e) {

      var classToRemove = null;

      if (status.showBtn == false) {
        classToRemove = 'form--ready form--active form--visible';
      } else if (status.showBtn == true) {
        classToRemove = 'form--ready form--active';
      }

      function prepareForm() {
        var deferred = $.Deferred();

        if ($('html').hasClass('ios')) {
          //scrollMode.bindToggleFormBtnHandler();

          if (status.pageRendered == false) {
            scrollMode.bindInitSectionHandler();
          } else {
            scrollMode.bindToggleFormBtnHandler();
          }

          $('.main').css({ position: '', top: '' });

          deferred.resolve(1);
        } else {
          deferred.resolve(1);
        }

        return deferred.promise();
      }

      $('.form-container')
        .removeClass(classToRemove)
        .on(transitionE() + '.formCollapse', function(e) {
          if (
            $(e.target).is('.form-container-inner') &&
            e.originalEvent.propertyName == 'min-height'
          ) {
            $(this)
              .removeClass('form--focused')
              .off(transitionE() + '.formCollapse');
          }
        });

      $('body').css({
        overflow: 'visible'
      });

      prepareForm().done(function() {
        $('#email, .eaSubmitButton, .home-cta__btn').on(
          'click.expandForm',
          expandForm
        );
      });
    };

    var formInteraction = function(e) {
      $(this)
        .parents('div[id$="Div"]')
        .toggleClass('input--focused');
    };

    var expandMore = function(e) {
      $(this)
        .parents('section')
        .addClass('section--interacted');
      $(this).addClass('section-txt__more--hidden');

      var el1 = $(this).prev('p'),
        el2 = $(this)
        .parent('.section-txt__blk')
        .next('.section-txt__blk')
        .children('p'),
        elArr = [];

      if (el1.index() != 0) {
        el1.each(function() {
          elArr.push(this);
        });
      }

      if (el2.length > 0) {
        el2.each(function() {
          elArr.push(this);
        });
      }

      animateHeightToAuto($(elArr));

      function animateHeightToAuto(el) {
        el.each(function(i) {
          $(this).css({
            position: 'absolute',
            height: 'auto'
          });

          var height = $(this).outerHeight(),
            that = this;

          $(this).height(0);

          setTimeout(function() {
            $(that)
              .css({
                height: height,
                margin: '1em 0',
                position: 'relative',
                transition: 'height 0.5s cubic-bezier(.19,1,.22,1)',
                '-webkit-transition': 'height 0.5s cubic-bezier(.19,1,.22,1)'
              })
              .on(transitionE() + '.expandHeight', function(e) {
                if (
                  $(e.target).is($(that)) &&
                  e.originalEvent.propertyName == 'height'
                ) {
                  $(that)
                    .css({
                      height: 'auto',
                      transition: '',
                      '-webkit-transition': '',
                      'transition-delay': i / 10 + 's'
                    })
                    .off(transitionE() + '.expandHeight');

                  $(that)
                    .parent('.section-txt__blk')
                    .addClass('section-txt__blk--expanded');
                }
              });
          }, 20);
        });
      }
    };

    $('#email, .eaSubmitButton, .home-cta__btn').on(
      'click.expandForm',
      expandForm
    );
    $('.form-close').on('click.collapseForm', collapseForm);
    $('.eaFormTextfield, #date_of_birth1').on('focus blur', formInteraction);

    if (viewMode() == 'mobile') {
      $('.section-txt__more').on('click.expandMore', expandMore);
    }

    function reBind() {
      if (viewMode() == 'mobile') {
        $('.section-txt__more')
          .off('click.expandMore')
          .on('click.expandMore', expandMore);
      }
      if (viewMode() == 'desktop') {
        $('.section-txt__more').off('click.expandMore');
      }
    }

    return {
      reBind: reBind
    };
  })();

  if (!$('html').hasClass('ios')) {
    $(window).on(
      'resize',
      debounce(function() {
        scrollMode.reCalculate();
        uiBinding.reBind();
      }, 250)
    );
  }
});

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

  })();

  $('.fbshare-logo a').on('click', fbShare);

  var fbShare = function(e) {
    e.preventDefault();
    var baseURL = 'https://www.facebook.com/sharer/sharer.php';
    var u = window.location;
    var t = ($(window).height() - 436) / 2;
    var l = ($(window).width() - 626) / 2;

    window.open(
      baseURL + '?u=' + encodeURIComponent(u),
      '_blank',
      'width=626,height=436,top=' + t + ',left=' + l
    );
  };

  /*
  $(".eaFormField").each(function() {
    var input = $(this).find("input");
    if (input.attr("type") == "text") {
      var label = $(this)
        .parent()
        .find("label");
      var labelText = label.find("a").text();
      $(this)
        .find('input[type="text"]')
        .attr("placeholder", labelText);
    }
  });

  $(".eaform")
    .removeAttr("onsubmit")
    .off();

  $("#country").val("HK");

  $(
    "#source, #channel, #country, #language_pref, #date_of_birth1, #date_of_birth2, #date_of_birth3"
  ).removeAttr("onblur");

  $('input[name="ea.AJAX.submit"]').val("true");

  */

  /*
  $(".eaform").on("submit", function(e) {
    e.preventDefault();
    $(".form-container-inner")
      .removeClass("form--shake")
      .on(animationE() + ".formShake", function(e) {
        if (e.target == this && e.originalEvent.animationName == "shake") {
          $(this).removeClass("form--shake");
        }
      });

    $(".eaform").removeClass("eaform--invalid");

    var that = this;

    validateEAformRectified(this, true)
      .done(function(resp) {
        doAJAXForm(that, "eaAjaxContent", true);
        hideFormButtons(1);
        $(".form-close").css({
          display: "none"
        });
      })
      .fail(function(resp) {
        $(".form-container-inner").addClass("form--shake");
        $(".eaform").addClass("eaform--invalid");
        console.log("eaform--invalid");
        //$('#eaerrors').html(resp).slideDown('fast');
      });
  });
  */
});

/*

jQuery using .on() and .off()

$(elem).on("click", function() {
	console.log("clicked");
});

$("table").on("click", "tr", function() {
	console.log("tr inside table clicked");
});

$('#container a').on({
  click: function(e) {
    e.preventDefault();
    console.log('item anchor clicked');
  },
  mouseenter: function(e) {
    console.log('enter!');
  }
});

*/