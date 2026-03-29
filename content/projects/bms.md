---
title: Battery Management System
description: Variable output according to state of charge of battery
weight: 9999
extra:
  local_image: /images/projects/bms/cover-1.jpg
taxonomies:
  tags:
    - pcb
    - circuit
---

Solar-powered street lights are being deployed across India.
With the increasing use of such street lights, we reduce our dependence on
conventional energy.
Unfortunately, most of them break down within a year or so.
The two key factors are poor battery management and load control.
Thus to extend the lifetime of the devices we need to have better battery
management.

## Aim

The design objective of the project is

- To control LED intensity (electronic circuit) based on the state-of charge
  (SoC) of the battery for full load, half-load and one-fourth load.
- Display the state-of-charge (SoC) and the remaining time available at full
  load, half load and one-fourth load.

## Implementation

We have implemented this circuit using basic electronic components to make it
cost-effective.
Each subsystem can be used as a separate circuit if required.
The system comprises of four subsystems:

1. Delay timer,
2. Opamp Quantiser (Comparator),
3. PWM generator,
4. and MOSFET subsystem.

<figure class="image-1-container">
  <img class="image-1" src="/images/projects/bms/block-diagram.jpeg" alt="Block Diagram of Battery Management System"/>
  <figcaption class="image-1-caption">
    Overall Block Diagram
  </figcaption>
</figure>

Arduino is used for displaying the State of Charge (SoC) of the battery.
The results indicate that this circuit is a successful and cost-effective way of
solving the problem and making the street lights more durable.

### Delay Timer

<figure class="image-1-container">
  <img class="image-1 short-image" src="/images/projects/bms/delay-timer-subsystem.jpg" alt="PCB for delay timer subsystem"/>
  <figcaption class="image-1-caption">
    Delay timer subsystem
  </figcaption>
</figure>

The job of Delay Timer subsystem is to turn off the circuit for 5 minutes and
then turn it back on.
This was done for proper measurement of state of charge of the battery.
This subsystem was implemented using monostable multivibrator using 555 timer
IC, and a simple RC circuit.

### Opamp quantiser

<figure class="image-1-container">
  <img class="image-1 short-image" src="/images/projects/bms/comparator-subsystem.jpg" alt="PCB for opamp quantiser subsystem"/>
  <figcaption class="image-1-caption">
    Comparator subsystem
  </figcaption>
</figure>

The comparator quantizes the incoming battery voltage level to three voltage
levels which then vary the duty cycle of PWM circuit.
To discretize the voltage levels we have implemented 4 comparators using LM 324
IC.
The fact that opamp is comparator is used to develop this circuit.

### PWM Generator

<figure class="image-1-container">
  <img class="image-1 short-image" src="/images/projects/bms/pwm-mosfet-subsystem.jpg" alt="PCB for PWM and MOSFET subsystem"/>
  <figcaption class="image-1-caption">
    PWM with MOSFET subsystem
  </figcaption>
</figure>

According to the input voltage, the PWM generator outputs a PWM signal that is
used to control the gate pin of MOSFET subsystem.
The generated signal is the one that directly controls the output of the full
system.

### MOSFET subsystem

The output of the PWM circuit is applied at the gate of a power MOSFET.
As the duty cycle of PWM is changed, the mean voltage appearing at the gate
terminal changes and thus we change the current flowing through the MOSFET and
by varying the current the intensity of the LED (output system) changes.

## Results

In order to quickly test the circuit, a power supply was used instead of the
battery.
Our assumption was that the battery always remained between 11V (0%) and 12.6V
(100%).
All of the subsystems were implemented on a PCB and were working as expected.

The results at voltages 11.3V (output at 25%), 11.6V (output at 50%) and 12.1V
(output at 100%) are as follows.

<figure class="image-3-container">
  <div class="image-section">
    <img class="image-3" src="/images/projects/bms/pcb-25.jpeg" alt="Output at 25%">
    <img class="image-3" src="/images/projects/bms/pcb-50.jpeg" alt="Output at 50%"/>
    <img class="image-3" src="/images/projects/bms/pcb-100.jpeg" alt="Output at 100%"/>
  </div>
  <figcaption class="image-3-caption">
    Output of circuit at various battery levels
  </figcaption>
</figure>

## Conclusion

The presented circuit solves the above mentioned problem.
It achieves all the objectives that were mentioned and is cost-effective.

## Acknowledgements

This project was made by Shubham Ojha (me), Apoorva Hotkar and Aditya Anavkar.
I would like to express my gratitude to Prof. Joseph John for providing support
and guidance.

## References

1. [Opamp as a comparator](https://www.electronics-tutorials.ws/opamp/op-amp-comparator.html)
2. [Pulse-width modulation - Wikipedia](https://en.wikipedia.org/wiki/Pulse-width_modulation)
3. [Delay Timer using 555 Timer IC](https://elonics.org/adjustable-auto-on-off-delay-timer-circuit-using-555/)
