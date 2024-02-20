import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-blog-ten',
  templateUrl: './blog-ten.component.html',
  styleUrls: ['./blog-ten.component.scss']
})
export class BlogTenComponent implements OnInit {
  blogSpecificPage: boolean = false;

  blogTenContent = {
    date: 'Feb 20, 2024',
    title: "A Young Family's Close Call: Navigating Life Insurance",
    description:
      `At 32, Sarah and Michael had achieved their dream: successful careers, a charming new home, a healthy toddler, and a 
      bright future ahead. Yet, an unforeseen event was about to change their lives when Michael got sick.  Both had relied 
      on basic group plans through work, and they hadn't fully grasped the limitations until a sudden illness struck Michael, 
      leaving them facing staggering medical bills and an uncertain future.   `,
    descriptionSecondPrg: 
      `This near disaster became a wake-up call.  With Michael making a full recovery, they were determined to protect their 
      young family. They embarked on a journey of research and education and soon discovered the stark contrast between their 
      existing group plans and the flexibility and comprehensive coverage offered by individual policies.`,
    hereisWhat: 'Here is what they found out:',
    headerOne: `Unveiling the Gaps:`,
    descriptionHeaderOne: `Their group plans offered through work, while convenient and somewhat cheap, had limited coverage 
    and were tied to their employment. This meant losing their safety net if they lost their job. Additionally, the fixed death 
    benefit wouldn't come close to covering the growing financial needs of their family.  They did find out that there was a 
    portability feature if they lost their job, but it would be very expensive to keep. `,
    headerTwo: 'Charting a New Course:',
    descriptionHeaderTwo: `They found out that they could each get their own individual policy that would cover all their 
    liabilities if something were to happen.  They learned that they could customize the amount of coverage, term lengths and 
    add rider benefits that could address their specific needs.  After careful consideration, they opted for individual policies 
    with guaranteed rates, portability, and higher death benefits tailored to their evolving financial responsibilities.`,
    headerThree: 'The Impact of their decision:',
    descriptionHeaderThree: `The switch to individual policies wasn't just about finances; it was about regaining control and 
    securing their family's future. The peace of mind they gained was invaluable, knowing that if something were to happen to 
    either of them in the future, they would not be left unprepared.`,
    headerFour: 'Lessons Learned:',
    descriptionheaderFour: "Sarah and Michael's story serves as a powerful reminder for young families:",
    listOne: [
      {
        listHeader: "Don't rely solely on group life insurance: ",
        listDescription: `While convenient, its limitations can leave you exposed.`,
      },
      {
        listHeader: 'Educate yourself: ',
        listDescription: `Research individual options and understand your specific needs.`,
      },
      {
        listHeader: 'Seek professional guidance: ',
        listDescription: `Whether you’re starting a family or planning for retirement, Servet Wealth Management can help you 
        protect your loved ones.  We will offer the education you need to make an informed decision.`,
      },
      {
        listHeader: 'Proactive planning is key:  ',
        listDescription: `Don't wait for a crisis to address your life insurance needs.`,
      },
    ],

  };

  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  constructor(private url:LocationStrategy) { }

  ngOnInit(): void {
    if(this.url.path() == '/blog/life-insurance') {
      this.blogSpecificPage = true;
      this.isReadMore = false;
    }
  }

}
