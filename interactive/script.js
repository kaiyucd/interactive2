const textElement = document.getElementById("text");
const inputElement = document.getElementById("input");

// Questions and Responses
const steps = [
    { question: "Are you tired? (yes/no)", yes: "Don't worry, I'm always here to make things easier for you, and have you company!", no: "That's great, but remember, it's okay to rest even when you're not tired. I'll remind you." },
    { question: "Do you feel loved? (yes/no)", yes: "I'm glad, you deserve all the love and care in the world, especially mine:>", no: "Awe, am I not doing enough? You can always tell me and i'll make sure you feel loved and appreciated; I love you more than I can express so don't overthink that i don't:)",
        image: "tired.gif" // https://media.tenor.com/Swt8G6RD_h0AAAAM/byuntear-dog.gif
     },
    { question: "Is this fun? This is my first time making something like this, and the best part is that it's all personalized for you my dear:> (yes/no)", yes: "Glad you're enjoying it!", no: "Lah ganon, HAHA joke but sure i'll try making you a new one if you're not actually being sarcastic" },
    { question: "Do you know how much you mean to me? (yes/no)", yes: "That's Good! Because you mean everything to me. Always have, always will.", 
        no: "Well, let me remind you: You're my favorite person, and I love you endlessly.",
        image: "love.gif" // https://media.tenor.com/Jloq3y4mk8kAAAAj/amor-love.gif 
      }
  ];

let currentStep = 0;

function typeText(text, callback) {
    let index = 0;
    textElement.textContent = "";

    // Add image handling
    const currentStepImage = steps[currentStep]?.image || null;
    if (currentStepImage) {
        const imgElement = document.createElement('img');
        imgElement.src = currentStepImage;
        imgElement.style.maxWidth = "300px"; // Adjust size as needed
        imgElement.style.marginTop = "20px";
        textElement.innerHTML = ""; // Clear previous content
        textElement.appendChild(imgElement);
    }

    function type() {
        if (index < text.length) {
            textElement.textContent += text[index];
            index++;
            setTimeout(type, 100); // Adjust typing speed here
        } else if (callback) {
            callback();
        }
    }

    type();
}

function typeText(text, callback) {
    let index = 0;
    textElement.textContent = "";

    function type() {
        if (index < text.length) {
            textElement.textContent += text[index];
            index++;
            setTimeout(type, 100); // Typing speed
        } else if (callback) {
            callback();
        }
    }

    type();
}

function handleInput(event) {
    if (event.key === "Enter") {
        const answer = inputElement.value.toLowerCase();
        inputElement.value = "";

        if (answer === "yes" || answer === "no") {
            const response = steps[currentStep][answer];
            typeText(response, () => {
                currentStep++;
                if (currentStep < steps.length) {
                    setTimeout(() => typeText(steps[currentStep].question), 1000);
                } else {
                    typeText("Thanks for taking the time to see this:>");
                }
            });
        } else {
            typeText("Please type 'yes' or 'no', baby:)");
        }
    }
}

// Initialize the first question
typeText(steps[currentStep].question);
inputElement.addEventListener("keydown", handleInput);