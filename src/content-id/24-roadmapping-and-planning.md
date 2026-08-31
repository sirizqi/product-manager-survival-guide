## **The Roadmap That Aged Like Milk**

In January, I presented a gorgeous 12-month roadmap to our executive team. Gantt chart, dependency mapping, quarterly milestones, the works. It even had a fancy title slide: "2023 roadmap produk: Our Path to Market Leadership." I was genuinely proud of it. People nodded. Someone said "great work" in the meeting. I felt like I'd cracked the code of strategic planning.

By March, a competitor had launched something that shifted our entire market positioning, forcing a strategic pivot. By May, our biggest engineering lead quit, taking crucial context with him and delaying two "committed" initiatives by a full quarter. By July, the CEO decided we needed to prioritize an enterprise deal that required building something not even mentioned in the original roadmap. By September, I looked back at my January roadmap and realized we'd executed maybe 30% of what was originally planned.

Nobody in leadership was mad about this, interestingly. What they _would_ have been mad about is if I'd stubbornly tried to execute the original plan despite all this changed information, just because "that's what we committed to."

This is the paradox of roadmapping that nobody explains clearly: **a roadmap is simultaneously essential and guaranteed to be wrong.** Your job isn't to predict the future perfectly. Your job is to create enough directional clarity for people to plan and coordinate, while building in enough flexibility that reality doesn't make you a liar.

Let's talk about Cara actually do this well.

---

## **Time-Based Roadmaps vs Now-Next-Later**

### **Time-Based Roadmaps (The Traditional Approach)**

**Structure:** Specific features mapped to specific months/quarters. "Q1: Feature A. Q2: Feature B. Q3: Feature C."

**Pros:** Easy for stakeholders (especially sales and leadership) to understand at a glance. Creates clear accountability checkpoints.

**Cons:** Creates false precision. The moment you put a date on something, people treat it as a promise, not an estimate. When reality shifts (and it always does), you're now "behind schedule" on something that was always a rough guess dressed up as a commitment.

### **Now-Next-Later (The More Honest Approach)**

**Structure:** Group initiatives into three buckets—Now (currently in progress, high confidence), Next (planned, medium confidence, coming soon), Later (directionally important, low confidence on timing, may change based on what we learn).

**Pros:** Builds in honest uncertainty. Communicates priority without false precision. Naturally accommodates the reality that priorities shift as you learn more.

**Cons:** Some stakeholders (especially sales teams trying to close deals, or executives reporting to a board) genuinely need dates for external commitments. "It's coming later" doesn't always satisfy a client asking "when exactly?"

**My honest take:** Use Now-Next-Later internally for planning and prioritization conversations, and only convert "Now" items into specific date commitments when you have high confidence (ideally, when you're already partway through building them). Resist the pressure to put dates on "Later" bucket items just because someone wants a clean-looking slide.

---

## **Theme-Based vs Feature-Based Roadmaps**

### **Feature-Based Roadmaps**

List specific features: "Dark mode. Export to PDF. SSO integration."

**Problem:** This locks you into specific solutions before you've fully validated the problem or explored alternative approaches. It also makes the roadmap feel like a checklist rather than a strategic narrative, and it invites stakeholders to negotiate over specific features rather than underlying priorities.

### **Theme-Based Roadmaps**

Organize around problems or outcomes: "Reduce enterprise security friction. Improve new user activation. Expand into the mid-market segment."

**Advantage:** This gives your team room to discover the _best_ solution to a theme rather than being locked into a predetermined feature. It also communicates the "why" more clearly to stakeholders, and it survives longer because underlying problems change less frequently than specific solutions.

**Practical Tip:** Even within a theme-based roadmap, it helps to include a few illustrative examples of what solving the theme might look like ("Reduce enterprise security friction—likely involving SSO and audit logs, exact scope TBD based on discovery"). This gives stakeholders enough concreteness to visualize progress without over-committing to specifics before you've done the work.

---

## **The Quarterly Planning Ritual (And Cara Not Hate It)**

Quarterly planning has a bad reputation, largely because it's often done badly: rushed, disconnected from actual strategy, and treated as a bureaucratic checkbox exercise rather than genuine strategic thinking time.

**A healthier quarterly planning process:**

**Weeks Before Planning:**

- Review previous quarter's actual outcomes against goals (not just "did we ship it" but "did it achieve the intended impact")
- Gather input from discovery, data, stakeholders, and technical debt needs
- Draft initial themes based on strategy (not from scratch—this should connect to your longer-term strategic document)

**During Planning:**

- Present themes with rationale (diagnosis → guiding policy, remember Chapter 5) rather than just a feature list
- Facilitate explicit trade-off conversations, not just "here's the plan, any questions?"
- Get genuine buy-in from engineering and design leads on feasibility—Jangan just announce a plan and hope it's achievable

**After Planning:**

- Communicate clearly to the broader organization (not everyone needs deep detail, but everyone affected needs enough context to plan their own work)
- Set up a lightweight check-in cadence (bi-weekly or monthly) to catch drift early, rather than discovering in week 11 of a 13-week quarter that you're wildly off track

---

## **The Overcommitment Trap**

Here's a pattern that destroys team trust and morale faster than almost anything else: consistently overcommitting on roadmaps, then either missing deadlines repeatedly or forcing teams into unsustainable crunch to hit arbitrary dates.

**Why overcommitment happens:**

- Optimism bias (everything looks achievable when you're excited about it and haven't started yet)
- Political pressure to promise more than is realistic (nobody wants to be the PM who says "we can only do 3 things this quarter" when leadership wants to see 8)
- Poor estimation practices (treating engineering estimates as commitments rather than probabilistic ranges)
- Not accounting for the inevitable "unplanned work" that always eats 20-30% of any team's capacity (bugs, support escalations, urgent stakeholder requests)

**The damage overcommitment causes:**

- Engineering teams learn not to trust roadmap commitments, leading to cynicism and disengagement
- Constant crunch leads to burnout and turnover (we'll dig deeper into this in Chapter 35)
- Quality suffers as teams cut corners to hit unrealistic deadlines
- Stakeholders (sales, marketing, leadership) lose trust in your roadmap's reliability, undermining your credibility for future planning

**The fix:**

- Build in explicit buffer capacity for unplanned work (Jangan plan at 100% capacity—plan at 70-80%)
- Treat estimates as ranges, not points ("6-10 weeks" Daripada a false-precision "8 weeks")
- Say no more often during planning, rather than saying yes to everything and quietly failing later
- Track your team's actual historical velocity and use _that_ data to calibrate future planning, rather than relying purely on optimistic gut estimates

---

## **Dealing with Constantly Changing Priorities**

If you work anywhere reasonably dynamic (which is most companies), your roadmap will change mid-quarter. This is normal, not a sign of organizational dysfunction—though if it happens _every single week_, that's a different, more serious problem worth addressing directly with leadership.

**Healthy change:** A new piece of information emerges (competitor move, urgent customer churn risk, critical bug) that genuinely warrants reprioritization, and it's communicated transparently with clear trade-off reasoning.

**Unhealthy change:** Priorities shift based on whoever spoke to the CEO most recently, with no consistent rationale, making the team feel like they're chasing a moving target with no coherent strategy behind it.

**Cara build resilience into your roadmap process:**

1. **Reserve explicit "flex capacity"** in your planning (some teams reserve 10-20% of capacity specifically for unplanned urgent work, so a genuine emergency doesn't require blowing up the entire plan).
    
2. **Create a lightweight "request intake" process** for new priorities that pop up mid-quarter, forcing explicit trade-off conversations ("If we add this, what falls off the current plan?") rather than just silently absorbing extra work.
    
3. **Communicate changes with reasoning, not just announcements.** "We're shifting priority to X because Y" builds understanding. "New priority: X" without context breeds confusion and resentment.
    
4. **Track how often priorities shift**, and if it's happening constantly without good reason, raise this as a systemic issue with leadership rather than just quietly absorbing the chaos every time.
    

---

## **Roadmap Communication: Different Audiences, Different Needs**

One roadmap format rarely serves every audience well. Consider tailoring communication (without changing the underlying substance) for different groups:

**For Engineering:** More technical detail, clear on dependencies, realistic about capacity and technical constraints, framed around problems to solve rather than prescribed solutions.

**For Sales:** Clear on what's shipping when (to the extent Kamu bisa commit), careful about over-promising specific dates to prospects, transparent about what's genuinely uncertain versus committed.

**For Executive/Board:** Connected explicitly to business outcomes and strategy, less granular detail, more focus on the "why" and expected impact.

**For Customers (Public Roadmap, if you have one):** Extremely careful about specific date commitments (customers remember promises, even implied ones), often better framed as themes/directions rather than specific feature-by-feature detail.

**Common Mistake:** Sharing the exact same detailed internal roadmap externally, then facing awkward conversations when internal priorities shift and customers feel misled by commitments that were never meant to be ironclad.

---

## **Tools of the Trade (Brief Overview)**

**Productboard, Aha!, ProductPlan:** Purpose-built roadmapping tools that help visualize themes, connect to strategy, and manage stakeholder input at scale. Useful for larger organizations with complex, multi-team roadmaps.

**Jira Product Discovery:** Good if you're already deeply embedded in the Atlassian ecosystem and want tighter integration between discovery, prioritization, and execution tracking.

**Notion/Airtable (DIY approach):** Perfectly adequate for smaller teams or startups. Jangan feel pressured to buy expensive specialized tools before you've outgrown what a well-organized Notion database can do.

**The honest truth:** The tool matters far less than the _process and discipline_ behind it. I've seen beautifully organized Aha! roadmaps that were strategically empty, and I've seen messy spreadsheets that drove genuinely excellent strategic decision-making. Jangan mistake tool sophistication for strategic rigor.

---

## **The Roadmap Review Nobody Does (But Should)**

Here's a practice that separates mature product organizations from immature ones: **retrospectively reviewing roadmap accuracy**, not just celebrating what shipped.

At the end of each quarter, ask:

- What did we predict we'd ship, and what did we actually ship? What explains the gap?
- Of what we shipped, did it achieve the intended impact, or did we just complete the task without validating outcome?
- Were our estimates reasonably accurate, or consistently overoptimistic? By how much?
- What unplanned work consumed capacity, and was it genuinely unavoidable or a sign of poor planning/protection?

This isn't about assigning blame—it's about calibrating your planning process to be more honest and accurate over time. Teams that skip this step tend to repeat the same overcommitment mistakes quarter after quarter, never actually improving their estimation and planning discipline.

---

## **Chapter Summary: The TL;DR**

A roadmap is simultaneously essential for coordination and guaranteed to be at least partially wrong—your job is building enough directional clarity while maintaining honest flexibility, not perfectly predicting the future.

Now-Next-Later and theme-based approaches generally age better than rigid time-based, feature-specific roadmaps, because they build in honest uncertainty rather than false precision.

Overcommitment destroys trust faster than almost anything else in Product Management—build in buffer capacity, treat estimates as ranges, and get comfortable saying no during planning rather than quietly failing later.

Different audiences need different roadmap communication, and retrospectively reviewing roadmap accuracy (not just celebrating what shipped) is how mature product organizations continuously improve their planning discipline.

In the next chapter, we're diving into Metrics, Analytics, and Data Literacy—including why your "North Star Metric" might actually be steering you directly into an iceberg.

---

**Reflection Questions:**

1. Look at your last quarter's roadmap versus what actually happened. What's the gap, and what does it teach you about your planning process?
2. Does your organization build in explicit buffer capacity for unplanned work, or does every quarter get planned at 100% capacity with no room for reality?
3. Have you ever shared a specific date commitment externally that later became a painful promise to walk back? What would you do differently?

**Action Item:**

Do a quick roadmap retrospective right now: pull up last quarter's plan, mark what shipped versus didn't, and write one sentence explaining the gap for each item that didn't ship as planned. Patterns will emerge quickly—and they'll tell you exactly where your planning process needs the most work.

---
