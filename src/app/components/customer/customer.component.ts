import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerNewService } from './customer-new.service';
import { Title } from '@angular/platform-browser';
import { LoggerService } from '../../core/Logger.Service';
import { ICustomer } from '../index';

@Component({
  selector: 'b-customer',
  templateUrl: './customer.component.html',
  styles: [`p-dialog>>> .ui-dialog-titlebar{background-color:rgb(224, 229, 233);}`]
})
export class CustomerComponent implements OnInit {
  customers: Customer[];
  customer: Customer = new PrimeCustomer();
  displayDialog: boolean;
  selectedCustomer: ICustomer;
  constructor(private customerService: CustomerNewService, private title: Title, private logger: LoggerService) {
    this.title.setTitle('Customer List');
  }

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe((customers: Customer[]) => { this.customers = customers; },
      (err) => console.error(this.logger.error(''), err),
      () => { this.logger.log(''); });
  }
  onRowSelect(event) {
    this.customer = this.cloneCustomer(event.data);
    this.displayDialog = true;
  }

  cloneCustomer(c: Customer): Customer {
    const customer = new PrimeCustomer();
    // tslint:disable-next-line:forin
    for (const prop in c) {
      customer[prop] = c[prop];
    }
    return customer;
  }
}

class PrimeCustomer implements Customer {
  constructor(public customerId?,
    public companyName?,
    public contactName?,
    public contactTitle?,
    public address?,
    public isActive?) { }
}
