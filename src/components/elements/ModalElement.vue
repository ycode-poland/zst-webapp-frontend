<template>
  <div>
    <button v-if="!hidden" @click="openModal(this.id)"
            :class="`${btn_class} bg-blue-500 hover:bg-blue-600 px-6 py-2.5 text-white font-medium text-sm leading-tight rounded-md shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out`">
      <font-awesome-icon :icon="btn_icon" /> {{ btn_title }}
    </button>
    <div :class="`modal ${ !open && 'opacity-0 pointer-events-none' } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center transition ease-in-out delay-50`" v-if="name === id">
      <div @click="open = false" class="absolute w-full h-full bg-gray-900 opacity-25 modal-overlay"></div>
      <div class="z-50 w-11/12 mx-auto overflow-y-auto rounded shadow-lg modal-container md:max-w-md" :class="dark ? 'bg-zinc-800' : 'bg-white'">
        <div class="px-6 py-4 text-left modal-content">
          <div class="flex items-center justify-between pb-3">
            <p class="text-2xl">{{ title }}</p>
            <div class="z-50 cursor-pointer modal-close" @click="open = false"></div>
          </div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import useModal from '@/hooks/useModal';
export default {
  props: ['title', 'btn_class', 'btn_title', 'btn_icon', 'btn_color', 'id', 'btn_type', 'hidden', 'dark'],
  name: 'ModalElement',
  data: () => {
    return {
      open: useModal.useModal(),
      name: useModal.getId()
    }
  },
  methods: {
    openModal(id){
      this.open = true;
      this.name = id;
    }
  }
}
</script>