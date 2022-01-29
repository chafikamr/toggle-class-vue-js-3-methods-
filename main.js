var app = new Vue({
  el : '#app',
  data : {
    isSelected : true,
    phone : null ,
    email : null
  },
  methods : {
    toggleClass : function(event){
      event.target.classList.toggle('selected')
    },
    toggleClassAdv : function(event,classname){
      event.target.classList.toggle(classname)

    }
  }
})