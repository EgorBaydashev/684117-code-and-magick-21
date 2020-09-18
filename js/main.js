var fireballSize = 22;

var getFireballSpeed = function (isWindFromLeft) {
  if(isWindFromLeft) {
    return 2;
  }
  return 5;
};

var wizardSpeed = 3;

var wizardWidth = 70;

var getWizardHeight = function () {
  return 1.337 * wizardWidth;
};

var getWizardX = function (gamefieldWidth) {
  return (gamefieldWidth - wizardWidth)/2;
};

var getWizardY = function (gamefieldHeight) {
  return gamefieldHeight/3;
};
