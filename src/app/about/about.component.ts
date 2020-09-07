import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../shared/services/account.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  accountName: any;
  duplicatAccountName: any;
  constructor(private accountDataService: AccountDataService) { }

  ngOnInit(): void {
    this.accountDataService.latestAccountName.subscribe((name: any) => {
      console.log(name);
      this.accountName = name;
      this.duplicatAccountName = name;
    });
  }

  updateAccountHandler(): void{
    console.log(this.duplicatAccountName);

    this.accountDataService.updateAccountName(this.duplicatAccountName);
  }

}
