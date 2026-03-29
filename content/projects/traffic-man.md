---
title: Traffic-MAN
description: Smart traffic Light
weight: 9995
extra:
  local_image: /images/projects/traffic-man/cover.jpg
taxonomies:
  tags:
    - django
    - machine-learning
---

Everyone must have stopped a lot at traffic lights for such unnecessary reasons
and wasted a lot of time.
This project aims to make a system to automate the process and sort the traffic
out efficiently, cutting short travel times.

Also ambulances, fire brigades etc are stopped at traffic lights due to the
traffic.
To make them pass, the whole flow of traffic is affected which sometimes results
in a traffic jam.
This system tries to work around this problem and regulate the flow of traffic.

Here's a short video giving us a brief about the project

<iframe  src="https://www.youtube.com/embed/hzjVh8wqf_E" title="Traffic-MAN (By team MAST)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Aim

The aim of this project is to:

1. To develop a traffic management system that measures how many vehicles are
   waiting at each crossing and divides time accordingly.
2. To detect if any special vehicle ex.
   ambulance, fire truck etc. is coming and clear the way for it.
3. To provide a better alternative for the ongoing conventional signal system

## Implementation

The project was divided into four parts according to the roles each part does:

1. Image Processing
2. Machine Learning
3. Traffic Program
4. User Interface

### Image Processing

Image processing program detects the vehicles in images taken at the
intersection.
After processing them with YoloV3, the number of vehicles along with their types
are stored in a database.
The database is used by the machine learning subsystem to learn and predict red
times for the traffic light.

### Machine Learning

Machine learning program processes the given database to allot best clearing
time for vehicles at the intersection.
It has a threshold algorithm to train the model while the program is working.
Linear regression is used to train light times.

Both Image Processing and Machine Learning subsystem act together to create a
Traffic Light.
These traffic lights are what constitute the final program.

### Traffic Program

The traffic program is the main part of the whole project.
It handles all the values provided by the Traffic Lights present at the
intersection to manage the traffic.

It gives a green light to the intersection which is the most crowded.
In order to ensure all traffic lights are covered equally, the program will make
sure that all other lights are made green before repeating it again.

It also handles the emergency vehicles.
After receiving a emergency call at one of the traffic lights, the program will
make that way green and others red until the emergency signal is turned off.

### User Interface

<figure class="image-1-container">
  <img class="image-1 " src="/images/projects/traffic-man/user-interface.jpg" alt="User Interface for the traffic light using Django"/>
  <figcaption class="image-1-caption">
    UI using Django
  </figcaption>
</figure>

In order to simulate a real traffic light, a simple UI using Django was made.
One can cycle images to change the number of cars present at the intersection.

Buttons were added to indicate emergency situations at any traffic light.

## Future Plans

Some of the improvements in the project could be:

1. Traffic Overflow Detector :
   The current system cannot handle if the number of vehicles is not calculated
   correctly.
   This happens if there an overflow - number of vehicles is so much that the
   camera cannot capture all of them.
   This system should detect an overflow at one of the intersections, it will
   clear that way first to minimise the amount of time the vehicles at the
   overflow lane waste by standing at the traffic light.
   This is an open ended problem.

## Acknowledgements

This project was made by Shubham Ojha (me), Mayur Ware, Akash Fokane and Tanmay
Hiremath as part of the Institute Technical Summer Program 2020 conducted by IIT
Bombay.
