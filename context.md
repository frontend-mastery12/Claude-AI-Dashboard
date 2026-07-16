# Fitness/Gym SaaS Dashboard Context

## Purpose
Provide a concise, high-density blueprint for a premium Fitness/Gym SaaS dashboard built with React (Vite), Tailwind CSS, React Router DOM, and Recharts. This file is optimized as a context window reference for AI coding agents, focusing on architecture, UI structure, theme, and interaction patterns.

## Design Language
- Theme: premium dark mode
- Primary canvas: #0A0A0A
- Secondary surfaces: #111111
- Accent: #7CFF6B
- Typography: modern, crisp, high contrast
- Spacing: tight yet breathable, emphasizing content hierarchy without clutter
- Visual system: layered cards, subtle gradients, luminous accents, soft borders, and glassmorphism-inspired overlays

## Layout System
Root layout comprises three persistent regions:

1. Sidebar
  - Fixed navigation panel on the left
  - Vertical structure with brand mark, nav links, and utilities
  - Active state accent with #7CFF6B
  - Sections: Brand, Navigation, Quick actions, User profile

2. Topbar
  - Horizontal header across the top of content area
  - Displays page title, search, actions, notifications, and profile quick access
  - Uses semi-transparent surface on #111111 with subtle border or shadow

3. Main Content Area
  - Page-specific modules rendered inside the content panel
  - Responsive grid/stack layout with header block, KPI cards, charts, lists, and tables
  - Maintains consistent padding and spacing for page sections

## Core Pages

### Dashboard
Focus on health performance, member activity, and gym operations at a glance.

Key sections:
- Hero KPI row: active members, weekly revenue, class utilization, new leads
- Activity summary: recent check-ins, session bookings, coach availability
- Workout completion metric: progress ring or sparkline
- Revenue overview: compact area/line chart from Recharts
- Member pulse: cards for top-performing trainers, new signups, membership churn risk

Interaction patterns:
- Clear calls to action for member onboarding, class scheduling, and campaign launches
- Hover / selected states on cards with subtle glow accent
- Responsive card layout: 2- to 3-column grid on desktop, stacked on mobile

### Transactions
Focus on financial records, membership payments, purchases, and refunds.

Key sections:
- Transaction table with columns: Date, Member, Plan, Amount, Status
- Row selection using checkboxes
- Bulk actions toolbar when one or more rows selected: Delete, Archive, Export
- Deletion state feedback: modal or inline banner with undo
- Filtering and search controls for transaction type, status, date range
- Paging / compact summary in footer

Interaction patterns:
- Checkbox row selection toggles bulk action state
- Selected row styling uses accent highlight plus dark surface
- Bulk delete confirmation must preserve premium tone and clarity

### Analytics
Focus on deeper performance metrics for operations, revenue, and user behavior.

Key sections:
- Revenue trend chart: quarterly or monthly performance using area/line chart
- Conversion funnel: membership signup, trial activation, retention rate
- Engagement analytics: workout sessions, class attendance, personal training uptake
- Heatmap or segmented bar chart for top workout categories and time slots
- Comparison cards: current vs prior period, target attainment, forecast

Interaction patterns:
- Chart legends and toggles in the heading area
- Tooltips with dark theme hover states
- Data cards that surface selected metrics next to charts

## Component Pattern
- `Sidebar`: navigation menu with icon+label items, collapsible or fixed width
- `Topbar`: page context, search, action buttons, notification icon, profile dropdown
- `PageShell`: wraps route content with consistent shadowed panel and padding
- `Card`: reusable surface with title, optional action link, and content area
- `Table`: dark theme row styling, selectable checkbox column, pagination
- `ChartPanel`: reusable wrapper for Recharts charts and legends
- `MetricTile`: small horizontal/vertical summary widgets with values and trends

## Routing
- `/` → Dashboard page
- `/transactions` → Transactions page
- `/analytics` → Analytics page
- React Router DOM handles navigation, active route styling, and selected page title

## Directory Tree
```text
src/
├── app/
│   └── MainLayout.jsx (with Sidebar & Topbar)
├── components/
│   ├── ui/ (Card.jsx, Button.jsx, Table.jsx, Badge.jsx)
│   └── shared/ (SearchBar.jsx)
├── pages/
│   ├── Dashboard/ (Dashboard.jsx, dashboardData.js, components/)
│   ├── Transactions/ (Transactions.jsx, transactionData.js, components/)
│   └── Analytics/ (Analytics.jsx, analyticsData.js, components/)
└── utils/
    └── cn.js (using clsx and tailwind-merge)
```

## Data Contract & State Flow
- Transactions mock data must use this exact schema:
  - `id`
  - `date`
  - `member`
  - `service`
  - `paymentMethod`
  - `amount`
  - `status`
- State ownership:
  - Transaction state must live inside `Transactions.jsx`
  - `Transactions.jsx` passes handler props such as `onToggleSelect` and `onDelete` to child components
  - Child components are presentational and receive data plus action callbacks from the parent

## UI Behavior
- Navigation state driven by router path
- Hover states with faint glow and scale micro-interactions
- Dark mode surfaces rely on layered contrast (#0A0A0A background, #111111 cards, #7CFF6B accent)
- Buttons: primary accent filled, secondary ghost-style with light borders
- Alerts and status chips: success (#7CFF6B), warning (#F5B700), neutral (#9CA3AF)
- Use `aria` attributes and keyboard focus outlines for accessibility

## Tailwind CSS Strategy
- Use custom theme colors, gradients, and shadows via `tailwind.config.js`
- Build utility-first responsive layouts with `grid`, `flex`, `gap`, `p-`, `rounded-xl`
- Create component classes for recurring patterns: `.panel`, `.metric-card`, `.nav-item`, `.table-row`
- Keep markup semantically organized and easy to scan

## Recharts Usage
- Use responsive containers and dark theme chart styles
- Recommended chart types:
  - `LineChart` / `AreaChart` for trends
  - `BarChart` for category comparisons
  - `PieChart` or `RadialBarChart` for distribution summaries
- Integrate tooltips and legends with custom dark variants
- Avoid excessive chart decoration; use simple, readable series and accent strokes

## Tone and Goals
- Premium, polished, minimalist, and data-forward
- Dark mode should feel immersive, not heavy
- UI should communicate energy, performance, and clarity for gym operators
- Maintain consistent spacing, typography, and accent usage across pages
- Prioritize an intuitive dashboard experience with high information density and elegant interactions
