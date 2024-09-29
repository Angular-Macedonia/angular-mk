import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TeamMember } from '../models/team-member.interface';
import { TeamMembers } from '../../../data/team-members';
import { Collaborators } from '../../../data/collaborators';
import { Collaborator } from '../models/collaborator.interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  selector: 'amk-team',
  imports: [RouterLink, NgOptimizedImage], 
  template: `
   <div class="container mx-auto w-full h-full p-5 min-h-screen" id='team'>
    <h2 class="text-gray-900 text-center dark:text-white text-xl md:text-2xl font-bold mt-20">Meet the team</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        @for(member of teamMembers; track member) {
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">

            <div class="p-4">
                <img [ngSrc]="member.image" alt="{{ member.name }}" [priority]="member.priority"  [height]="member.height" [width]="member.width"
                    class="w-2/3 h-80 object-cover mx-auto block mb-2 rounded-md">
                <h2 class="text-lg font-bold dark:text-white text-center">{{ member.name }}</h2>
                <p class="text-sm text-gray-600 dark:text-gray-300 text-center">{{ member.description }}</p>
                <div class="flex justify-center mt-2">
                    <div class="flex space-x-4">
                        @for(link of member.socialMedia; track link) {
                        <a [href]="link.url" target="_blank" rel="noopener noreferrer"
                            class="text-gray-900 dark:text-white hover:text-red-700 hover:dark:text-amber-500 flex items-center justify-center border border-gray-900 dark:border-white hover:border-red-700 hover:dark:border-amber-500 rounded-full w-10 h-10 hover-shake">
                            <i [class]="link.icon + ' text-xl'"></i>
                        </a>
                        }
                    </div>
                </div>
            </div>
        </div>
        }
    </div>
    @if(collaborators.length > 0) {
      <h2 class="text-gray-900 text-center dark:text-white text-xl md:text-2xl font-bold mt-16">Collaborators</h2>
     <div class="flex justify-center content-center gap-4 columns-3 mt-4">
       @for(member of collaborators; track member) {
         <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-96">
           <div class="p-4">
             <img  [ngSrc]="member.image" alt="{{ member.name }}" [priority]="false"  height="907" width="600"
                  class="w-2/3 h-80 object-cover mx-auto block mb-2 rounded-md">
             <h2 class="text-lg font-bold dark:text-white text-center">{{ member.name }}</h2>
             <p class="text-sm text-gray-600 dark:text-gray-300 text-center">{{ member.description }}</p>
             <div class="flex justify-center mt-2">
               <div class="flex space-x-4">
                 @for(link of member.socialMedia; track link) {
                   <a [href]="link.url" target="_blank" rel="noopener noreferrer"
                      class="text-gray-900 dark:text-white hover:text-red-700 hover:dark:text-amber-500 flex items-center justify-center border border-gray-900 dark:border-white hover:border-red-700 hover:dark:border-amber-500 rounded-full w-10 h-10 hover-shake">
                     <i [class]="link.icon + ' text-xl'"></i>
                   </a>
                 }
               </div>
             </div>
           </div>
         </div>
       }
     </div>
    }
   

     </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TeamPage {
  public readonly teamMembers: TeamMember[] = TeamMembers;
  public readonly collaborators: Collaborator[] = Collaborators
}
