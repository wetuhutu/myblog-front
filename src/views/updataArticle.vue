<script setup>
import axios from 'axios';
import { ref } from 'vue';

const Total = ref(1);

const emit = defineEmits(['updataTotal']);
const updataArticle = () => {
    console.log('updata article successfully');
    axios.get('http://localhost:8080/api/articles?size=10&page=1&category=tech&status=published&keyword=vue', {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then(response => {
        console.log('response: ', response.data.data);
        const articles = response.data;
        Total.value = articles.total;
        console.log('Total: ', Total.value);
        emit('updataTotal', Total.value);
    })
    .catch(error => {
        console.log('error: ', error);
    });
};

</script>

<template>
<div class="update">
    <button class="content" @click="updataArticle">更新文章</button>
</div>

</template>


<style scoped>
.update{
  top: 0;
  left: 0;
  width: 100%;
  height: 35px;
  /* background-color: antiquewhite; */
}

.update .content{
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

.update .content:hover {
  transform: scale(1.1);
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease-in-out;
}
</style>