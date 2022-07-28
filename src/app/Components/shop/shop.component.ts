import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  search: any
  p: number = 1
  shopper: any = []
  companies: any = []
  constructor(private router: Router, private http: HttpClient) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  CompanyFilter($event, company) {
    console.log(company.company_id)
    this.http.get('http://mobikart-alb-1432438635.us-east-1.elb.amazonaws.com/CompanyFilter/' + company.company_id).subscribe((res) => {
      this.shopper = res;
      console.log(this.shopper);
    })
  }
  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.http.get('http://mobikart-alb-1432438635.us-east-1.elb.amazonaws.com/getLimitData/100').subscribe((res) => {
      this.shopper = res;
      //console.log("Shopper",this.shopper)
    })

    this.http.get('http://mobikart-alb-1432438635.us-east-1.elb.amazonaws.com/getCategory').subscribe((res) => {
      this.companies = res;
      //console.log("Companies",this.companies)
    })
  }

}
