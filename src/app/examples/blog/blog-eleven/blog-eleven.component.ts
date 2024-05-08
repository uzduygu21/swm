import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-eleven',
  templateUrl: './blog-eleven.component.html',
  styleUrls: ['./blog-eleven.component.scss']
})
export class BlogElevenComponent implements OnInit {
  blogSpecificPage: boolean = false;

  blogContent = {
    date: 'May 7, 2024',
    title: "Looking Ahead to 2026 and Beyond: High-Net-Worth and Ultra-High-Net-Worth Estate Planning",
    paragraphs: [
      {
        paragraph: "On January 1, 2026, current estate tax exemptions are scheduled to expire and return to 2017 levels — about half the levels they’re currently at. "
      },
      {
        paragraph: `For high-net-worth and ultra-high-net-worth estates, this means estate planning is that much more critical, as there are essentially only two ways to lock in the higher exemptions: dying or making a permanent gift of assets before January 1, 2026.`,
      },
      {
        paragraph: "Of course, neither of these options are particularly attractive. "
      },
      {
        paragraph: "Fortunately, there are strategies high-net-worth families can implement to reduce the impact of estate taxes on their future heirs, but it’s important to act sooner rather than later."
      }
    ],
    sections: [
      {
        title: "What Is a High-Net-Worth Estate?",
        items: [
          "Specific definitions for high-net-worth and ultra-high-net-worth estates vary. For our purposes, we’re going to consider any estate valued above $7 million for an individual, or $14 million for a married couple, to be a high-net-worth estate and thus in need of high-net-worth estate planning. ",
          "(These thresholds align with the projected estate tax exemptions we’re going to discuss.) ",
          "On January 1, 2026 — barring any legislative changes to lifetime estate and gift tax exemption levels between now and then — current estate tax exemption levels are scheduled to expire. This signals the end of the estate tax exemption provisions from the Tax Cuts and Jobs Act (TCJA) of 2017, triggering exemptions to revert to 2017 levels, adjusted for inflation. ",
          "As of now, it appears those exemptions will be around $7 million for an individual or $14 million for married couples. These exemptions are about half their current levels, which in 2024 are $13.61 million per individual and $27.22 million for a married couple.",
          "Any estates above or approaching the current level would not owe estate taxes if both individuals were to pass away in 2024 or 2025. But come 2026, an estate of this size could owe substantial estate taxes, presenting an undue burden on beneficiaries."
        ]
      },
      {
        title: "Why Estate Planning for Millionaires and Wealthy Families is Essential",
        items: [
          "There are two main reasons high-net-worth and ultra-high-net-worth families need estate planning: probate and taxes.",
          {
            subTitle: 'Avoiding probate',
            subItems: [
              "Families with an estate of any size can benefit from estate planning for the simple reason of avoiding probate (depending on the state you live in). You’ve probably heard it before, but probate is such an onerous process that it bears repeating. In the state of New York, probate can take up to two years or more depending on the value and complexity of the estate.",
              "Probate also exposes the entirety of the estate to prying eyes. Since the court system is open, an estate that passes through probate becomes accessible to the public, allowing any interested party to examine the details of your estate. This includes your nosy neighbors, creditors, and even financial predators.",
              "One final note on probate: Having a simple will does not avoid probate. While a will makes it easier to pass the assets through to the beneficiaries upon completion of the probate process, it does not prevent an estate from being subject to the court system. More sophisticated estate planning tools are required to avoid the probate process entirely. ",
            ]
          },
          {
            subTitle: "Minimizing taxes",
            subItems: [
              "The estate tax is also known as the lifetime gift tax or the death tax (since the tax is levied on a deceased person’s assets). With that said, there is a unified tax credit system that an individual can gift during their lifetime and pass on to heirs before gift or estate taxes apply. While both federal and state taxes may come into play here depending on the state you live in, we’re only going to focus on estate taxes at the federal level in this article.",
              "Given the looming expiration of estate tax exemption limits, many high-net-worth families need to revisit their estate plans to deal with the subsequent tax implications. Let’s look at an example to see the impacts of the coming expiration.",
              "Mark and Janine’s estate is currently valued at $25 million. If both spouses passed away today, their children would pay no estate taxes under the current estate tax exemption. However, if Mark and Janine passed away on January 1, 2026, their children would owe over $4.3 million in estate taxes on the estate valued at the same level.",
              "Not only does this level of tax liability eat into the value of the estate, but the tax bill itself may be very difficult to pay if the majority of the assets are held in illiquid investments such as private equity, real estate, a family business, or some combination of these. ",
              "In many cases, inheritors may be forced to quickly sell assets at below-market prices to raise liquidity within the nine months in which the tax bill is due. Not ideal."
            ]
          }
        ]
      },

      {
        title: "Looking to 2026 and Beyond: Tax Implications for High-Net-Worth Estates ",
        items: [
          "Notably, the current Presidential administration has tried to lower estate and lifetime gift tax exemptions even further on three separate occasions, as well as increase estate tax rates on estates valued over the exemption limit. ",
          "While no one can predict the future, it appears unlikely at this point that legislation will be passed to continue the current exemption limits prior to their expiration — or indeed, before the next election cycle. Unfortunately, we may not know exactly what future exemption limits and tax rates will look like until we know who will be in office in 2025 and beyond.",
          "For now, all we can do is make plans with the best information we have — and because many of the best estate planning strategies take time to implement, waiting to see what happens is not advisable.",
          {
            subTitle: 'Federal estate tax rates',
            subItems: [
              "The federal estate tax currently ranges from 18% to 40% depending on the value of the estate over the exemption in a given year. Assets inherited by the surviving spouse are not subject to estate taxes due to the unlimited marital deduction. It is only when both spouses have passed that the estate tax would come into play. ",
              "When valuing an estate, assets are taxed at their current value — or the value they are today — rather than the original value from when they were acquired. ",
              "Notably, the Federal government audited four times more estates than individual filings in 2020 due to the risk that assets may be intentionally undervalued. High-net-worth and ultra-high-net-worth estates may even be more likely to be audited because they tend to have more complex assets (which raises red flags in the eyes of the IRS).",
              "To see how estates valued above the exemption limit are currently taxed, take a look at the table below."
            ]
          }
        ]
      },
    ]

  };

  blogContentSecond = {
    sections: [
      {
        title: "1. Lock in the current gift tax exemption",
        items: [
          "For many families, the simplest solution may be to increase gifting now to take advantage of the current lifetime gift tax — or estate tax — exemption limit. In other words, begin the process of passing down your estate to your heirs before you pass away.",
          "While you certainly don’t want to jeopardize your own financial security, many parents and grandparents actually enjoy seeing their heirs benefit from their gifts while they’re still alive. Additionally, close-knit families also enjoy the chance to mentor, direct, and teach their heirs how to steward their gifts responsibly.",
          "One thing to keep in mind is that gifting assets will move the tax basis to the new owner, which means taxes would be levied at a later time when your kids or grandkids sell the assets you’ve gifted. For this reason, knowing which assets you want to gift now — and carefully considering their tax implications — is an important piece of the puzzle.",
        ]
      },
      {
        title: "2. Structure family businesses strategically",
        items: [
          "If you own a family business, you have additional options when it comes to passing down the business and its assets to your heirs. For instance, you can split the assets into voting and non-voting shares, which allows you to give away value without giving away control. (Different types of shares may also dividend out differently.)",
          "There are many ways to do this, but a common method involves creating a family LLC and/or a Family Limited Partnership. This strategy affords the family protection of its assets, while allowing the current business owner(s) to maintain control until they’re fully ready to pass down the baton."
        ]
      },
      {
        title: "3. Establish an Irrevocable Life Insurance Trust (ILIT)",
        items: [
          "An Irrevocable Life Insurance Trust (or ILIT) is a popular estate planning tool for tax purposes. An ILIT is a trust that holds and controls one or more life insurance policies for the insured, including how the proceeds are managed and distributed upon the insured’s death. Because this is an irrevocable trust, the assets placed into it generally cannot be altered or withdrawn by the grantor once it’s been created.",
          "With that said one of the greatest benefits of an ILIT is that it effectively shelters death benefits from estate taxes, providing beneficiaries with liquid assets to pay any estate taxes due upon the insured’s passing.",
          "Of course, to make use of an ILIT, you’ll need to have adequate life insurance. You can gift an existing policy into the ILIT; however, if the insured dies within three years of making the gift, the policy will be included in the estate for tax purposes. Otherwise, the ILIT can be funded with a new policy and the three-year “lookback” period would no longer apply.",
          "Purchasing the right amount of life insurance when you’re young and healthy — and well before a major health event such as a stroke or chronic illness diagnosis — can make life insurance more affordable and attainable."
        ]
      },
      {
        title: "4. Establish a Qualified Personal Residence Trust (QPRT)",
        items: [
          "A Qualified Personal Residence Trust (or QPRT) is a special kind of trust that allows the grantor to place up to two of their personal residences inside a trust so that the value of the properties is excluded from the estate tax exemption when transferred to an inheritor.",
          "While a QPRT does have some drawbacks, this estate planning tool may be particularly advantageous for younger grantors with personal residences of significantly high value."
        ]
      },
      {
        title: "5. Establish a Grantor Retained Annuity Trust (GRAT)",
        items: [
          "Grantor-retained annuity trusts (or GRATs) are best suited for assets that are expected to appreciate substantially. The grantor of a GRAT surrenders control of the assets inside the trust for the term of the trust, but receives regular annuity payments from the proceeds in the meantime. Upon passing of the grantor, the trustees will receive the appreciated assets completely free of gift or estate taxes. ",
          "GRATs are relatively flexible estate planning tools and can be great options to remove assets from contributing toward a family’s estate tax exemption. However, there are potential drawbacks to a GRAT and they’re not right for every family. It’s always best to consult with a financial advisor or estate planning attorney to determine whether a GRAT is right for you."
        ]
      },
      {
        title: "6. Accelerate your gift to a 529 account",
        items: [
          "For grandparents, a particularly desirable strategy may be to participate in a feature of 529 college savings plans: accelerated gifting. Accelerated gifting allows grandparents (or parents) to contribute five times the current annual gift exclusion amount at once without reducing their gifting credit.",
          "The annual gift exclusion for 2024 is $18,000 per individual and $36,000 for married couples. This allows a married couple to give away $180,000 to each of their grandkids’ 529 accounts in a single year. Not only can this permanent gift reduce estate taxes, but it also allows the money inside the 529 to benefit from additional years of growth potential."
        ]
      },
    ]

  };

  isSubItem(item: any): item is { subTitle: string; subItems: string[] } {
    return typeof item !== 'string' && 'subTitle' in item && 'subItems' in item;
  }

  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  constructor(private url:LocationStrategy) { }

  ngOnInit(): void {
    if(this.url.path() == '/blog/high-net-worth-estate-planning') {
      this.blogSpecificPage = true;
      this.isReadMore = false;
    }
  }

}
