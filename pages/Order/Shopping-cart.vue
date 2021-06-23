<template>
<v-app>
  <div>
         <br>
      <br>
      <br>
      <br>
      <br>
      <br>
  <h1 class="center">ショッピングカート</h1>
  <v-simple-table v-show="this.cart.length" class="table" align="center">
          <tr>
              <th>商品画像</th>
              <th>商品名</th>
              <th>価格</th>
              <th>個数</th>
          </tr>
          <tr v-for="(item,index) in array" :key="index">
              <td><img id="picture" :src="'../'+item.imagePath"></td>
              <td>{{item.name}}</td>
              <td>{{item.price}}円</td>
              <td>{{item.itemNum}}個</td>
              <td><v-btn @click="removeCart({item:item,ordersId:cart[0].orderId})"><v-icon left>
        {{ icons.mdiDelete }}
      </v-icon>カートから削除</v-btn></td>
              
          </tr>
  </v-simple-table>

  <h2 v-show="!this.cart.length">カートに商品がありません</h2>

  <h2 class="center" v-show="this.cart.length">合計金額 : {{Math.round(total)}}円</h2>
  <h2 class="center" v-show="this.cart.length">消費税 : {{Math.round(total*0.1)}}円</h2>
  <h2 class="center" v-show="this.cart.length">ご注文金額合計 : {{Math.round(total*1.1)}}円（税込）</h2>

      <NuxtLink to="/Order/OrderConfirm" v-show="this.cart.length"><v-btn>注文に進む</v-btn></NuxtLink>

</div>
</v-app>
  
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../../components/Header.vue'
import {mapGetters,mapActions} from 'vuex'
import {
    mdiDelete,
    mdiCartVariant,
  } from '@mdi/js'
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

export default Vue.extend({
    components:{
    Header
  },
  data(){
    return{
      array:[] as Product[],
      orderId:'',
      icons:{
        mdiDelete,
        mdiCartVariant,
      },
      total:0
    }
  },
  computed:{
    ...mapGetters(["cart","itemList"]),
    
  },
  methods:{
    ...mapActions(["removeCart"]),
    
  },
  created(){

    

    this.cart.forEach((element:any) => {
      this.orderId = element.orderId
    })
    
    this.cart.forEach((el:any) => {
      el.itemInfo.forEach((el1:Kakunin) => {
        this.itemList.forEach((el2:Product): void => {
          if(el1.itemId === el2.id){
            this.array.push({
              ...el2,
              ...el1,
            })
            
          }
        })
      })
    })

    
            this.total=0;
            this.array.forEach((el:any)=>{
                this.total = this.total + el.price * el.itemNum
            })
           
        
    
    
  },
  // beforeUpdate(){
  //   this.cart.forEach((el:any) => {
  //     el.itemInfo.forEach((el1:Kakunin) => {
  //       this.itemList.forEach((el2:Product): void => {
  //         if(el1.itemId === el2.id){
  //           this.array.push({
  //             ...el2,
  //             ...el1,
  //           })
  //           console.log({
  //             ...el2,
  //             ...el1,
  //           });
            
  //         }
  //       })
  //     })
  //   })
  // }
})
</script>

<style>
#picture{
    width: 150px;
    height: 200px;
}
.table{
  width: 70%;
  margin-left: auto;
  margin-right: auto;
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