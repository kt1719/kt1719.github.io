(function ($) {
    $(function () {
  
  
      $(window).on('scroll', function () {
        fnOnScroll();
      });
  
      $(window).on('resize', function () {
        fnOnResize();
      });

      var section = document.getElementById('timeline')
      var index = 2;
      var prev_index = 0;
      var colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5']
  
  
      var agTimeline = $('.js-timeline'),
        agTimelineLine = $('.js-timeline_line'),
        agTimelineLineProgress = $('.js-timeline_line-progress'),
        agTimelinePoint = $('.js-timeline-card_point-box'),
        agTimelineItem = $('.js-timeline_item'),
        agOuterHeight = $(window).outerHeight(),
        agHeight = $(window).height(),
        f = -1,
        agFlag = false;
  
      function fnOnScroll() {
        agPosY = $(window).scrollTop();
  
        fnUpdateFrame();
      }
  
      function fnOnResize() {
        agPosY = $(window).scrollTop();
        agHeight = $(window).height();
  
        fnUpdateFrame();
      }
  
      function fnUpdateWindow() {
        agFlag = false;
  
        agTimelineLine.css({
          top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
          bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
        });
  
        f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
      }
  
      function fnUpdateProgress() {
        var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
  
        i = agTop + agPosY - $(window).scrollTop();
        a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
        n = agPosY - a + agOuterHeight / 2;
        i <= agPosY + agOuterHeight / 2 && (n = i - a);
        agTimelineLineProgress.css({height: n + "px"});
  
        agTimelineItem.each(function () {
          var agTop = $(this).find(agTimelinePoint).offset().top;
          if (agTop + agPosY - $(window).scrollTop() < (agPosY + .5 * agOuterHeight)) {
            if($(this).hasClass('js-ag-active') == false) {
              index++
              console.log("index up to " + index)
              if (index % 3 == 0) 
              {
                section.classList.remove(colors[prev_index/3])
                section.classList.add(colors[index/3])
                prev_index = index
              }
            }
            $(this).addClass('js-ag-active')
          }
          else{
            if($(this).hasClass('js-ag-active') == true) {
              index--
              if (index % 3 == 0) 
              {
                section.classList.remove(colors[prev_index/3])
                section.classList.add(colors[index/3])
                prev_index = index
              }
            }
            $(this).removeClass('js-ag-active')
          }
        })
      }
  
      function fnUpdateFrame() {
        agFlag || requestAnimationFrame(fnUpdateWindow);
        agFlag = true;
      }
  
  
    });
  })(jQuery);
  