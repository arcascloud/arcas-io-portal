import { Component, inject } from '@angular/core';
import { Hero } from './components/hero';
import { ModuleList } from './components/module-list';
import { QuoteForm } from './components/quote-form';
import { QuoteSummary } from './components/quote-summary';
import { QuoteStore } from './quote.store';

@Component({
  imports: [Hero, ModuleList, QuoteSummary, QuoteForm],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly store = inject(QuoteStore);
  protected readonly year = new Date().getFullYear();
}
