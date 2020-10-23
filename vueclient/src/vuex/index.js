import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
        namee:'',
		it:''
	    },
	mutations: {
        nameee(state,i){
            state.namee=i
            console.log(state.namee);
        },
        it(state,it){
            state.it=it
            console.log(state.it);

        }
		
    }
	
})

export default store;