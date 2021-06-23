<template>
  <div class="container">
    <!-- <NuxtLink to="/"><button>home</button></NuxtLink>
    <NuxtLink to="/main"><button>main</button></NuxtLink>
     -->
    <header class="site-header">
<div class="header-left">
<img @click="$router.push({name:`ItemList-ItemList`})" src="../assets/images/header_logo.png" alt="" class="rakuraku-toy">
</div>
<div id="nav">
    <NuxtLink to="/Order/Rireki"><v-btn><v-icon left>{{icons.mdiClockTimeThreeOutline}}</v-icon>履歴</v-btn></NuxtLink>
    <NuxtLink to="/ItemList/ItemList"><v-btn><v-icon left>{{icons.mdiMonitor}}</v-icon>商品一覧</v-btn></NuxtLink>
    <NuxtLink to="/Order/Shopping-cart"><v-btn><v-icon left>{{ icons.mdiCartVariant }}</v-icon>カート</v-btn></NuxtLink>
    <button v-show="!$store.state.login_user" @click="login">ログイン</button>
    <button v-show="$store.state.login_user" @click="logout">ログアウト</button>
    <span v-show="$store.state.login_user">{{ userName }}</span>
    <v-list-item-avatar><img v-show="$store.state.login_user" :src="photoURL"></v-list-item-avatar>
    
</div>
</header>
  </div>
 
</template>

<script lang="ts">
import Vue from 'vue'
import firebase from '../plugins/firebase'
import {mapActions,mapGetters} from 'vuex'
import {
    mdiCartVariant,
    mdiClockTimeThreeOutline,
    mdiMonitor,
  } from '@mdi/js'

export default Vue.extend({
  data(){
    return{
      icons:{
        mdiCartVariant,
        mdiClockTimeThreeOutline,
        mdiMonitor
      }
    }
  },
  created(){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.setLoginUser(user)
        this.fetchCart()
        if(this.$router.currentRoute.name == "/"){
          this.$router.push({name:"/ItemList/ItemList"},()=>{})
        }
      }else{
        this.deleteLoginUser()
      }
    })
  },
  methods:{
    ...mapActions(["setLoginUser","deleteLoginUser","logout","login","fetchCart"])
  },
  computed:{
    ...mapGetters(["userName","photoURL"]),

  }
    
})
</script>

<style lang="css">

a {
  text-decoration: none;
  color: #283434;
  cursor:pointer;
}

a:hover {
  text-decoration: underline;
}

#nav {
  padding-top: 10px;
}

.router-item {
  padding: 0px 5px 0px 5px;
}

.site-header{
  background: #FCF7EB;
  display: flex;
  padding: 10px 30px;
  position: fixed;
  justify-content: space-between;
  width: 94%;
  z-index: 10;
  margin: 0 auto;
  clear:both;
}

.rakuraku-toy{
  width: 150px;
  height: auto
}


</style>


