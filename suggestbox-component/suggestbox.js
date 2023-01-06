let app;

document.addEventListener("DOMContentLoaded", function () {
  Vue.component("suggestbox", {
    props: ["url"],
    data: function () {
      return {
        search: "",
        selectedItem: -1,
        items: [],
      };
    },
    template: `
          <div>
           <div class="row">
              <div class="col-sm-4">
                <input type="text" class="form-control" placeholder="search team..." v-model="search"/>
              </div>
           </div>
            <div class="row">
              <div class="col-sm-4 xs-6">
                <ul class="list-group" > 
                  <li class="list-group-item" v-for="(value,index) in filterList" @click="selectedItem=index" :class="{active:index==selectedItem}"> {{value}}</li>
                 </ul>
              </div>
              </div>
              </div>
           `,
    computed: {
      filterList() {
        if (this.items.length > 0 && this.search) {
          return this.items.filter((item) => {
            return item.toLowerCase().includes(this.search);
          });
        } else {
          return new Array();
        }
      },
    },
    created: function () {
      fetch(this.url)
        .then((resp) => resp.json())
        .then((results) => {
          results.map((result) => {
            this.items.push(result.name)
          });
        });
    },
  });

  app = new Vue({
    el: "#app",
  });
});
