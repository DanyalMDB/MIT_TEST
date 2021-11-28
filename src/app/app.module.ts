import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**
 * Project was created without Routing option
 * so Routing will be setup here (otherwise in app-routing.module.ts)
 * followed https://angular.io/start/start-routing
 * used structure from mit-ws-20-21-requests.pdf
 * so components needed are: Start, Navigation, Room Info, Int. Office, Login
 * difference to structure image: gave navigation higher prio than room info
 * 
 */

// Components
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RoomsComponent } from './rooms/rooms.component';
import { LoginComponent, RegisterDialog } from './login/login.component';
import { InternationalComponent } from './international/international.component';
import { AdminComponent } from './admin/admin.component';
import { JwtGuard } from './jwt.guard';

// Modules
import { InternationalModule } from './international/international.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
// Material Components
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MatSidenavModule,
} from '@angular/material/sidenav';
import {
  MatListModule,
} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateLoader, TranslateModule, TranslateService } from
  '@ngx-translate/core';
import { I18nModule } from './i18n/i18n.module';
import { SelectLanguageComponent } from './select-language/select-language.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { InternalInfoComponent } from './internal-info/internal-info.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    NavigationComponent,
    RoomsComponent,
    LoginComponent,
    RegisterDialog,
    SelectLanguageComponent,
    AdminComponent,
    NewsComponent,
    EventsComponent,
    InternalInfoComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: StartComponent },
      { path: 'navigation', component: NavigationComponent },
      { path: 'events', component: EventsComponent },
      { path: 'news', component: NewsComponent },

      { path: 'rooms', component: RoomsComponent },
      { path: 'international', component: InternationalComponent },
      // { path: 'international', loadChildren: './international/international.module#InternationalModule' },
      { path: 'admin', component: AdminComponent, canActivate: [JwtGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'internalinfo', component: InternalInfoComponent }
    ]),
    InternationalModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    I18nModule],
  exports: [
    RouterModule,
  ],
  entryComponents: [LoginComponent, RegisterDialog],
  providers: [], // SocketioService
  bootstrap: [AppComponent]
})
export class AppModule { }
