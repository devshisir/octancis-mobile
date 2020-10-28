
	document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calenderActive');

    // store today date
	var today = moment().format("YYYY-MM-DD");
	// end store today date
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: today,
      headerToolbar: {
        left: 'prev,title,next',
        right: 'today,timeGridDay,timeGridWeek,dayGridMonth'
      },


      // this is all event click function


      dateClick: function(info){
      	$('#eventPopupModal').modal('show');
      },


      eventClick: function(info){
      	$('#eventPopupModal').modal('show');
      },

      select: function(info) {
        $('#eventPopupModal').modal('show');
      },












      selectable: true,
      contentHeight: 650,
      droppable: true,
       editable: true,

      // select: function(arg) {
      //   var title = prompt('Event Title:');
      //   if (title) {
      //     calendar.addEvent({
      //       title: title,
      //       start: arg.start,
      //       end: arg.end,
      //       allDay: arg.allDay
      //     })
      //   }
      //   calendar.unselect()
      // },

      events: [
        {
          title: 'Concept LLC',
          start: today,
        },
        {
          title: 'Optimist Group',
          start: today,
        },
        {
          title: 'Optimist Group',
          start: '2020-10-16'
        },
        {
          title: 'Kick-Off Meeting',
          start: '2020-10-30'
        },
        {
          title: 'Weekly Catch-Up',
          start: '2020-10-22'
        },
        {
          title: 'Team Catch-Up',
          start: '2020-10-26'
        },
        {
          title: 'Demo Event instead',
          start: '2020-09-28'
        },
        {
          title: 'Demo Event instead',
          start: '2020-10-03'
        },
        {
          title: 'Weekley View22',
          start: '2020-10-30T20:00:00'
        },
        {
          title: 'Meeting',
          start: '2020-10-21T24:30:00',
          end: '2020-10-20T6:30:00'
        },
        {
          title: 'Meeting week',
          start: '2020-10-17T24:30:00',
          end: '2020-10-18T6:30:00'
        },

      ]
    });

    calendar.render();























});
