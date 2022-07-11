<template>
  <div class="title">
    {{name}}-{{data}}
    <button @click="createData">click</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'chen',
      data: 0,
    }
  },
  mounted() {
    console.log('hhh')
  },
  methods: {
    createData() {
      console.log('createData')
      this.data++
    }
  }
}
</script>