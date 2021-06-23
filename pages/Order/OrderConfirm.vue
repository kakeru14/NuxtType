<template>
<v-app>
  <div>
         <br>
      <br>
      <br>
      <br>
      <br>
      <br>
  <h1 class="center">注文確認画面</h1>
  <v-simple-table class="table1"  v-show="this.cart.length">

          <tr v-for="(item,index) in array" :key="index">
              <td><img id="picture" :src="'../'+item.imagePath"></td>
              <td>{{item.name}}</td>
              <td>{{item.price}}円</td>
              <td>{{item.itemNum}}個</td>
          </tr>
  </v-simple-table>

      <div class="center">
		<!-- table -->
		<form action="#"  v-show="this.cart.length">
					<h3>お届け先情報</h3>
					<v-simple-table class="table">
						<tbody>
							<tr>
								<td>お名前</td>
								<td><input type="text" v-model="item.destinationName" placeholder="名前を入力してください" class="waku"></td>
                <td></td>
                <td><span class="red">{{this.messages.destinationName}}</span></td>
							</tr>
							<tr>
								<td><div>メールアドレス</div></td>
								<td><input type="text" v-model.trim="item.destinationMail" placeholder="メールアドレスを入力してください" class="waku"></td>
                <td></td>
                <td><span class="red">{{messages.destinationMail}}</span></td>
							</tr>
							<tr>
								<td><div>郵便番号</div></td>
								<td><input type="text" v-model="item.destinationZipcode" placeholder="郵便番号を入力してください" class="waku"></td>
                <td><span class="red">{{messages.destinationZipcode}}</span></td>
							</tr>
							<tr>
								<td><div>住所</div></td>
								<td><input type="text" v-model="item.destinationAddress" placeholder="住所を入力してください" class="waku"></td>
                <td></td>
                <td><span class="red">{{messages.destinationAddress}}</span></td>
							</tr>
							<tr>
								<td><div>電話番号</div></td>
								<td><input type="text" v-model.trim="item.destinationTel" placeholder="電話番号を入力してください" class="waku"></td>
                <td></td>
                <td><span class="red">{{messages.destinationTel}}</span></td>
							</tr>
							<tr>
								<td valign="top"><div>配達日時</div></td>
								<td>
                  <!-- <div>
                    <label style="color: red" for="inputPeriod">配達日時を入力してください</label>
                  </div> -->
                  <div>
                    <input type="date" v-model="item.date"/>
                  </div>
                    <label>
                      <input type="radio" value="10時" v-model="item.time">10時
                    </label>
                    <label>
                      <input type="radio" value="11時" v-model="item.time">11時
                    </label>
                    <label>
                      <input type="radio" value="12時" v-model="item.time">12時
                    </label><br>
                    <label>
                      <input type="radio" value="13時" v-model="item.time">13時
                    </label>
                    <label>
                      <input type="radio" value="14時" v-model="item.time">14時
                    </label>
                    <label>
                      <input type="radio" value="15時" v-model="item.time">15時
                    </label><br>
                    <label>
                      <input type="radio" value="16時" v-model="item.time">16時
                    </label>
                    <label>
                      <input type="radio" value="17時" v-model="item.time">17時
                    </label>
                    <label>
                      <input type="radio" value="18時" v-model="item.time">18時
                    </label>                        
								</td>
                <td></td>
                <td><span class="red">{{messages.destinationTime}}</span></td>
							</tr>
						</tbody>
					</v-simple-table>

          
          <div class="center">
            <h3>お支払い方法</h3>
        <label>

          <input type="radio" name="daibiki" value="1" v-model="item.status" @change='check()'>代金引換
        </label>
        <label>
          <input type="radio" name="cledit" value="2" v-model="item.status" @change='check()'>クレジットカード
        </label>
        <span class="red">{{messages.paymentMethod}}</span>
          </div>
			
        <div id="finish">
          <!-- <router-link to="/sendorder"><button @click="destinationTime();check()" type="submit" class="submit">注文内容を送信する</button></router-link> -->

          <!-- <button 
            v-if='(messages.destinationName==="")||(messages.destinationMail==="")||(messages.destinationZipcode==="")' 
            @click="check()" type="submit" class="submit">注文内容を送信する(入力不足)</button> -->
        
          
          <NuxtLink to="/Order/OrderFinished"><v-btn @click="submit(total)" type="submit" class="submit">注文内容を確定する</v-btn></NuxtLink>
          
          
        </div>
		</form>
    <!-- {{item.destinationName}}
    {{item.destinationMail}}
    {{item.destinationZipcode}} -->
    <!-- {{item.destinationAddress}} -->
    <!-- {{item.destinationTel}}
    {{item.destinationTime}}  -->
    <!-- {{item.date}}
    {{item.time}} -->
    <!-- {{item.paymentMethod}}
    <br>
    {{now | moment}}
    {{item}} -->
    <!-- {{compareTime}} -->
    <!-- <button @click="conpareTime">時間比べ</button> -->
	</div>

</div>
<br>
<br>
<br>
<br>
<br>
</v-app>
  
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../../components/Header.vue'
import {mapGetters,mapActions} from 'vuex'
import moment from "moment";

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
       messages:{
        destinationName: '',
        destinationMail: '',
        destinationZipcode:'',
        destinationAddress:'',
        destinationTel:'',
        destinationTime:'',
        paymentMethod:'',
        time:'',
        date:'',
        pay:''
      },
      item:{
        destinationName: '',
        destinationMail: '',
        destinationZipcode:'',
        destinationAddress:'',
        destinationTel:'',
        destinationTime:'',
        paymentMethod:'',
        time:'',
        date:'',
        pay:'',
        status:0
      },
      allinput:0,
      total:0
    }
  },
  methods:{
    submit(total:number){
      this.addRireki({pay:this.item,total:total})
      // this.$router.push({name:"Order/OrderFinished"})
    },
    destinationTime(){
      this.item.destinationTime = `${this.item.date} ${this.item.time}`;
      return this.item.destinationTime
    },

    check(){
      this.allinput=0
      console.log('初め'+this.allinput)
      if(!this.item.destinationName){
        this.messages.destinationName = '名前を入力して下さい'
      }else if(this.item.destinationName){
        // allinput.push(1)
        // this.allinput=true
        this.allinput+=1
        console.log(this.item.destinationName)
        console.log('name　'+this.allinput)

      }
      if(!this.item.destinationMail){
        this.messages.destinationMail = 'メールアドレスを入力して下さい'
      // } else if(this.item.destinationMail.indexOf('@') == -1){
      //   this.messages.destinationMail = 'メールアドレスの形式が不正です'
      }else{
        this.allinput+=1
        console.log(this.item.destinationMail)
        console.log('mail　'+this.allinput)
      }
      if(!this.item.destinationZipcode){
        this.messages.destinationZipcode = '郵便番号を入力して下さい'
      } else if(this.item.destinationZipcode.match(/^\d{3}-?\d{4}$/)) {
        this.messages.destinationZipcode = ''
        this.allinput+=1
        console.log(this.item.destinationZipcode)
        console.log('郵便番号　'+this.allinput)
      } else {
        this.messages.destinationZipcode = '郵便番号はXXX-XXXXの形式で入力してください'
        
      }
      if(!this.item.destinationAddress){
        this.messages.destinationAddress = '住所を入力して下さい'
      }else{
        this.allinput+=1
        console.log(this.item.destinationAddress)
        console.log('住所　'+this.allinput)
      }
      if(!this.item.destinationTel){
        this.messages.destinationTel = '電話番号を入力して下さい'
      }else if(this.item.destinationTel.match(/^0\d{1,4}-\d{1,4}-\d{3,4}$/)){
        this.messages.destinationTel = ''
      }else{
        this.messages.destinationTel = '電話番号はXXXX-XXXX-XXXXの形式で入力してください'
        this.allinput+=1
        console.log(this.item.destinationTel)
        console.log('電話番号　'+this.allinput)
      }
      if(!(this.item.date || this.item.time)){
        this.messages.destinationTime = '配達日時を入力して下さい'
      }else{
        this.allinput+=1
        console.log(this.item.date+this.item.time)
        console.log('配達日時　'+this.allinput)
      }
      let now = moment();
      if(now.diff(this.item.destinationTime,'hours') >= 3){
        this.messages.destinationTime = '今から3時間後の日時をご入力ください'
      }
      if(!this.item.status){
        this.messages.paymentMethod = '決済方法を選択して下さい'
      }
      // else{
      //   this.allinput+=1
      //   // this.allinput=true
      //   // console.log(this.allinput)
      // }
      console.log(this.allinput)
    },
    ...mapActions(["addRireki"])
  },
  computed:{
    ...mapGetters(["cart","itemList"]),
  },
  created(){
    console.log(this.cart);
    this.cart.forEach((el:any) => {
      el.itemInfo.forEach((el1:Kakunin) => {
        this.itemList.forEach((el2:Product): void => {
          if(el1.itemId === el2.id){
            this.array.push({
              ...el2,
              ...el1,
            })
            console.log({
              ...el2,
              ...el1,
            });
            
          }
        })
      })
    })

    this.total=0;
    this.array.forEach((el:any)=>{
     this.total = this.total + el.price * el.itemNum
    })
    
  }
})
</script>

<style scoped>
.waku{
  border:2px solid;
}
.table{
  width: 50%;
}
.table1{
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
.center{
  text-align: center;
}
#finish{
  text-align: center;
}
</style>