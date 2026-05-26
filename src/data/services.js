import { TOPIC_ICONS } from './topicIcons.js';

export const SERVICES = {
  design:{
    icon:TOPIC_ICONS.design,
    title:"Municipal Websites",
    kicker:"Solution · Design",
    headline:"Custom municipal websites residents <em>actually use</em>.",
    lead:"Not a template. A website designed around your community's brand, content, and real workflows.",
    stat:{num:"4–6 <em>wk</em>", label:"typical launch", desc:"Discovery, design, build, content migration, training, launch. No 9-month timelines."},
    shotTitle:"Website design system",
    shotDesc:"Three-up showing desktop homepage, mobile screen, and component library: header, hero, quicklink grid, agendas list, calendar, footer — all in the municipality's brand palette.",
    benefits:[
      {t:"Custom design", b:"Built around your brand, your photography, your community."},
      {t:"Mobile-first", b:"70% of residents arrive on phones. Designed for that reality."},
      {t:"Built for clerks", b:"You can edit everything. No developer tickets for content changes."},
      {t:"ADA-compliant", b:"WCAG 2.1 AA from day one. Documented &amp; audited."},
      {t:"Information architecture", b:"We help organize content so residents find what they need fast."},
      {t:"Photography support", b:"Use your own or we'll help source images that fit."}
    ],
    workflow:[
      {title:"Discovery", body:"Audit your current site. Interview your team. Understand your residents."},
      {title:"Design", body:"Mockups, revisions, sign-off. We work until you love it."},
      {title:"Build", body:"Custom development on Clerkware. ADA-compliant from the start."},
      {title:"Launch", body:"Content migration, training, soft launch, support."}
    ],
    usecases:[
      {tag:"Small towns", t:"Replace the 2008 site", b:"From WordPress + plugins to a clerk-editable, mobile-first municipal home in six weeks."},
      {tag:"Counties", t:"Multi-department portals", b:"One brand, separate department sections, shared content and search."}
    ],
    faq:[
      {q:"Do we own the design?", a:"Yes. Your design is yours forever. If you ever leave Town Web, you keep your design files and content."},
      {q:"Can we redesign later without rebuilding?", a:"Yes. Clerkware's CMS separates content from design — you can refresh the look without losing data."},
      {q:"What about brand guidelines we already have?", a:"We work to your guidelines. Bring your colors, fonts, voice — we'll match them."}
    ]
  },
  ada:{
    icon:TOPIC_ICONS.ada,
    title:"ADA Compliance",
    kicker:"Solution · Compliance",
    headline:"WCAG 2.1 AA. <em>Guaranteed</em>.",
    lead:"Built-in from the first line of code. Audited continuously. Documented for your records and any inquiry.",
    stat:{num:"100<em>%</em>", label:"WCAG 2.1 AA coverage", desc:"Every Clerkware site meets the accessibility standard the DOJ recommends for state and local government."},
    shotTitle:"Accessibility audit report",
    shotDesc:"Compliance dashboard showing automated audit history, screen-reader test logs (JAWS · NVDA · VoiceOver), open issues queue, and accessibility statement preview.",
    benefits:[
      {t:"Built-in, not bolted-on", b:"Accessible markup, keyboard nav, color contrast — from day one."},
      {t:"Continuous audits", b:"Automated checks run on every content change. Issues flagged immediately."},
      {t:"Screen-reader tested", b:"Real testing with JAWS, NVDA, VoiceOver. Not just automated scans."},
      {t:"Accessibility statement", b:"Documented &amp; published. Required for compliance."},
      {t:"Training", b:"Your content editors learn what to do (and not do) to keep it compliant."},
      {t:"Documentation", b:"Audit logs, compliance reports, evidence for any inquiry."}
    ],
    workflow:[
      {title:"Audit", body:"We assess your current site against WCAG 2.1 AA. Detailed report."},
      {title:"Remediate", body:"Fix issues. Update templates. Retrain content editors."},
      {title:"Monitor", body:"Continuous automated &amp; manual checks."},
      {title:"Document", body:"Accessibility statement, audit logs, compliance reports."}
    ],
    usecases:[
      {tag:"DOJ Title II", t:"April 2026 deadline", b:"Federal rule requires state and local governments to meet WCAG 2.1 AA. We get you there with documentation."},
      {tag:"Compliance officers", t:"Audit-trail evidence", b:"Quarterly automated reports, screen-reader test logs, content-editor training records — all archived."}
    ],
    faq:[
      {q:"What if we get an accessibility complaint?", a:"We help you respond. We provide audit logs, remediation history, and our compliance documentation. You're not alone."},
      {q:"Does AI-generated content stay compliant?", a:"Yes. AI-drafted minutes, alerts, and form submissions are checked against accessibility rules before publishing."},
      {q:"Is this the same as Section 508?", a:"Section 508 applies to federal sites. State and local governments are typically held to ADA Title II + WCAG 2.1 AA. We cover both."}
    ]
  },
  gov:{
    icon:TOPIC_ICONS.gov,
    title:".gov Domain Registration",
    kicker:"Solution · Domain",
    headline:"Get your official <em>.gov</em>. We do the paperwork.",
    lead:"CISA verification is real paperwork. We handle it end-to-end. Your domain proves you're the real government — and nobody else can register it.",
    stat:{num:"$<em>0</em>", label:"setup fees", desc:"The .gov domain is free for verified U.S. municipalities. We handle the CISA verification process for you at no extra cost."},
    shotTitle:".gov registration packet",
    shotDesc:"Document packet showing CISA application form, signatory page, DNS configuration checklist, and security-headers attestation. Stamped &quot;verified&quot; over the cover page.",
    benefits:[
      {t:"Federal verification", b:"We package and submit your CISA application. You sign once."},
      {t:"Phishing protection", b:".gov can't be impersonated. Residents know it's really you."},
      {t:"Email included", b:"Pro emails on @yourtown.gov for your staff."},
      {t:"Seamless transition", b:"From your current domain to .gov. We handle redirects, SSL, all of it."},
      {t:"DNS managed", b:"DNS, SSL, mail records, security headers — we handle the technical side."},
      {t:"Federal compliance", b:".gov requires multi-factor authentication. We set it up."}
    ],
    workflow:[
      {title:"Apply", body:"We prepare your CISA application. You provide signatures &amp; ID."},
      {title:"Verify", body:"CISA confirms your municipality. Typically 2–4 weeks."},
      {title:"Configure", body:"DNS, SSL, email, security headers — all done for you."},
      {title:"Cut over", body:"Site &amp; email move to .gov. Old URLs redirect forever."}
    ],
    usecases:[
      {tag:"Phishing-prone towns", t:"Election season scams", b:"Stop the impersonator domains targeting your residents. .gov is the federal mark of legitimacy."},
      {tag:"Federal grant applicants", t:"Eligibility unlock", b:"Several federal programs now require a .gov for government applicants. We handle the whole switch."}
    ],
    faq:[
      {q:"Why a .gov instead of .org or .us?", a:"Only verified governments can have .gov. It builds trust, prevents phishing, and several federal programs require it."},
      {q:"How long does it take?", a:"CISA verification typically 2–4 weeks. Total cutover usually 4–6 weeks from start to live."},
      {q:"Will residents lose old bookmarks?", a:"No. All old URLs permanently redirect to the new .gov equivalents."}
    ]
  },
  packages:{
    icon:TOPIC_ICONS.packages,
    title:"Fixed-Price Packages",
    kicker:"Solution · Pricing",
    headline:"Predictable pricing. <em>No annual hikes</em>. Ever.",
    lead:"All-inclusive packages by municipality size. Everything in the platform, plus our team. Lock your rate — we don't raise prices on existing customers.",
    stat:{num:"<em>0</em>", label:"annual price increases", desc:"We've never raised prices on an existing customer. Your launch rate is your forever rate."},
    shotTitle:"Pricing tier overview",
    shotDesc:"Three-tier package comparison: Township · City · County. Each card lists what's included — platform, hosting, support, updates, features — with the annual rate locked-in line at the bottom.",
    benefits:[
      {t:"All-inclusive", b:"Design, hosting, support, updates, features — one number, no extras."},
      {t:"Rate-locked", b:"Your launch price is your forever price. We've held this policy 20+ years."},
      {t:"No long contracts", b:"Year-to-year. You stay because you're happy."},
      {t:"Scales with you", b:"Move up a tier when you grow. Never get charged for what you don't use."},
      {t:"Includes support", b:"Real humans, no Tier-1 scripts. Phone, email, screen-share."},
      {t:"Includes hosting", b:"99.9% uptime, DDoS protection, daily backups."}
    ],
    workflow:[
      {title:"Pick a tier", body:"Sized to your municipality. We help you choose."},
      {title:"Annual billing", body:"One invoice per year. Predictable budgeting."},
      {title:"All features included", body:"Every feature in your tier, no upsells."},
      {title:"Rate locked", body:"Your launch price stays your price."}
    ],
    usecases:[
      {tag:"Budget officers", t:"Multi-year forecasting", b:"Lock the line item once. No mid-year true-ups. No surprise renewal increases."},
      {tag:"Growing towns", t:"Population growth", b:"Move up a tier on renewal — same predictable rate, just at the bigger tier."}
    ],
    faq:[
      {q:"What if our population grows and we need more capacity?", a:"You move up a tier. We never charge mid-year price increases for organic growth."},
      {q:"Is there a setup fee?", a:"Design and migration are quoted separately and one-time. After that, just annual platform billing — no surprises."},
      {q:"What's not included?", a:"Things like SMS volume above your tier's allowance, custom integrations beyond standard, or hardware. All listed transparently in your quote."}
    ]
  }
};
