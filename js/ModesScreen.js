// Javascript code for the modes page

let sectionIds = new Array(
    "StoryMode",
    "ChallengeDungeons"
    );

function ToggleModes(id)
{
    sectionIds.forEach((idElement) => {
        modeSection = document.getElementById(idElement);
        if(idElement != id)
        {
            modeSection.className = "modeHidden"
        }
        else
        {
            modeSection.className = ""
        }
        console.log(modeSection.className)
    })
}


