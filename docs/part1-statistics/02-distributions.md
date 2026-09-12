---
status: draft
---

# 2. Probability Distributions

<link rel="stylesheet" href="../../stylesheets/distributions.css">

Every named distribution an interviewer asks about is a coin flip, a count, or a wait, pushed to a limit. This chapter covers eleven of them as one family: read the map, tap a node, drag the sliders, then drill.

## Basics

<div class="dist-atlas">
<div class="primer">
<div class="p"><b>PMF</b><svg viewBox="0 0 200 48" id="pmfGlyph"></svg><span>Discrete. Bar height <i>is</i> the probability of that exact value. Bars sum to 1.</span></div>
<div class="p"><b>PDF</b><svg viewBox="0 0 200 48" id="pdfGlyph"></svg><span>Continuous. Height is density, not probability. Area under a stretch is the probability. Total area is 1.</span></div>
<div class="p"><b>CDF</b><svg viewBox="0 0 200 48" id="cdfGlyph"></svg><span><span class="tex" data-tex="F(x)=P(X\le x)">F(x) = P(X ≤ x)</span>. Runs from 0 to 1, never decreases. Its slope is the PDF, so a steep CDF means a dense region.</span></div>
</div>
</div>

## Map

<div class="dist-atlas">
<div class="key"><span><i style="background:var(--disc)"></i>discrete · counts</span><span><i style="background:var(--cont)"></i>continuous · measurements</span><span>arrows = how one becomes another</span></div>
<div class="panel"><svg class="map" id="mapSvg" viewBox="0 0 1050 470" role="img" aria-label="Family map of probability distributions"></svg></div>
</div>

## Which one?

<div class="dist-atlas">
<p class="hint">The question an interviewer is really asking when they describe a scenario. Follow the branch, tap the leaf.</p>
<div class="panel tree">
<div>
<div class="root"><i style="background:var(--disc)"></i>I am counting something</div>
<ul>
<li><span class="q">Fixed number of trials, counting successes</span>
<ul>
<li>one trial <button class="leaf disc" data-id="bern">Bernoulli</button></li>
<li>with replacement, constant p <button class="leaf disc" data-id="binom">Binomial</button></li>
<li>without replacement, small pool <button class="leaf disc" data-id="hyper">Hypergeometric</button></li>
</ul></li>
<li><span class="q">Counting trials until success</span>
<ul>
<li>until the first <button class="leaf disc" data-id="geom">Geometric</button></li>
<li>until the r-th <button class="leaf disc" data-id="negbin">Negative Binomial</button></li>
</ul></li>
<li><span class="q">Counting events in a window of time or space</span>
<ul>
<li>variance ≈ mean <button class="leaf disc" data-id="pois">Poisson</button></li>
<li>variance ≫ mean <button class="leaf disc" data-id="negbin">Negative Binomial</button></li>
</ul></li>
</ul>
</div>
<div>
<div class="root"><i style="background:var(--cont)"></i>I am measuring something</div>
<ul>
<li><span class="q">Bounded on both sides</span>
<ul>
<li>every value equally likely <button class="leaf cont" data-id="unif">Uniform</button></li>
<li>it is a probability or proportion <button class="leaf cont" data-id="beta">Beta</button></li>
</ul></li>
<li><span class="q">A positive wait or amount</span>
<ul>
<li>until the next event <button class="leaf cont" data-id="expo">Exponential</button></li>
<li>until the k-th event, or skewed positive <button class="leaf cont" data-id="gamma">Gamma</button></li>
</ul></li>
<li><span class="q">A sum, an average, or noise</span>
<ul>
<li>many small independent effects <button class="leaf cont" data-id="norm">Normal</button></li>
</ul></li>
</ul>
</div>
</div>
</div>

## Explore

<div class="dist-atlas">
<p class="hint">Drag the sliders. The shaded band is one standard deviation each side of the mean. Switch to CDF to see the same distribution as P(X ≤ x). Draw samples to watch the empirical shape converge on the exact one.</p>
<div class="panel explorer">
<div>
<div class="tabs" id="tabs"></div>
<div class="chart-title"><span class="name" id="exName"></span><span class="seg" id="viewSeg"><button data-v="pdf" class="on">Density</button><button data-v="cdf">CDF</button></span></div>
<div class="chartwrap"><svg id="exSvg" viewBox="0 0 640 300"></svg><div class="tip" id="tip"></div></div>
<p class="story" id="exStory"></p>
</div>
<div class="ctrl">
<div id="sliders"></div>
<div class="stats">
<div><div class="k">mean</div><div class="v" id="stMean"></div></div>
<div><div class="k">std dev</div><div class="v" id="stSd"></div></div>
<div><div class="k">variance</div><div class="v" id="stVar"></div></div>
<div><div class="k">samples</div><div class="v" id="stN">0</div></div>
</div>
<div class="actions">
<button class="btn primary" id="draw1">Draw 1</button>
<button class="btn" id="draw50">Draw 50</button>
<button class="btn" id="draw500">Draw 500</button>
<button class="btn" id="clear">Clear</button>
</div>
<div class="readout" id="readout">No samples yet.</div>
</div>
<div class="quick" id="quick"></div>
</div>
</div>

## Bridges

<div class="dist-atlas">
<p class="hint">The limits interviewers love. Each one says "under these conditions, you may swap this distribution for that one." Press play, or scrub, and read the rule of thumb underneath.</p>
<div class="panel bridges">
<div>
<svg id="brSvg" viewBox="0 0 640 300"></svg>
<div class="scrub"><button class="btn" id="brPlay">Play</button><input type="range" id="brT" min="0" max="1000" value="0" aria-label="scrub"></div>
<p class="bcap" id="brCap"></p>
</div>
<div class="blist" id="blist"></div>
<div class="bexp" id="bexp"></div>
</div>
</div>

<script src="../../javascripts/distributions.js"></script>

## Reference

The formulas and key numbers on one screen.

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

### Approximation rules

| From → To | When | Rule of thumb |
|---|---|---|
| Binomial → Poisson | \(n\) large, \(p\) small | \(n \ge 20\) and \(p \le 0.05\) |
| Binomial → Normal | \(n\) large | \(np \ge 10\) and \(n(1\!-\!p) \ge 10\) |
| Hypergeometric → Binomial | Population large | \(n/N < 0.05\) |
| Geometric → Exponential | Shrink the time step | Rare per-tick event → continuous wait |
| Exponential → Gamma | Sum \(k\) waits | \(k = 1\) is Exponential |
| Anything → Normal | Average many | CLT; \(n \ge 30\) is the folk threshold |

!!! note "Not on this page"
    The \(t\), \(\chi^2\), and \(F\) distributions describe **test statistics**, not data. They live in [Hypothesis Testing](03-hypothesis-testing.md). Log-normal (log \(X\) is Normal) is right-skewed and positive, common for prices and durations.

## Drill

Eight problems that come up again and again. Answer out loud before opening.

??? question "Probability of at least one six in four rolls?"
    Never add. Take the complement: \(1 - (5/6)^4 \approx 0.518\). "At least one" almost always means \(1 - P(\text{none})\).

??? question "Expected number of coin flips to see the first head?"
    Geometric with \(p = 1/2\), mean \(1/p = 2\). Follow-up: to see two heads in a row it is **6**, by first-step analysis. Let \(E\) be the expected flips. A tail resets you (cost 1, back to \(E\)); a head followed by a tail resets you (cost 2, back to \(E\)); a head followed by a head finishes (cost 2). So \(E = \tfrac12(1+E) + \tfrac14(2+E) + \tfrac14(2)\), which solves to \(E = 6\).

??? question "How many people in a room before two share a birthday with probability ½?"
    \(P(\text{all different}) = \frac{365}{365}\cdot\frac{364}{365}\cdots\frac{365-n+1}{365}\). It drops below 0.5 at \(n = 23\). Interviewers want the complement setup, not the number.

??? question "Given only Uniform(0,1) draws, generate a Normal."
    Box–Muller: with \(U_1, U_2\) Uniform, \(Z = \sqrt{-2\ln U_1}\cos(2\pi U_2)\) is standard Normal. Alternatives: inverse-CDF sampling \(Z = \Phi^{-1}(U)\), or average 12 Uniforms and subtract 6 as a crude approximation.

??? question "A site averages 100 sign-ups a day. Chance of none in the next hour?"
    Scale the rate: \(\lambda = 100/24 \approx 4.17\) per hour. \(P(0) = e^{-4.17} \approx 0.015\). Scaling \(\lambda\) with the window is the whole trick.

??? question "Make a fair coin out of a biased one."
    Flip twice. HT means heads, TH means tails, HH or TT means flip again. Both accepted outcomes have probability \(p(1-p)\), so they are equally likely. The number of rounds is Geometric.

??? question "Distribution of the sum of two dice? P(7)?"
    Triangular from 2 to 12, peaked at 7. \(P(7) = 6/36 = 1/6\). Sums of independent variables convolve, which is why the CLT staircase starts as a triangle.

??? question "Two variants: A got 40/1000, B got 55/1000. Is B better? Two ways."
    Frequentist: two-proportion z-test, pooled \(p = 0.0475\), \(z \approx 1.57\), p-value \(\approx 0.12\), not significant at 5%. Bayesian: sample \(p_A \sim \text{Beta}(41, 961)\), \(p_B \sim \text{Beta}(56, 946)\); \(P(B > A) \approx 0.94\). Same data, two honest framings. Know both.
