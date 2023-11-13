import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-blog-eight',
  templateUrl: './blog-eight.component.html',
  styleUrls: ['./blog-eight.component.scss'],
})
export class BlogEightComponent implements OnInit {
  blogSpecificPage: boolean = false;
  isReadMore = true;

  blogEightContent = {
    date: 'Nov 5, 2023',
    title: 'Charitable Giving Through a Donor-Advised Fund (DAF)',
    description: `In today's world, philanthropy and charitable giving have become increasingly important 
    to many individuals and families. Whether you want to support a specific cause, make a positive impact 
    on your community, or leave a lasting legacy, there are various ways to give back. One powerful tool 
    that's gaining popularity is the Donor-Advised Fund (DAF). In this blog, we'll explore what a 
    Donor-Advised Fund is, its benefits, and how you can effectively use it to support causes you care about.`,
    headerWhatIsDAF: 'What Is a Donor-Advised Fund (DAF)?',
    pgfWhatIsDAF: `A Donor-Advised Fund (DAF) is a tax-advantaged investment account designed for charitable 
    giving. Think of it as a charitable savings account that allows you to contribute money, securities, or 
    other assets, receive an immediate tax deduction, and then recommend grants to your favorite nonprofits 
    over time. DAFs are typically administered by sponsoring organizations, including community foundations, 
    financial institutions, and specialized DAF providers.`,
    hedaerBenefitDAF: 'Benefits of Using a DAF',
    listOfBenefitsDAF: [
      {
        listHeader: 'Immediate Tax Deduction: ',
        listItem: `When you contribute to a DAF, you can claim an immediate tax deduction for the full amount 
        of your contribution, up to certain IRS limits. This can help reduce your taxable income in the year 
        of the contribution. `,
      },
      {
        listHeader: 'Simplified Giving: ',
        listItem: `A DAF streamlines the process of charitable giving. You can make contributions to the fund 
        whenever it's most advantageous for your tax situation and then decide on the timing and recipients of 
        your grants later.`
      },
      {
        listHeader: 'Privacy and Anonymity: ',
        listItem: `DAFs offer a level of privacy and anonymity. You can choose to remain anonymous, or you can 
        use your fund's name for grant recommendations, maintaining your personal or family's privacy.`
      },
      {
        listHeader: 'Investment Growth: ',
        listItem: `The funds in your DAF can be invested and grow tax-free, potentially allowing you to make 
        even larger grants to your chosen charities in the future.`
      },
      {
        listHeader: 'Legacy Giving: ',
        listItem: `DAFs are an excellent tool for those looking to create a long-lasting charitable legacy. 
        You can involve your family in the grant-making process, and the fund can continue to exist beyond your 
        lifetime, supporting causes you care about for generations.`
      },
    ],
    hedaerHowUseDAF: 'How to Use Your Donor-Advised Fund Effectively',
    listOfHowUseDAF: [
      {
        listHeader: 'Contribute Regularly: ',
        listItem: `Make contributions to your DAF on a regular basis, especially during years when your income 
        is higher, and you'll benefit more from tax deductions.`,
      },
      {
        listHeader: 'Set Clear Philanthropic Goals: ',
        listItem: `Define your philanthropic goals and priorities. Consider what causes are most meaningful to 
        you, and how you want to make an impact. It's essential to have a clear sense of purpose when recommending grants.`
      },
      {
        listHeader: 'Research Charities: ',
        listItem: `Research and evaluate charitable organizations carefully before making grant recommendations. Look at 
        their financial transparency, impact, and alignment with your values.  Your charity should be a 501(c)3 public charity.`
      },
      {
        listHeader: 'Leverage Investment Growth: ',
        listItem: `Many DAFs offer investment options. Consider investing your contributions, as the potential returns can 
        increase the funds available for grant-making.`
      },
      {
        listHeader: 'Involve Your Family: ',
        listItem: `If you have a family DAF, involve your loved ones in the grant-making process. It's an excellent opportunity 
        to instill the values of generosity and philanthropy in the next generation.  Many families choose to have family 
        governance in how they give to charitable causes.`
      },
      {
        listHeader: 'Plan for the Long Term: ',
        listItem: `Think about the legacy you want to leave through your DAF. It's not just a tool for immediate giving but also 
        for creating a lasting impact.`
      },
    ],
    descriptionTwo: `In conclusion, Donor-Advised Funds offer a flexible and powerful way to engage in philanthropy 
    and support the causes you care about. By contributing to a DAF, you not only receive immediate tax benefits but 
    also have the opportunity to make a lasting difference in the world. Whether you're an individual or part of a 
    family, a DAF can be a vital tool for creating a positive impact and leaving a meaningful legacy through charitable 
    giving. Consider exploring this option and make a difference in your community and beyond.`
  };
  constructor(private url: LocationStrategy) {}

  ngOnInit(): void {
    if (this.url.path() == '/blog/donor-advised-fund') {
      this.blogSpecificPage = true;
      this.isReadMore = false;
    }
  }

  showText() {
    this.isReadMore = !this.isReadMore;
  }
}
