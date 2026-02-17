# Stock4U Project Structure

## 📁 Project Organization

This project follows the **Fusion Starter** architecture with React + Express integration.

### 🏗️ Root Structure
```
stock4u/
├── 📄 AGENTS.md                 # Development guidelines
├── 📄 PROJECT_STRUCTURE.md      # This documentation
├── 📄 package.json              # Dependencies and scripts
├── 📄 tsconfig.json             # TypeScript configuration
├── 📄 tailwind.config.ts        # Tailwind + Stock4U colors
├── 📄 vite.config.ts            # Main Vite config
├── 📄 vite.config.server.ts     # Server build config
├── 📄 components.json           # shadcn/ui configuration
├── 📄 index.html                # Entry HTML file
├── 📁 client/                   # Frontend React app
├── 📁 server/                   # Backend Express server
├── 📁 shared/                   # Shared types/utilities
├── 📁 public/                   # Static assets
└── 📁 netlify/                  # Deployment configuration
```

### 🎨 Frontend Structure (`client/`)
```
client/
├── 📄 App.tsx                   # Main app component with providers
├── 📄 main.tsx                  # React entry point
├── 📄 global.css                # Global styles + CSS variables
├── 📄 routes.tsx                # Organized route definitions
├── 📄 vite-env.d.ts             # Vite type definitions
│
├── 📁 components/               # Reusable components
│   ├── 📄 Header.tsx            # Main navigation header
│   ├── 📄 Footer.tsx            # Site footer
│   ├── 📄 StepHero.tsx          # Progress indicator
│   ├── 📄 RedCard.tsx           # Gift card component
│   └── 📁 ui/                   # shadcn/ui component library
│       ├── 📄 button.tsx
│       ├── 📄 card.tsx
│       ├── 📄 input.tsx
│       └── ... (40+ UI components)
│
├── 📁 pages/                    # Page components (route handlers)
│   ├── 📄 Index.tsx             # Home/landing page
│   ├── 📄 Login.tsx             # User authentication
│   ├── 📄 SMSVerification.tsx   # Phone verification
│   ├── 📄 StockSelection.tsx    # Choose stocks for gift
│   ├── 📄 Cart.tsx              # Shopping cart
│   ├── 📄 GiftDesign.tsx        # Customize gift appearance
│   ├── 📄 OrderDetails.tsx      # Recipient information
│   ├── 📄 OrderSummary.tsx      # Final review
│   ├── 📄 Checkout.tsx          # Payment processing
│   ├── 📄 PaymentSuccess.tsx    # Payment confirmation
│   ├── 📄 PurchaseSuccess.tsx   # Purchase completion
│   ├── 📄 PurchaseError.tsx     # Error handling
│   ├── 📄 About.tsx             # About page
│   ├── 📄 Careers.tsx           # Careers page
│   └── 📄 NotFound.tsx          # 404 page
│
├── 📁 contexts/                 # React context providers
│   └── 📄 GiftContext.tsx       # Gift state management
│
├── 📁 hooks/                    # Custom React hooks
│   ├── 📄 use-mobile.tsx        # Mobile detection
│   └── 📄 use-toast.ts          # Toast notifications
│
└── 📁 lib/                      # Utility functions
    ├── 📄 utils.ts              # General utilities
    └── 📄 utils.spec.ts         # Unit tests
```

### 🔧 Backend Structure (`server/`)
```
server/
├── 📄 index.ts                  # Express server setup
├── 📄 node-build.ts             # Production build entry
└── 📁 routes/                   # API route handlers
    └── 📄 demo.ts               # Example API endpoint
```

### 🌐 Shared Structure (`shared/`)
```
shared/
└── 📄 api.ts                    # Shared API interfaces and types
```

## 🎨 Design System

### Colors (Stock4U Brand)
All colors are defined in `tailwind.config.ts`:

```typescript
"stock4u": {
  white: "#FFF",
  "dark-grey": "#486284",
  "nostalgic-blue": "#689EDA", 
  "pop-yellow": "#FFC547",
  "happy-blue": "#4C7EFB",
  grey: "#8CA2C0",
  black: "#1B1919",
  "light-blue": "#DBE3F3",
}
```

### Usage in Components
```tsx
// Tailwind classes
className="bg-stock4u-happy-blue text-stock4u-white"

// Inline styles
style={{ backgroundColor: "#4C7EFB" }}
```

## 🛣️ Application Flow

The app follows a **gift purchase funnel**:

1. **Home** (`/`) → Landing page with marketing content
2. **Login** (`/login`) → User authentication
3. **SMS Verification** (`/sms-verification`) → Phone number verification
4. **Stock Selection** (`/stock-selection`) → Choose stocks for the gift
5. **Cart** (`/cart`) → Review selected stocks
6. **Gift Design** (`/gift-design`) → Customize gift card appearance
7. **Order Details** (`/order-details`) → Add recipient information
8. **Order Summary** (`/order-summary`) → Final review before payment
9. **Checkout** (`/checkout`) → Payment processing (supports multiple methods)
10. **Success/Error** → Completion pages

## 🔧 Development

### Key Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run typecheck    # TypeScript validation
npm test            # Run tests
```

### Development Server
- **Frontend**: Vite dev server on port 5173
- **Backend**: Express server integrated with Vite
- **Hot Reload**: Both client and server code

### Path Aliases
```typescript
"@/*"        → "./client/*"
"@shared/*"  → "./shared/*"
```

## 🚀 Deployment

### Netlify (Recommended)
- Uses `netlify.toml` configuration
- Serverless functions in `netlify/functions/`
- Automatic deployments from Git

### Production Build
```bash
npm run build        # Builds both client and server
```

## ��� Key Dependencies

### Frontend
- **React 18** - UI framework
- **React Router 6** - Client-side routing
- **TailwindCSS** - Styling framework
- **shadcn/ui** - Component library
- **React Query** - Data fetching
- **Framer Motion** - Animations

### Backend
- **Express** - Web server
- **Zod** - Schema validation
- **CORS** - Cross-origin support

### Development
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Vitest** - Testing framework

## 🧹 Recent Cleanup (Migration Log)

### ✅ Completed Improvements
1. **Removed Duplicate Files**:
   - `temp_figma_content.txt` (temporary file)
   - `client/pages/Index.backup.tsx` (duplicate)
   - `client/pages/Index.broken.tsx` (duplicate)
   - `client/pages/Index.current.tsx` (duplicate)
   - `client/pages/Index.old.tsx` (duplicate)

2. **Created Organized Routing**:
   - Added `client/routes.tsx` with documented route structure
   - Updated `client/App.tsx` to use centralized routing
   - Added comprehensive route documentation

3. **Enhanced Documentation**:
   - Created this `PROJECT_STRUCTURE.md` file
   - Added inline code documentation
   - Documented application flow and architecture

### ✅ Preserved (Not Changed)
- All working components and their styling
- Stock4U color scheme and branding
- Form logic and validation systems
- Navigation functionality
- Design patterns and UI components
- Server configuration and API routes
- Build system and deployment setup

## 🎯 Development Guidelines

1. **File Organization**: Follow the established structure
2. **Naming Conventions**: Use PascalCase for components, camelCase for functions
3. **Styling**: Use TailwindCSS classes with Stock4U color palette
4. **Types**: Add TypeScript types for all new components/functions
5. **Testing**: Add tests for utility functions and complex components
6. **Documentation**: Update this file when adding new major features

## 🔗 Useful Links

- [Fusion Starter Docs](./AGENTS.md)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/docs)
- [React Router Documentation](https://reactrouter.com/docs)
