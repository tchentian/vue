const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: "book1",
        data: '2019-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: "book2",
        data: '2019-12',
        price: 80.00,
        count: 1
      },
      {
        id: 3,
        name: "book3",
        data: '2007-9',
        price: 45.00,
        count: 1
      },
      {
        id: 4,
        name: "book4",
        data: '2020-9',
        price: 27.00,
        count: 1
      }
    ]
  },
  methods: {
    decrement(index) {
      this.books[index].count--
    },
    increment(index) {
      this.books[index].count++
    },
    removeHandle(index) {
      this.books.splice(index,1)
    }
  },
  computed: {
    totalPrice() {
      //1.普通的for循环
      // let totalPrice = 0;
      // for (let i = 0; i < this.books.length; i++){
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice

      //2.for (let i in this.books)
      // let totalPrice = 0;
      // for (let i in this.books){
      //   const book = this.books[i]
      //   totalPrice += book.price * book.count
      // }
      // return totalPrice

      //2.for (let i of this.books)
      // let totalPrice = 0;
      // for(let item of this.books){
      //   totalPrice += item.price * item.count
      // }
      //  return totalPrice

      //reduce
      return this.books.reduce(function (preValue,book){
        return preValue + book.price * book.count
      },0)
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  }
})


//函数式编程
// const nums = [10,20,111,23,432,213,53]
// let total = nums.filter(function (n){
//   return n <100
// }).map(function (n){
//   return n*2
// }).reduce(function (prevValue,n){
//   return prevValue + n
// },0)
// let total = nums.filter(n => n <100).map(n => n * 2).reduce((pre,n) => pre + n);