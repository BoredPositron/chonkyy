const words = [
    "hunky",
    "coo",
    "olive"
  ];
  
  const answer = "i love u chonky";
  
  // Function to scramble the letters of a word
  function shuffleWord(word) {
    const arr = word.split("");
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
  }
  
  // Function to display the jumbled words
  function displayJumbleWord() {
    let jumbleWords = "";
    for (let i = 0; i < words.length; i++) {
      jumbleWords += shuffleWord(words[i]) + " ";
    }
    document.getElementById("jumble-word-text").textContent = jumbleWords;
  }
  
  // Function to check the user's answer
  function checkAnswer() {
    const userAnswer = document.getElementById("user-answer").value.toLowerCase();
    if (userAnswer === answer) {
        window.location.href = "https://open.spotify.com/playlist/0h9KDLaiLVhZuWedWFTevK?si=60f8fffbc18747e7&pt=28a2247d3f6265c339d38c5fbfe6e3cd";
    } else {
      document.getElementById("result").textContent = "Sorry, that's not correct. Please try again.";
    }
  }
  
  // Display the jumbled words on page load
  window.onload = displayJumbleWord;
  