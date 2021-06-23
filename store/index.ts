import { getAccessorType } from 'typed-vuex'
import firebase from '../plugins/firebase'

//import * as shop from '@/store/shop'

interface Product  {
    id?: Number,
    name: String,
    description: String,
    imagePath: String,
    price: number,
  }


export const state = () => ({
    items :[
        {
                        id:1,
                        name:"ビニールプール",
                        description: `製品サイズ:(約)幅157×奥行157×高さ122cm
                        材質:塩化ビニル樹脂(非フタル酸系可塑剤使用)
                        水量目安:高さ22cmまで入れて295L
                        付属品:修理用パッチ
                        対象年齢:2歳以上
                        原産国:中国
                        INTEX社製のサンシェード付プール。
                        高さのある壁で安定します。
                        サンシェードは取り外し可能です。
                        プール底に排水口付き。
                        修理用パッチ付。
                        ご注意:子供は必ず、監視者のもとで遊ばせてください。
                        レンタル等による貸出、オークション等による販売や中古販売、
                        及び譲渡によって発生した故障・破損・損害・事故などにつきましては
                        一切責任を負いかねますので予めご了承ください。`,
                        imagePath:"1.jpg",
                        price:1490
                    },
                    {
                                    id:2,
                                    name:"ラジコンバギー ボブキャットEX",
                                    description: `防塵防水仕様1/20スケールラジコンバギー。
                                    生活防水だから水たまりでの走行可能、汚れたら水かけ洗いもできる。
                                    前後サスペンション搭載で悪路を走破。
                                    登坂力35度、ハイスピード15キロ。
                                    デフギア搭載でクイックなコーナーリング。
                                    アウトドアでもガンガン走るラジコンバギー。
                                    <本体サイズ>H11.5×W16×D27.5cm`,
                                    imagePath:"2.jpg",
                                    price:1490
                                },
                                {
                                    id:3,
                                    name:"シルバニアファミリーSylvanian Families(赤い屋根の大きなお家",
                                    description: `お家は90度や180度に開いたり、閉じたりして遊ぶことができます。
                                    お家を閉じると、どこから見てもきれいなお家の形になり、窓からこぼれるお家のあかりがとてもきれいです。
                                    ３階のお部屋「えんとつのお部屋」と「屋根ユニット」が取り外せるようになっています。
                                    これらのお部屋を組みかえることで、３階建てのお家としても遊ぶことができます。`,
                                    imagePath:"3.jpg",
                                    price:1490
                                },
                                {
                                    id:4,
                                    name:"ハピネスチャージプリキュア! キュアライン",
                                    description: `ハピネスチャージプリキュア!が使用するスマホ「キュアライン」が登場!!
                                    流行のスタンプメールやTV電話でプリキュアたちとコミュニケーション!
                                    メールがきたら選択をして返信!スタンプも送れる!メールは800パターン以上!
                                    スタンプは100種類以上!
                                    メール&TV電話で仲良し度を上げてプロフをゲット!
                                    さらに、歴代プリキュアたちともスタンプメールができちゃう!
                                    また、遊んで学べる知育アプリやゲーム、実用アプリがいっぱい!
                                    タッチペンで文字や数字の書き方を学んだり、遊びながら学べる知育アプリが盛りだくさん。
                                    さらに!専用ホームページからデータをダウンロードしてゲームやキャラクターを追加できる! 
                                    (ゲーム、メールできるキャラクター、スタンプ)
                                    使用電池:単4×4 (別売) 
                                   【商品内容】キュアライン本体1個、タッチペン1個`,
                                    imagePath:"4.jpg",
                                    price:1900
                                },
                                {
                                    id:5,
                                    name:"こえだちゃん キキ & ララ 月のおうち",
                                    description: `製品サイズ:(約)幅157×奥行157×高さ122cm
                                    材質:塩化ビニル樹脂(非フタル酸系可塑剤使用)
                                    水量目安:高さ22cmまで入れて295L
                                    付属品:修理用パッチ
                                    対象年齢:2歳以上
                                    原産国:中国
                                    INTEX社製のサンシェード付プール。
                                    高さのある壁で安定します。
                                    サンシェードは取り外し可能です。
                                    プール底に排水口付き。
                                    修理用パッチ付。
                                    ご注意:子供は必ず、監視者のもとで遊ばせてください。
                                    レンタル等による貸出、オークション等による販売や中古販売、
                                    及び譲渡によって発生した故障・破損・損害・事故などにつきましては
                                    一切責任を負いかねますので予めご了承ください。`,
                                    imagePath:"5.jpg",
                                    price:1900
                                },
                                {
                                    id:6,
                                    name:"キラキラ プリキュアアラモード まぜまぜ変身!スイーツパクトDX",
                                    description: `キラキラ プリキュアアラモードより、まぜまぜ変身!スイーツパクトDXが登場!
                                    プリキュア5人全員の変身&攻撃あそびが楽しめるオールインワンセット!
                                    スイーツづくりみたいな「まぜまぜアクション」で5人のなりきりあそびができる!!
                                    
                                    セット内容:スイーツパクト本体 1個 まぜまぜスティック 1本 アニマルスイーツ 
                                    うさぎショートケーキ1個 リスプリン1個 ライオンアイス1個 キャットマカロン1個 
                                    ドッグチョコレート1個 ボールチェーン1個 使用電池:単4×2(別売)
                                    
                                     ※デビューキャンペーンの先着購入特典、アニマルスイーツ「ペコリンムースケーキ」は付属しません。`,
                                    imagePath:"6.jpg",
                                    price:2700
                                },
                                {
                                    id:7,
                                    name:"アンパンマンタウン ようこそ！たのしいパンこうじょうハウス",
                                    description: `製品サイズ:(約)幅157×奥行157×高さ122cm
                                    材質:塩化ビニル樹脂(非フタル酸系可塑剤使用)
                                    水量目安:高さ22cmまで入れて295L
                                    付属品:修理用パッチ
                                    対象年齢:2歳以上
                                    原産国:中国
                                    INTEX社製のサンシェード付プール。
                                    高さのある壁で安定します。
                                    サンシェードは取り外し可能です。
                                    プール底に排水口付き。
                                    修理用パッチ付。
                                    ご注意:子供は必ず、監視者のもとで遊ばせてください。
                                    レンタル等による貸出、オークション等による販売や中古販売、
                                    及び譲渡によって発生した故障・破損・損害・事故などにつきましては
                                    一切責任を負いかねますので予めご了承ください。`,
                                    imagePath:"7.jpg",
                                    price:2570
                                },
                                {
                                    id:8,
                                    name:"人生ゲーム（2016年ver.）",
                                    description: `人生ゲームシリーズのフラッグシップモデルが8年ぶりにリニューアル!! 
                                    4つの追加エリアを組み合わせることで、色んなテイストの人生ゲームが楽しめます!組み合わせパターンは全16種。 
                                    【セット内容】 
                                    億万長者ステージ(1),追加用ステージ(仮)(4), 山(ゲーム版に貼り付いているもの以外)(1),
                                    家(ゲーム版に貼りついているもの以外)(4), ビル群(1),追加ステージ用橋(4),橋(1),
                                    自動車ゴマ(6色 各1個)(6),旗(6色 各1本)(6), 人物ピン(水色36本、ピンク36本))(72),
                                    職業カード(A4サイズ)(1), お宝カード(A4サイズ)(1),保険証券(火災保険、生命保険、自動車保険)(24),
                                    株券(8),お札一式(1)`,
                                    imagePath:"8.jpg",
                                    price:2160
                                },
                                {
                                    id:9,
                                    name:"野球盤 3Dエース",
                                    description: `野球盤史上初！｢3Dピッチング機能｣を搭載し、ピッチャーの投球が本物のように飛びます！ 
                                    オーバースローとアンダースローで投げ分けて、ホームランバッターに挑め！ めざせ！完・全・試・合！ 
                                    [セット内容] 
                                    野球盤本体1、電光掲示板1、ホームランフェンス（直線・曲線）各2、外周フェンス（照明パーツ含む）2、
                                     グローブポケット4、バッターウィンドウ1、ボール6、バッター人形2、ピッチャー人形1、ランナー人形3、 
                                     フィールダー人形7、カウントピン3、シール1、バット用ゴム3、取扱説明書1`,
                                    imagePath:"9.jpg",
                                    price:2700
                                },
                                {
                                    id:10,
                                    name:"ベイブレードバースト　B-86 スターター",
                                    description: `ギミック付きのレイヤー搭載したディフェンスタイプの新型ベイブレード！ 
                                    ※ライトランチャーLR付属 
                                    
                                    ＜セット内容＞
                                     レイヤー(1),ディスク(1),ドライバー(1),ランチャー(1),ワインダー(1),取説(1),シール(1)`,
                                    imagePath:"10.jpg",
                                    price:2160
                                },
                                {
                                    id:11,
                                    name:"仮面ライダーエグゼイド　ダブル装填　DXガシャコン キースラッシャー",
                                    description: `製品サイズ:(約)幅157×奥行157×高さ122cm
                                    材質:塩化ビニル樹脂(非フタル酸系可塑剤使用)
                                    水量目安:高さ22cmまで入れて295L
                                    付属品:修理用パッチ
                                    対象年齢:2歳以上
                                    原産国:中国
                                    INTEX社製のサンシェード付プール。
                                    高さのある壁で安定します。
                                    サンシェードは取り外し可能です。
                                    プール底に排水口付き。
                                    修理用パッチ付。
                                    ご注意:子供は必ず、監視者のもとで遊ばせてください。
                                    レンタル等による貸出、オークション等による販売や中古販売、
                                    及び譲渡によって発生した故障・破損・損害・事故などにつきましては
                                    一切責任を負いかねますので予めご了承ください。`,
                                    imagePath:"11.jpg",
                                    price:2700
                                },
                                {
                                    id:12,
                                    name:"トミカハイパーシリーズ ドライブヘッド",
                                    description: `製品サイズ:(約)幅157×奥行157×高さ122cm
                                    材質:塩化ビニル樹脂(非フタル酸系可塑剤使用)
                                    水量目安:高さ22cmまで入れて295L
                                    付属品:修理用パッチ
                                    対象年齢:2歳以上
                                    原産国:中国
                                    INTEX社製のサンシェード付プール。
                                    高さのある壁で安定します。
                                    サンシェードは取り外し可能です。
                                    プール底に排水口付き。
                                    修理用パッチ付。
                                    ご注意:子供は必ず、監視者のもとで遊ばせてください。
                                    レンタル等による貸出、オークション等による販売や中古販売、
                                    及び譲渡によって発生した故障・破損・損害・事故などにつきましては
                                    一切責任を負いかねますので予めご了承ください。`,
                                    imagePath:"12.jpg",
                                    price:2160
                                },
                                {
                                    id:13,
                                    name:"ミニ四駆スターターパック　MAパワータイプ（ブラストアロー",
                                    description: `製品サイズ:(約)幅157×奥行157×高さ122cm
                                    材質:塩化ビニル樹脂(非フタル酸系可塑剤使用)
                                    水量目安:高さ22cmまで入れて295L
                                    付属品:修理用パッチ
                                    対象年齢:2歳以上
                                    原産国:中国
                                    INTEX社製のサンシェード付プール。
                                    高さのある壁で安定します。
                                    サンシェードは取り外し可能です。
                                    プール底に排水口付き。
                                    修理用パッチ付。
                                    ご注意:子供は必ず、監視者のもとで遊ばせてください。
                                    レンタル等による貸出、オークション等による販売や中古販売、
                                    及び譲渡によって発生した故障・破損・損害・事故などにつきましては
                                    一切責任を負いかねますので予めご了承ください。`,
                                    imagePath:"13.jpg",
                                    price:2160
                                },
                                {
                                    id:14,
                                    name:"ミニ四駆スターターパック　MAパワータイプ（ブラストアロー）",
                                    description: `製品サイズ:(約)幅157×奥行157×高さ122cm
                                    材質:塩化ビニル樹脂(非フタル酸系可塑剤使用)
                                    水量目安:高さ22cmまで入れて295L
                                    付属品:修理用パッチ
                                    対象年齢:2歳以上
                                    原産国:中国
                                    INTEX社製のサンシェード付プール。
                                    高さのある壁で安定します。
                                    サンシェードは取り外し可能です。
                                    プール底に排水口付き。
                                    修理用パッチ付。
                                    ご注意:子供は必ず、監視者のもとで遊ばせてください。
                                    レンタル等による貸出、オークション等による販売や中古販売、
                                    及び譲渡によって発生した故障・破損・損害・事故などにつきましては
                                    一切責任を負いかねますので予めご了承ください。`,
                                    imagePath:"14.jpg",
                                    price:2980
                                },
                                {
                                    id:15,
                                    name:"機動戦士ガンダムZZ ダブルゼータガンダム",
                                    description: `製品サイズ:(約)幅157×奥行157×高さ122cm
                                    材質:塩化ビニル樹脂(非フタル酸系可塑剤使用)
                                    水量目安:高さ22cmまで入れて295L
                                    付属品:修理用パッチ
                                    対象年齢:2歳以上
                                    原産国:中国
                                    INTEX社製のサンシェード付プール。
                                    高さのある壁で安定します。
                                    サンシェードは取り外し可能です。
                                    プール底に排水口付き。
                                    修理用パッチ付。
                                    ご注意:子供は必ず、監視者のもとで遊ばせてください。
                                    レンタル等による貸出、オークション等による販売や中古販売、
                                    及び譲渡によって発生した故障・破損・損害・事故などにつきましては
                                    一切責任を負いかねますので予めご了承ください。`,
                                    imagePath:"15.jpg",
                                    price:2440
                                },
                                {
                                    id:16,
                                    name:"こえだちゃんと木のおうち",
                                    description: `製品サイズ:(約)幅157×奥行157×高さ122cm
                                    材質:塩化ビニル樹脂(非フタル酸系可塑剤使用)
                                    水量目安:高さ22cmまで入れて295L
                                    付属品:修理用パッチ
                                    対象年齢:2歳以上
                                    原産国:中国
                                    INTEX社製のサンシェード付プール。
                                    高さのある壁で安定します。
                                    サンシェードは取り外し可能です。
                                    プール底に排水口付き。
                                    修理用パッチ付。
                                    ご注意:子供は必ず、監視者のもとで遊ばせてください。
                                    レンタル等による貸出、オークション等による販売や中古販売、
                                    及び譲渡によって発生した故障・破損・損害・事故などにつきましては
                                    一切責任を負いかねますので予めご了承ください。`,
                                    imagePath:"16.jpg",
                                    price:2700
                                },
                                {
                                    id:17,
                                    name:"キラペットドーム <アクセパーティー>",
                                    description: `製品サイズ:(約)幅157×奥行157×高さ122cm
                                    材質:塩化ビニル樹脂(非フタル酸系可塑剤使用)
                                    水量目安:高さ22cmまで入れて295L
                                    付属品:修理用パッチ
                                    対象年齢:2歳以上
                                    原産国:中国
                                    INTEX社製のサンシェード付プール。
                                    高さのある壁で安定します。
                                    サンシェードは取り外し可能です。
                                    プール底に排水口付き。
                                    修理用パッチ付。
                                    ご注意:子供は必ず、監視者のもとで遊ばせてください。
                                    レンタル等による貸出、オークション等による販売や中古販売、
                                    及び譲渡によって発生した故障・破損・損害・事故などにつきましては
                                    一切責任を負いかねますので予めご了承ください。`,
                                    imagePath:"17.jpg",
                                    price:2440
                                },
                                {
                                    id:18,
                                    name:"おはじきシール ゆめかわDX",
                                    description: `製品サイズ:(約)幅157×奥行157×高さ122cm
                                    材質:塩化ビニル樹脂(非フタル酸系可塑剤使用)
                                    水量目安:高さ22cmまで入れて295L
                                    付属品:修理用パッチ
                                    対象年齢:2歳以上
                                    原産国:中国
                                    INTEX社製のサンシェード付プール。
                                    高さのある壁で安定します。
                                    サンシェードは取り外し可能です。
                                    プール底に排水口付き。
                                    修理用パッチ付。
                                    ご注意:子供は必ず、監視者のもとで遊ばせてください。
                                    レンタル等による貸出、オークション等による販売や中古販売、
                                    及び譲渡によって発生した故障・破損・損害・事故などにつきましては
                                    一切責任を負いかねますので予めご了承ください。`,
                                    imagePath:"18.jpg",
                                    price:2700
                                },
    ],
    login_user:null,
    orders:[]
})
export const getters = {
    itemList(state:any){
        return state.items
    },
    getItemId(state:any){ 
        (id:number) => {
            state.items.find((el:Product) => {
                if(el.id === id){
                    return el
                }
            })
        }
       
    },
    userName:state => state.login_user ? state.login_user.displayName : '',
    photoURL:state => state.login_user ? state.login_user.photoURL : '',
    uid:state => state.login_user ? state.login_user.uid : null,
    cart(state){
        if(state.orders.length > 0 ){
          const cart = state.orders.filter(cartItem => {
            return cartItem.status == 0
          })
          return cart
        }else{
          return []
        }
      },
      history(state){
        const history = state.orders.filter(cartItem => {
          return cartItem.status != 0  
        })
        return history
      }

}
export const mutations = {
    setLoginUser(state,user){
        state.login_user = user
    },
    deleteLoginUser(state){
        state.login_user = null
    },
    inCart(state,cartItem){
      state.orders.push(cartItem)
    },
    removeCart(state,removeCart){
      const deleteCart = state.orders.filter(el => {
            el.status === 0
        })
        deleteCart.itemInfo = removeCart
    },
    addRireki(state,newCartItem){
        console.log(newCartItem);
        
        const index = state.orders.findIndex(item =>{
            console.log(item.orderId)
            console.log(newCartItem.orderId)
            return item.orderId == newCartItem.orderId;
          })
          state.orders[index] = newCartItem
    }
}
export const actions = {
    inCart({ getters, commit }, { itemId, ko ,item}) {

        
        if (getters.uid) {
            if(getters.cart.length === 0){
                const ref = firebase.firestore().collection(`users/${getters.uid}/orders`).doc()
                const id = ref.id
                console.log('405'+id);
                console.log(ko);
                console.log(itemId);
                const cartItem = {
                   orderId:id,
                    itemInfo:[
                        {
                            itemId:itemId,
                            itemNum:ko,
                            name:item.name,
                            imagePath:item.imagePath,
                            price:item.price,
                            description:item.description
                        },
                    ],
                    status: 0,
                }

                firebase.firestore().collection(`users/${getters.uid}/orders`).doc(id).set({
                    orderId:id,
                    ...cartItem
                }).then((doc) => {
                    console.log(doc);
                    
                    commit("inCart",cartItem)
                })
            }else{
                console.log(getters.cart);
                
                let status0Id = [];
                const ref = firebase.firestore().collection(`users/${getters.uid}/orders`).doc()
                const id = ref.id

                const cartItem = {
                    itemInfo:firebase.firestore.FieldValue.arrayUnion({
                        itemId:itemId,
                        itemNum:ko,
                        name:item.name,
                        imagePath:item.imagePath,
                        price:item.price,
                        description:item.description
                    })
                }

                firebase.firestore().collection(`users/${getters.uid}/orders`)
                .where('status', '==', 0)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        console.log('448'+doc.data().orderId);
                        console.log('449'+doc.id);
                        
                        status0Id.push(doc.id)
                    })
                    const status0Ref = firebase.firestore().collection(`users/${getters.uid}/orders`).doc(status0Id[0])
                    status0Ref.update(cartItem).then((doc) => {
                        console.log(doc);
                        
                        commit("inCart",cartItem)
                    })
                })
            }

        //   let cartItem = { 
        //     itemId: itemId,
        //      itemNum: ko, 
        //      status: 0 ,
        //      itemName:item.name,
        //      itemGazou:item.imagePath,
        //      itemPrice:item.price,
        //      itemDis:item.description,
        //      cartId:""
        //     }
        //      console.log(cartItem.itemId)
        //   firebase
        //     .firestore()
        //     .collection(`users/${getters.uid}/Cart`)
        //     .add(cartItem)
        //     .then((doc) => {
        //       console.log(doc);
        //       cartItem.cartId = doc.id
        //       // doc.id
        //       // doc.data()
        //       console.log(cartItem)
        //       commit("inCart",cartItem);
        //       console.log("addCart確認");
        //     });
        }
      },
      removeCart({getters,commit},{item,orderId}){
          const itemInfosId = item.id
          console.log(item);
          console.log(orderId);
          
          const ordersRef = firebase.firestore().collection(`users/${getters.uid}/orders`)

          ordersRef.where('status','==',0).get().then((querySnapshot:any) => {
              querySnapshot.forEach((doc:any) => {

                const docId = doc.data().orderId

                if(doc.data().itemInfo.length > 1){
                  
                  
                  let deleteItem:any = doc.data().itemInfo.filter((item:any) => {
                      item.itemId != itemInfosId
                  })
                  

                  let localcart = [
                      {
                          orderId: docId,
                          itemInfo:deleteItem,
                          status:0
                      }
                  ];
                  
                  ordersRef.doc(docId).set(localcart[0])
                  commit("removeCart",localcart[0])

                }
                  
                  if(doc.data().itemInfo.length === 1){
                      ordersRef.doc(docId).delete();
                  }
                  commit("removeCart",[])
              })
              location.reload()
          })

      },
      fetchCart({ getters, commit }) {
        // const x = doc;
        firebase
          .firestore()
          .collection(`users/${getters.uid}/orders`)
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              commit("inCart", {
                orderId: doc.id,
                itemInfo:doc.data().itemInfo,
                status:doc.data().status,
                ...doc.data()
              });
            });
          });
      },
      addRireki({state,getters,commit},{pay,total}){
        getters.cart.forEach((el:any) => {
  
          const newCartItem = {
            ...el,
            ...pay,
            totalPrice:total
          }
          firebase.firestore().collection(`users/${getters.uid}/orders`).doc(el.orderId).update(newCartItem).then(() => {
            commit("addRireki",newCartItem)
            location.reload()
          })
        })
        },
        setCancel({getters},{orderId}){
            const ordersRef = firebase.firestore().collection(`users/${getters.uid}/orders`)
            return ordersRef.doc(orderId).update({
                status:9
            }).then(() => {
                location.reload()
            })
        },
      login(){
          const google = new firebase.auth.GoogleAuthProvider()
          firebase.auth().signInWithRedirect(google)
      },
      logout(){
          firebase.auth().signOut();
      },
      setLoginUser({commit},user:any){
          commit('setLoginUser',user)
      },
      deleteLoginUser({commit}){
          commit('deleteLoginUser')
      }
}

export const accessorType = getAccessorType({
    state,
    getters,
    mutations,
    actions,
    modules: {
        // shop,
    },
})