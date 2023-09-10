import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-blog-two',
  templateUrl: './blog-two.component.html',
  styleUrls: ['./blog-two.component.scss'],
})
export class BlogTwoComponent implements OnInit {
  isReadMore = true;
  blogSpecificPage: boolean = false;

  blogTwoContent = {
    date: 'February 6,2023',
    title: ' Earn More Interest Than What Your Bank is Giving You',
    description: `The stock market has experienced a significant amount of volatility over the past year, leaving investors 
        and clients uncertain about their investment decisions. Several factors including concerns over inflation, 
        rising interest rates, and policy decisions by central banks have contributed to the market's volatility. 
        Considering the market’s unpredictable nature, many clients have chosen to stay in cash, seeking to protect 
        their capital by waiting for more stable conditions. By holding cash, they can reassess their financial situation, 
        reduce potential losses, and take advantage of future investment opportunities when the market shows more favorable conditions.`,
    secondParagraph: `Because investors are choosing to stay in cash, money meant to be invested is piling up in investors’ 
        bank accounts earning little interest. With interest rates constantly rising, it’s important to keep your money 
        working for you. Here are three methods to ensure that your money is earning interest from avenues other than your 
        bank account: `,
    list: [
      {
        listHeader: '1. Move into a High-Yield Savings Account',
        listDescription: `High-yield savings accounts differ from traditional savings accounts because they 
        reward you with a higher interest rate, allowing your money to grow as it sits in your account. Some high-yield 
        savings accounts now offer up to 3.5% in interest and supply FDIC insurance of up to $250,000 per depositor. However, 
        it’s important to note that all interest earned through this method is subject to ordinary income tax rates. I advise 
        clients to save up to 3 months of expenses in their checking account for bill payments and daily living, but anything 
        beyond that should be placed in a high-yield savings account where they can earn interest. While checking accounts do 
        offer minimal interest rates, it’s more beneficial to move emergency funds or money needed for future liquidity to a high-yield 
        savings account. Be sure to read the fine print when signing up for a high yield savings account as some banks may cap your 
        interest or limit your withdrawals back to your checking account. This can become a large headache if you need money for a 
        down payment on a home, or any other large expense. `,
      },
      {
        listHeader: '2. Buy Individual Treasuries',
        listDescription: `Buying short-dated individual treasury bonds is another excellent method of picking up a higher 
        yield. Treasuries typically pay interest every 6 months. I typically purchase 3–6-month treasury bonds for clients 
        because we can usually forecast their needs over that time frame. Buying treasury bonds with a further maturity date 
        can fluctuate in price as interest rates move. The interest or yield to maturity is often greater than in savings accounts. 
        For example, you can now buy a 3-month treasury bond for over 4.5% interest earned from treasury bonds is exempt from state 
        and local taxes, which may benefit those living in high-income tax states. `,
      },
      {
        listHeader: '3. Buy Municipal Bonds',
        listDescription: `Municipal bonds are debt securities issued by states, cities, and other governmental organizations 
        to fund public projects such as building schools, highways, or sewer systems. By purchasing municipal bonds, you are 
        lending money to a borrower in exchange for regular interest payments, and the return of your original investment. 
        Usually, interest received on municipal bonds is exempt from federal income tax. Municipal bonds are an ideal investment 
        possibility because of their tax advantages and effectiveness as a method of earning steady interest on your money while 
        diversifying your portfolio. Before buying municipal bonds, it’s important to match its maturity date with when you may 
        need added income and understand the risk factors in buying longer dated bonds. If you are a resident in the state where 
        the bond is issued, you may also benefit from not paying state and local taxes on the income. `,
      }
    ],
  };


  showText() {
    this.isReadMore = !this.isReadMore;
  }

  constructor(private url:LocationStrategy) {}

  ngOnInit(): void {
    if(this.url.path() == '/blog/earn-more-interest') {
      this.blogSpecificPage = true;
    }
  }
}
