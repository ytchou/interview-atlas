---
status: draft
---

# 18. NLP

## Text Processing

- **Tokenization**: split text into words or subwords
- **Stemming**: reduce words to root form (crude, rule-based — e.g. "running" → "run")
- **Lemmatization**: reduce to dictionary form using morphological analysis (more accurate than stemming)
- **Stop word removal**: remove common words (the, is, at) that carry little meaning
- **TF-IDF**: Term Frequency × Inverse Document Frequency — weights words by importance within and across documents

## Word Embeddings

Map words and phrases to numerical vectors.

- **Word2Vec**: skip-gram (predict context from word) or CBOW (predict word from context)
    - Similar words have similar vectors
    - Captures analogies: king - man + woman ≈ queen
- **GloVe**: global co-occurrence statistics → embeddings
- **FastText**: extends Word2Vec with subword (character n-gram) information → handles rare words

## Sentiment Analysis

- **Rule-based**: lexicon-based scoring (VADER, TextBlob)
- **ML-based**: train classifier (Naive Bayes, SVM, neural) on labeled sentiment data
- **Deep learning**: fine-tune pre-trained language models (BERT, etc.)

## Topic Modeling

- **Latent Dirichlet Allocation (LDA)**: generative model that assumes each document is a mixture of topics, each topic a distribution over words
- **Non-Negative Matrix Factorization (NMF)**: factorize document-term matrix into topic and term matrices
- **Choosing K**: coherence score, human evaluation

## Modern NLP (Transformers)

- **Self-attention**: each token attends to all other tokens → captures long-range dependencies
- **BERT**: bidirectional encoder — pre-trained on masked language model + next sentence prediction. Fine-tune for classification, NER, QA.
- **GPT family**: autoregressive decoder — pre-trained on next token prediction. Few-shot and zero-shot capabilities.
