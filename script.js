const textToType = `Hi, my name is Akash Wakade I'm a Full Stack Developer`; // The text you want to display
const delayBetweenChars = 100; // Time delay (in milliseconds) between each character

let currentIndex = 0;
const typewriterTextElement = document.getElementById("typyingName");

function typeNextChar() {
  if (currentIndex < textToType.length) {
    typewriterTextElement.textContent += textToType.charAt(currentIndex);
    currentIndex++;
    setTimeout(typeNextChar, delayBetweenChars);
  }
}

// Start the typewriter effect when the page loads
 window.onload = typeNextChar;


//   const textToType2 = "I'm a Full Stack Developer."; // The text you want to display
//   const delayBetweenChars2 = 100; // Time delay (in milliseconds) between each character

//   let currentIndex2 = 0;
//   const typewriterTextElement2 = document.getElementById("typingPassion");

//   function typeNextChar2() {
//     if (currentIndex2 < textToType2.length) {
//       typewriterTextElement2.textContent += textToType2.charAt(currentIndex2);
//       currentIndex2++;
//       setTimeout(typeNextChar2, delayBetweenChars2);
//     } else {
//       // Text has been fully typed, reset the currentIndex to 0 and start typing again
//       currentIndex2 = 0;
//       typewriterTextElement2.textContent = "";
//       setTimeout(typeNextChar2, delayBetweenChars2);
//     }
//   }

//   // Start the typewriter effect when the page loads
//   window.onload = typeNextChar2;
const mode=document.getElementsByClassName(mode)
mode.onlick=()=>{
    document.body.style.backgroundColor=white
}
