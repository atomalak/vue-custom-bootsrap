let app;

document.addEventListener("DOMContentLoaded", function () {
  Vue.component("draggable-list", {
    data: function () {
      return {
        draggingItem: -1,
        draggingOverItem: -1,
        items: [],
      };
    },
    methods: {
      setDragging: function (event) {
        this.draggingItem = event.target.getAttribute("data-value");
      },
      setDraggedOver: function (event) {
        event.preventDefault();
        this.draggingOverItem = event.target.getAttribute("data-value");
      },
      setDropped: function () {
        var index1 = this.items.indexOf(this.draggingItem);
        var index2 = this.items.indexOf(this.draggingOverItem);
        this.items.splice(index1, 1);
        this.items.splice(index2, 0, this.draggingItem);
      },
      setItems: function (items) {
        this.items = items;
      },
    },
    template: `
          <div>
           
            <div class="row">
              <div class="col-sm-4 xs-6">
                <ul class="list-group" > 
                  <li class="list-group-item" v-for="(item,index) in items" 
                    :data-value="item"
                     draggable=true
                     @drag="setDragging"
                     @dragover="setDraggedOver"
                     @drop="setDropped"
                     > {{item}}</li>
                 </ul>
              </div>
              </div>
              </div>
           `,
  });

  app = new Vue({
    el: "#app"
  });
});
