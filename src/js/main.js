/**
 * demo 01
 */
/* Vue.component("task", {
  template: "<li><slot></slot></li>"
});
Vue.component("task-list", {
  template: `
  <div>
  <task v-for='task in tasks'>{{ task.task }}</task>
  </div>
  `,
  data() {
    return {
      tasks: [
        { task: "go to 01", complete: true },
        { task: "go to 02", complete: false },
        { task: "go to 03", complete: true },
        { task: "go to 04", complete: false }
      ]
    };
  }
});
new Vue({
  el: "#root"
});
 */

/**
  * demo 02
  */
Vue.component("message", {
  props: ["title", "body"],
  data() {
    return {
      isVisible: true
    };
  },
  template: `
  <article class="message" v-show="isVisible">
  <div class="message-header">
    {{title}}
    <button type="button" @click="hideModal">x</button>
  </div>
  <div class="message-body">
    {{body}}
  </div>
</article>
  `,
  methods: {
    hideModal() {
      this.isVisible = false;
    }
  }
});
new Vue({
  el: "#root"
});
