---
status: draft
---

# 17. Neural Networks

## Basic Neural Network

- **Architecture**: input layer → hidden layers → output layer
- **Activation functions**: ReLU (hidden layers, default), sigmoid (binary output), softmax (multi-class), tanh
- **Forward pass**: compute output from input through weights and activations
- **Backpropagation**: compute gradients of loss w.r.t. each weight using the chain rule
- **Universal approximation theorem**: a single hidden layer with enough neurons can approximate any continuous function

## Key Techniques

### Optimization

- **SGD with Momentum**: accumulates past gradients to smooth updates
- **Adam**: adaptive learning rates per parameter — usually the default choice
- **Learning rate scheduling**: step decay, cosine annealing, warmup

### Regularization

- **Dropout**: randomly zero out neurons during training (typically p = 0.5)
- **Batch Normalization**: normalize activations within each mini-batch → faster training, some regularization
- **Early stopping**: monitor validation loss, stop when it starts increasing
- **Weight decay**: L2 regularization on weights

### Common Problems

- **Vanishing gradients**: deep networks with sigmoid/tanh → use ReLU, residual connections, careful initialization
- **Exploding gradients**: gradient clipping
- **Dead neurons**: ReLU units that never activate → use Leaky ReLU or ELU

## Autoencoders

- **Architecture**: encoder → bottleneck → decoder
- **Goal**: learn compressed representation (bottleneck) by reconstructing input
- **Variational Autoencoder (VAE)**: learns a probabilistic latent space → can generate new data

## Convolutional Neural Network (CNN)

- **Key layers**: convolution (local feature detection), pooling (downsampling), fully connected
- **Convolution**: slide a filter over input, compute dot products → feature maps
- **Pooling**: max pooling or average pooling → reduces spatial dimensions
- **Applications**: image classification, object detection, segmentation

## Recurrent Neural Network (RNN)

- **Key idea**: hidden state carries information across time steps → sequence modeling
- **Vanilla RNN**: suffers from vanishing gradients over long sequences
- **LSTM**: gates (forget, input, output) control information flow → handles long-range dependencies
- **GRU**: simplified LSTM with fewer gates — similar performance, fewer parameters
- **Applications**: time series, text generation, machine translation
- **Modern replacement**: Transformers (self-attention) have largely replaced RNNs
