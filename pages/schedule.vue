<template>
  <div class="my-7 text-4xl font-bold">
    {{ currentYear }} FIA FORMULA ONE WORLD CHAMPIONSHIP™ RACE CALENDAR
  </div>

  <div v-if="pending" class="bg-red-600">
    Loading meetings...
  </div>
  <div v-else-if="error">Failed to load meetings: {{ error.message }}</div>
  <div
    v-else
    class="my-16 grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
  >
    <!-- <ScheduleCard
      v-for="(meeting, index) in formattedMeetings"
      :meeting="meeting"
      :key="meeting.meeting_key"
      :index="index"
    /> -->
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear();

const {
  data: meetings,
  pending,
  error,
  refresh,
} =  useFetch(`/api/meetings`);

// const now = new Date(); // Current date/time
// // Add new property of "date_end" to each record
// const processedMeetings = meetings.value.map((meeting) => {
//   const startDate = new Date(meeting.date_start);
//   const endDate = new Date(startDate);
//   endDate.setDate(startDate.getDate() + 2); // Add 2 days
//   return {
//     ...meeting,
//     date_end: endDate.toISOString(),
//   };
// });
// // Find first upcoming meeting (with earliest future date_start)
// const upcomingMeeting = processedMeetings
//   .filter((m) => new Date(m.date_end) > now)
//   .sort((a, b) => new Date(a.date_start) - new Date(b.date_start))[0];
// // Return a formatted Meetings array that each item has a additional "date_end" & "status" property
// const formattedMeetings = processedMeetings.map((meeting) => {
//   const meetingEnd = new Date(meeting.date_end);

//   if (meetingEnd <= now) {
//     return { ...meeting, status: "pass" };
//   } else if (
//     upcomingMeeting &&
//     meeting.meeting_key === upcomingMeeting.meeting_key
//   ) {
//     return { ...meeting, status: "upcoming" };
//   } else {
//     return { ...meeting, status: "future" };
//   }
// });
</script>

<style></style>
