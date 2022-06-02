<template>
  <div class="container">
    <div class="box">
      <div class="smallContainer">
        <div class="rectangular">
          <UpvoteButton
            v-for="(item, i) in container1"
            :key="i"
            :color="[
              UpvoteButton1State ? UpvoteButton2Color : UpvoteButton1Color,
            ]"
            @click="toggleColor1"
          />
        </div>
        <button class="btn" @click="addUpvote1">+</button>
      </div>
      <div class="smallContainer">
        <div class="rectangular">
          <UpvoteButton
            v-for="(item, i) in container2"
            :key="i"
            :color="[
              UpvoteButton2State ? UpvoteButton1Color : UpvoteButton2Color,
            ]"
            @click="toggleColor2"
          />
        </div>
        <button class="btn" @click="addUpvote2">+</button>
      </div>
      <div class="smallContainer">
        <div class="rectangular">
          <UpvoteButton
            v-for="(item, i) in container3"
            :key="i"
            :color="[
              UpvoteButton3State ? UpvoteButton1Color : UpvoteButton3Color,
            ]"
            @click="toggleColor3"
          />
        </div>
        <button class="btn" @click="addUpvote3">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import UpvoteButton from "./UpvoteButton.vue";
// import { mapState, mapActions } from "vuex";
export default {
  name: "Project",
  components: { UpvoteButton },
  computed: {
    container1() {
      return this.$store.state.container1;
    },
    container2() {
      return this.$store.state.container2;
    },
    container3() {
      return this.$store.state.container3;
    },
    UpvoteButton1() {
      return this.$store.state.upvoteButton[0];
    },
    UpvoteButton2() {
      return this.$store.state.upvoteButton[1];
    },
    UpvoteButton3() {
      return this.$store.state.upvoteButton[2];
    },
    UpvoteButton1Color() {
      return this.$store.state.upvoteButton[0].className;
    },
    UpvoteButton2Color() {
      return this.$store.state.upvoteButton[1].className;
    },
    UpvoteButton3Color() {
      return this.$store.state.upvoteButton[2].className;
    },
    UpvoteButton1State() {
      return this.$store.state.upvoteButton[0].isSelected;
    },
    UpvoteButton2State() {
      return this.$store.state.upvoteButton[1].isSelected;
    },
    UpvoteButton3State() {
      return this.$store.state.upvoteButton[2].isSelected;
    },
  },
  methods: {
    addUpvote1() {
      // this.$store.dispatch("addUpvoteToContainer", { item: this.upvote });
      this.$store.commit("addToContainer1", { item: this.UpvoteButton1 });
    },
    addUpvote2() {
      // this.$store.dispatch("addUpvoteToContainer", { item: this.upvote });
      this.$store.commit("addToContainer2", { item: this.UpvoteButton2 });
    },
    addUpvote3() {
      // this.$store.dispatch("addUpvoteToContainer", { item: this.upvote });
      this.$store.commit("addToContainer3", { item: this.UpvoteButton3 });
    },
    toggleColor1() {
      this.$store.commit("toggleClass1");
    },
    toggleColor2() {
      this.$store.commit("toggleClass2");
    },
    toggleColor3() {
      this.$store.commit("toggleClass3");
    },
  },
};
</script>
