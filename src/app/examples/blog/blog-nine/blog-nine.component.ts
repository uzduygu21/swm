import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-blog-nine',
  templateUrl: './blog-nine.component.html',
  styleUrls: ['./blog-nine.component.scss'],
})
export class BlogNineComponent implements OnInit {
  isReadMore = true;
  blogSpecificPage: boolean = false;

  blogNineContent = {
    date: 'January 15, 2024',
    title: ' 2024: Market Maneuvers for Cautious Optimists',
    description: `As we start 2024, the market's trajectory remains hazy, with both positive and negative factors in play. 
    Let's dissect the potential upsides and downsides before charting a course for the year. `,
    secondParagraph: 'Reasons for Optimism:',
    listOne: [
      {
        listHeader: "The Fed's Balancing Act:",
        listDescription: `If the Federal Reserve successfully achieves a "soft landing" – controlling inflation without 
        triggering a recession – interest rates could stabilize or even fall, boosting market sentiment.`,
      },
      {
        listHeader: 'Earnings Momentum: ',
        listDescription: `Strong corporate earnings witnessed in 2023 may continue, particularly in sectors like technology and 
          consumer discretionary, driving stock prices further.`,
      },
      {
        listHeader: 'Value Potential: ',
        listDescription: `After tech's surge in 2023, relatively undervalued sectors like healthcare, and energy 
        could see a much-needed rotation, offering looked over gems for astute investors.`,
      },
    ],
    thirdParagraph: 'Potential Pitfalls:',
    listTwo: [
      {
        listHeader: 'Inflationary Lingering: ',
        listDescription: `Though tamed compared to its 2023 peak, inflation remains a concern.  The market has already started to 
        price in drastic rate cuts for 2024 and even the slightest hint of inflation remaining high might dampen market sentiment.`,
      },
      {
        listHeader: 'Election Uncertainty: ',
        listDescription: `The November US presidential election injects another dose of unpredictability. Policy shifts and political 
        campaigns can spark market volatility, creating a bumpy ride.`,
      },
      {
        listHeader: 'Geopolitical Headwinds: ',
        listDescription: `Ongoing global tensions, from Ukraine to Taiwan, pose significant risks. Escalation could trigger market 
        panics and erode investor confidence.`,
      },
    ],
    forthParagraph: `So, how do we navigate this mixed bag of possibilities? The key is to focus on high-quality companies with robust 
    fundamentals, proven track records, and sustainable long-term growth potential. 
    These "blue-chip" companies serve as reliable anchors, weathering market storms and appreciating in value over time.`,
    fifthParagraph: `Remember, market volatility is inevitable. By holding onto quality stocks, we can ride through the ups and downs, 
    emerging on the other side with a portfolio not only intact but also strengthened by adversity. So, let's approach 2024 with cautious 
    optimism, prioritizing robust fundamentals over ephemeral market swings. In the long run, the right holdings will keep us on course.`,
  };

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  constructor(private url: LocationStrategy) {}

  ngOnInit(): void {
    if (this.url.path() == '/blog/2024-market-strategy') {
      this.blogSpecificPage = true;
      this.isReadMore = false;
    }
  }
}
