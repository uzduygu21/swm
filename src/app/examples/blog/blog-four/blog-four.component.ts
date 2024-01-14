import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-blog-four',
  templateUrl: './blog-four.component.html',
  styleUrls: ['./blog-four.component.scss']
})
export class BlogFourComponent implements OnInit {

  blogSpecificPage: boolean = false;

  blogFourContent = {
    date: 'April 5, 2023',
    title: 'Ask an Advisor: The surprise tax bill coming from your mutual fund',
    description:
      `Last year, I met with new clients to assess their financial concerns. They had begun analyzing their 
      taxes and were confused as to why they owed so much because their previous predictions about how much money 
      they would owe in taxes were spot on. After doing some research together, we discovered that they had large 
      mutual fund distributions in one of their brokerage accounts held with another financial advisor. `,
    question: `So, this led them to ask me a simple question; why did owning this mutual fund create more taxes?`,
    descriptionTwo: `Throughout the year, a mutual fund manager is buying and selling stocks they want to own to 
    outperform the stock market. Often, this means that short term or long-term capital gains are created inside 
    the fund throughout the year as they buy and sell securities. If there are net gains at the end of the year, 
    the mutual fund is then forced to distribute those gains to the underlying mutual fund holder, even if they 
    did not sell their own mutual fund shares. When a distribution is made, the mutual fund’s net asset value (NAV) 
    per share decreases by the amount of distribution, but they end up with more shares than before. So, while the 
    value of their fund did not change, they now own more shares of the mutual fund on a lower cost basis.`,
    descriptionThree: `Another mechanic which can lead to forced selling of securities by the mutual fund is if the 
    mutual fund is seeing negative outflows. This means that other investors are selling their shares in the mutual 
    fund.  When other investors redeem their shares, the mutual fund may be required to sell securities from its portfolio 
    to meet the redemption request so that the investors can get their money back. Usually this is not a big deal if only a 
    few people are redeeming their shares, but sometimes funds can have billions of dollars of redemptions in a brief period 
    thus forcing the liquidation of securities that may have taxable implications.`,
    headerOne: 'Possible Solutions',
    prgPossibleSolutions: `The first and easiest solution is to own mutual funds in retirement accounts where distributions 
    from mutual funds are not taxed. When evaluating a mutual fund, it is essential to consider its turnover ratio in conjunction 
    with other factors such as investment strategy, performance, fees, and risk profile to determine if it aligns with your investment 
    objectives and preference. Looking at ETFs in taxable accounts can be a better strategy because there are no forced distributions 
    as found in mutual funds.`,
    anotherPrgPossibleSolutions: `Another solution is understanding if the mutual fund manager is buying and selling securities 
    in a tax efficient manner. Tax aware managers strive to be aware of these distributions, so their investors are not hit 
    with surprise tax bills. `,
    headerTwo: 'The Tough Decision',
    prgToughDecision: `o, the question remains, what did my clients do with the fund? Because the fund managers had consistently 
    outperformed their benchmarks, the fund was up at approximately 80%, leaving my clients two options: keep the fund or sell it. 
    In keeping the fund, they might enjoy the benefit of continued outperformance, but this may result in more taxable distributions 
    in future years. On the other hand, by selling the fund, they would be forced to realize an 80% gain which would clearly be 
    higher than another one-off year. Ultimately, we decided the best course of action would be to continue to hold the fund but 
    keep an eye on it. `
  };

  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  constructor(private url:LocationStrategy) { }

  ngOnInit(): void {
    if(this.url.path() == '/blog/mutual-fund-taxes') {
      this.blogSpecificPage = true;
      this.isReadMore = false;
    }
  }

}
