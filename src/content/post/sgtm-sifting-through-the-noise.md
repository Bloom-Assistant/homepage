---
title: 'Server-Side Google Tag Manager: Sifting through the noise'
excerpt: There's a lot of conflicting opinions about the benifits and drawbacks of sGTM, but much of the confusion comes from a lack of real technical analysis
publishedAt: 2024-02-05T00:00:00Z
image: https://www.vakulski-group.com/wp-content/uploads/2023/09/GA4-Server-Side-Featured-Image.webp
category: Analytics
tags: 
    - tag manager
    - sGTM
    - analytics
metadata:
    canonical: https://wwww.getoasis.io/sgtm-sifting-through-the-noise
---

## The cookie-apocalypse

Ever since the depreciation of third-party cookies, marketing professionals have been struggling to regain the tracking insights they once had in a cookie-friendly world. With almost all browsers including Google Chrome depreciating third party cookies, new methods of tagging have been required to be developed. 

In August of 2020, Google released [Server Side Google Tag Manager](https://blog.google/products/marketingplatform/360/improve-performance-and-security-server-side-tagging/) in Tag Manager 360 to help customers continue to measure to effectiveness of digital campaigns in a increasingly privacy-aware world. 

## Why server-side tagging works

There are a few clear perks to running tags on the server side as oppsed to the client, but in the end they all coalese into the use case of providing a better experience to customers while tracking efficiency of online campaigns. When we use sGTM instead of client-side tagging, we're able to take advantage of things such as:

- **Faster site experiences**: When you move third-party tags off your site, fewer tags must load when your customers visit 
- **Improved tracking ability**: In a 2021 case study, [Square revealed a 46.3% increase](https://developer.squareup.com/blog/server-to-server-integration-with-server-side-google-tag-manager/) in ability to track conversion events
- **Privacy**: With server-side tagging, you have complete control and ownership of the data collected on the site, and European-owned tagging servers can help EU websites comply with GDPR.
- **Increased cookie lifetimes**: Third-party cookies are going away this year. With sGTM, you can set secure 1st party cookies that live for 2 years or unless a user cleans cookies.

## Alternatives to sGTM

Let's also look at some of the alternatives to sGTM that exist out there, such as popular CDP solutions.

### Segment

Segment is a customer data platform that combines the benifits of web and server GTM while adding a few features on tops, such as personas and CDP.

When compared with sGTM, Segment has tried to make the process of tagging more efficient and and smooth designed for non-technical specialists, but this simplicity can come at an increased price point. It has a free plan that can fit small niche websites with less that 1000 visitors/month, and includes only two destinations, but most websites will need a bump up to the next teir, which costs $120/mo.

If your needs are more bulky at more than 30,000 users a day, you will need to pay even more. 

 At the end of the day, it may be more profitable to hire an sGTM agency like ours to set up web GTM and sGTM tagging and pay a one-time setup cost rather than recurring costs that will continue to grow if your site grows.

**Pros**

- easy to set up
- rich destination ecosystem
- free email support

**Cons**

- It may be 100x times more expensive than using GTM. It all depends on the traffic volume and tools of the suite you need. 
- No community integrations. Which affects the number of integrations.
- GDPR compliance might be an issue. 

### Tealium

Tealium is a choice for large enterprise organizations that, for whatever reason, don't want to use GTM either because of Google360 costs or features that Tealium offers compared to GTM. 

Their versatility makes it a complex tool to use. Learning the ropes of this platform will take time, but when you find your footing, the sky is the limit for sure. 

**Pros**

- Advanced set of features for tagging
- The support team is available

**Cons**

- Enterprise-level price
- Complexity

## Limitations of server-side tagging

As with anything, there are some limitations. Server-side tracking isn't a cure-all solution to everything, and one of the limitations that Stripe faced was using their CDP data within Tag Manager 360 due to the closed nature of the platform. The main issue you'll face when trying to implement sGTM is **complexity**, as you have to run sGTM on your own cloud resources, so if you aren't comfortable with Docker and cloud-engineering, you may want to [hire us](https://calendly.com/getoasis). 