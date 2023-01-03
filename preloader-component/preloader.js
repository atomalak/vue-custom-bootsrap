let app;

document.addEventListener("DOMContentLoaded", function () {
  Vue.component("preeloadermodal", {
    template: `
        <div>
        <button type="button" class="btn btn-primary" id="preeloadermodal_" data-toggle="modal" data-target="#preeloadermodal" style="display:none">
        Open modal
      </button>     
      <div class="modal" id="preeloadermodal">
      <div class="modal-dialog">
        <div class="modal-content" style="border:none;background:none">
        <div class="modal-body" style="text-align:center">
             <div class="spinner-border" style="position:fixed; top:50%; left:50%"></div>
          </div>
        </div>
      </div>
    </div>   
    </div> 
        `,

    methods: {
      openPreloader: function () {
        document.getElementById("preeloadermodal_").click();
      },
    },
  });

  app = new Vue({
    el: "#app",
  });
});
