# bluepark

Created by Ronak Shah, Anthony Yang, Marcin Robert Kierbinski, Jacinth Gudetti, and Steven Gov.

## What is it?

Bluepark is an innovative new way that uses bluetooth technology to authenticate parking.

## How does it work?

After Users park in a spot, they use their phone to "claim" the parking spot. The actual parking spot is represented by a bluetooth module represented by a Raspberry Pi.

This repository holds the node.js code that is running on the Raspberry Pi, which is acting as the Bluetooth Peripheral. [Here]() is where you can find the code that runs the iOS App that acts as the Bluetooth central.