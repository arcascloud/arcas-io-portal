import { Component, inject } from '@angular/core';
import { Hero } from './components/hero';
import { Login } from './components/login';
import { ModuleList } from './components/module-list';
import { Navbar } from './components/navbar';
import { QuoteForm } from './components/quote-form';
import { QuoteSummary } from './components/quote-summary';
import { Services } from './components/services';
import { CONTACT } from './access.config';
import { QuoteStore } from './quote.store';

@Component({
  imports: [Navbar, Hero, ModuleList, Services, Login, QuoteSummary, QuoteForm],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly store = inject(QuoteStore);
  protected readonly contact = CONTACT;
  protected readonly year = new Date().getFullYear();
}
