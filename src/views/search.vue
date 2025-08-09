<script>
</script>

<template>
    <div class="container">
        <input type="text" placeholder="Search article" class="input">
            <button class="button"> 
                <img src="/fangdajing.png" alt="图片加载失败">
            </button>
    </div>
</template>

<style scoped>

.container{
    display: flex;
    width: 50%;
    height: 50px;
    border-radius: 30px;
    margin-top: -50px;
    background-color: rgba(255, 255, 255, 0.1);
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
}

.input{
    width: 80%;
    height: 50px;
    border-radius: 30px 0 0 30px;
    padding-left: 25px;
    padding-top: 0;
    padding-bottom: 0;
    border: 0;
    font-size: 18px;
    outline: none;
    background-color: rgba(255, 255, 255, 0);
}

.button{
    width: 20%;
    height: 50px;
    border: 0;
    border-left: none;
    border-radius: 0% 30px 30px 0%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.253);
}

img{
    width: 40px;
    height: 40px;
    transition: all 0.3s ease-in-out;
}

img:hover{
    transform: scale(1.2);
    transition: all 0.3s ease-in-out;
}

</style>