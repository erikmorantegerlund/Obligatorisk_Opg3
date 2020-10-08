new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        name: "",
        valg: "",
        message:"",
    },
    methods: {
        ShowMessage() {
            if (this.valg === "Uppercase"){
                this.message = this.message.toUpperCase()
            }
            else if (this.valg === "Lowercase"){
                this.message = this.message.toLowerCase()
            }
          
        }
    }
})