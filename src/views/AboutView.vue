<template>
  <div class="out-box">
    <div class="left-box" :style="{ width: `${lastX}px` }">
      <div class="x-resizer" @mousedown="e => mouseDown(e, '1')"></div>
    </div>
    <div class="right-box"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        leftBarWidth: 360,
        startX: 0,
        lastX: 360,
      };
    },
    mounted() {
    },
    methods: {
      mouseDown(e, val) {
        this.startX = e.clientX;
        this.mouseMove(e, val);
        this.mouseUp();
        document.addEventListener('mousemove', this.mouseMove, {
          passive: false,
        });
        document.addEventListener('mouseup', this.mouseUp, { passive: false });
      },
      mouseUp() {
        this.leftBarWidth = this.lastX;
        document.removeEventListener('mousemove', this.mouseMove, {
          passive: false,
        });
        document.removeEventListener('mouseup', this.mouseUp, {
          passive: false,
        });
      },
      mouseMove(moveEvent, val) {
        console.log(12399, val)
        moveEvent.preventDefault();
        moveEvent.stopPropagation();
        const offset = moveEvent.clientX - this.startX;
        console.log(offset)
        console.log(this.offset)
        if (this.offset !== 0) {
          this.lastX = offset + this.leftBarWidth;
        }
      },
    },
  };
</script>
<style scoped>
  .out-box {
    display: flex;
    height: 100%;
  }

  .out-box .left-box {
    height: 500px;
    min-width: 35px;
    background: #ffffff;
    position: relative;
    border: 1px solid red;
  }
  .out-box .right-box {
    flex: 1;
    background: #ffffff;
    margin-left: 10px;
    position: relative;
    min-width: 650px;
    border: 1px solid green;
  }
  .x-resizer {
    position: absolute;
    top: 50%;
    right: -11px;
    z-index: 1;
    width: 25px;
    height: 50px;
    margin-top: -25px;
    border-radius: 5px;
    background-color: gray;
    cursor: col-resize;
  }
</style>
