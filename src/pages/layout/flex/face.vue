<template>
  <div class="flex-face flex box default-bg">
    <div class="face flex first-pip">
			<span class="pip"></span>
		</div>
		<div class="face flex second-pip">
			<span class="pip"></span>
			<span class="pip"></span>
		</div>
		<div class="face flex three-pip">
			<span class="pip"></span>
			<span class="pip"></span>
			<span class="pip"></span>
		</div>
		<div class="face flex four-pip">
			<div class="column">
		    <span class="pip"></span>
		    <span class="pip"></span>
		  </div>
		  <div class="column">
		    <span class="pip"></span>
		    <span class="pip"></span>
		  </div>
		</div>
		<div class="face flex five-pip">
			<div class="column">
		    <span class="pip"></span>
		    <span class="pip"></span>
		  </div>
		  <div class="column">
		    <span class="pip"></span>
		  </div>
		  <div class="column">
		    <span class="pip"></span>
		    <span class="pip"></span>
		  </div>
		</div>
		<div class="face flex six-pip">
			<div class="column">
		    <span class="pip"></span>
		    <span class="pip"></span>
		    <span class="pip"></span>
		  </div>
		  <div class="column">
		  	<span class="pip"></span>
		    <span class="pip"></span>
		    <span class="pip"></span>
		  </div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'FPip'
};
</script>

<style lang="less" scoped>
.flex {
  display: flex;
  display: -webkit-flex;
}

.box {
  padding: 8px 16px;
  border-radius: 6px;
  justify-content: space-around;
}

.face {
  margin: 16px;
  padding: 4px;
  background-color: #e7e7e7;
  width: 104px;
  height: 104px;
  -o-object-fit: contain;
  object-fit: contain;
  box-shadow: inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7, inset -5px 0 #d7d7d7;
  border-radius: 10%;
}

.pip {
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 4px;
  background-color: #333;
  box-shadow: inset 0 3px #111, inset 0 -3px #555;
}

.first-pip {
  justify-content: center;
  align-items: center;
}

.second-pip {
  justify-content: space-between;
}

.second-pip > .pip:nth-child(2) {
  align-self: flex-end;
}

.three-pip > .pip:nth-child(2) {
  align-self: center;
}

.three-pip > .pip:nth-child(3) {
  align-self: flex-end;
}

.four-pip {
  flex-wrap: wrap;
  align-content: space-between;
}
.column {
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
}

.five-pip {
  flex-wrap: wrap;
  align-content: space-between;
}
.five-pip > .column:nth-child(2) {
  justify-content: center;
}

.six-pip {
  justify-content: space-between;
}

.six-pip > .column {
  flex-basis: auto;
  flex-direction: column;
  justify-content: space-between;
}
</style>

