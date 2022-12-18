<template>
  <div>
    <div class="mb-5 relative">
      <input :type="type ? type : 'text'" :value="modelValue" :disabled="disable"
             class="peer pt-8 border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16 placeholder-transparent"
             :placeholder="label" autocomplete="off" @input="$emit('update:modelValue', $event.target.value)" />
      <label for="password" class="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">
        {{ label }}
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputElement',
  props: ['type', 'label', 'modelValue', 'test', 'class', 'dark', 'disable'],
  emits: ['update:modelValue']
}
</script>