## **The Day I Learned to Translate "Engineer"**

Early in my career, I asked an engineer to add a "simple" filter to our search results page. He looked at me, sighed, and said, "That's not really possible with our current architecture."

I heard: "This can't be done." I went back to my stakeholders and said the feature wasn't feasible. Everyone moved on, mildly disappointed.

Two years later, a different engineer—more patient, apparently, than I deserved—actually walked me through what "not possible" meant in that original context. It wasn't "impossible." It meant: "Not possible _without_ refactoring how we index search results, which would take three weeks Daripada the two days you were hoping for, and nobody has explained to me why this feature is valuable enough to justify that investment."

That's an entirely different sentence than "not possible." One is a hard wall. The other is a cost-benefit conversation waiting to happen.

I'd wasted two years of potential feature development because I didn't know Cara actually hear what engineers were telling me, and more importantly, didn't know Cara ask the right follow-up questions to unlock what was actually being communicated underneath the surface-level response.

This chapter is about closing that gap—not by becoming an engineer yourself, but by developing enough genuine technical fluency and relational trust to have real, productive conversations Daripada talking past each other.

---

## **Understanding Technical Constraints (Without Becoming an Engineer)**

Kamu nggak perlu write code to be an effective PM. But you absolutely need enough technical literacy to have substantive conversations about trade-offs, rather than nodding blankly and hoping engineering makes the right call without your input, or worse, pushing for things that reveal you Jangan understand basic technical realities.

### **Concepts Every PM Should Genuinely Understand**

**APIs and Integrations:** How your product connects with other systems, and why Ketiga,-party API limitations (rate limits, data availability, reliability) can constrain what's actually buildable, regardless of how good your feature idea is in isolation.

**technical debt:** Not just an abstract concept, but genuinely understanding how shortcuts taken today compound into slower velocity tomorrow. When engineers say "if we build this quickly now, it'll be harder to build X, Y, Z later," take this seriously rather than treating it as engineers just wanting extra time.

**Scalability:** Why something that works fine for 1,000 users might completely break at 100,000 users, and why "just add more servers" isn't always a simple, immediate fix depending on how the underlying architecture was originally designed.

**Data Models:** Basic understanding of how your product's data is structured, because seemingly simple request fitur ("just show this field on that other page") can sometimes require significant data restructuring if that field wasn't originally designed to be accessed in that particular way.

**Latency and Performance:** Understanding why some operations are fast and others are slow (database queries, external API calls, complex calculations), and why "make it faster" isn't a magic wand—there are usually specific bottlenecks that need actual identification and, sometimes, real trade-offs to address.

**The practical takeaway:** You're not trying to become technically capable of building the feature yourself. You're trying to become technically literate enough to ask smart follow-up questions, understand the genuine trade-offs being described, and avoid proposing things that reveal a fundamental misunderstanding of how your own product actually works under the hood.

---

## **Why PMs Must Care About technical debt (Even Though It's Invisible)**

We touched on this in Chapter 6, but it deserves deeper treatment specifically in the context of engineering collaboration.

**The core tension:** technical debt is invisible to almost everyone except the engineers directly dealing with it. It doesn't demo well. It doesn't generate customer excitement. But it directly determines how fast (or slow) your team can ship everything else, indefinitely into the future.

**A useful analogy:** technical debt is like financial debt—a little bit, used strategically (shipping fast to test a hypothesis, deliberately accepting some shortcuts), can be genuinely smart. But compounding, unaddressed debt eventually consumes so much "interest" (slower development, more bugs, more fragile systems) that it cripples your ability to do anything else effectively.

**Cara actually support technical debt prioritization (beyond just saying you care):**

1. **Ask engineering to make technical debt visible and specific**, not just a vague ongoing complaint. "Our checkout flow uses a payment processing library that's no longer maintained, creating security risk and blocking three specific features we've discussed" is actionable. "The codebase is messy" is not.
    
2. **Advocate for protected capacity** (as discussed in Chapter 6) rather than treating every technical debt request as competing head-to-head against every shiny feature idea in a popularity contest it will usually lose.
    
3. **Connect technical debt to business outcomes** when communicating to non-technical stakeholders. "This technical debt work will let us ship the next three roadmap items 40% faster" translates engineering concerns into language executives can actually act on and prioritize appropriately.
    
4. **Jangan treat technical debt paydown as separate from "real" product work.** It IS product work—it's investment in your team's future capacity to deliver value, which is squarely within a PM's strategic responsibility.
    

---

## **Estimation and Planning Poker: Getting Genuine Signal, Not Just Numbers**

**Why estimation is genuinely hard (not just an engineering skill gap):** Software development involves inherent uncertainty—unknown edge cases, unexpected technical complications, dependencies on other systems that might not behave as documented. Precise estimates for complex work are often genuinely impossible, not just a sign of poor engineering discipline.

**Planning Poker (or similar relative estimation techniques):** Team members simultaneously reveal size estimates (often using Fibonacci-like sequences: 1, 2, 3, 5, 8, 13) for a piece of work. Significant discrepancies (one person says "2," another says "13") trigger discussion—not to reach forced consensus, but to surface different assumptions about scope, complexity, or hidden requirements that different team members are seeing.

**What good estimation conversations reveal:** Often, the huge estimate gaps aren't about disagreement on technical difficulty per se—they're about different underlying assumptions about scope. The person estimating "13" might be accounting for edge cases the person estimating "2" hasn't even considered yet. This discussion itself, not just the resulting number, is where genuine value emerges.

**The PM's role in estimation:** Provide enough context and clarity about requirements that the team can estimate meaningfully (vague requirements produce meaningless estimates), and resist the urge to negotiate estimates downward through pressure ("can't we just say this is a 3 Daripada a 5?"). This doesn't make the work actually smaller—it just creates a false commitment that damages trust when reality (predictably) takes longer than the pressured estimate suggested.

---

## **Should PMs Attend Code Reviews? (A Genuinely Debated Question)**

**The case for attending:** Builds genuine technical literacy over time, shows engineering you're invested in understanding their actual work (not just consuming outputs), and occasionally surfaces implementation details relevant to product decisions (an edge case being handled in a way that affects user experience, Contohnya,).

**The case against attending:** Code review is a specific technical discipline where non-technical PM presence can be, at best, unhelpful noise, and at worst, feels like unwelcome surveillance that undermines the professional autonomy engineers need to do quality technical work.

**A reasonable middle ground:** Jangan insist on attending every code review as a default practice. Do stay curious and occasionally ask an engineer to walk you through a particularly interesting or complex piece of work, framed genuinely as learning rather than oversight. Let engineering set the tone for how much visibility into this specific process feels appropriate and welcome versus intrusive.

---

## **Building Genuine Trust with Engineers (Not Just Transactional Requests)**

### **What Erodes Trust Fast**

**Treating engineers as feature-implementation machines.** Handing over fully-specified requirements with zero room for their input on technical approach, implicitly communicating that their expertise is only valued for execution, not for genuine problem-solving contribution.

**Constantly changing requirements mid-development** without acknowledging the cost this imposes. Every "actually, can we also add X" mid-sprint, Tapi, small it seems from a product perspective, has real technical cost that deserves genuine acknowledgment, not dismissal as a trivial ask.

**Taking credit for successful launches while deflecting blame for failures.** "The team and I shipped this great feature" (in success) versus "engineering couldn't get this done in time" (in failure) is a pattern engineers notice immediately, and it poisons collaborative trust fast.

**Not understanding or respecting genuine technical constraints**, repeatedly pushing for things that have already been explained as infeasible without engaging seriously with the underlying reasoning.

### **What Builds Trust Steadily**

**Involving engineering early in discovery, not just at the "here's what to build" handoff stage.** Engineers often have valuable technical perspective on feasibility, alternative approaches, or hidden complexity that's far more valuable when surfaced during problem definition, not after a solution has already been fully specified and committed to stakeholders.

**Genuinely advocating for engineering's priorities** (technical debt, tooling improvements, reasonable timelines) in stakeholder and leadership conversations, not just being a one-way conduit demanding engineering deliver on business asks.

**Acknowledging genuine trade-offs honestly**, including when a business decision creates real technical cost or risk. "I understand this creates technical debt, and I want to be transparent that we're accepting that trade-off deliberately because of X business reason" is far more respectful than pretending the trade-off doesn't exist.

**Protecting engineering focus time** from excessive stakeholder interruption, context-switching, and scope churn, functioning as a genuine buffer rather than simply relaying every incoming request directly to the team without any filtering or prioritization.

---

## **When Engineering and Product Fundamentally Disagree**

Sometimes, despite genuine good-faith effort on both sides, engineering and product perspectives fundamentally clash on the right path forward.

**Example scenario:** Engineering strongly believes a significant refactor is necessary before building any new features in a particular area, citing accumulating technical risk. Product believes shipping the next roadmap feature is more urgent given competitive and business pressure, and the refactor can wait another quarter.

**A healthy resolution process:**

1. **Ensure both sides genuinely understand the other's reasoning**, not just their own position. Has engineering clearly articulated the specific risk (not just general discomfort) of delaying the refactor? Has product clearly articulated the specific business cost (not just general urgency) of delaying the feature?
    
2. **Look for genuine middle-ground options** before assuming it's an all-or-nothing binary choice. Perhaps a smaller-scope refactor addresses the most acute risk while still allowing feature progress, or perhaps the feature can be built in a way that doesn't compound the existing technical debt further even without a full refactor.
    
3. **If genuine disagreement persists**, escalate transparently to whoever has appropriate decision authority (often an Engineering Manager and PM's shared manager, or a Director/VP level), presenting both perspectives honestly rather than only advocating one-sidedly for your own view. This isn't "losing" the disagreement—it's appropriately recognizing when a decision genuinely requires broader organizational input beyond what PM-engineering peer negotiation can resolve.
    
4. **Whatever the outcome, avoid lingering resentment or "I told you so" dynamics later.** If the refactor gets delayed and technical problems do emerge, or if the feature ships and business results validate that choice, use this as genuine shared learning for future similar decisions, not ammunition for interpersonal conflict.
    

---

## **The Engineering Manager Relationship: Often More Important Than You Think**

Beyond individual engineer relationships, your relationship with the Engineering Manager (EM) overseeing your team deserves specific, deliberate attention.

**Why this relationship matters distinctly:** The EM often has visibility into team capacity, morale, and technical health that individual engineers might not directly share with you (performance concerns, burnout risk, team dynamics issues). A strong, trusting EM relationship gives you crucial context for realistic planning that pure Jira ticket tracking will never reveal.

**Practical investment:** Regular 1:1 syncs (even brief, biweekly check-ins) specifically focused on team health and capacity realities, separate from tactical sprint-level conversations. This is where you might learn "the team is genuinely stretched thin right now" or "there's some tension about how this project has been scoped" before it becomes a bigger, harder-to-address problem.

---

## **Chapter Summary: The TL;DR**

"That's not possible" from engineering usually means something more nuanced than an absolute wall—dig into whether it's a hard technical constraint, a significant effort/complexity estimate, or a values-based concern, since each requires a completely different response.

Develop genuine technical literacy (APIs, technical debt, scalability, data models, performance) not to become an engineer yourself, but to have substantive trade-off conversations rather than either blind deference or uninformed pushback.

Actively support technical debt prioritization by making it visible and specific, advocating for protected capacity, and connecting it to business outcomes for non-technical stakeholders. Build genuine trust through early involvement in discovery, honest acknowledgment of trade-offs, and genuinely advocating for engineering's priorities—not just treating engineers as implementation resources for product's requests.

When genuine product-engineering disagreement arises, ensure mutual understanding of underlying reasoning, look for middle-ground options, and escalate transparently when needed rather than letting unresolved tension fester into lingering resentment.

In the next chapter, we shift to another critical partnership: collaborating effectively with Design.

---

**Reflection Questions:**

1. Think of a recent time an engineer said something was "not possible" or "difficult." Did you dig into which specific type of constraint this represented, or did you accept the surface-level response without further exploration?
2. How does your organization currently handle technical debt prioritization? Is it protected, systematic capacity, or does it compete ad-hoc against every request fitur?
3. How would you honestly characterize your current "trust account" (from Chapter 13's framework) with your core tim engineering? What deposits could you make this week?

**Action Item:**

Schedule a genuine, informal conversation with your Engineering Manager (or a senior engineer, if there's no formal EM) this week—not about a specific ticket or deadline, but simply asking: "How's the team doing, genuinely? Any concerns about capacity, morale, or technical health I should know about?" Listen more than you talk.

---
