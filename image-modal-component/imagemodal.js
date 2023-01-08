let app;

document.addEventListener("DOMContentLoaded", function () {
  Vue.component("image-modal", {
    data:function(){
        return{
          imagesrc:""
        }
    },
    template: `
        <div>
        <button type="button" class="btn btn-primary" id="imagemodal_" data-toggle="modal" data-target="#imagemodal" style="display:none">
        Open modal
      </button>     
      <div class="modal" id="imagemodal">
      <div class="modal-dialog">
        <div class="modal-content" style="border:none;background:none">
        <div class="modal-body" style="position:fixed; top:25%; left:50%">
            <img :src="imagesrc" />
          </div>
        </div>
      </div>
    </div>   
    </div> 
        `,

    methods: {
      open: function () {
        document.getElementById("imagemodal_").click();
      },
      setImageSrc:function(src){
        this.imagesrc=src;
      }
    },
  });

  app = new Vue({
    el: "#app",
  });
});
