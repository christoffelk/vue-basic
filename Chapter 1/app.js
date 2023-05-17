// var app = new Vue({
//     el: '#app',
//     data: {
//         maximum: 50,
//         products: null,
//         cart: []
//     },
//     mounted: function() {
//         fetch('https://hplussport.com/api/products/order/price')
//         .then(response => response.json())
//         .then(data => {
//             this.products = data;
//         });
//     },
//     methods: {
//         addItem: function (product) {
//             this.cart.push(product);
//         }
//     }
// });
const data = {
    "name": "hello world",
    "description": "hello wolrd",
    price: "34000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xAZC_IEqYENTyekCJq6SViwmesoEN_lsUiozV-pl&s"
}
const app = new Vue({
    el: "#app",
    data
  });