// Javascript code for the character page



// Steps to add a character to the page


// Indexes for each character and where there information resides in the list
const fleetIndex = 0;
const hamirIndex = 1;
const sladeIndex = 2;
const artemisIndex = 3;

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
/*
let characterImageRouteList = new Array(
"./assets/img/Dungeon_steampage_heroes_fleet.png",
"./assets/img/Dungeon_steampage_heroes_hamir.png",
"./assets/img/Dungeon_steampage_heroes_slade.png",
"./assets/img/Dungeon_steampage_heroes_artemis.png"
);


// Character Biography List -- The indexes align with those listed earlier
let characterBioList = new Array (
"Fleet is the self-proclaimed protector of her hometown of Julesvale, although she's seen as a clumsy menace more than a hero. As the jack of all trades, Fleet is a great character for learning the combat system.", 
"Hamir is a former Wall Runner from the mighty Rock Wall. He has made his way to Julesvale in exile after losing his trusted partner. Hamir now finds himself looking for a purpose and the courage to carry on.. Hamir is strong and sturdy, weathering blows until the time is right to crush his foes.", 
"Slade is a pirate from the far-off Polekai Islands. He has made his way to Julesvale hunting a mysterious rare mineral unique to Julesvale. Rumor has it the mineral is key to saving his homeland. Slade’s style and swagger allow him to dodge attacks entirely if his speed is high enough.",
"Artemis is a renowned general in the Fire Mora who often fought alongside  Zetterburn. She was sent to Julesvale by Emperor Loxodont on a secret mission. Artemis can heal her wounds in battle, showing off her innate regeneration abilities."
);*/

// Changes the text in the textbox to the biography from the bio list
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

// Called onload of the character html page, populates the character image section
function LoadCharacterImages()
{
    characterIds.forEach((id, index) => {
        var characterImageSection = document.getElementById(id);
        characterImageSection.onclick = function(){
            ChangeCharacterText(index);
        }
    });
}
