<script setup >
import { ref } from 'vue';
import axios from 'axios';

const user = ref({
  username: '',
  password: ''
});

const Login = () => {
    console.log('User:', user.value);
    if(user.username === '' || user.password === ''){
        alert('please fill all content')
    }
    else{
        alert('Login successfully')
    }

    axios.get('https://47590424-51fc-4690-9c7c-2f3bf84f3d71.mock.pstmn.io/user/1')
        .then(response =>{
            console.log('response: ', response.data)
        })
};

</script>

<template>
<div class="logInbox">
            <img src="/back.png" alt="no image" class="user">
            <h2>loginhere</h2>
            <form>
                <p>username</p>
                <input type="text" placeholder="Enter your email" required v-model="user.username">
                <p>password</p>
                <input type="password" placeholder="Enter your password" required v-model="user.password">
                <input type="submit" value="Login" @click.prevent="Login">
                <a href="#">Forgot Password?</a>
            </form>
</div>
</template>



<style scoped>
.logInbox h2{
    margin: 0;
    padding: 0 0 20px;
    color: rgba(0, 255, 255, 0.717);
    text-align: center;
}

.logInbox{
    width: 300px;
    height: 460px;
    padding: 80px 40px;
    background-color: rgba(0,0,0,0.5);
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.logInbox p{
    margin: 0;
    padding: 0;
    font-weight: bold;
    color: rgba(0, 255, 255, 0.717);
}

.logInbox input{
    width: 100%;
    height: 40px;
    margin: 30px 0;
    border: none;
    border-radius: 20px;
    padding: 0 20px;
    box-sizing: border-box;
    background-color: rgba(0,0,0,0.5);
    color: rgba(0, 255, 255, 0.717);
}

.logInbox input[type="submit"]{
    background-color: rgba(19, 255, 255, 0.509);
    color: rgb(0, 0, 0);
    cursor: pointer;
}

.logInbox input[type="submit"]:hover{
    background-color: aqua;
}

.logInbox a{
    text-decoration: none;
    color: rgba(0, 255, 255, 0.326);
}
.user{
    position: absolute;
    width: 100px;
    height: 100px;
    top: calc(-50px);
    left: calc(50% - 50px);
    border-radius: 50%;
}
</style>