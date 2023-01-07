let app;
let EventBus;

document.addEventListener("DOMContentLoaded", function () {
  EventBus = new Vue();
  Vue.component("upload", {
    props: {
      uploadbtntitle: {
        type: String,
        default: "Select File",
      },
    },
    template: `
              <div>
                  <button class="btn btn-primary" @click="$refs.file.click()" >{{uploadbtntitle}}</button>
                  <input ref="file" type="file" @change="fileload" style="display:none"/>
              </div>
           `,
    methods: {
      fileload: function (result) {
        let reader = new FileReader();
        reader.onload = function (e) {
          EventBus.$emit("uploadresult", {
            data: e.target.result,
            status: true,
          });
        };
        reader.onerror = function (e) {
          EventBus.$emit("uploadresult", { status: false });
        };
        reader.readAsBinaryString(result.target.files[0]);
      },
    },
  });

  app = new Vue({
    el: "#app",
  });
});
