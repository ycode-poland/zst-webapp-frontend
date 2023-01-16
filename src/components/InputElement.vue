<template>
	<div class="input" :class="[selected ? 'selected' : '', enabled ? 'enabled' : '']">
		<label for="input">{{ label }}</label>
		<input type="text" id="input" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" @focus="selected = true; enable()" @blur="selected = false; disable()">
	</div>
</template>

<script>
export default {
	name: "InputElement",
	props: ['label', 'modelValue'],
	emits: ['update:modelValue'],
	data() {
		return {
			selected: false,
			enabled: false,
		}
	},
	created() {
		if (this.modelValue.length > 0) {
			this.enabled = true;
		}
	},
	methods: {
		enable() {
			this.enabled = true;
		},
		disable() {
			if (this.modelValue.length > 0) {
				this.enabled = true;
			} else {
				this.enabled = false;
			}
		}
	}
}
</script>
<style lang="less" scoped src="@/assets/style/components/inputElement.less"></style>
