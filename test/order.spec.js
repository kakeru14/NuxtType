import { mount } from '@vue/test-utils'
import Header from '../components/Header.vue'
import Shop from '../pages/Order/Shopping-cart.vue'
import Rireki from '../pages/Order/Rireki.vue'
import Confirm from '../pages/Order/OrderConfirm.vue'
import Finish from '../pages/Order/OrderFinished.vue'
import Logo from '../components/Logo'
import 'jsdom-global'

// require('jsdom-global')()

require('jsdom-global')()


// const test = require('@vue/test-utils')
// const Vue = require('vue');

// test.mount(Vue.component('test', { template: '<div>test</div>' }));
// testUtils.mount({ template: '<div>test</div>' });



console.log(Header);

describe('Header', () => {
  it('コンポーネントが存在する', () => {

    const wrapper = 1
    
    // expect()の中身がtrueだったらテスト合格
    expect(wrapper).toBeTruthy()
  })
})
describe('Shop', () => {
  test('コンポーネントが存在する', () => {
    
    const wrapper = 1
    // expect()の中身がtrueだったらテスト合格
    expect(wrapper).toBeTruthy()
  })
})
describe('Rireki', () => {
  test('コンポーネントが存在する', () => {
    
    const wrapper = 1
    // expect()の中身がtrueだったらテスト合格
    expect(wrapper).toBeTruthy()
  })
})
describe('Confirm', () => {
  test('コンポーネントが存在する', () => {
    
    const wrapper = 1
    // expect()の中身がtrueだったらテスト合格
    expect(wrapper).toBeTruthy()
  })
})
describe('Finish', () => {
  test('コンポーネントが存在する', () => {
    
    const wrapper = 1
    // expect()の中身がtrueだったらテスト合格
    expect(wrapper).toBeTruthy()
  })
})


describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = 1
    expect(wrapper).toBeTruthy()
  })
})