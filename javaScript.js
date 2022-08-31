const correo__menu=document.getElementById('correo__menu');
const menu=document.querySelector('.menu--desktop');

const iconMobile=document.getElementById('icon--menu--mobile');
const menuMobile=document.querySelector('.menu--mobile');

const shoppingIcon=document.querySelector('.icon--nav2');
const menuShopping=document.querySelector('.shopping'); // aside-curso

const contenedorProducts=document.querySelector('.main--container--products');

// captura de la descripcion del producto.






correo__menu.addEventListener('click', toggleMenuDesktop);
iconMobile.addEventListener('click', toggleMenuMobile);
shoppingIcon.addEventListener('click', toggleShopping);


// prueba con el switch 

function toggleMenuDesktop(){
    const shoppingCartOpen=menuShopping.classList.contains('desactivar');
    const productDetail=document.querySelector('.container--products')
    const productDetailsClose=productDetail.classList.contains('desactivar');
    event.preventDefault();

    if (!productDetailsClose) {
        productDetail.classList.toggle('desactivar')
        event.preventDefault();
        menu.classList.toggle('desactivar');
     } else if (!shoppingCartOpen) {
        menuShopping.classList.add('desactivar');
        event.preventDefault();
        menu.classList.toggle('desactivar');
     } else {
    
        menu.classList.toggle('desactivar');
     }
}
function toggleMenuMobile(){

    const shoppingCartOpen=menuShopping.classList.contains('desactivar');

    if(!shoppingCartOpen ){
        menuShopping.classList.add('desactivar');

        event.preventDefault();
        menuMobile.classList.toggle('desactivar');
    }else{
        event.preventDefault();
        menuMobile.classList.toggle('desactivar');
    }
}
function toggleShopping(){
    const menuMobileOpen=menuMobile.classList.contains('desactivar');
    const menuDesktopOpen=menu.classList.contains('desactivar');
    const productDetail=document.querySelector('.container--products')
    const productDetailsClose=productDetail.classList.contains('desactivar');
 
    if (!menuMobileOpen || !menuDesktopOpen){
        menu.classList.add('desactivar');
        menuMobile.classList.add('desactivar');
        event.preventDefault();
        menuShopping.classList.toggle('desactivar');

    }else if (!productDetailsClose){
        productDetail.classList.add('desactivar');
        event.preventDefault();
        menuShopping.classList.toggle('desactivar');
        
    }else{
        event.preventDefault();
        menuShopping.classList.toggle('desactivar');
    }
}
function showDetails(){

    const shoppingCartClose=menuShopping.classList.contains('desactivar');
    const menuClose=menu.classList.contains('desactivar');
    
    

   if (!menuClose || !shoppingCartClose) {
        menu.classList.add('desactivar');
        menuShopping.classList.add('desactivar');
        containerProducts.classList.toggle('desactivar');

   } else {
    containerProducts.classList.toggle('desactivar');
   }
}


const productList=[];


productList.push({
    name: 'guantes',
    price: 90.00,
    image: './estilo/recursos/cat1.avif'
})

productList.push({
    name:'Mats',
    price: 120.00,
    image: './estilo/recursos/dog3.avif'
});

productList.push({
    name: 'guantes',
    price: 90.00,
    image: './estilo/recursos/dog1.avif'
})

productList.push({
    name:'Mats',
    price: 120.00,
    image: './estilo/recursos/hamster1.avif'
});

productList.push({
    name: 'guantes',
    price: 90.00,
    image: './estilo/recursos/dog4.avif'
})

productList.push({
    name:'Mats',
    price: 120.00,
    image: './estilo/recursos/bird1.avif'
});

productList.push({
    name: 'guantes',
    price: 90.00,
    image: './estilo/recursos/cat3.avif'
})

productList.push({
    name:'Mats',
    price: 120.00,
    image: './estilo/recursos/dog5.avif'
});

productList.push({
    name: 'guantes',
    price: 90.00,
    image: './estilo/recursos/rabbit1.avif'
})

productList.push({
    name:'Mats',
    price: 120.00,
    image: './estilo/recursos/dog6.avif'
});


function agregarProductos (arr) {

for ( var product of arr){

    const productCard=document.createElement('section');
    productCard.classList.add('container--card');

    const imgCard=document.createElement('img');
    imgCard.classList.add('card__img');
    imgCard.setAttribute('id', 'imagenProduct');
    imgCard.addEventListener('click', showDetails);

    imgCard.setAttribute('src', product.image);
    imgCard.setAttribute('alt', 'producto de la tienda');

    const containerArticle=document.createElement('div');
    containerArticle.classList.add('container--article');

    const contenedor=document.createElement('div');

    const precio=document.createElement('p');
    precio.innerText='$'+product.price;

    const nombre=document.createElement('p');
    nombre.innerText=product.name;

    const iconCard=document.createElement('figure');
    const productImg=document.createElement('img');
    productImg.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/3523/3523887.png');
    productImg.classList.add('card__icon');
    productImg.setAttribute('alt', 'producto de la tienda');

    productCard.appendChild(imgCard);
    productCard.appendChild(containerArticle);

    containerArticle.appendChild(contenedor);
    containerArticle.appendChild(iconCard);

    iconCard.appendChild(productImg);

    contenedor.appendChild(precio);
    contenedor.appendChild(nombre);


    contenedorProducts.appendChild(productCard);

}
};

agregarProductos(productList);

const imagenProducto=document.getElementById('imagenProduct');
imagenProducto.addEventListener('click', showDetails);

const containerProducts=document.querySelector('.container--products');
const closeDetailsProducts=document.querySelector('.close--products');

closeDetailsProducts.addEventListener('click', closeContainer);


function closeContainer(){
    containerProducts.classList.add('desactivar');
}
