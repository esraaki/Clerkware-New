import { TOPIC_ICONS } from './topicIcons.js';

export const FEATURES = {
  meetings:{
    icon:TOPIC_ICONS.meetings,
    kicker:"Internal Operations · Meetings",
    title:"AI Meeting Minutes",
    headline:"Stop typing minutes at <em>11&nbsp;PM</em>.",
    lead:"Create agendas, run the meeting, generate draft minutes with AI, and publish everywhere — from one place. You stay in control of every word.",
    stat:{num:"~2 <em>hrs</em>", label:"saved per meeting", desc:"Clerks using Clerkware report cutting meeting prep, recording, and publishing from half a day to under an hour."},
    shotTitle:"ClerkMinutes editor",
    shotDesc:"Dashboard showing AI-generated meeting minutes — timestamped speaker turns on the left, decision &amp; motion sidebar on the right, &quot;Review &amp; publish&quot; action bar across the bottom.",
    workflow:[
      {title:"Build the agenda", body:"Drag in items, assign owners, attach packets. Stakeholders auto-notified."},
      {title:"Record the session", body:"One-click recording with timestamped speaker tags."},
      {title:"AI drafts minutes", body:"Review and edit the draft. You stay in control of every word."},
      {title:"Publish in one click", body:"Auto-posts to your site, pushes to subscribers, archives itself."}
    ],
    benefits:[
      {t:"Agenda + packet builder", b:"Reorder items by drag. Attach docs once — they distribute automatically."},
      {t:"AI-drafted minutes", b:"Generated from the recording. Always editable, always reviewable."},
      {t:"Auto-publishing", b:"To your site, your subscribers, and your archive — no copy-paste."},
      {t:"Open-records ready", b:"Audit trail and version history preserved for FOIA."},
      {t:"Roll-call &amp; motion tracking", b:"Decision attribution captured during the meeting."},
      {t:"Closed session handling", b:"Separate flow for executive session minutes with redaction."}
    ],
    integrations:["Town Web Website","Email subscribers","Google Calendar","Document Archive","Public records (FOIA)"],
    usecases:[
      {tag:"Small townships", t:"Solo clerk, twelve meetings a year", b:"Replace the &quot;type minutes after dinner&quot; ritual. Drafts ready before you leave the building."},
      {tag:"Mid-size cities", t:"Multi-board meeting load", b:"Council, planning, zoning, parks — each board's minutes published into the right archive."}
    ],
    faq:[
      {q:"Do I lose control over the minutes if AI drafts them?", a:"No. The AI generates a starting draft from the recording. You review, edit, and approve every line before anything publishes. Nothing goes out without you signing off."},
      {q:"What if our meetings aren't recorded?", a:"You can still use Clerkware to manage agendas, packets, attendance, and publishing. The AI minutes feature is optional."},
      {q:"Where do minutes get published?", a:"Wherever you configure: your municipal website, your email subscriber list, your document archive, and any RSS or calendar feeds you've set up."},
      {q:"Is the AI hosted in the US?", a:"Yes. All processing happens in US-based data centers. We don't send recordings outside the country."}
    ]
  },
  content:{
    icon:TOPIC_ICONS.content,
    kicker:"Internal Operations · Content",
    title:"Documents &amp; Content",
    headline:"Write once. <em>Publish everywhere</em>. In sync.",
    lead:"Ordinances, policies, budgets, public records — uploaded once, tagged, searchable, and ready for staff and residents.",
    stat:{num:"<em>1</em> source", label:"of truth", desc:"Replace the folder-maze + file-cabinet hunt with one searchable library that publishes to your site automatically."},
    shotTitle:"Content library",
    shotDesc:"Searchable document archive with tag filters, version history sidebar, and a &quot;publish to site&quot; toggle next to each item.",
    workflow:[
      {title:"Upload &amp; tag", body:"Drop docs in. Tag them. Searchable instantly."},
      {title:"Publish to web", body:"One toggle pushes to your public site."},
      {title:"Push to subscribers", body:"Topic-based subscribers get notified."},
      {title:"Auto-archive", body:"Version history. Audit trail. Compliance-ready."}
    ],
    benefits:[
      {t:"One library, every channel", b:"Site, email, social, alerts — from a single update."},
      {t:"Tagged &amp; searchable", b:"Staff and residents find what they need in seconds."},
      {t:"Version history", b:"See who changed what, when. Restore prior versions."},
      {t:"Department-level permissions", b:"Each department manages their own content."},
      {t:"Full-text search for residents", b:"Public-facing archive search across ordinances, minutes, budgets."},
      {t:"Redaction-aware exports", b:"Personal info auto-flagged before publishing."}
    ],
    integrations:["Website","Email","Social","Notifications","Document archive"],
    usecases:[
      {tag:"Public records officers", t:"Ten FOIA requests a week", b:"One search across every document. Response time drops from days to minutes."},
      {tag:"Department heads", t:"Self-serve content publishing", b:"Police, public works, parks — each updates their own section without IT tickets."}
    ],
    faq:[
      {q:"Can different departments edit their own documents?", a:"Yes. Role-based permissions let you grant editing rights department by department, or even per folder."},
      {q:"What document types are supported?", a:"PDFs, Word, Excel, images, videos, audio, plus links to external sources. The library is format-agnostic."},
      {q:"Will residents be able to find old documents?", a:"Yes. Full-text search across the public-facing archive, plus filters by department, date, and tag."}
    ]
  },
  forms:{
    icon:TOPIC_ICONS.forms,
    kicker:"Internal Operations · Forms",
    title:"Forms &amp; Workflows",
    headline:"Drag, drop, <em>route, approve</em>.",
    lead:"Build any form your municipality needs. Submissions route automatically, payments collect at signup, every step audited.",
    stat:{num:"100<em>%</em>", label:"audit-trail coverage", desc:"Every submission, every approval, every payment is logged with timestamps and reviewer identity. SOC-2-grade audit trails."},
    shotTitle:"Form builder",
    shotDesc:"Drag-and-drop builder showing form field palette on the left, live form preview in the center, and a routing rules panel on the right.",
    workflow:[
      {title:"Build the form", body:"Drag fields, set required, add conditional logic."},
      {title:"Route on submit", body:"Send to the right department or approver automatically."},
      {title:"Collect payment", body:"Optional fees taken at submission time."},
      {title:"Track to completion", body:"Status visible to applicant and staff."}
    ],
    benefits:[
      {t:"Drag-and-drop builder", b:"No code. No vendor tickets. Build what you need yourself."},
      {t:"Multi-step approvals", b:"Route through department chains with comments at each step."},
      {t:"Analytics dashboard", b:"See submission volume, time-to-completion, and bottlenecks."},
      {t:"Conditional logic", b:"Show or hide fields based on prior answers."},
      {t:"Magic-link drafts", b:"Applicants can save and resume any form."},
      {t:"Webhook + CSV export", b:"Pipe submissions into any system."}
    ],
    integrations:["Online Payments","Permits","Notifications","Document archive","CRM export"],
    usecases:[
      {tag:"Clerk's office", t:"Replace the paper inbox", b:"Marriage licenses, dog tags, FOIA requests — all online, all routed, all paid for at submit."},
      {tag:"Public works", t:"Snow-plow damage claims", b:"Resident submits with photos. Auto-routes to risk management. Status visible end-to-end."}
    ],
    faq:[
      {q:"Can forms collect fees?", a:"Yes. PCI-compliant payments at submission. Integrates with the Clerkware payments engine."},
      {q:"Can applicants save and return later?", a:"Yes. Drafts auto-save. Applicants get a magic link to resume."},
      {q:"Can I export submissions to my existing system?", a:"Yes. CSV export, plus webhooks and API for live sync to GIS, finance, or any system with an API."}
    ]
  },
  notifications:{
    icon:TOPIC_ICONS.notifications,
    kicker:"Citizen Engagement · Notifications",
    title:"Notifications &amp; Alerts",
    headline:"Reach your community <em>in seconds</em>, on their channel.",
    lead:"Residents subscribe to what matters. You send once. It goes everywhere — email, text, voice, site banner.",
    stat:{num:"<em>4</em> channels", label:"from one message", desc:"Compose once. Clerkware fans it out across email, SMS, voice, and on-site banners with delivery confirmation per channel."},
    shotTitle:"Notifications composer",
    shotDesc:"Composer view: message draft on the left, channel toggles (email · SMS · voice · banner) in the middle, audience segment picker and delivery confirmation pane on the right.",
    workflow:[
      {title:"Residents subscribe", body:"Pick topics they care about. No spam, just relevance."},
      {title:"You compose", body:"Pick template or write fresh. Pre-approved for emergencies."},
      {title:"Multi-channel send", body:"Email, SMS, voice, banner — all at once."},
      {title:"Track delivery", body:"See who got it, who opened, who confirmed."}
    ],
    benefits:[
      {t:"Topic subscriptions", b:"Road closures, agendas, utilities — residents pick. Engagement up, complaints down."},
      {t:"Emergency templates", b:"Boil water, evacuation, weather. Pre-approved, ready to send."},
      {t:"Delivery reports", b:"Know exactly who received critical messages."},
      {t:"Geographic targeting", b:"Send alerts to specific districts, streets, or zip codes."},
      {t:"Bilingual templates", b:"Spanish auto-translation reviewed before send."},
      {t:"IPAWS / Wireless Emergency Alerts", b:"FEMA-integrated for declared emergencies."}
    ],
    integrations:["Website banner","Email","SMS gateway","Voice (TTS)","Subscriber CRM","IPAWS"],
    usecases:[
      {tag:"Emergency management", t:"Boil-water advisory at 6&nbsp;AM", b:"Five clicks: pick template, confirm zip codes, send. Every channel goes out together."},
      {tag:"Engagement", t:"Council agenda subscribers", b:"Residents auto-receive the agenda when it's posted. Comment-period reminders go out automatically."}
    ],
    faq:[
      {q:"Do residents need to download an app?", a:"No. They subscribe via your website. Notifications come through their existing email and phone — no app to install."},
      {q:"What does SMS cost?", a:"SMS is included in our standard plan up to typical municipal volumes. Higher-volume tiers available for larger municipalities."},
      {q:"Can we segment by neighborhood?", a:"Yes. Set up geographic zones and target alerts to specific districts, streets, or zip codes."}
    ]
  },
  "311":{
    icon:TOPIC_ICONS["311"],
    kicker:"Citizen Engagement · 311",
    title:"311 &amp; Online Reporting",
    headline:"Potholes reported from a phone. <em>Routed automatically</em>.",
    lead:"Residents snap a photo, drop a pin, hit send. Submissions auto-route to the right department with location data and status tracking.",
    stat:{num:"<em>0</em> visits", label:"to Town Hall needed", desc:"Replace the in-person service request with a 30-second mobile flow. Photo, pin, submit. Done."},
    shotTitle:"311 mobile report",
    shotDesc:"Mobile-screen mockup: resident taking a photo of a pothole, map showing dropped GPS pin, three-tap submission flow, and confirmation screen with resolution ETA.",
    workflow:[
      {title:"Resident reports", body:"From any phone. Photo + GPS automatically attached."},
      {title:"Auto-routes", body:"Goes to the right department by issue type or location."},
      {title:"Status tracking", body:"Resident sees progress. Staff updates in one click."},
      {title:"Close &amp; report", body:"Auto-confirmation. Resolution time tracked."}
    ],
    benefits:[
      {t:"Mobile-first reporting", b:"Optimized for phones, where 70%+ of resident reports originate."},
      {t:"Auto-routing", b:"By issue type, by location, by department — no manual triage needed."},
      {t:"Public dashboard (optional)", b:"Show residents resolution stats. Builds trust through transparency."},
      {t:"Duplicate detection", b:"Nearby reports auto-grouped so staff handle one ticket."},
      {t:"GIS overlay", b:"Reports plotted on your municipal map for trend analysis."},
      {t:"SLA tracking", b:"Time-to-resolution per category, with manager alerts on overdue tickets."}
    ],
    integrations:["GIS mapping","Notifications","Document archive","Public dashboard","Department queues"],
    usecases:[
      {tag:"Public works", t:"Pothole season", b:"Spring backlog reported by residents — not staff windshield surveys. Repair crews routed by cluster."},
      {tag:"Code enforcement", t:"Property complaints", b:"Resident submits a photo of an overgrown lot. Auto-routed, address-matched, inspector notified."}
    ],
    faq:[
      {q:"Does this require a separate app?", a:"No. It works in any mobile browser. Optional native app available for larger municipalities."},
      {q:"Can we customize the issue categories?", a:"Yes. Add, remove, or rename categories. Configure routing rules per category."},
      {q:"What about duplicate reports?", a:"Clerkware detects nearby duplicate reports (same issue type within X feet) and groups them so staff handles one ticket."}
    ]
  },
  calendar:{
    icon:TOPIC_ICONS.calendar,
    kicker:"Citizen Engagement · Calendar",
    title:"Event Calendar",
    headline:"Post once. <em>It lands everywhere</em>.",
    lead:"Board meetings, recreation programs, community events — syncs to Google Calendar, Outlook, your site, your subscribers.",
    stat:{num:"<em>3</em> calendars", label:"from one post", desc:"Update once. Your site, Google Calendar feeds, and Outlook subscribers all stay in sync automatically."},
    shotTitle:"Event editor",
    shotDesc:"Event creation pane with title, time, location and attached docs on the left, distribution toggles (Website · Google · Outlook · SMS subscribers) on the right, and an &quot;Add to Calendar&quot; preview at the bottom.",
    workflow:[
      {title:"Create the event", body:"Title, time, location, description. Attach docs."},
      {title:"Tag &amp; categorize", body:"Board meeting? Rec program? Holiday closure?"},
      {title:"Publish everywhere", body:"Site, subscribers, Google, Outlook — instantly."},
      {title:"Reminders fire", body:"Auto reminders to subscribers 24h, 1h before."}
    ],
    benefits:[
      {t:"Filterable by category", b:"Residents browse meetings, recreation, holidays separately."},
      {t:"Calendar sync", b:"One-click Google Calendar &amp; Outlook subscription."},
      {t:"RSVP &amp; registration", b:"Optional. Cap attendance. Collect fees if needed."},
      {t:"Recurring rule support", b:"Weekly, monthly, annual events with a single setup."},
      {t:"iCal feed per category", b:"Subscribe to just sports, or just council."},
      {t:"Closure overrides", b:"Holiday cancellations broadcast across every channel."}
    ],
    integrations:["Website","Google Calendar","Outlook (iCal)","Notifications","Facility Booking"],
    usecases:[
      {tag:"Parks &amp; Rec", t:"Summer program registration", b:"Each program posted once. Calendar, payment, and roster all linked."},
      {tag:"Clerk's office", t:"Public-meeting calendar", b:"Every board's meetings on one calendar, color-coded, exportable."}
    ],
    faq:[
      {q:"Can recurring events be created in bulk?", a:"Yes. Weekly council meetings, monthly events, annual celebrations — create once with a recurrence rule."},
      {q:"Can residents add events to their phone?", a:"Yes. One-click 'Add to Calendar' button for Google, Outlook, and Apple Calendar."},
      {q:"What about event registration with payments?", a:"Built-in. Recreation programs, special events, and ticketed activities can collect fees at registration."}
    ]
  },
  payments:{
    icon:TOPIC_ICONS.payments,
    kicker:"Revenue &amp; Services · Payments",
    title:"Online Payments",
    headline:"Cards, ACH, e-checks. <em>For anything</em>.",
    lead:"Utilities, permits, parking tickets, recreation. PCI-compliant, auto-receipts, recurring billing. Integrates with your financial systems.",
    stat:{num:"<em>0</em>", label:"checks in the mail", desc:"Residents pay 24/7 from any device. Funds settle to your municipal account. No more lockbox, no more counter lines."},
    shotTitle:"Payment portal",
    shotDesc:"Resident-facing payment portal: utility bill summary at top, payment method selector (card · ACH · Apple Pay) in the middle, recurring autopay toggle and receipt preview at the bottom.",
    workflow:[
      {title:"Resident initiates", body:"From a permit page, an invoice link, or recurring autopay."},
      {title:"Secure checkout", body:"PCI-compliant. Cards, debit, ACH, e-check supported."},
      {title:"Receipt &amp; record", body:"Emailed to resident, logged in your dashboard."},
      {title:"Funds settle", body:"To your bank. Reconciliation export to your accounting system."}
    ],
    benefits:[
      {t:"Every payment method", b:"Credit, debit, ACH, e-check. Even Apple Pay &amp; Google Pay."},
      {t:"Recurring autopay", b:"Utility bills, equipment loans — set and forget."},
      {t:"Reconciliation export", b:"Daily settlement reports to your accounting system."},
      {t:"Partial &amp; installment payments", b:"Tax bills, permits, fines split across months."},
      {t:"Resident wallet", b:"Returning payers see their full history and saved methods."},
      {t:"Convenience fee handling", b:"Absorb, pass through, or split — configurable per category."}
    ],
    integrations:["Permits","Facility Booking","Forms","Recreation","Accounting (QuickBooks, BS&amp;A, Tyler)"],
    usecases:[
      {tag:"Utilities", t:"Water bill autopay", b:"60% of residents on autopay after launch. Lockbox volume drops by half."},
      {tag:"Court &amp; tickets", t:"Pay-by-citation flow", b:"QR on the ticket → resident pays in 90 seconds → fine logged in court system."}
    ],
    faq:[
      {q:"What does it cost residents?", a:"You choose: absorb the processing fee, pass it to residents as a service charge, or split it. Cards typically 2.9% + $0.30, ACH typically $0.50 flat."},
      {q:"Is it PCI compliant?", a:"Yes, PCI DSS Level 1. We never store raw card data. Tokenized payment methods only."},
      {q:"Can we integrate with our current finance software?", a:"Yes. QuickBooks, BS&amp;A, Tyler, and most major municipal finance platforms. CSV export universal."}
    ]
  },
  facility:{
    icon:TOPIC_ICONS.facility,
    kicker:"Revenue &amp; Services · Facility",
    title:"Facility Booking",
    headline:"Real-time availability. <em>Instant confirmation</em>.",
    lead:"Park pavilions, community rooms, athletic fields — booked online with integrated payment and one staff calendar.",
    stat:{num:"<em>0</em>", label:"phone tag", desc:"Residents see what's available, book the slot, pay the fee. Staff sees one unified calendar with no double-bookings."},
    shotTitle:"Booking calendar",
    shotDesc:"Resident-facing booking view: facility list on the left, week/month grid with real-time availability in the center, deposit + insurance requirement panel on the right.",
    workflow:[
      {title:"Resident picks slot", body:"Sees real-time availability. No phone calls."},
      {title:"Pays at booking", body:"Optional. Refundable deposit supported."},
      {title:"Instant confirmation", body:"Email + calendar invite. Reminders before the event."},
      {title:"Staff manages", body:"One calendar. All facilities. No conflicts possible."}
    ],
    benefits:[
      {t:"Real-time availability", b:"Calendar is always current. No risk of overbooking."},
      {t:"Approval workflows", b:"Optional. Sensitive bookings can require staff sign-off."},
      {t:"Reporting", b:"Usage by facility, revenue, peak times — make data-driven decisions."},
      {t:"Insurance/waiver enforcement", b:"Per-facility requirements. Booking won't complete without them."},
      {t:"Recurring use", b:"League rentals, weekly classes — bulk-book in one flow."},
      {t:"Black-out windows", b:"Maintenance closures auto-block bookings."}
    ],
    integrations:["Online Payments","Calendar","Notifications","Recreation programs","Insurance/waiver forms"],
    usecases:[
      {tag:"Parks", t:"Pavilion rentals", b:"Saturday season fills itself. No clerk takes a single rental call."},
      {tag:"Community center", t:"Room rentals with deposits", b:"Refundable deposit collected at booking. Auto-released if no damage report within 48 hours."}
    ],
    faq:[
      {q:"Can we require an insurance certificate for some facilities?", a:"Yes. Set per-facility requirements (insurance, waiver, deposit). Booking won't complete without them."},
      {q:"What about refunds or cancellations?", a:"Configurable per facility. Free cancellation up to X days, partial refund within Y, no refund inside Z."},
      {q:"Can rec staff manage their own facilities?", a:"Yes. Role-based access. Parks manages parks, recreation manages rec halls, etc."}
    ]
  },
  permits:{
    icon:TOPIC_ICONS.permits,
    kicker:"Revenue &amp; Services · Permits",
    title:"Permits &amp; Licensing",
    headline:"Submitted online. Routed automatically. <em>Tracked end-to-end</em>.",
    lead:"Building, zoning, business, special events. Document uploads, fees collected, status visible, audit trails complete.",
    stat:{num:"<em>Central</em>", label:"review queue", desc:"Every application in one queue. Reviewers see status, comments, history. No more permit files spread across desks."},
    shotTitle:"Permit review queue",
    shotDesc:"Reviewer queue showing applications grouped by department, color-coded by status, with parallel-review side panel and applicant communication thread.",
    workflow:[
      {title:"Applicant submits", body:"Online form with document uploads &amp; fee payment."},
      {title:"Auto-routed", body:"By permit type, to the right reviewer."},
      {title:"Review &amp; respond", body:"Reviewers comment, approve, or request more."},
      {title:"Issue &amp; archive", body:"Permit issued digitally. Audit trail preserved."}
    ],
    benefits:[
      {t:"Central queue", b:"All applications, one place. Sortable, filterable, exportable."},
      {t:"Status tracking", b:"Applicants see exactly where their permit is. Fewer status-check calls."},
      {t:"Business directory", b:"Bonus: local businesses claim &amp; manage their public listing."},
      {t:"Parallel review chains", b:"Planning, Building, Fire all review simultaneously."},
      {t:"Conditional approvals", b:"Issue with conditions; track compliance dates."},
      {t:"Fee-schedule engine", b:"By type, square footage, valuation, or custom formula."}
    ],
    integrations:["Online Payments","Forms","GIS mapping","Document archive","Business directory"],
    usecases:[
      {tag:"Building department", t:"Residential remodel permits", b:"Plans uploaded, fee collected, review queue assigned. Inspector schedules from the same record."},
      {tag:"Clerk's office", t:"Special event permits", b:"Festival organizer submits, fire and police review in parallel, council approval logged."}
    ],
    faq:[
      {q:"Can multiple departments review the same application?", a:"Yes. Configure parallel or sequential review chains — Planning, Building, Fire, etc."},
      {q:"What about historic records?", a:"Migrate existing permits in. Or start fresh and link out to legacy archives. Your choice."},
      {q:"Can we charge variable fees?", a:"Yes. Fee schedules by permit type, square footage, valuation, or custom formula."}
    ]
  }
};
