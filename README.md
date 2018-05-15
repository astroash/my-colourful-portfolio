# ✨ I got bored so I vamped up my portfolio site ✨

All vanilla.   
Here's some stuff I learnt.  
Also reminders for when I wanna change it in the future.  

## Fonts ℬ
One of my font files had more bytes than a eating contest so I FontForg to remove extra characters (there was a lot of hidden Korean)

## Colour Codes 🌈
I decided to use `rgb` colour codes as they're made solely of numbers so it was easier to maths them. I mapped how the numbers changed as you go through the colour wheel with fixed brightness & contrast. It broke down into 6 stages, below is the starting position of each stage:

1. rgb ( ⬆  ⬇️  ⬇️ ) `//next g goes up`
2. rgb ( ⬆ ️ ⬆️  ⬇️ ) `//next r goes down`
3. rgb ( ⬇  ⬆ ️ ⬇️ ) `//next b goes up`
4. rgb ( ⬇  ⬆ ️ ⬆️ ) `//next g goes down`
5. rgb ( ⬇  ⬇️ ️ ⬆️ ) `//next r goes up`
6. rgb ( ⬆ ️ ⬇️  ⬆️ ) `//next b goes down`

Then you pick your top value and bottom value and you can cycle through a colour spectrum at a set brightness. My ⬇️ is 130 & ⬆️ 255, and I only use steps 2-5 to keep it simple.

This is pattern is then applied to different segments of the screen on mouse movement. 

## Responsive 🤦🏽‍
Gunna break this one down as it took the longest

### IOS 📱
Turns out pseudo selectors like `active` & `focus` don't work on IOS devices, but this magical line of code does it's thing:
```
document.addEventListener("touchstart", function() {},false); 
```

### Links 😒
Without hover you could click on the tiles to make them animate, but you would often end up clicking on the social media links. To get around this I transition the `z-index` of the link so that initially it is unclickable, then transitions & fades into usability. Got the idea from this cool kid who likes to transition 👻👻👻  
[Ghosting through walls](https://codepen.io/chriscoyier/pen/gboJf)

To get z-index to work parent has been set as a flex container:  
[Some vaguely related thing I found](https://stackoverflow.com/questions/33391370/flexbox-z-index-position-static-why-isnt-it-working)

## 🐰🥚
There's some easter eggs in the making. See if you can find them without looking at the code.