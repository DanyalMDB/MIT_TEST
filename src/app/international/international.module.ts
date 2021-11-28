import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateService } from
  '@ngx-translate/core';
import { I18nModule } from '../i18n/i18n.module';

import { InternationalComponent } from './international.component';

import { SocketioService } from './socketio.service';
//import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

// const config: SocketIoConfig = { url: 'http://localhost:3000', options: { path: '/international' } }; //  

@NgModule({
  declarations: [InternationalComponent],
  imports: [
    CommonModule,
    I18nModule,
    // SocketIoModule.forRoot(config),
  ],
  providers: [SocketioService]
  // exports: [I18nModule]
})

export class InternationalModule { }
