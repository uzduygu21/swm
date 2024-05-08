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
        paragraph: "On January 1, 2026, current estate tax exemptions are scheduled to expire and return to 2017 levels — about half the levels they’re currently at. "
      },
      {
        paragraph: `For high-net-worth and ultra-high-net-worth estates, this means estate planning is that much more critical, as there are essentially only two ways to lock in the higher exemptions: dying or making a permanent gift of assets before January 1, 2026.`,
      },
      {
        paragraph: "Of course, neither of these options are particularly attractive. "
      },
      {
        paragraph: "Fortunately, there are strategies high-net-worth families can implement to reduce the impact of estate taxes on their future heirs, but it’s important to act sooner rather than later."
      }
    ],
    sections: [
      {
        title: "What Is a High-Net-Worth Estate?",
        items: [
          "Specific definitions for high-net-worth and ultra-high-net-worth estates vary. For our purposes, we’re going to consider any estate valued above $7 million for an individual, or $14 million for a married couple, to be a high-net-worth estate and thus in need of high-net-worth estate planning. ",
          "(These thresholds align with the projected estate tax exemptions we’re going to discuss.) ",
          "On January 1, 2026 — barring any legislative changes to lifetime estate and gift tax exemption levels between now and then — current estate tax exemption levels are scheduled to expire. This signals the end of the estate tax exemption provisions from the Tax Cuts and Jobs Act (TCJA) of 2017, triggering exemptions to revert to 2017 levels, adjusted for inflation. ",
          "As of now, it appears those exemptions will be around $7 million for an individual or $14 million for married couples. These exemptions are about half their current levels, which in 2024 are $13.61 million per individual and $27.22 million for a married couple.",
          "Any estates above or approaching the current level would not owe estate taxes if both individuals were to pass away in 2024 or 2025. But come 2026, an estate of this size could owe substantial estate taxes, presenting an undue burden on beneficiaries."
        ]
      },
      {
        title: "Why Estate Planning for Millionaires and Wealthy Families is Essential",
        items: [
          "There are two main reasons high-net-worth and ultra-high-net-worth families need estate planning: probate and taxes.",
          ""
        ]
      },
    ]

  };

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
