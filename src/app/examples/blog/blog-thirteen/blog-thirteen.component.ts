import { LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-thirteen',
  templateUrl: './blog-thirteen.component.html',
  styleUrls: ['./blog-thirteen.component.scss']
})
export class BlogThirteenComponent {
  blogSpecificPage: boolean = false;


  blogContent = {
    date: 'June 18, 2024',
    title: "NYC Millennials, Here’s What You Need in a Financial Advisor",
    author: "Nathan Lee, CFP®, BFA",
    paragraphs: [
      {
        paragraph: "In today's digital age, information is literally at our fingertips. From buying a home to managing investments, countless resources are available online."
      },
      {
        paragraph: "So, why should you hire a financial advisor when you can look up any needed information?"
      },
      {
        paragraph: "You’re smart and successful, and you certainly have the tools to do it yourself. "
      },
      {
        paragraph: "The truth is, the best financial advisors in NYC add value because they know the New York City lifestyle and can save you time and effort by bringing a comprehensive understanding of your needs. They can offer you a clear, unmuddied view of your financial situation alongside personalized advice, strategic planning, and long-term forecasting."
      },
      {
        paragraph: "In addition to investment advice and management, a financial advisor based in New York City can help you with:"
      }
    ],
    sections: [
      {
        title: "But First, Financial Advisors Add Emotional Balance",
        items: [
          "Financial decisions are inherently emotional. Whether it’s the thrill of buying a new home or the stress of balancing retirement savings with saving for your children's education, emotions can cloud judgment and lead to impulsive decisions.",
          "A financial advisor in New York can provide an objective perspective, helping you make rational choices that align with your financial goals and core values.",
          "The financial landscape is vast and complex. From understanding different investment vehicles to navigating tax laws, there’s much to consider. Even if you work in finance yourself, applying your knowledge to your own financial situation is easier said than done. (I’ve known many CPAs who struggle to manage their own finances. No judgment here!)",
          "Just like you would hire an expert mechanic to maintain your car or a qualified doctor to maintain your physical health, a financial advisor can be your partner in planning, strategizing, and maintaining the financial decisions that are most personal to you.",
        ]
      },
      {
        title: "Planning to Finance Home Ownership in New York City",
        items: [
          "Buying a home in any city — but especially in New York — is a significant milestone and often the largest financial commitment one makes. While online resources can guide you through the basics, a financial advisor in New York provides tailored advice based on your unique situation. ",
          "And in New York, you have unique home-buying options. For example, would a condo or a co-op be the better choice for NYC living? ",
        ]
      },
    ]
  }

  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  constructor(private url:LocationStrategy) { }

  ngOnInit(): void {
    if(this.url.path() == '/blog/nyc-millennials') {
      this.blogSpecificPage = true;
      this.isReadMore = false;
    }
  }
  

}
