# bluepark

Created by Ronak Shah, Anthony Yang, Marcin Robert Kierbinski, Jacinth Gudetti, and Steven Gov.

## What is it?

Bluepark is an innovative new way that uses bluetooth technology to authenticate parking.

## Inspiration
Parking at UCSD has long been a struggle. Additionally, the labor costs involved in manually authenticating every single permit is incredibly high, and so we realized that there must be a solution. Throughout hard hack, our team had been experimenting with Bluetooth Low Energy and Mobile Connections and had determined that there was a way to leverage this connection in a strategic way. We decided to create Bluepark, a Bluetooth Based Authentication Method for Parking to solve UCSD's Parking Problems.

## What it does

After Users park in a spot, they use their phone to "claim" the parking spot. The actual parking spot is represented by a bluetooth module represented by a Raspberry Pi.

## How it's Made
[This repository](https://github.com/ronakdev/bluepark) holds the node.js code that is running on the Raspberry Pi, which is acting as the Bluetooth Peripheral. [Here](https://github.com/ronakdev/bluepark-ios) is where you can find the code that runs the iOS App that acts as the Bluetooth central.

## Notes
This project was made at HardHack 2018, where it won 2nd place. Unfortunately, due to the nature of hackathons, this project wasn't the best designed, and much of the code is cluttered.

## Challenges
- Connecting into the Raspberry Pi
- Using a 3rd party library I've never worked with before
- Learning Firebase (4/5 of the team had never used Firebase before)

## Accomplishments that I'm proud of
- Learning how to create Bluetooth peripherals with Node.js (It's actually fairly easy!!)
- Learning how CoreBluetooth works in iOS
