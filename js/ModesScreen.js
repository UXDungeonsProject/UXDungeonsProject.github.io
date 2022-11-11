// Javascript code for the modes page


// Steps to add another mode
// 1.) go to modePage.html, and add your html to the <div> tag that contains the other modes
    // make sure that your div starts with <div id="modeId" class = "modehidden">
    // the "modeId" Id will be changed later
    // everything in the div is up to personal preference, the outside is all that matters
// 2.) add a new Id to the sectionIds array
// 3.) change the "id" section from the div earlier to be the new id you just added
// 4.) done

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
            modeSection.style.display = 'none'
        }
        else
        {
            modeSection.style.display = 'block'
        }
        console.log(modeSection.className)
    })
}


function LoadMode()
{
    ToggleModes(sectionIds[0])
}


