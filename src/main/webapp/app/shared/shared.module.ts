import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BooyakaHipsterSharedLibsModule, BooyakaHipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [BooyakaHipsterSharedLibsModule, BooyakaHipsterSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [BooyakaHipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BooyakaHipsterSharedModule {
  static forRoot() {
    return {
      ngModule: BooyakaHipsterSharedModule
    };
  }
}
