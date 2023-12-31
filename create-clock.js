const clockName = window.prompt("Enter the Clock name:");
if (!clockName) {
  return;
}

const folderName = "Clocks";

const folder = game.folders.find(
  (f) => f.name === folderName && f.type === "Actor"
);

if (!folder) {
  ui.notifications.error(`Folder ${folderName} not found.`);
  return;
}

const actorData = {
  name: clockName,
  type: "🕛 clock",
  folder: folder._id,
  img: "systems/scum-and-villainy/themes/blue/4clock_0.webp",
};

Actor.create(actorData);
ui.notifications.info(
  `A new Clock has been created in the ${folderName} folder.`
);

