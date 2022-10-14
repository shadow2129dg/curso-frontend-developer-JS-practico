const menuEmail = document.querySelector ('.navbar-email');
const DesktopMenu = document.querySelector ('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu');
const menuButton = document.querySelector ('.menu-boton-mobile');
const menuCarritoIcon = document.querySelector ('.navbar-shopping-cart');
const shoppingcart = document.querySelector ('.product-detail-cart');
const productDetail = document.querySelector ('.product-detail');
const productDetailCloseIcon = document.querySelector ('.product-detail-close');


menuEmail.addEventListener('click', DesplegarMenu);
menuButton.addEventListener('click', DesplegarMenuMobile);
menuCarritoIcon.addEventListener('click', DesplegarCarrito);
productDetailCloseIcon.addEventListener('click', CloseproductDetail);

function DesplegarCarrito(){

    //Las varibales const tienen una logica revisando si estan activas o inactivas.

    const IsmobileMenuClosed = mobileMenu.classList.contains('inactive');
    const IsdesktopMenuClosed = DesktopMenu.classList.contains('inactive');
    const IsproductDetailClose = productDetail.classList.contains('inactive');

    //el if pregunta si esta abierto entonces le agrega un inactive para que se cierre 

    if(!IsmobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!IsdesktopMenuClosed){
        DesktopMenu.classList.add('inactive');
    }

    if (!IsproductDetailClose){
        productDetail.classList.add('inactive');
    }

    shoppingcart.classList.toggle('inactive');


}

function DesplegarMenuMobile (){

    const IsAsideClosed = shoppingcart.classList.contains('inactive');
    const IsproductDetailClose = productDetail.classList.contains('inactive');

    if(!IsAsideClosed){
        shoppingcart.classList.add('inactive');
    }

    if(!IsproductDetailClose){
        productDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
 
}

function DesplegarMenu (){

    const IsAsideClosed = shoppingcart.classList.contains('inactive');

    if(!IsAsideClosed){
        shoppingcart.classList.add('inactive');
    }
    
    DesktopMenu.classList.toggle('inactive');
};

function OpenproductDetail(){
    shoppingcart.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetail.classList.remove('inactive');
};

function CloseproductDetail(){
    productDetail.classList.add('inactive');
};

const productList = [];

productList.push({
    name: 'bike', 
    price: 120, 
    image: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:good/mg/images/categorias/d-deportes/f-deportes-ciclismo/l-ciclismo-montana.jpg", 
});

productList.push({
    name: 'Computadora', 
    price: 420, 
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTAr_K3Cy7wL5hmyFNWEnZLwS154yxONdS95D1lHn13hZXZHMKjAPcyj5jdLkJ1ksV9_PML_k7CfOk&usqp=CAc", 
});

productList.push({
    name: 'Xbox Series s', 
    price: 520, 
    image: "https://media.gamestop.com/i/gamestop/11108372/Microsoft-Xbox-Series-S-Digital-Edition", 
});

productList.push({
    name: 'Tablet', 
    price: 300, 
    image: "https://www.officedepot.com.mx/medias/100042611.jpg-1200ftw?context=bWFzdGVyfHJvb3R8MjA3ODAxfGltYWdlL2pwZWd8aGYyL2hmMC8xMDI2Mjc3NzQzMDA0Ni8xMDAwNDI2MTEuanBnXzEyMDBmdHd8YzRiOTMxNjMxMTUyZjRhNmQyNjZmY2M1YTU5MWE3ZjczMTU1NWJhNGJiNzJjODE5YWQ4MmVjN2U2ZTFjNzU5Zg", 
});

productList.push({
    name: 'Carro', 
    price: 34400, 
    image: "https://loscoches.com/wp-content/uploads/2021/04/carros-deportivos-potencia.jpg", 
});


/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>  */

// for (product of productList){
//     const productCard = document.createElement('div');
//     productCard.classList.add('product-card');

//     const productImg = document.createElement('img');
//     productImg.setAttribute('src', product.image);

//     const productInfo = document.createElement('div');
//     productInfo.classList.add('product-info');

//     const productInfoDiv = document.createElement('div');

//     const productPrice = document.createElement('p');
//     productPrice.innerText = '$' + product.price;

//     const productName = document.createElement('p');
//     productName.innerText = product.name;

//     const productInfoFigure = document.createElement('figure');

//     const productImgCart = document.createElement('img');
//     productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    

//     const cardsContainer = document.querySelector('.cards-container');

//     productInfoDiv.appendChild(productPrice);
//     productInfoDiv.appendChild(productName);

//     productInfoFigure.appendChild(productImgCart);

//     productInfo.appendChild(productInfoDiv);
//     productInfo.appendChild(productInfoFigure);

//     productCard.appendChild(productImg);
//     productCard.appendChild(productInfo);

//     cardsContainer.appendChild(productCard);
// };

function renderProducts (arr){

    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', OpenproductDetail);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
    
        const cardsContainer = document.querySelector('.cards-container');
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    };
    
}

renderProducts(productList);

