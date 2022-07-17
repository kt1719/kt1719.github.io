// envelope animation
function activateTimelineTitle () {
    var tl = new TimelineLite({delay: 0.3}),
      firstBg = document.querySelectorAll('.timeline_text__first_bg'),
      secBg = document.querySelectorAll('.timeline_text__second_bg'),
      word  = document.querySelectorAll('.timeline_text__word');
    
    tl
      .to(firstBg, 0.2, {scaleX:1})
      .to(secBg, 0.2, {scaleX:1})
      .to(word, 0.1, {opacity:1}, "-=0.1")  
      .to(firstBg, 0.2, {scaleX:0})
      .to(secBg, 0.2, {scaleX:0});
}