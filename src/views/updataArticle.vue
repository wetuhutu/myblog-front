<script>


</script>

<template>
<div class="updata">
    <button class="content">更新文章</button>
</div>

</template>


<style scoped>
.updata{
  top: 0;
  left: 0;
  width: 100%;
  height: 35px;
  /* background-color: antiquewhite; */
}

.updata .content{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 30px;
  width: 100px;
  font-family: sans-serif;
  font-size: 15px;
  color: rgba(0, 255, 255, 0.5);
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  outline: none;
  backdrop-filter: blur(5px);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.updata .content:hover {
  transform: scale(1.1);
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease-in-out;
}
</style>