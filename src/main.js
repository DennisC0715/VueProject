import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import "./index.css";

const store = createStore({
  state() {
    return {
      upvoteButton: [
        { id: "1", className: "upvote", isSelected: false },
        { id: "2", className: "upvote2", isSelected: false },
        { id: "3", className: "upvote3", isSelected: false },
      ],
      container1: [],
      container2: [],
      container3: [],
    };
  },
  mutations: {
    addToContainer1(state, payload) {
      state.container1.push(payload.item);
    },
    addToContainer2(state, payload) {
      state.container2.push(payload.item);
    },
    addToContainer3(state, payload) {
      state.container3.push(payload.item);
    },
    toggleClass1(state) {
      state.upvoteButton[0].isSelected = !state.upvoteButton[0].isSelected;
    },
    toggleClass2(state) {
      state.upvoteButton[1].isSelected = !state.upvoteButton[1].isSelected;
    },
    toggleClass3(state) {
      state.upvoteButton[2].isSelected = !state.upvoteButton[2].isSelected;
    },
  },
});

const app = createApp(App);

app.use(store);
app.mount("#app");
