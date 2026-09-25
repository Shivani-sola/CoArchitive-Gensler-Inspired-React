// Central content store. All copy is original CoArchitive material; imagery is
// Unsplash placeholder photography that should be swapped for licensed assets
// before launch. Company details are taken from the letterhead.

export const COMPANY = "CoArchitive Pvt. Ltd.";

export const TAGLINE = "Planning · Architecture · Interior · Engineering";

export const HEAD_OFFICE = {
  label: "Head Office",
  lines: [
    "4-93/5, Ground Floor, Ayyappa Nilayam",
    "Shankar Nagar Colony, Gandimaisamma",
    "Medchal Malkajgiri, Telangana 500043",
  ],
};

export const CONTACT = {
  email: "coarchitive@gmail.com",
  phone: "+91 83414 84422",
  phoneHref: "tel:+918341484422",
};

export const NAV = [
  { to: "insights", label: "Research & Insights" },
  { to: "expertise", label: "Expertise" },
  { to: "projects", label: "Projects" },
  { to: "people", label: "People" },
  { to: "offices", label: "Offices" },
  { to: "about", label: "About" },
  { to: "careers", label: "Careers" },
];

const img = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

export const FEATURE = {
  eyebrow: "Research",
  title: "New thinking for resilient regions",
  blurb:
    "How architecture, planning and spatial intelligence work together — from the first question a client asks to the systems that keep a place running years after handover.",
  cta: "Read the research",
  to: "insights",
  img: img("1487958449943-2429e8be8625", 2400),
};

// The seven fields the practice spans — pulled out of the intro sentence so they
// can be scanned rather than read.
export const FIELDS = [
  "Architecture",
  "Urban & Regional Planning",
  "Transportation",
  "Environment",
  "Geospatial Technologies",
  "Research",
  "Digital Innovation",
];

export const EXPERTISE = [
  {
    no: "01",
    slug: "architecture-design",
    title: "Architecture & Design",
    short: "Buildings and interiors that earn their place.",
    body: "Architecture, interiors, working drawings, visualization, renovation and built-environment design — carried from concept through construction documentation.",
    img: img("1497366754035-f200968a6e72"),
  },
  {
    no: "02",
    slug: "urban-planning",
    title: "Urban & Regional Planning",
    short: "Frameworks that let cities grow coherently.",
    body: "Master plans, development plans, urban design, land-use studies and strategic planning for cities, regions and special development areas.",
    img: img("1477959858617-67f85cf4f1df"),
  },
  {
    no: "03",
    slug: "transportation",
    title: "Transportation & Mobility",
    short: "Movement designed as a system, not a corridor.",
    body: "Transport planning, traffic engineering, surveys, transport impact assessment, simulation and multimodal mobility strategy.",
    img: img("1519501025264-65ba15a82390"),
  },
  {
    no: "04",
    slug: "environment",
    title: "Environment & Sustainability",
    short: "Designing for the climate that is arriving.",
    body: "Environmental planning, sustainability advisory, climate resilience, water systems and solid-waste management across the project lifecycle.",
    img: img("1441974231531-c6227db76b6e"),
  },
  {
    no: "05",
    slug: "gis",
    title: "GIS & Geospatial",
    short: "Location intelligence you can actually decide with.",
    body: "GIS, mapping, spatial analytics, remote sensing, field data collection and location intelligence built into the planning process.",
    img: img("1451187580459-43490279c0fa"),
  },
  {
    no: "06",
    slug: "digital-ai",
    title: "Digital & AI Solutions",
    short: "Software that outlives the report.",
    body: "Platforms, data analytics, AI workflows, simulation, digital twins and decision-support tools built around real operational questions.",
    img: img("1551288049-bebda4e38f71"),
  },
  {
    no: "07",
    slug: "research-advisory",
    title: "Research & Advisory",
    short: "Evidence before commitment.",
    body: "Research, feasibility studies, detailed project reports, policy advisory, technical documentation and delivery strategy.",
    img: img("1507842217343-583bb7270b66"),
  },
  {
    no: "08",
    slug: "capacity-building",
    title: "Capacity Building",
    short: "Knowledge that stays with the client.",
    body: "Training, workshops, IEC campaigns, community engagement, institutional partnerships and knowledge programs.",
    img: img("1523240795612-9a054b0db644"),
  },
];

export const PROJECTS = [
  {
    slug: "connected-city",
    category: "Urban Systems",
    title: "Connected City Framework",
    meta: "Urban Planning / Mobility",
    blurb:
      "A regional growth framework that ties land use, transit and public realm investment to a single phased delivery plan.",
    img: img("1477959858617-67f85cf4f1df"),
  },
  {
    slug: "civic-hub",
    category: "Built Environment",
    title: "Future Workplace & Civic Hub",
    meta: "Architecture / Interior",
    blurb:
      "A mixed civic and workplace building designed around daylight, adaptability and a ground floor that belongs to the street.",
    img: img("1497366754035-f200968a6e72"),
  },
  {
    slug: "regional-mobility",
    category: "Mobility",
    title: "Regional Mobility Strategy",
    meta: "Transport / Infrastructure",
    blurb:
      "Multimodal network strategy combining corridor modelling, household survey data and staged infrastructure investment.",
    img: img("1519501025264-65ba15a82390"),
  },
  {
    slug: "spatial-platform",
    category: "Digital",
    title: "Spatial Intelligence Platform",
    meta: "GIS / AI / Digital Twin",
    blurb:
      "A decision platform that puts asset, demographic and environmental layers in one place for day-to-day planning teams.",
    img: img("1551288049-bebda4e38f71"),
  },
  {
    slug: "watershed",
    category: "Environment",
    title: "Watershed Resilience Plan",
    meta: "Environment / Water Systems",
    blurb:
      "Catchment-scale flood and water-security planning, from hydrological modelling to community-level interventions.",
    img: img("1441974231531-c6227db76b6e"),
  },
  {
    slug: "transit-district",
    category: "Urban Systems",
    title: "Transit-Oriented District",
    meta: "Planning / Urban Design",
    blurb:
      "Station-area redevelopment framework balancing density, walkability and existing neighbourhood character.",
    img: img("1444723121867-7a241cacace9"),
  },
];

export const PROJECT_FILTERS = [
  "All",
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
];

export const INSIGHTS = [
  {
    slug: "resilient-places",
    category: "Research",
    date: "March 2026",
    title: "Designing resilient places with data",
    blurb:
      "How architecture, planning and spatial intelligence can work together from the first question to delivery.",
    img: img("1470071459604-3b5ec3a7fe05"),
  },
  {
    slug: "mobility-beyond-movement",
    category: "Perspective",
    date: "February 2026",
    title: "Mobility beyond movement",
    blurb:
      "A systems view of transport, land use, access and the public realm — and why they fail when planned separately.",
    img: img("1519501025264-65ba15a82390"),
  },
  {
    slug: "maps-to-decisions",
    category: "Digital",
    date: "January 2026",
    title: "From maps to decisions",
    blurb:
      "Turning geospatial information into practical tools that planning and infrastructure teams use every week.",
    img: img("1451187580459-43490279c0fa"),
  },
  {
    slug: "climate-first-masterplans",
    category: "Sustainability",
    date: "December 2025",
    title: "Climate-first masterplanning",
    blurb:
      "What changes when heat, water and energy constraints set the plan instead of being checked at the end.",
    img: img("1441974231531-c6227db76b6e"),
  },
  {
    slug: "ai-in-practice",
    category: "Digital",
    date: "November 2025",
    title: "AI in a design practice, honestly assessed",
    blurb:
      "Where machine learning genuinely accelerates our work, and where it quietly adds risk.",
    img: img("1516110833967-0b5716ca1387"),
  },
  {
    slug: "small-cities",
    category: "Research",
    date: "October 2025",
    title: "The case for small cities",
    blurb:
      "Growth pressure is moving to second- and third-tier centres. Their planning capacity has not moved with it.",
    img: img("1480714378408-67cf0d13bc1b"),
  },
];

export const INSIGHT_FILTERS = [
  "All",
  ...Array.from(new Set(INSIGHTS.map((i) => i.category))),
];

export const STATS = [
  ["08", "Core verticals"],
  ["01", "Integrated practice"],
  ["24+", "Disciplines in-house"],
  ["∞", "Possibilities"],
];

// People — name and designation only. Qualifications and work experience
// from the brief are deliberately not shown.
//
// `photo` is a local file in public/team/. Drop the real portrait there and it
// appears automatically; until then the placeholder below shows through (both
// are stacked as CSS background layers, so a missing file simply falls back).
// See public/team/README.txt.
const portrait = (slug, fallbackId) => ({
  photo: `/team/${slug}.jpg`,
  fallback: img(fallbackId, 900),
});

const DIRECTOR_ROLE = "Director";
const MEMBER_ROLE = "Expert Member";

export const DIRECTORS = [
  { name: "Aneesha Jayaram", role: DIRECTOR_ROLE, ...portrait("aneesha-jayaram", "1573496359142-b8d87734a5a2") },
  { name: "Shreedha Lanjewar", role: DIRECTOR_ROLE, ...portrait("shreedha-lanjewar", "1580489944761-15a19d654956") },
  { name: "Nakka Sunny", role: DIRECTOR_ROLE, ...portrait("nakka-sunny", "1560250097-0b93528c311a") },
];

export const TEAM = [
  { name: "Raksha Mundhada", role: MEMBER_ROLE, ...portrait("raksha-mundhada", "1519085360753-af0119f7cbe7") },
  { name: "Ajay Sarath", role: MEMBER_ROLE, ...portrait("ajay-sarath", "1507003211169-0a1dd7228f2d") },
];

export const OFFICES = [
  {
    city: "Medchal Malkajgiri",
    region: "Head Office · Telangana",
    detail:
      "4-93/5, Ground Floor, Ayyappa Nilayam, Shankar Nagar Colony, Gandimaisamma, Medchal Malkajgiri, Telangana 500043",
    email: CONTACT.email,
  },
  {
    city: "Project Offices",
    region: "Site-based",
    detail: "Established close to the work, for the duration of the engagement.",
    email: CONTACT.email,
  },
];

export const ROLES = [
  { title: "Urban Planner", team: "Urban & Regional Planning", type: "Full-time", loc: "India" },
  { title: "Architect — Project Delivery", team: "Architecture & Design", type: "Full-time", loc: "India" },
  { title: "Transport Modeller", team: "Transportation & Mobility", type: "Full-time", loc: "India" },
  { title: "GIS Analyst", team: "GIS & Geospatial", type: "Full-time", loc: "India" },
  { title: "Full-Stack Engineer", team: "Digital & AI Solutions", type: "Full-time", loc: "Hybrid" },
  { title: "Research Associate", team: "Research & Advisory", type: "Contract", loc: "India" },
];

// ---------------------------------------------------------------------------
// Home page storytelling content.
// PLACEHOLDER: client names, figures, testimonials and FAQ answers below are
// dummy content written to show the layout. Replace them with verified
// material before launch — none of these organisations or quotes are real.
// ---------------------------------------------------------------------------

export const HOME = {
  heroWords: ["system", "region", "network", "city"],

  clients: [
    "Northfield Development Authority",
    "Deccan Transit Partners",
    "Riverbend Municipal Council",
    "Kestrel Infrastructure",
    "Meridian Housing Trust",
    "Saffron Grid Energy",
    "Lakeside Smart City Ltd.",
  ],

  problem:
    // *word* is set in the italic accent face
    "Most places are planned in *pieces.* Roads by one team, land by another, data by a third — and the gaps between them are where good projects quietly *fail.*",

  // tiles that scatter, then settle into one plan as the section scrolls
  fragments: [
    { label: "Architecture", x: -260, y: -170, r: -14 },
    { label: "Planning", x: 220, y: -210, r: 10 },
    { label: "Mobility", x: -300, y: 120, r: 8 },
    { label: "Environment", x: 280, y: 150, r: -9 },
    { label: "Geospatial", x: -90, y: 260, r: 16 },
    { label: "Digital & AI", x: 130, y: -300, r: -6 },
  ],

  steps: [
    {
      no: "01",
      title: "Understand the place",
      body: "Field surveys, stakeholder sessions and spatial data are gathered into one shared evidence base before anything is drawn.",
      img: img("1451187580459-43490279c0fa", 1400),
    },
    {
      no: "02",
      title: "Integrate the disciplines",
      body: "Planners, architects, engineers and analysts work from the same model, so trade-offs surface early instead of on site.",
      img: img("1497366754035-f200968a6e72", 1400),
    },
    {
      no: "03",
      title: "Design the system",
      body: "Land use, movement, water and buildings are designed together, then tested against scenarios for the next twenty years.",
      img: img("1477959858617-67f85cf4f1df", 1400),
    },
    {
      no: "04",
      title: "Deliver and keep it running",
      body: "Phased delivery plans, working drawings and live digital tools that the client’s own team keeps using after handover.",
      img: img("1519501025264-65ba15a82390", 1400),
    },
  ],

  results: [
    { to: 46, label: "Projects delivered" },
    { to: 14, label: "Cities & districts planned" },
    { to: 3.2, decimals: 1, suffix: "M", label: "Residents in planned areas" },
    { to: 8, label: "Disciplines, one team" },
  ],

  testimonials: [
    {
      quote:
        "For the first time our transport, land-use and utilities teams were looking at the same plan. Decisions that used to take a quarter took a fortnight.",
      name: "Planning Commissioner",
      org: "Northfield Development Authority",
    },
    {
      quote:
        "They didn’t hand us a report and leave. The spatial platform is still the first thing our engineers open every morning.",
      name: "Chief Engineer",
      org: "Riverbend Municipal Council",
    },
    {
      quote:
        "Architecture and infrastructure arrived as one proposal, already reconciled. That saved us a full redesign cycle.",
      name: "Head of Development",
      org: "Meridian Housing Trust",
    },
  ],

  faq: [
    [
      "What kinds of clients do you work with?",
      "Public authorities, municipal bodies, developers, infrastructure operators and institutions — anyone responsible for a place that has to work for decades.",
    ],
    [
      "Do we have to engage every discipline?",
      "No. Many projects start with one service, such as a GIS study or a building design. We bring in other disciplines only where they change the outcome.",
    ],
    [
      "How does a project usually start?",
      "With a short scoping conversation, then a paid discovery phase that sets the evidence base, scope and delivery plan before full commitment.",
    ],
    [
      "Can you build software for our team?",
      "Yes. Our digital team builds decision-support tools, dashboards and digital twins on top of the same data used in the planning work.",
    ],
    [
      "Where do you work?",
      "Our head office is in Telangana. We set up project offices close to the work for the duration of an engagement.",
    ],
  ],
};

// Who the practice works with (About page). Client types come from the About
// copy; the one-line descriptions are PLACEHOLDER wording.
export const SECTORS = [
  { title: "Government & public authorities", meta: "Master plans · policy · infrastructure", img: img("1477959858617-67f85cf4f1df", 900) },
  { title: "Private organisations", meta: "Buildings · campuses · feasibility", img: img("1497366754035-f200968a6e72", 900) },
  { title: "Academic institutions", meta: "Research · campus planning · training", img: img("1523240795612-9a054b0db644", 900) },
  { title: "Development partners", meta: "Programmes · capacity building · evaluation", img: img("1441974231531-c6227db76b6e", 900) },
];

// PLACEHOLDER: a typical hiring process, to be confirmed by the practice.
export const HIRING = [
  ["Apply", "Send a CV and two or three pieces of work you are proud of."],
  ["Conversation", "A relaxed call with a director about your work and interests."],
  ["Studio visit", "Meet the team and talk through a real project with us."],
  ["Offer", "A clear offer, usually within a week of the visit."],
];

// Head office location, for the map panel on the Offices page.
export const HQ = { lat: "17.63° N", lng: "78.48° E", tz: "Asia/Kolkata", tzLabel: "IST" };

export const VALUES = [
  ["Integrated by default", "Teams are formed around the problem, not around a department chart."],
  ["Evidence over assertion", "Positions are backed by data we collected or can trace."],
  ["Built to be used", "Deliverables are made for the people who have to operate them."],
  ["Long horizon", "We plan for the decade after the ribbon, not the week before it."],
];
