const wrapper = document.querySelector('.sliderWrapper');
// wrapper.style.transform = "translateX(100vw)";
console.log(wrapper);
const menuItem = document.querySelectorAll(".menuItem");
console.log(menuItem);


const products = [
    {
        id: 1,
        title: 'Air Force',
        price: 119,
        desc: "The Nike Air Force 1 has transcended its original sports shoe purpose and has become a cultural icon, worn by people for both athletic performance and as a fashion statement. It's often seen in various subcultures and has a lasting impact on streetwear fashion.",
        colors:[
            {
                code:'black',
                img: './img/air.png',
            },
            {
                code: 'darkblue',
                img: './img/air2.png',
            },
        ], 
    },
    {
        id: 2,
        title: 'Air Jordan',
        price: 149,
        desc: "Nike Air Jordans are a renowned line of basketball shoes and apparel named after basketball legend Michael Jordan. Launched in 1985, they revolutionized athletic footwear with innovative designs and Nike's iconic Air cushioning.",
        colors:[
            {
                code:'lightgray',
                img: './img/jordan.png',
            },
            {
                code: 'green',
                img: './img/jordan2.png',
            },
        ], 
    },
    {
        id: 3,
        title: 'Blazer',
        price: 109,
        desc:"Blazer shoes, introduced by Nike, are a classic and versatile footwear option. They are known for their clean, minimalist design featuring a simple high-top silhouette. Originally designed as basketball shoes.",
        colors:[
            {
                code:'lightgray',
                img: './img/blazer.png',
            },
            {
                code: 'green',
                img: './img/blazer2.png',
            },
        ], 
    },
    {
        id: 4,
        title: 'Crater',
        desc: "Nike Crater shoes are a sustainable and eco-friendly footwear option. They are part of Nike's Move to Zero initiative, emphasizing sustainability in design and production..",
        price: 129,
        colors:[
            {
                code:'black',
                img: './img/crater.png',
            },
            {
                code: 'white',
                img: './img/crater2.png',
            },
        ], 
    },
    {
        id: 5,
        title: 'Hippie',
        price: 99,
        desc:"Hippie shoes, often associated with the counterculture movement of the 1960s and 1970s, are characterized by their free-spirited and bohemian style.",
        colors:[
            {
                code:'gray',
                img: './img/hippie.png',
            },
            {
                code: 'black',
                img: './img/hippie2.png',
            },
        ], 
    },
];

let selectedProduct = products[0];
const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductDesc = document.querySelector('.productDesc');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');

menuItem.forEach((item, i)=>{
    item.addEventListener("click", ()=>{
        // changing current slide
        console.log("clicked");
        wrapper.style.transform = `translateX(${-100 * i}vw)`;
        // changing selected product
        selectedProduct = products[i]; 
        // changing title of selected product
        currentProductTitle.textContent = selectedProduct.title; 
        currentProductPrice.textContent = `$`+selectedProduct.price;
        // changing image of selected color
        currentProductImg.src = selectedProduct.colors[0].img;
        // changing description of selected shoes
        currentProductDesc.innerHTML = selectedProduct.desc;
        // selecting new shoe colors
        currentProductColors.forEach((color, i)=>{
            currentProductImg.src = selectedProduct.colors[i].img;
            color.style.backgroundColor = selectedProduct.colors[i].code;
        });
    });
})

currentProductColors.forEach((colors, i)=>{
    colors.addEventListener('click', ()=>{
        currentProductImg.src = selectedProduct.colors[i].img;
    });
}); 

currentProductSizes.forEach((size, i)=>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size)=>{
            console.log("asdfasdf");
            console.log(currentProductSizes)
            size.style.backgroundColor = 'transparent';
            size.style.color = 'black';
        });
        size.style.backgroundColor = 'black';
        size.style.color = 'white';
    })
})

const productbtn = document.querySelector(".productbtn")
const payment = document.querySelector(".payment")
const closeIcon = document.querySelector(".close");
productbtn.addEventListener("click", ()=>{
    payment.style.display = 'flex';
})
closeIcon.addEventListener("click", ()=>{
    payment.style.display = 'none';
})

function validateEmail(event) {
    var userEmail = document.getElementById("emailInput").value;

    if (userEmail.trim() === "") {
        event.preventDefault();
        // Alert the user if the email input is empty
        alert("Please enter your email address");
    }
}