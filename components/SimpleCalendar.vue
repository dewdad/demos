<template>
  <div class="section">
    <h2 class="h2">Simple Calendars</h2>
    <p class="text-lg font-medium text-gray-600 mb-6">
      Show highlights, dots, bars and even custom popovers
    </p>
    <div class="flex flex-col items-center md:flex-row md:justify-around">
      <div class="mb-6">
        <h3 class="text-base semibold text-gray-700 mb-3">Meetings Calendar</h3>
        <vc-date-picker
          ref="meetingCal"
          v-model="date"
          is-inline
          style="width: auto"
          :attributes="attrsMeeting"
          :available-dates="meetingDates"
          @update:topage="loadCalendarMeetings"
        >
          <div
            slot="day-popover"
            slot-scope="{ day, format, masks, attributes, updateLayout }"
          >
            <!--Day Header-->
            <span class="text-xs text-gray-3 font-semibold">{{
              format(day.date, masks.dayPopover)
            }}</span>
          </div>
        </vc-date-picker>
      </div>
    </div>
  </div>
</template>

<script>
const faker = require('faker')
const { pageForThisMonth, pageForNextMonth } = require('~/utils/helpers')
let { month: thisMonth, year: thisMonthYear } = pageForThisMonth()
let { month: nextMonth, year: nextMonthYear } = pageForNextMonth(
  thisMonth,
  thisMonthYear
)
thisMonth--
nextMonth--

export default {
  directives: {
    focusSelect: {
      inserted(el) {
        el.focus()
        el.select()
      }
    }
  },
  data() {
    return {
      calendarMeetings: [],
      // poduces result like this: [{"count":1,"date":"2019-07-11T06:33:14.192Z"},{"count":1,"date":"2019-08-02T17:58:30.068Z"},{"count":2,"date":"2019-08-01T21:41:28.362Z"},{"count":1,"date":"2019-07-31T06:03:56.681Z"},{"count":3,"date":"2019-07-11T22:08:02.942Z"},{"count":1,"date":"2019-07-27T08:04:40.611Z"},{"count":1,"date":"2019-06-04T20:19:18.179Z"},{"count":1,"date":"2019-06-16T14:44:35.536Z"},{"count":4,"date":"2019-05-30T20:02:52.421Z"},{"count":3,"date":"2019-06-17T11:13:41.814Z"}]
      incId: 5,
      editId: 0,
      date: new Date()
    }
  },
  computed: {
    attrsMeeting() {
      console.log('recomputing calendar attributes')
      return this.calendarMeetings.map(meetingsDay => ({
        // key: todo.id,
        dates: meetingsDay.date, // new Date(meetingsDay.date),
        // customData: meetingsDay['meetingMetaData'],
        // order: todo.id,
        dot:
          'blue' /* {
          color: todo.color,
          class: todo.isComplete ? 'opacity-25' : '',
        } */,
        popover: {
          visibility: 'hover'
        }
      }))
    },
    meetingDates() {
      console.log('recomputing available dates')
      return this.calendarMeetings.length
        ? Array.from(
            new Set(
              this.calendarMeetings.map(
                m => m.date.substring(0, 10) + 'T10:00:00.000Z'
              )
            )
          ) /* .map(e => {let date = new Date(e); date.setHours(0,0,0,0); return date;}) */
        : []
    }
  },
  mounted() {
    window.myDemos = this
    this.initCalendarMeetings()
  },
  methods: {
    loadCalendarMeetings() {
      // if I call initCalendarMeetings() here the calendar will show an inconsistant
    },
    initCalendarMeetings() {
      this.calendarMeetings = (length =>
        Array.from({ length }, () => ({
          date: faker.unique(faker.date.future, [0.2]).toISOString(), // date in .2 years from now
          count: faker.random.number({ min: 1, max: 6 })
        })))(10)
    }
  }
}
</script>
