import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from '../books/books.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './effects/list.effects';

@NgModule({
  declarations: [BooksComponent, EntryComponent, ListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([ListEffects])
  ]
})
export class BooksModule { }
