import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-blog-one',
  templateUrl: './blog-one.component.html',
  styleUrls: ['./blog-one.component.scss'],
})
export class BlogOneComponent implements OnInit {
  isReadMore = true;
  blogSpecificPage: boolean = false;

  blogOneContent = {
    date: 'January 1,2023',
    title:
      ' Setting Yourself Up for Financial Success; New Year, New Money Goals!',
    description:
      `There is something about the expectation of a new year that inspires imaginative and loftier goals. 
      Though I am not particularly fond of making new year’s resolutions, I am not surprised that goal setting 
      for the new year often involves setting our sights on new habits, milestones, or accomplishments. 
      From exercising regularly to spending more time with family – the goals that we set in anticipation of a new year 
      are often more than a box to check on a list, but a desire to change certain aspects of our lives. So, it is not surprising 
      that most people focus on improving their financial standing for the new year. Here at Servet Wealth Management, 
      we are elated that so many people use this time to gain clarity on their financial goals for the new year, and we aim to 
      make this process easier by creating a space for financial advisement and insights to be accessible. 
      While helping clients with increasingly complex financial planning scenarios for over a decade, I have 
      noticed that the most recurring question is “How should I get started?” If you ask this question about your financial 
      journey, my aim is to share insights and stories that will help you make informed financial decisions. `,
    secondParagraph:
      'Here are some great ways to start the year if you are thinking about where to start in your personal finances for 2023:',
    list: [
      {
        listHeader: '1. Review Your Budget',
        listDescription: `The first step in financial organization is to take stock of where
          you currently stand. Review your income, expenses, and savings to
          assess your present financial situation. Are you currently saving
          money each month? Do you have outstanding debt? Do you track your
          spending? How can your spending be improved so that you can hit your
          financial goals? Answering these questions will help you create a
          realistic budget for the upcoming year.`,
      },
      {
        listHeader: '2. Set Financial Goals',
        listDescription: "Now that you are aware of your financial standing, you move forward with setting your goals. Do you want to pay down your credit card?Save for a downpayment on a home? Build an emergency fund? Whatever your goals may be, make sure they are <span class=\"smart-decoration\">SMART: Specific, Measurable, Attainable, Relevant, and Time-bound.</span> SMART goals incorporate these criteria to keep you on track and increase your chances of achieving your goal."
      },
      {
        listHeader: '3. Create a Plan',
        listDescription: `With your budget and goals in place, it is time to create a plan
        based on your financial standing. If you are struggling with debt,
        it would be in your best interest to cut costs. Some methods of
        doing this include canceling subscriptions and memberships or even
        eating out less often. If you would like to invest more, start with
        automating money going into your 401(k) or start a monthly transfer
        into a savings or investment account.`
      },
      {
        listHeader: '4. Stay on Track',
        listDescription: `It is important to remain disciplined with your financial plan even
        though you may be tempted to spend frivolously. To stay on track,
        habitually review your plan and adjust when necessary. Consider
        recruiting an accountability partner, having someone to remind you
        of your financial goals will push you to be consistent. Also,
        remember to celebrate the small wins as you achieve your set goals.`
      },
      {
        listHeader: '5. Build an Emergency Fund',
        listDescription: `An emergency fund is necessary in preparation for a rainy day.
        Emergency funds supply financial security in case of unexpected
        expenses such as car repairs or medical bills. It is a promising
        idea to have a minimum of 3-6 months' worth of living expenses put
        aside. With the present rise in interest rates, moving your
        emergency funds into a high-yield savings account would be
        beneficial. Keeping your emergency fund in a separate high-yield
        savings account allows you to easily keep track of your money while
        earning extra interest on your deposits.`
      },
      {
        listHeader: '6. Review your insurance coverage',
        listDescription: `It is beneficial to review your insurance coverage annually to
        ensure that you are appropriately protected. You should also review
        your coverage after making a major purchase or a significant life
        event, such as getting married, buying a home, or receiving an
        inheritance. These life-changing events are considered
        insurance-qualifying, so it is important to make sure your coverage
        is up to date to protect the people and things that matter most to
        you.`
      },
      {
        listHeader: '7. Get and stay organized',
        listDescription: `Having a dedicated place to track your expenses and tax information
        can give you an exact picture of where your money is being
        distributed. From spreadsheets to mobile apps there are multiple
        methods of tracking expenses for you to choose from. Regardless of
        your chosen tracking method, you must refer to your transaction
        history easily and reliably. Aim to log your expenses daily, weekly,
        or biweekly.`
      },
      {
        listHeader: '8. Seek professional advice',
        listDescription: `If you are unsure of the steps needed to begin your financial
        journey, seeking a financial planner can be helpful. Servet Wealth
        Management is more than happy to offer our services by reviewing
        your investment strategies, retirement planning, insurance, and
        other financial matters so you can achieve your financial goals with
        confidence.`
      }
    ],
  };

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  constructor(private url:LocationStrategy) {}

  ngOnInit(): void {
    if(this.url.path() == '/blog/new-year-new-goals') {
      this.blogSpecificPage = true;
      this.isReadMore = false;
    }
  }
}
