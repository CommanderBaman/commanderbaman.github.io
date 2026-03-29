---
title: Emojify
description: Emotion Detector using CNNs
weight: 9997
extra:
  local_image: /images/projects/emojify/cover.jpg
taxonomies:
  tags:
    - machine-learning
    - python
---

With advancements in computer vision and deep learning, it is now possible to
detect human emotions from a training set of images.
The goal of this project is to classify human expressions into 7 different
classes such as angry, fear, happy, sad etc. and make emojis out of these
expressions.
In this project, human facial expressions are classified using deep learning
(CNN) and filter and map corresponding emojis or avatars using OpenCV.

You can find the code on
**[github](https://github.com/CommanderBaman/Emojify-Tensorflow)**

## Motivation

Facial emotion detection is an emerging field which is used in many applications
such as social robots, to find customer satisfaction, gaming, criminal
investigations etc. Non-verbal communication methods like facial emotion
expressions, eye movement and hand gestures are used in many applications of
human computer interaction.

This facial emotion recognition system mainly identifies seven basic facial
emotions such as anger, disgust, fear, happy, neutral, sad, and surprise.
Facial emotion recognition techniques are based on either appearance features or
geometric features.

Facial emotion detection is not an easy task because there is no perfect
distinction between emotions and there is a lot of complexity and variability.

## Objectives

The objectives of this project is mentioned as follows:

1. To implement a model using Convolutional Neural Network architecture and
   train the model on FER2013 dataset for emoji recognition from images.
2. To build a deep learning model to classify facial expressions from the images
3. Using OpenCV, map the corresponding emotion to an emoji or an avatar
4. The CNN model learns to attentively select and weigh important deep features,
   thereby being more effective to aggregate useful information

## Algorithm implemented

The images are trained and tested on the FER2013 dataset comprising of 7 classes
of human emotions namely angry, disgust, fear, happy, neutral, sad, surprise
with around 28K training images and 7K testing images.

The **FER2013** dataset (facial expression recognition) consists of 48x48 pixel
grayscale face images which are centered and occupy equal space for better
classification.

A Convolutional Neural Network is built that consists of 4 2D Conv layers, 2
flattening layers, Max pool, dropout, batch normalization etc.

Relu activation function is used in the 2D convolutional layers and hidden
layers and softmax activation in the final output layer

The implemented algorithm is:

1. Permutation Invariant
2. Computationally Efficient
3. Robust and general to variable sized sets

## User Interface

We have used **_OpenCV_** to develop the UI of our project.
The interface is pretty simple.

Directions on how to use the program is as follows:

1. Run the program (main.py).
   Wait for the program to open the camera’s video feed.
2. If no face is detected, the program will remain as it is.
3. If a face is detected, click ‘r’ to take a picture.
   The picture is then sent through model.
   The emotion is then displayed on screen.

<figure class="image-3-container">
  <div class="image-section">
    <img class="image-3" src="/images/projects/emojify/no-face.jpg" alt="Program when no face is detected">
    <img class="image-3" src="/images/projects/emojify/face.jpg" alt="Program when face is detected"/>
    <img class="image-3" src="/images/projects/emojify/detected.jpg" alt="Program after emotion is detected"/>
  </div>
  <figcaption class="image-3-caption">
    Program in action
  </figcaption>
</figure>

For detecting the faces, we have used a **_Haar Cascade_**.

Haar Cascade is one of the fastest object detection algorithms.
Boosting algorithms are used to produce a strong prediction out of a combination
of “weak” learners, which are then applied on various subsections of the input
image.
They are widely used in today’s facial recognition software.

## Results

With the help of Hyperparameter tuning, we set the learning rate = 0.0001 and
using categorical cross entropy as the loss function we trained our model on 50
epochs with Adam optimizer.

**We got a training accuracy of 82% and a test accuracy of 65%.**

## Acknowledgements

This project was made by Shubham Ojha (me), Saksham Agarwal and Rushikesh
Metkar.
