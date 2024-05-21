import { Component } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-blog-twelve',
  templateUrl: './blog-twelve.component.html',
  styleUrls: ['./blog-twelve.component.scss'],
})
export class BlogTwelveComponent {
  blogSpecificPage: boolean = false;
  blogContent = {
    date: 'May 16, 2024',
    title: 'What you need to know about the Inheritance Tax in New Jersey',
    sections: [
      {
        title: 'Is there a New Jersey estate tax in 2024?',
        items: [
          'As of 2018, there is no longer a New Jersey estate tax.  This can be confusing because there is a federal estate tax, but the state level is no longer relevant.  ',
        ],
      },
      {
        title:
          'But there is a New Jersey inheritance tax.  What is an inheritance tax?',
        items: [
          "An inheritance tax requires beneficiaries to pay taxes on assets and property they inherit from a deceased person. It is often confused with the term “estate tax,” but they are distinct. An estate tax is levied on the right to transfer ownership of the entire estate to heirs upon death, primarily based on the estate's total value.",
          'In contrast, an inheritance tax is paid by the individual beneficiaries and depends on the relationship between the deceased and the recipient, with different rates for different groups of heirs.  Essentially, there is a new jersey inheritance tax that can be transferred to the beneficiary. Understanding these distinctions can help clarify potential tax obligations for those involved in managing or inheriting assets.',
        ],
      },

      {
        title: 'New Jersey Classes and taxes',
        items: [
          'To help determine who has to pay an inheritance tax, New Jersey has divided those that receive an inheritance to different classes.  These different classes have different exemptions and taxes so it is important to understand the relationships to the deceased.',
          'Class A: Surviving spouses, parents, children, grandchildren, etc are exempt from the Inheritance Tax.  Also included in this class are domestic partners and legally adopted child of the decedent.',
          'Class B:  No longer relevant:',
          'Class C:  Brothers and sisters are subject to an inheritance tax in New Jersey after built-in exemptions.  This also includes half-brothers half-sisters, wife/civil union partner or widow of the surviving civil union partner.',
          'Here is a table of what that inheritance tax will look like for Class C.',
        ],
      },
    ],
    secondSections: [
      {
        title: 'Real Life Examples and Potential Tax Traps',
        items: [
          'The first thing you can do is to determine who pays the inheritance tax.  For those that have created a will directing money at your death, there are a few ways of looking at the inheritance tax.  While it is still your estate that files the forms to New Jersey, you can decide who will pay the inheritance tax if you have assets going to non Class A inheritors.  You can have the tax paid out of the estate before hand or reduce the amount that is received by the inheritors.  ',
          'Let’s use the example of Daniel, who passes away with 1 million dollars in his estate looking at two possible different outcomes.  Daniel has a son named Ben and a nephew named Mark that he vowed to always look after.  ',
          'His will states that his nephew Mark will receive $100,000, with the residual amount going to his son Ben, which happens to be $900,000.  In this example the will doesn’t mention the inheritance tax which means it is paid for by his nephew.  The total inheritance tax would be $15,000 as seen in the class D table which is 15% of $100,000.  If the will is silent as to who pays the inheritance tax, it will default to his nephew.  His nephew will then receive $85,000.  New Jersey will receive $15,000 and Ben will receive $900,000.',
          'Now lets look at if the will stated that he wanted his residual estate to pay for the inheritance tax.  In this example, the tax is still the same.  What differs is who pays the tax.  His nephew Mark would receive the full $100,000, New Jersey would receive $15,000 and his son Ben would receive $885,000.  This may or may not be what Daniel had anticipated, but specifically identifying who pays the tax would leave little room for doubt as to the fairness of the inheritance and the intention of what Daniel wanted to leave.',
          'What may further complicate the matter is if the majority of the assets were in a 401(k). Using a different example, let’s say Joanne has a million dollar 401(k) that goes to 90% her daughter and 10% going to her favorite niece.  Because the 401(k) is transferred directly to the beneficiaries directly, they are responsible for paying the inheritance tax.  The daughter would owe no money on her inheritance as she is a Class A category.  The niece would then owe $15,000.  But, here is the problem.  Her portion is in a retirement account.  So she would need to pay the estate out of her own pocket for that inheritance tax, or utilize her portion of the retirement account to pay the inheritance tax.  Doing that compounds the tax because there will be federal and state income taxes due on her personal tax return the following year which may or may not have been an intended consequence.  ',
          'Further think through what happens if Class C or D inherit illiquid investments like real estate.  This could be an issue if the beneficiary has no extra cash to pay for the tax.  With real estate prices the way they are, this could leave a huge liability for that person.  They may be forced to liquidate the property so that they could pay the tax. ',
        ],
      },
      {
        title: 'Executors Job',
        items: [
          'New Jersey law says that executors have liability to make sure that the inheritance taxes are paid.  They have 8 months to file the necessary forms.  The best way to proceed with a seamless process is to communicate with everyone involved as quickly as possible.',
          'But what if the inheritors have a tax liability and are unable or unwilling to pay the tax?  This is where there are a few options, none of them being ideal.  The executor can pay the tax personally then sue the inheritor to pay the taxes back.  Or the executor can post a bond for the taxes owed.  This solution takes the executor off the hook for the tax, but it ties up the estate until the state can settle the balance.  The tax is a lien on all property for fifteen years unless paid sooner or secured by an acceptable bond. Interest accrues on unpaid taxes at the rate of 10% per annum.',
          'Processing of forms to the state usually take several months and they are quoted on their website as having about a 40-50% audit rate.',
        ],
      },

      {
        title: 'How to avoid the inheritance tax',
        items: [
          'Life insurance proceeds are exempt from the New Jersey inheritance tax.  If an estate has brokerage assets going to a distant relative and life insurance going to a family, a better way to give would be to switch who gets what with the distant relative getting that same portion of the life insurance proceed without the tax.',
          'One way to avoid that tax is to gift money during your life.  The state of New Jersey does not impose a gift tax, but you may still need to consider the federal gift tax and yearly exemption of $18,000.  There is a 3 year lookback for NJ that may bring those gifts back into the estate for inheritance tax reasons.',
          'Another option is to move out of New Jersey to a state that doesn’t tax an estate or inheritance.  This is not always an ideal option, but it is one none the less.  ',
        ],
      },
      {
        title: 'Federal Estate Tax',
        items: [
          'Remember that the New Jersey Inheritance tax is a separate tax from the Federal Estate Tax.  If you want a further look into the Federal Estate Tax, you can see the blog written here.',
          'The rules around New Jersey inheritance and tax planning are complex and you should work with an advisor and an estate planner who can guide you through your particular situations.',
        ],
      },
    ],
  };

  isSubItem(item: any): item is { subTitle: string; subItems: string[] } {
    return typeof item !== 'string' && 'subTitle' in item && 'subItems' in item;
  }

  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  constructor(private url: LocationStrategy) {}

  ngOnInit(): void {
    if (this.url.path() == '/blog/nj-inheritance-tax') {
      this.blogSpecificPage = true;
      this.isReadMore = false;
    }
  }
}
