# NTimes.AI - AI Solutions Platform

## Overview

NTimes.AI is a modern full-stack web application designed to showcase AI solutions for global businesses. The application features a sophisticated landing page with multiple sections highlighting the company's products, solutions, and services. Built with React and TypeScript on the frontend and Express.js on the backend, the platform provides an engaging user experience with a professional design and smooth interactions.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful API architecture
- **Data Storage**: Currently uses in-memory storage with interface for database abstraction
- **Database ORM**: Drizzle ORM configured for PostgreSQL (ready for database integration)
- **Session Management**: PostgreSQL session store configuration available

### Design System
- **Color Scheme**: Professional blue and neutral palette with accent colors
- **Typography**: Modern, clean font hierarchy
- **Components**: Comprehensive component library with consistent styling
- **Responsive Design**: Mobile-first approach with breakpoint optimization

## Key Components

### Frontend Components
1. **Layout Components**
   - Header with smooth scroll navigation and active section tracking
   - Footer with social links and company information
   - Responsive navigation with mobile menu

2. **Content Sections**
   - Hero section with call-to-action buttons
   - Features showcase with icon-based cards
   - Products gallery highlighting SuperAgent and ZipTrip
   - Solutions overview with detailed service descriptions
   - About section with company values and team highlights
   - Contact form with validation and submission handling

3. **UI Components**
   - Complete shadcn/ui component library
   - Custom form components with validation
   - Toast notifications for user feedback
   - Responsive card layouts and buttons

### Backend Components
1. **API Endpoints**
   - Contact form submission endpoint with validation
   - Extensible route structure for future features

2. **Data Layer**
   - Abstract storage interface for future database integration
   - Zod schemas for data validation
   - Drizzle ORM configuration for PostgreSQL

3. **Development Tools**
   - Vite integration for development server
   - Hot module replacement and error handling
   - Request logging and error middleware

## Data Flow

1. **User Interaction**: Users interact with the landing page sections and navigation
2. **Smooth Scrolling**: Navigation triggers smooth scroll to target sections with active state tracking
3. **Form Submission**: Contact form data is validated client-side using Zod schemas
4. **API Communication**: TanStack Query handles API requests with proper error handling
5. **Server Processing**: Express.js processes requests, validates data, and stores submissions
6. **User Feedback**: Toast notifications provide immediate feedback on form submissions

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Database connectivity for Neon PostgreSQL
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form handling and validation
- **zod**: Schema validation for TypeScript
- **tailwindcss**: Utility-first CSS framework

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **lucide-react**: Icon library
- **class-variance-authority**: Variant-based component styling
- **cmdk**: Command menu component

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type safety and development experience
- **tsx**: TypeScript execution for Node.js

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Assets**: Static assets are properly referenced and optimized

### Deployment Configuration
- **Platform**: Replit with autoscale deployment
- **Environment**: Production and development environments supported
- **Port Configuration**: Configured for port 5000 with external port 80
- **Database**: PostgreSQL 16 module configured for production use

### Scripts
- `npm run dev`: Development server with hot reloading
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server startup
- `npm run db:push`: Database schema deployment

## Recent Changes

- **June 25, 2025**: Enhanced website with professional animations and interactions
  - Added smooth fade-in animations for hero section text
  - Implemented hover animations for feature cards with scale and icon effects
  - Enhanced product cards with image zoom and transform effects
  - Added floating animation for CTA section icon
  - Improved navigation with underline hover effects and backdrop blur
  - Implemented custom CSS animations for professional user experience
  - Added parallax effects and smooth transitions throughout
  - Updated team leadership section with specific member names and designations:
    - Srinivas Ments (CEO), Kiran Mandadi (CFO), Rajesh N (Digital Marketing Manager)
    - Hariharan R B, Thilak Sai K, Mahalakshmi A, Harish A (AI Engineers)
  - Enhanced homepage with advanced animations:
    - Added slow background zoom and geometric floating elements to hero section
    - Improved product card layouts with proper image fitting using object-contain
    - Added text reveal animations, button glow effects, and scroll indicators
    - Enhanced feature cards with progressive reveal animations and hover effects
    - Added animated background elements to CTA section
    - Integrated Framer Motion for smooth animations with staggered text reveals
    - Improved text visibility with backdrop blur and semi-transparent backgrounds
    - Removed blue overlay from hero background for cleaner image display

## User Preferences

- Communication style: Simple, everyday language
- Design preference: Exact matching over creative interpretation
- Hero text: Bold white color for all hero section text
- UI preference: Remove "Get Started" and "Learn More" buttons from website
- Visual content: Added about image showing AI connectivity and NTimes.AI branding