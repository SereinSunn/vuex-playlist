<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
        <li v-for="product in saleProducts"  :key="product.id">
          <span class="name">{{product.name}}</span>
           <span class="price">${{product.price}}</span>
        </li>
    </ul>
    <button @click="reducePrice(4)">商品降价</button>
  </div>
</template>

<script>
export default {
 computed:{
   products(){
     return this.$store.state.products;
   },
   saleProducts(){
     return this.$store.getters.saleProducts;
   },
 },
 methods:{
  //  4是一个实参，从上面传递过来，下面的函数里面需要有形参来接收它
   reducePrice:function(amount){
    //  this.$store.state.products.forEach(product=>{
    //    product.price-=1;
    //  })
    // this.$store.commit('reducePrice');
    //分发
    this.$store.dispatch("reducePrice",amount);
    // 这里的amount接受4，返回store,进行值得传递
   }
 }
}
</script>

<style>
#product-list-one{
  background-color: #FFF881;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul{
  padding: 0;
}
#product-list-one li{
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background-color: rgba(255,255,255,0.7);
}
.price{
  font-weight: bold;
  color: #E8800C;
}
</style>