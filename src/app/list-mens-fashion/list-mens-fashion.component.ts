import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-list-mens-fashion',
  templateUrl: './list-mens-fashion.component.html',
  styleUrls: ['./list-mens-fashion.component.scss']
})
export class ListMensFashionComponent implements OnInit {

  constructor(private dialog: MatDialog ){}


ngOnInit(): void {
  console.log(this.items)
}

  

items = [
  {product:'Blue Shirt', price: 1399, img: 'https://www.snitch.co.in/cdn/shop/products/4MSS1813-09-M3372_fd0fc4d3-6632-4afd-8068-415dbb21536c.jpg?v=1682190902', tags: ['comfort', 'skinny-fit', 'breathable', 'stretch'], description:'Experience the comfort with our selection of formal pants. Whether you are looking for a slim fit or a classic straight leg, we have plenty of options to fulfil your style needs. Browse through pants for men in materials like linen and cotton blended with elastane.'}, 
  {product:'black Pants', price: 2199, img: 'https://www.snitch.co.in/cdn/shop/files/4MSR5082-08-3228_1800x1800.jpg?v=1707391291', tags: ['comfort', 'skinny-fit', 'breathable', 'stretch'],description:'Experience the comfort with our selection of formal pants. Whether you are looking for a slim fit or a classic straight leg, we have plenty of options to fulfil your style needs. Browse through pants for men in materials like linen and cotton blended with elastane.'}, 
  {product:'Brown Shorts', price: 899, img: 'https://www.snitch.co.in/cdn/shop/files/4MSH7017-03-3232.jpg?v=1710244529', tags: ['comfort', 'skinny-fit', 'breathable', 'stretch'],description:'Experience the comfort with our selection of formal pants. Whether you are looking for a slim fit or a classic straight leg, we have plenty of options to fulfil your style needs. Browse through pants for men in materials like linen and cotton blended with elastane.'}, 
  {product:'Navy Blue Coat', price: 3599, img: 'https://www.snitch.co.in/cdn/shop/files/Suit650_1024x1024.jpg?v=1718611263', tags: ['comfort', 'skinny-fit', 'breathable', 'stretch'],description:'Experience the comfort with our selection of formal pants. Whether you are looking for a slim fit or a classic straight leg, we have plenty of options to fulfil your style needs. Browse through pants for men in materials like linen and cotton blended with elastane.'}, 
  {product:'Black Joggers', price: 1599, img: 'https://www.snitch.co.in/cdn/shop/files/25eeffbee3c9cfe44adf81565f34a04b.webp?v=1717677900', tags: ['comfort', 'skinny-fit', 'breathable', 'stretch'],description:'Experience the comfort with our selection of formal pants. Whether you are looking for a slim fit or a classic straight leg, we have plenty of options to fulfil your style needs. Browse through pants for men in materials like linen and cotton blended with elastane.'}, 
  {product:'Green Cargo', price: 1199, img: 'https://www.snitch.co.in/cdn/shop/products/Snitch_18thJun22_7076_1800x1800.jpg?v=1656067981', tags: ['comfort', 'skinny-fit', 'breathable', 'stretch'],description:'Experience the comfort with our selection of formal pants. Whether you are looking for a slim fit or a classic straight leg, we have plenty of options to fulfil your style needs. Browse through pants for men in materials like linen and cotton blended with elastane.'},
  {product:'White Cotton Pants', price: 2399, img: 'https://www.snitch.co.in/cdn/shop/files/4MSR5043-01-3214.jpg?v=1700222542', tags: ['comfort', 'skinny-fit', 'breathable', 'stretch'],description:'Experience the comfort with our selection of formal pants. Whether you are looking for a slim fit or a classic straight leg, we have plenty of options to fulfil your style needs. Browse through pants for men in materials like linen and cotton blended with elastane.'},
  {product:'Printed T-shirt', price:899, img:'https://www.snitch.co.in/cdn/shop/files/4MST2234-12-M25_1800x1800.jpg?v=1708500537', tags: ['comfort', 'skinny-fit', 'breathable', 'stretch'], description:'Experience the comfort with our selection of formal pants. Whether you are looking for a slim fit or a classic straight leg, we have plenty of options to fulfil your style needs. Browse through pants for men in materials like linen and cotton blended with elastane.'},
  {product:'Blue Denim Jeans', price: 1999, img: 'https://www.snitch.co.in/cdn/shop/files/4MSD3601-02-3218.jpg?v=1689153684', tags: ['comfort', 'skinny-fit', 'breathable', 'stretch'],description:'Experience the comfort with our selection of formal pants. Whether you are looking for a slim fit or a classic straight leg, we have plenty of options to fulfil your style needs. Browse through pants for men in materials like linen and cotton blended with elastane.'},
  {product:'Half sleeve Shirt', price: 999, img: 'https://www.snitch.co.in/cdn/shop/files/4MSS2481-06-M10_1024x1024.jpg?v=1697545327', tags: ['comfort', 'skinny-fit', 'breathable', 'stretch'],description:'Experience the comfort with our selection of formal pants. Whether you are looking for a slim fit or a classic straight leg, we have plenty of options to fulfil your style needs. Browse through pants for men in materials like linen and cotton blended with elastane.'}
]


openAddToCartDialog(){

  this.dialog.open(CartComponent)

}

}
