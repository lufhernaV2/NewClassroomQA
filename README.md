<h2>New Classrooms QA Assesment</h2>
<h3>Tools used:</h3>
<ul>
    <li>Playwright</li>
    <li>Javascript</li>
</ul>
<p>Tests run on: Chrome, Firefox, Safari & Edge</p>
<p>Description of the automation is at the bottom</p>
<br>
===================================
<br>
<h3>In order to run these tests do the following:</h3>
<ol>
    <li>Fork this repo.</li>
    <li>Open the folder -> In a terminal type 'npm install' (all the dependencies should be now installed).</li>
    <li>Type 'npx playwright test' in the terminal to run all the test suites.</li>
</ol>
====================================
<h3>User Story 1: As a customer, I see room options on the application home page</h3>
<h4>1. What was tested?</h4>
<ul>
    <li>Confirmed that a single room is present on the application home page.</li>
    <li>Due to lack of story requirements, my question is if this is expected behavior since only one room is shown.</li>
    <li>No bugs were found.</li>
</ul>
<br>
<image src='images/UserStory1Image.png'>
<br>
<h3>Automation Scripts:</h3>
<h4>1. What was tested?</h4>
<p>The 'Booking single room' E2E test script covers the stories below:</p>
<ul>
    <li>User Story 2: As a customer, I can use the website on the desktop browser of my choosing</li>
    <li>User Story 3: As a customer, when I select the "Book this Room" button/CTA, I want the system to load the “availability calendar” and “contact information form</li>
    <li>User Story 4: As a customer, I want to select the dates of my intended stay in the calendar</li>
    <li>User Story 5: Contact Info Form Functionality</li>
    <li>User Story 6: Selecting the 'Book' CTA produces a 'booking successful' pop-up</li>
</ul>
<p>The 'Multiple bookings' E2E test script covers the story below:</p>
<ul>
    <li>User Story 7: As a customer, I would like to make more than one booking</li>
    <li>User Story 8: As a customer, I can only make a booking with dates that are available</li>
</ul>
