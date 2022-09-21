<template>
  <div class="link">


    <div class="link-main__container">
      <transition name="slide-fade-rev" ><h1 v-if="error != ''" class="error-info__promt">{{error}}</h1></transition>

      <div class="prompt-container"  v-if="phoneChecking && step == 1">
          <div class="card-phone-checker__container" >
            <div class="card-phone-checker__content">
              <h1 class="card-phone-checker__h1">Номер контакта не распознан:</h1>
              <p class="card-phone-checker__div">{{SortedTable[indexPhoneChecking].FIO ? SortedTable[indexPhoneChecking].FIO : SortedTable[indexPhoneChecking].info}} - {{SortedTable[indexPhoneChecking].phone}}</p>
              <div class="card-phone-checker__input">
                <p class="card-phone-checker_div__p">Введите правильный номер:</p>
                <input class="card-phone-checker-new-phone__input" v-model="newPhone"/>
              </div>
              <div class="card-phone-checker__buttons">
                <button class="buttons-0 card-phone-checker__btn" @click="deleteUserViaPhone">Удалить пользователя</button>
                <button class="buttons-0 card-phone-checker__btn" @click="changePhone">Изменить</button>
              </div>
            </div>
          </div>
        </div>

        <div class="link-block-nav__div">
            <h1 @click="setStep(0)" class="link-block-nav__h1" :class="{'current-nav': step == 0, 'no-current-nav': step != 0}">Загрузка таблицы</h1>
            <h1 @click="setStep(1)" class="link-block-nav__h1" :class="{'current-nav': step == 1, 'no-current-nav': step != 1}">Настройка шаблона</h1>
            <h1 @click="setStep(2)" class="link-block-nav__h1" :class="{'current-nav': step == 2, 'no-current-nav': step != 2}">Отправка</h1>
        </div>
        
        <div v-show="step == 0">
          <div class="card">
            <h1 class="link-step-0__h1">1) Выберите файл формата ".xlsx" или ".xls"</h1>
          </div>
          <div class="link-step-info__block">
            <p class="link-step-0__p">Необходимые поля в таблице: "Телефон". </br> Данные загружаются из всех под-таблиц.</p>
          </div>
           <vue-dropzone ref="myVueDropzone" id="excel_file"  :options="dropzoneOptions" ></vue-dropzone>
          <div id="excel_data" class="mt-5"></div>
          <h1 class="link-step-0__h1 link-step-margin__h1">Видео туториал:</h1>
        </div>
        <iframe class="link__video-yt" :class="{'link__video-yt-scoped': step != 0}" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>

        <div v-show="step == 1">
          <div class="card-header-3">
            <h1 class="link-step-0__h1">2) Создание шаблон сообщения</h1>
            <h1 class="link-step-1__h1">Переменные из загруженной таблицы</h1>
            <div class="link-var__container" v-if="!!findingVariables">
                <li class="link-step-1-var__li">
                  <p class="link-step-1-var__p link-step-1-var-cell">Для шаблона</p>
                  <p class="link-step-1-var__p link-step-1-var-cell">Расшифровка из загруженной таблицы</p>
                </li>
                <li class="link-step-1-var__li" v-for="item in findingVariables"> 
                    <p class="link-step-1-var__p">{{item.Name}}</p>
                    <p class="link-step-1-var__p">{{item.Raw}}</p>
                </li>
            </div>
            <div class="link-step-info__block link-step-1-info__margin">
              <p class="link-step-0__p">Переменные в `{{}}` заменяются на столбцы из таблицы</br>для каждого пользователя соответственно </p>
            </div>
            <h1 class="link-step-0__h1" style="margin-top: 2vw">Сообщение для всех: </h1>
            <textarea class="link-step-1__textarea" v-model="message">{{message}}</textarea>
            <div class="card-2">
              <button class="buttons-1 confirm__btn" @click="changeMessageAll(); stepEndPoint++">Применить</button>
            </div>
          </div>
        </div>

        <div v-show="step == 2">
          <div class="link-step-2-payment__container">
            <div class="link-step-2-payment__div">
              <h1 class="link-step-0__h1">Продвинутый план WhatsRaw без ограничений</h1>
              <div class="link-step-2-payment-plan__container">
                <div @click="paymentSelected = 0" class="link-step-2-payment-plan__block link-step-2-payment-margin__block" :class="{'selected-payment': paymentSelected == 0}">
                  <h1 class="link-step-2-payment-plan__h1" :class="{'selected-payment-h1': paymentSelected == 0}">
                    {{prices.low}}
                    <span class="payment-ruble__svg link-step-2-payment-margin__rubi" :class="{'selected-payment-ruble__svg': paymentSelected == 0}"></span>
                  </h1>
                  <p class="link-step-2-payment-plan__p" :class="{'selected-payment-h1': paymentSelected == 0}">0.5   <span class="payment-ruble__svg payment-ruble__p" :class="{'selected-payment-ruble__svg': paymentSelected == 0}"></span>&nbsp;&nbsp; за 1 пользователя</p>
                </div>
                <div @click="paymentSelected = 1" class="link-step-2-payment-plan__block link-step-2-payment-margin__block" :class="{'selected-payment': paymentSelected == 1}">
                  <h1 class="link-step-2-payment-plan__h1" :class="{'selected-payment-h1': paymentSelected == 1}">{{prices.medium}} 
                    <span class="payment-ruble__svg" :class="{'selected-payment-ruble__svg': paymentSelected == 1}"></span>
                  </h1>
                  <p class="link-step-2-payment-plan__p" :class="{'selected-payment-h1': paymentSelected == 1}">Безлимит на месяц</p>
                </div>
                <div @click="paymentSelected = 2" class="link-step-2-payment-plan__block" :class="{'selected-payment': paymentSelected == 2}">
                  <h1 class="link-step-2-payment-plan__h1" :class="{'selected-payment-h1': paymentSelected == 2}">{{prices.high}}
                    <span class="payment-ruble__svg" :class="{'selected-payment-ruble__svg': paymentSelected == 2}"></span>
                  </h1>
                  <p class="link-step-2-payment-plan__p" :class="{'selected-payment-h1': paymentSelected == 2}">На всю жизнь</p>
                </div>
              </div>
              <button class="buttons-1 payment-button">Перейти к оплате</button>
              <div class="link-payment-info__container">
                <h1 class="link-step-0__h1">Что дает продвинутый план?</h1>
                <div class="link-payment-info__block">
                  <div class="link-payment-info__li link-payment-info__li-0">
                    <h1 class="link-payment-info__h1">Безлимитная отправка сообщений</h1>
                    <p class="link-payment-info__p">Рассылка на неограниченое число человек</p>
                  </div>
                  <div class="link-payment-info__li link-payment-info__li-1">
                    <h1 class="link-payment-info__h1">Приоритетная поддержка</h1>
                    <p class="link-payment-info__p">Получение ответа на возникший вопрос в течение 24 часов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div class="card-3">
            <h1 class="link-step-0__h1">3) Сканируйте QR-code из приложения whatsapp для отправки с вашего номера и сообщения отправятся:</h1>
            <div class="link-step-info__block">
              <p class="link-step-0__p">Отсканируйте QR-code,  перейдя в</br> Whatsapp → Настройки → Связанные устройства → Привязка устройства</p>
            </div>
            <img class="link-qr__img" v-if="showQr && qrSrc != ''" :src="qrSrc" alt="QR Code" id="qrcode">
            <h3>Статус: {{logs}}</h3>
            <button class="buttons-1 button-1-send__margin" @click="sending">Отправить сообщения</button>
          </div>
        </div>
        
        <div class="nav-bottom-buttons__container">
          <div class="nav-bottom-buttons__div nav-div-but-0"><button @click="BottomButtonStep(0)" v-show="prevStep != ''" class="buttons-0 upload-list__btn">{{prevStep}}</button></div>
          <div class="nav-bottom-buttons__div nav-div-but-1"><button @click="BottomButtonStep(1)" v-show="nextStep != ''" class="buttons-0 next-step__btn">{{nextStep}}</button></div>
        </div>

        <div v-if="step == 1 || step == 2" class="link-sorted-table__container">
          <div v-if="SortedTable.length != 0 && finding == null">
            <h1 class="link-step-0__h1">Проверьте сообщения:</h1>
            <div class="link-sorted-table__cell">
              <h1 class="programm-table__block">ФИО</h1>
              <h1 class="programm-table-phone__block">Телефон</h1>
              <h1 class="programm-table__block">Сообщение</h1>
            </div>
            <div class="programm__table" v-for="item, index in SortedTable" :key="index">
              <div class="programm-table__block" v-if="max-width < 480">{{item.FIO}}</div>
              <div class="programm-table-phone__block" :id="`${index}-phone`">{{item.phone}}</div>
              <div class="programm-table__block"><textarea class="programm-table__textarea" disabled v-model="item.message"></textarea> </div>
            </div>  
          </div>
        </div>
    </div>
      <div class="home-block-footer__container">
      <div class="home-block-footer__text">
        <p class="home-block-footer__p">Whats Raw никоим образом не связан, не авторизован, не поддерживается, не спонсируется и не поддерживается WhatsApp или любым из его филиалов или дочерних компаний. Это независимое и неофициальное программное обеспечение. Не используйте этот сервис для рассылки спама или массовых сообщений. Используйте на свой риск.</p>
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

import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'Home',
  data() {
    return {
      step: 0,
      stepEndPoint: 0,
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
      indexPhoneChecking: 0,
      message: `Уважаемый (-ая)`,
      error: '',
      findingVariables: [],
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 150,
        maxFilesize: 10000,
        dictDefaultMessage: "Перетащите или выберите файл",
        uploadMultiple: false,
        maxFiles: 1,
        dictRemoveFile: "Удалить",
        dictCancelUpload: "Удалить",
        addRemoveLinks: true,
      },
      prevStep: '',
      nextStep: 'Настройка шаблона →',
      prices: {
        low: '',
        medium: '299',
        high: '499'
      },
      paymentSelected: 0,
      sessionId: uuidv4(),

    }
  },
  components: {
    vueDropzone: vue2Dropzone
  },
  computed: {
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
    step () {
      if(this.step == 0) {
        this.prevStep = ''
        this.nextStep = 'Настройка шаблона →'
      }
      else if (this.step == 1) {
        this.prevStep = '← Загрузка таблицы'
        this.nextStep = 'Отправка →'
      }
      else if (this.step == 2) {
        this.prevStep = '← Настройка шаблона'
        this.nextStep = ''
      }
    },
    SortedTable () {
      let that = this
      that.prices.low = 0.5 * that.SortedTable.length
      setTimeout(() => {
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
    window.scrollTo(0, 0);
    console.log(this.$refs.myVueDropzone.getAcceptedFiles())
    let that = this
    this.$refs.myVueDropzone.dropzone.on('addedfile', function (file) {
      if (this.files.length > 1) {
        this.removeFile(this.files[0])
      }
      if (this.files[0].name.split('.').pop() != "xlsx" && this.files[0].name.split('.').pop() != 'xls') {
        that.setError(0)
        console.log(this.files[0].name.split('.').pop())
        this.removeFile(this.files[0])
      }
      if(!!this.files[0]) {
        that.loadExcel(this.files[0])
      }
    })
    this.$refs.myVueDropzone.dropzone.on('maxfilesexceeded', function (file) {
      this.removeFile(file)
    })






    this.$socket.emit('create-session', {
      id: that.sessionId,
      description: that.sessionId
    });
      

    this.sockets.subscribe('init', (data) => {
    
      for (var i = 0; i < data.length; i++) {
        var session = data[i];

        var clientId = session.id;
        var clientDescription = session.description;

        if (session.ready) {
         console.log("Whatsapp ready")
        } else {
          console.log("Whatsapp connectring")
        }
      }
    });

    this.sockets.subscribe('remove-session', function(id) {
      console.log("Сессия закончена")
    });

  





    this.sockets.subscribe('message', (data) => {
       this.logs = data
    }) 
     this.sockets.subscribe('qr', (data) => {
       this.qrSrc = data.src
    })
    this.sockets.subscribe('ready', async (data) => {
      this.showQr = false
    });
    this.sockets.subscribe('authenticated', async (data) => {
       this.showQr = false
    });


  },
  methods: {
    BottomButtonStep (btnInd) {
      let nextS = this.step
      if(btnInd == 0) {
        nextS--
        this.setStep(nextS)
      }
      else if(btnInd == 1) {
        nextS++
        this.setStep(nextS)
      }
    }, 
    setStep (ind) {
      let that = this
      this.$refs.myVueDropzone.dropzone.on('addedfile', function (file) {
        if (this.files[0].name.split('.').pop() != "xlsx" && this.files[0].name.split('.').pop() != 'xls') {
          that.setError(0)
          console.log(this.files[0].name.split('.').pop())
          this.removeFile(this.files[0])
        }
        if(!!this.files[0]) {
          that.loadExcel(this.files[0])
        }
      })
      window.scrollTo(0, 0);
      console.log(ind, this.stepEndPoint)
      if(this.stepEndPoint > ind)
        this.step = ind
      else if(this.stepEndPoint == ind) {
        this.step = ind
      }
      else { 
        this.setError(this.stepEndPoint + 1)
      }
    },
    setError (ind) {
      if(ind == 0)
        this.error = 'Не поддерживаемый формат!'
      else if(ind == 1)
        this.error = 'Загрузите таблицу!'
      else if(ind == 2)
        this.error = 'Проверьте сообщение!'
      else if(ind == 3)
        this.error = 'Ошибка 231!'
      setTimeout(()=>{this.error = ''}, 1500)
    },
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
      for(let key in this.SortedTable) {
        await fetch('https://whatssendlerserver.herokuapp.com/send-message', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              number: this.SortedTable[key].phone.toString().replace('8','7'),
              message: this.SortedTable[key].message,
              sender: this.sessionId
          })
        }).then((res)=>{console.log(res)});
      }
    },
    deleteUserViaPhone() {
      this.SortedTable.splice(this.indexPhoneChecking, 1);
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
      //that.findingVariables = that.uniq(that.findingVariables)

      for (var i = 0; i < that.SortedTable.length; i++) {
        let IO = ''
        if(!!that.SortedTable[i].FIO)
          IO = that.SortedTable[i].FIO.substr(that.SortedTable[i].FIO.indexOf(" ") + 1);

        let formMessage = that.message
        formMessage = formMessage.replace("{{FIO}}", IO)
        formMessage = formMessage.replace("{{Protocol}}", this.SortedTable[i].protocol)


         for(let j = 0; j < this.findingVariables.length; j++) {
           // console.log(this.findingVariables[j].Raw)

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
      this.changeMessageAll()

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
      if(FIOPlaceIndex == -1) {
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
    },
    loadExcel(file) {
      let that = this
      
      that.unSorteExcelTable = []
      that.SortedTable = []
      that.findingVariables = []
      that.message = `Уважаемый (-ая)`


      that.phoneChecking = false
      that.newPhone = ''
     
     
      that.indexPhoneChecking = 0

      that.stepEndPoint = 1


      const excel_file = document.getElementById('excel_file');
     
      var reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = function(file){
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
            
          }
         
          excel_file.value = '';

      }

      
    },
  }
}
</script>


<style>
  .link-payment-info__p {
    font-size: 1.1vw;
    width: 25vw;
    margin: 0 0 0 6.5vw;
  }
  .link-payment-info__h1 {
    margin-left: 6.5vw;
    font-size: 1.5vw;
  }
  .link-payment-info__li-0:before {
    content: "";
    position: absolute;
    background: url('../assets/profile/infinity.svg');
    width: 5vw;
    height: 5vw;
    background-size: 70%;
    background-color: white;
    border: 0.2vw solid white;
    filter: invert(1);
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .link-payment-info__li-1:before {
    content: "";
    position: absolute;
    background: url('../assets/profile/support.svg');
    width: 5vw;
    height: 5vw;
    background-size: 60%;
    background-color: white;
    border: 0.2vw solid white;
    filter: invert(1);
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .link-payment-info__li {
     margin-top: 2vw;
    height: 5.4vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .link-payment-info__block {
    margin-top: 2vw;
  }
  .link-payment-info__container {
    margin-top: 2vw;
  }
  .payment-button {
    width: 100%;
    margin-top: 2vw;
    border-radius: 1vw;
  }
  .payment-ruble__svg {
    background: url('../assets/profile/ruble.svg');
    width: 1.6vw;
    height: 1.6vw;
    margin-top: 0.3vw;
    margin-left: -0.4vw;
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: -2vw;
    margin-left: 0vw;
    margin-top: 1.3vw;
  }
  .selected-payment-ruble__svg {
    filter: invert(1);
  }
  .link-step-2-payment-plan__block {
    width: calc(61vw / 3);
    height: calc(50vw / 3);
    background-color: white;
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 1vw;
    border: 0.2vw solid #e5e5e5;
    transition: 0.2s ease;
  }
  .link-step-2-payment-plan__block:hover {
    transform: scale(1.02);
  }
  .payment-ruble__p {
    margin-left: -0.4vw;
    margin-top: 0.5vw;
    height: 1.3vw;
  }
  .selected-payment {
    background-color: black;
    border: none;
    transform: scale(1.02);
  }
  .selected-payment-h1 {
    color: white !important;
  }
  .link-step-2-payment-margin__block {
    margin-right: 1vw;
  }
  .link-step-2-payment-margin__rubi {
        margin-left: -0.3vw;
    margin-top: 1.3vw;
  }
  .link-step-2-payment-plan__container {
        display: flex;
    flex-direction: row;
        margin-top: 2vw;
            
  }
  .link-step-2-payment-plan__p {
          margin: 0;
    color: black;
    font-size: 1.5vw;
    font-weight: bold;

  }
  .link-step-2-payment-plan__h1 {
        font-size: 3vw;

    color: black;
  }
  .link-step-2-payment__div {
        width: 50vw;
    height: 54vw;
    background-color: white;
    border-radius: 1vw;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 2vw;
    top: 6vw;
    position: absolute;
  }
  .link-step-2-payment__container {
   position: absolute;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #1c1c1ce6;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
  }
  .card-phone-checker__input {
        display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .link-qr__img {
    margin-top: 2vw;
    width: 30vw;
    height: 30vw;
  }
  .button-1-send__margin {
    margin-top: 4vw;
    margin-bottom: 2vw;
  }
  .link-sorted-table__cell {
    display: flex;
    margin: 1vw 0vw 1vw 0vw;
  }
  .link-sorted-table__container {
    margin-top: 10vw;
  }
  .link-step-1__textarea {
    width: 100%;
    height: 9vw;
    display: block;
    margin-top: 2vw;
  }
  .link-step-1-info__margin {
        margin: 2vw 0vw 2vw 0vw !important;
  }
  .link-step-1__h1 {
        margin-top: 1.5vw;
    font-size: 1.3vw;
  }
  .nav-bottom-buttons__container {
        display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3vw;
    position: absolute;
    width: calc(100% - 40vw);
  }
  .nav-bottom-buttons__div {
    height: 100%;
    width: 50%;
    display: flex;
    
  }
  .nav-div-but-0 {
    justify-content: flex-start;
  }
  .nav-div-but-1 {
    justify-content: flex-end;
  }
  .card-phone-checker__h1 {
        font-size: 2vw;
  }
  .dz-message {
    font-size: 1.3vw !important;
  }
  .dz-size {
    margin: 0 !important;
  }
  span {
    padding: 0 !important;
  }
  .dz-success-mark {
    top: 23% !important;
   
  }
.dz-details, .dz-preview, .dz-image {
    height: 8vw !important;
    min-height: 8vw !important;
    width: 100% !important;
    font-size: 1.5vw !important;
    padding: 1vw !important;
    line-height: 1.4vw !important;
}
.dz-details {
  background-color: #25d366 !important;
      display: flex !important;
    flex-direction: row-reverse !important;
    justify-content: space-between !important;
}

.dz-size {
  font-size: 1.2vw !important;
    width: 50% !important;
    text-align: right !important;
}
.vue-dropzone {
  margin-top: 2vw;
  border: 0.2vw solid #e5e5e5;
  font-family: "Roboto", sans-serif;
  font-size: 1vw;
      padding: 0.5vw;
          display: flex;
  align-items: center;
  justify-content: center;
  height: 10vw;
  min-height: 10vw;
}
.dz-preview, .dz-file-preview, .dz-processing, .dz-success, .dz-complete {
  padding: 0vw !important;
  margin: 0vw !important;
}
.dz-remove {
  right: 1vw !important;
  margin-left: 0vw !important;
  bottom: 1vw !important;
  font-size: 1.2vw !important;
  letter-spacing: 0.01vw !important;
  border: 0.2vw solid white !important;
  height: auto !important;
  padding: 1vw !important;
  line-height: 0vw !important;
}
.vue-dropzone>.dz-preview .dz-image img:not([src]) {
  width: 100% !important;
  height: 100% !important;
}
.dz-filename {
  width: 50% !important;
}
@media(max-width: 480px) {
.dz-message {
  font-size: 4vw !important;
}
.dz-details, .dz-preview, .dz-image {
    height: 23vw !important;
    min-height: 8vw !important;
    width: 100% !important;
    font-size: 1.5vw !important;
    padding: 1vw !important;
    line-height: 1.4vw !important;
}
}
</style>


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
    margin: 2vw 0vw 3vw 0vw;
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
    margin-top: 2vw;
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
    top: 38vw;
    left: 22vw;
  }
  .link__video-yt-scoped {
     transform: scaleX(0.3) scaleY(0.3);
    position: absolute;
    left: 2vw;
    top: 8.5vw;
    margin-top: 0vw;
    transform-origin: left;
  }
  .no-current-nav {
    opacity: 0.5;
  }
  .current-nav {
    transform-origin: left;
    transform: scale(1.1);
  }
  .current-nav:before {
       background-color: #25d366;
    content: "";
    position: absolute;
    width: 0.2vw;
    height: 2vw;
    right: 0;

  }
  .link-block-nav__h1 {
    font-size: 1.3vw;
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
    top: 9.5vw;
    width: 17vw;
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
    margin-top: 1.5vw;
  }
  .link-main__container {
    margin-top: 8vw;
        margin-left: 3vw;
  }
  .home-block-footer__p {
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
        flex-direction: column;
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
    font-size: 2vw;
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
    margin: 2vw;
    display: flex;
    flex-direction: column;
    height: calc(100% - 5vw);
    align-items: flex-start;
    justify-content: space-between;
  }
  .card-phone-checker-new-phone__input {
    width: 12vw;
    height: 2vw;
    margin-left: 1vw;
  }
  .card-phone-checker__buttons {
    display: flex;
    justify-content: space-between;
    width: 100%
  }
@media(max-width: 480px) {
.link-main__container[data-v-964fd6ee] {
    margin-top: 15vw;
     margin-left: 0
}
.link__video-yt-scoped {
    transform: scaleX(0.3) scaleY(0.3);
    position: absolute;
    left: 2vw;
    top: 8.5vw;
    margin-top: 0vw;
    transform-origin: left;
    opacity: 0;
  }
  .link-step-0__h1 {
  font-size: 4vw;
}
.link-step-1__textarea {
  font-size: 3.6vw;
  height: 40vw;
}
.link-step-1__h1 {
  display: none;
}
.link-var__container {
  display: none;
}
.link-step-1-info__margin {
  display: none;
}
.confirm__btn {
  font-size: 3.5vw;
}
.next-step__btn {
  font-size: 4vw;
  margin-top: 45vw;
}
.upload-list__btn{
  font-size: 4vw;
  margin-top: 45vw;
}
.home-block-footer__p {
  font-size: 1.5vw;
}
.link-step-info__block {
    width: 100%;
    height: 12vw;
    padding: 1vw 1vw 1vw 7vw;
    box-sizing: border-box;
    background-color: #92929221;
    margin: 5vw 0vw 5vw 0vw;
    border-radius: 3vw;
}
.link-step-0__p {
    margin-top: 0vw;
    margin-bottom: 0vw;
    line-height: 1.4325em;
    font-size: 3.3vw;
}
.vue-dropzone {
    margin-top: 9vw;
    border: 0.2vw solid #e5e5e5;
    font-family: "Roboto", sans-serif;
    font-size: 1vw;
    padding: 0.5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25vw;
    min-height: 10vw;
}

.dz-message {
    font-size: 4vw !important;
}
.link-step-0__h1 {
    text-align: left;
    /* margin-right: 1vw; */
    font-size: 4vw;
}
.link-step-margin__h1 {
    margin-top: 6vw;
}
.link__video-yt {
    width: 70vw;
    height: 40vw;
    margin-top: 1vw;
    transition: 0.6s;
    position: absolute;
    top: 94vw;
    left: 15vw;
}
.home-block-footer__container {
    background-color: #222222;
    width: calc(100% + 23vw);
    margin-left: -19vw;
    height: 25vw;
    margin-top: 85vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    align-content: center;
    transform: translateY(1vw);
}
.home-block-footer__roting {
  display: none;
}
.link-block-nav__div {
  opacity: 0;
}
.card-phone-checker__container {
    position: fixed;
    background-color: white;
    border-radius: 2vw;
    width: 100%;
    height: 90vw;
    top: 25%;
    margin-left: 13%;
    margin-right: auto;
    z-index: 5;
    margin-top: 6vw;
    max-width: 74vw;
}
.card-phone-checker__h1 {
    font-size: 7vw;
}
.card-phone-checker__div{
  font-size: 4vw;

}
.card-phone-checker_div__p{
  font-size: 4vw;
  margin-left: 8vw;
}
.card-phone-checker__input {
     display: unset;
     flex-direction: unset;
     justify-content: unset;
     align-items: unset;
}
.card-phone-checker-new-phone__input {
    font-size: 5vw;
    width: 45vw;
    height: 6vw;
    margin-left: 12vw;
}
.card-phone-checker__btn {
  font-size: 4vw;
  margin-bottom: 3vw;
}
.card-phone-checker__buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-content: center;
    flex-direction: column;
    margin-top: 5vw;
}
.programm-table__block {
  width: 100%;
}
.programm-table__textarea {
  width: 100%;
  height: 50vw; 
  margin-top: 2vw;
}
.link-sorted-table__cell {
  display: none;
}
.programm-table-phone__block{
  display: none;
}
}
</style>
