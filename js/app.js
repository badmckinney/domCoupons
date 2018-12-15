//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow:
const disclaimer = document.querySelector('#disclaimer');
disclaimer.textContent = "Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter."

//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.
const brand1 = document.querySelector('#brand1');
brand1.textContent = "Nabisco";

//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 
const item1 = document.querySelector('#item1');
item1.textContent = "Cheeseburger Oreos";

//4. Target the div element with the id of 'price1' and update the content to $8.99.
const price1 = document.querySelector('#price1');
price1.textContent = '$8.99';

//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!
const discount1 = document.querySelector('#discount1');
discount1.textContent = "Free fries with purchase!"

//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.

const item2 = document.createElement('div');
item2.id = "item2";
item2.textContent = "Hendricks Gin"
const brand2 = document.querySelector('#brand2');
brand2.appendChild(item2);

//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.
const price2 = document.createElement('div');
price2.id = "price2";
price2.textContent = "$34.99"
brand2.appendChild(price2);

//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.
const discount3 = document.createElement('button');
discount3.id = "discount3";
discount3.textContent = "50% OFF Axe body soap!";
const block3 = document.getElementsByClassName('block3');
block3[3].appendChild(discount3);


//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.
const items = document.querySelectorAll('.item');
console.log(items);
items[0].textContent = "Orange Chicken";

//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.
const discount = document.createElement('button');
discount.className = 'discount';
discount.textContent = "Free T-shirt and fortune cookie with purchase!"
const block1 = document.getElementsByClassName('block1');
block1[1].appendChild(discount);

//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.
const brands = document.querySelectorAll('.brand');
brands[1].textContent = "Uniqlo";

//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 
const prices = document.querySelectorAll('.price');
prices[1].textContent = "$10,000";

//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 
const brand = document.createElement('div');
brand.className = "brand";
brand.textContent = "Hifiman Shangri-La";
block3[1].appendChild(brand);

//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 
const anotherItem = document.createElement('div');
anotherItem.className = "item";
anotherItem.textContent = "Electronstatic Headphones";
block3[1].appendChild(anotherItem);

//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.
const anotherPrice = document.createElement('div');
anotherPrice.className = 'price';
anotherPrice.textContent = "$18,000";
block3[1].appendChild(anotherPrice);

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.
const anotherDiscount = document.createElement('button');
anotherDiscount.className = "discount";
anotherDiscount.textContent ="Free Barry Manilow CD with purchase!";
block3[1].appendChild(anotherDiscount);

//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!
brands[2].textContent = "H&M";
items[2].textContent = "Unicorn-Head Slippers";
prices[2].textContent = "$21.99";
const discounts = document.querySelectorAll('.discount');
discounts[3].textContent = "Free knee-high tube socks with purchase";

//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.
brands[3].textContent = "Frito Lay";
items[3].textContent = "Poppin' Jalapeno Doritos";
prices[3].textContent = "$7.77";
discounts[4].textContent = "33% OFF any 6 pack Budweiser or Bud Light";

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!
brands[4].textContent = "Any Dog Breeder";
items[4].textContent = "Baby Puggy";
prices[4].textContent = "Priceless";
discounts[5].textContent = "No Discounts. This cutie is worth every penny!";

//Final Boss 
//Create your own product for the last three sections.
const images = document.getElementsByTagName('img');
const block2 = document.querySelectorAll('.block2');
console.log(images);
console.log(brands);
console.log(items);
console.log(prices);
console.log(discounts);
console.log(block2)

images[10].src = "../img/butt-plug.jpg";
brands[5].textContent = "Buttplugs-R-Us";
items[5].textContent = "Bejeweled Butt Plug";
prices[5].textContent = "$0.99";
discounts[6].textContent = "1 Free Swiss-made Penis Enlarger with purchase!";

images[11].src = "../img/indica.jpeg";
const weedBrand = document.createElement('div');
weedBrand.className = "brand";
weedBrand.textContent = "Unko's Backyard Dispensary";
const weedItem = document.createElement('div');
weedItem.className = "item";
weedItem.textContent = "Northern Lights Cannabis Indica";
const weedPrice = document.createElement('div');
weedPrice.className = "price";
weedPrice.textContent = "Price varies on street value";
const weedDiscount = document.createElement('button');
weedDiscount.className = "discount";
weedDiscount.textContent = "Free Nachos with purchase!";
block2[3].appendChild(weedBrand);
block2[3].appendChild(weedItem);
block2[3].appendChild(weedPrice);
block2[3].appendChild(weedDiscount);


images[12].src = "../img/torture.jpeg";
const tortureBrand = document.createElement('div');
tortureBrand.className = "brand";
tortureBrand.textContent = "ACME Torture Supply";
const tortureItem = document.createElement('div');
tortureItem.className = "item";
tortureItem.textContent = "Beginner's Home Torture Toolset";
const torturePrice = document.createElement('div');
torturePrice.className = "price";
torturePrice.textContent = "$49.99";
const tortureDiscount = document.createElement('button');
discount3.textContent = "Free bottle of Chloroform with purchase!";
block3[3].insertBefore(torturePrice, block3[3].childNodes[2]);
block3[3].insertBefore(tortureItem, block3[3].childNodes[2]);
block3[3].insertBefore(tortureBrand, block3[3].childNodes[2]);



