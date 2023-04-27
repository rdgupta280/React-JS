import './App.css';
import Card from './Component/Card';

function App() {
  const productDetailsOne={
    productId : '#001',
    productPic : 'https://static.nike.com/a/images/ar_4:5,c_pad,w_400,f_auto/t_product_v1/ybip2cnbqzzlzbzt8abg/air-max-2017-mens-shoes-BVqnkV.jpg',
    productName : 'Shoes',
    Brand : 'Nike',
    productDescription : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    Price : '$60',
    Rating : '4.2'
}
  
  const productDetailsTwo={
    productId : '#002',
    productPic : 'https://www.golfersclub.co.za/wp-content/uploads/2021/09/0004_GR3126_01_laydown.jpg',
    productName : 'T-Shirt',
    Brand : 'Adidas',
    productDescription : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    Price : '$60',
    Rating : '4.2'
}
  
  const productDetailsThree={
    productId : '#003',
    productPic : 'https://cdn.luxatic.com/wp-content/uploads/2021/11/Ralph-Lauren-POLO-Cologne-Intense.jpg',
    productName : 'Perfume',
    Brand : 'Luxe-Hayat',
    productDescription : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    Price : '$60',
    Rating : '4.2'
}
  
  const productDetailsFour={
    productId : '#004',
    productPic : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MV7N2?wid=890&hei=890&fmt=jpeg&qlt=95&.v=1551489688005',
    productName : 'Earphone',
    Brand : 'Apple',
    productDescription : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    Price : '$60',
    Rating : '4.2'
}
  
  const productDetailsFive={
    productId : '#005',
    productPic : 'https://businessyield.com/wp-content/uploads/2021/07/MOST-EXPENSIVE-WATCH-BRANDS.jpg',
    productName : 'Watch',
    Brand : 'Fastrack',
    productDescription : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    Price : '$70',
    Rating : '4.2'
}

function BtnFunctionOne(){
  alert('Product of is'+ productDetailsOne.productId+ ', which is '+productDetailsOne.productName+ 'of brand'+ 
  productDetailsOne.Brand+' has of rupees' + productDetailsOne.Price+' is added in the cart, please proceed to pay!!!')
}

function BtnFunctionTwo(){
  alert('Product of is'+ productDetailsTwo.productId+ ', which is '+productDetailsTwo.productName+ 'of brand'+ 
  productDetailsTwo.Brand+' has of rupees' + productDetailsTwo.Price+' is added in the cart, please proceed to pay!!!')
}

function BtnFunctionThree(){
  alert('Product of is'+ productDetailsThree.productId+ ', which is '+productDetailsThree.productName+ 'of brand'+ 
  productDetailsThree.Brand+' has of rupees' + productDetailsThree.Price+' is added in the cart, please proceed to pay!!!')
}

function BtnFunctionFour(){
  alert('Product of is'+ productDetailsFour.productId+ ', which is '+productDetailsFour.productName+ 'of brand'+ 
  productDetailsFour.Brand+' has of rupees' + productDetailsFour.Price+' is added in the cart, please proceed to pay!!!')
}

function BtnFunctionFive(){
  alert('Product of is'+ productDetailsFive.productId+ ', which is '+productDetailsFive.productName+ 'of brand'+ 
  productDetailsFive.Brand+' has of rupees' + productDetailsFive.Price+' is added in the cart, please proceed to pay!!!')
}
  
  
  

  return(
    <div className="App">
        <div className='main-div'>
       <Card details ={productDetailsOne} btnFunction={BtnFunctionOne} />
       <Card details ={productDetailsTwo} btnFunction={BtnFunctionTwo} />
       <Card details ={productDetailsThree} btnFunction={BtnFunctionThree} />
       <Card details ={productDetailsFour} btnFunction={BtnFunctionFour} />
       <Card details ={productDetailsFive} btnFunction={BtnFunctionFive} />
       </div>
    </div>
 );
}


export default App;
