import techList from "../builderData/techs.js"

const techBullet = (tech) => {
  const [name, iconClass, iconText, description, treehouse] = tech;

  return `
    <section>
      <span class="icon solid major">
        <i class="${iconClass}">${iconText}</i>
      </span>
      <h3>${name}</h3>
      ${treehouse 
        ? `<p>Treehouse Points: ${treehouse.toLocaleString()}</p>`
        : ``
      }
      <p>${description}</p>
    </section>
  `
}

const makeList = (listName) => {
  const listDiv = document.getElementById(listName);

  for (const [key, value] of Object.entries(techList[listName])) {
    listDiv.innerHTML += techBullet([
      key,
      value.iconClass,
      value.iconText ? value.iconText: "",
      value.description ? value.description: "",
      value.treehouse ? treeHouseProfile.points[key] : ""
    ]);
  };

}

const makeTechLists = () => {
  makeList("frontEnd");
  makeList("backEnd");
}

makeTechLists()