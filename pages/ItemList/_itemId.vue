<template>
<v-app>
<v-container fluid>
  <div class="des">
       <br>
      <br>
      <br>
      <br>
      <br>
      <br>
  
  <h2>{{target.name}}{{target.id}}</h2>
  <p><img id="pic" :src="'../'+target.imagePath"></p>
  <p>{{target.description}}</p>
  <p>1個：{{target.price}}円</p>

  <div class="center">
    <v-row align="center">
      <v-col
        cols="12"
        sm="6"
      >
        <v-select
          :items="items"
          label="数量を選択してください"
          v-model.number="selected"
          class="center"
        ></v-select>
      </v-col>
      
    </v-row>
  </div>
  
    
  <!-- <v-col
        cols="12"
        sm="6"
      >
      <v-select v-model.number="selected">
<option value="1">   1   </option>
<option value="2">   2   </option>
<option value="3">   3   </option>
<option value="4">   4   </option>
<option value="5">   5   </option>
<option value="6">   6   </option>
<option value="7">   7   </option>
<option value="8">   8   </option>
<option value="9">   9   </option>
<option value="10">   10   </option>
</v-select>
  </v-col> -->
  <br>

<h2>小計：{{target.price*selected}}円（税抜）</h2>

<v-btn elevation="2" large id="inbutton" :disabled="!selected" type="submit" @click="inCart({itemId:Number(target.id),ko:selected,item:target})">カートに入れる</v-btn>
</div>
</v-container>
</v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapGetters,mapActions} from 'vuex'

interface Product  {
    id?: Number,
    name: String,
    description: String,
    imagePath: String,
    price: number,
  }




export default Vue.extend({

  data(){
    return{
      target:{},
      selected:0,
      items:[1,2,3,4,5,6,7,8,9,10]
    }
  },
   
  created(){
    const targetItem = this.itemList.find((el:Product) => el.id === Number(this.$route.params.itemId))
    if(targetItem){
      this.target = targetItem
    }

    
    
    // const targetItem = this.getItemId(this.$route.params.itemId);
    // if(targetItem){
    //   this.target = targetItem
    // }
    // //this.target = targetItem
    // console.log(this.target)
  },
  methods:{

      // kakunin(id:number,ko:number){
      //   if(confirm('カートに追加してもよろしいですか？')){
      //     this.inCart({id:id,ko:ko})
      //   }
      // },

      ...mapActions(["inCart"])
    },

  computed:{
    ...mapGetters(["itemList"])
  }
})
</script>

<style>
.des{
  text-align: center;
  display: inline-block;
}
.itemdescription{
  text-align: center;
  display: inline-block;
  width: 60%;
  margin: 0 auto;
  padding-left:20% ;
}
#red{
  color: red;
}
#pic{
  text-align: center;
  width: 500px;
  height: 500px;
}
#inbutton{
  margin-bottom: 100px;
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