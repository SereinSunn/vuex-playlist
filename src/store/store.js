import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        products:[
            {name:"马云",price:200},
            {name:"马云2",price:300},
            {name:"马云3",price:400},
            {name:"马云4",price:500}
          ]
    },
    getters:{
        saleProducts:(state)=>{
            var saleProducts=state.products.map(
            product=>{
                return {
                  name:"**"+product.name+"**",
                  price:product.price/2
                };
            });
            return saleProducts;
          },
    },
    mutations:{
      // mutations里面是具体的功能函数，进行数据处理
       reducePrice:(state,payload)=>{
            state.products.forEach(product=>{
            product.price-=payload;
       }) 
            }
          // 从下面的actions里面传递过来的payload进入到reducePrice中的payload
          // 进行数据的交换，修改
    },
    // 使用actions的好处是可以进行异步处理，便于开发者进行调试
    actions:{
      reducePrice:(context,payload)=>{
        // context:类似于this.$store
        // commit:激活函数
        setTimeout(function(){
          context.commit("reducePrice",payload);
          // patload->amount
        },3000)
      }
    }
})
