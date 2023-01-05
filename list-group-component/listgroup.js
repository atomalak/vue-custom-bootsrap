let app;

document.addEventListener("DOMContentLoaded", function () {
  Vue.component("list-group", {
    props: ["values", "showfilter"],
    data: function () {
      return {
        search: "",
        selectedItem: -1,
      };
    },
    template: `
          <div>
           <div class="row" v-if="showfilter">
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
        return this.values.filter((item) => {
          return item.toLowerCase().includes(this.search);
        });
      },
    },
  });

  app = new Vue({
    el: "#app",
    data: function () {
      return {
        items: [],
      };
    },
  });
});
