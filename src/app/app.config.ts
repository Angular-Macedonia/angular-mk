import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideFileRouter } from '@analogjs/router';
import { withInMemoryScrolling } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideFileRouter(withInMemoryScrolling(
      {
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }
    )),
    
    provideHttpClient(withFetch()),
   
  ],
};
