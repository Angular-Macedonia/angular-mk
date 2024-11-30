import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JOB_OFFERS } from '../../../data/jobOffers';
import { CompanyInformation } from '../models/company-information.model';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  standalone: true,
  selector: 'amk-positions',
  imports: [RouterLink, HeaderComponent],
  template: `
    <amk-header [visible]='true'/>
   <div class="container mx-auto w-full h-full p-5 min-h-screen" id='positions' >
    <h2 class="text-gray-900 text-center dark:text-white text-xl md:text-2xl font-bold mt-20">Open positions at companies that support Angular Macedonia</h2>
    @for(offer of jobOffers; track offer) {
      <h1 class="text-xl font-bold  dark:text-white m-4">{{ offer.name }}</h1>

      <div class=" dark:text-white">
        {{ offer.description }}
      </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
    @for(position of offer.positions; track position) {
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">

              <div class="p-4">
                  <h2 class="text-lg font-bold dark:text-white text-center my-4">{{ position.title }}</h2>
                  <p class="text-sm text-gray-600 dark:text-gray-300">{{ position.description }}</p>
                  <div class="flex flex-col justify-start mt-2 py-4">
                      <h4 class="font-bold dark:text-white"> Responsibilities: </h4>
                      <ul class=" dark:text-white">
                          @for(responsibility of position.responsibilities; track responsibility) {
                          <li>{{ responsibility }}</li>
                          }
                      </ul>
                  </div>
                  <div class="flex flex-col justify-start mt-2 py-4">
                      <h4 class="font-bold dark:text-white"> Qualifications: </h4>
                      <ul class=" dark:text-white">
                          @for(qualification of position.qualifications; track qualification) {
                          <li>{{ qualification }}</li>
                          }
                      </ul>
                  </div>
                  @if(position.niceToHave.length > 0) {
                    <div class="flex flex-col justify-start mt-2 py-4">
                      <h4 class="font-bold dark:text-white"> Nice to have: </h4>
                      <ul class=" dark:text-white">
                          @for(have of position.niceToHave; track have) {
                          <li>{{ have }}</li>
                          }
                      </ul>
                  </div>
                  }
              </div>
            </div>
                        }
    </div>
  }
     </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PositionsPage {
  public readonly jobOffers: CompanyInformation[] = JOB_OFFERS;
}
