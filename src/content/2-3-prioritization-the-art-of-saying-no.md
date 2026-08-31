## **The Spreadsheet That Solved Nothing**

I once built what I considered a masterpiece: a prioritization spreadsheet with RICE scores for 47 different feature requests. Reach, Impact, Confidence, Effort—all meticulously scored, weighted, and ranked. I was so proud of this spreadsheet. It had conditional formatting. It had a summary tab. It practically glowed with data-driven objectivity.

I presented it in our planning meeting like I was unveiling scientific proof of what we should build next.

The VP of Sales looked at the #1 ranked item, then looked at me, and said, "That's nice, but we're building the custom integration for [Big Enterprise Client] first because they threatened to churn, and that's a $2M contract."

The spreadsheet didn't even make it into the actual conversation. Weeks of careful scoring, rendered irrelevant by one sentence about a scared sales rep and an angry client.

Here's what nobody tells you in the "how to prioritize" LinkedIn posts: **the framework was never the hard part. The politics, the power dynamics, and the courage to disappoint people—that's the actual job.** RICE, MoSCoW, Kano, ICE—these are just tools to help you _think_. They don't have the authority to make decisions stick. Only relationships, evidence, and sometimes sheer stubbornness can do that.

Let's talk about both halves of this equation: the frameworks that structure your thinking, and the messy human reality that determines whether your prioritization actually survives contact with your organization.

---

## **The Frameworks: A Practical Tour**

### **RICE (Reach, Impact, Confidence, Effort)**

**Formula:** (Reach × Impact × Confidence) / Effort = RICE Score

**Best for:** Comparing a large backlog of relatively similar-sized initiatives, especially when you have decent data to estimate reach and impact.

**Where it breaks down:** The "Confidence" score is often just vibes dressed up as a percentage. And it treats all initiatives as directly comparable, when in reality a small bug fix and a major platform rebuild shouldn't be scored on the same scale.

### **MoSCoW (Must have, Should have, Could have, Won't have)**

**Best for:** Scoping a specific release or sprint when you need to quickly separate essential from nice-to-have.

**Where it breaks down:** Everyone thinks their pet feature is a "Must Have." Without a strict, agreed-upon definition of what qualifies (e.g., "Must have = product is unusable/unsellable without it"), this becomes a popularity contest disguised as a framework.

### **Kano Model**

Categorizes features into: Basic (expected, causes dissatisfaction if missing), Performance (more is better, linear satisfaction), and Delighters (unexpected features that create disproportionate joy).

**Best for:** Understanding the _emotional_ impact of features, not just functional value. Great for balancing "keep the lights on" work against genuinely exciting differentiators.

**Where it breaks down:** Delighters become Basic features over time (today's delight is tomorrow's expectation—remember when free shipping felt magical?). Kano requires regular re-surveying, which most teams never actually do.

### **ICE (Impact, Confidence, Ease)**

A simpler cousin of RICE, dropping the Reach factor. Good for early-stage, high-velocity experimentation where you're testing many small things quickly (growth teams love this one).

**Where it breaks down:** Without Reach, you might prioritize high-impact-but-tiny-audience features over things that move the needle for your whole user base.

### **Value vs Effort (2x2 Matrix)**

Simple, visual, great for workshop settings with stakeholders. Plot value on one axis, effort on the other. Quadrant 1 (high value, low effort) = obvious wins. Quadrant 4 (low value, high effort) = obvious no's.

**Where it breaks down:** "Value" is doing a lot of hidden work in that single word. Value to whom? Users? Revenue? Strategic positioning? Without defining value clearly, this becomes a subjective gut-check exercise wearing a matrix costume.

---

## **The Uncomfortable Truth: All Frameworks Can Be Gamed**

Here's what senior PMs learn the hard way: **any scoring framework can be reverse-engineered by someone who wants a specific answer.**

Want your favorite feature to win on RICE? Just... estimate reach a little higher. Bump confidence up because you "feel good about it." Nobody's independently verifying your inputs. I've watched grown adults with MBAs earnestly fudge a "Confidence" score from 50% to 80% because they emotionally wanted a feature to rank higher, then present the resulting number as objective fact.

This isn't necessarily malicious—it's just human nature. We're all prone to motivated reasoning, and a spreadsheet with your handwriting in it will always somehow validate what you already believed.

**The fix isn't a better framework. It's better process:**

- Have someone other than the feature's champion estimate the inputs (reduces bias)
- Require evidence/data sources for each score, not just gut feel
- Do a "pre-mortem" on the top-ranked items: "If this fails, why would it have failed?" This surfaces hidden assumptions the framework didn't capture
- Revisit scores after the fact: were your estimates actually accurate? This creates accountability and improves future estimation

---

## **The Trilemma: Stakeholder Priority vs User Priority vs Business Priority**

Here's the reality that no framework fully solves: you're usually juggling three competing priority systems that don't naturally align.

**Stakeholder Priority:** What does the loudest, most senior, or most persistent person in the room want? (Often driven by politics, recent conversations, or whoever complained most recently.)

**User Priority:** What do actual users need, based on research and data? (Often invisible to leadership because users don't have a seat in the roadmap meeting.)

**Business Priority:** What actually moves revenue, retention, or strategic positioning? (Sometimes aligns with user needs, sometimes doesn't—see: dark patterns, aggressive upsells, growth hacks that annoy users but boost short-term metrics.)

In an ideal world, these three would perfectly overlap. In reality, they're often in tension, and part of your job is navigating—not eliminating—that tension.

**A practical approach:** When these three conflict, make the tension _visible_ rather than quietly picking a winner and hoping nobody notices. Say explicitly: "Stakeholder X wants this custom feature, but our user research shows it conflicts with what 80% of our user base actually needs, and it doesn't move our core business metric. Here's the trade-off we're making and why." This transparency doesn't eliminate the conflict, but it makes the decision defensible and shows you're not just picking favorites arbitrarily.

---

## **The Politics of Prioritization Nobody Talks About**

### **The HiPPO Problem (Highest Paid Person's Opinion)**

Your CEO mentions offhand that a competitor just launched Feature X. Suddenly, Feature X is P0, regardless of what your actual data or roadmap says. This happens _everywhere_, at every company size.

**How to handle it (without career suicide):** Don't dismiss the input—that's a fast way to lose trust and get bypassed in future decisions. Instead, take the concern seriously, then bring data into the conversation. "That's an interesting move by [Competitor]. Let me look into why they might have built that and whether our users are asking for something similar." Sometimes you'll find the HiPPO's instinct was actually right (executives do have pattern recognition from experience). Sometimes you'll find data that respectfully redirects the conversation. Either way, you've engaged rather than dismissed, which preserves your relationship and credibility.

### **The "Everything Is Priority One" Trap**

Some organizations (usually less mature ones) label everything urgent, which functionally means nothing is actually prioritized. If every ticket in Jira is tagged "P0-Critical," your prioritization system has collapsed into meaninglessness.

**The fix:** Force explicit trade-off conversations. "We have three P0s and capacity for one. Which do we actually do first, and what happens to the other two?" Make people choose out loud, in front of each other. This is uncomfortable, which is exactly why most organizations avoid doing it—but avoiding it doesn't make the trade-off disappear, it just makes it invisible and unaccountable.

### **Sunk Cost Sabotage**

"We've already invested six months into this feature, we can't stop now" is one of the most expensive sentences in product management. The six months are gone regardless of what you do next. The only question that matters is: given where we are _right now_, is continuing the best use of _future_ resources?

**The fix:** Explicitly separate sunk cost conversations from forward-looking ones. "I understand we've invested significant time already. Setting that aside, if we were starting today with zero prior investment, would we still choose to continue this path?" This reframing (uncomfortable as it is) helps people evaluate the decision on its actual merits rather than emotional attachment to prior effort.

---

## **Technical Debt: The Priority Everyone Forgets Until It's a Crisis**

Here's a pattern I've seen repeat at every company I've worked with: technical debt gets deprioritized quarter after quarter in favor of visible, exciting features—until suddenly a critical system breaks, an outage happens, or engineering velocity grinds to a halt because the codebase has become unmaintainable.

**Why this keeps happening:** Technical debt is invisible to most stakeholders. Nobody in a board meeting gets excited about "refactored authentication service." It doesn't demo well. It doesn't generate a press release. So it constantly loses the prioritization fight against shinier, more visible work.

**The fix:** Treat technical debt as its own category with protected capacity, not something that competes head-to-head with feature work in every single planning cycle. Many high-functioning teams allocate a fixed percentage of engineering capacity (commonly cited figures range from 15-25%) specifically to technical debt and infrastructure health, regardless of what else is happening. This isn't about eliminating trade-offs—it's about making the trade-off _systematic_ rather than relying on someone remembering to advocate for invisible work every single quarter.

---

## **Case Study: Killing the CEO's Favorite Feature**

Let me tell you about the hardest prioritization conversation of my career.

Our CEO had a pet feature. He'd mentioned it in every board meeting for two quarters. He believed in it deeply—maybe too deeply, given it stemmed from a personal frustration he'd experienced rather than validated user research. Our data showed the feature would serve roughly 3% of our user base, while requiring nearly 40% of our engineering capacity for the quarter.

I had two bad options: build it anyway and quietly resent the misallocation of resources, or say nothing and let a resourcing disaster unfold.

I chose a third option: I brought data, not opinions. I built a simple one-pager showing projected impact (using the same rigor we'd apply to any other feature), user research explicitly contradicting the assumed demand, and an honest opportunity cost analysis of what else that 40% of engineering capacity could accomplish instead.

I didn't say "this is a bad idea" (a sentence that would've triggered defensiveness). I said, "Here's what the data shows about impact and cost. I want to make sure we're making this decision with full visibility into the trade-off, and I'll fully support whichever direction you choose."

The outcome? We didn't kill the feature entirely, but we scoped it down to a much smaller, cheaper version that tested the core hypothesis without the full 40% investment. It performed exactly as the data predicted: minimal adoption. The CEO, to his credit, moved on gracefully because he'd seen the reasoning, not just been told "no."

**The lesson:** You rarely win these fights by being right. You win them by making the trade-off impossible to ignore, while giving the other person a face-saving way to change course.

---

## **Opportunity Cost: The Hidden Variable in Every Prioritization Decision**

Every "yes" is secretly also a "no" to something else. This sounds obvious, but it's shocking how rarely it's made explicit in planning conversations.

**Instead of asking:** "Should we build Feature X?" (a yes/no question that hides the real trade-off)

**Ask:** "If we build Feature X this quarter, what are we explicitly NOT building, and are we comfortable with that trade-off?"

This reframing forces stakeholders to confront the actual cost of their request, rather than treating engineering capacity as an infinite resource that materializes from nowhere.

---

## **A Practical Prioritization Process That Actually Survives Reality**

Here's a process that blends frameworks with the political reality we've discussed:

**1. Gather inputs from multiple sources** (user research, data, stakeholder requests, technical debt needs, competitive intelligence)—don't let any single source dominate by default.

**2. Score using a lightweight framework** (RICE or Value/Effort) to create an initial ranked baseline—not as gospel, but as a starting point for discussion.

**3. Make politics visible, not invisible.** If a HiPPO request is jumping the queue, name it explicitly: "This wasn't our highest-scored item, but we're prioritizing it because of [specific business reason]." This transparency builds trust even when people disagree with the outcome.

**4. Protect technical debt capacity systematically**, not as an afterthought competing against every shiny feature request.

**5. Communicate trade-offs explicitly**, especially to whoever's request _didn't_ make the cut. Silence breeds resentment; clear reasoning (even when disappointing) builds long-term trust.

**6. Revisit and recalibrate.** Prioritization isn't a one-time event—it's an ongoing negotiation as new information, competitive moves, and organizational priorities shift.

---

## **Chapter Summary: The TL;DR**

Prioritization frameworks (RICE, MoSCoW, Kano, ICE) are useful thinking tools, but they can be gamed, and they don't have the authority to make decisions stick on their own—only relationships, evidence, and organizational courage can do that.

The real challenge isn't calculating scores; it's navigating the trilemma between stakeholder priority, user priority, and business priority, especially when a HiPPO's offhand comment threatens to override months of careful analysis.

Technical debt needs protected, systematic capacity allocation, or it will always lose to shinier, more visible feature work. And killing a stakeholder's favorite feature is rarely won by being "right"—it's won by making trade-offs visible and giving people a face-saving path to change course.

In the next chapter, we'll tackle Roadmapping—and why your beautifully detailed 12-month roadmap is probably setting you up for an uncomfortable conversation in about six weeks.

---

**Reflection Questions:**

1. Think of a recent prioritization decision at your company. Was it driven by a framework, politics, or some invisible mix of both? Be honest about which factor actually won.
2. Has your organization ever labeled "everything" as high priority? What happened as a result?
3. How much of your engineering capacity is protected for technical debt versus competing quarter-by-quarter against feature requests?

**Action Item:**

Pick one prioritization decision you're currently facing. Write out the opportunity cost explicitly: "If we do X, we are explicitly choosing NOT to do Y and Z, because [reason]." Share this framing with your stakeholders before the next planning meeting, and notice how it changes the conversation.

---
