<template>
  <div>
    <div class="scene">
      <div class="cube" :class="`show-${radioValue}`">
        <div class="cube__face cube__face--front">front</div>
        <div class="cube__face cube__face--back">back</div>
        <div class="cube__face cube__face--right">right</div>
        <div class="cube__face cube__face--left">left</div>
        <div class="cube__face cube__face--top">top</div>
        <div class="cube__face cube__face--bottom">bottom</div>
      </div>
    </div>
    <div :style="{ width: '200px', opacity: 0, position: 'absolute' }">
      <label>
        <input type="radio" value="front" v-model="radioValue" />front
      </label>
      <label>
        <input type="radio" value="right" v-model="radioValue" />right
      </label>
      <label>
        <input type="radio" value="back" v-model="radioValue" />back
      </label>
      <label>
        <input type="radio" value="left" v-model="radioValue" />left
      </label>
      <label>
        <input type="radio" value="top" v-model="radioValue" />top
      </label>
      <label>
        <input type="radio" value="bottom" v-model="radioValue" />bottom
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioValue: "front"
    };
  }
};
</script>

<style lang="scss">
.scene {
  width: 300px;
  height: 300px;
  perspective: 600px;
}

.cube {
  width: 300px;
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-150px);
  transition: transform 1s;
}

.cube.show-front {
  transform: translateZ(-150px) rotateY(0deg);
}
.cube.show-right {
  transform: translateZ(-150px) rotateY(-90deg);
}
.cube.show-back {
  transform: translateZ(-150px) rotateY(-180deg);
}
.cube.show-left {
  transform: translateZ(-150px) rotateY(90deg);
}
.cube.show-top {
  transform: translateZ(-150px) rotateX(-90deg);
}
.cube.show-bottom {
  transform: translateZ(-150px) rotateX(90deg);
}

.cube__face {
  position: absolute;
  width: 300px;
  height: 300px;
  border: 2px solid black;
  line-height: 300px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.cube__face--front {
  background: rgba(#6901ce, 0.7);
}
.cube__face--right {
  background: rgba(#ff5a5f, 0.7);
}
.cube__face--back {
  background: rgba(#60d2cb, 0.7);
}
.cube__face--left {
  background: rgba(#5bc0eb, 0.7);
}
.cube__face--top {
  background: rgba(#3185fc, 0.7);
}
.cube__face--bottom {
  background: rgba(#ff1fa2, 0.7);
}

.cube__face--front {
  transform: rotateY(0deg) translateZ(150px);
}
.cube__face--right {
  transform: rotateY(90deg) translateZ(150px);
}
.cube__face--back {
  transform: rotateY(180deg) translateZ(150px);
}
.cube__face--left {
  transform: rotateY(-90deg) translateZ(150px);
}
.cube__face--top {
  transform: rotateX(90deg) translateZ(150px);
}
.cube__face--bottom {
  transform: rotateX(-90deg) translateZ(150px);
}
</style>
