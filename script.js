// MILESTONE 2:
// Print the same information on the DOM as strings.
// BONUS 1:
// Convert the photo string into an actual image.
// BONUS 2:
// Organize individual members into cards.

// Create an array of literal objects to represent the team members.
const teamMembers = 
[
    // Wayne Barnett
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "img/wayne-barnett-founder-ceo.jpg"
    },
    
    // Angela Caroll
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "img/angela-caroll-chief-editor.jpg"
    },

    // Walter Gordon
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "img/walter-gordon-office-manager.jpg"
    },

    // Angela Lopez
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "img/angela-lopez-social-media-manager.jpg"
    },

    // Scott Estrada
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "img/scott-estrada-developer.jpg"
    },

    // Barbara Ramos
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "img/barbara-ramos-graphic-designer.jpg"
    }
]

// Print to the console, for each team member, the name, role, and the photo string.
for (let i = 0; i < teamMembers.length; i++) 
{
    // Create variable to store the current member.
    const member = teamMembers[i];

    // Print the current member's information to the console using for in loop
    for (let key in member) 
    {
        // Print the current member's information to the console.
        console.log(key + ": " + member[key]);
    }
    // Print a line to separate each member's information.
    console.log("_________________________");
}

// Print to the DOM, for each team member, the name, role, and the photo string.
for (let i = 0; i < teamMembers.length; i++) 
{
    // Create variable to store the current member.
    const member = teamMembers[i];

    // Get the card element corresponding to the current team member
    const card = document.querySelectorAll(".card")[i];

    // Get the card-info div element corresponding to the current team member
    const cardInfo = card.querySelector(".card-info");

    // Update the card's HTML content with the team member's information
    cardInfo.querySelector("h4").textContent = member.name;
    cardInfo.querySelector("p").textContent = member.role;

    // Create an image element and set its source to the team member's photo
    const image = document.createElement("img");

    // Set the image's source to the team member's photo
    image.src = member.photo;

    // Set the image's alt attribute to the team member's name
    image.alt = member.name;

    // Append the image element to the card's card-img div
    card.querySelector(".card-img").appendChild(image);
}


