<template>
  <div>
    <p class="text-center"><small>Execution Load Time: {{buildTime}} ms</small></p>
    <div class="board">
      <cell
        v-for="(cellData, index) of grid"
        :key="index"
        :alive="cellData.alive"
        :style="getCellStyle(cellData)" />
    </div>
  </div>
</template>

<script>
import Cell from './Cell'

export default {
  components: { Cell },
  name: 'board',
  props: {
    size: Number,
    blockSize: Number,
    interval: Number
  },
  mounted () {
    this.restartBoard()
  },
  data () {
    return {
      grid: [],
      intervalId: null,
      buildTime: 0
    }
  },
  methods: {
    restartBoard () {
      const startTime = new Date()
      clearInterval(this.intervalId)
      this.grid = []
      this.buildGrid()
      this.assignNeighbors()
      this.buildTime = new Date() - startTime
      this.intervalId = setInterval(() => this.setNextCellStates(), this.interval)
    },
    buildGrid () {
      const gridConstruction = []
      for (let x = 0; x < this.size; x++) {
        for (let y = 0; y < this.size; y++) {
          const newCell = {
            alive: Math.random() >= 0.5,
            coords: {
              x: x,
              y: y
            }
          }
          gridConstruction.push(newCell)
        }
      }
      this.grid = gridConstruction
    },
    assignNeighbors () {
      this.grid = this.grid.map(cell => {
        cell.neighbors = this.getNeighbors(cell)
        return cell
      })
    },
    getNeighbors (cell) {
      const max = this.size - 1
      const result = []
      this.grid.filter(n => {
        if (result.length < 8 && n !== cell) {
          const xDiff = Math.abs(n.coords.x - cell.coords.x)
          const xFlag = xDiff <= 1 || xDiff === max
          if (xFlag) {
            const yDiff = Math.abs(n.coords.y - cell.coords.y)
            const yFlag = yDiff <= 1 || yDiff === max
            if (yFlag) {
              result.push(n)
            }
          }
        }
      })
      return result
    },
    setNextCellStates () {
      this.grid = this.grid.map(cell => {
        const aliveNeighbors = cell.neighbors.filter(n => n.alive)
        cell.nextAliveState =
          (aliveNeighbors.length === 3 && !cell.alive) ||
          ([2, 3].includes(aliveNeighbors.length) && cell.alive)
        return cell
      })
      this.grid = this.grid.map(cell => {
        cell.alive = cell.nextAliveState
        cell.nextAliveState = null
        return cell
      })
    },
    getCellStyle (cell) {
      return {
        left: `${cell.coords.x * this.blockSize}px`,
        top: `${cell.coords.y * this.blockSize}px`,
        width: `${this.blockSize}px`,
        height: `${this.blockSize}px`
      }
    }
  },
  watch: {
    size: function () {
      this.restartBoard()
    },
    interval: function () {
      clearInterval(this.intervalId)
      this.intervalId = setInterval(() => this.setNextCellStates(), this.interval)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .board {
    position: relative;
  }
</style>
