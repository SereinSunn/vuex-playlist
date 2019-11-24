<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
        <li v-for="product2 in products"  :key="product2.id">
          <span class="name">{{product2.name}}</span>
           <span class="price">${{product2.price}}</span>
        </li>
    </ul>
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
 }
}

</script>

<style scoped>
#product-list-two{
  background:#D1E4FF;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  margin-bottom: 30px;
  padding:10px 20px;
}
#product-list-two ul{
  padding:0;
  list-style: none;
}
#product-list-two li{
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background-color: rgba(255,255,255,0.7);
}
.price{
  font-weight: bold;
  color: #860CEB;
  display: block;
}
</style>