# Patient Dashboard Design Guidelines

## Design Approach
**Reference-Based Approach**: Medical Dashboard/Healthcare Application
This is a **pixel-perfect conversion** of an existing Adobe XD template. Focus on exact replication of the provided design specifications rather than creative interpretation.

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- Background: `#F6F7F8` (Light gray background)
- Surface/Cards: `#FFFFFF` (White)
- Primary Text: `#072635` (Deep blue-gray)
- Secondary Text: `#707070` (Medium gray)

**Accent & Status Colors:**
- Pink accent: `#FFE6F1`, `#FFE6E9`, `#E66FD2`, `#C26EB4`
- Cyan accent: `#E0F3FA`, `#01F0D0`, `#D8FCF7`
- Purple accent: `#F4F0FE`, `#8C6FE6`, `#7E6CAB`
- Borders: `#E3E4E6`, `#EDEDED`
- Overlays: `#C8CCD4` (14% and 1A opacity variants)

### B. Typography
**Font Family**: Manrope (via Google Fonts)

**Type Scale:**
- Extra Bold 30px: Main headings
- Extra Bold 24px: Card titles
- Bold 22px: Section headers
- Bold 18px: Inner card titles
- Bold 14px: Emphasized body
- Medium 16px: Medium emphasis
- Medium 14px: Labels
- Regular 14px: Body text
- Regular 13px: Small text
- Regular 12px: Captions

**Text Colors:**
- Primary: `#072635`
- Secondary: `#707070`

### C. Layout System
**Design Dimensions**: 1600px × 1195px

**Spacing Units**: Use precise spacing from XD template
- Standard card padding: 20px
- Section gaps: 20px
- Component spacing: 12-16px intervals
- Grid gaps: 14-20px

**Container Structure:**
- Left Sidebar: ~367px fixed width with patient list
- Main Content Area: Flexible, containing dashboard cards
- Top Header: Full width with logo, search, settings

### D. Component Library

**Navigation Sidebar:**
- Fixed left panel with logo at top
- Patient list with profile pictures (40-48px circular avatars)
- Active patient highlighted with distinct background
- Vertical scrollable list

**Header Bar:**
- Logo (left)
- Search input with icon (center-left)
- Settings/profile icons (right)
- Clean white background with subtle bottom border

**Dashboard Cards:**
- White background with rounded corners (12px radius)
- Subtle shadow: `0 2px 8px rgba(0,0,0,0.08)`
- 20px internal padding
- Card titles: Bold 24px Manrope

**Blood Pressure Chart:**
- Use Chart.js for line graph
- Display systolic (upper) and diastolic (lower) values
- X-axis: Last 6 months chronologically
- Y-axis: Pressure values (0-180 range)
- Two colored lines (pink/purple for systolic, cyan for diastolic)
- Grid lines with light gray `#E3E4E6`
- Rounded line joints, smooth curves

**Vital Signs Cards:**
- Small stat cards in grid layout (3 columns)
- Icon + value + label + level indicator
- Color-coded backgrounds (pink, cyan, purple tints)
- Icon size: 64-72px
- Value: Bold 22px
- Level text: Regular 14px with colored dot indicator

**Patient Profile Section:**
- Profile picture: 200px circular
- Patient name: Extra Bold 24px
- Demographics in two columns
- Icons + labels + values layout
- Subtle divider lines between info rows

**Diagnostic List:**
- Table/list layout with condition name, description, status
- Status badges with rounded backgrounds
- Colored status indicators (green/yellow based on status)

**Lab Results:**
- Simple list with download icon
- Icon size: 16-20px
- Regular 14px text
- Hover state for download interaction

### E. Responsive Behavior

**Desktop (1600px)**: Primary design target - match XD exactly
**Tablet (768-1024px)**: 
- Sidebar collapses to icon-only or hamburger menu
- Main content stacks into 2 columns
- Chart maintains readability

**Mobile (320-767px)**:
- Full single-column layout
- Sidebar becomes slide-out menu
- Cards stack vertically
- Chart scales to container width
- Profile section reorganizes to single column

### F. Data Integration Notes

**API Endpoint**: `https://fedskillstest.coalitiontechnologies.workers.dev`
**Authentication**: Basic Auth (encrypt 'coalition:skills-test')
**Target Patient**: Jessica Taylor only

**Data Mapping:**
- Profile picture: `profile_picture` URL
- Demographics: `name`, `gender`, `age`, `date_of_birth`, `phone_number`, `emergency_contact`, `insurance_type`
- Chart data: `diagnosis_history` array (last 6 months)
- Vitals: Latest month from `diagnosis_history`
- Diagnostics: `diagnostic_list` array
- Lab results: `lab_results` array

### G. Images
**Profile Pictures**: Circular avatars from API URLs
**Icons**: Use Material Icons or similar for vitals, download, navigation
**No Hero Section**: This is a dashboard application - content starts immediately below header

## Implementation Priorities
1. **Pixel-perfect accuracy** to XD template
2. Proper API integration with encrypted Basic Auth
3. Chart.js implementation matching design aesthetics
4. Responsive layout that maintains design integrity
5. Clean, semantic HTML with proper data binding