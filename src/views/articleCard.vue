<script setup>

</script>

<template>
    <div class="box">
        <div class="about">
            <div class="title">title</div>
            <p>Hello! I'm a web developer with a passion for creating beautiful and functional websites.</p>
        </div>
        <div class="figure"></div>
    </div>
</template>

<style scoped>
.box{
    opacity: 0.88;
    position: absolute;
    width: 250px;
    height: 150px;
    background-color: rgba(0,0,0,0.5);
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

.figure{
    width: 100%;
    height: 100%;
}

.figure::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: url('back.png');/* 这里可以换成图片url */
    background-position: 10%;
    background-size: cover;
    transform-origin: bottom;
    transition: .5s;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;

}

.box:hover .figure::before{
    transform: rotateX(90deg);
}

.figure::after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: url('back.png');/* 这里可以换成图片url */
    background-position: 90%;
    background-size: cover;
    transition: .5s;
    transform-origin: top;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
}

.box:hover .figure::after{
    transform: rotateX(90deg);
}
</style>