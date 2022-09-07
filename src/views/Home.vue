<template>
  <div class="home">
  	<div v-if="Wwidth > 480" class="home-background__div">
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
    <div v-else>
      <div class="background__svg"></div>
      
      <p @click="goTo(3)" class="home-login__p">Вход</p>
    </div>


    <div class="home-title__container">
    	<h1 class="home-title__h1">Рассылка в <mark class="mark-whatsapp">WhatsApp</mark></br> из <mark class="mark-whatsapp">Excel</mark> таблиц</h1>
    	<p class="home-title__p">Создавайте диалоги и</br>отправляйте сообщения из таблиц</p>
    	<button @click="goTo(0)" class="buttons-0 home-reg__button">Зарегистрироваться!</button>
     
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
      <h1 class="home-block-0-sol-main__h1">Уникальное предложение</h1>
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
          <p class="home-block-0-sol__p">Отправка сообщений используя Excel файл</p>
        </div>
      </div>
    </div>
    <div class="home-block-1-ex__div">
      <div class="home-block-1-iphone__div" id="iphone-1">
        <kinesis-container class="home-block-1-iphone__gif">
          <kinesis-element :strength="10">
            <transition name="slide-fade">
              <div class="home-block-1-message-0__div" v-if="CountMessageShow > -1">
                <p class="home-block-1-message-0__p">Добрый день, Дмитрий! &#128075, сегодня состоится еженедельное собрание в нашем клубе "СфераПек"! </br>Общий сбор в 2:30. &#128516;</br>Всех ждем! &#127881;&#127881;&#127881;</p>
              </div>
            </transition>
           </kinesis-element>
          <kinesis-element :strength="15">
            <transition name="slide-fade" >
              <div class="home-block-1-message-1__div" v-if="CountMessageShow > 0">
                <p class="home-block-1-message-1__p">Обязательно буду! Возьму с собой пару друзей!</p>
              </div>
            </transition>
          </kinesis-element>
           <kinesis-element :strength="18">
            <transition name="slide-fade">
              <div class="home-block-1-message-2__div" v-if="CountMessageShow > 1">
                <p class="home-block-1-message-0__p">Подготовим для вас самые лучшие места!</p>
              </div>
            </transition>
           </kinesis-element>
           <kinesis-element :strength="20">
            <transition name="slide-fade">
              <div class="home-block-1-message-3__div" v-if="CountMessageShow > 2">
                <p class="home-block-1-message-1__p">Большое спасибо!</p>
              </div>
            </transition>
           </kinesis-element>
        </kinesis-container>
      </div>
      <div class="home-block-1-info-0__div">
        <h1 class="home-block-1-info-0__h1">Достичь больше</h1>
        <p class="home-block-1-info-0__p">Создавая рассылки в WhatsApp,</br>вы улучшаете отношения со</br> своими клиентами.</p>
      </div>
    </div>
    <div class="home-block-1-ex__div home-block-1-top__div">
       <div class="home-block-1-info-0__div">
        <h1 class="home-block-1-info-0__h1">Повысить лояльность</h1>
        <p class="home-block-1-info-0__p">Создавайте более качественные и</br> персонализированные впечатления,</br>которые радуют клиентов.</p>
      </div>
      <div class="home-block-1-iphone-1__div iphone-2__padding" id="iphone-2">
        <kinesis-container class="home-block-1-iphone__gif">
          <kinesis-element :strength="10">
            <transition name="slide-fade">
              <div class="home-block-1-message-0__div message-margin" v-if="CountMessageShow > 3">
                <p class="home-block-1-message-0__p">👨‍💻 В Студии "Supit" проходят бесплатные вебинары «Как войти в IT и стать разработчиком мобильных приложений». Смотреть здесь: <a style="color: #3397f9; background-color: transparent;"" href="https://supitweb.com/">https://supitweb.com/</a></p>
              </div>
            </transition>
          </kinesis-element>
          <kinesis-element :strength="15">
            <transition name="slide-fade">
              <div class="home-block-1-message-1__div message-margin-1" v-if="CountMessageShow > 4">
                <p class="home-block-1-message-1__p">Всегда хотела пройти. Спасибо! &#128077;</p>
              </div>
            </transition>
          </kinesis-element>
          <kinesis-element :strength="18">
            <transition name="slide-fade">
              <div class="home-block-1-message-2__div message-margin-2" v-if="CountMessageShow > 5">
                <p class="home-block-1-message-0__p">Кураторы будут вас ждать! &#129309;</p>
              </div>
            </transition>
          </kinesis-element>
        </kinesis-container>
      </div>
    </div>
    <div v-if="Wwidth > 480" class="home-block-1-sol__div">
      <h1 class="home-block-0-sol-main__h1">Способы использования</h1>
      <p style="text-align: center;">Проще чем вы думаете</p>
      <div class="home-block-0-sol-div__container">
        <div class="home-block-0-sol-h1__content content-padding">
          <div class="home-block-0-sol__img home-block-1-sol__img-0"></div>
          <h1 class="home-block-0-sol__h1">Чатинг</h1>
          <p class="home-block-0-sol__p">Отправка сообщений </br>для автоматизации бизнеса.</p>
        </div>
        <div class="home-block-0-sol-h1__content content-padding">
          <div class="home-block-0-sol__img home-block-1-sol__img-1"></div>
          <h1 class="home-block-0-sol__h1">Сервис</h1>
          <p class="home-block-0-sol__p">Общайтесь со своими клиентами и оказывайте поддержку.</p>
        </div>
        <div class="home-block-0-sol-h1__content">
          <div class="home-block-0-sol__img home-block-1-sol__img-2"></div>
          <h1 class="home-block-0-sol__h1">Аутентификация</h1>
          <p class="home-block-0-sol__p">Нет необходимости запоминать пароли для приложения.</p>
        </div>
      </div>
    </div>
    <div class="home-block-footer__container">
      <div class="home-block-footer__text">
        <p class="home-block-footer__p">Whats Raw никоим образом не связан, не авторизован, не поддерживается, не спонсируется и не поддерживается WhatsApp или любым из его филиалов или дочерних компаний. Это независимое и неофициальное программное обеспечение. Не используйте этот сервис для рассылки спама или массовых сообщений. Используйте на свой риск.</p>
      </div>
      <div v-if="Wwidth > 480" class="home-block-footer__roting">
        <h1 class="home-block-footer__h1">Быстрые ссылки</h1>
        <div class="home-block-footer__nav">
          <p @click="goTo(0)" class="home-block-footer__p">Регистрация</p>
          <p @click="goTo(1)" class="home-block-footer__p">Личный кабинет</p>
          <p @click="goTo(2)" class="home-block-footer__p">О нас</p>
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
      Wwidth: window.innerWidth,
      scrollY: 0,
      CountMessageShow: -1,
    }
  },
  watch: {
    Wwidth() {
    },
    scrollY() {
      if(this.scrollY + window.innerHeight < document.getElementById("iphone-1").offsetTop + 500) {
        this.CountMessageShow = -1
      }
      else if(this.scrollY + window.innerHeight > document.getElementById("iphone-2").offsetTop + 700) {
        this.CountMessageShow = 6
      }
      else if(this.scrollY + window.innerHeight > document.getElementById("iphone-2").offsetTop + 600) {
        this.CountMessageShow = 5
      }
      else if(this.scrollY + window.innerHeight > document.getElementById("iphone-2").offsetTop + 500) {
        this.CountMessageShow = 4
      }
      
      else if(this.scrollY + window.innerHeight > document.getElementById("iphone-1").offsetTop + 750) {
        this.CountMessageShow = 3
      }
      else if(this.scrollY + window.innerHeight > document.getElementById("iphone-1").offsetTop + 700) {
        this.CountMessageShow = 2
      }
      else if(this.scrollY + window.innerHeight > document.getElementById("iphone-1").offsetTop + 600) {
        this.CountMessageShow = 1
      }
      else if(this.scrollY + window.innerHeight > document.getElementById("iphone-1").offsetTop + 500) {
        this.CountMessageShow = 0
      }
    }
  },
  mounted() {
    this.Wwidth = window.innerWidth

    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);


      window.addEventListener('scroll', this.onScroll)
    })
  },

  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
    window.removeEventListener('scroll', this.onScroll)
  },
  computed: {
    user () {
      try {
        const data = Object.assign({}, this.$store.getters.user);
        return  data        
      }
      catch (e){ console.log(e)}
    },
  },
  methods: {  
    onScroll() {
      this.scrollY = window.scrollY
    },
    onResize() {
      this.Wwidth = window.innerWidth
    },
    goTo(ind) {
      if(ind == 0) { !!this.user.email? this.$router.push('/profile') : this.$router.push('/signup') }
      else if(ind == 1) { this.$router.push('/profile') }
      else if(ind == 2) { this.$router.push('/about') }
      else if(ind == 3) { this.$router.push('/signin') }
    }
  }
}
</script>

<style>
.home-login__p {
  position: absolute;
  right: 0;
  font-size: 5vw;
  color: white;
  padding: 0;
  margin: 0 3vw;
  height: 14vw;
  display: flex;
  align-items: center;
  font-weight: bold;
}
.background__svg {
   background-image: url(/img/signupin.aad50cb3.svg);
      background-repeat: no-repeat;
    width: 100%;
    height: 117vw;
    position: absolute;
    background-size: 200%;
    margin-left: -3vw;
    top: 0;
    transform-origin: center;
    transform: rotate(180deg);

}
.home-block-footer__h1 {
  color: white; 
  font-size: 3vw;  
}

.home-block-footer__nav {
  display: flex;
    flex-direction: row;
}
.home-block-footer__p {
  padding-right: 1vw;
  cursor: pointer;
}
.home-block-footer__p:hover {
  opacity: 0.85;
}
.home-block-footer__container {
   background-color: #222222;
    width: calc(100% + 36vw);
    margin-left: -18vw;
    height: 24vw;
    margin-top: 15vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    align-content: center;
}
.home-block-footer__text {
  width: 50%;
  padding: 2vw;
      box-sizing: border-box;
}
.home-block-footer__roting {
  width: 50%;
   padding: 3vw;
       box-sizing: border-box;
}




.home-block-1-sol__div {
  margin-top: -3vw;
}
.home-block-1-info-0__p {
  white-space: nowrap;  
}

.iphone-2__padding {
      /*transform: translateX(9vw);*/
}
.home-block-1-message-0__p {
  margin: 0;
    line-height: 1.325em !important;
    font-size: 1.2vw;
}
.home-block-1-message-1__p {
  margin: 0;
    line-height: 1.325em !important;
    font-size: 1.2vw;
}
.home-block-1-message-0__div {
   background-color: #DCF7C5;
    border-radius: 2vw 0vw 2vw 2vw;
    line-height: 0.625em !important;
    padding: 1vw 1.5vw;
    width: 14vw;
    margin-top: 12vw;
    margin-left: 8vw;
    margin-right: 0;
}
.home-block-1-message-1__div {
      background-color: white;
    border-radius: 0vw 2vw 2vw 2vw;
    line-height: 0.625em !important;
    padding: 1vw 1.5vw;
    width: 15.1vw;
    margin-top: 1vw;
    margin-left: 6.2vw;
}
.home-block-1-message-2__div {
    background-color: #DCF7C5;
    border-radius: 2vw 0vw 2vw 2vw;
    line-height: 0.625em !important;
    padding: 1vw 1.5vw;
    width: 12.5vw;
    margin-top: 1vw;
    margin-left: 9.5vw;
}
.home-block-1-message-3__div {
   background-color: white;
    border-radius: 0vw 2vw 2vw 2vw;
    line-height: 0.625em !important;
    padding: 1vw 1.5vw;
    width: 10.5vw;
    margin-top: 1vw;
    margin-left: 6.2vw;
}
.message-margin {
       margin-left: 7.5vw;
    width: 12.4vw;
        margin-top: 11.5vw;
}
.message-margin-1 {
      margin-left: 6vw;
    width: 12.9vw;
}
.message-margin-2 {
  margin-left: 7.5vw;
}
.home-block-1-info-0__h1 {
  font-size: 3vw;
  white-space: nowrap;
}
.home-block-1-info-0__div {
   display: flex;
    width: 68%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: -3vw;
}
.home-block-1-iphone__gif {
   min-width: 100%;
    height: 100%;
    position: absolute;
}
.home-block-1-iphone-1__div {
    
    background: url('../assets/home/iphone2.svg');
  width: 68%;
    height: 100%;
  
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
}
.home-block-1-iphone__div {
    
    background: url('../assets/home/iphone.svg');
  width: 68%;
    height: 100%;

    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
}

.home-block-1-ex__div {
  display: flex;
    margin-top: 10vw;
    width: 100%;
    height: 64vw;
}
.home-block-1-top__div {
  margin-top: -15vw;
}



.home-block-0-sol__img-0 {
  background: url('../assets/home/load.svg');
}
.home-block-0-sol__img-1 {
  background: url('../assets/home/share.svg');
}
.home-block-0-sol__img-2 {
   background: url('../assets/home/message.svg');
}
.home-block-1-sol__img-0 {
  background: url('../assets/home/message.svg');
}
.home-block-1-sol__img-1 {
  background: url('../assets/home/users.svg');
      background-size: 90% !important;
}
.home-block-1-sol__img-2 {
   background: url('../assets/home/lock.svg');
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
  margin-right: 2vw;
}
.home-block-0-sol__p {
  text-align: center;
}
.home-block-0-sol-h1__content {
    padding: 0.5vw;
  width: 33.333%;
  display: flex;
    flex-direction: column;
    align-items: center;
  box-shadow: 0px 1vw 3vw rgb(0 0 0 / 10%);
}
.home-block-0-sol-div__container {
  margin-top: 5vw;
  display: flex;
    flex-direction: row;
}
.home-block-0-sol__div {
  margin-top: 10vw;
}
.home-block-0-sol-main__h1 {
  font-size: 3vw;
  text-align: center;
}
.home-block-0-sol__h1 {
  font-size: 2vw;
  text-align: center;
}
.home {
 
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
  transition: 1s;
}
.home-reg__button:hover {
  opacity: 0.85;

}
.home-enter__button {
    background-color: #477bf8;
    border: none;
    z-index: 3;
	margin-top: 4vw;
	margin-bottom: 5vw;
  transition: 1s;
   font-size: 8vw;
  color: white;
  border-radius: 0;
  font-weight: bold;
  padding: 1vw;
  cursor: pointer;
  }
.home-enter__button:hover {
  opacity: 0.85;

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
  overflow: hidden;
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

      white-space: nowrap;
}
.home-background__div {
	    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
}

.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0); 
}
.slide-fade-enter, .slide-fade-leave-to
{ 
  transform: translateY(3vw);
  opacity: 0;
}

.slide-fade-rev-enter-active {
  transition: all .5s ease;
}
.slide-fade-rev-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0); 
}
.slide-fade-rev-enter, .slide-fade-rev-leave-to
{
  transform: translateY(-3vw);
  opacity: 0;
}

@media (max-width: 480px) {
  .home-block-footer__container {
    margin-left: -33vw;
  }
  .circle-1 {
    right: 1vw !important;
  }
  .home-block-footer__text {
    width: 50%;
  }
  .home-block-footer__p {
    font-size: 1.5vw;
  }
  .home-block-footer__container {
    height: 25vw;
  }
}



</style>