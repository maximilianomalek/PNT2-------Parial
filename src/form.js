import Vue from 'vue'
import VueForm from 'vue-form'


let options = {
    validators: {
        'no-espacios' : function(value) {
            return !value.includes(' ')
        },
        'no-negativo': function(value){
            return (value >= 0)
        }
    }
}

Vue.use(VueForm, options)

