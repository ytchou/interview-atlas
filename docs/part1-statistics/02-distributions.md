---
status: draft
---

# 2. Probability Distributions

Every named distribution an interviewer asks about is a coin flip, a count, or a wait, pushed to a limit.

The interactive explorer below covers eleven distributions, their family relationships, animated limit bridges, a "which one?" decision tree, and a drill of classic interview problems.

<iframe class="interactive-frame" src="../interactive/distributions.html" style="height: 900px;" loading="lazy" title="Distribution Atlas"></iframe>

<a class="fullscreen-link" href="../interactive/distributions.html" target="_blank">
:material-open-in-new: Open full screen
</a>

---

## Quick reference

### Foundations

- **PMF** (Probability Mass Function): for discrete variables. Bar height *is* the probability. Bars sum to 1.
- **PDF** (Probability Density Function): for continuous variables. Height is density, not probability. Area under a stretch is the probability.
- **CDF** (Cumulative Distribution Function): \(F(x) = P(X \le x)\). Monotonically increasing from 0 to 1. Its slope is the PDF.

### Discrete distributions

| Distribution | Story | PMF | Mean | Variance |
|---|---|---|---|---|
| **Bernoulli** | One trial, success with prob \(p\) | \(P(X\!=\!1)=p\) | \(p\) | \(p(1\!-\!p)\) |
| **Binomial** | \(k\) successes in \(n\) trials | \(\binom{n}{k}p^k(1\!-\!p)^{n-k}\) | \(np\) | \(np(1\!-\!p)\) |
| **Geometric** | Trials until first success | \((1\!-\!p)^{k-1}p\) | \(\frac{1}{p}\) | \(\frac{1-p}{p^2}\) |
| **Neg. Binomial** | Failures before \(r\)-th success | \(\binom{k+r-1}{k}p^r(1\!-\!p)^k\) | \(\frac{r(1-p)}{p}\) | \(\frac{r(1-p)}{p^2}\) |
| **Hypergeometric** | Successes in \(n\) draws, no replacement | \(\frac{\binom{K}{x}\binom{N-K}{n-x}}{\binom{N}{n}}\) | \(\frac{nK}{N}\) | \(n\frac{K}{N}(1\!-\!\frac{K}{N})\frac{N-n}{N-1}\) |
| **Poisson** | Events in a window, rate \(\lambda\) | \(\frac{\lambda^k e^{-\lambda}}{k!}\) | \(\lambda\) | \(\lambda\) |

### Continuous distributions

| Distribution | Story | PDF | Mean | Variance |
|---|---|---|---|---|
| **Uniform** | Every value in \([a,b]\) equally likely | \(\frac{1}{b-a}\) | \(\frac{a+b}{2}\) | \(\frac{(b-a)^2}{12}\) |
| **Beta** | Distribution over a probability | \(\frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha,\beta)}\) | \(\frac{\alpha}{\alpha+\beta}\) | \(\frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}\) |
| **Exponential** | Wait until next event, rate \(\lambda\) | \(\lambda e^{-\lambda x}\) | \(\frac{1}{\lambda}\) | \(\frac{1}{\lambda^2}\) |
| **Gamma** | Wait until \(k\)-th event | \(\frac{\lambda^k x^{k-1}e^{-\lambda x}}{\Gamma(k)}\) | \(\frac{k}{\lambda}\) | \(\frac{k}{\lambda^2}\) |
| **Normal** | Sum of many small effects | \(\frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}\) | \(\mu\) | \(\sigma^2\) |

### Key bridges (approximation rules)

| From → To | When | Rule of thumb |
|---|---|---|
| Binomial → Poisson | \(n\) large, \(p\) small | \(n \ge 20\) and \(p \le 0.05\) |
| Binomial → Normal | \(n\) large | \(np \ge 10\) and \(n(1\!-\!p) \ge 10\) |
| Hypergeometric → Binomial | Population large | \(n/N < 0.05\) |
| Geometric → Exponential | Shrink the time step | Rare per-tick → continuous wait |
| Exponential → Gamma | Sum \(k\) waits | \(k = 1\) is Exponential |
| Uniform → Normal | Average many | CLT, \(n \ge 30\) folk threshold |

### Not on this page

The \(t\), \(\chi^2\), and \(F\) distributions describe **test statistics**, not data. They belong with [hypothesis testing](03-hypothesis-testing.md). Log-normal (log \(X\) is Normal) is right-skewed and positive — common for prices and durations.
