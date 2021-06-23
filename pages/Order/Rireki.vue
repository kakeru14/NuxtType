<template>
<v-app>
  <div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
  <h1 class="center">注文履歴</h1>

  <v-simple-table v-show="this.history.length" class="table">

          <tr v-for="(item,index) in historyItem" :key="index">

            <v-simple-table class="border-bottom">
              <tr v-for="(pro,index) in item" :key="index">
                <td><img id="picture" :src="'../'+pro.imagePath"></td>
              <td>
                <div>{{pro.name}}</div>
                <div>{{pro.price}}円   {{pro.itemNum}}個</div>
                </td>
              <hr>
              </tr>
            </v-simple-table>
              <!-- <td><img id="picture" :src="'../'+item.imagePath"></td>
              <td>{{item.name}}</td>
              <td>{{item.price}}円</td>
              <td>{{item.itemNum}}個</td>
              <td>{{item.date}} {{item.time}}頃配達予定</td> -->
              <td>
                <div v-show="history[index].status != 9">注文合計金額：{{history[index].totalPrice}}円</div>
                <div v-show="history[index].status != 9">{{history[index].date}} {{history[index].time}}頃配達予定</div>
                <div v-show="history[index].status != 9"><v-btn @click="setCancel({orderId:history[index].orderId})">キャンセル</v-btn></div>
                <div v-show="history[index].status == 9"><v-btn disabled>キャンセル済み</v-btn></div>
                </td>
                <hr>
          </tr>
          
      </v-simple-table>

      <h2 v-show="!this.history.length">ご注文済み商品はありません</h2>

</div>
</v-app>
  
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../../components/Header.vue'
import {mapGetters,mapActions} from 'vuex'


interface Product  {
    id?: Number,
    name: String,
    description: String,
    imagePath: String,
    price: number,
  }
interface Kakunin {
  itemInfo:any,
  itemId:number,
  itemNum:number
}
interface ItemHistory {
  date:string,
  destinationAddress:string,
  destinationMail:string,
  destinationName:string,
  destinationTel:string,
  destinationTime?:string,
  destinationZipcode:string,
  itemInfo:Product,
  orderId:string,
  pay?:number,
  paymentMethod?:number,
  status:string,
  time:string
}

export default Vue.extend({
    components:{
    Header
  },
  data(){
    return{
      array:[] as Product[],
      historyItem:[] as any[]
    }
  },
  created(){
    this.history.forEach((el:any) => {
      el.itemInfo.forEach((el1:Kakunin) => {
        this.itemList.forEach((el2:Product): void => {
          if(el1.itemId === el2.id){
            this.array.push({
              ...el2,
              ...el1,
              ...el
            })
            console.log({
              ...el2,
              ...el1,
              ...el
            });
            
          }
        })
      })
    })

    this.history.forEach((el:any): void => {
      this.historyItem.push(el.itemInfo)
    })
    
    
    
  },
  computed:{
    ...mapGetters(["history","itemList"])
  },
  methods:{
    ...mapActions(["setCancel"])
  }
})
</script>

<style>
.table{
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  border:1px solid;
  border-collapse: collapse
}
.border-bottom{
  border-bottom: 1px solid;
}
.center{
  text-align: center;
}
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>