<template>
  <button :class="color">⬆</button>
</template>

<script>
export default {
  name: "Upvote",
  props: {
    color: String,
  },
};
</script>
