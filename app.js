window.addEventListener('load', loader);

function loader(){

    const TLLOAD = gsap.timeline();

    TLLOAD
    .to("#textPres", 1, {x: +0, ease : Power1.easeInOut})
    .to("#photo", 1, {x: -0, ease : Power1.easeInOut});

}


// Toggle Icone hamburger
$(document).ready(function(){
  $('.barres').click(function(){
      $('.barres').toggleClass('active');
  })
})


// Greensock Animations

var timeline = new TimelineMax();
timeline.staggerFrom(".menu ul li ", 0.4, {x: -80, opacity: 0}, 0.3, );
timeline.to(".menu", 1, {left: '0%',ease: Expo.easeInOut, delay: -1.5});


timeline.reverse();

$(document).on('click', '.barres', function(){
  timeline.play();
});

$(document).on('click', '.cross', function(){
  timeline.reverse();
  $('.barres').toggleClass('active');
})
$(document).on('click', 'a', function(){
  console.log('hello')
  timeline.reverse();
  $('.barres').toggleClass('active');
})


function scrollWin() {
  window.scrollTo(0, 800);
}

//Cursors


var cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale')


  gsap.to({}, 0.05, {
    repeat: -1,

    onRepeat: function () {
      document.addEventListener('mousemove', e => {
        cursor.setAttribute('style', 'top:'+(e.pageY - 0)+"px; left:"+(e.pageX - 0)+"px;")
    })
    }
});

cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if(link.classList.contains('small')){
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
    });

///

    link.addEventListener('mouseleave', () => {
      cursor.classList.remove('grow');
      cursor.classList.remove('grow-cursor1');
  });
  link.addEventListener('mousemove', () => {
      cursor.classList.add('grow');
      if(link.classList.contains('cursor1')){
          cursor.classList.remove('grow');
          cursor.classList.add('grow-cursor1');
      }
  });

///
  link.addEventListener('mouseleave', () => {
      cursor.classList.remove('grow');
      cursor.classList.remove('grow-cursor2');
  });
  link.addEventListener('mousemove', () => {
      cursor.classList.add('grow');
      if(link.classList.contains('cursor2')){
          cursor.classList.remove('grow');
          cursor.classList.add('grow-cursor2');
      }
  });
///
link.addEventListener('mouseleave', () => {
  cursor.classList.remove('grow');
  cursor.classList.remove('grow-cursor3');
});
link.addEventListener('mousemove', () => {
  cursor.classList.add('grow');
  if(link.classList.contains('cursor3')){
      cursor.classList.remove('grow');
      cursor.classList.add('grow-cursor3');
  }
});


});
