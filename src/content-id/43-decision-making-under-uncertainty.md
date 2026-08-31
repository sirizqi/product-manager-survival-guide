## **The Three-Week Meeting About a Button**

I once watched a team spend three weeks—actual calendar weeks, with multiple meetings, a shared document with 40+ comments, and at least one Slack thread that spiraled into genuine interpersonal tension—debating whether a call-to-action button should say "Get Started" or "Try It Free."

Three weeks. For button copy that could be changed in about ten minutes if it turned out to be wrong, tested with a simple A/B test that would've given a definitive answer within days.

Meanwhile, that same quarter, a decision to fundamentally restructure our pricing tiers—something that would take months to properly unwind if it turned out badly, affecting every existing customer's billing relationship with us—got decided in a single 45-minute meeting because "we needed to move fast" and "we could always adjust later if needed."

We had the decision-making calculus completely backwards. We treated a trivially reversible decision with the caution appropriate for something irreversible, and treated a genuinely difficult-to-reverse decision with the speed appropriate for something trivial.

This inversion happens constantly in product organizations, and understanding why—along with the crucial framework for fixing it—is one of the most practically valuable things Kamu bisa learn as a PM.

---

## **Jeff Bezos's One-Way vs Two-Way Doors**

In his 1997 letter to Amazon shareholders, Jeff Bezos introduced a framework that remains one of the most genuinely useful mental models in all of business decision-making: **distinguishing between Type 1 (irreversible, "one-way door") and Type 2 (reversible, "two-way door") decisions.**

**Type 1 Decisions (One-Way Doors):** Consequential, difficult or impossible to reverse. Once you walk through this door, Kamu bisa't easily walk back through it to your previous state. These genuinely warrant careful, deliberate, consultative decision-making—involving more people, more analysis, more caution, because the cost of getting it wrong is genuinely high and hard to undo.

_Examples:_ Fundamentally changing your core pricing model for existing customers. A major architectural decision that would require months of rework to reverse. A significant public commitment to customers or the market that would be embarrassing and trust-damaging to walk back. Key executive hires or significant workforce reductions.

**Type 2 Decisions (Two-Way Doors):** Most decisions, Kenyataannya,. Even if they turn out to be wrong, they can be reversed relatively quickly and cheaply. These decisions should be made fast, by empowered individuals or small groups, without excessive process or consensus-building.

_Examples:_ Button copy. Which of two onboarding flow variants to test Pertama,. Whether to include a specific field in a form. Most day-to-day feature and UX decisions that can be A/B tested, iterated on, or simply changed back if they Jangan work.

**Bezos's crucial insight, and the one most organizations get catastrophically wrong:** "As organizations get larger, there seems to be a tendency to use the heavyweight Type 1 decision-making process on most decisions, including many Type 2 decisions... The end result of this is slowness, unthoughtful risk aversion, failure to experiment sufficiently, and Dampaknya, diminished invention."

---

## **Why Organizations Default to Treating Everything Like a Type 1 Decision**

Understanding why this inversion happens is crucial to actually fixing it in your own organization.

**Fear of blame:** If a fast, individually-made decision goes wrong, it's easy to point to a specific person who "should have been more careful." If a slow, heavily-consensus-driven decision goes wrong, blame diffuses across the entire group, feeling psychologically safer for everyone involved—even though this diffused-blame process actually produces worse organizational outcomes overall.

**Genuine uncertainty about which type a decision actually is:** Sometimes it's genuinely unclear whether a decision is truly reversible or not, and this ambiguity gets resolved (understandably, if not optimally) by defaulting to excessive caution just in case.

**Organizational incentive misalignment:** If people are punished more severely for visible mistakes than they're rewarded for genuine velocity and learning, the rational individual response is excessive caution on every decision, regardless of actual reversibility—even though this collectively produces a worse outcome for the organization as a whole.

**Confusing "important" with "irreversible":** Some decisions feel important (they'll clearly affect metrics people care about) without actually being irreversible. Button copy affecting conversion rate feels important, and it genuinely is worth caring about—but it's simultaneously easily reversible if the initial choice turns out to be wrong, meaning it shouldn't require the same caution as a genuinely hard-to-reverse decision of similar apparent "importance."

---

## **A Practical Framework for Classifying Your Own Decisions**

Before diving into a decision-making process, explicitly ask:

**1. How costly and difficult would it genuinely be to reverse this if it turns out to be wrong?** Not "would it be mildly annoying to change" but "would it require months of rework, damage significant trust, or create irreversible downstream consequences?"

**2. How quickly could we get genuine signal on whether this decision is working?** A decision that's technically reversible but where you won't get clear signal on its success or failure for six months functions somewhat like a Type 1 decision in practice, even if theoretically reversible—because you're locked into a long period of uncertainty before you'd even know to reverse it.

**3. What's the actual cost of being wrong for the duration until we could reverse it?** Even genuinely reversible decisions can be costly if you'd be operating under the wrong assumption for a long time before discovering the mistake and reversing course.

**Based on honest answers to these questions, calibrate your process accordingly:**

- **Clearly Type 2 (reversible, fast signal, low cost of being temporarily wrong):** Empower individual or small-team decision-making, move fast, treat it as a genuine experiment rather than a permanent commitment requiring extensive buy-in.
    
- **Clearly Type 1 (irreversible, slow signal, high cost of being wrong):** Invest in genuine deliberation, broader stakeholder input, more rigorous analysis, and appropriate caution—this is exactly where that investment of time and care is genuinely warranted.
    
- **Ambiguous cases:** Ask whether Kamu bisa restructure the decision to make it more genuinely reversible (a smaller pilot, a limited rollout, an explicit "we'll revisit this in 60 days" checkpoint) rather than treating ambiguity as automatic justification for maximum caution.
    

---

## **Risk Management: Beyond Just "Being Careful"**

Genuine risk management isn't simply about minimizing risk in some generic sense—it's about understanding, quantifying (where possible), and deliberately choosing which risks are worth taking given the potential upside, rather than defaulting to risk-aversion as a blanket default posture.

**A useful framework: Expected Value thinking**

Even without precise probability numbers, roughly estimating expected value helps clarify decisions: (Probability of Success × Value if Successful) - (Probability of Failure × Cost if Failed).

**Practical application:** A risky bet with a 30% chance of success might still be genuinely worth taking if the potential upside is large enough and the downside cost of failure is genuinely limited (especially if it's a Type 2, reversible decision). Conversely, even a seemingly "safe" 90%-likely-to-succeed decision might not be worth taking if the potential downside, in the unlucky 10% scenario, is genuinely catastrophic and irreversible.

**The trap of pure risk-aversion:** Organizations that systematically avoid anything with meaningful failure probability, regardless of potential upside or actual reversibility, tend to produce safe, incremental, ultimately uncompetitive products over time—because genuine innovation and differentiation almost always requires taking some risks that carry real chance of failure.

---

## **Dealing with Imposter Syndrome in Decision-Making**

Here's a genuinely common psychological experience worth naming directly: many PMs, especially earlier in their careers (though certainly not exclusively), experience significant anxiety about making decisions, worried they lack sufficient expertise or certainty to make a "correct" call.

**Why this happens, understood honestly:** PM decisions frequently involve genuine ambiguity, incomplete information, and consequential stakes—unlike, say, an engineer implementing a well-specified technical solution where "correctness" is more objectively verifiable. This inherent ambiguity creates fertile ground for imposter syndrome, since there's rarely a clean, objectively verifiable "right answer" to point to with confidence.

**A healthier reframe:** Your job isn't to make perfectly correct decisions with certainty (an impossible standard, given genuine uncertainty)—it's to make well-reasoned decisions given available information, remain genuinely open to new information that suggests course correction, and build organizational systems (fast feedback loops, appropriate Type 1/Type 2 calibration) that make imperfect individual decisions less costly overall.

**Practical anti-imposter-syndrome habits:**

- Explicitly document your reasoning at the time of a decision (not just the conclusion), so Kamu bisa honestly evaluate later whether your _process_ was sound, even if the _outcome_ wasn't what you hoped—separating genuine decision quality from simple outcome luck.
- Normalize discussing genuine uncertainty openly with your team and stakeholders, rather than performing false confidence that creates pressure to always appear certain.
- Actively track your own calibration over time (as discussed in Chapter 18's predict-then-observe exercise)—this builds genuine, evidence-based confidence in your judgment, distinct from performed, unfounded confidence.

---

## **Analysis Paralysis: When "Enough Data" Never Feels Like Enough**

We touched on this in Chapter 4, but it deserves specific treatment here as a decision-making pathology in its own right.

**The pattern:** Continuously seeking more information, more research, more validation before committing to a decision—not because genuine uncertainty warrants it, but because the psychological discomfort of committing under any uncertainty feels worse than the comfort of continued "just a bit more research" delay.

**A useful diagnostic question:** "If I had to decide right now, with only the information I currently have, what would I choose? And what specific additional information would genuinely change that choice, versus information that would just make me feel marginally more comfortable without actually changing my decision?"

If Kamu bisa't identify specific information that would genuinely change your decision, you've likely reached the point of diminishing returns on further analysis, and continued delay is analysis paralysis rather than genuine, warranted caution.

**A practical technique: Pre-commit to a decision deadline.** "We'll gather input until Friday, then decide based on whatever we know at that point, regardless of whether we feel 100% certain." This creates useful forcing function against indefinite delay, while still allowing genuine time for relevant information-gathering within a bounded window.

---

## **Deciding by Committee: The Diffusion of Responsibility Trap**

Here's a genuinely common organizational dysfunction: important decisions get pushed to larger and larger groups, seeking consensus, in the hope that broader buy-in will produce both better decisions and reduced individual risk/blame if things go wrong.

**Why this often backfires:**

**Consensus-seeking tends toward the lowest-common-denominator, least-risky option**, even when a bolder, riskier option might have genuinely higher expected value. Committees are structurally biased toward caution, because it's easier to get universal agreement on "safe" than on "bold."

**Diffused responsibility genuinely does reduce individual accountability**, but it doesn't improve decision quality—it just makes it harder to learn from mistakes, since no single person genuinely owns the reasoning or can honestly evaluate what they'd do differently next time.

**Decision speed suffers dramatically**, since coordinating genuine input and buy-in across a large group takes substantially longer than empowered individual or small-team decision-making, even when the eventual decision quality isn't meaningfully better.

**A healthier alternative: The "consulted, not decided-by-committee" model.** Genuinely seek input and perspective from relevant stakeholders (especially for Type 1 decisions where broader input is genuinely valuable), but ensure a specific, clearly identified individual or small group retains actual decision-making authority and accountability, rather than diffusing the decision itself across an unwieldy, consensus-seeking group.

---

## **A Practical Decision-Making Protocol**

Here's a lightweight process Kamu bisa actually apply:

**1. Classify the decision type.** Genuinely Type 1 (irreversible, high-stakes) or Type 2 (reversible, lower-stakes)? Be honest, resisting the organizational default of treating everything as Type 1.

**2. For Type 2 decisions:** Identify the person or small team empowered to decide, set a reasonable but bounded timeline for gathering necessary input, then commit to deciding and moving forward, treating the outcome as a genuine experiment/learning opportunity rather than a permanent, high-stakes commitment.

**3. For Type 1 decisions:** Invest genuinely in broader consultation and rigorous analysis, but still avoid indefinite delay—set an explicit decision deadline, identify specifically what additional information would genuinely change the decision (versus just providing incremental comfort), and ensure clear ownership/accountability for the final call even after broader consultation.

**4. Document your reasoning at decision time**, regardless of decision type, enabling honest future evaluation of process quality separate from simple outcome luck.

**5. Revisit and calibrate.** For both decision types, build in explicit checkpoints to honestly evaluate how the decision played out, feeding this learning back into improving your future decision-making calibration.

---

## **Chapter Summary: The TL;DR**

Most organizations catastrophically invert Bezos's Type 1/Type 2 framework, treating easily-reversible decisions with excessive caution while sometimes rushing genuinely irreversible decisions—correctly classifying which type you're actually facing is one of the highest-leverage skills in product decision-making.

Genuine risk management means deliberately choosing which risks are worth taking given potential upside (expected value thinking), not defaulting to blanket risk-aversion that produces safe, incremental, ultimately uncompetitive outcomes.

Reframe imposter syndrome by focusing on decision _process_ quality (well-reasoned given available information, documented reasoning, genuine openness to course-correction) rather than an impossible standard of certain correctness. Recognize analysis paralysis by asking what specific information would actually change your decision, versus information that just provides psychological comfort without changing the outcome.

Avoid the diffusion-of-responsibility trap of deciding by committee—genuinely consult relevant stakeholders, especially for Type 1 decisions, but maintain clear individual or small-team ownership and accountability for the actual decision itself.

In the next chapter, we tackle one of the most genuinely difficult ongoing tensions in product work: Customer Obsession vs Business Reality, including where the ethical line actually sits with dark patterns and growth tactics.

---

**Reflection Questions:**

1. Think of a recent decision at your company that took far longer than it should have. Was it genuinely Type 1 (irreversible, high-stakes), or was it actually Type 2 but treated with excessive Type 1-style caution?
2. Have you experienced imposter syndrome around a specific product decision? Looking back, was your actual decision-making _process_ sound, even if you felt uncertain at the time?
3. Think of a decision that got pushed to a large committee for consensus. Did this genuinely improve decision quality, or did it produce a lowest-common-denominator outcome while diffusing accountability?

**Action Item:**

Look at your current list of pending decisions (personal or work-related). For each one, explicitly classify it as Type 1 or Type 2. For anything genuinely Type 2 that's been sitting unresolved, commit to deciding within 24 hours. Notice how this explicit classification changes your sense of urgency and appropriate process for each one.

---
