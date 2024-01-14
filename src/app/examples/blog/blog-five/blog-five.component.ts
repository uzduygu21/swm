import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-blog-five',
  templateUrl: './blog-five.component.html',
  styleUrls: ['./blog-five.component.scss']
})
export class BlogFiveComponent implements OnInit {

  blogSpecificPage: boolean = false;

  blogFiveContent = {
    date: 'June 6, 2023',
    title: 'The power of the Health Savings Account and “Shoebox” strategy',
    description:
      `In today’s rapidly changing healthcare landscape, it has become increasingly important for individuals to take 
      charge of their medical expenses. One valuable tool is the Health Savings Account (HSA). With its numerous benefits 
      and potential for long-term savings, an HSA can provide an opportunity to grow your total healthcare dollars well into 
      your retirement, saving on taxes now and well into the future.  `,
    headerOne: `Understanding What a Health Savings Account Is:`,
    descriptionHeaderOne: `The Health Savings Account was created as part of the Medicare Prescription Drug, Improvement, 
    and Modernization Act of 2003. The main purpose of introducing HSAs was to provide individuals and their families with 
    a tax-advantaged savings tool designed to help them cover qualified medical expenses while enrolled in a high-deductible 
    health plan (HDHP). With healthcare costs rising over the years, HSAs empower individuals by allowing them to save for 
    healthcare costs in a tax-advantaged manner. This would help promote consumer mindfulness when considering their healthcare 
    as HSAs typically have lower monthly premiums but higher deductibles. `,
    headerTwo: 'A Few Distinct Advantages:',
    listOneHeaderTwo: `1. HSAs are owned by the individual meaning the account remains with them regardless of changes in 
    employment or health insurance plans. This provides account owners with greater control and flexibility over their healthcare 
    savings. Often, employers will allow you to invest in mutual funds or low-cost ETFs. If moved into your personal account in the 
    future, you can invest just like you would your IRA.  `,
    listTwoHeaderTwo: `2. Unlike flexible spending accounts (FSAs) that have a “use it or lose it” provision, HSAs allow individuals 
    to roll over unused funds from year to year.`,
    listThreeHeaderTwo: `Health Savings accounts offer a triple tax advantage. Contributions made to an HSA account are tax deductible, 
    meaning they reduce an individual’s taxable income for that year, the funds grow tax-deferred, and withdrawals are tax-free if used 
    for qualified medical expenses. The power of these accounts can be shown when young individuals invest in the stock market and combine 
    these savings into a large pool of money dedicated to healthcare in retirement.`,
    headerThree: 'What Happens if You Don’t Use It for Qualified Medical Expenses',
    descriptionHeaderThree: `If you take a withdrawal for non-qualified medical expenses prior to the age of 65, you will incur a 20% 
    penalty and pay income taxes on the amount that is not qualified. After the age of 65, you can use the fund to pay for anything 
    without a penalty, but you will pay income taxes on the distribution. `,
    headerFour: 'How Much Can I Contribute?',
    descriptionheaderFour: `The HSA contribution limit in 2023 is $3,850 for an individual or $7,750 for a family with a catch-up 
    contribution of $1,000 for those over 55 years old. The IRS counts spouses as one tax unit, so if you and your spouse are working, 
    the total amount you can put in together is $7,750. You want to be mindful of how much you put into your plans, as going over can 
    create a 6% excise tax on excess contributions. Often, employers will encourage you to choose the high deductible option by giving 
    you free HSA dollars to start your account each year.`,
    headerFive: 'Who Would Benefit from This Strategy?',
    descriptionheaderFive: `Younger families that are fairly healthy and can afford to pay out of pocket on their healthcare expenses. 
    However, those who have the patience to put money away for healthcare needs many years into the future and can allow the market 
    to grow their investments will benefit the most from HSAs. I often advise clients to pay out of pocket from their savings account 
    each year, while investing in their HSA account. `,
    headerSix: `Who Would Not Benefit from This Strategy?`,
    descriptionheaderSix: `One of the key features is that the strategy forces you to have a high deductible plan. If you can calculate 
    your healthcare costs each year and are burdened with higher healthcare needs, this strategy be the best course of action. In this case,
     it might be better to have a lower deductible plan that has less out of pocket expenses.`,
    headerSeven: 'The Shoebox Strategy',
    descheaderSeven: [
      {
        headerSevenPrg:`This method is called the shoebox strategy because of the long-ago practice of putting old receipts into a 
        shoebox in case you ever needed it. The same goes for this digital shoebox strategy for your HSA account. By keeping your old qualified 
        medical expense receipts, you can take a tax-free distribution at any point in the future for that same amount.  The IRS <a href='https://www.irs.gov/irb/2004-33_IRB#NOT-2004-50'>clarified here </a>
        that any distribution from an HSA in the current year can be used to pay or reimburse expenses incurred in any prior year if the expenses 
        were incurred after the HSA was established.`
      },
      {
        headerSevenPrg:`For practical reasons, I recommend a digital version of a shoebox (USB drive or dedicated folder in an external 
          hard drive) where you can keep every qualified medical receipt for the future. This would allow you to take tax-free withdrawals 
          at any point in the future. It is important you take meticulous notes about the receipts and any distributions.`
      },
      {
        headerSevenPrg:`There are several reasons why you want to keep diligent record keeping that is particularly important when it 
        comes to inheriting these accounts. Spouses will receive all the benefits of the account ownership and can make tax-free withdrawals 
        to pay for qualified medical expenses as if it were their own account. If someone other than a spouse inherits the account, the 
        account ceases to be an HSA on the date of the account holder’s death and they are forced to pay ordinary income taxes at their 
        own tax bracket.`
      },
      {
        headerSevenPrg:`When advising clients on this strategy, I maintain that slowly winding down an HSA through retirement is the right 
        move, because it only remains a triple tax-free advantage when you and your spouse fully utilize the account. Furthermore, if these 
        are inherited by non-spouse beneficiaries, you may accidentally be moving them into higher tax brackets as they are forced to realize
         income. However, any portion of an inherited HSA balance used to pay for outstanding medical expenses of the account owner within 
         one year of the date of death is nontaxable to the non-spouse beneficiary.`
      },
      {
        headerSevenPrg:`The Shoebox HSA strategy is an effective method to grow a portion of your wealth dedicated to healthcare needs 
        in the future. It is important to note that you will need to invest this in the stock market if you want to see exponential growth 
        over an extended period. There are many factors to consider, so if you have questions, feel free to contact us, and we will be happy 
        to talk through your specific situation. `
      },
    ]
,

  };

  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  constructor(private url:LocationStrategy) { }

  ngOnInit(): void {
    if(this.url.path() == '/blog/hsa-shoebox-strategy') {
      this.blogSpecificPage = true;
      this.isReadMore = false;
    }
  }

  // shareOnLinkedIn() {
  //   window.open(`https://www.linkedin.com/shareArticle?url=https://servetwealth.com/#/blog/hsa-shoebox-strategy&title=${this.blogFiveContent.title}&summary=${this.blogFiveContent.description}`, 'sharer');
  // }

}
