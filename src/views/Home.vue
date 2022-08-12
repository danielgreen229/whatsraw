<template>
  <div class="home">
  	<div class="home-background__div">
  		   <kinesis-container class="home-kinetik__container">
  		   	  <kinesis-element :strength="10">
                <div class="home-circle__div circle-1"></div>
              </kinesis-element>

              <kinesis-element :strength="30">
                <div class="home-circle__div circle-0"></div>
              </kinesis-element>

               <kinesis-element :strength="50">
                <div class="home-circle__div circle-2"></div>
              </kinesis-element>

               <kinesis-element :strength="40">
                <div class="home-circle__div circle-3"></div>
              </kinesis-element>
            
          </kinesis-container>
  	</div>
    <div class="home-title__container">
    	<h1 class="home-title__h1">Рассылка в <mark class="mark-whatsapp">WhatsApp</mark></br> из <mark class="mark-whatsapp">Excel</mark> таблиц</h1>
    	<p class="home-title__p">Создавайте диалоги и</br>отправляйте сообщения из таблиц</p>
    	<button class="buttons-0 home-reg__button">Зарегистрироваться!</button>
    </div>


    <div class="home-block-0__container" v-if="Wwidth > 480">
      <div class="home-block-0-info__div">
        <h1 class="home-block-0__h1 home-block-0-h1__border">Более 15 тыс.<br> пользователей</h1>
      </div>
      <div class="home-block-0-info__div ">
         <h1 class="home-block-0__h1 home-block-0-h1__border-1">Доступно <br>в 180 странах</h1>
      </div>
      <div class="home-block-0-info__div">
         <h1 class="home-block-0__h1">Возможно <br>на 60 языках</h1>
      </div>
    </div>

    <div class="home-block-0-sol__div">
      <h1 class="home-block-0-sol__h1">Уникальное предложение</h1>
      <div class="home-block-0-sol-div__container">
        <div class="home-block-0-sol-h1__content content-padding">
          <div class="home-block-0-sol__img home-block-0-sol__img-0"></div>
          <h1 class="home-block-0-sol__h1">Простая интеграция</h1>
          <p class="home-block-0-sol__p">Вход в Whatsapp используя QR-code</p>
        </div>
        <div class="home-block-0-sol-h1__content content-padding">
          <div class="home-block-0-sol__img home-block-0-sol__img-1"></div>
          <h1 class="home-block-0-sol__h1">Быстрое подключение</h1>
          <p class="home-block-0-sol__p">Не ждите модерации аккаунта.</br>Начните сейчас!</p>
        </div>
        <div class="home-block-0-sol-h1__content">
          <div class="home-block-0-sol__img home-block-0-sol__img-2"></div>
          <h1 class="home-block-0-sol__h1">Отправка сообщений</h1>
          <p class="home-block-0-sol__p">Отправка сообщений из Excel файла на платформе Whatsapp</p>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import XLSX from "xlsx";
import { KinesisContainer, KinesisElement} from 'vue-kinesis'

export default {
  name: 'Home',
  components: {
  	KinesisContainer, KinesisElement
  },
  data() {
    return {
      Wwidth: window.innerWidth
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },

  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },

  methods: {  
    onResize() {
      this.Wwidth = window.innerHeight
    }
  }
}
</script>

<style scoped>
.home-block-0-sol__img-0 {
  background: url("https://img.icons8.com/ios-filled/50/000000/recurring-appointment.png");
}
.home-block-0-sol__img-1 {
  background: url("https://img.icons8.com/ios-filled/50/000000/recurring-appointment.png");
}
.home-block-0-sol__img-2 {
  background: url("https://img.icons8.com/ios-filled/50/000000/recurring-appointment.png");
}
.home-block-0-sol__img {
    width: 8vw;
    height: 8vw;
    background-size: 70%;
    background-position: center;
    background-repeat: no-repeat;
    padding-bottom: 2vw;
}
.content-padding {
  padding-right: 2vw;
}
.home-block-0-sol__p {
  text-align: center;
}
.home-block-0-sol-h1__content {
  width: 33.333%;
  display: flex;
    flex-direction: column;
    align-items: center;
}
.home-block-0-sol-div__container {
  margin-top: 5vw;
  display: flex;
    flex-direction: row;
}
.home-block-0-sol__div {
  margin-top: 10vw;
}
.home-block-0-sol__h1 {
  font-size: 2vw;
  text-align: center;
}
.home {
  padding-bottom: 20vw;
}
.home-block-0-h1__border-1:before {
   width: 15.5vw;
    content: "";
    border-right: 0.1vw solid #ddd;
    height: 5vw;
    position: absolute;
}
.home-block-0-h1__border:before {
     width: 17.9vw;
    content: "";
    border-right: 0.1vw solid #ddd;
    height: 5vw;
    position: absolute;
}
.home-block-0__h1 {
  font-size: 2vw;
}
.home-block-0-info__div {
     display: flex;
    width: 100%;
    text-align: center;
    height: 10vw;
    align-items: center;
    justify-content: center;
}
.home-block-0__container {
      box-shadow: 0px 1vw 3vw rgb(153 153 153 / 20%);
  display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.mark-whatsapp {
	background-color: transparent;
	color: #25d366;
	margin-left: -3px;
}
.home-title__p {
	margin: 2vw 0 0 0;
  z-index: 3;
}
.home-reg__button {
  z-index: 3;
	margin-top: 4vw;
	margin-bottom: 5vw;
}
.home-title__container {
	    display: flex;
    width: calc(100% - 30vw);
    height: calc(50vw + 10vh);
    align-items: flex-start;
   
    flex-direction: column;
    justify-content: center;
}
.home-kinetik__container {
	height: 100%;
    width: 100%;
}
.home-circle__div {
	
    width: 10vw;
    height: 10vw;
    border-radius: 50%;
}
.circle-3 {
	    background-color: aliceblue;
    width: calc(8vw + 2.5vh);
    height: calc(8vw + 2.5vh);
    z-index: 21;
    /*right: calc(39vw + 5vh);
    top: calc(2vw + 5vh);*/
    position: absolute;


        right: calc(42vw);
    top: calc(4vw);
    max-width: 10vw;
    max-height: 10vw;
}
.circle-2 {
	background-color: aliceblue;
    width: calc(3vw + 2.5vh);
    height: calc(3vw + 2.5vh);
    z-index: 21;
    right: calc(19vw + 5vh);
    top: calc(3vw + 11vh);
    position: absolute;


    right: calc(22vw);
    top: calc(11vw);
    max-width: 5vw;
    max-height: 5vw;
}

.circle-1 {
  border: 1.5vw solid #25d366;
	background-color: #477bf8;	
	width: calc(50vw + 10vh);
    background-color: #477bf8;
    height: calc(50vw + 10vh);
    z-index: 0;
    right: -11vw !important;
    top: -27vw;
    position: absolute;


        max-width: 55vw;
    max-height: 55vw;
}
.circle-0 {
	background-color: aliceblue;
    width: calc(20vw + 5vh);
    height: calc(20vw + 5vh);
    z-index: 12;
    /*right: calc(20vw + 5vh);
    top: calc(10vw + 7vh);*/
    position: absolute;


    right: calc(24vw);
    top: calc(16vw);
    max-width: 25vw;
    max-height: 25vw;
}
.home {	
	  
    width: 100%;
}
.home-title__h1 {
	 z-index: 3;
    font-size: 3vw;
}
.home-background__div {
	    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>