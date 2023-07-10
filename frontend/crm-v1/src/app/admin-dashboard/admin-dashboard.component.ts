import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent{
  
  ticketClass: string = '';
  agentClass: string = '';
  customerClass: string = '';
  
  setNavStyle(navOpt: string): void{
    if(navOpt == 'tickets'){
      this.ticketClass = 'highlight';
      this.agentClass = 'default';
      this.customerClass = 'default';
      
    }
    else if(navOpt == 'agents'){
      this.ticketClass = 'default';
      this.agentClass = 'highlight';
      this.customerClass = 'default';
    }

    else if(navOpt == 'customers') {
      this.ticketClass = 'default';
      this.agentClass = 'default';
      this.customerClass = 'highlight';
    }

    else {
      this.ticketClass = 'default';
      this.agentClass = 'default';
      this.customerClass = 'default';
    }
  }

}
