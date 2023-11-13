import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-blog-three',
  templateUrl: './blog-three.component.html',
  styleUrls: ['./blog-three.component.scss']
})
export class BlogThreeComponent implements OnInit {
  isReadMore = true;
  blogSpecificPage: boolean = false;

  blogThreeContent = {
    date: 'March 3, 2023',
    title: 'Navigating a Job transition',
    description:
      `Navigating a job transition can be emotionally and financially taxing. As someone who has personally 
      faced a financial transition period after leaving my position at Merrill Lynch to launch Servet Wealth 
      Management, I understand the challenges and stress that may come from a transitional period. With investing 
      money into a new business and my wife being unemployed at the time, I had to adopt a strategic approach to 
      navigate that uncertain financial period. By developing a financial strategy, it is possible to navigate an 
      unpredictable period and regain financial stability. Let’s explore a few practical steps you can implement to 
      help manage your finances while going through a job transition: `,
    sections: [
      {
        sectionHeader: 'Assess Your Current Financial Situation:',
        sectionDescription: `The most crucial step to consider while experiencing a job transition is conducting 
          a comprehensive review of your current financial standing. Using free budgeting tools such as Mint or 
          PocketGuard to assess your expenses will provide you with a clear understanding of how long your finances 
          can stretch and what should be adjusted. By leveraging these tools to your advantage, you can gain better 
          control over your spending, track progress toward your financial goals, and make more informed decisions 
          about your money to prioritize your needs over wants. After analyzing your financial situation, it’s crucial 
          to develop a revised budget by identifying essential expenses such as housing, utilities, groceries, and healthcare. 
          Assessing your finances will help you allocate your resources wisely and make necessary adjustments to stretch your funds.`,
      },
      {
        sectionHeader: 'Explore Unemployment Benefits:',
        sectionDescription: "Familiarize yourself with unemployment benefits in your state. <a href='https://www.dol.gov/general/topic/unemployment-insurance'>The U.S. Department of Labor</a> offers unemployment insurance programs that provide monetary help to eligible workers who become unemployed through no fault of their own. Because each state supports its own program, you’ll need to contact your state’s unemployment insurance program either in person, by telephone, or online to register and file a claim. Note that eligibility requirements, benefits offered, and the number of times you’ll be able to receive benefits vary by state. "
      },
      {
        sectionHeader: 'Look into Health Insurance Options:',
        sectionDescription: "Becoming unemployed often means losing your employer-sponsored health insurance. Losing access to your employer’s medical insurance plan is typically considered a qualifying life event and you’ll have 60 days to join a spouse’s plan or apply for COBRA. Another option is to keep your health insurance coverage through your former employer using COBRA. Personally, COBRA saved me thousands of dollars throughout my financial transitional period. While COBRA is a legitimate option, it is important to understand the costs, coverage, and enrollment deadlines to make an informed decision that meets your healthcare and financial needs while avoiding financial strain. In working with many clients over the years, I have found that COBRA has not always been the best choice for them. If you find that using COBRA is not the best course of action for you, <a href='https://www.healthcare.gov/'> healthcare.gov </a> supplies health insurance resources that may be more practical. Understanding your healthcare needs is often a big cost surprise for those looking at their options for the first time."
      },
      {
        sectionHeader: 'Explore Alternative Sources of Income:',
        sectionDescription: `Because finding a full-time position can be time consuming, consider exploring alternative sources 
        of income to supplement your savings and keep you afloat. Until you can land the job that’s right for you, consider 
        part-time or gig work to help bridge your financial gap. Freelancing, consulting, or part-time work, can supply some 
        financial stability during your job search. Leverage your skills and network to identify potential income streams that 
        align with your expertise and interests.`
      },
      {
        sectionHeader: 'Understand It Will All Work Out in the End',
        sectionDescription: `Becoming unemployed or going through a job transition may feel like a major setback, but it’s important 
        to remember that your employment status doesn't define your worth or abilities. A job transition is a temporary period that 
        presents an opportunity for growth and new beginnings. Take this time to reflect on your skills, passions, and aspirations. 
        Explore different avenues, reevaluate your career goals, consider what you genuinely want out of your professional life, and 
        don't hesitate to reach out to your network of family and friends for support. Stay focused, stay motivated, and keep moving 
        forward!`
      }
    ],
  };


  showText() {
    this.isReadMore = !this.isReadMore;
  }
  constructor(private url:LocationStrategy) { }

  ngOnInit(): void {
    if(this.url.path() == '/blog/job-transition') {
      this.blogSpecificPage = true;
      this.isReadMore = false;
    }
  }

}
