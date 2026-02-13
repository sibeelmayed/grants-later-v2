# Grants Later v2.0 🚀

> Modern grant management system with AI-powered validation, real-time updates, and bidirectional Notion sync

[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

## 🎯 Features

- **🤖 AI Quick Entry**: Natural language transaction input powered by Perplexity
- **⚡ Real-time Validation**: Instant feedback with V001-V201 rule engine
- **🔄 Notion Sync**: Bidirectional sync with 8 Notion databases
- **📊 Live Portfolio**: Real-time metrics and analytics
- **🔒 Secure**: Row-level security with Supabase Auth
- **📦 Modular**: Self-contained, deployable modules

## 📦 Architecture

```
grants-later-v2/
├── 01-foundation/         # ✓ Complete - TypeScript, Vite, Tooling
├── 02-design-system/      # 🚧 Next - Shadcn/UI Components
├── 03-database/           # Supabase Schema & Migrations
├── 04-api-core/          # FastAPI Backend
├── 05-validation-engine/ # V001-V201 Rules
├── 06-frontend-shell/    # React App Shell
├── 07-notion-sync/       # Notion Integration
├── 08-ai-intelligence/   # Perplexity Integration
├── 09-deployment/        # Docker, CI/CD
└── 10-testing/           # E2E Tests, Load Tests
```

## 🚀 Quick Start

### Prerequisites

- Node.js ≥ 20.0.0
- npm ≥ 10.0.0
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/sibeelmayed/grants-later-v2.git
cd grants-later-v2

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format with Prettier
npm run type-check   # TypeScript type checking
npm run test         # Run tests
npm run test:ui      # Run tests with UI
npm run test:coverage # Generate coverage report
```

### Code Quality Standards

- **TypeScript**: 100% coverage (strict mode)
- **ESLint**: Zero warnings policy
- **Prettier**: Auto-formatting on save
- **Testing**: ≥80% coverage target
- **Commits**: Conventional commits format

## 📚 Module Implementation Status

### Module 01: Foundation ✅

**Status**: Complete  
**Files**: 12  
**Lines of Code**: ~500  

- [x] TypeScript configuration (strict mode)
- [x] Vite build setup with optimizations
- [x] ESLint + Prettier
- [x] Tailwind CSS + design tokens
- [x] React 18.3 with TanStack Query & Router
- [x] Environment validation with Zod
- [x] Test setup with Vitest
- [x] Basic project structure

**Next Up**: Module 02 - Design System

### Module 02: Design System 🚧

**Status**: Planned  
**Deliverables**:

- [ ] Shadcn/UI component library integration
- [ ] Core components (Button, Card, Input, etc.)
- [ ] Form components with validation
- [ ] Data table with sorting/filtering
- [ ] Toast notifications
- [ ] Component documentation (Storybook)

### Module 03: Database 📅

**Status**: Planned  
**Deliverables**:

- [ ] Supabase project setup
- [ ] Database schema (grants, transactions, etc.)
- [ ] RLS policies
- [ ] Migration scripts
- [ ] Seed data

### Module 04-10

See [ROADMAP.md](./docs/ROADMAP.md) for complete module breakdown

## 📝 Environment Variables

```bash
# Supabase (Required for auth & database)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# API Configuration
VITE_API_URL=http://localhost:8000

# Feature Flags
VITE_ENABLE_AI=true
VITE_ENABLE_NOTION_SYNC=true

# Environment
VITE_ENV=development
```

## 🧑‍💻 Tech Stack

### Frontend

- **Framework**: React 18.3
- **Language**: TypeScript 5.7 (strict)
- **Build Tool**: Vite 6.0
- **Routing**: TanStack Router
- **State**: TanStack Query
- **Styling**: Tailwind CSS 3.4
- **Components**: Shadcn/UI + Radix UI
- **Forms**: React Hook Form + Zod

### Backend (Coming Soon)

- **Framework**: FastAPI
- **Database**: Supabase (PostgreSQL)
- **ORM**: SQLAlchemy
- **Validation**: Pydantic
- **AI**: Perplexity API
- **Sync**: Notion API

### DevOps

- **CI/CD**: GitHub Actions
- **Testing**: Vitest + Testing Library
- **Linting**: ESLint 9 + Prettier
- **Deployment**: Docker + Vercel/Railway

## 📊 Project Stats

- **Total Files**: 12
- **Lines of Code**: ~500
- **Dependencies**: 8
- **Dev Dependencies**: 17
- **Build Time**: <5s
- **Bundle Size**: TBD

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./docs/CONTRIBUTING.md) first.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: bug fix
docs: documentation changes
style: code style changes
refactor: code refactoring
test: add tests
chore: tooling/config changes
```

## 📝 Documentation

- [Architecture Overview](./docs/ARCHITECTURE.md)
- [Module Roadmap](./docs/ROADMAP.md)
- [API Documentation](./docs/API.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Validation Rules](./docs/VALIDATION_RULES.md)

## 💻 Local Development Tips

### VS Code Setup

Recommended extensions:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "vitest.explorer"
  ]
}
```

### Hot Reload

Vite provides instant hot module replacement (HMR). Changes appear in <100ms.

### Type Safety

Run `npm run type-check` before committing to catch TypeScript errors.

## 🐛 Known Issues

None yet! 🎉

## 🗺️ Roadmap

### Q1 2026 (Current)

- [x] Module 01: Foundation
- [ ] Module 02: Design System
- [ ] Module 03: Database Setup
- [ ] Module 04: API Core

### Q2 2026

- [ ] Module 05: Validation Engine
- [ ] Module 06: Frontend Shell
- [ ] Module 07: Notion Sync
- [ ] Module 08: AI Intelligence

### Q3 2026

- [ ] Module 09: Deployment
- [ ] Module 10: Testing Suite
- [ ] Beta Launch
- [ ] User Training

### Q4 2026

- [ ] Production Launch
- [ ] Performance Optimization
- [ ] Mobile App (React Native)

## 💬 Support

- **Issues**: [GitHub Issues](https://github.com/sibeelmayed/grants-later-v2/issues)
- **Discussions**: [GitHub Discussions](https://github.com/sibeelmayed/grants-later-v2/discussions)
- **Email**: support@grantslater.com (coming soon)

## 📜 License

MIT License - see [LICENSE](./LICENSE) file for details

## 🚀 Deployment

Coming soon! Docker + CI/CD pipeline in Module 09.

---

**Built with ❤️ using modern web technologies**

[TypeScript](https://www.typescriptlang.org/) • [React](https://react.dev/) • [Vite](https://vitejs.dev/) • [Tailwind](https://tailwindcss.com/) • [Supabase](https://supabase.com/)