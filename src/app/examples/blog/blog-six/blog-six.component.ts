import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-blog-six',
  templateUrl: './blog-six.component.html',
  styleUrls: ['./blog-six.component.scss'],
})
export class BlogSixComponent implements OnInit {
  blogSpecificPage: boolean = false;

  blogSixContent = {
    date: 'Aug 15,2023',
    title: 'What’s Inside; A Look Into SPY',
    description: `What’s inside; This series is meant to help investors understand what they own by taking a look at the 
    underlying assets of an ETF or mutual fund.  We start the series with the world’s largest ETF by assets under management, SPY.   `,
    descriptionSecond: `The SPDR S&P 500 ETF Trust is one of the most popular exchange-traded funds (ETF) that tracks the S&P 500 Index. 
    Established on January 22, 1993, the fund, known as "SPY" for its trading symbol on the NYSE exchange is regarded as the first ETF to 
    be listed.  SPY remains one of the most actively traded ETFs, despite the introduction of competing S&P 500 ETFs. By monitoring the 
    S&P 500 index, SPY follows the performance of 500 of the largest publicly traded companies in the United States. When you buy a share 
    of SPY, you're buying a unit of the current holdings representing a small portion of each stock in the S&P 500 index. These companies 
    span a variety of industries and sectors, making the index a representative benchmark for the overall health of the U.S. stock market. 
    These stocks are selected by a committee based on market size, liquidity, and industry.  It is considered a market weighted 
    capitalization index meaning that the largest companies in the country get the largest exposure to the index.  `,
    descriptionThird: `SPY replicates the S&P 500 Index by utilizing a passive investment strategy by mirroring the performance of the 
    S&P 500 index rather than aiming to outperform it. This is achieved through a process called index replication, in which the fund 
    managers purchase the same stocks that make up the S&P 500 in the same proportions. Thus, as the index fluctuates, SPY's value will 
    reflect the changes.`,
    descriptionForth: `A Closer Look Inside the SPY by the size of the companies inside:  `,
    imageMarketCapitalization: `./assets/blog-images/market-cap.jpg`,
    descriptionFive: `SPY allocates its holdings across multiple sectors. The largest sectors as of August 3, 2023, are Technology with 
    28.51%, Healthcare with 13.30% and Financials Services with 12.29%. `,
    imageStockSector: `./assets/blog-images/sector.jpg`,
    descriptionSix: `Currently, the top 7 stock holdings are in the following companies: Apple, Microsoft, Amazon, NVIDIA, Google, 
    Tesla, and Meta.  These 7 companies represent over 27% of the index.  As technology stocks have gained greater importance in our 
    US economy over the past decade, their presence in the index has grown substantially.   `,
    imageBreakdown: `./assets/blog-images/breakdown.jpg`,
    descriptionSeven: `The SPY ETF offers investors an accessible and diversified way to invest in the performance of the stock market. 
    Whether you're a seasoned investor or just starting out, the SPDR S&P 500 ETF Trust offers an efficient way to diversify your portfolio 
    without having to invest in multiple stocks. Being that no investment is completely risk-fee, investors should conduct thorough research
    and stay up to date with both world and U.S. economic events, which could affect the performance of SPY.`,
    descriptionEight: `The cost of ETFs are generally lower than their mutual fund counterparts.  Each ETF has an internal expense that 
    the managers charge to replicate the strategy.  As such, you can have similar strategies with different underlying expenses depending 
    on who is running the fund.  SPY has an internal cost of .09%.  Cheaper alternatives from Blackrock’s IVV is at .03% and Vanguards VOO 
    is also at .03%.  If you are starting a new position, it might be advantageous to look at these options as a cheaper alternative that 
    will give you similar stock market exposure.`
  };

  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  constructor(private url: LocationStrategy) {}

  ngOnInit(): void {
    if (this.url.path() == '/blog/what-is-inside-spy') {
      this.blogSpecificPage = true;
      this.isReadMore = false;
    }
  }

  // shareOnLinkedIn() {
  //   window.open(`https://www.linkedin.com/shareArticle?url=https://servetwealth.com/#/blog/hsa-shoebox-strategy&title=${this.blogFiveContent.title}&summary=${this.blogFiveContent.description}`, 'sharer');
  // }
}
