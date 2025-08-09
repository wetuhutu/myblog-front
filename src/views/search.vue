<script>
</script>

<template>
    <div class="searchBox">
        <input type="text" placeholder="Search article">
        <button> 
            <img src="/fangdajing.png" alt="图片加载失败">
        </button>
    </div>
</template>

<style scoped>

.serachBox{
    display: flex;
    width: 100%;
    height: 100px;
    border: 2px solid #210a29;
    border-radius: 25px;
    overflow: hidden;
}


button{
    width: 20%;
    height: 100%;
    
    border: none;
    background-color: #210a29;
    cursor: pointer;
}

img{
    width: 20px;
    height: 20px;
    border-radius: 50%;
}
</style>