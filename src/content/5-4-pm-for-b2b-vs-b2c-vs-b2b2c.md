## **The Feature Nobody Asked For (Except the One Person Who Actually Mattered)**

I once watched a PM, freshly transitioned from a successful consumer app background into a B2B enterprise software role, get genuinely confused and frustrated during her first major feature prioritization cycle.

"I ran the numbers," she told me, "and this feature would only benefit maybe 5% of our actual daily users. Based on everything I know about prioritization, we shouldn't build this."

The problem: that 5% of daily users represented the procurement and IT admin teams at her company's three largest enterprise clients—the actual decision-makers who determined whether those multi-million-dollar contracts would renew or churn. The remaining 95% of daily users were individual employees at those same client companies, who used the product because their employer mandated it, not because they'd personally chosen or could unilaterally abandon it.

Her consumer-app-trained instinct—optimize for what the majority of actual users want and need—was actively wrong in this specific B2B context, where a tiny minority of "users" (who might not even be daily, hands-on users at all) held the actual purchasing power and decision authority that determined the business's fundamental success or failure.

This chapter exists because **the fundamental logic of who you're building for, why they use your product, and what actually drives business success varies so dramatically across B2B, B2C, and B2B2C contexts that instincts genuinely well-honed in one context can become actively counterproductive when unconsciously applied to another.**

---

## **The Core Distinction: User vs Customer vs Buyer**

This is the single most important conceptual foundation for understanding why these contexts differ so fundamentally.

**In pure B2C:** User, customer, and buyer are typically the same person. The person using your product is also the person who decided to acquire it and (if applicable) pays for it directly.

**In B2B:** These roles frequently split apart entirely. The **user** (an individual employee using the software daily) is often different from the **buyer** (a procurement officer, department head, or executive who makes the purchasing decision) who is often different from the **economic buyer/decision-maker** (whoever ultimately approves budget, sometimes several organizational layers removed from actual product usage).

**In B2B2C:** An additional layer emerges—your direct customer (a business) serves their own end customers (consumers), meaning you're building for the needs of a business customer who themselves needs to serve their own distinct end-user base, creating a genuinely three-layered stakeholder consideration.

**Why this distinction matters enormously for prioritization:** In B2C, "what do users want" and "what drives business success" are usually tightly correlated, since users directly control purchase/retention decisions. In B2B, you can build something users genuinely love that doesn't drive business success (if it doesn't matter to the actual buyer/decision-maker), or conversely, build something individual users find mildly annoying that's still commercially essential (because it serves the buyer's genuine needs—compliance features, admin controls, reporting capabilities that individual end-users rarely appreciate but that procurement decision-makers specifically require).

---

## **Sales Cycle Impact: How Deal Dynamics Reshape Product Priorities**

**B2C sales cycles** are typically short (often instant, self-serve purchase decisions) and happen at scale across enormous numbers of individual, relatively low-value transactions. Product decisions can be validated relatively quickly through direct user behavior data across large sample sizes.

**B2B sales cycles** can stretch for months or even years for larger enterprise deals, involving multiple stakeholders, extensive evaluation processes, and often heavily customized negotiation. This creates specific product management implications:

**Feature requests tied to specific, high-value deals carry disproportionate weight**, as we discussed extensively in Chapter 16, precisely because a single enterprise deal might represent revenue equivalent to thousands of individual consumer transactions.

**Product roadmap visibility becomes a genuine sales tool**, since prospective enterprise clients often want assurance about future product direction before committing to lengthy, expensive implementation processes—creating pressure to share more roadmap detail externally than B2C companies typically need to.

**RFP (Request for Proposal) processes**, common in enterprise B2B sales, often require product teams to respond to detailed, sometimes rigid feature/capability checklists that may not align well with your genuine product philosophy or prioritization logic, creating tension between "what we believe is the right product direction" and "what this specific RFP process requires us to demonstrate we have."

---

## **Pricing Complexity Across Contexts**

**B2C pricing** tends toward relative simplicity: fixed price points, straightforward subscription tiers, pricing that individual consumers can quickly evaluate and decide upon without extensive negotiation.

**B2B pricing** frequently involves genuine complexity: custom enterprise contracts, volume-based discounting, multi-year commitment structures, add-on modules, and often extensive negotiation between sales and the prospective client's procurement function. PMs in B2B contexts need genuine fluency in how pricing/packaging decisions interact with sales negotiation dynamics, not just simple, fixed consumer-facing pricing psychology.

**B2B2C pricing** adds yet another layer: you need pricing that works for your direct business customer's own business model, while that business customer separately determines how (or whether) to pass costs through to their own end consumers—creating a genuinely more complex value chain to understand and design pricing strategy around.

---

## **Success Metrics: Genuinely Different North Stars**

**B2C North Star Metrics** typically center on direct user engagement and behavior: daily/monthly active users, session frequency, direct conversion and retention metrics tied to individual user behavior.

**B2B North Star Metrics** often need to account for the user/buyer distinction discussed above: metrics like "number of active seats within an account," "feature adoption among admin/decision-maker users specifically" (not just total usage), and critically, **account-level health metrics** (is this specific enterprise account showing signs of genuine expansion or churn risk) that matter alongside or even above pure aggregate usage statistics.

**B2B2C metrics** need to capture success at multiple levels: is your direct business customer succeeding with their own business goals using your platform, AND are their end consumers genuinely being well-served—since failure at either level can ultimately threaten the relationship, even if the other level shows strong metrics.

---

## **Discovery and Research: Who Do You Actually Talk To?**

**B2C discovery** typically involves directly researching and interviewing actual end users, since they're simultaneously the user, customer, and buyer whose needs and behaviors you're trying to understand.

**B2B discovery** requires more deliberate stakeholder mapping: you likely need separate research tracks for actual daily users (understanding usability and workflow needs) AND economic buyers/decision-makers (understanding what drives their purchase/renewal decisions, which may focus on entirely different considerations like ROI justification, security/compliance requirements, or integration with existing enterprise systems).

**A common B2B research mistake:** Only talking to end users (who are often more accessible and numerous) while neglecting genuine research with actual economic buyers and decision-makers, resulting in a product that end users like but that doesn't adequately address the concerns that actually drive purchase and renewal decisions at the organizational level.

**B2B2C discovery** requires yet another layer: understanding your direct business customer's needs AND maintaining some visibility into their end consumers' experience, even though you may have limited or no direct access to research those end consumers yourself (since they're not your direct customer relationship).

---

## **Chapter Summary: The TL;DR**

The fundamental split between user, customer, and buyer—collapsed into a single person in B2C, but genuinely separated in B2B and further complicated in B2B2C—reshapes nearly every aspect of product management practice: prioritization logic, success metrics, discovery approach, and pricing strategy.

B2B sales cycle dynamics (longer, higher-stakes, more stakeholder-intensive) create specific pressures around feature requests tied to major deals and roadmap visibility as a sales enablement tool, requiring different judgment than B2C's shorter, higher-volume, more directly user-behavior-validated sales dynamics.

Success metrics must account for these structural differences—B2B needs account-level health and decision-maker-specific adoption metrics alongside pure usage statistics, while B2B2C requires monitoring success at multiple stakeholder layers simultaneously.

Avoid unconsciously importing instincts well-honed in one context into a fundamentally different one—particularly the common mistake of B2C-trained PMs over-indexing on aggregate end-user preference in B2B contexts where a small number of decision-makers hold disproportionate actual influence over business outcomes.

In the next chapter, we explore how product type—Platform vs SaaS vs Marketplace vs Hardware—creates yet another dimension of genuinely distinct PM challenges.

---

**Reflection Questions:**

1. In your current product context, are the roles of user, customer, and buyer collapsed into one person, or genuinely separated? How well does your current prioritization process account for this reality?
2. Think of a feature decision that made sense from a pure end-user perspective but might look different when considering economic buyer/decision-maker needs (or vice versa). How was that tension navigated?
3. If you've transitioned between B2B and B2C contexts (or are considering doing so), what specific instinct do you think would be hardest to unlearn or recalibrate?

**Action Item:**

Map out your current product's actual user/customer/buyer structure explicitly, even if it feels obvious. For each distinct role, write down: what do they actually need from the product, and how well does your current roadmap and prioritization process account for their specific, potentially quite different needs?

---
