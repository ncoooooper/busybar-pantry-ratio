# Pantry Ratio

Scale a recipe to the amount of its limiting ingredient and see each new quantity.

Scale the dough to what is actually in the cupboard. A shortage of yeast, salt or water can set the batch size just as easily as a shortage of flour.

## Weigh the limiting ingredient

1. Click to enter the base recipe and available stock in grams. Turn to change a value, click to advance and press **Start** to return to results.
2. Read **Recipe scale**, then check the rear for the ingredient that set the limit. Here 180 g of flour against a 300 g recipe gives 60%.
3. Turn through the ingredients. The first calculated amount in the clip is 180 g of flour.

![The recipe scale of 60% gives way to 180 g of flour.](media/guide/inspect-scaled-flour.gif)

## Try a different stock level

1. In the editor, enter amounts on hand for any other limiting ingredients. Leave optional stock at −1 if you are treating it as unlimited.
2. Set a required ingredient’s available stock to zero if you have none. The resulting batch also becomes zero. A zero amount in the base recipe is ignored when choosing the limit.
3. Return to results and read each ingredient before weighing. The clip shows a base-flour edit and the return to the calculated scale.

![Base flour increases from 300 g to 305 g, returns to 300 g and the 60% result reappears.](media/guide/edit-base-flour.gif)

## Example from the emulator

At 60%, a base recipe of 300 g flour, 210 g water, 6 g salt and 3 g yeast becomes 180 g, 126 g, 3.6 g and 1.8 g. If another tracked ingredient supports a smaller fraction, that smaller fraction applies to the whole recipe.

## Run in the emulator

Open BUSY Bar Emulator. From this repository, run:

```sh
~/.busy-emulator/bin/busy-emulator dev --once
```

Press **Back** to exit.

The GIFs are excerpts from the emulator recording. Each front-display pixel is shown at 9× its original width and height. The end frames pause for reading.

[Full recording](media/controls.mp4) · [Rear display](screenshots/back-1.png) · [Firmware test](EMULATOR-QA.md) · [MIT license](LICENSE)
