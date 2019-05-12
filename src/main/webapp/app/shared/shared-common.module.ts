import { NgModule } from '@angular/core';

import { BooyakaHipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [BooyakaHipsterSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [BooyakaHipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class BooyakaHipsterSharedCommonModule {}
