let app;

document.addEventListener("DOMContentLoaded", function () {
  Vue.component("pagination", {
    props: {
      pageSize: {
        type: Number,
      },
    },
    data: function () {
      return {
        activePage: 1,
      };
    },
    template: `
            <ul class="pagination" > 
                <li class="page-item" v-for="(page,index) in pageSize" :class="{active:activePage==index+1}">
                <a class="page-link"  @click="pageChange(index+1)" href="javascript:void(0)">{{page}}</a></li>  
            </ul>`,
    methods: {},
  });

  app = new Vue({
    el: "#app",
  });
});
