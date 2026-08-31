## **Why This Chapter Is Different**

Every previous chapter built conceptual understanding. This chapter exists purely for practical utility—actual templates you can copy, adapt, and use immediately. Consider this your reference appendix disguised as a chapter, designed to be revisited repeatedly rather than read once and forgotten.

A caution before diving in: **templates are starting points, not rigid formulas.** The genuine thinking behind each template (covered in earlier chapters) matters more than mechanical completion of the format itself. A perfectly-formatted PRD built on lazy thinking is still a bad PRD.

---

## **Template 1: The PRD (Product Requirements Document)**

```
PRD: [Feature/Initiative Name]
Author: [Name] | Date: [Date] | Status: [Draft/Review/Approved]

1. PROBLEM STATEMENT
What specific problem are we solving, for whom?
[2-3 sentences, no solution language]

2. SUCCESS METRICS
How will we know this worked?
- Primary metric: [specific, measurable]
- Secondary metrics: [specific, measurable]
- Guardrail metrics: [what shouldn't get worse]

3. USER STORIES
As a [user type], I want to [action], so that [outcome].
[Repeat for each core scenario]

4. REQUIREMENTS
Must-have:
- [ ] Requirement 1
- [ ] Requirement 2
Nice-to-have (if time permits):
- [ ] Requirement 3

5. EXPLICITLY OUT OF SCOPE
- [What we are deliberately NOT building, and why]

6. OPEN QUESTIONS
- [Genuinely unresolved items, with owner and target resolution date]

7. DESIGN & TECHNICAL REFERENCES
[Links, not duplicated content]

8. ROLLOUT PLAN
[Phased? Full launch? Feature-flagged? Rollback criteria?]
```

---

## **Template 2: The One-Pager (For Strategic Proposals)**

```
ONE-PAGER: [Proposal Title]

THE ASK (1-2 sentences)
[What decision or resource are you requesting?]

CONTEXT (2-3 sentences)
[Why does this matter now?]

DIAGNOSIS
[What's the core problem/opportunity, specifically?]

PROPOSED APPROACH
[Your recommendation, stated clearly]

WHY THIS APPROACH (not alternatives)
[Brief reasoning, 2-3 bullets]

EXPECTED IMPACT
[Quantified where possible]

RISKS & MITIGATIONS
[Honest acknowledgment of what could go wrong]

RESOURCES REQUIRED
[Team, time, budget]

DECISION NEEDED BY
[Specific date, and what happens if delayed]
```

---

## **Template 3: Roadmap (Now-Next-Later Format)**

```
ROADMAP: [Product Area] | Last Updated: [Date]

NOW (In Progress, High Confidence)
Theme: [Theme Name]
- Initiative 1 [Target: specific date]
- Initiative 2 [Target: specific date]

NEXT (Planned, Medium Confidence)
Theme: [Theme Name]
- Initiative 3 [Target: rough quarter]
- Initiative 4 [Target: rough quarter]

LATER (Directionally Important, Low Confidence on Timing)
Theme: [Theme Name]
- Initiative 5 [No committed timeline]
- Initiative 6 [No committed timeline]

EXPLICITLY NOT PLANNED
[What we've deliberately deprioritized, and why—prevents repeated re-litigation]
```

---

## **Template 4: User Interview Guide**

```
INTERVIEW GUIDE: [Research Topic]
Riskiest assumption being tested: [State explicitly]

WARM-UP (5 min)
- Tell me about your role/context
- Walk me through a typical day/week regarding [relevant area]

BEHAVIOR-FOCUSED QUESTIONS (15-20 min)
- Tell me about the last time you [relevant behavior]
- What triggered that? What did you do first?
- What was frustrating or difficult about that experience?
- What have you tried to solve this? Why didn't that work?

[If testing a solution, introduce AFTER behavior questions]
SOLUTION FEEDBACK (10 min, if applicable)
- [Show prototype/concept]
- Walk me through how you'd use this
- What would need to be true for you to switch from your current approach?

WRAP-UP (5 min)
- Anything I didn't ask that I should have?
- Who else should I talk to about this?

POST-INTERVIEW SYNTHESIS PROMPT
- What surprised me?
- What confirmed my hypothesis?
- What contradicted it?
```

---

## **Template 5: Prioritization Scorecard (RICE-based)**

```
PRIORITIZATION: [Quarter/Cycle]

| Initiative | Reach | Impact | Confidence | Effort | RICE Score | Notes |
|---|---|---|---|---|---|---|
| [Item 1] | [#] | [1-3] | [%] | [person-weeks] | [calc] | [context] |
| [Item 2] | [#] | [1-3] | [%] | [person-weeks] | [calc] | [context] |

SCORING GUIDE:
Reach: # of users affected per time period
Impact: 3=massive, 2=high, 1=medium, 0.5=low, 0.25=minimal
Confidence: 100%=high, 80%=medium, 50%=low
Effort: Person-weeks (be honest, not optimistic)

REMEMBER: This score is a STARTING POINT for discussion,
not a final, unquestionable verdict. Document any override
reasoning explicitly below.

OVERRIDE REASONING (if final priority differs from pure score):
[Explain why, e.g., "Prioritized despite lower score due to
strategic HiPPO request tied to $2M renewal—see Chapter 6"]
```

---

## **Template 6: Post-Mortem Document**

```
POST-MORTEM: [Initiative Name]
Date: [Date] | Facilitator: [Name]

WHAT WAS THE GOAL?
[Original intended outcome]

WHAT ACTUALLY HAPPENED?
[Factual account, no blame language]

WHY? (Separate process from outcome)
Process quality: [Was reasoning/approach sound at the time?]
Outcome factors: [What was controllable vs. genuinely unpredictable?]

SPECIFIC, ACTIONABLE LESSONS
1. [Lesson] — Owner: [Name] — Action: [Specific change] — By: [Date]
2. [Lesson] — Owner: [Name] — Action: [Specific change] — By: [Date]

BROADER PATTERN CHECK
Is this lesson narrow (prevents only this exact mistake) or
broad (addresses underlying pattern)? [Reflect explicitly]

FOLLOW-UP REVIEW DATE
[Schedule a specific date to check whether action items were
actually implemented]
```

---

## **Template 7: Stakeholder Communication (Status Update)**

```
SUBJECT: [Project Name] Update - [Date]

BOTTOM LINE UP FRONT:
[One sentence: on track / at risk / blocked, and the key ask if any]

PROGRESS THIS PERIOD:
- [Specific accomplishment]
- [Specific accomplishment]

RISKS/BLOCKERS:
- [Specific issue] — [What's being done about it]

NEXT PERIOD:
- [What's coming]

NEED FROM YOU:
- [Specific ask, if any, with deadline]
```

---

## **Template 8: Strategy Document (Rumelt Kernel Format)**

```
STRATEGY: [Product Area] | [Time Horizon]

DIAGNOSIS
[What's the core challenge/opportunity? Be specific, not generic]

GUIDING POLICY
[Our overall approach. What are we explicitly choosing to do,
and NOT do?]

SUCCESS METRICS
[How we'll know this is working. What would make us pivot?]

KEY RISKS & ASSUMPTIONS
[What has to be true? What could invalidate this?]

COHERENT ACTIONS
[Initiatives that execute this strategy—feeds into roadmap]

Keep this under 2 pages. If it doesn't fit, it's not focused enough.
```

---

## **A Note on Using Templates Well**

**Adapt, don't worship.** Every template here should be modified to fit your organization's specific context, culture, and communication norms. Rigid adherence to a template format at the expense of genuine clarity defeats the purpose.

**The thinking matters more than the format.** A beautifully formatted PRD with a vague, unvalidated problem statement is still a bad PRD. These templates provide structure for good thinking—they don't substitute for it.

**Revisit and refine.** As you use these templates repeatedly, you'll likely discover specific adaptations that better serve your particular context. Treat templates as living documents worth periodically revisiting, not fixed, permanent formats.

---

## **Chapter Summary: The TL;DR**

This chapter provided practical, immediately usable templates covering the core PM deliverables discussed conceptually throughout this book: PRDs, strategic one-pagers, roadmaps, interview guides, prioritization scorecards, post-mortems, stakeholder updates, and strategy documents.

These templates serve as starting scaffolding for genuine, rigorous thinking—not substitutes for it. Adapt them to your specific context, and remember that the underlying conceptual understanding from previous chapters determines whether a well-formatted document actually reflects good product thinking, or simply looks organized while containing shallow or unvalidated reasoning underneath.

In the next chapter, we shift to PM Interview Preparation—translating this book's accumulated frameworks into genuine interview readiness, whether you're preparing to hire PMs or preparing to become one.

---

**Action Item:**

Pick one template from this chapter that addresses a document type you regularly create. Compare it against your current default approach, and identify one specific adaptation that would genuinely improve your practice going forward—not just formatting, but the underlying rigor the template is designed to encourage.

---
