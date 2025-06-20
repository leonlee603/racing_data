<template>
  <div class="text-4xl">{{ currentYear }} FIA FORMULA ONE WORLD CHAMPIONSHIP™ RACE CALENDAR</div>
  <div class="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    <ScheduleCard v-for="(meeting, index) in formattedMeetings" :meeting="meeting" :key="meeting.meeting_key" :index="index"/>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear();
const { data:meetings, pending, error, refresh } = await useFetch(`/api/meetings`);


const now = new Date(); // Current date/time

const processedMeetings = meetings.value.map(meeting => {
  const startDate = new Date(meeting.date_start);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 2); // Add 2 days
  
  return {
    ...meeting,
    date_end: endDate.toISOString()
  };
});

// Find first upcoming meeting (with earliest future date_start)
const upcomingMeeting = processedMeetings
  .filter(m => new Date(m.date_end) > now)
  .sort((a, b) => new Date(a.date_start) - new Date(b.date_start))[0];

const formattedMeetings = processedMeetings.map(meeting => {
  const meetingEnd = new Date(meeting.date_end);
  
  if (meetingEnd <= now) {
    return { ...meeting, status: "pass" };
  } 
  else if (upcomingMeeting && meeting.meeting_key === upcomingMeeting.meeting_key) {
    return { ...meeting, status: "upcoming" };
  }
  else {
    return { ...meeting, status: "future" };
  }
});
// console.log(result);

</script>

<style></style>
