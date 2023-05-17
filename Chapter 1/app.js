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

const app = new Vue({
    el: "#app",
    data:{
        maximum: 50,
        product: null
    },
    mounted:  async function() {
        // const response = await fetch('https://hplussport.com/api/products/order/price')

        // const result =await  response.json();

        // this.product = result.data

        fetch('https://hplussport.com/api/products/order/price')
        .then(response => response.json())
        .then(data => {this.product = data})

    }
  });