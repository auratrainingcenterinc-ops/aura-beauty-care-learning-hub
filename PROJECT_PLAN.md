# AURA BEAUTY CARE LEARNING HUB PROJECT STRUCTURE

## Project Overview
- **Website Name**: AURA BEAUTY CARE LEARNING HUB
- **Course**: BEAUTY CARE (NAIL CARE) SERVICES NC II
- **Organization**: AURA TRAINING AND ASSESSMENT CENTER INC.
- **Tagline**: "Learn the Skills. Master the Art. Build Your Future."
- **Technology Stack**: Next.js (React), TypeScript, Tailwind CSS, Node.js, PostgreSQL
- **Deployment**: Netlify

## Directory Structure
```
aura-beauty-hub/
├── public/
│   ├── images/           # Professional nail care photography
│   ├── videos/           # Demonstration videos
│   └── pdfs/             # Downloadable resources
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # Backend API routes (Admin only)
│   │   ├── admin/        # Administrator Panel (Secure)
│   │   ├── auth/         # Admin authentication
│   │   ├── certificate/  # Certificate generation
│   │   ├── dashboard/    # Public learning dashboard (LocalStorage)
│   │   ├── lessons/      # Individual lesson viewer
│   │   ├── mock-exam/    # Comprehensive mock examination
│   │   ├── progress/     # Progress tracking
│   │   └── page.tsx      # Homepage
│   ├── components/       # UI Components (Mobile-first)
│   │   ├── admin/        # Admin-specific components
│   │   ├── course/       # Course cards, category navigation
│   │   ├── dashboard/    # Progress widgets, completed lessons
│   │   ├── lesson/       # Lesson viewer, video player, quiz interface
│   │   ├── navigation/   # Mobile/Desktop navigation
│   │   └── ui/           # Reusable components (Buttons, Cards, etc.)
│   ├── content/          # Learning Content (15 Competency Units)
│   │   ├── basic/        # Units 1-9 (Basic Competencies)
│   │   ├── common/       # Units 10-13 (Common Competencies)
│   │   └── core/         # Units 14-15 (Core Competencies - Special Emphasis)
│   ├── hooks/            # Custom hooks (LocalStorage, Progress, Quiz)
│   ├── lib/              # Database, Utilities, TESDA compliance
│   ├── styles/           # Tailwind configuration, Purple/Lavender theme
│   └── types/            # TypeScript definitions
├── prisma/               # PostgreSQL schema (Admin management)
├── .env.example          # Environment variables
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies
├── README.md             # Project documentation
└── tsconfig.json         # TypeScript configuration
```

## COMPETENCY UNITS (15 TOTAL)

### CATEGORY A: BASIC COMPETENCIES (Units 1-9)
1. 400311210: Participate in Workplace Communication
2. 400311211: Work in a Team Environment
3. 400311212: Solve/Address General Workplace Problems
4. 400311213: Develop Career and Life Decisions
5. 400311214: Contribute to Workplace Innovation
6. 400311215: Present Relevant Information
7. 400311216: Practice Occupational Safety and Health Policies and Procedures
8. 400311217: Exercise Efficient and Effective Sustainable Practices in the Workplace
9. 400311218: Practice Entrepreneurial Skills in the Workplace

### CATEGORY B: COMMON COMPETENCIES (Units 10-13)
10. SOC514201: Maintain an Effective Relationship with Client/Customer
11. SOC514202: Manage Own Performance
12. SOC514203: Apply Quality Standards
13. SOC514204: Maintain a Safe, Clean and Efficient Environment

### CATEGORY C: CORE COMPETENCIES (Units 14-15) - SPECIAL EMPHASIS
14. SOC514311: Perform Manicure and Pedicure (20 lessons)
15. SOC514312: Perform Hand and Foot Spa (23 lessons)

## KEY FEATURES
- Public access (No registration/login required for students)
- LocalStorage-based progress tracking
- Unit-based quizzes + Comprehensive mock examination
- Certificate of completion generation (PDF)
- Administrator panel (Secure, separate)
- Mobile-first responsive design
- TESDA compliance disclaimer
- Professional purple/white/lavender color palette
