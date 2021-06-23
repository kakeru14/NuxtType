<template>
  <div>
         <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <ul>
        <li class="block" v-for="(item,index) in itemList" :key="index">
        <p class="pic"><img class="picture" :src="'../'+item.imagePath" @click="$router.push({name:`ItemList-itemId`,params:{itemId:item.id}})"></p>
        <p class="cd" @click="$router.push({name:`ItemList-itemId`,params:{itemId:item.id}})">{{item.name}}</p> 
        <p class="cd">{{item.price}}円</p> 
        </li>
    </ul>
  
  <!-- <table>
      <tr>
        <th>ID</th>
        <th>商品名</th>
        <th>商品画像</th>
        <th>商品情報</th>
      </tr>
      <tr v-for="(item,index) in itemList" :key="index">
        <td>{{ item.id }}</td>
        <td @click="$router.push({name:`ItemList-itemId`,params:{itemId:item.id}})">{{ item.name }}</td>
        <td @click="$router.push({name:`ItemList-itemId`,params:{itemId:item.id}})"><img class="image" :src="'../'+item.imagePath"></td>
        <td>{{ item.description }}</td>
        
      </tr>
    </table> -->

</div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapGetters} from 'vuex'
//import {ShopProduct} from '../store'

export default Vue.extend({
    
  computed:{
    ...mapGetters(["itemList"])
  }
  
})
</script>

<style>
.image{
  height: 200px;
  width: 200px;
}
.pic{
  text-align: center;
}
.picture{
  width: 200px;
  height: 200px;
}

.block{
    word-break: break-all;
    width: 30%;
    display: inline-block;
    flex-wrap: wrap;
    justify-content: center;
    text-align: start;
    margin-top: 0%;
    padding-top: 0%;
    vertical-align: top;
    border-style: ridge;
    height: 300px;
}
.itemlist{
  padding-top: 100px;
}
.cd{
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