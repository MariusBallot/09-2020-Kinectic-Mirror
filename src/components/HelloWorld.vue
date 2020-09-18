<template>
  <div class="hello">
    <div ref="imgHolder" class="imgHolder">
      <img src="assets/ind0.png" alt />
      <img src="assets/ind1.png" alt />
      <img src="assets/ind2.png" alt />
      <img src="assets/ind3.png" alt />
    </div>
    <div class="canvasHolder">
      <canvas class="imgCanvas" ref="imgCanvas"></canvas>
    </div>
  </div>
</template>

<script>
import KinecticCanvas from "../classes/KinecticCanvas";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },

  mounted() {
    let canvas = this.$refs.imgCanvas;
    console.log(canvas);
    KinecticCanvas.init(canvas, 75, this.$refs.imgHolder.childNodes);
  }
};
</script>

<style scoped lang="stylus">
.canvasHolder {
  width: 100vw;
  height: 100vh;

  .imgCanvas {
    width: 100%;
    height: 100%;
  }
}

.imgHolder {
  display: none;
}
</style>
