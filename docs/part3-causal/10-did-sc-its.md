---
status: draft
---

# 10. DiD, Synthetic Control & ITS

## Difference-in-Differences (DiD)

<!-- TODO: add image — DiD illustration -->

Compares changes in outcomes over time between a treatment group and a control group.

### Key Assumption: Parallel Trends

If no treatment had occurred, the difference between the treated and untreated group would have stayed the same post-treatment as it was pre-treatment.

- **To check**: plot pre-treatment trends — the metric movement should be parallel between groups
- If trends are not parallel, solve with **matching** or **covariate adjustment**

### The DiD Estimator

\[
\hat{\tau} = (\bar{Y}_{T,post} - \bar{Y}_{T,pre}) - (\bar{Y}_{C,post} - \bar{Y}_{C,pre})
\]

Equivalently, run a regression:

\[
Y = \beta_0 + \beta_1 \cdot \text{Treatment} + \beta_2 \cdot \text{Post} + \beta_3 \cdot (\text{Treatment} \times \text{Post}) + \epsilon
\]

\(\beta_3\) is the DiD estimate of the causal effect.

## Synthetic Control

**Intuition**: uses a weighted average of multiple cases from a "donor" pool to create an artificial control case. Weights are learned from the pre-intervention period.

<!-- TODO: add image — synthetic control illustration -->

**Key properties**:

- Weights are between 0 and 1, summing to 1 → avoids extrapolation
- The synthetic control case closely resembles the treated case pre-intervention
- Treatment effect = gap between treated unit and synthetic control post-intervention

**When to use**: single treated unit (e.g. one city, one country) with multiple potential control units.

## Interrupted Time Series (ITS)

**Intuition**: analysis of a single time-series before and after intervention. The outcome would not be altered if there were no intervention.

- Create "counterfactuals" as baseline → attribute altered trajectory to the intervention
- Must control for time-varying confounders (seasonal trends, concurrent events)

**Strengths**:

- Controls for long-term time trends
- Accounts for individual-level bias at population level
- Can evaluate both intended and unintended consequences
- Supports stratified analyses of subpopulations

**Limitations**:

- Minimum 8 periods before and 8 after intervention required
- Population-level evaluation — cannot make individual-level inferences
