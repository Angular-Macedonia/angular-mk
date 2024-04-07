import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideFileRouter } from '@analogjs/router';
import { withInMemoryScrolling } from '@angular/router';
import { provideContent, withMarkdownRenderer } from '@analogjs/content';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideFileRouter(withInMemoryScrolling(
      {
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }
    )),
    provideContent(withMarkdownRenderer()),
    provideHttpClient(withFetch()),
   
  ],
};
