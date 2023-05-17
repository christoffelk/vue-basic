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
    maximum: 50,
    product: [
        {
            id: '1',
            name: 'hello',
            description: "oh my god",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xAZC_IEqYENTyekCJq6SViwmesoEN_lsUiozV-pl&s"
            ,price: 50000
        },
        {
            id: '2',
            name: 'hello world',
            description: "oh my god",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xAZC_IEqYENTyekCJq6SViwmesoEN_lsUiozV-pl&s"
        ,
        price: 500000

        }
    ]
}
const app = new Vue({
    el: "#app",
    data
  });