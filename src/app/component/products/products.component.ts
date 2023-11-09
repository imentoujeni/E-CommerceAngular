import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    console.log(1)
    this.api.getProduct()
    .subscribe(res=>{
      console.log(2)
      this.productList = res;
      this.filterCategory = res;
      console.log("filterCategory")
      console.log(this.filterCategory)
      this.productList.forEach((a:any) => {
        
        Object.assign(a,{quantity:1,total:a.price});
      });
      
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
      console.log("this.searchKey : ",this.searchKey)
    })
    console.log(3)
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    console.log(category)
    this.filterCategory = this.productList
    .filter((a:any)=>{
      console.log(a)
      if(a.category?.idc == category || category==''){
        return a;
      }
    })
  }
yamyouma : string="assets/1850.jpg";
yamyoumty1 :string="assets/allp.jpg";
yamyoumty2 :string="assets/rg.jpg";
yamyoumty3 :string="assets/pal1.jpg";
yamyoumty4 :string="assets/cr.jpg";
}