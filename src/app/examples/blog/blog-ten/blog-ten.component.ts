import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-blog-ten',
  templateUrl: './blog-ten.component.html',
  styleUrls: ['./blog-ten.component.scss']
})
export class BlogTenComponent implements OnInit {
  blogSpecificPage: boolean = false;

  blogTenContent = {
    date: 'Apr 23, 2024',
    title: "A Young Family's Close Call: Navigating Group Insurance Through Work vs An Individual Term Policy",
    paragraphs: [
      {
        paragraph: "At 32, Sarah and Michael had achieved their dream: successful careers, a charming new home, a healthy toddler, and a bright future ahead. Yet, an unforeseen event was about to change their lives when Michael got sick.  Both had relied on basic group plan life insurance through work, and they hadn't fully grasped the limitations until a sudden illness struck Michael, leaving them facing staggering medical bills and an uncertain future."
      },
      {
        paragraph: `This near disaster became a wake-up call.  With Michael making a full recovery, they were determined to protect their young family. They embarked on a journey of research and education and soon discovered the stark contrast between their existing group plans and the flexibility and comprehensive coverage offered by individual policies.`,
      },
      {
        paragraph: "Here is what they found out:"
      }
    ],
    sections: [
      {
        title: "Group Life Insurance benefits:",
        items: [
          "Convenience: Typically, all employees with these benefits are automatically enrolled to at least a base amount of coverage which can vary by plan and employer.  There is no need to do anything extra.",
          "Tax Advantages: Employers are allowed to provide up to $50,000 of tax-free group life insurance coverage as a benefit.  Anything that the employer adds above that amount is deemed a taxable benefit to the employee and is included in the employees W2 income.",
          "No medical underwriting: Another thing that is positive about group life insurance is that participants are normally not required to go through an underwriting process to get coverage. All eligible employees are automatically covered. This can be a big benefit for someone with pre-existing conditions that might cause insurance to be expensive, or even not approved outside of a group plan."
        ]
      },
      {
        title: "Group life insurance limitations:",
        items: [
          "Job Dependency: One of the biggest negatives is that your insurance is tied to your employment. This meant losing your safety net if you lost your job. Often times the people that need it the most end up sick and out of work for months or years before passing away, meaning they would have lost their coverage and any insurance payouts that would have went to their family.",
          "Limited Coverage Amounts: Group insurance also may not give you enough coverage that your family needs and would require additional underwriting to get a bigger benefit. So the idea of having to go through underwriting and still have it tied to work is an inconvenience for many people.",
          "Potential Cost Increases: While costs may be initially cheaper, premiums may increase as you age, impacting affordability over time.",
          "Other Considerations:  What they also realized is that many people confuse traditional life insurance with accidental death & Dismemberment.  AD&D policies only cover deaths or severe injuries resulting from an accident, rather than natural disease states like cancer or heart disease.  These types of policies typically have fine print that needs to be reviewed." 
        ]
      },
      {
        title: "Individual Term Life Insurance Benefits:",
        items: [
          "Customization: One of the main benefits is that it is completely customizable to fit your family’s needs. You can look at different years that you need it to last meaning some families might need life insurance for the next 30 years, while other families might need coverage for the next 10 or 20 years. The plans are also customizable by dollar amount. Some families might need as little as $100,000 to go on top of their benefit while others might need $5,000,000 or above. The amount is completely flexible as you get to decide the appropriate amount for your family. A rule of thumb to consider is that plans get more expensive with the more insurance you get and the longer you are covered.",
          "Fixed Premiums: Many term policies offer fixed premiums so you know exactly how much you are going to pay each year providing predictable budgeting.",
          "Conversion options: Some policies allow you to convert your term life insurance into permanent insurance, offering cash value accumulation.",
          "Portability: Unlike group plans, individual policies stay with you regardless of job changes, providing long-term security. This policy is yours to keep, no matter what happens in your life or health events happen."
        ]
      },
      {
        title: "The types of Term Policies Available:",
        items: [
          "Level-Premium policy: This type of policy means the amount you pay each year is fixed and will not change.",
          "Yearly Renewable Term Policy: This type of policy guarantees coverage over a certain time frame, but the cost will go up each year that you renew the policy. This might be a good option for someone who wants cheaper insurance premiums now and knows they will most likely cancel or convert the policy at some point in the future.",
          "Decreasing Term Policies: This type of policy has a death benefit that declines each year. The policy holder pays a fixed, level premium for the duration of the policy. One might utilize this type of policy if they had a mortgage that they wanted to match as the mortgage amount went down over time."
        ]
      },
      {
        title: "Potential Downsides of Term Life Insurance:",
        items: [
          "Medical Underwriting: One of the downsides of getting your own policy is that you have to go through medical underwriting. You are not guaranteed to be offered a policy. The insurance company will consider factors like your age, gender, and health to determine if they will offer you a policy. They may offer you a policy that is significantly higher than you can afford to pay. You may have been born with a pre-existing heart condition, or had cancer. These are often times not deal breakers to the insurance carrier, but the costs may become so high that you are unable to afford the premiums or it doesn’t make sense to get the coverage.",
          "No Cash Value: Unlike permanent policies, term insurance has no surrender value or cash value. You may end up paying for it your entire life without seeing any benefits.",
          "Other factors: Another downside is that what you are initially quotes for cost may be drastically different than what you are offered. Insurance companies look into your medical records and sometimes people may not think their small health concern is not a big deal when the insurance company thinks a different way.",
          "Life happens and you may think you do not need life insurance now, but what happens when you need it later and are uninsurable? It may be beneficial to lock in your health and age to guarantee cheaper rates over your lifetime."
        ]
      },
      {
        title: "How much life insurance do you need?:",
        items: [
          "Needs based analysis: This means determining what all your needs are for the foreseeable future to determine coverage amount. This means looking at mortgage payments, college expenses, childcare, and basic expenses to make as accurate coverage as we can. It considers that you may not need childcare now, but if there is one single parent working, things may look different in the future.",
          "Income Replacement: Another way of trying to determine coverage is getting 7x-10x your pretax salary. This is a generally an industry-wide accepted amount that will give your family enough coverage without being over insured and paying for unnecessary premiums that may never be needed."
        ]
      },
      {
        title: "The Impact of Sarah and Michael’s decision:",
        items: [
          "Sarah and Michael realized that the group life insurance policy offered through work wasn’t enough, nor did it provide the safety net if something were to happen again in the future. They are going to keep the $50,000 through work and get their own individual policies on top of that.",
          "Their decision wasn't just about finances; it was about regaining control and securing their family's future. The peace of mind they gained was invaluable, knowing that if something were to happen to either of them in the future, they would not be left unprepared."
        ]
      },
      {
        title: "Lessons Learned:",
        items: [
          "Sarah and Michael's story serves as a powerful reminder for families thinking about their own life insurance.  Here were their top things they learned:",
          "Don't rely solely on group life insurance: While convenient, its limitations can leave you exposed. Adding an individual policy often is the right way to blend a group insurance policy with an individual policy.",
          "Age: Younger applicants typically receive lower premiums compared to older applicants. Thinking about getting coverage when you are young and healthy can save considerable dollars later.",
          "Educate yourself: Research individual options and understand your specific needs. Everyone is going to have different needs. There are a lot of different ways to get insurance and many factors to consider.",
          "Seek professional guidance: Whether you’re starting a family or planning for retirement, getting professional help to understand the options is a great first step. Make sure you get advice from someone who is doing holistic planning around your situation.",
          "Proactive planning is key: Don't wait for a crisis to address your life insurance needs."
        ]
      },
      {
        title: "Conclusion",
        items: [
          "Servet Wealth Management offers comprehensive insurance services aimed at tailoring coverage to suit your family's unique needs. With our expertise, we've guided numerous families, just like yours, through various scenarios to determine the optimal coverage amount. We're committed to securing the best coverage for you at the most competitive premiums. As an independent advisor, we have access to give you multiple term life insurance quotes through multiple carriers, ensuring you receive options tailored to your requirements.",
          "Reach out to us by clicking on the \"Contact Us\" button above to request a free quote and begin safeguarding your family's future today."
        ]
      }
    ]

  };

  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  constructor(private url:LocationStrategy) { }

  ngOnInit(): void {
    if(this.url.path() == '/blog/life-insurance') {
      this.blogSpecificPage = true;
      this.isReadMore = false;
    }
  }

}
