import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-seven',
  templateUrl: './blog-seven.component.html',
  styleUrls: ['./blog-seven.component.scss']
})
export class BlogSevenComponent implements OnInit {
  blogSpecificPage: boolean = false;

  blogSevenContent = {
    date: 'Oct 8, 2023',
    title: 'Ask an Advisor: What should I do with the I bonds I purchased in 2021?',
    description: `As inflation started to surge in 2021 and 2022, investors started to put money into I bonds for a sense of safety 
    from the volatile markets and to earn a higher yield than treasuries.  While inflation soared, the fed funds rate remained largely 
    flat.  It made sense to keep money in I Bonds as you were getting a much higher risk-free return. Now that inflation and the fed 
    rates have inverted, investors can generate better risk-free returns in other areas of the market.`,
    descriptionSecond: `Let’s review some quick facts regarding I bonds: `,
    listOne: [
      {
        listItem: `The interest rate you earn is a combination of a fixed rate and an inflation rate.  Investors that purchased I bonds in 2020 or 2021 have a fixed rate of 0%.  
        The Inflation rate is tied to the CPI index.`,
      },
      {
        listItem: `You are required to hold the bond for 12 months.  After that, you can sell the bonds, but if you sell prior to 5 years, you lose the last 3 months of interest.`
      },
      {
        listItem: `When you earn interest, you pay federal taxes but interest is exempt from state and local taxes.`
      },
      {
        listItem: `When you redeem your I bonds, you will receive a 1099 INT for tax purposes in your treasurydirect.gov account the following January. `
      }
    ],
    descriptionThird: `Now, Let’s review why investors got into them in the first place and then evaluate if there are better alternatives.`,
    listTwo: [
      {
        listHeader: 'Safety and Security: ',
        listItem: `In the midst of the COVID-19 pandemic, investors sought safety and security for their capital. I bonds have a track record 
        of providing a safe haven during turbulent times. Their principal value is protected, and their interest rates are indexed to inflation, ensuring that investors can 
        potentially preserve their purchasing power. `,
      },
      {
        listHeader: 'Surging Inflation:',
        listItem: `One of the key drivers behind the popularity of I bonds in 2021 was surging inflation. When interest rates were low, as they were in 2021, I bonds 
        become an attractive option because they offered competitive fixed and inflation-adjusted interest rates that were trending higher.`
      },
    ],
    descriptionForth: `The fed has been adamant for the past few years that they are trying to lower inflation back to its long-term average.
      Because of this, inflation and CPI has come down which also means that the interest being earned on I bonds have come down as well.  
      As you can see in the graph below, US inflation has come down from its peak of 9.06% and the Fed has raised short-term rates up to 5.5%.`,
    imageMarketCapitalization: `./assets/blog-images/us-inflation-rate.jpg`,
    descriptionFive: `Let’s now compare that to the current composite rates of what investors are getting on their bonds as seen on the treasury direct website.`,
    imageStockSector: `./assets/blog-images/ibond-composite-rate.jpg`,
    descriptionSix: `Looking at the current composite rates (fixed rate + inflation rate) we can see that there are better places to invest for a higher risk-free yield.  
    Some areas include short term CDs, money market funds, high yield savings accounts. `,
    imageBreakdown: `./assets/blog-images/treasury-rates.jpg`,
    descriptionSeven: `From the above chart, you can see that the short-term treasury bonds have also risen as the fed has raised rates.  
    What makes this a bit more of a compelling investment is that you are now able to lock in a higher annualized return.  If you believe 
    inflation will remain low, you can secure a higher annualized return with a 2-year, 3-year, or 5-year Treasury bond compared to I bonds. 
    It is essential to hold these bonds until maturity to guarantee those returns.`,
    descriptionEight: `For those comfortable with a bit more risk, investment-grade corporate bonds can provide even higher total returns over similar time periods.`,
    descriptionNine: `If you invested in I bonds over the past few years, rest assured that they served their purpose by protecting against 
    market volatility and generating high returns during surging inflationary times, all while preserving your principle. However, in light 
    of changing market conditions and inflation dynamics, the reasons to continue holding them may not be as compelling as they once were.`,
  };

  isReadMore = true;

  constructor(private url: LocationStrategy) {}

  ngOnInit(): void {
    if (this.url.path() == '/blog/ibonds-2021') {
      this.blogSpecificPage = true;
      this.isReadMore = false;
    }
  }

  showText() {
    this.isReadMore = !this.isReadMore;
  }

}
