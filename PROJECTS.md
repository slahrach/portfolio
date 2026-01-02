# Projects Portfolio

## 1. TNTX.ai
**Slug:** `project-1`  
**Description:** Web3 Social Trading & Token Interaction Platform  
**Tags:** BACKEND, DEVOPS, WEB3  
**Role:** Backend and DevOps Engineer

### Overview
The founder initially had a prototype MVP to validate the concept of a social crypto-trading platform. I joined to rebuild and evolve the product step by step, turning the prototype into a scalable, production-ready system capable of supporting real users and real-time interactions.

I was responsible for the entire backend, from architecture and API design to infrastructure and deployments. This included building real-time chat and notifications, multi-chain blockchain integrations (EVM & Solana), staking and trading integrations, background job processing, caching, and a scalable WebSocket infrastructure. I also designed and maintained the CI/CD pipelines, Dockerized environments, and production deployments, ensuring stability as usage increased.

As the platform matured technically and functionally, the improved performance, reliability, and feature depth played a key role in helping the founder raise significant funding. TNTX.ai is now live in beta, with users actively testing the platform and ongoing development continuing as the product scales.

### Technologies
- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- Redis
- Socket.IO
- Bull
- Docker
- Docker Compose
- GitHub Actions
- DigitalOcean
- AWS (EKS, ALB)
- Ethers.js
- Solana Web3.js
- SIWE
- 1inch
- Jupiter

### Assets
- **Main Image:** `/project.1.png`
- **Video:** `/tntx.mp4`

---

## 2. Mi Lalla's Touch
**Slug:** `project-2`  
**Description:** Luxury E-commerce Platform for Moroccan Fashion  
**Tags:** FULL-STACK, E-COMMERCE  
**Role:** Full-Stack Developer

### Overview
Mi Lalla's Touch is a modern e-commerce platform built for a luxury Moroccan fashion brand, focused on handcrafted pieces and premium brand presentation. I worked on the full stack, delivering a complete shopping experience with strong performance, SEO, and a polished, minimalist design.

I implemented the frontend using Next.js (App Router) and TypeScript, building a mobile-first, responsive UI with smooth animations and accessible components. On the backend, I used Supabase for authentication, data management, and serverless logic, enabling secure user accounts, order handling, and scalable APIs.

The platform supports the full e-commerce flow—from product discovery to checkout—while maintaining fast load times and a clean user experience. Special care was taken to optimize server-side rendering, handle client/server state correctly, and ensure the site performs well on mobile devices.

### Technologies
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Supabase (Auth, Edge Functions)
- Framer Motion
- Radix UI
- Vercel
- Server-Side Rendering
- Responsive & Accessible Design

### Assets
- **Main Image:** `/project.2.png` (for grid/home)
- **Gallery Images:** 
  - `/project.2.1.png`
  - `/project.2.2.png`
  - `/project.2.3.png`
  - `/project.2.4.png`

---

## 3. Franchise Operations Manual Generator
**Slug:** `project-3`  
**Description:** AI-Powered Document Automation Platform  
**Tags:** FULL-STACK, AI  
**Role:** Full-Stack Developer

### Overview
I built a full-stack web application for The Art of Franchising that automates the creation of franchise operations manuals. The platform replaces a manual, time-consuming process with a guided, AI-powered system that generates professional documents in minutes.

The application guides clients through a multi-step wizard covering 16 structured sections, with real-time auto-save, save-and-resume functionality, and optional voice input for accessibility. An admin dashboard allows reviewers to manage submissions and generate branded DOCX/PDF manuals with a single click.

I worked across the entire stack, building the frontend with Next.js, developing the backend API with NestJS, and designing the database layer using Prisma. I integrated OpenAI to power intelligent document generation, mapping structured user input into well-formatted operational manuals. I also handled authentication, data persistence, and production deployment.

The solution is live and significantly reduced manual work, improved document consistency, and enabled the client to scale their operations more efficiently.

### Technologies
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- NestJS
- Prisma
- PostgreSQL
- OpenAI API
- Authentication & role-based access

### Assets
- **Main Image:** `/project.3.png` (for grid/home)
- **Gallery Images:**
  - `/project.3.1.png`
  - `/project.3.2.png`
  - `/project.3.3.png`
  - `/project.3.4.png`

---

## 4. Medan Orthodontics – AI Chatbot Solution
**Slug:** `project-4`  
**Description:** AI-Powered Patient Support (Web Widget & WhatsApp)  
**Tags:** FULL-STACK, AI  
**Role:** Full-Stack Developer

### Overview
Built a production-ready conversational AI solution for a French orthodontics clinic, providing 24/7 patient support through two channels: an embeddable web chatbot widget and WhatsApp Business integration.

The chatbot handles patient inquiries using intelligent intent detection, routing conversations into dedicated flows for new patients, appointments, emergencies, and FAQs. It supports automatic French/English language detection, collects structured patient information, and sends summaries directly to the clinic via email to reduce administrative workload.

I implemented the system end to end, building the backend with NestJS and PostgreSQL, integrating OpenAI for natural language understanding, and connecting Meta WhatsApp Cloud API for real-time messaging. The frontend includes a lightweight, embeddable chat widget that can be added to any website using a single script tag.

### Technologies
- NestJS
- Next.js
- React
- TypeScript
- PostgreSQL
- OpenAI (GPT-4)
- Meta WhatsApp Cloud API
- Nodemailer
- Docker
- REST APIs
- Webhooks
- Tailwind CSS

### Assets
- **Main Image:** `/project.4.png` (for grid/home)
- **Gallery Images:**
  - `/project.4.1.png`
  - `/project.4.2.png`

---

## 5. Meta Monetization Manager
**Slug:** `project-5`  
**Description:** Facebook Monetization Tracking & Automation Platform  
**Tags:** FULL-STACK, AUTOMATION, AI  
**Role:** Full-Stack Developer  
**Status:** Completed

### Overview
Built a full-stack web application that allows Facebook Page creators, managers, and agencies to monitor monetization tools across multiple Pages from a single dashboard.

The platform addresses a key limitation of the Facebook ecosystem: many monetization details (Stars, Subscriptions, In-Stream Ads, Brand Collabs, payout status, eligibility states) are not fully accessible via public APIs. To solve this, I combined a modern web dashboard with a secure browser automation system that synchronizes monetization data in real time.

I developed the web application using Next.js (App Router), TypeScript, and PostgreSQL with Prisma. Authentication is handled through Facebook OAuth. For data not available through the Graph API, I built a Playwright-based automation bot that logs into Facebook, navigates monetization dashboards, and extracts structured data.

A key challenge was handling Facebook security checks. I implemented an interactive verification system where the bot pauses when 2FA or security checkpoints appear, sends a screenshot to the dashboard, and waits for the user to enter verification codes (SMS, authenticator app, WhatsApp, etc.) in real time via WebSockets before continuing the flow.

The system provides live sync progress, per-page monetization status, payout visibility, and verification handling, significantly reducing manual effort when managing multiple Pages.

### Technologies
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- PostgreSQL
- Prisma
- Socket.IO
- NextAuth (Facebook OAuth)
- Playwright (browser automation)
- Cheerio
- Meta Graph API
- OpenAI (optional data extraction)
- Encrypted credential storage (AES-256-GCM)

### Assets
- **Main Image:** `/project.5.png`
- **Video:** `/project.5.mp4` (using project.4.mp4 file)

---

## 6. AI Companion Platform
**Slug:** `project-6`  
**Description:** Multi-Modal Conversational AI System  
**Tags:** BACKEND, AI  
**Role:** AI/Backend Developer

### Overview
Worked as the AI/Backend Developer on a scalable AI companion platform that enables users to create and interact with customizable AI personas through multiple modalities—text, images, and voice. I architected and implemented the entire backend infrastructure and AI inference pipeline.

I built the multi-modal AI system by integrating and optimizing open-source models for production use. This included deploying Ollama with Mistral 7B for conversational AI, implementing Stable Diffusion XL (SDXL) with custom fine-tuning and pipeline optimizations, and configuring FastText for intent classification to route requests between chat and image generation modes. The AI inference service runs on GPU-optimized infrastructure with memory management strategies to handle production workloads efficiently.

I developed the NestJS REST API backend handling business logic, authentication, and user management, while building a separate Python FastAPI service to orchestrate all AI model inference operations. I implemented a type-safe database layer with Prisma ORM and PostgreSQL, ensuring data integrity and efficient querying. Authentication includes JWT with refresh tokens and OAuth integration for Google and Discord.

I integrated real-time voice capabilities using Bland.ai, including webhook handling for transcript processing. The backend supports a token-based economy with subscription tiers and usage tracking, automatic conversation history pagination with message threading, and comprehensive API documentation with Swagger/OpenAPI.

Technical optimizations I implemented include an enhanced SDXL pipeline with attention slicing, VAE tiling, and xFormers for improved performance, advanced prompt engineering using Compel for better image quality, and memory-efficient GPU operations with CUDA optimization. The intent-based routing system uses confidence thresholds to ensure accurate mode switching between chat and image generation.

### Technologies
- NestJS 9
- TypeScript
- Prisma 5
- PostgreSQL
- Python
- FastAPI
- PyTorch
- Hugging Face Diffusers
- Ollama
- Mistral 7B
- FastText
- Stable Diffusion XL (SDXL)
- Bland.ai
- Docker
- REST APIs
- WebSocket
- Swagger/OpenAPI
- JWT Authentication
- OAuth (Google, Discord)
- Open Source AI Models

### Assets
- **Main Image:** `/project.6.png` (for grid/home)
- **Gallery Images:**
  - `/project.6.1.webp`
  - `/project.6.2.webp`
  - `/project.6.3.webp`

---

## Quick Reference

### Project Slugs
- `project-1` - TNTX.ai
- `project-2` - Mi Lalla's Touch
- `project-3` - Franchise Operations Manual Generator
- `project-4` - Medan Orthodontics – AI Chatbot Solution
- `project-5` - Meta Monetization Manager
- `project-6` - AI Companion Platform

### Routes
- Home: `/`
- Projects Grid: `/projects`
- Project Details: `/projects/[slug]`
- About: `/about`


