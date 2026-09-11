# Interview Atlas — book scaffold plan

Status: DRAFT, awaiting Patrick's go. Written 2026-09-11.

## Goal

Turn the Distribution Atlas artifact into chapter one of a public, interactive interview-prep book, published on GitHub Pages, with every section of the Notion cheatsheet present as a chapter and a visible done / not-done status so the two of us can work through it one chapter at a time.

## Decisions already made

| Decision | Choice | Why |
|---|---|---|
| Book shell | MkDocs Material | Markdown chapters, fast builds, search, dark mode, MathJax, and raw HTML files pass through untouched |
| First release | Full skeleton from the Notion outline | Patrick wants to see the whole shape and tick chapters off |
| Repo | New public repo `ytchou/interview-atlas` | Deploys to `https://ytchou.github.io/interview-atlas/` |
| Source of truth | The repo. Notion becomes the backlog | Two copies drift within a month |
| Interactive pages | Standalone HTML in `docs/interactive/`, embedded in the chapter page with a full-screen link | Same file previews as a claude.ai artifact and ships to the site |
| Status tracking | `status:` front matter per chapter (badge in the sidebar) plus a progress table on the landing page | One mechanism, no plugin beyond Material's built-ins |
| Excluded from the book | Behavior Questions, Offer Negotiation, PEI & TEI | Personal, not community material |

## Chapter map (merged from the Notion toggles)

Notion has 8 top-level sections and ~40 toggles. Merged to 22 chapters in 5 parts. Status legend: `done` = reviewed by Patrick, `draft` = ported text not yet reviewed, `todo` = stub only.

| # | Chapter | Notion source | Interactive idea | Initial status |
|---|---|---|---|---|
| **Part I — Statistics** | | | | |
| 1 | Probability foundations | Common Terms | Bayes / conditional probability visual | draft |
| 2 | Probability distributions | Probability Distribution | **Distribution Atlas (built)** | draft |
| 3 | Hypothesis testing | Summary, normality tests, t, z, F/ANOVA, chi-square | Type I / II error and power slider | draft |
| 4 | Sampling and resampling | Sampling Method, Parametric vs non-parametric | Bootstrap animation | draft |
| 5 | Markov chains | Markov Chain | State-transition walker | draft |
| **Part II — Experimentation** | | | | |
| 6 | Running an A/B test | Processes (A/A, SRM, sample size, days, metrics, invariants, network effects), Preparation | Sample-size calculator | draft |
| 7 | A/B testing pitfalls | Issues in A/B Testing | Peeking simulation | draft |
| 8 | Bayesian vs frequentist | Bayesian vs Frequentist | Beta posterior updater | draft |
| **Part III — Causal inference** | | | | |
| 9 | Matching and propensity scores | Propensity Score Matching (pending) | Covariate balance plot | todo |
| 10 | Difference-in-differences, synthetic control, ITS | DiD, Synthetic Control, Interrupted Time Series | Parallel-trends animation | draft |
| 11 | Regression discontinuity | RDD | Bandwidth slider | draft |
| 12 | Meta-learners and double ML | Meta Learners, Double ML (pending) | S/T/X learner comparison | draft |
| **Part IV — Machine learning** | | | | |
| 13 | Loss functions and metrics | Loss Functions and Evaluation Metrics | ROC / threshold slider | draft |
| 14 | Core concepts | Regularization, gradient descent, MLE vs MAP, EM | L1 vs L2 contour animation | draft |
| 15 | Ensembles and boosting | Bagging, boosting, stacking, XGBoost vs LightGBM vs CatBoost, case-control sampling | Bias-variance animation | draft |
| 16 | Clustering | K-means, hierarchical, GMM, DBSCAN | K-means step-through | draft |
| 17 | Neural networks | Basic NN, techniques, autoencoders, CNN, RNN | Forward-pass visual | draft |
| 18 | NLP | Processing, embeddings, sentiment, topic modeling | Embedding neighborhood | draft |
| **Part V — Coding and systems** | | | | |
| 19 | Data structures and algorithms | DS&A, complexity cheatsheet, sorts | Sort animation | draft |
| 20 | SQL | SQL Notes | Join visualizer | draft |
| 21 | Toolbox: regex, git, bitwise, math | Regex, Git, Bitwise, Math Notes | none | draft |
| 22 | ML system design | ML System Design | none | draft |
| — | Drill (per chapter) | Problem Set for Quick Review | folded into each chapter's Drill section | — |

"Section to update" in Notion is a backlog, not a chapter. Its items go into `docs/plans/backlog.md`.

## Repo layout

```
interview-atlas/
  mkdocs.yml
  pyproject.toml            # uv-managed: mkdocs-material only
  .github/workflows/deploy.yml
  docs/
    index.md                # landing page + progress table
    stylesheets/extra.css   # iframe full-bleed, status badges
    interactive/
      distributions.html    # the artifact, full HTML document
    part1-statistics/
      01-probability-foundations.md
      02-distributions.md   # embeds ../interactive/distributions.html
      ...
    part2-experimentation/ ...
    part3-causal/ ...
    part4-ml/ ...
    part5-coding/ ...
    plans/                  # this file, backlog.md (excluded from nav)
  scripts/
    notion_port.py          # one-shot: Notion dump -> chapter markdown stubs
    artifact_preview.sh     # strips the html skeleton for claude.ai artifact preview
```

## Steps

1. **Scaffold** — create `~/project/interview-atlas`, `uv init`, add mkdocs-material, write `mkdocs.yml` (Material theme, navigation.sections, search, MathJax via `arithmatex`, custom statuses `done / draft / todo`), `docs/index.md` with the progress table, `extra.css`.
2. **Chapter one** — copy the artifact into `docs/interactive/distributions.html` as a full HTML document; write `02-distributions.md` with the embed and a full-screen link; confirm MathJax loads inside the iframe.
3. **Port the outline** — `scripts/notion_port.py` reads the Notion export (re-fetch via MCP at run time, since image URLs expire in 5 minutes), maps toggles to the 22 chapters above, writes markdown stubs with front matter `status: draft|todo`, converts `$` math to arithmatex, downloads images into `docs/assets/`. Manual pass afterwards to fix anything the script mangled.
4. **Deploy** — `gh repo create ytchou/interview-atlas --public`, GitHub Actions workflow that runs `mkdocs build --strict` and publishes to Pages on push to `main`.
5. **Verify** (all must pass before calling this done):
   - `uv run mkdocs build --strict` exits 0 with no warnings.
   - Local `mkdocs serve` screenshot of landing page, chapter 2 with the embedded explorer, and one ported text chapter, in light and dark.
   - Distribution explorer inside the iframe: sliders move, MathJax renders, Draw 50 animates.
   - Ported content check: count of `$$` blocks and images in the Notion dump equals the count in the generated markdown.
   - Actions run green; `https://ytchou.github.io/interview-atlas/` returns 200 and shows the landing page.

## Working rhythm after the scaffold

One chapter per session: Patrick reviews the ported draft, we design the interactive piece as a claude.ai artifact (same loop as the Distribution Atlas), copy it into `docs/interactive/`, flip `status: done`. The progress table on the landing page is the only status surface.

## Pre-mortem

- **Assumption that would sink it:** that an iframe is a good enough home for interactive chapters. If the frame feels cramped, the fallback is a Material "blank" page template where the chapter *is* the HTML file. Cheap to switch, decided after seeing chapter 2 in the real theme.
- **Hardest failure to detect:** the Notion port silently dropping formulas or images. Guarded by the count check in step 5.
- **Known cost:** Notion image URLs are signed and expire; the port must download them in the same run that fetches the page.

## Out of scope for this plan

Custom domain, analytics, comments, PDF export, any chapter content beyond porting what Notion already has.
