var quoteDet=
["1. You plan things to do & make sure they happen!",
"2. You enjoy discovering new places with me. :)",
"3. You understand my random moods & feelings, day after day, week after week, without ever complaining.",
"4. You’re the smartest person I know yet the most humble.",
"5. You instill faith & confidence in me about myself.",
"6. There’s no one else in the world I want to share everything with.",
"7. I knew I loved you when I could watch you sleep for hours together & still not stop falling in love with you.",
"8. You understand all my pain & suffering and never belittle it.",
"9. When you hurt me, you hurt yourself too. I can feel it and that’s just so kind.",
"10. For being the person I respect, adore & am in awe of",
"11. Because you’re such a cute baby underneath all that toughness. You make me melt.",
"12. You make me a better person, everyday.",
"13. I’ve never known love where a person cares about the smallest things the other person feels.",
"14. Your love feels genuine. You love me because I make you happy, and I love that.",
"15. You’re my friend, my partner, my parent & my soulmate. :)",
"16. For being there when I wanted to be weak and needed someone strong to hold me.",
"17. Because even with all our external differences, we’re so similar on the inside!",
"18. For your cheesy lines that crack me up.",
"19. Because being with you is the warmest feeling I’ve ever known.",
"20. Because you nurture me like a gardener nurtures a rose bud.",
"21. Because my comfort is paramount to you, & no one has ever done that for me before.",
"22. For your goofy smile — the one when you screw up, the one when you’re in cute mode, and the one when you get really high.",
"23. Because I secretly enjoy how much I can turn you on. :P",
"24. Because you make me feel like a woman. Your woman. :)",
"25. Your perverted jokes! Yes, they’re really, really gross (and awesome :D)",
"26. Because you understand things about me that I don’t understand about myself.",
"27. Because I can see us grow old together, sitting and bickering about our kids, careers and lives.",
"28. Because I know no one in the universe can tear us apart, even if that was what they really wanted.",
"29. Because we both love reading & lazing around on Sundays.",
"30. Because you’re such a cute, lazy bum.",
"31. Because you’re just so goddamn sexy - your voice, your million-dollar smile and your lean physique.",
"32. Because when you just can’t stop staring at me, I feel butterflies in my tummy.",
"33. Because you stand by me if I’m right or wrong, but you never shy from telling me the truth.",
"34. Because you respect me and treat me as your equal.",
"35. Because when I look at other’s husbands or boyfriends, I know what a wonderful person you are.",
"36. Because you’re the first man in my life I love & respect more than my dad.",
"37. Because you’re not afraid to open up about yourself.",
"38. Because you never dismiss my feelings.",
"39. Because you’ve made so many changes in your life for my sake :)",
"40. Because you know I’m a clean-freak and you really, really try to be clean :*",
"41. Because we’ve come a long way together and we keep going stronger each day.",
"42. Because even when you’re at your lowest, you still care more about me than yourself :* (P.S. It’s a bad habit and we should take care of you also!)",
"43. For how your face lights up when I dress up! So adorable. :)",
"44. Because you get excited like a child when you get me something",
"45. Because seeing me happy makes you more happy than I’ve seen otherwise!",
"46. And I’m amazed by how I never get bored of your presence.",
"47. Because we can talk about anything, ANYthing under the sun.",
"48. Because our conversations are endless",
"49. Because I’ve not been bored of you even for a second in the past 31 million plus seconds I’ve known you",
"50. For the way you touch and hold me. It’s like you’ll never let me go :)",
"51. For the way you look at me, and because when you do, I see so much love in your eyes.",
"52. Because you make me feel like a billion bucks (and sometimes, even more!)",
"53. Because you were, are and always will be mine <3"
];
var quote;
var byText = " via afreen.me/quote-generator ";
function getQuote() {
  quote = quoteDet[Math.floor(Math.random()*quoteDet.length)]
  document.getElementById("quoteLine").innerHTML = quote;
    };

function openTweet(){
  window.open("https://twitter.com/intent/tweet?text="+quote+byText);
};
