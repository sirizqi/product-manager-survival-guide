## **The Slack Message That Ruined My Week**

"Hey, quick question—when are we shipping the bulk export feature? I told [Big Client] it would be ready by their renewal date next month."

I stared at this Slack message from a sales rep for a solid thirty seconds before responding. We had no bulk export feature in development. It wasn't on the roadmap. It had never been discussed with engineering. It existed, as far as I knew, entirely in this salesperson's head and now, apparently, in a client's expectations for their renewal decision.

"I need to understand the context here," I typed back, trying to stay calm. "We don't currently have this planned. What exactly did you tell them?"

The answer, unsurprisingly, was that the client had mentioned wanting this capability during a call, the sales rep (eager to keep the deal warm) had said "that's definitely something we're working on," and now a $200K renewal was implicitly tied to a feature that existed nowhere except in a hopeful sales conversation.

This scenario, in some variation, happens at nearly every company with a sales team. It's not usually malicious—sales reps are incentivized to close deals, and "yes, we're building that" is a powerful, deal-closing sentence that's genuinely tempting to say even without certainty. But it creates a fundamental, recurring tension that every PM must learn to navigate: **the gap between what gets promised in the field and what product can actually, realistically deliver.**

---

## **Understanding the Sales Incentive Structure (So You Stop Being Surprised By It)**

Here's something that took me years to genuinely internalize: sales isn't being unreasonable or irresponsible when they make promises that create problems for product. **They're responding rationally to their own incentive structure**, which is almost always built around closing deals and hitting quota, not around product roadmap accuracy.

If a sales rep is measured purely on closed revenue, and saying "yes, that's coming soon" measurably increases their chance of closing a deal today, of course they're going to say it—especially if the consequences of that promise land on product's plate weeks or months later, well after their commission has already been earned.

**This isn't a character flaw to fix through frustrated Slack messages.** It's a structural incentive misalignment that requires structural solutions, not just individual willpower or better intentions from sales reps who are, after all, doing exactly what their compensation structure rewards them for doing.

---

## **Building a Sane Sales-Product Interface**

### **A Clear, Accessible Roadmap Communication Channel**

Sales needs genuine visibility into what's actually planned, in progress, and shipped—not buried in an internal Jira board they don't have access to, or a stale roadmap doc last updated two quarters ago.

**Practical solution:** Maintain a sales-facing roadmap view (even if simplified from the full internal version) that's genuinely kept current, clearly distinguishing between "shipped," "in progress, high confidence," and "under consideration, no committed timeline." This gives sales something legitimate to reference instead of guessing or over-promising based on outdated information.

### **A Clear Escalation Path for Custom Requests**

When a client asks for something not currently on the roadmap, sales needs a clear, fast process for surfacing this to product—rather than either making an unauthorized promise on the spot, or feeling like there's no legitimate channel to raise the request at all (which paradoxically also increases the temptation to just promise something informally).

**Practical solution:** A lightweight, fast-turnaround process (not a black hole that takes three weeks to get any response) where sales can flag "client is asking about X, is this feasible, and on what timeline if so?" This doesn't guarantee the answer will be "yes, immediately"—but it at least ensures promises made are grounded in actual product reality rather than hopeful improvisation in a sales call.

### **Training on What NOT to Promise**

Sometimes the fix is genuinely simple: explicit training/guidelines for sales on language to use for uncertain roadmap items. Instead of "yes, we're building that," coaching toward "that's valuable feedback, let me check with our product team on timeline and get back to you" preserves the deal momentum without creating a hard commitment product hasn't actually validated.

---

## **Translating Business Goals into Product Features (Without Losing the Plot)**

Business and sales leadership often communicate goals at a fairly abstract level ("we need to grow enterprise revenue," "we need to reduce churn in the mid-market segment"). Part of the PM's job is translating these business-level goals into concrete, buildable product initiatives—without simply becoming an order-taker who builds whatever the loudest business voice requests.

**A healthy translation process:**

1. **Understand the genuine underlying business goal deeply**, not just the surface-level request. "We need enterprise revenue growth" might actually mean specific things: better security/compliance features, more robust admin controls, dedicated account management tooling—but you need genuine discovery conversations with business stakeholders to understand which specific gaps are actually blocking enterprise deals, rather than guessing.
    
2. **Validate the translated hypothesis with actual data and user research**, not just accepting business's assumed solution uncritically. Sometimes business leadership assumes a specific feature will solve their goal, but research reveals a different underlying blocker that a different solution would address more effectively.
    
3. **Present your recommended product direction back to business stakeholders with clear reasoning**, connecting explicitly back to their original business goal, so they can validate you've actually understood and are addressing their genuine need (not just built something adjacent that misses the actual point).
    

---

## **Sales-Driven vs Product-Driven Companies: Know Which One You're In**

This distinction matters enormously for how you navigate sales relationships, and pretending your company operates differently than it actually does creates constant, avoidable friction.

### **Sales-Driven Companies**

Revenue and deal-closing drive most major product decisions. Custom feature requests from big clients often genuinely do jump the queue, because in this model, a few large enterprise contracts might represent a disproportionate share of company revenue, making individual deal requirements legitimately high-priority business decisions, not just annoying distractions from "real" product strategy.

**How to operate effectively here:** Accept this reality rather than constantly fighting it as if you're at a product-driven company. Focus your energy on ensuring custom requests are evaluated with genuine rigor (does this actually serve the broader roadmap direction, or is it truly one-off?), and on building reusable, generalizable solutions where possible even when responding to specific deal pressure, rather than accumulating pure one-off technical debt with each new enterprise ask.

### **Product-Driven Companies**

Broader product vision and self-serve/scalable user needs drive most decisions, with individual sales requests treated as valuable input but rarely overriding the core roadmap without genuine strategic justification.

**How to operate effectively here:** Sales may need more education on why individual custom requests don't automatically jump the queue, and you'll need genuinely compelling reasoning (not just dismissal) when declining to build something a specific deal seems to depend on.

**The mistake to avoid either way:** Assuming your company operates in the model you personally prefer (most PMs instinctively prefer product-driven dynamics, since it centers their own strategic judgment) rather than accurately recognizing which model your company actually operates under, and adapting your approach accordingly.

---

## **Go-to-Market Collaboration: Bringing Marketing In Early**

**Common dysfunction:** Marketing finds out about a significant feature launch two weeks before it ships, scrambling to produce launch materials, messaging, and campaigns with insufficient lead time to do genuinely thoughtful, effective work.

**A healthier approach:** Involve marketing meaningfully earlier in the roadmap process—not necessarily at the very initial discovery stage, but well before the final development sprint, giving them genuine runway to develop thoughtful positioning, messaging, and launch campaigns rather than last-minute scrambling that produces mediocre go-to-market execution.

**What marketing genuinely needs from product:**

- Clear understanding of who the feature is for and what specific problem it solves (the "why," not just technical feature description)
- Advance notice proportional to launch significance (a minor UI tweak needs less lead time than a major new product line)
- Honest, realistic timeline communication, including appropriate flagging of risk/uncertainty rather than false confidence that later requires an awkward "actually, we're delayed" conversation after marketing has already built campaign momentum around a specific date

---

## **Pricing and Packaging: Where Product, Business, and Sales Collide Most Directly**

Pricing decisions sit at a particularly complex intersection of product value, business model strategy, sales enablement, and competitive positioning—rarely a purely "product" decision made in isolation.

**Why PMs should be genuinely involved in pricing conversations:** Understanding what customers actually value (from research and usage data) provides crucial input into pricing/packaging decisions that purely financial or sales-driven pricing logic might miss. A feature might be technically impressive but pricing-irrelevant if it's not actually what drives purchase decisions; conversely, a seemingly minor feature might be a significant willingness-to-pay driver that pure engineering-effort-based prioritization would undervalue.

**Common pricing/packaging tensions:**

- Sales wants maximum flexibility (custom deals, heavy discounting) to close individual deals, while product/business often needs pricing consistency and discipline for long-term model sustainability and clarity
- Product might want to make a valuable feature broadly available to drive adoption and retention, while business wants to gate it behind a premium tier to drive upgrade revenue
- Marketing wants clear, simple packaging tiers for effective communication, while sales wants enough customization flexibility to handle diverse enterprise client needs

**The PM's role:** Bring user research and usage data into these conversations as a genuine input (not the only consideration, since business model sustainability matters too), advocating for pricing/packaging decisions that align with genuine customer value perception, not just internal organizational convenience or short-term deal-closing pressure.

---

## **Dealing with Custom Requests from Enterprise Clients (Without Drowning)**

This deserves specific attention because it's one of the most common, recurring sources of PM-sales friction, especially at B2B companies with any significant enterprise client base.

**The core tension:** Every individual custom request might seem reasonable in isolation ("just this one small tweak for this one important client"), but accumulated across dozens of clients, this pattern creates a fragmented, unmaintainable product with escalating technical debt and confused positioning.

**A framework for evaluating custom requests:**

1. **Is this actually a broader need in disguise, or genuinely a one-off edge case?** Sometimes a "custom" request from one enterprise client reveals a genuine gap that several other clients (current or prospective) would also value—in which case, it's not really "custom," it's validated signal for a legitimate roadmap addition serving a broader need.
    
2. **What's the actual deal value/strategic importance at stake, honestly assessed?** Not every deal a sales rep describes as "critical" is actually strategically significant enough to justify the engineering cost of custom work—apply genuine rigor here rather than accepting urgency framing uncritically.
    
3. **Can this be solved through configuration rather than custom code?** Building genuine configurability into core features (rather than hardcoded one-size-fits-all solutions) can satisfy diverse client needs without accumulating unmaintainable one-off technical debt for each new request.
    
4. **What's the actual cost of saying no, versus the cost of saying yes?** Sometimes losing a specific deal is genuinely the better business outcome than accumulating unsustainable technical debt and product fragmentation that damages your ability to serve your broader client base effectively over time.
    

---

## **Case Study: The Renewal That Almost Broke Our Roadmap**

Back to that opening Slack message about the bulk export feature. Here's how it actually played out.

**Step 1: I didn't panic or immediately promise anything.** I told the sales rep I needed 24 hours to assess feasibility and genuine priority before we committed to anything with the client.

**Step 2: I dug into the underlying need.** Turns out, the client didn't specifically need "bulk export" as a feature—they needed a way to share specific data with their finance team for quarterly reporting. Export was their assumed solution, not necessarily the only valid one.

**Step 3: I checked if this was genuinely a broader pattern.** A quick look at support tickets and a couple of quick calls with our Customer Success team revealed three other enterprise clients had raised similar (though not identical) requests in the past two months. This wasn't actually a one-off "custom" ask—it was validated signal for a legitimate, broader-value roadmap item.

**Step 4: I assessed genuine engineering effort and timeline.** A proper, generalizable export feature would take about 6 weeks—not doable before the client's renewal date, but not an unreasonable roadmap addition either.

**Step 5: I brought this back to the sales rep and, together, we crafted an honest response to the client.** We explained that we didn't currently have this feature, but based on their (and other clients') feedback, we were prioritizing it for the next quarter, with a specific (appropriately hedged) timeline. We also explored an interim manual workaround (a one-time data pull from our Customer Success team) to bridge the gap until the proper feature shipped.

**The outcome:** The client renewed, satisfied with the honest transparency and genuine roadmap commitment (rather than a vague, unfounded promise), and we shipped a properly-scoped, broadly useful export feature that served multiple clients, not just a rushed, narrow, custom solution built in panic mode for one specific renewal deadline.

**The lesson:** The instinct to either flatly refuse ("that's not on our roadmap, sorry") or panic-promise something poorly considered are both worse outcomes than taking a brief pause to genuinely understand the underlying need, validate broader signal, and craft an honest, well-reasoned response—even under real time pressure.

---

## **Chapter Summary: The TL;DR**

Sales over-promising isn't usually malicious—it's a rational response to an incentive structure built around closing deals, requiring structural solutions (clear roadmap visibility, fast escalation paths, appropriate training) rather than just individual frustration or willpower.

Understand whether your company is genuinely sales-driven or product-driven, and adapt your approach accordingly rather than fighting your actual organizational reality. Involve marketing meaningfully earlier in the roadmap process to enable thoughtful go-to-market execution rather than last-minute scrambling.

Engage genuinely in pricing and packaging conversations, bringing user research and value perception data as crucial input alongside business model and sales enablement considerations. When evaluating custom enterprise requests, dig into whether they represent broader validated need versus genuine one-off edge cases, and assess honest cost-benefit rather than reflexively saying yes or no.

In the next chapter, we shift focus to Leadership and Team Building—including the transition from being a great individual contributor to genuinely developing other people.

---

**Reflection Questions:**

1. Has a sales promise ever created an unexpected product commitment for you? How was it resolved, and what structural fix might have prevented it?
2. Is your company genuinely sales-driven or product-driven? Are you currently operating in alignment with that reality, or fighting against it based on your personal preference?
3. Think of a recent custom enterprise request. Did you dig into whether it represented broader validated need, or accept the "custom, one-off" framing without deeper investigation?

**Action Item:**

This week, have a genuine conversation with a sales or customer success team member (not about a specific urgent request, but generally) about what they wish product understood better about their day-to-day reality. You'll likely learn something that reshapes how you think about this relationship.

---
