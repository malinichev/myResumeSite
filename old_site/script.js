var animation1 = bodymovin.loadAnimation({
  container: document.getElementById('PixelPerfect'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/perf.json',

});
animation1.play();

var animation2 = bodymovin.loadAnimation({
  container: document.getElementById('bootstrap'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/bootstrap.json',
  rendererSettings: {
    progressiveLoad: false
  }
});


var animation3 = bodymovin.loadAnimation({
  container: document.getElementById('webpack'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/webpack.json',
  rendererSettings: {
    progressiveLoad: false
  }
});


var animation4 = bodymovin.loadAnimation({
  container: document.getElementById('node'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/node.json',
  rendererSettings: {
    progressiveLoad: false
  }
});


var animation5 = bodymovin.loadAnimation({
  container: document.getElementById('linux'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/linux.json',
  rendererSettings: {
    progressiveLoad: false
  }
});






var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
  V = .4;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
  
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function (ea) { //по клику на ссылку
    ea.preventDefault(); //отменяем стандартное поведение


    var w = window.pageYOffset,  // производим прокрутка прокрутка
      hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
      
    t =  (document.querySelector(hash).getBoundingClientRect().top-45),  // отступ от окна браузера до id
      console.log(t),
      start = null;
      
    requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
        r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
      window.scrollTo(0, r);
      if (r != w + t) {
        requestAnimationFrame(step)
      } else {
        location.hash = hash  // URL с хэшем
      }
    }
  }, false);
}



$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function () {
  $('#PixelPerfect').each(function () {
    
    if ($(this).isInViewport()) {
      animation1.play();
    
    } else {
      animation1.stop();
    
    }
  });
  $('#bootstrap').each(function () {
    
    if ($(this).isInViewport()) {
      animation2.play();
    
    } else {
      animation2.stop();
    
    }
  });
  $('#webpack').each(function () {
    
    if ($(this).isInViewport()) {
      animation3.play();
    
    } else {
      animation3.stop();
    
    }
  });
  $('#node').each(function () {
    
    if ($(this).isInViewport()) {
      animation4.play();
    
    } else {
      animation4.stop();
    
    }
  });
  $('#linux').each(function () {
    
    if ($(this).isInViewport()) {
      animation5.play();
    
    } else {
      animation5.stop();
    
    }
  });
});
