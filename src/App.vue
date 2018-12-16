<template>
  <div id="app">
    <h1 class="mt-4">The Game of Life - Built in Vue.js</h1>
    <p class="mb-4">The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank">Rules of the game</a>.</p>
    <div class="life-game">
      <div class="container-fluid">
        <div class="form-group">
          <label>Board Size</label>
          <input type="number" v-model="sizeInput" class="form-control d-inline-block mx-3" />
          <small class="form-text d-inline-block text-muted">Current Size: {{ this.boardSize }}</small>
        </div>
        <div class="form-group">
          <label>Interval</label>
          <input type="number" v-model="intervalInput" class="form-control d-inline-block mx-3" />
          <small class="form-text d-inline-block text-muted">In milliseconds</small>
        </div>
        <button class="btn-secondary" @click="onResetBoard">Reset Board</button>
        <div class="board-holder my-4">
          <board ref="board" :size="boardSize" :blockSize="blockSize" :interval="interval" :style="getGameSizeStyle()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Board from './components/Board.vue'

export default {
  name: 'app',
  components: {
    Board
  },
  data () {
    return {
      boardSize: 30,
      sizeInput: 30,
      blockSize: 20,
      intervalInput: 50,
      interval: 50
    }
  },
  methods: {
    onResetBoard () {
      this.boardSize = this.sizeInput ? parseInt(this.sizeInput, 10) : this.boardSize
      this.interval = this.intervalInput ? parseInt(this.intervalInput, 10) : this.interval
      this.$refs.board.restartBoard()
    },
    getGameSizeStyle () {
      const width = this.boardSize * this.blockSize
      return {
        width: `${width}px`,
        height: `${width}px`
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;

  input { max-width: 200px; }

  .board-holder {
    display: flex;
    justify-content: center;
  }
}
</style>
