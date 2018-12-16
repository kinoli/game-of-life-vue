<template lang="html">

  <section class="cell">
    <div :class="{active: alive}" />
  </section>

</template>

<script lang="js">
export default {
  name: 'cell',
  props: {
    alive: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
  .cell {
    position: absolute;

    >div {
      background-color: #e2e2e2;
      width: 100%;
      height: 100%;

      &.active {
        background-color: black;
      }
    }
  }
</style>
