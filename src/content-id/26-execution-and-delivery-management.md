## **The Standup That Wasn't Standing Up for Anything**

Every morning at 9:15 AM, our team gathered (virtually, cameras mostly off) for our "daily standup." Fifteen minutes became thirty. Thirty became forty-five on bad days. People recited what they did yesterday, what they'd do today, and any "blockers" (usually vague enough to be meaningless: "waiting on some clarity from design").

Nobody actually listened to anyone else's updates. Everyone was mentally drafting Slack messages. The scrum master (a role we'd hired specifically because "we needed someone to run Agile properly") diligently updated a Jira board that nobody else looked at between ceremonies.

One day, our most senior engineer said something that stuck with me: "We're doing every single Scrum ceremony perfectly, and I have no idea if we're actually building the right thing."

That sentence captures the tragedy of how most companies "do Agile": they've mastered the theater—the standups, the sprint planning, the retros, the burndown charts—while completely missing the actual point. Agile was never about ceremonies. It was about a set of values: responding to change over following a rigid plan, working software over comprehensive documentation, customer collaboration over contract negotiation, individuals and interactions over rigid processes.

Somewhere along the way, an entire industry turned a manifesto about _flexibility and adaptation_ into a rigid, ceremony-obsessed religion. Let's untangle what actually matters.

---

## **Agile, Scrum, Kanban: What They Actually Are (Not What LinkedIn Says)**

### **Agile (The Philosophy, Not the Methodology)**

Agile isn't a specific process—it's a set of values and principles from the 2001 Agile Manifesto, prioritizing adaptability, customer collaboration, and iterative delivery over rigid upfront planning and comprehensive documentation.

**The core insight:** Build something small, get real feedback, adjust, repeat. This beats spending six months building a comprehensive plan based on assumptions that will likely be wrong by the time you finish executing it.

### **Scrum (A Specific Framework Implementing Agile Values)**

Time-boxed sprints (usually 1-4 weeks), defined roles (Product Owner, Scrum Master, Development Team), and specific ceremonies (Sprint Planning, Daily Standup, Sprint Review, Retrospective).

**Best for:** Teams building relatively predictable, feature-based work where batching into sprints makes sense, and where the discipline of regular ceremonies genuinely helps coordination rather than becoming empty ritual.

**Where it goes wrong:** Teams adopt the ceremonies without understanding the underlying purpose, turning genuine collaborative planning into rote box-checking. Sprint commitments become rigid promises rather than reasonable estimates, punishing teams for the inherent uncertainty of software development.

### **Kanban (Continuous Flow, No Fixed Iterations)**

Visualize work as it flows through stages (To Do, In Progress, Review, Done), limit work-in-progress to prevent overload, and pull new work only as capacity frees up.

**Best for:** Teams dealing with unpredictable, varied-sized work (support-heavy teams, maintenance-focused teams, teams where work arrives continuously rather than in plannable batches).

**Where it goes wrong:** Without discipline around WIP limits, Kanban boards become a graveyard of half-started work, with everyone juggling ten things simultaneously and finishing nothing efficiently.

**The honest truth:** Most teams benefit from a hybrid approach, borrowing Scrum's planning cadence for larger initiatives while using Kanban-style flow management for smaller, continuous work like bugs and support requests. Dogmatic adherence to "pure" Scrum or "pure" Kanban usually serves the framework more than it serves the team.

---

## **Writing PRDs and User Stories That People Actually Read**

### **The PRD Nobody Reads**

I've seen PRDs (Product Requirement Documents) that stretch to 15 pages, covering every conceivable edge case, written in dense paragraphs, buried in a Google Doc that engineers open once, skim, and never return to.

**The problem:** Length and comprehensiveness aren't the same as clarity and usefulness. A document nobody reads thoroughly provides zero value regardless of how thorough it is.

### **A PRD Structure That Actually Gets Used**

**1. Problem Statement (2-3 sentences):** What specific problem are we solving, and for whom? Not "we're building feature X" but "users currently struggle with Y, causing Z negative outcome."

**2. Success Metrics:** How will we know this worked? Be specific, not "improve user experience" but "increase completion rate of onboarding flow from 45% to 60%."

**3. User Stories/Scenarios:** Concrete examples of how a real user encounters and uses this. "As a [user type], I want to [action], so that [outcome]."

**4. Requirements (Must-have vs Nice-to-have):** Clearly separated, not one giant undifferentiated list. This helps engineering understand what's genuinely essential versus what can be cut if time runs short.

**5. Explicitly Out of Scope:** This section is criminally underused. Stating clearly what you're _not_ building prevents scope creep and misaligned expectations later.

**6. Open Questions:** Be honest about what's still unresolved. Pretending you have all the answers when you Jangan just creates false confidence that unravels mid-development.

**7. Design/Technical Considerations (links, not full duplicated content):** Link to the actual design files and technical specs rather than trying to describe them in prose within the PRD itself.

### **Writing Good Acceptance Criteria**

Vague acceptance criteria ("the feature should work well") creates ambiguity that leads to disappointed stakeholders when "working well" wasn't clearly defined upfront.

**Better format (Given/When/Then):** "Given a user has an empty shopping cart, when they click 'Checkout,' then they should see an error message stating 'Your cart is empty' and be redirected to the product catalog page."

This specificity eliminates ambiguity about what "done" actually means, reducing the frustrating back-and-forth of "well, technically I built what the ticket said" disputes after delivery.

---

## **Sprint Planning That Doesn't Waste Everyone's Time**

**Common dysfunction:** Sprint planning becomes a passive readout where the PM announces priorities and engineers silently nod, without genuine two-way discussion about feasibility, technical approach, or hidden complexity.

**A healthier approach:**

1. **Come prepared, not improvising live.** Have prioritized backlog items ready with enough context (linked to PRDs, designs) that the team isn't discovering requirements for the Pertama, time during the planning meeting itself.
    
2. **Invite genuine pushback.** If an engineer says "this is more complex than it looks because of X," that's valuable information, not an obstacle to steamroll past. Adjust scope or timeline based on this input rather than just restating the original ask more forcefully.
    
3. **Size collaboratively**, using techniques like Planning Poker (team members simultaneously reveal size estimates, discussing significant discrepancies) to surface hidden assumptions and differing understanding of scope.
    
4. **Leave room for uncertainty.** Not everything needs to be perfectly sized before starting. Some items can be "spike" tasks (time-boxed investigation) before full estimation is even possible.
    

---

## **Retrospectives That Actually Generate Change**

**The dysfunction:** Retros become a ritual where the same three complaints get raised every two weeks ("communication could be better," "we need more time for testing"), documented in a Confluence page, and never actually addressed, leading to team cynicism about the exercise entirely ("why bother, nothing changes anyway").

**Making retros actually useful:**

1. **Limit to genuinely actionable items.** Daripada ten vague observations, walk away with 1-3 specific, owned action items with a clear person responsible and a follow-up date.
    
2. **Actually follow up on previous retro actions** at the start of the next retro. "Last time we said we'd try X—did we do it? Did it help?" This accountability loop is what separates retros that create real change from theater that just makes people feel heard temporarily.
    
3. **Vary the format occasionally** (Start-Stop-Continue, Mad-Sad-Glad, 4Ls: Liked-Learned-Lacked-Longed for) to prevent the exercise from becoming stale, robotic box-checking.
    
4. **Create genuine psychological safety** for people to name real problems, including problems caused by the PM themselves. If retros only ever surface safe, impersonal complaints ("Jira is annoying") while avoiding real interpersonal or process friction, they're not doing their job.
    

---

## **The Micromanaging vs Absentee PM Spectrum**

Here's a tension every PM navigates: how involved should you be in the actual execution details?

### **The Micromanaging PM**

Reviews every design mockup with excessive nitpicking. Wants to approve every technical approach decision. Attends every engineering discussion "just to stay informed," inadvertently slowing decisions and signaling distrust.

**The damage:** Engineers and designers feel disempowered, stop bringing creative solutions forward (since they'll just get overridden anyway), and eventually either disengage or leave for environments with more autonomy.

### **The Absentee PM**

Writes a PRD, then disappears until the sprint review, providing zero guidance when the team hits ambiguous edge cases or questions during actual building. Discovers major misalignment only after significant work has already been completed in the wrong direction.

**The damage:** Teams build the wrong thing due to lack of course-correction opportunities, wasting significant effort, and eventually lose confidence that the PM is actually adding value beyond writing an initial document.

### **The Sweet Spot: Available, Not Omnipresent**

Be genuinely available for questions and clarifications throughout the sprint (quick Slack responses, brief syncs when genuine ambiguity arises), without needing to approve every micro-decision. Trust your team's expertise in their respective domains (technical implementation, design details) while staying closely involved in ensuring the _problem_ is being solved correctly, not just the _task_ being completed literally.

**A useful heuristic:** Get deeply involved in defining the "what" and "why" clearly upfront, then trust the team on the "how," checking in at natural milestones rather than continuously hovering.

---

## **Dealing with Scope Creep Mid-Sprint**

This happens constantly: a stakeholder (or you, honestly) realizes mid-development that "it would be great if we also added X" to something already in progress.

**Why this is dangerous:** Every addition, Tapi, small it seems, extends timeline, introduces new edge cases, and often cascades into further scope additions ("well, if we're adding X, we should probably also handle Y").

**A healthier process:**

1. **Capture the idea, Jangan immediately act on it.** "That's a good idea—let's add it to the backlog for next sprint rather than expanding scope on something already in flight."
    
2. **If it's genuinely urgent**, make the trade-off explicit: "Adding this will push our current sprint commitment by roughly 3 days. Are we comfortable with that delay, or should this wait until next sprint?"
    
3. **Protect the team from scope creep originating from you, specifically.** PMs are often the worst offenders here, since they have direct access to add "just one more thing" without going through the same prioritization rigor they'd demand from others.
    

---

## **Definition of Done: The Conversation Everyone Skips**

Teams frequently have wildly different implicit definitions of "done," leading to painful surprises during review.

**Does "done" include:**

- Passing QA testing?
- Updated documentation?
- Handling edge cases and error states, or just the happy path?
- Accessibility considerations?
- Performance testing under load?
- Analytics/tracking implementation for measuring success?

**The fix:** Explicitly define and document your team's "Definition of Done" checklist once, collaboratively, and reference it consistently. This prevents the recurring, frustrating conversation of "wait, I thought this was done" when someone discovers error handling was never actually implemented because nobody explicitly required it.

---

## **Chapter Summary: The TL;DR**

Agile is a philosophy of adaptability and iteration, not a rigid set of ceremonies—Scrum and Kanban are specific implementations that only work when teams understand the underlying purpose, not just perform the rituals.

Write PRDs and acceptance criteria with genuine clarity (problem statement, explicit scope boundaries, specific Given/When/Then criteria) rather than exhaustive documents nobody actually reads thoroughly.

Avoid both micromanaging (killing team autonomy and creativity) and absentee management (missing crucial course-correction opportunities)—stay closely involved in the "what and why," trust your team on the "how."

Protect against scope creep (including scope creep you personally introduce), and explicitly define "Definition of Done" to prevent painful surprises during delivery.

In the next chapter, we'll explore Product-Market Fit—including why most companies claiming to have it are actually fooling themselves with vanity signals.

---

**Reflection Questions:**

1. Be honest: are your team's Agile ceremonies (standups, retros, sprint planning) genuinely useful, or have they become empty ritual? What would change if you cut the ones that aren't working?
2. Where do you personally sit on the micromanaging-to-absentee spectrum? What's one area where you could trust your team more, or one area where you need more visibility?
3. Does your team have an explicit, shared "Definition of Done"? If not, what assumptions might different team members be making right now?

**Action Item:**

In your next retrospective, before generating new discussion topics, Pertama, revisit action items from your _previous_ retro. Were they actually implemented? If not, why not? This single practice will immediately reveal whether your retros are generating real change or just performing the ritual of reflection.

---
