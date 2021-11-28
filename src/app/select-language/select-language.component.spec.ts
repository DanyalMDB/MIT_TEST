import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLanguageComponent } from './select-language.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from "@ngx-translate/core";

describe('SelectLanguageComponent', () => {
  let component: SelectLanguageComponent;
  let fixture: ComponentFixture<SelectLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectLanguageComponent],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        })
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
  it('#changeLanguage() should change #langView',
    () => {
      fixture = TestBed.createComponent(SelectLanguageComponent);
      component = fixture.componentInstance;
      expect(component.langView).toBeTruthy();
      expect(typeof component.langView).toEqual('string');
      // toMatch(/is off/i, 'off at first');
    })
    */
});
