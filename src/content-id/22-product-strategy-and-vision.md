## **The Strategy Deck That Was Actually a Todo List Wearing a Costume**

I once sat through a "strategi produk" presentation that had 47 slides. It covered every feature we planned to build for the next year, organized by quarter, color-coded by team, with confidence intervals and dependency arrows connecting everything to everything else.

It was gorgeous. It was thorough. It was also, I realized about halfway through, **not a strategy at all**. It was a very well-organized todo list pretending to have strategic depth.

Here's how I knew: I asked one simple question. "Why these features, and not others? What are we explicitly choosing _not_ to do, and why?"

Silence. Then someone said, "Well, we're doing all of these because they're all valuable."

That's not strategy. That's a wishlist. Strategy is fundamentally about **choice under constraint**—and if you haven't said "no" to something significant, you haven't actually made a strategic decision. You've just made a list of nice things you'd like to have, Santa Claus style.

Let's fix your relationship with strategy, starting with what it actually means.

---

## **The Strategy Stack: Vision, Strategy, Roadmap, Backlog**

These four words get used interchangeably in most companies, which is exactly why most companies are strategically confused. Let's untangle them.

### **Vision**

The long-term (3-10 year) aspirational future state you're working toward. It's inspirational, somewhat fixed, and rarely changes.

_Example:_ "A world where every small business has access to enterprise-grade financial tools."

### **Strategy**

The specific, deliberate choices about _how_ you'll pursue that vision, given your current constraints, market position, and competitive landscape. It changes periodically (annually, sometimes more often) as market conditions shift.

_Example:_ "We will win small business trust by focusing exclusively on the restaurant vertical Pertama,, building deep workflow integrations that generalist competitors won't bother building."

### **Roadmap**

The sequenced set of initiatives that execute the strategy over the next 3-12 months. It should visibly connect back to strategic choices.

_Example:_ "Q1: Build POS integration. Q2: Launch inventory forecasting. Q3: Add supplier payment automation."

### **Backlog**

The tactical, granular list of features, bugs, and tasks that make up each roadmap initiative.

_Example:_ "Build API connector for Toast POS. Design inventory alert notification. Fix bug where supplier invoices Jangan sync correctly."

**The diagnostic test:** If someone asks "why are we building this specific feature?" and Kamu bisa't trace an answer up through roadmap → strategy → vision, you're operating on vibes, not strategy. This happens _constantly_, and it's exhausting for everyone involved because priorities feel random and arbitrary (because they often are).

---

## **Good Strategy, Bad Strategy: Richard Rumelt's Framework**

Richard Rumelt's book _Good Strategy/Bad Strategy_ remains one of the most clarifying frameworks I've encountered, and every PM should internalize it.

**Bad strategy typically looks like:**

- A list of goals dressed up as strategy ("Increase revenue by 20%, improve customer satisfaction, expand into new markets")
- Fluffy mission-statement language with zero specificity ("We will delight customers through innovation and excellence")
- Failure to acknowledge or address the actual obstacles standing in your way
- Trying to please everyone by including a little of everything

**Good strategy has three components (the "kernel"):**

**1. Diagnosis** – What's the actual core challenge or obstacle? Not the symptom, the _root problem_.

**2. Guiding Policy** – The overall approach for dealing with that obstacle. This is where you make hard, specific choices.

**3. Coherent Actions** – Coordinated steps that actually execute the guiding policy, reinforcing each other rather than working in isolation.

**Applying this to product:**

_Bad:_ "Our strategy is to grow revenue and improve retention" (this is a goal, not a strategy—it says nothing about _how_).

_Good:_

- _Diagnosis:_ "Our churn is highest among users who never complete onboarding within the Pertama, 7 days, and our current onboarding is a generic tutorial that doesn't reflect different use cases."
- _Guiding Policy:_ "We will build a segmented onboarding experience tailored to the three primary use cases we've identified through research, prioritizing time-to-Pertama,-value over feature completeness."
- _Coherent Actions:_ "Redesign onboarding flow with use-case branching. Build progress tracking dashboard for CS to intervene early. Simplify initial feature set shown to new users."

See the difference? One is a wish. The other is an actual plan grounded in a specific understanding of the problem.

---

## **Competitive Analysis That Actually Means Something**

Most competitive analysis is a feature comparison table. You know the one: rows of features, columns of competitors, checkmarks and X's, and a conveniently placed "Coming Soon" for anything your product lacks.

This tells you almost nothing useful. Here's why: **feature parity isn't a strategy, and feature comparison tables optimize for the wrong question.**

**The wrong question:** "What features do competitors have that we Jangan?"

**The right questions:**

- "What underlying need is this competitor serving exceptionally well, and why?"
- "What trade-offs are they making, and who are they explicitly _not_ serving well because of those trade-offs?"
- "Where is the market underserved because every competitor is making the same assumptions?"
- "What would need to be true for a customer to switch from them to us (or vice versa)?"

**A better competitive analysis framework:**

1. **Positioning map** – Plot competitors on two meaningful axes (not "price vs quality," something more specific to your market, like "self-serve vs high-touch" or "generalist vs specialized").
    
2. **Jobs-based comparison** – Daripada comparing features, compare how well each competitor serves specific jobs-to-be-done. A competitor might "win" on features but lose on actually solving the underlying job efficiently.
    
3. **Weakness-as-opportunity mapping** – Every competitor's strength implies a trade-off weakness somewhere. Where are those gaps, and are they big enough to build a wedge strategy around?
    
4. **Switching cost analysis** – Understanding why customers _don't_ switch, even when dissatisfied, often reveals more than understanding why they would.
    

---

## **Market Sizing: The Fantasy Numbers Everyone Loves (And Nobody Should Trust)**

Every startup pitch deck has that one slide: "$500 Billion Total Addressable Market!" It's usually calculated by taking a massive, vague industry number and asserting the company will capture "just 1%" of it (as if capturing 1% of any massive market is easy).

This is fantasy math, and if you're using it to actually guide product decisions (rather than just to impress investors), you're setting yourself up for strategic failure.

**A more honest market sizing approach:**

**TAM (Total Addressable Market):** The theoretical maximum if you captured 100% of a market with zero competition. Useful for understanding the ceiling, not for planning.

**SAM (Serviceable Addressable Market):** The portion of TAM you could realistically reach given your business model, geography, and current constraints.

**SOM (Serviceable Obtainable Market):** The realistic portion Kamu bisa capture in a specific timeframe given competition, resources, and go-to-market capability.

**The strategic question that matters:** Not "how big is the market," but "**is this market big enough to matter to our business at the stage we're at, and is it growing or shrinking**?" A $50M market might be perfect for a startup and utterly irrelevant for a company that needs $500M in new revenue to move the needle.

**Common mistake:** PMs use huge TAM numbers to justify feature investment, when what actually matters is whether the _specific segment_ they're targeting is large enough and reachable enough to justify the resources being allocated.

---

## **Strategic Frameworks Worth Your Time**

### **Strategy Canvas (Blue Ocean Strategy)**

Plot your product and competitors across key factors that customers value. Then ask: which factors can we eliminate entirely (that competitors assume are necessary)? Which can we raise well above industry standard? Which can we create that Jangan currently exist?

This forces genuinely differentiated thinking Daripada incremental feature matching.

### **Wardley Mapping**

Maps components of your value chain by visibility to the customer (top) versus how commoditized/evolved they are (bottom, from genesis to commodity). This helps you identify where to build custom/differentiated solutions versus where to just buy/use existing commodity solutions.

_Common mistake:_ Building custom solutions for commodity problems (reinventing authentication systems) while neglecting genuinely differentiated areas that deserve custom investment.

### **SWOT, Done Correctly**

Everyone's done a SWOT analysis. Almost everyone does it badly, producing generic, unhelpful lists ("Strength: Great team!" — cool, so does every company).

**The fix:** Force specificity and comparison. Daripada "Strength: Good customer service," write "Strength: Average support response time of 2 hours versus industry average of 24 hours, verified through interview user as a key differentiator for enterprise clients." Vague SWOT is worthless. Specific, comparative SWOT can actually inform decisions.

---

## **The Vague vs Tactical Strategy Trap**

Strategy has a Goldilocks problem: too vague and it's meaningless, too tactical and it's just a task list.

**Too Vague (Meaningless):** "Our strategy is to be customer-obsessed and deliver value through innovative solutions."

This says nothing. It could describe literally any company. It provides zero guidance for actual prioritization decisions.

**Too Tactical (Just a Task List):** "Our strategy is to build feature A in January, feature B in February, and feature C in March."

This has no explanation of _why_ these features, what problem they solve, or what would make you change course. It's a schedule, not a strategy.

**The Right Altitude:** "Our strategy is to become the default choice for mid-market restaurants (50-200 employees) by building deep, opinionated workflows specific to food service operations, rather than competing as a generalist tool. This means saying no to enterprise features that Jangan serve this segment, even when large clients request them."

Notice this gives you an actual decision-making filter. When a big enterprise client asks for a custom feature outside the restaurant workflow, you now have strategic clarity to say no (or at least push back thoughtfully), rather than chasing every shiny opportunity that comes your way.

---

## **When Your CEO's Strategy Isn't Actually a Strategy**

Here's an uncomfortable scenario every PM eventually faces: leadership hands down a "strategy" that's actually just a reaction to whatever competitor did something notable last week, or whatever the loudest board member mentioned in the last meeting.

**Signs you're dealing with reactive pseudo-strategy:**

- It changes every time a competitor launches something new
- It can't answer "what would make us abandon this direction?"
- It's based on a single data point or anecdote rather than pattern
- Nobody can articulate the underlying diagnosis, just the desired action

**Cara navigate this diplomatically (because telling your CEO "this isn't real strategy" rarely goes well, career-wise):**

Ask clarifying questions that gently surface the gaps: "Help me understand the customer problem we're solving here so I can make sure the team builds the right solution." Or, "What's our hypothesis for why this will work better than [current approach]?" These questions can guide leadership toward more rigorous thinking without directly challenging their authority (a delicate dance, but a necessary one).

Sometimes, despite your best efforts, you'll be asked to execute a strategy you Jangan believe in. This is a legitimate reason to push back through data, respectfully disagree and commit if leadership insists, or in extreme cases, decide this isn't the right company for you. We'll dig deeper into this dilemma in Chapter 21.

---

## **Building Your Own Strategy Document**

Here's a lightweight template Kamu bisa actually use:

**1. Context:** What's happening in the market/company right now that makes this strategy relevant?

**2. Diagnosis:** What's the core problem or opportunity we're addressing? (Be specific, not generic.)

**3. Guiding Policy:** What's our overall approach to addressing this? What are we explicitly choosing to do, and what are we explicitly choosing NOT to do?

**4. Success Metrics:** How will we know if this strategy is working? What would make us pivot?

**5. Key Risks/Assumptions:** What has to be true for this strategy to succeed? What could invalidate it?

**6. Coherent Actions:** What initiatives directly execute this strategy? (This becomes your roadmap input.)

Keep this document under 2 pages. If Kamu bisa't fit your strategy in 2 pages, it's probably not focused enough yet.

---

## **Chapter Summary: The TL;DR**

Strategy is fundamentally about making explicit choices under constraint—if you haven't said "no" to something significant, you Jangan have a strategy, you have a wishlist.

Rumelt's kernel (diagnosis, guiding policy, coherent actions) forces you past vague goal-setting into actual strategic thinking. Competitive analysis should focus on underlying jobs and trade-offs, not feature checklists. Market sizing should inform realistic decisions, not just impress investors with fantasy TAM numbers.

Good strategy lives at the right altitude: specific enough to guide actual decisions, broad enough to survive more than one quarter.

In the next chapter, we'll dive into Prioritization—the art of saying "no" gracefully, and why every prioritization framework can still lead you astray if your execution and politics are broken.

---

**Reflection Questions:**

1. Look at your current roadmap produk. Can you trace every initiative back to a specific strategic choice? If not, what's actually driving those decisions?
2. Think of your closest competitor. What job are they doing exceptionally well, and what trade-off does that strength imply?
3. Has your company's "strategy" changed reactively in response to competitor moves in the last year? What might a more diagnosed, deliberate approach have looked like instead?

**Action Item:**

Take your current quarterly roadmap and try to write the "Diagnosis → Guiding Policy → Coherent Actions" kernel that justifies it. If you struggle to fill this in convincingly, that's valuable information about how strategically grounded (or ungrounded) your current priorities actually are.

---
