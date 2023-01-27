const creatures = [
  {
    id: 1,
    nameOf: "dire rat",
    type: "animal",
    difficulty: 0.3,
    level: 1,
    img: "img/rat.jpg",
    descr: `This filthy rat is the size of a small dog. It has a coat of coarse fur, a long and scabby tail, and two glittering eyes.`,
  },
  {
    id: 2,
    nameOf: "dog",
    type: "animal",
    difficulty: 0.3,
    level: 1,
    img: "img/rotweiller.jpg",
    descr: `This small dog has a rough coat and a hungry look in its dark brown eyes.`,
  },
  {
    id: 3,
    nameOf: "dolphin",
    type: "animal",
    difficulty: 0.5,
    level: 1,
    img: "img/dolphins.jpg",
    descr: `This streamlined, fish-like mammal has sparkling eyes over a smiling mouth filled with hundreds of teeth.`,
  },
  {
    id: 4,
    nameOf: "eagle",
    type: "animal",
    difficulty: 0.5,
    level: 1,
    img: "img/baldeagle.jpg",
    descr: `This magnificent bird of prey has dark feathers save for those on its head, which are pure white.`,
  },
  {
    id: 5,
    nameOf: "giant centipede",
    type: "vermin",
    difficulty: 0.5,
    level: 1,
    img: "img/giant-centipede.jpg",
    descr: `This lengthy, segmented horror writhes and twists, pulsing its venomous mandibles in search of prey.`,
  },
  {
    id: 5,
    nameOf: "fire beetle",
    type: "vermin",
    difficulty: 0.3,
    level: 1,
    img: "img/fire-beetle.webp",
    descr: `This housecat-sized beetle is a dull brown color brightened by two glowing green-yellow spots on its carapace.`,
  },
  {
    id: 6,
    nameOf: "mite (gremlin)",
    type: "fey",
    difficulty: 0.25,
    level: 1,
    img: "img/mite.webp",
    descr: `This squat humanoid seems to be nearly all head—an unfortunate circumstance, considering how ugly its puffy blue face is.`,
  },
  {
    id: 7,
    nameOf: "poisonous frog",
    type: "animal",
    difficulty: 0.5,
    level: 1,
    img: "img/blue-poison-frog.jpeg",
    descr: `This small frog is bright green and red, with electric-blue stripes on its hind legs.`,
  },
  {
    id: 8,
    nameOf: "pony",
    type: "animal",
    difficulty: 0.5,
    level: 1,
    img: "img/beautiful-chestnut-pony.webp",
    descr: `This squat equine plods forward with large, curious eyes. As it nears, it extends its muzzle, clearly expecting a treat.`,
  },
  {
    id: 9,
    nameOf: "stirge",
    type: "fey",
    difficulty: 0.5,
    level: 1,
    img: "img/stirge.webp",
    descr: `This insectoid creature has two pairs of bat wings, a tangle of thin legs, and a needle-sharp proboscis.`,
  },
  {
    id: 10,
    nameOf: "viper",
    type: "animal",
    difficulty: 0.5,
    level: 1,
    img: "img/viper.jpg",
    descr: `Vipers are not particularly aggressive snakes, but their poisonous bite can be deadly.`,
  },
  // level 2

  {
    id: 11,
    nameOf: "giant ant",
    type: "vermin",
    difficulty: 1,
    level: 2,
    img: "img/giant-ant.webp",
    descr: `Giant ants are as industrious as their normal-sized kin. While their nests generally don't consist of thousands, their greatly increased size more than compensates.`,
  },
  {
    id: 12,
    nameOf: "small air elemental",
    type: "elemental",
    difficulty: 1,
    level: 2,
    img: "img/air-elemental.webp",
    descr: `This cloud-like creature has dark hollows reminiscent of eyes and a mouth, and a howling wind whips it into ominous shapes.`,
  },
  {
    id: 13,
    nameOf: "giant frog",
    type: "animal",
    difficulty: 1,
    level: 2,
    img: "img/Giant-Frog.jpg",
    descr: `This creature looks like a normal frog, with moist, mottled, blackish-green skin, but grown to truly monstrous size.`,
  },
  {
    id: 14,
    nameOf: "giant spider",
    type: "vermin",
    difficulty: 1,
    level: 2,
    img: "img/GiantSpider.webp",
    descr: `A spider the size of a man crawls silently from the depths of its funnel-shaped web.`,
  },

  {
    id: 15,
    nameOf: "small fire elemental",
    type: "elemental",
    difficulty: 1,
    level: 2,
    img: "img/fire-elemental.jpg",
    descr: `A moving ball of fire with a rough humanoid shape, a terrible temper, two cinder eyes and fiery fists.`,
  },

  {
    id: 17,
    nameOf: "wolf",
    type: "animal",
    difficulty: 1,
    level: 2,
    img: "img/Wolf_drawing_on_snow.png",
    descr: `This powerful canine watches its prey with piercing yellow eyes, darting its tongue across sharp white teeth.`,
  },

  {
    id: 19,
    nameOf: "dire badger",
    type: "animal",
    difficulty: 2,
    level: 2,
    img: "img/Honey-badger.jpeg",
    descr: `A ferocious badger snarls and scrapes its wicked, shovel-like claws. Stocky muscles ripple beneath its streaked and shaggy fur.`,
  },
  {
    id: 20,
    nameOf: "giant porcupine",
    type: "animal",
    difficulty: 2,
    level: 2,
    img: "img/PorcupineGiant.png",
    descr: `This gray, human-sized porcupine's round body is covered in sharp, striped quills.`,
  },
  //level 3
  {
    id: 21,
    nameOf: "giant soldier ant",
    type: "vermin",
    difficulty: 2,
    level: 3,
    img: "img/soldier-ant.webp",
    descr: `Soldier ants are much bigger and more aggressive than their worker counterparts, they will defend their nest with ruthless agression.`,
  },
  {
    id: 22,
    nameOf: "boar",
    type: "animal",
    difficulty: 2,
    level: 3,
    img: "img/boar.jpg",
    descr: `With large pointed tusks and unpredictable agression, boars can be very dangerous, especially when charging.`,
  },
  {
    id: 23,
    nameOf: "crocodile",
    type: "animal",
    difficulty: 2,
    level: 3,
    img: "img/Crocodile.png",
    descr: `This reptile lunges out of the placid water with shocking speed. Its jaw gapes open in a roar, its powerful tail lashing behind.`,
  },
  {
    id: 24,
    nameOf: "dire bat",
    type: "animal",
    difficulty: 2,
    level: 3,
    img: "img/Direbat.webp",
    descr: `The Dire bat is a about the size of man and a huge wingspan, it is an efficient predator, catching any small flying creature with ease.`,
  },
  //level 4
  {
    id: 25,
    nameOf: "dire boar",
    type: "animal",
    difficulty: 3,
    level: 4,
    img: "img/dire-boar.webp",
    descr: `The back of this horse-sized boar rises in a steep slope. Its tiny red eyes are crusted with filth and its bristly flank crawls with flies.`,
  },
  {
    id: 25,
    nameOf: "dire wolf",
    type: "animal",
    difficulty: 3,
    level: 4,
    img: "img/dire-wolf.jpg",
    descr: `This immense black wolf is the size of a horse, its fangs as large and sharp as knives.`,
  },
  {
    id: 26,
    nameOf: "medium air elemental",
    type: "elemental",
    difficulty: 3,
    level: 4,
    img: "img/air-elemental.webp",
    descr: `This cloud-like creature has dark hollows reminiscent of eyes and a mouth, and a howling wind whips it into ominous shapes.`,
  },
  {
    id: 27,
    nameOf: "medium fire elemental",
    type: "elemental",
    difficulty: 3,
    level: 4,
    img: "img/fire-elemental.jpg",
    descr: `A moving ball of fire with a rough humanoid shape, a terrible temper, two cinder eyes and fiery fists.`,
  },
  {
    id: 28,
    nameOf: "mephit",
    type: "elemental",
    difficulty: 3,
    level: 4,
    img: "img/FireMephit.jpg",
    descr: `This small humanoid creature has thin, leathery wings, small horns, and a mischievous smile.`,
  },
  {
    id: 29,
    nameOf: "leshy",
    type: "fey",
    difficulty: 3,
    level: 4,
    img: "img/LeafLeshy.jpg",
    descr: `This vaguely humanoid plant creature has a body formed of soggy green seaweed and wears crude armor made from seashells.`,
  },
  {
    id: 30,
    nameOf: "crysmal",
    type: "elemental",
    difficulty: 3,
    level: 3,
    img: "img/crysmal.jpeg",
    descr: `An animated cluster of translucent crystals shaped disturbingly like a gemstone scorpion scuttles into an aggressive stance.`,
  },
  {
    id: 31,
    nameOf: "giant ant drone",
    type: "vermin",
    difficulty: 3,
    level: 4,
    img: "img/giant-ant-drone.jpg",
    descr: `Giant Ant drones, while rare, are unlike their small cousins, they are extremly aggresive and will attack without provocation.`,
  },
  {
    id: 32,
    nameOf: "satyr",
    type: "fey",
    difficulty: 4,
    level: 3,
    img: "img/Satyr.webp",
    descr: `This handsome, grinning man has the furry legs of a goat and a set of curling ram horns extending from his temples.`,
  },
  {
    id: 33,
    nameOf: "brownie",
    type: "fey",
    difficulty: 1,
    level: 2,
    img: "img/brownie-fey.jpg",
    descr: `Knee-high to a human, this large-headed creature has an almost manically friendly look on its expressive face.`,
  },
  //level 5
];

const summonsContainer = document.querySelector(".summons-container");

let selectedCreature = "all";
let selectedLevel = "0";

window.addEventListener("DOMContentLoaded", () => {
  displaySummons(creatures);
});

function displaySummons(summon) {
  let displaySummons = summon.map(function (item) {
    // console.log(item);

    return `<div class="summon">
    <div class="img-container">
      <img src=${item.img}  class="photo" />
    </div>
    <div class="info-container">
      <ul>
        <li><strong>${item.nameOf}</strong></li>
        <li>Type: ${item.type}</li>
        <li>CR: ${item.difficulty}</li>
        <li>level: ${item.level}</li>
        <li>
          Description: ${item.descr}
        </li>
      </ul>
    </div>
  </div>`;
  });
  displaySummons = displaySummons.join("");
  // console.log(displaySummons);

  summonsContainer.innerHTML = displaySummons;
}

const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.dataset.id !== undefined) {
    let filter = e.target.dataset.id;

    let [key, value] = filter.split("-"); //split() turns string into an array;
    if (key == "type") {
      selectedCreature = value;
    } else {
      selectedLevel = value;
    }
    let filteredCreatures = creatures.filter(function (item) {
      //filter() returns a new array with all values that match the condition
      if (selectedCreature == "all" && selectedLevel == "0") {
        return item.type.length > 0;
      } else if (selectedCreature == "all") {
        return item.level == selectedLevel;
      } else if (selectedLevel == "0") {
        return item.type == selectedCreature;
      }
      return item.type == selectedCreature && item.level == selectedLevel;
    });
    displaySummons(filteredCreatures);
    updateButtonStyle();
  }
});

function updateButtonStyle() {
  const btns = document.querySelectorAll(".btn");
  btns.forEach((btn) => {
    btn.classList.remove("selected");
  });
  document
    .querySelector(`button[data-id="type-${selectedCreature}"]`)
    .classList.add("selected");
  document
    .querySelector(`button[data-id="level-${selectedLevel}"]`)
    .classList.add("selected");
}

// filterBtns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const type = e.currentTarget.dataset.id;
//     const summonType = creatures.filter((creature) => {
//       if (creature.type === type) {
//         return creature;
//       }
//     });
//     if (creatures === "all") {
//       displaySummons(creatures);
//     } else {
//       displaySummons(summonType);
//     }
//   });
// });

// if (btn.classList.contains("selected")) {
//   btn.classList.remove("selected");
// } else {
//   btn.classList.add("selected");
// }
