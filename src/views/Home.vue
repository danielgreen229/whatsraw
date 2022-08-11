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
    	<p class="home-title__p">Создавайте рассылки или чат-ботов</br>сами или по данным из таблицы</p>
    	<button class="buttons-0 home-reg__button">Зарегистрироваться!</button>
    </div>


    <div class="home-block-0__container">
      <div class="home-block-0-info__div">
        <h1 class="home-block-0__h1">Более 15 тыс.<br> пользователей</h1>
      </div>
      <div class="home-block-0-info__div">
         <h1 class="home-block-0__h1">Доступно <br>в 180 странах</h1>
      </div>
      <div class="home-block-0-info__div">
         <h1 class="home-block-0__h1">Возможно <br>на 60 языках</h1>
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
  }
}
</script>

<style scoped>
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
	    height: 100vh;
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