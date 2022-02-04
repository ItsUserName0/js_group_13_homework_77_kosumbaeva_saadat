import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThreadComponent } from './pages/thread/thread.component';
import { CardsComponent } from './ui/cards/cards.component';
import { CardComponent } from './ui/cards/card/card.component';
import { NewCardComponent } from './ui/new-card/new-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FileInputComponent } from './ui/file-input/file-input.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthorPipe } from './pipes/author.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ThreadComponent,
    CardsComponent,
    CardComponent,
    NewCardComponent,
    FileInputComponent,
    AuthorPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
