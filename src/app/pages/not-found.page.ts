import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container mx-auto w-full sm:w-2/3  p-5 flex flex-col items-center h-screen">
      <h2 class="text-gray-900 text-xl md:text-4xl mb-4 text-center">
        Whoops! This page doesn't exist.
      </h2>
      <img src="/not_found.svg" alt="avatar image" class="w-full lg:w-1/2 md:w-2/3 h-auto">
      <div class="p-4 cursor-pointer" routerLink="/">
        <span>
          <i class="bi bi-arrow-left pr-3"></i>
        </span>
        <button class="hover:underline">Back to Home</button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotFoundPage { }
