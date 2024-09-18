<template>
  <div>
    <input
      @compositionstart="handleCompositionStart"
      @compositionend="handleCompositionEnd"
      @keydown="handleKeyDown"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isComposing: false,
      };
    },
    methods: {
      handleCompositionStart() {
        this.isComposing = true;
      },
      handleCompositionEnd() {
        this.isComposing = false;
      },
      handleKeyDown(event) {
        if (this.isComposing && event.keyCode === 13) {
          event.preventDefault();
          // 执行你的逻辑，例如聚焦到下一个输入框
        }
      },
    },
  };
</script>

<style lang="scss" scoped></style>
