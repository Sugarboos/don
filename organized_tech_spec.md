# Website Development Prompt: DON LOGISTIK GmbH

## Company Research Required
**RESEARCH TASK**: Search the web and gather ALL available information about DON LOGISTIK GmbH before proceeding with development.

**Found Company Information**:
- **Company Name**: DON Logistik GmbH
- **Location**: Köln (Cologne), Germany
- **Address**: Methweg 4g, D-50823 Köln
- **Commercial Register**: HRB 110581 (Amtsgericht Köln)
- **Business Focus**: Commercial goods transport over 3.5 tons, transport and logistics services, car rental, logistics brokerage, security services
- **Management**: Alissa Mouayyad (Geschäftsführer)
- **Founded**: 09.05.2022 (previously Integral Security Agency ISA GmbH)
- **Previous Addresses**: Gottesweg 56, 50969 Köln → Godorfer Hauptstr. 63, 50997 Köln → Current Methweg 4g

**ACTION REQUIRED**: Report all findings about DON LOGISTIK and wait for client confirmation before proceeding with website development.

## Website Development Specifications

### 1. High-Performance Core Architecture
**Edge-Proxy Layer**: All form submissions, API calls, and AI logic managed at the Edge (Cloudflare Workers/Vercel Edge) for <50ms response times globally.

**Isomorphic Hydration**: "Zero-JS Core" with pre-rendered primary UI for instant visibility, using selective hydration for interactive modules.

**Early Hints (HTTP/103)**: Pre-loading critical assets (fonts, hero images) before document parsing to eliminate "blank screen" time.

**WASM Modules**: Offloading complex calculations (real-time ROI simulations) to WebAssembly for native-level browser performance.

## 2. Premium Design & Aesthetics
**Variable Typography**: Single variable font file (Inter Variable or Geist) controlling weight, slant, and optical sizing dynamically via scroll position.

**Fluid Spacing & Typography**: Mathematically calculated sizing using clamp() functions for pixel-perfect experience on 13" to 49" ultra-wide screens.

**Luxury Scroll Engine**: High-Refresh-Rate-Aware scroll damping system adapting physics based on monitor (60Hz vs 120Hz/144Hz).

**Glassmorphism Tokens**: Deeply layered backdrop-filter: blur() effects with multiple HSL-based border glows for futuristic feel.

**Industrial-Premium Aesthetic**: High-Contrast, Tech-Forward design with bold, heavy-duty typography (Geist Mono or Antonio) communicating strength and precision.

**Fleet Visualization**: WebGL/Three.js for interactive 3D map showing warehouse nodes and route networks.

**Micro-Animations**: Transitions mimicking industrial precision—mechanical, fast, and deliberate.

## 3. Advanced Systems & Logic
**Privacy-First Gating**: Non-intrusive cookie and script manager preventing tracking beacons (Pixel, GTM) until explicit granular consent.

**Streaming Content (SSE)**: Server-Sent Events for AI interaction, streaming text and UI components byte-by-byte into DOM.

**Vector Search Engine**: Site-wide search using Local Embeddings for semantic rather than keyword-based searches.

**Haptic Interface**: Vibration API on mobile devices for subtle physical feedback on form-success and navigation events.

## 4. Enterprise-Grade Workspace Structure
**Core Architecture**:
- `src/lib/`: Zero-dependency core functions for maximum speed and maintainability
- `src/services/`: Abstracted service layer for external API integrations (AI, CRM, Google Maps)
- `tests/e2e/`: Automated Playwright scripts verifying critical paths (lead capture and checkout)
- `src/styles/`: Modular CSS architecture separating design tokens from layout and utility logic

**Alternative Flat Structure**:
- `root/`: Main index.html, script.js, and styles.css
- `/[page-name]/`: Subpages in named folders with index.html (clean URLs)
- `/components/`: Reusable HTML fragments (navigation, footer, feature cards)
- `/css/`: Specialized stylesheets (loading-screen.css)
- `/js/`: Modular scripts (cookie-consent.js, meta-pixel-manager.js)
- `/assets/`: Logos, truck photos, icons

**Build Tool**: Vite as the build tool

## 5. Site Structure & Content
**Hero Section**: Clear headline (e.g., "Reliable Warehouse-to-Warehouse Logistics for the Modern Age")

**Our Services**: Brief sections on Importing/Exporting, Amazon Relay Partnership, and Long-haul trucking

**The Fleet**: Gallery showing truck types the company operates

**Reliability Stats**: Counters/icons showing "Years in Business," "Fleet Size," "On-Time Performance"

**Safety & Compliance**: Section showing full insurance and DOT compliance

## 6. Technical Quality Standards
**Mobile Excellence**: Instant loading and perfect appearance on mobile devices

**High-End Contact Form**: Professional "Contact Us" or "Request a Quote" form sending clean, formatted emails

**SEO**: Search engine optimization for "Trucking company in [City]" and "Import Export services"

**Speed**: <1 second load time using compressed modern images (WebP)

## 7. Compliance & Security
**HIPAA/GDPR Air-Gapping**: End-to-end encryption for all lead-captured data in browser before server contact

**Automated Accessibility (ARIA)**: Dynamic script ensuring 100% WCAG 2.2 Level AAA compliance for screen readers and keyboard navigation

**German GDPR Compliance**: Enhanced privacy features for German DSGVO requirements

## 8. German Legal Requirements & Compliance

### Mandatory Legal Pages (Impressum & Datenschutz)
**Impressum (Legal Notice)** - Required by German law (§5 TMG):
- Company name: DON Logistik GmbH
- Full address: Methweg 4g, D-50823 Köln
- Commercial register: HRB 110581, Amtsgericht Köln
- Managing director: Alissa Mouayyad
- Contact email: [to be provided]
- Phone number: [to be provided]
- VAT ID (USt-IdNr.): [to be provided if applicable]

**Datenschutz (Privacy Policy)** - Required by GDPR/DSGVO:
- Data collection purposes
- Cookie usage and consent management
- User rights under GDPR
- Data retention periods
- Contact for privacy matters
- International data transfer notices

### Additional Legal Requirements
**Cookie Consent Banner**: GDPR-compliant cookie management
**Terms of Service (AGB)**: For service contracts and bookings
**Disclaimer**: Liability limitations for content and external links

### Industry-Specific Compliance
**Transport Law Compliance**: References to German transport regulations (Güterkraftverkehrsgesetz)
**Security Services**: Proper disclosure of security service licensing (§34a GewO)
**Insurance Information**: Display of required transport insurance coverage

## 9. German Language & Localization

### Content Strategy
**Primary Language**: German (DE)
**SEO Keywords**: German logistics terms (Spedition, Güterverkehr, Transportdienstleistungen, Logistik Köln)
**Contact Forms**: German field labels and validation messages
**Error Messages**: German error handling and user feedback

### Cultural Adaptation
**Business Communication**: Formal German address (Sie instead of du)
**Phone Format**: German phone number formatting (+49 221...)
**Address Format**: German address standards
**Currency**: EUR pricing and formatting

## 10. Development Process

### Phase 1: Research & Confirmation
1. Comprehensive web search for DON LOGISTIK information
2. Competitor analysis of German logistics companies
3. Report all findings and wait for client confirmation

### Phase 2: Design & Structure
1. Create German sitemap with all legal pages
2. Design logistics-focused UI/UX
3. Plan German content strategy

### Phase 3: Development
1. Implement technical architecture
2. Build all mandatory legal pages
3. Create German-language content
4. Implement GDPR compliance features

### Phase 4: Testing & Launch
1. Legal compliance review
2. German SEO optimization
3. Performance testing
4. Mobile responsiveness verification

## 11. Enhanced Technical Features

### Logistics-Specific Features
**Fleet Management Display**: Showcase truck types and capabilities
**Route Visualization**: Interactive map showing service areas
**Quote Calculator**: Real-time pricing for transport services
**Tracking Integration**: Real-time shipment tracking capabilities
**Load Calculator**: Weight and volume calculation tools

### German Business Integration
**German Payment Systems**: SEPA, PayPal, German bank transfers
**German Business Software**: DATEV integration possibilities
**Local Service Areas**: Focus on Cologne/NRW region
**German Logistics Networks**: Integration with German transport associations
