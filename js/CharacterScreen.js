// Javascript code for the character page



// Steps to add a character to the page
// 1.) add a character section id to the sectionIds list
// 2.) add a character id to the characterIds list
// 3.) make sure the spot in the list is the same for both ids from steps 1 and 2
// note: next steps are in the html document characterPage.html
// 4.) add the character image below the other character images, with an id being what you added to the list for step 2
// 5.) add the character section below the other character sections, with an id being what you added in step 1
// 6.) add the class "modeHidden" to the new character section
// 7.) done

//ids for the information section of each character
let sectionIds = new Array(
    "FleetSection",
    "HamirSection",
    "SladeSection",
    "ArtemisSection"
    );

let characterIds = new Array(
    "FleetCharacter",
    "HamirCharacter",
    "SladeCharacter",
    "ArtemisCharacter"
    );

// Changes which section is shown and which are hidden
function ChangeCharacterText(id)
{
    sectionIds.forEach((sectionId) => {
        modeSection = document.getElementById(sectionId);
        if(sectionId != sectionIds[id])
        {
            modeSection.className = "modeHidden"
        }
        else
        {
            modeSection.className = ""
        }
    })
}

// Called onload of the character html page, populates the character image section with all of their correct on-click effects
function LoadCharacterImages()
{
    characterIds.forEach((id, index) => {
        var characterImageSection = document.getElementById(id);
        characterImageSection.onclick = function(){
            ChangeCharacterText(index);
        }
    });
}
