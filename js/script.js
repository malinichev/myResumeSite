
var tl = gsap.timeline();
tl.from(".page-header", {duration: .5, opacity: 0,});
tl.from(".page-header", {duration: .5, y: -10}, "-=.5");
tl.from(".header", {duration: .5, opacity: 0}, "-=.2");
tl.from(".header", {duration: 1, x: -10}, "-=.5");
tl.from(".zagalov", {duration: .5, opacity: 0, stagger: .3}, "-=.5");
tl.from(".zagalov", {duration: .2, y: -10, stagger: .3}, "-=.5");
// tl.from(".flyin-grid__item", {duration: .5, opacity: 0, stagger: .3});
// tl.from(".flyin-grid__item", {duration: .2, x: -10, stagger: .3});
// gsap.from(".logo", {delay:0.5, duration: 1, y: -10, stagger: 0.2, ease: "bounce"});
tl.play()
gsap.from(".flyin-grid__item", {delay: 1, duration: .3, opacity: 0, stagger: .3});
gsap.from(".flyin-grid__item", {delay: 1.3, duration: .4, y: -10, stagger: .3});
// var tl2 = gsap.timeline();


// // // gsap.from(".logo", {delay:0.5, duration: 1, y: -10, stagger: 0.2, ease: "bounce"});
// tl2.play()



window.onscroll = function() {
    var scrolled = window.pageYOffset;
    var timeout = null;
    var button = document.getElementById('myShake');
    if(scrolled > 0 ){
    // console.log( 'Позиция скрола: '+scrolled  );
    // clearTimeout(timeout);
    timeout = setTimeout(function() {
      button.classList.add('shake');
      }, 1000);
      button.addEventListener('animationend', function() {
      button.classList.remove('shake');
      });
  }else{
      
    }
};

var nodeMango = bodymovin.loadAnimation({
  container: document.getElementById('nodeMango'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/nodeMango.json',

});
// nodeMango.play();

var phpMySql = bodymovin.loadAnimation({
  container: document.getElementById('phpMySql'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/phpMySql.json',
  rendererSettings: {
    progressiveLoad: false
  }
});


var git = bodymovin.loadAnimation({
  container: document.getElementById('git'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/git.json',
  rendererSettings: {
    progressiveLoad: false
  }
});


var bem = bodymovin.loadAnimation({
  container: document.getElementById('bem'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/bem.json',
  rendererSettings: {
    progressiveLoad: false
  }
});

var myCss = bodymovin.loadAnimation({
  container: document.getElementById('myCss'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/css.json',
  rendererSettings: {
    progressiveLoad: false
  }
});

var mySvg = bodymovin.loadAnimation({
  container: document.getElementById('mySvg'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/svg.json',
  rendererSettings: {
    progressiveLoad: false
  }
});

var webpack = bodymovin.loadAnimation({
  container: document.getElementById('webpack'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data/webpack.json',
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

var Good = false;

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function () {
  $('#nodeMango').each(function () {
    
    if ($(this).isInViewport()) {
      nodeMango.play();
    
    } else {
      nodeMango.stop();
    
    }
  });
  $('#phpMySql').each(function () {
    
    if ($(this).isInViewport()) {
      phpMySql.play();
    
    } else {
      phpMySql.stop();
    
    }
  });
  $('#git').each(function () {
    
    if ($(this).isInViewport()) {
      git.play();
    
    } else {
      git.stop();
    
    }
  });
  $('#bem').each(function () {
    
    if ($(this).isInViewport()) {
      bem.play();
    
    } else {
      bem.stop();
    
    }
  });
  $('#myCss').each(function () {
    
    if ($(this).isInViewport()) {
      myCss.play();
    
    } else {
      myCss.stop();
    
    }
  });
    $('#mySvg').each(function () {
    
    if ($(this).isInViewport()) {
      mySvg.play();
    
    } else {
      mySvg.stop();
    
    }
  });

    $('#webpack').each(function () {
    
    if ($(this).isInViewport()) {
      webpack.play();
    
    } else {
      webpack.stop();
    
    }
  });
   
// setTimeout(document.getElementById('myShake').classList.add('shake'), 10000);
// setTimeout(document.getElementById('myShake').classList.remove('shake'), 10000);
    
    

  
});



