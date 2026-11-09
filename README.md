# Human-First Personal Growth Platform

A personalized, AI-guided wellness and social growth platform where people build habits, develop emotional resilience, and connect with others through shared real-world activities.

> Working name: _TBD_ (gfrfund.com is the working domain)

---

## 1. Core Idea

Most habit trackers ask: *"Did you complete your task today?"*

This product asks: *"You didn't complete your task today. Is something making it difficult for you?"* and then helps the person work through it.

**Objective:** Help people build healthier routines, develop emotional skills, and create meaningful human connections, **without becoming dependent on AI.**

### Design Principles

1. **Understand the person before assigning habits.** No two people get the same plan.
2. **The user defines progress.** Employment, comfort being alone, confidence, a steady routine: the user decides.
3. **AI proposes, the user decides.** Every suggestion can be accepted, modified, or rejected.
4. **Memory is transparent and editable.** Users can see, correct, and delete what the app remembers.
5. **No permanent labels.** Someone who is lonely or unemployed today may not be in six months. The system adapts.
6. **No public leaderboards.** The avatar represents the individual's journey, not rank.
7. **Backend controls the rules, not the LLM.** Safety, privacy, opt-ins, and notification limits are enforced in code.
8. **Not a therapist.** The AI is a "wellness guide". It does not diagnose or provide professional counselling.

---

## 2. Features

| Feature | Description |
|---|---|
| Conversational onboarding | Staged questions about circumstances, challenges, preferences; AI summarizes its understanding and the user confirms or corrects it |
| AI wellness guide | Check-ins on missed activities, helps work through difficulty, suggests realistic next steps |
| Adaptive habit system | Habits scale up or down based on the user's real capacity (e.g. reduce 5 habits to 2) |
| Personal avatar | Visual representation of the user's own progress |
| Community activities | Silent co-working, study sessions, reading groups, walking challenges, small interest groups |
| Long-term memory | Three clearly separated types: user-provided facts, observed patterns, unconfirmed AI interpretations |
| Safety layer | Detects concerning conversations and escalates to human support resources |

---

## 3. The Personal Growth Cycle

```
Understand the person  ->  AI wellness guide  ->  Personalized habits & goals
        ^                                                   |
        |                                                   v
 Reflect & adapt  <-  Shared activities  <-  Individual activities
```

---

## 4. Suggested Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Frontend | Next.js (React) + TypeScript + Tailwind CSS | Good for a responsive web app; PWA later for mobile |
| Backend | Spring Boot (Java 21) | As in your original plan |
| AI | Spring AI + Gemini | Abstracted behind your own `CounsellorService` so the model can be swapped |
| Database | PostgreSQL | Relational data; optionally `pgvector` later for semantic memory |
| Cache / queues | Redis | Notification limits, sessions, rate limiting |
| Auth | Spring Security + JWT (or Keycloak / Auth0 / Firebase Auth) | Start simple: email + password, add Google login |
| Real-time | WebSockets (Spring) | For live group sessions and chat |
| Scheduling | Spring `@Scheduled` / Quartz | Missed-activity detection, check-in triggers |
| Hosting | Render / Railway / Fly.io for MVP; AWS or GCP later | Docker everywhere |

---

## 5. Architecture

Keep it a **modular monolith** at first (one Spring Boot app, separate packages per service). Split into microservices only if needed.

| Module | Responsibility |
|---|---|
| `user-context` | Stores user-provided circumstances, goals, preferences |
| `habit` | Habits, schedules, completion, adaptive adjustments |
| `activity` | Individual and group activities, sign-ups, sessions |
| `counsellor` | Guided conversations, prompt building, calls to Gemini |
| `pattern-analysis` | Detects recurring patterns (e.g. abandons habits after 3 days) |
| `recommendation` | Suggests habits and community activities |
| `safety` | Crisis keyword and classifier checks, escalation, disclaimers |
| `memory` | Versioned, user-editable memory store |
| `notification` | Email / push, respects opt-in and frequency caps |
| `community` | Groups, membership, moderation, reports |

### Missed-activity flow

1. `habit` records the missed activity.
2. Backend checks the user opted into check-ins and is within notification limits.
3. `counsellor` starts a gentle, optional conversation (user can decline or postpone).
4. User explains what happened (quick-reply options + free text).
5. `safety` screens every message.
6. `counsellor` builds a prompt from **only the relevant** memory entries.
7. AI suggests a next step (e.g. a 20-minute session instead of 30).
8. User accepts, modifies, or rejects.
9. `habit` updates the plan only if the user agrees.

---

## 6. Data Model (starting point)

```
users(id, email, password_hash, display_name, created_at)
user_profiles(user_id, situation[], improvement_areas[], prefers_group, prefers_reminders,
              session_length_pref, share_progress_ok, onboarding_status)
memory_entries(id, user_id, type[FACT|OBSERVED_PATTERN|AI_INTERPRETATION],
               content, source, confirmed_by_user, created_at, deleted_at)
habits(id, user_id, title, schedule, target_minutes, status, created_at)
habit_logs(id, habit_id, date, status[DONE|MISSED|SKIPPED], note)
checkins(id, user_id, habit_log_id, reason_code, started_at, declined, postponed_until)
conversations(id, user_id, type, created_at)
messages(id, conversation_id, role[USER|AI], content, safety_flag, created_at)
activities(id, title, type, host_id, starts_at, duration_min, capacity, visibility)
activity_members(activity_id, user_id, status)
avatar_state(user_id, level_data_json, updated_at)
consents(user_id, check_ins, memory, community_visibility, updated_at)
```

Keep `FACT`, `OBSERVED_PATTERN`, and `AI_INTERPRETATION` strictly separate. Only `FACT` and user-confirmed entries should be treated as truth in prompts.

---

## 7. Build Roadmap

### Phase 0: Preparation (1 week)

- [ ] Write a one-page product brief (who it is for, what "success" means).
- [ ] Pick the **single** first audience, e.g. unemployed people building a study routine. Don't build for everyone at once.
- [ ] Sketch screens on paper or Figma: onboarding, home/today, check-in chat, memory page, activity list, avatar.
- [ ] Decide the name, domain, and repo structure.
- [ ] Get a Gemini API key (Google AI Studio) and confirm free-tier limits.

### Phase 1: Foundation (1-2 weeks)

- [ ] Create monorepo: `/backend` (Spring Boot), `/frontend` (Next.js).
- [ ] Docker Compose with PostgreSQL (and Redis).
- [ ] Spring Boot project with Web, Security, Data JPA, Validation, Flyway, Spring AI.
- [ ] Database migrations for users, profiles, habits, logs.
- [ ] Registration, login, JWT auth.
- [ ] Frontend shell: layout, auth pages, API client.
- [ ] CI (GitHub Actions): build and test on every push.

### Phase 2: Onboarding (1-2 weeks)

- [ ] Stage 1: circumstances and goals (multi-select).
- [ ] Stage 2: AI follow-up questions based on Stage 1 answers.
- [ ] Stage 3: preferences (solo vs group, reminders, session length).
- [ ] Stage 4: AI **summary of understanding** with "Yes, that's right / I'd like to change something".
- [ ] Persist confirmed answers as `FACT` memory entries.

### Phase 3: Habits (1-2 weeks)

- [ ] Create, edit, archive habits; daily check-off.
- [ ] Missed-habit detection (scheduled job).
- [ ] Recommendation: 1 to 3 starter habits from the profile (rules first, AI second).
- [ ] Capacity rule: if the user abandons habits repeatedly, offer to reduce to fewer.

### Phase 4: AI Wellness Guide (2-3 weeks), the heart of the product

- [ ] `CounsellorService` wrapping Spring AI `ChatClient` with a strong system prompt (supportive, non-diagnostic, brief, asks before advising).
- [ ] Missed-activity check-in with quick-reply reasons (not motivated / overwhelmed / unexpected / uncomfortable with group / forgot / not now).
- [ ] Reason-specific conversation paths.
- [ ] User can **decline or postpone** any check-in.
- [ ] Context builder: only pull relevant memory for each conversation.
- [ ] Safety layer v1: crisis keyword detection, immediate switch to a fixed, non-AI response with human support resources, no AI improvisation.
- [ ] Persistent "not a therapist" disclaimer.
- [ ] Log AI outputs for review (with user consent and privacy controls).

### Phase 5: Memory (1-2 weeks)

- [ ] "What the app remembers" page, with three clearly separated sections.
- [ ] Edit, confirm, and delete any entry.
- [ ] Observed patterns generated by the backend, shown as *possible* patterns for the user to confirm or dismiss.
- [ ] A "forget everything" button and account data export.

### Phase 6: Community (2-3 weeks)

- [ ] Activity creation and discovery (study session, silent co-working, walking challenge).
- [ ] Join / leave; small group sizes by default.
- [ ] Start simple: scheduled sessions with a meeting link (e.g. Google Meet / Jitsi) before building video yourself.
- [ ] Optional lightweight chat via WebSockets.
- [ ] Reporting, blocking, and moderation tools. Required before opening to the public.
- [ ] AI recommends activities when it detects a need (e.g. loneliness), always as an offer, never a push.

### Phase 7: Avatar and Reflection (1-2 weeks)

- [ ] Simple avatar that evolves from personal consistency (no comparisons, no rankings).
- [ ] Weekly reflection: what worked, what was hard, what to adjust.
- [ ] User-defined progress goals.

### Phase 8: Hardening and Launch (2 weeks)

- [ ] Privacy policy, terms, consent screens, data deletion flow.
- [ ] Rate limiting, input validation, prompt-injection testing.
- [ ] Tests for safety rules and notification caps.
- [ ] Accessibility review; mobile responsiveness.
- [ ] Monitoring and logging (without storing sensitive conversation text in plain logs).
- [ ] Private beta with 10-20 real users. Interview them. Iterate.

---

## 8. MVP Scope (what to build first)

If you want something shippable fast, do only this:

1. Auth
2. Conversational onboarding with confirmed summary
3. 1 to 3 habits with daily check-off
4. Missed-habit AI check-in (with decline / postpone)
5. Editable memory page
6. Safety fallback for crisis messages

Add community, avatar, and recommendations **after** real users say the guide is useful. The guide is what makes this different, so get that right first.

---

## 9. Suggested Repository Structure

```
/
├── README.md
├── docker-compose.yml
├── backend/
│   └── src/main/java/com/yourapp/
│       ├── usercontext/
│       ├── habit/
│       ├── activity/
│       ├── counsellor/
│       ├── patternanalysis/
│       ├── recommendation/
│       ├── safety/
│       ├── memory/
│       ├── notification/
│       └── community/
├── frontend/
│   └── src/
│       ├── app/            # routes
│       ├── components/
│       ├── lib/            # API client, auth
│       └── features/       # onboarding, habits, guide, memory, community

```

---

## 10. Getting Started (once scaffolded)

### Prerequisites

- Java 21+, Maven or Gradle
- Node.js 20+
- Docker and Docker Compose
- A Gemini API key

### Setup

```bash
# 1. Clone
git clone <your-repo-url>
cd <your-repo>

# 2. Environment
cp .env.example .env
# set GEMINI_API_KEY, DB_PASSWORD, JWT_SECRET

# 3. Start database
docker compose up -d postgres redis

# 4. Run backend
cd backend
./mvnw spring-boot:run

# 5. Run frontend (new terminal)
cd frontend
npm install
npm run dev
```

Backend: http://localhost:8080  Frontend: http://localhost:3000

### Example `application.yml` (Spring AI + Gemini)

Check the current Spring AI docs for the exact Gemini starter and property names, as they change between releases.

```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/growth
    username: growth
    password: ${DB_PASSWORD}
  jpa:
    hibernate:
      ddl-auto: validate
  flyway:
    enabled: true
```

---

## 11. Safety, Privacy, and Ethics Checklist

- [ ] Clear statement: this is a wellness guide, **not** a licensed therapist; no diagnosis.
- [ ] Crisis handling is **deterministic** (fixed messages and resources), not left to the LLM.
- [ ] Explicit, granular consent: check-ins, memory, community visibility.
- [ ] Check-ins are always skippable; notification frequency is capped by the backend.
- [ ] The AI never claims certainty about a user's emotions; it asks.
- [ ] Observed patterns and AI interpretations are labelled as unconfirmed until the user confirms.
- [ ] Encryption in transit and at rest; minimal data retention; full delete and export.
- [ ] Don't send more personal data to the LLM than needed for the current conversation.
- [ ] Review applicable privacy law for your users (e.g. India's DPDP Act, GDPR if you serve EU users).
- [ ] Community moderation, reporting, and blocking before public launch.
- [ ] Gently encourage human connection and real-world activity over more time in the chat.

---

## 12. Risks and How to Handle Them

| Risk | Mitigation |
|---|---|
| Users become dependent on the AI | Guide nudges toward offline action and community; periodic "what can you do without me?" reflection |
| AI gives harmful or overconfident advice | Tight system prompt, no diagnosis, safety layer, human review of logs |
| Privacy breach of sensitive data | Minimal collection, encryption, strict access control, deletion tools |
| Community abuse or harassment | Small groups, reporting, moderation, verified hosts |
| Scope creep | Ship the MVP; validate with real users before adding features |
| LLM cost and rate limits | Cache, short contexts, quick-reply buttons instead of free text where possible |

---

## 13. Next Steps

1. Pick your first audience and write the product brief.
2. Scaffold the repo (Phase 1).
3. Build onboarding and the missed-habit check-in end-to-end before anything else.
4. Test with a handful of real people and listen.

---

## License

TBD
