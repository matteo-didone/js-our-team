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

// Create a container element to hold the team members' cards
const teamContainer = document.querySelector(".team-members");

// Loop through the teamMembers array
for (let i = 0; i < teamMembers.length; i++) 
{
    // Create a new card element
    const card = document.createElement("div");
    // Add the card class to the card element
    card.classList.add("card");

    // Set the card's id attribute based on the team member's role
    card.id = teamMembers[i].role.toLowerCase().replace(" ", "-");

    // Create the card image element
    const cardImage = document.createElement("div");
    // Add the card image class to the card image element
    cardImage.classList.add("card-img");

    // Create the card info element
    const cardInfo = document.createElement("div");
    // Add the card info class to the card info element
    cardInfo.classList.add("card-info");

    // Create the heading element for the team member's name
    const heading = document.createElement("h4");
    // Set the heading's text content to the team member's name
    heading.textContent = teamMembers[i].name;

    // Create the paragraph element for the team member's role
    const paragraph = document.createElement("p");
    // Set the paragraph's text content to the team member's role
    paragraph.textContent = teamMembers[i].role;

    // Append the heading and paragraph elements to the card info
    cardInfo.appendChild(heading);
    cardInfo.appendChild(paragraph);

    // Append the card image and card info to the card
    card.appendChild(cardImage);
    card.appendChild(cardInfo);

    // Append the card to the team container
    teamContainer.appendChild(card);

    // Create an image element for the team member's photo
    const image = document.createElement("img");
    // Set the image's src and alt attributes
    image.src = teamMembers[i].photo;
    image.alt = teamMembers[i].name;

    // Append the image to the card image element
    cardImage.appendChild(image);
}