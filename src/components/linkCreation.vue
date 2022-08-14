<template>
  <div class="link">


    <div class="link-main__container">

      <div class="prompt-container"  v-if="phoneChecking">
          <div class="card-phone-checker__container" >
            <div class="card-phone-checker__content">
              <div class="link-step-0__p">Без телефона невозможно отправить сообщение</div>
              <div class="card-phone-checker__div">Проверяемый:</div>
              <div class="card-phone-checker__div">{{SortedTable[indexPhoneChecking].FIO}} - {{SortedTable[indexPhoneChecking].phone}}</div>
              <div class="card-phone-checker__div">Введите правильный номер:</div>
              <input class="card-phone-checker-new-phone__input" v-model="newPhone"/>
              <div class="card-phone-checker__buttons">
                <button @click="deleteUserViaPhone">Удалить пользователя</button>
                <button @click="changePhone">Изменить</button>
              </div>
            </div>
          </div>
        </div>



        <div class="link-block-nav__div">
          <div>
            <h1 @click="step = 0" class="link-block-nav__h1" :class="{'current-nav': step == 0}">Загрузка таблицы</h1>
            <h1 @click="step = 1" class="link-block-nav__h1" :class="{'current-nav': step == 1}">Настройка шаблона</h1>
            <h1 @click="step = 2" class="link-block-nav__h1" :class="{'current-nav': step == 2}">Отправка</h1>
          </div>
        </div>
        


        <div v-show="step == 0">
          <div class="card">
            <h1 class="link-step-0__h1">1) Выберите файл формата "Excel"</h1>
            <div class="card-body">
              <input type="file" id="excel_file" />
            </div>
          </div>
          <div class="link-step-info__block">
            <p class="link-step-0__p">Необходимые поля в таблице: "Телефон". </br> Данные загружаются из всех под-таблиц.</p>
       
          </div>
          <div id="excel_data" class="mt-5"></div>

          <h1 class="link-step-0__h1 link-step-margin__h1">Видео туториал:</h1>
          
        </div>
        <iframe class="link__video-yt" :class="{'link__video-yt-scoped': step != 0}" src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>



        <div v-show="step == 1">

          <div class="card-header-3">

            <div class="link-step-0__h1">2) Создание шаблон сообщения</div>
            <h1>Переменные из загруженной таблицы</h1>
            <div class="link-var__container">
              <div v-if="!!findingVariables">
                <li class="link-step-1-var__li">
                  <p class="link-step-1-var__p link-step-1-var-cell">Для шаблона</p>
                  <p class="link-step-1-var__p link-step-1-var-cell">Расшифровка из загруженной таблицы</p>
                </li>
                <li class="link-step-1-var__li" v-for="item in findingVariables"> 
                    <p class="link-step-1-var__p">{{item.Name}}</p>
                    <p class="link-step-1-var__p">{{item.Raw}}</p>
                </li>
              </div>
             
            </div>


            <div class="link-step-0__h1" style="margin-top: 2vw">Сообщение для всех: </div>
            <textarea style="width: 80%;height: 15vw;display: block;" v-model="message">{{message}}</textarea>
            <div class="card-2">
              
              <button class="buttons-0" @click="changeMessageAll()">Применить</button>
            </div>
          </div>

          <div v-if="SortedTable.length != 0 && finding == null">
            <h1>Проверьте сообщения:</h1>
            <div class="programm__table" v-for="item, index in SortedTable" :key="index">
              <div class="programm-table__block">{{item.FIO}}</div>
              <div class="programm-table-phone__block" :id="`${index}-phone`">{{item.phone}}</div>
              <div class="programm-table__block"><textarea class="programm-table__textarea" disabled v-model="item.message"></textarea> </div>
            </div>  

          </div>

        </div>



        <div v-show="step == 2">

          <div class="card-3">
            <div class="link-step-0__h1">3) Сканируйте QR-code из приложения whatsapp для отправки с вашего номера и сообщения отправятся:</div>
            <img v-if="showQr" :src="qrSrc" alt="QR Code" id="qrcode">
            <h3>Logs: {{logs}}</h3>
            <div class="link-step-0__h1">4) Если не отправилось или уже вошли в аккаунт и QR-code не отображается, нажмите:</div>
            <button @click="sending">Отправить</button>
          </div>

          <div v-if="SortedTable.length != 0">
            <div class="link-step-0__h1-3">Таблица:</div>
            <div>
              <div class="card-people__p">Поиск</div>
              <input type="text" v-model="search">
              <div class="programm__table"  v-for="item in finding" :key="item.id">
                <div class="programm-table__block">{{item.FIO}}</div>
                <div class="programm-table-phone__block">{{item.phone}}</div>
                <div class="programm-table__block"><textarea class="programm-table__textarea" disabled v-model="item.message"></textarea> </div>
              </div>
            </div>
            <div class="card-people__p">Все Люди</div>
          </div>

       
          <div v-if="SortedTable.length != 0 && finding == null">
            <div class="programm__table" v-for="item, index in SortedTable" :key="index">
              <div class="programm-table__block">{{item.FIO}}</div>
              <div class="programm-table-phone__block" :id="`${index}-phone`">{{item.phone}}</div>
              <div class="programm-table__block"><textarea class="programm-table__textarea" disabled v-model="item.message"></textarea> </div>
            </div>  

          </div>
        </div>
      


        

    </div>
      <div class="home-block-footer__container">
      <div class="home-block-footer__text">
        <p>Whats Raw никоим образом не связан, не авторизован, не поддерживается, не спонсируется и не поддерживается WhatsApp или любым из его филиалов или дочерних компаний. Это независимое и неофициальное программное обеспечение. Не используйте этот сервис для рассылки спама или массовых сообщений. Используйте на свой риск.</p>
      </div>
      <div class="home-block-footer__roting">
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
 import QrCreator from 'qr-creator';
import { io } from "socket.io-client";

import XLSX from "xlsx";

let xlsx = require("json-as-xlsx")

export default {
  name: 'Home',
  data() {
    return {
      step: 0,

      qrSrc: '',
      showQr: true,
      logs: '',
      phoneChecking: false,
      newPhone: '',
      qrCode: '',
      srcQrCode: '',
      srcQRCODe: '',
      unSorteExcelTable: [],
      SortedTable: [],
      search: '',
      startCheckTable: false,
      indexPhoneChecking: 0,
      message: `Уважаемый (-ая)`,
      

      findingVariables: [],
     
    }
  },
  computed: {
    changedMessage() {
      return this.message
    },
    finding() {
      if(this.search != '') {
          return this.SortedTable.filter(item => {console.log(item); return item.FIO.indexOf(this.search) !== -1 })
      }
      else {
        return null
      }
      
    },
  },
  watch: {
    findingVariables () {
      let that = this
     // console.log(this.uniq(this.findingVariables), "PPPPPPP")
      
    },
    SortedTable () {
        console.log(this.SortedTable, Array.from(new Set(Array.from(document.all).map(i => i.id).filter(i => i != ""))).sort())
        let that = this

        setTimeout(() => {
          this.startCheckTable = false
          console.log("WOWOOWO", that.SortedTable.length)
          for (var i = 0; i < that.SortedTable.length; i++) {
            if(!!!that.SortedTable[i].phone) {
              that.phoneChecking = true
              break;
            }
            else {
              let str = ''
              str += that.SortedTable[i].phone
              console.log(str)
              if(str.includes(".") || str.includes(",") || str.includes('?')  || str.includes(' ') || str.length > 12) {
                that.phoneChecking = true
             
                break;
              }
              else {
                that.phoneChecking = false
                that.indexPhoneChecking++
              } 
            }
          }
        }, this.SortedTable.length * 5)
        

    
    }
  },
  async mounted() {
    setTimeout(()=>{this.loadExcel()},1000)
    this.sockets.subscribe('message', (data) => {
       console.log(data)
       this.logs = data
    }) 


     this.sockets.subscribe('qr', (data) => {
       console.log(data)
       this.qrSrc = data
     
    })
    this.sockets.subscribe('ready', async (data) => {
      this.showQr = false

       console.log(data)
        this.sending()
    });

    this.sockets.subscribe('authenticated', async (data) => {
       console.log(data)
       this.showQr = false

    });




  },
  methods: {
    uniq(a) {
       const filteredArray = [];
        a.filter((item) => {
          if (!filteredArray.some((element) => element.Raw === item.Raw)) {
            filteredArray.push(item);
          }
        });
      return filteredArray
    },
    async sending() {
      let arr = [{
        number: '79275699861',
        message: 'messag12e'
      },
      {
        number: '79171715789',
        message: 'message2'
      }]
      console.log(this.SortedTable)
      
      for(let key in arr) {
        console.log(arr[key])

        await fetch('https://whatssendlerserver.herokuapp.com/send-message', {
          method: 'POST',
          
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              number: this.SortedTable[key].phone.toString().replace('8','7'),
              message: this.SortedTable[key].message
          })
        }).then((res)=>{console.log("zxc", res)});


      }
    },
    deleteUserViaPhone() {
     
      this.SortedTable.splice(this.indexPhoneChecking, 1);


      this.indexPhoneChecking = 0

        let that = this

         for (var i = 0; i < that.SortedTable.length; i++) {
            if(!!!that.SortedTable[i].phone) {
              that.phoneChecking = true
              break;
            }
            else {
              let str = ''
              str += that.SortedTable[i].phone
              console.log(str)
              if(str.includes(".") || str.includes(",") || str.includes('?')  || str.includes(' ') || str.length > 12) {
                that.phoneChecking = true
             
                break;
              }
              else {
                that.phoneChecking = false
                that.indexPhoneChecking++
              } 
            }
          }

    },
    changePhone() {
      console.log(this.newPhone, this.indexPhoneChecking)

        this.SortedTable[this.indexPhoneChecking].phone = this.newPhone
        
        for(let p = 0; p < this.findingVariables.length; p++) {
          if(this.findingVariables[p].Raw == "Телефон") {
            if(!!this.SortedTable[this.indexPhoneChecking].info[p])
              this.SortedTable[this.indexPhoneChecking].info[p] = this.newPhone
           
          }
        }
        this.changeMessageAll()

        this.indexPhoneChecking = 0

        let that = this

         for (var i = 0; i < that.SortedTable.length; i++) {
            if(!!!that.SortedTable[i].phone) {
              that.phoneChecking = true
              break;
            }
            else {
              let str = ''
              str += that.SortedTable[i].phone
              console.log(str)
              if(str.includes(".") || str.includes(",") || str.includes('?')  || str.includes(' ') || str.length > 12) {
                that.phoneChecking = true
             
                break;
              }
              else {
                that.phoneChecking = false
                that.indexPhoneChecking++
              } 
            }
          }
     

    },
    changeMessageAll () {
      let that = this
      console.log("WOOO", that.SortedTable)
      that.findingVariables = that.uniq(that.findingVariables)

      for (var i = 0; i < that.SortedTable.length; i++) {
        
        let IO = that.SortedTable[i].FIO.substr(that.SortedTable[i].FIO.indexOf(" ") + 1);
        let formMessage = that.message
        formMessage = formMessage.replace("{{FIO}}", IO)
        formMessage = formMessage.replace("{{Protocol}}", this.SortedTable[i].protocol)


         for(let j = 0; j < this.findingVariables.length; j++) {
            console.log(this.findingVariables[j].Raw)

            formMessage = formMessage.replaceAll(this.findingVariables[j].Name, this.SortedTable[i].info[j])
          }
        this.SortedTable[i].message = formMessage
     
      }
    },
    sortExcel(tableNum) {
      
      let paddingTopIndex = 0
      let protocolPlaceIndex = -1
      let FIOPlaceIndex = -1
      let phonePlaceIndex = -1
      let protocolFieldCounter = 0

      for(let i = 0; i < this.unSorteExcelTable[tableNum].length; i++) {

        if(this.unSorteExcelTable[tableNum][i].length == 0) {
          paddingTopIndex++
        }
        else {
          break;
        }
      }


      for (var i = 0; i < this.unSorteExcelTable[tableNum][paddingTopIndex].length; i++) {
        this.message += '{{' + this.unSorteExcelTable[tableNum][paddingTopIndex][i] + '}}  '
         this.findingVariables.push({Name: '{{' + this.unSorteExcelTable[tableNum][paddingTopIndex][i] + '}}', Raw: this.unSorteExcelTable[tableNum][paddingTopIndex][i] })

        if(this.unSorteExcelTable[tableNum][paddingTopIndex][i] == "Дата размещения протокола, на сайте аккредитационного центра")
        {
          protocolPlaceIndex = i
          protocolFieldCounter++

        }
        else if(this.unSorteExcelTable[tableNum][paddingTopIndex][i] == "ФИО") {
          FIOPlaceIndex = i
        }
        else if(this.unSorteExcelTable[tableNum][paddingTopIndex][i] == "Телефон") {
          phonePlaceIndex = i
        }
      }


      if(protocolPlaceIndex == -1) {
        alert("Ошибка! В excel нет столбца: Дата размещения протокола, на сайте аккредитационного центра")
      }
      else if(FIOPlaceIndex == -1) {
        alert("Ошибка! В excel нет столбца: ФИО")
      }
      else if(phonePlaceIndex == -1) {
        alert("Ошибка! В excel нет столбца: Телефон")
      }

      if(protocolFieldCounter > 1) {
        alert("Найдено больше 1 столбца с названием: Дата размещения протокола, на сайте аккредитационного центра. Для улучшения работы программы уберите лишний. Для этой итерации будет выбран столбец с конца, по счету: " + protocolPlaceIndex)
      }

      console.log(paddingTopIndex, protocolPlaceIndex, FIOPlaceIndex, phonePlaceIndex)


  


      for (var i = 0; i < this.unSorteExcelTable[tableNum].length; i++) {

        if(this.unSorteExcelTable[tableNum][i][protocolPlaceIndex] != "" && i > paddingTopIndex && !!this.unSorteExcelTable[tableNum][i][protocolPlaceIndex]) {

          let IO = this.unSorteExcelTable[tableNum][i][FIOPlaceIndex]

          let formedMessage = this.message

          for(let j = 0; j < this.findingVariables.length; j++) {
            //console.log(this.findingVariables[j].Raw)

            formedMessage = formedMessage.replaceAll(this.findingVariables[j].Name, this.unSorteExcelTable[tableNum][i][j])
          }
          



          this.SortedTable.push({
            FIO: this.unSorteExcelTable[tableNum][i][FIOPlaceIndex], 
            phone: this.unSorteExcelTable[tableNum][i][phonePlaceIndex],
            info:  this.unSorteExcelTable[tableNum][i],
            message: formedMessage
          }) 
        }
      }


      for (var i = 0; i < this.unSorteExcelTable[tableNum][paddingTopIndex].length; i++) {
        

       
      }

      console.log(this.SortedTable)







    },
    sendMessages() {
      console.log("letsgo")

      axios.post('http://localhost:3400/whats/89275699861/hellow' , {data: JSON.stringify(this.SortedTable)}).then((res)=>{

        console.log(res)
      })

      
      // , {data: JSON.stringify(this.SortedTable)}).then((resu)=>{
      //   console.log("NO: ", resu)
      //   this.qrCode = resu.data
       
      // })



    },
    loadExcel() {

      console.log("YES")
     
      let that = this
       that.startCheckTable = true
      that.unSorteExcelTable = []
      that.SortedTable = []
      const excel_file = document.getElementById('excel_file');
      excel_file.addEventListener('change', (event) => {
          if(!['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'].includes(event.target.files[0].type))
          {
              document.getElementById('excel_data').innerHTML = '<div class="alert alert-danger">Only .xlsx or .xls file format are allowed</div>';
              excel_file.value = '';
              return false;
          }
          var reader = new FileReader();
          reader.readAsArrayBuffer(event.target.files[0]);
          reader.onload = function(event){
              var data = new Uint8Array(reader.result);
              var work_book = XLSX.read(data, {type:'array'});
              var sheet_name = work_book.SheetNames;
              console.log(sheet_name)
              let result = []
              for(let i = 0; i < sheet_name.length; i++) {
                var sheet_data = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name[i]], {header:1});


                result.push(sheet_data)
              }
              
              console.log(result)
              that.unSorteExcelTable = result

              for (var i = 0; i < that.unSorteExcelTable.length; i++) {
                that.sortExcel(i) 
                that.step = 1 
              }
             
              excel_file.value = '';

          }

      });
    },
  }
}
</script>






<style scoped>
  .home-block-footer__container {
    background-color: #222222;
    width: calc(100% + 38vw);
    margin-left: -19vw;
    height: 24vw;
    margin-top: 10vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    align-content: center;
    transform: translateY(1vw);
}
  .link-step-info__block {
    width: 100%;
    height: 6vw;
    padding: 1vw 1vw 1vw 7vw;
    box-sizing: border-box;
    background-color: #92929221;
    margin: 3vw 0vw;
        border-radius: 4vw;
  }
  .link-step-info__block:before {
    background: url('../assets/profile/info.svg');
   content: "";
    width: 6vw;
    height: 6vw;
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.7;
    margin-left: -7vw;
    margin-top: -1vw;
  }
  .link-step-margin__h1 {
    margin-top: 1vw;
        height: 35vw;
  }
  .link-step-0__p {
        margin-top: 0vw;
    margin-bottom: 0vw;
       line-height: 1.4325em;
       font-size: 1.3vw;
  }
  .link__video-yt {
        width: 59vw;
    height: 30vw;
    margin-top: 1vw;
    transition: 0.6s;
    position: absolute;
    top: 29vw;
    left: 22vw;
  }
  .link__video-yt-scoped {
     transform: scaleX(0.3) scaleY(0.3);
    position: absolute;
    left: 2vw;
    top: 10.5vw;
    margin-top: 0vw;
    transform-origin: left;
  }
  .current-nav {
    transform-origin: left;
    transform: scale(1.1);
  }
  .link-block-nav__h1 {
    font-size: 1.6vw;
    margin-bottom: 1.5vw;
    transition: 1s;
    cursor: pointer;
  }
  .link-block-nav__h1:hover {
    transform: scale(1.1);
    transform-origin: left;
  }
  .link-block-nav__div {
    position: absolute;
    left: 2vw;
    top: 11vw;
  }
  .link-step-1-var-cell {
    color: black;
    font-weight: bold;
  }
  .link-step-1-var__li {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .link-step-1-var__p {
        margin: 0.1vw 0vw;
    text-align: left;
    width: 100%;
    font-size: 1vw;
  }
  .link-new-var-button {
        margin-top: 2vw;
        width: 20vw;
    padding: 0.5vw;
    border-radius: 2vw;
  }
  .link-var__container {
    display: flex;
    flex-direction: column;
  }
  .link-main__container {
    margin-top: 10vw;
        margin-left: 3vw;
  }
  p {
    text-align: left !important;
  }
  .link {
    padding: 1vw;

    box-sizing: border-box;
     text-align: left !important;
  }
  body {
        font-size: 2vw !important;
        
  }
  .programm__table {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    border-top: 0.2vw solid grey;
  
  }
  .programm-table__block {
    width: 33.3vw;
  }
  .programm-table-phone__block {
    width: 15.3vw;
  }
  .programm-table__textarea {
      width: 100%;
  }
  .card {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    
  }
  .card-2 {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin-top: 2vw;
  }
  .card-3 {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin-top: 2vw;
    flex-direction: column;
    align-items: flex-start;
  }
  .link-step-0__h1 {
        text-align: left;
    margin-right: 1vw;
    font-size: 1.5vw;
  }
  .card-header-3, .card-people__p {
    margin-top: 2vw;
  }
  .card-phone-checker__container {
   position: fixed;
    background-color: white;
    border-radius: 2vw;
    width: 100%;
    height: 36vw;
    top: 0;
    margin-left: 25%;
    margin-right: auto;
    z-index: 5;
    margin-top: 6vw;
    max-width: 49vw;
  }
  .card-phone-checker__div {

  }
  .prompt-container {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #80808073;
    z-index: 4;
  }
  .card-phone-checker__content {
    font-size: 3vw;
    margin-left: 2vw;
    margin-top: 2vw;
    display: flex;
    flex-direction: column;
    height: calc(100% - 5vw);
    align-items: flex-start;
    justify-content: space-between;
  }
  .card-phone-checker-new-phone__input {
        width: 12vw;
    height: 3vw;
    margin-bottom: 1vw;
  }
  .card-phone-checker__buttons {
    display: flex;
    justify-content: space-between;
    width: calc(100% - 4vw);
  }





</style>
