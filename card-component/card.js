let app;
let EventBus;
document.addEventListener("DOMContentLoaded", function () {
  EventBus = new Vue();
  Vue.component("regular-card", {
    props: ["header", "content", "hasfooter", "footerdetails","cardkey"],
    template: `
         <div>
            <div class="card">
            
              <div class="card-header text-center" v-if="header">{{header}}</div>
              
              <div class="card-body">{{content}}</div>
              
              <div class="card-footer" v-if="hasfooter">
                <div style="display:flex;justify-content:space-around">
                   <button class="btn" :class="footer.class"  v-for="(footer,index) in footerdetails" @click="btnClickHandler(footer,cardkey)" >
                      {{footer.btnTitle}}
                   </button>
                </div>
              </div>
            </div>
         </div>
          
           `,
    methods: {
      btnClickHandler: function (card,key) {
        let selectedCardAndSelectionBtn={
          selectedCard:card,
          index:key
        }
        EventBus.$emit("selectedcard",selectedCardAndSelectionBtn);
      },
    },
  });

  app = new Vue({
    el: "#app",
    data: function () {
      return {
        header: "",
        content: "",
        hasfooter: "",
        footerdetails: [],
        cardkey:""
      };
    },
  });
});
