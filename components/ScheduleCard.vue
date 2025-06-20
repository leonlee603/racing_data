<template>
  <div class="flex flex-col gap-1 rounded-md bg-black p-4" :class="status">
    <div class="flex items-center justify-between">
      <span class="meeting-round text-muted text-xs font-bold uppercase">{{
        index === 0 ? "Testing" : `Round ${index}`
      }}</span>
      <div
        v-if="meeting.status === 'pass'"
        class="flex items-center gap-1.5 rounded-md bg-[#15151e] px-2.5 py-1 text-xs font-bold"
      >
        <Icon name="fluent-emoji-flat:chequered-flag" />
        {{ `${day} - ${day + 2} ${month}` }}
      </div>
      <div
        v-if="meeting.status === 'upcoming'"
        class="rounded-md bg-white px-2.5 py-1 text-xs font-bold text-[#9d0400]"
      >
        Next Race
      </div>
      <div
        v-if="meeting.status === 'future'"
        class="rounded-md bg-[#15151e] px-2.5 py-1 text-xs font-bold"
      >
        Upcoming
      </div>
    </div>

    <div class="flex items-center gap-3">
      <Icon :name="ctyFlag" />
      <span class="text-2xl font-bold"> {{ meeting.country_name }}</span>
    </div>
    <div class="meeting-name text-muted mb-5 mt-1.5 grow text-sm font-bold">
      {{ meeting.meeting_official_name }}
    </div>
    <div
      class="flex flex-row items-end justify-between"
      :class="{ 'justify-end': meeting.status === 'pass' }"
    >
      <div
        v-show="meeting.status !== 'pass'"
        class="meeting-date text-xl font-bold"
      >
        {{ `${day} - ${day + 2} ${month}` }}
      </div>
      <div class="meeting-track" v-if="meeting.img">
        <img :src="meeting.img" alt="" class="h-[56px]" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["meeting", "index"]);

const MONTH_ABBR = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const dateObj = new Date(props.meeting.date_start);
const day = dateObj.getDate();
const month = MONTH_ABBR[dateObj.getMonth()];

const ctyName =
  props.meeting.country_name === "Great Britain"
    ? "United Kingdom"
    : props.meeting.country_name;
const ctyFlag = `twemoji:flag-${ctyName.toLowerCase().replaceAll(" ", "-")}`;
const status = props.meeting.status;

// openF1 api may not able to get back too many request at a time, so I design to not show drivers of top 3 position.
// const { data: position_1, pending_1, error_1, refresh_1 } = await useFetch(`https://api.openf1.org/v1/position?meeting_key=${props.meeting.meeting_key}&position=1`);
// const { data:position_2, pending_2, error_2, refresh_2 } = await useFetch(`https://api.openf1.org/v1/position?meeting_key=${props.meeting.meeting_key}&position=2`);
// const { data:position_3, pending_3, error_3, refresh_3 } = await useFetch(`https://api.openf1.org/v1/position?meeting_key=${props.meeting.meeting_key}&position=3`);
</script>

<style lang="scss" scoped>
.upcoming {
  background-color: rgb(225, 6, 0);
  .meeting-round,
  .meeting-name {
    color: white;
  }
}
</style>
