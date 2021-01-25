const db  = require('./index.js');
const Review = require('./Review.js')
const faker = require('faker')

const sampleReviews = [

  {
    username: 'I like trains',
    title: 'Im sure ill like it when i get the ps5.',
    review: 'Went to order a Playstation 5 on the preorder date. Could not get one to safe my life... but there were plenty of PS5 DualSense Wireless controllers available. So thats something',
    stars: 2,
    foundHelpful: 680
  },

  {
    username: 'John Master',
    title: 'No cable',
    review: `I bought this controller to use with my pc because I really wanted to try it and plus I recently had shoulder surgery and can’t use my keyboard and mouse. Now the controller itself is amazing but I paid $70 for this controller.`,
    stars: 1,
    foundHelpful:999
  },

  {
    username: 'SaviorX',
    title: 'Possibly my favorite controller of all time.',
    review: `Ive been gaming since 1988. Combines the best of a PS4 & Xbox One controller, good hand feels. Why do people need to post their failures on here about their inability to preorder a product? Grow up.
    Update, if you’re playing Cold War there’s a really cool trigger effect ( you can shut this off) the right trigger collapses like a real trigger. I’m also finding battery life isn’t as bad as they’re saying, but I bough my an extra anyway.`,
    stars: 5,
    foundHelpful: 439
  },
  {
    username: 'PK',
    title: 'Ergonomics perfected - detail oriented',
    review: `The textured back of the controller has nice implemented details for Sony fans. If you look close enough, it is composed of the face buttons. The shoulder buttons also protrude more than the DualShock 4. The triggers at stock have a very nice smooth pull with some resistance. It will be nice to see how some games utilize the adaptive triggers. The PS button is now the logo from PlayStation 1 instead of a circle which also works as a nice translation to P5 if you really want to get poetically crazy. The touchpad has a little more resistance because the way the surface is treated. Instead of a silky smooth matte surface like the DS4, this one seems like it’s just a matte surface without the silk. The face buttons all have a super nice soft, but tactile press.`,
    stars: 5,
    foundHelpful: 147
  },
  {
    username: 'Adam Miros',
    title: 'Very comfortable but requires a little bit of setup (for now)',
    review: `I find the controller to be really comfortable. Although bigger the controller still fits well in my hands. However, please note, I primarily play on PC and there is a little bit of setup required since steam does not support the Dualsense right away. Here are a copy and paste of the same PSA I made on Reddit on how to get the controller to work on steam.`,
    stars: 4,
    foundHelpful: 129
  },
  {
    username: 'chris16',
    title: 'Very nice.',
    review: `Not sure why this arrived already but it feels really nice (I have large hands), bit heavier then PS4 controllers. Seems like they built it to last. My one issue is it didn't come with a charing cable.`,
    stars: 5,
    foundHelpful: 63
  },
  {
    username: '	Mr.Epic',
    title: 'PlayStation 5 controller is art!',
    review: `The PS5 controller is awesome, although I don’t have a ps5 and don’t plan on getting one. I am a pc gamer and only use PlayStation controllers because I am used to it from ps2-ps4 days. Let me start off with this. The controller is really nice in the hands. A bit bigger then first gen ps4 controller(the comparison controller in the photos). The controller is a bit heavier and the triggers I can’t test yet. The biggest pro I see is that the big light on top of the ps4 controller that is blue for player one even on the dim setting was crazy bright. Ps5 controller fixed that. The controller feels like a PlayStation controller but has the size of an xbone controller. The only thing that seems like a step down is the one butting no one uses. The touch pad button. It feels a bit mushy compared to the previous gen. Altogether I’d give it a 4/5 stars. Durability with the triggers is a concern but for now I’m satisfied. Will update to see if it can be used on pc without software later.`,
    stars: 4,
    foundHelpful: 57
  },
  {
    username: 'JustAnotherUser',
    title: 'Feels comfortable and works on PS3?',
    review: `Controller came in today. It does not come with any USB-C cable, which is a bummer, but not unexpected. I could not get it to work on my PS4 via wired connection, but it does work for some reason on the PS3. Was able to play some PS3 games with the controller (not all games work), only thing that fails to function on the PS3 is the home button and the vibration. Feels comfortable to play on and fits right in the palms of my hands. Looking forward to using it on an actual PS5 :)`,
    stars: 4,
    foundHelpful: 47
  },
  {
    username: 'Mert',
    title: 'THIS REVIEW IS FOR PC - STEAM',
    review: `Well, there's honestly not much to say. Steam has native support for Xbox One, DualShock 4, and Switch Pro Controllers, so they will most likely, eventually, also develop for the DualSense. I'm not sure when that will be, but I trust Steam with that, since they had done an absolutely PERFECT job for the previous three.`,
    stars: 5,
    foundHelpful: 14
  },
  {
    username: 'Someone',
    title: '5 stars for design, 1 star for everything else.',
    review: `Pros: Built in mutable mic, awesome addition. I currently use my camera most of the time, the echo and sounding like I'm far away so I have to talk louder than normal is irritating to other players.
    Type C connection, it's about time they added this.`,
    stars: 1,
    foundHelpful: 14
  },
  {
    username: 'Derrick',
    title: 'Works on Steam',
    review: `I bought this to replace my Dualshock 4 that had left stick issues. Plugged in using an Anker cable that was cheaper than the scam "official" ones that are being marketed as of this review. Windows recognized it as a generic controller, so did Steam. Used Steam's easy interface to map buttons. Worked in game flawlessly. Now just waiting for DS4Windows to update to support it outside of Steam.`,
    stars: 5,
    foundHelpful: 6
  },
  {
    username: 'JRSIV Music Ltd.',
    title: 'Waiting for awhile to get a PS5? DualSense makes a great PS3 controller... Seriously.',
    review: `I usually wait well into a generation to get a new console. First reason is obvious: launch units are notoriously buggy and prone to failure and usually within a year or two the console has had several sku's & model numbers with modifications that aren't visual but internal. Sony has made it a tradition to introduce a "Slim" model 2-3 years into the generation. But now with the PS4 Pro it's reasonable to assume a "point 5 (.5) Pro" upgrade version will also join the tradition.`,
    stars: 4,
    foundHelpful: 3
  },
  {
    username: 'Mario',
    title: 'It’s a great controller but if your on pc wait a little.',
    review: `This controller is pretty awesome for the ps5 it’s really a step up coming from the ps4 controller however for pc this is really not the great you have to jump through some extra hoops to get it working but when you finally do it’s worth. Unfortunately I’m going to get a refund and wait until it’s properly optimized for pc which is my main system hopefully there’s full support I knew this going in but since this is a great controller I couldn’t wait and took the risk.`,
    stars: 5,
    foundHelpful: 5
  },
  {
    username: 'Levi',
    title: 'Sony Customer Care...two thumbs way down',
    review: `The controller is great!! Feels great and is loaded with cool new features...but then you have Sony customer service. A button started to malfunction on the controller that was about a month old. I called Sony up and instead of apologizing profusely and sending a prepaid postage to get it fixed or just replacing it, I got an email saying I’m responsible for shipping costs. Way to stand by your product!!! You made a device that malfunctioned...why not put a burden on the consumer to ship your crap back to you. Bad, bad Sony. I’m buying an XBOX.`,
    stars: 1,
    foundHelpful: 4
  },
  {
    username: 'Natsu',
    title: ' So far does not work well with PC and Android',
    review: `Yes, right now on both PC and Android, with bluetooth or USB, vibration and track pad does not work at all.
    Infact I use usb c to c connector to connect my phone with DuelSence, nothing happened at all, not even charging the controller.
    But microphone and headphone jack does work on PC while connect though usb.`,
    stars: 2,
    foundHelpful: 3
  },
  {
    username: 'Nima',
    title: ' Sony lives up to their reputation!',
    review: `This is a very well crafted controller and as argued by online reviewers is likely going to be one of the distinguishing factors between Series X/S and PS5. The PS5 controller can produce more accurate haptic feedback and supports pull tension for L/R buttons, which can be programmed by developers to enhance the gaming experience (like simulating ABS brakes in racing games or a jammed gun in shooting games). Though it is yet to be seen if all games can leverage these features or it will be mainly supported by the 1st party games.`,
    stars: 5,
    foundHelpful: 12
  },
  {
    username: 'Roman',
    title: 'Thunder in the Palm of your hand!!',
    review: `I just wanted to drop by this short review saying that PS5 Controller hepatic feedback or Dualsense is game changing.

    So to put it in the simplest terms. You know when it rains and the thunder hits the ground and you feel that vibration in your feet. Well imagine that feeling that in your hands. Thats just mind blowing how they achieved it.`,
    stars: 5,
    foundHelpful: 12
  },
  {
    username: 'Txlab',
    title: 'Great controller, worried about durability',
    review: `This is a great controller. Big improvement over the PS4 controller. The vibration functionality is much more subtle and the controller itself feels great in the hand. Better size for my hands. The controller feels much more stable in game than other controllers I've used. Honestly, it's the most noticeable part of the PS5 experience so far. The interface and how it pulls you into the game seems much more significant that updated graphics, etc. I love this controller. However, after using it for a couple of days the "X" button started to stick. Also, the port for the earphones causes crackling and fuzzy noise. I've tried the headphones on my old controller and they are fine. So, it is something with this controller. `,
    stars: 3,
    foundHelpful: 1
  },
  {
    username: 'Drift',
    title: 'Great controller, worried about durability',
    review: `Great feeling controller. Just had drift on the left stick `,
    stars: 3,
    foundHelpful: 5
  },
  {
    username: 'Clifford John Master',
    title: 'No cable included for $70?',
    review: `I bought this controller to use with my pc because I really wanted to try it and plus I recently had shoulder surgery and can’t use my keyboard and mouse. Now the controller itself is amazing but I paid $70 for this controller and it doesn’t come with a charging cable and it’s usb type c which isn’t common enough to have lying around the house. So now I have to go out and buy a separate usb type c charging cable.`,
    stars: 1,
    foundHelpful: 4
  },
  {
    username: 'John Master',
    title: 'No cable',
    review: `I bought this controller to use with my pc because I really wanted to try it and plus I recently had shoulder surgery and can’t use my keyboard and mouse. Now the controller itself is amazing but I paid $70 for this controller.`,
    stars: 1,
    foundHelpful: 4
  }


]









const insertReviews = function () {
  Review.create(sampleReviews)
   .then(()=> console.log('Created'));
}

insertReviews();