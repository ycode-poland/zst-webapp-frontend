import { ref } from 'vue';

const isOpen = ref(false)
const id = ref('')

export default {
    useModal: function(){
        return isOpen
    },
    getId: function(){
        return id
    },
    setId: function(id1){
        id.value = id1
    },
    close: function(){
        isOpen.value = false
    },
    open: function(id1){
        isOpen.value = true
        id.value = id1
    }
}