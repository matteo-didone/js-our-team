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
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    
    // Angela Caroll
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },

    // Walter Gordon
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },

    // Angela Lopez
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },

    // Scott Estrada
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },

    // Barbara Ramos
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
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

