'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var GAP = 20;

var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_MAX_HEIGHT = 150;

var FONT_SIZE = 16;
var FONT_FAMILY = 'PT Mono';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = FONT_SIZE + 'px ' + FONT_FAMILY;
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP * 2);

  var lowY = CLOUD_Y + CLOUD_HEIGHT;

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var barX = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var barHeight = BAR_MAX_HEIGHT * times[i] / maxTime;

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgb(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.round(Math.random() * 100) + '%, 50%)';
    }

    ctx.fillRect(barX, lowY - GAP - FONT_SIZE, BAR_WIDTH, -barHeight);

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), barX, lowY - GAP - FONT_SIZE - GAP - barHeight);

    ctx.fillText(names[i], barX, lowY - GAP);
  }
};
