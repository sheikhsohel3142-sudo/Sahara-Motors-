import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonInput,
} from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-billings-and-payments',
  templateUrl: './billings-and-payments.page.html',
  styleUrls: ['./billings-and-payments.page.scss'],
  standalone: true,
  imports: [
    IonInput,
    IonIcon,
    IonButton,
    IonContent,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
})
export class BillingsAndPaymentsPage implements OnInit {
  data: any[] = [];
  pagedData: any[] = [];

  itemsPerPage = 10;
  currentPage = 1;
  totalPages = 0;

  selectedSchool: any = null;

  constructor(private router: Router) {}
  addNewSchool() {
    this.router.navigate([
      '/',
      'admin',
      'billings-and-payments',
      'generate-bills',
    ]);
    console.log('view');
  }

  ngOnInit() {
    for (let i = 1; i <= 50; i++) {
      this.data.push({
        id: i,
        name: 'Luffy',
        school: 'ARLM',
        buses: 'December',
        route: '$ 480.00',
        outstandingAdvance: '$400.00',
        status: 'due',
        board: 'CBSE',
        address: 'Triplicane, Chennai',
        state: 'Jharkhand',
        contact: 'Russel',
        email: 'srvm@school.com',
        timing: '09:00 - 16:30',
      });
    }

    this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
    this.updateTable();
  }

  changePageSize(event: any) {
    this.itemsPerPage = Number(event.target.value);
    this.currentPage = 1;
    this.updateTable();
  }

  viewSchool(school: any) {
    this.selectedSchool = school;
  }

  closeDetail() {
    this.selectedSchool = null;
  }
  schoolDetail() {
    this.router.navigate([
      '/',
      'admin',
      'billings-and-payments',
      'generate-bills',
    ]);
  }

  updateTable() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    // this.pagedData = this.data.slice(start, end);
    this.pagedData = [];

    // this.cd.detectChanges();
    // console.log('Current Page:', this.currentPage);
    // console.log('Paged Data:', this.pagedData);
    setTimeout(() => {
      this.pagedData = this.data.slice(start, end);
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateTable();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateTable();
    }
  }

  isSearchOpen = false;

toggleSearch(event: Event) {
  event.stopPropagation(); // 🔥 important
  this.isSearchOpen = true;
}

// 👉 outside click
@HostListener('document:click', ['$event'])
closeSearch(event: Event) {
  const target = event.target as HTMLElement;

  if (!target.closest('.search-box')) {
    this.isSearchOpen = false;
  }
}
}
