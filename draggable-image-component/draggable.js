let app;

document.addEventListener("DOMContentLoaded", function () {
  Vue.component("draggable-image", {
    data: function () {
      return {
        items: [],
        selectedImage: null,
        clientX: null,
        clientY: null,
        initOffsetX: null,
        initOffsetY: null,
      };
    },
    template: `
              <div>
                <div class="row">
                  <div class="col-md-3" v-for="item in items">
                     <img  :src="item" width="100" height="100" style="position:absolute" @mousedown="selectImage"  @mousemove="moveImage" @mouseup="leaveImage"/>
                  </div>
                </div>
              </div>
           `,
    methods: {
      setImages: function (items) {
        this.items = items;
      },
      selectImage: function () {
        this.selectedImage = event.target;
        this.initOffsetX = this.selectedImage.offsetLeft;
        this.initOffsetY = this.selectedImage.offsetTop;
        this.clientX = event.pageX;
        this.clientY = event.pageY;
      },
      moveImage: function () {
        if (this.selectedImage !== null) {
          let e = window.event;
          this.selectedImage.style.left =
            this.initOffsetX + e.pageX - this.clientX + "px";
          this.selectedImage.style.top =
            this.initOffsetY + e.pageY - this.clientY + "px";
        }
      },
      leaveImage: function () {
        this.selectedImage = null;
      },
    },
  });

  app = new Vue({
    el: "#app",
  });
});
