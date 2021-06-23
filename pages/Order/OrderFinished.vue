<template>
  <div>
         <br>
      <br>
      <br>
      <br>
      <br>
      <br>
  <h1>ご注文が確定しました</h1>
  <p>ご注文ありがとうございました！</p>

  <NuxtLink to="/ItemList/ItemList"><v-btn>商品一覧画面に戻る</v-btn></NuxtLink>

</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../../components/Header.vue'

export default Vue.extend({
    components:{
    Header
  }
})
</script>

<style>
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