import { defineLocale } from '../schema';

export default defineLocale({
  code: 'en', dir: 'ltr',
  meta: {
    title: 'Yihao Bian — Water, Science & Innovation',
    description: 'The personal nexus of Yihao Bian, a doctoral researcher in drinking-water safety and an environmental technology founder.',
  },
  nav: { about: 'About', research: 'Research', publications: 'Publications', ventures: 'Ventures', honors: 'Honors', global: 'Global', life: 'Life', contact: 'Contact' },
  home: {
    subtitle: 'Water · Science · Innovation', role: 'PhD Candidate · Researcher · Founder', enter: 'Enter the nexus', skip: 'Skip experience', loading: 'Calibrating the nexus', quickContact: 'Quick contact', downloadCv: 'Download CV', cvPending: 'CV coming soon', reduceMotion: 'Reduce motion', restoreMotion: 'Restore motion', twoD: 'Use 2D view', explore: 'Choose a node to explore', canvasLabel: 'An interactive personal universe with eight orbiting knowledge nodes.', fallbackTitle: 'Explore the personal universe',
  },
  common: { home: 'Nexus', back: 'Back to nexus', menu: 'Navigation', language: 'Language', viewDetails: 'Explore', contentPending: 'Verified details pending', verifiedFactsOnly: 'This page intentionally shows only verified information.', close: 'Close' },
  sectionMeta: {
    about: { kicker: '01 / Center of gravity', title: 'A researcher working across systems', summary: 'Yihao connects drinking-water research, environmental engineering, entrepreneurship and international exchange.' },
    research: { kicker: '02 / Questions in motion', title: 'Research for safer water systems', summary: 'Six connected directions examine water quality from treatment interfaces to distribution networks and emerging environments.' },
    publications: { kicker: '03 / Evidence archive', title: 'Publications', summary: 'A data-driven scholarly record prepared for verified journal articles, manuscripts and works in progress.' },
    ventures: { kicker: '04 / From insight to action', title: 'Environmental ventures', summary: 'Initiatives translating water science and digital thinking into practical, collaborative solutions.' },
    honors: { kicker: '05 / Signals of recognition', title: 'Honors in orbit', summary: 'Selected academic and innovation recognitions, arranged as a constellation rather than a conventional timeline.' },
    global: { kicker: '06 / Across boundaries', title: 'Global exchange', summary: 'Regional dialogue, international study and future-facing collaboration around environment and sustainability.' },
    life: { kicker: '07 / Beyond the laboratory', title: 'Life and perspective', summary: 'A future space for confirmed interests, travel, cultural exchange and the experiences that shape the person behind the work.' },
    contact: { kicker: '08 / Open channel', title: 'Start a conversation', summary: 'Verified contact channels will appear here as soon as they are provided.' },
  },
  about: [
    { title: 'Education', body: 'Doctoral candidate at the College of Environmental Science and Engineering, Tongji University.' },
    { title: 'Academic focus', body: 'Environmental engineering and drinking-water safety, with attention to how scientific questions connect to real systems.' },
    { title: 'Entrepreneurship', body: 'Founder of Shanghai Jingshuiji Environmental Technology Co., Ltd., exploring responsible translation from research to practice.' },
    { title: 'Leadership', body: 'Works at the intersection of academic inquiry, engineering collaboration and innovation initiatives.' },
    { title: 'Personal mission', body: 'To connect rigorous water science with human needs, useful technology and international cooperation.' },
  ],
  research: {
    'drinking-water': { title: 'Drinking Water Safety', question: 'How can drinking-water systems remain safe from source to tap?', description: 'This direction considers drinking-water safety as a connected system rather than a single treatment step. It focuses on questions spanning water quality, treatment processes, transport and end-user exposure, while leaving specific methods and findings to verified project records.' },
    biofilms: { title: 'Distribution System Biofilms', question: 'How do biofilms reshape water quality inside distribution networks?', description: 'Biofilms are living interfaces within water infrastructure. This direction examines their relationship with pipe environments, microbial processes and changes in distributed water quality. Detailed organisms, experimental conditions and conclusions will be added only from confirmed research materials.' },
    'heavy-metals': { title: 'Heavy Metal Migration', question: 'What controls the release, transport and transformation of metals in water systems?', description: 'This work frames heavy-metal migration as an interaction among water chemistry, infrastructure surfaces and operating conditions. The section is prepared to connect mechanisms, analytical approaches and practical risk questions once verified project descriptions and results are available.' },
    disinfection: { title: 'Disinfection and Endotoxin', question: 'How can disinfection control microbial risk without overlooking resistant components?', description: 'This direction explores the relationship between disinfection strategies, microbial inactivation and bacterial endotoxin. It is designed to document research questions, validated methods and outcomes without extrapolating beyond evidence supplied by the researcher.' },
    nanofiltration: { title: 'Nanofiltration and Resource Recovery', question: 'Can selective membrane processes improve water treatment while recovering value?', description: 'Nanofiltration is considered here as both a separation process and a platform for resource-aware treatment. Future content may cover selectivity, membrane interactions, process design and recovery pathways after the relevant projects and findings are formally confirmed.' },
    microplastics: { title: 'Arctic Microplastics', question: 'What can remote environments reveal about the movement and persistence of microplastics?', description: 'This direction extends the water perspective to Arctic microplastics and long-range environmental processes. The current page establishes a careful editorial structure; locations, sampling campaigns, collaborators and results remain intentionally unspecified until verified.' },
  },
  publications: { emptyTitle: 'The publication archive is being verified.', emptyBody: 'No paper titles, journals or DOI records have been invented. A complete list can be added through the central data file when confirmed.', filters: ['Published', 'Under Review', 'In Preparation'] },
  ventures: {
    jingshuiji: { title: 'Jingshuiji High-Quality Direct Drinking Water', descriptor: 'A venture entry reserved for verified information about the problem, solution, role, progress and impact.' },
    'silent-aid': { title: 'Jingshui Silent Aid', descriptor: 'A high-quality drinking-water international cooperation concept for Belt and Road contexts; operational details require confirmation.' },
    'ing-products': { title: 'ING Digital Products', descriptor: 'A portfolio structure for confirmed environmental technology and digital product initiatives.' },
  },
  ventureFields: { problem: 'Problem', solution: 'Solution', role: 'My role', progress: 'Progress', impact: 'Impact', gallery: 'Gallery', link: 'External link' },
  honors: {
    nationalScholarship: '2025 National Scholarship for Doctoral Students', beijingGraduate: '2024 Outstanding Graduate of Beijing', masterThesis: '2024 Outstanding Master’s Thesis', academicTalent: '2025 Top Ten “Academic Talents”, College of Environmental Science and Engineering, Tongji University', marineForum: '2025 Grand Prize, 8th National Graduate Forum on Environment and Marine Studies', tongjiInnovation: '2025 First Prize, 4th Around-Tongji Innovation, Entrepreneurship and Creativity Competition', ecoCompetition: '2025 First Prize, East and South China Division, 20th National Environment-Friendly Science and Technology Competition', innovationSilver: '2025 Silver Award, Tongji University Industry Track, China International College Students’ Innovation Competition',
  },
  global: {
    regionalExchange: { title: 'China–Japan–Korea doctoral exchange', body: 'Regional dialogue on environment and sustainable development. Dates, institutions and contribution details await confirmation.' },
    gist: { title: 'Exchange at GIST, Korea', body: 'A reserved record for the confirmed context, programme and reflections from the GIST exchange experience.' },
    summerSchool: { title: 'International summer school', body: 'A structure for verified programme, location, subject and participation information.' },
    collaboration: { title: 'Cross-cultural academic collaboration', body: 'A space for documented collaborations that connect disciplines, institutions and cultural perspectives.' },
    future: { title: 'Future directions', body: 'Open to international conversations around water safety, environmental engineering and responsible innovation.' },
  },
  life: { title: 'A human layer, intentionally unfinished', body: 'Personal interests and experiences have not yet been confirmed. This space will remain quiet rather than invent hobbies, skills or stories.' },
  contact: { title: 'Verified channels only', body: 'Email and social links are hidden until supplied and confirmed.', unavailable: 'Contact details are being prepared.', copy: 'Copy contact', save: 'Save contact' },
});
