/* js/script.js */
/* Updated to include pre-assessment result logic */

// --- OSCQR Alignment Notes --- //
// OSCQR Standard 45 (Technology): JS facilitates feedback & navigation.
// OSCQR Standard 51 (Accessibility): JS interactions should be keyboard accessible.
// OSCQR Standard 21 (Assessment): Provide timely & constructive feedback.

document.addEventListener('DOMContentLoaded', function() {
    console.log("KitchenComm CBE Module Initialized");

    // --- Check if we are on the Pre-Assessment Results Page --- //
    const preResultsContainer = document.getElementById('pre-results-content');
    if (preResultsContainer) {
        console.log("On Pre-Assessment Results Page - calculating results...");
        // Simulate Pre-Assessment Outcome
        // Math.random() < 0.3 gives a 30% chance of returning true (passing)
        const userPassedPreAssessment = Math.random() < 0.3;

        let resultsHTML = ''; // Variable to hold the HTML to be injected

        if (userPassedPreAssessment) {
            // --- User Passed ---
            console.log("User PASSED Pre-Assessment (Simulated)");
            resultsHTML = `
                <h2>Pre-Assessment Results</h2>
                <p style="color: green; font-weight: bold;">Congratulations! You've demonstrated mastery of this competency.</p>
                <p>You have successfully passed the pre-assessment for 'Exchange Safety Warnings'. You can now move on to other competencies.</p>
                <a href="index.html" class="button-link">Back to Dashboard</a>
            `;
            // In a real system, we would mark Competency 4 as mastered here.

        } else {
            // --- User Failed ---
            console.log("User FAILED Pre-Assessment (Simulated)");
            resultsHTML = `
                <h2>Pre-Assessment Results</h2>
                <p style="color: darkorange; font-weight: bold;">It looks like you need some practice with this skill.</p>
                <p>You haven't quite demonstrated mastery yet for 'Exchange Safety Warnings'.</p>
                <div style="background-color: #fff3cd; border: 1px solid #ffeeba; padding: 10px; border-radius: 5px; margin-top: 15px;">
                    <strong>Feedback:</strong> To improve, please review the learning resources. Pay close attention to:
                    <ul>
                        <li>Matching the correct warning term (e.g., 'Hot' vs 'Wet') to the specific hazard.</li>
                        <li>Recognizing common kitchen hazards quickly.</li>
                    </ul>
                </div>
                <p style="margin-top: 15px;">We recommend exploring the learning materials before attempting the formal assessment.</p>
                <a href="learning_resources.html" class="button-link secondary">Go to Learning Resources</a>
            `;
        }

        // Inject the generated HTML into the container div
        preResultsContainer.innerHTML = resultsHTML;
    } // End if (preResultsContainer)


    // --- Existing Logic for Formal Assessment Results Page (Placeholder) --- //
    const formalResultsContainer = document.getElementById('formal-results');
    if (formalResultsContainer) {
        console.log("On Formal Assessment Results Page - calculating results...");
        // Simulate Formal Assessment Outcome (Higher pass rate assumed after learning)
        const formalAssessmentResult = Math.random() < 0.8; // 80% chance pass
        let resultsHTML = '';

        if (formalAssessmentResult) {
             console.log("User PASSED Formal Assessment (Simulated)");
             resultsHTML = `
                 <h2>Formal Assessment Results</h2>
                 <p style="color: green; font-weight: bold;"><strong>Status: MASTERED</strong></p>
                 <p>Congratulations! You have successfully mastered the 'Exchange Safety Warnings' competency.</p>
                 <a href="index.html" class="button-link">Back to Dashboard</a>
             `;
             // Mark competency as mastered in a real system.
        } else {
             console.log("User FAILED Formal Assessment (Simulated)");
             resultsHTML = `
                 <h2>Formal Assessment Results</h2>
                 <p style="color: darkred; font-weight: bold;"><strong>Status: Needs Improvement</strong></p>
                 <p>Not Quite Mastered. Review the feedback below and revisit the learning resources before trying the formal assessment again.</p>
                 <div style="background-color: #f8d7da; border: 1px solid #f5c6cb; padding: 10px; border-radius: 5px; margin-top: 15px;">
                     <strong>Feedback:</strong> While improved, ensure you consistently differentiate between warnings like "Hot" and "Sharp" under time pressure. Also, double-check your understanding of when to use the general warning "Careful" (¡Cuidado!). Revisit the vocabulary list and the practice simulation.
                 </div>
                 <p style="margin-top: 15px;">Please review the learning materials again.</p>
                 <a href="learning_resources.html" class="button-link secondary">Review Learning Resources</a>
             `;
        }
        formalResultsContainer.innerHTML = resultsHTML;

    } // End if (formalResultsContainer)


    // --- Existing Logic for Audio Button Placeholders --- //
    const audioButtons = document.querySelectorAll('.audio-btn');
    audioButtons.forEach(button => {
        button.addEventListener('click', function() {
            const audioSrc = this.getAttribute('data-audio-src');
            // Simple alert for mockup. Use HTMLAudioElement for real playback.
            alert(`Playing audio placeholder: ${audioSrc}`);
            /* Example real implementation:
            try {
                const audio = new Audio(audioSrc);
                audio.play();
            } catch (e) {
                console.error("Error playing audio:", e);
                alert("Could not play audio.");
            }
            */
        });
    });

    // --- Existing Logic for Simple Simulation Interaction Placeholders --- //
    const practiceSimButton = document.getElementById('practice-sim-start');
    if(practiceSimButton) {
        practiceSimButton.addEventListener('click', () => {
            alert("Starting practice simulation... (Placeholder)");
            // Add simple interactive elements here in real version
        });
    }
    const formalAssessmentButton = document.getElementById('formal-assess-start');
    if(formalAssessmentButton) {
         formalAssessmentButton.addEventListener('click', () => {
            alert("Starting formal assessment simulation... (Placeholder)");
             // Load assessment interface
         });
    }

}); // End DOMContentLoaded
```