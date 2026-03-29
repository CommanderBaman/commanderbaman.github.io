---
title: DC Power Supply
description: Get DC output from an AC source
weight: 10000
extra:
  local_image: /images/projects/dc-power-supply/cover-2.jpg
taxonomies:
  tags:
    - pcb
    - circuit
---

This project was done as part of the course EE113 at IITB.
It takes in AC Power and outputs DC voltages at +12V, -12V and 5V with respect
to a common ground.
It uses a 15-0-15 center tapped transformer to convert the higher voltages into
lower voltages that can be handled easily.

The input to the system is supply to our homes.
The circuit uses a full bridge rectifier along with a capacitor filter to
maintain a constant DC output.
There are four output terminals - one at ground, one at +12V, one at -12V and
last at +5V.
LEDs are used to check if the circuit is working or not.

The final circuit was implemented on a Perforated Circuit board (PCB).

<figure class="image-1-container">
  <img class="image-1 short-image" src="/images/projects/dc-power-supply/pcb.jpg" alt="PCB of DC power supply circuit"/>
  <figcaption class="image-1-caption">
    PCB version of the circuit
  </figcaption>
</figure>
