let app;

document.addEventListener("DOMContentLoaded", function () {
  Vue.component("notification", {
    data: function () {
      return {
        title: "",
        message: "",
        direction: "",
        type: "",
        toastStyle: "",
        typeClass: "",
      };
    },
    template: `
    <div id="toast" class="toast mx-auto" :class="typeClass" style="position:absolute;" :style="toastStyle">
        <div class="toast-header text-center">
          {{title}}
        </div>
        <div class="toast-body" style="color:white">
         {{message}}
        </div>
  </div>
           `,

    methods: {
      showNotification: function (title, message, direction, type) {
        this.title = title;
        this.message = message;
        this.direction = direction;
        this.type = type;
        this.typeClass = this.typeClassHandler();
        this.toastStyle = this.toastStyleHandler();
        $(".toast").toast({ delay: 60000 });
        $(".toast").toast("show");
      },
      typeClassHandler: function () {
        if (this.type == "success") {
          return {
            "bg-success": true,
          };
        } else if (this.type == "error") {
          return {
            "bg-danger": true,
          };
        } else if (this.type == "info") {
          return {
            "bg-info": true,
          };
        } else if (this.type == "warning") {
          return {
            "bg-warning": true,
          };
        } else {
          return {
            "bg-primary": true,
          };
        }
      },
      toastStyleHandler: function () {
        if (this.direction == "top") {
          return { top: "0px" };
        } else if (this.direction == "left") {
          return { left: "0px" };
        } else if (this.direction == "right") {
          return { right: "0px" };
        } else if (this.direction == "bottom") {
          return { bottom: "0px" };
        }
      },
    },
  });

  app = new Vue({
    el: "#app",
  });
});
