const Units = {
  Meters: 100,
  Centimeters: 1,
  Kilometers: 100000,
};

class InvisibleLogger {
  static log() {
    console.log('Greetings from the invisible logger');
  }
}

class LengthConverter {
  static Convert(value, fromUnit, toUnit) {
    InvisibleLogger.log();
    return (value * fromUnit) / toUnit;
  }
}

export { Units, LengthConverter };
