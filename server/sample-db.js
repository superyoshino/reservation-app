const Product = require("./model/product")

class FakeDB {
  constructor(){
    this.products = [
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'IPhone 11',
        price: 999,
        description: 'A large phone with one of the best screens',
        heading1:'heading1',
        heading2:'heading2',
        heading3:'heading3'
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'IPhone X',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1:'heading1',
        heading2:'heading2',
        heading3:'heading3'
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'IPhone 8',
        price: 499,
        description: 'IPhone 8 2018',
        heading1:'heading1',
        heading2:'heading2',
        heading3:'heading3'
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'IPhone 7',
        price: 299,
        description: 'IPhone 7 2016',
        heading1:'heading1',
        heading2:'heading2',
        heading3:'heading3'
      }
    ]
  }


  async initDB(){
      await this.cleanDB()
      this.pushProductsToDB()
    }

  async cleanDB(){
    await Product.deleteMany({})
  }


  pushProductsToDB(){
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }

  seeDB(){
    this.pushProductsToDB()
  }
}

module.exports = FakeDB
