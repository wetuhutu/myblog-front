<script setup>
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps(['coverImg'])

const getImageUrl = (url) => {
  // 检查是否是本地路径
  if (url && url.includes('public')) {
    // 从 public 路径中提取文件名
    const fileName = url.split('\\').pop()
    return `/${fileName}` // 返回正确的公共资源路径
  }
  return url // 如果是远程 URL，直接返回
}

console.log('back: ', props.coverImg)

</script>

<template>
    <div class="box" :style="{'background-image': `url(${getImageUrl(props.coverImg)})`}">
        <div class="about">
            <div class="title">
                <RouterLink class="title-link" to="/article">
                    <slot name="title"></slot>
                </RouterLink>
            </div>
            <slot name="summary"></slot>
        </div>
    </div>
</template>

<style scoped>
.box{
    opacity: 0.88;
    position: absolute;
    width: 250px;
    height: 150px;
    background-color: rgba(0,0,0,0.5);
    /* background-image: url(back.png); */
    background-size: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;
}

.box:hover {
    transform: scale(1.05);
}

.title{
    display: flex;
    width: 100%;
    height: 30%;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 20%;
}

.about p{
    margin: 0;
    color: rgba(0, 255, 255, 0.717);
    height: 70%;
    border: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
}

.title-link {
    text-decoration: none;
    color: #baea7b;
}
</style>