// One entry per project. The "id" here matches the ?id= value used in the
// thumbnail links on indexmain.html (e.g. project.html?id=1).
//
// "layout" controls the CSS class applied to each image:
//   "full"    -> row-item-full (takes the whole row width)
//   "half"    -> row-item-half (takes half the row width, two per row)
//   "quarter" -> row-item-quarter (takes a quarter width, four per row)
//
// To add a new project: copy one of the blocks below, give it a new id,
// and swap in your own title/images. Nothing else needs to change.
 

const projectsData = {

  1: {
    title: "Fur & Fables",
    images: [
      { src: "./assets/FurAndFables/01.characters.png", alt: "Fur & Fables Game Concept Design", layout: "full" },
      { src: "./assets/FurAndFables/02.rabbit process.png", alt: "Fur & Fables Game Concept Design", layout: "full" }
    ]    
  },

  2: {
    title: "The Moon's Lost Daughter",
    images: [
      { src: "./assets/TheMoonsLostDaughter/6.png", alt: "The Moon's Lost Daughter Game Concept Design", layout: "full" },
      { src: "./assets/TheMoonsLostDaughter/2.png", alt: "The Moon's Lost Daughter Game Concept Design", layout: "half" },
      { src: "./assets/TheMoonsLostDaughter/3.png", alt: "The Moon's Lost Daughter Game Concept Design", layout: "half" },
      { src: "./assets/TheMoonsLostDaughter/1.jpg", alt: "The Moon's Lost Daughter Game Concept Design", layout: "full" }
    ]  
  },

  3: {
    title: "Soul Grab",
    images: [
      { src: "./assets/BoardGame - SoulGrab/6.jpg", alt: "Soul Grab Game Concept Design", layout: "full" },
      { src: "./assets/BoardGame - SoulGrab/2.jpg", alt: "Soul Grab Game Concept Design", layout: "half" },
      { src: "./assets/BoardGame - SoulGrab/3.jpg", alt: "Soul Grab Game Concept Design", layout: "half" },
      { src: "./assets/BoardGame - SoulGrab/4.jpg", alt: "Soul Grab Game Concept Design", layout: "full" },
      { src: "./assets/BoardGame - SoulGrab/5.jpg", alt: "Soul Grab Game Concept Design", layout: "full" }
    ]
  },

  4: {
    title: "Matriza",
    images: [
      { src: "./assets/Matriza/1.png", alt: "Game Concept Design", layout: "full" },
      { src: "./assets/Matriza/2.png", alt: "Game Concept Design", layout: "full" },
      { src: "./assets/Matriza/3.png", alt: "Game Concept Design", layout: "full" }
    ]
  },

  5: {
    title: "Pacman Reskin",
    images: [
      { src: "./assets/Pacman-Reskin/1.jpg", alt: "Main Project View", layout: "full" },
      { src: "./assets/Pacman-Reskin/2.jpg", alt: "Main Project View", layout: "half" },
      { src: "./assets/Pacman-Reskin/3.jpg", alt: "Main Project View", layout: "half" },
      { src: "./assets/Pacman-Reskin/4.jpg", alt: "Main Project View", layout: "full" }
    ]
  },

  6: {
    title: "Last Summer Camp",
    images: [
      { src: "./assets/LastSummerCamp/1.jpeg", alt: "Main Project View", layout: "full" },
      { src: "./assets/LastSummerCamp/2.jpeg", alt: "Main Project View", layout: "full" },
      { src: "./assets/LastSummerCamp/3.jpeg", alt: "Main Project View", layout: "half" },
      { src: "./assets/LastSummerCamp/4.jpeg", alt: "Main Project View", layout: "half" },
      { src: "./assets/LastSummerCamp/5.png", alt: "Main Project View", layout: "full" },
      { src: "./assets/LastSummerCamp/6.jpeg", alt: "Main Project View", layout: "full" },
      { src: "./assets/LastSummerCamp/7.jpeg", alt: "Main Project View", layout: "full" }
    ]      
  },

  7: {
    title: "Rameneko",
    images: [
      { src: "./assets/Rameneko/Rameneko - 1.png", alt: "GameScreenshot", layout: "full" },
      { src: "./assets/Rameneko/Rameneko - 2.png", alt: "GameScreenshot", layout: "full" },
      { src: "./assets/Rameneko/Rameneko - 3.png", alt: "GameScreenshot", layout: "full" },
      { src: "./assets/Rameneko/Rameneko - 4.png", alt: "GameScreenshot", layout: "full" },
      { src: "./assets/Rameneko/Rameneko - 5.jpg", alt: "GameScreenshot", layout: "full" },
      { src: "./assets/Rameneko/Rameneko - 6.png", alt: "GameScreenshot", layout: "full" }
    ]    
  },

  8: {
    title: "Invertus Merch",
    images: [
      { src: "./assets/InvertusMerch/poster1.jpeg", alt: "Invertus Merch Game Concept Design", layout: "full" },
      { src: "./assets/InvertusMerch/poster2.jpeg", alt: "Invertus Merch Game Concept Design", layout: "half" },
      { src: "./assets/InvertusMerch/poster3.jpeg", alt: "Invertus Merch Game Concept Design", layout: "half" },
      { src: "./assets/InvertusMerch/mockup4.jpeg", alt: "Invertus Merch Game Concept Design", layout: "full" },        
      { src: "./assets/InvertusMerch/stickers.jpeg", alt: "Invertus Merch Game Concept Design", layout: "full" },  
      { src: "./assets/InvertusMerch/mockup1.png", alt: "Invertus Merch Game Concept Design", layout: "full" },  
      { src: "./assets/InvertusMerch/mockup2.jpeg", alt: "Game Merch Design", layout: "half" }, 
      { src: "./assets/InvertusMerch/mockup3.jpeg", alt: "Game Merch Design", layout: "half" },         
      { src: "./assets/InvertusMerch/strip.jpeg", alt: "Game Merch Design", layout: "full" }
    ]
  },

  9: {
      title: "Invertus Game",
    images: [
      { src: "./assets/Invertus/1.png", alt: "Game Concept Design", layout: "full" },
      { src: "./assets/Invertus/2.png", alt: "Game Concept Design", layout: "full" },
      { src: "./assets/Invertus/3.png", alt: "Game Concept Design", layout: "full" },
      { src: "./assets/Invertus/grad2.jpeg", alt: "Game Concept Design", layout: "half" },
      { src: "./assets/Invertus/grad3.jpeg", alt: "Game Concept Design", layout: "half" },
      { src: "./assets/Invertus/grad1.jpeg", alt: "Game Concept Design", layout: "full" },
      { src: "./assets/Invertus/cinematheque1.jpeg", alt: "Game Concept Design", layout: "half" },
      { src: "./assets/Invertus/cinematheque2.jpeg", alt: "Game Concept Design", layout: "half" }
    ]
  },

  10: {
    title: "The Emerald Tarot",
    images: [
      { src: "./assets/TheEmeraldTarot/photo2.jpg", alt: "The Emerald Tarot Game Concept Design", layout: "full" },
      { src: "./assets/TheEmeraldTarot/3.jpg", alt: "The Emerald Tarot Game Concept Design", layout: "half" },
      { src: "./assets/TheEmeraldTarot/2.jpg", alt: "The Emerald Tarot Game Concept Design", layout: "half" },             
      { src: "./assets/TheEmeraldTarot/photo1.jpg", alt: "The Emerald Tarot Game Concept Design", layout: "full" },
      { src: "./assets/TheEmeraldTarot/photo6.jpg", alt: "The Emerald Tarot Game Concept Design", layout: "half" },
      { src: "./assets/TheEmeraldTarot/photo5.jpg", alt: "The Emerald Tarot Game Concept Design", layout: "half" }, 
      { src: "./assets/TheEmeraldTarot/1.jpg", alt: "The Emerald Tarot Game Concept Design", layout: "quarter" },
      { src: "./assets/TheEmeraldTarot/4.jpg", alt: "The Emerald Tarot Game Concept Design", layout: "quarter" },  
      { src: "./assets/TheEmeraldTarot/8.jpg", alt: "The Emerald Tarot Game Concept Design", layout: "quarter" },
      { src: "./assets/TheEmeraldTarot/6.jpg", alt: "The Emerald Tarot Game Concept Design", layout: "quarter" }, 
      { src: "./assets/TheEmeraldTarot/photo8.jpg", alt: "The Emerald Tarot Game Concept Design", layout: "half" },
      { src: "./assets/TheEmeraldTarot/photo4.jpg", alt: "The Emerald Tarot Game Concept Design", layout: "half" },                   
    ]
  },  

  11: {
    title: "Manor Lords",
    images: [
      { src: "./assets/ManorLords/1.png", alt: "Manor Lords Game Concept Design", layout: "full" },
      { src: "./assets/ManorLords/george1.png", alt: "Manor Lords Game Concept Design", layout: "half" },
      { src: "./assets/ManorLords/george2.png", alt: "Manor Lords Game Concept Design", layout: "half" },
      { src: "./assets/ManorLords/george3.png", alt: "Manor Lords Game Concept Design", layout: "full" },
      { src: "./assets/ManorLords/maurice.png", alt: "Manor Lords Game Concept Design", layout: "full" },
      { src: "./assets/ManorLords/2.png", alt: "Manor Lords Game Concept Design", layout: "full" },  
      { src: "./assets/ManorLords/icon1.png", alt: "Manor Lords Game Concept Design", layout: "full" }, 
      { src: "./assets/ManorLords/seasons.png", alt: "Manor Lords Game Concept Design", layout: "full" },              
      { src: "./assets/ManorLords/icon3.png", alt: "Manor Lords Game Concept Design", layout: "full" },    
      { src: "./assets/ManorLords/icon4.png", alt: "Manor Lords Game Concept Design", layout: "full" },        
      { src: "./assets/ManorLords/icon5.png", alt: "Manor Lords Game Concept Design", layout: "full" }
    ]
  },

  12: {
    title: "The Secret History of Christmas Baking",
    images: [
      { src: "./assets/ChristmasBaking/photo.jpg", alt: "book cover illustration", layout: "full" },
      { src: "./assets/ChristmasBaking/1.png", alt: "book cover illustration", layout: "full" },
      { src: "./assets/ChristmasBaking/6.png", alt: "book cover illustration", layout: "half" },
      { src: "./assets/ChristmasBaking/7.png", alt: "book cover illustration", layout: "half" }   
    ]
  },

    13: {
    title: "The Muskies Poster",
    images: [
      { src: "./assets/Muskies/1.png", alt: "poster design", layout: "full" },
      { src: "./assets/Muskies/2.png", alt: "poster design", layout: "half" },
      { src: "./assets/Muskies/3.png", alt: "poster design", layout: "half" },
      { src: "./assets/Muskies/4.png", alt: "poster design", layout: "full" }   
    ]
  },

    14: {
    title: "Siege the Day",
    images: [
      { src: "./assets/SiegeTheDay/Last_Scene.png", alt: "Animated series pilot artwork", layout: "full" },         
      { src: "./assets/SiegeTheDay/Footer_03.png", alt: "Animated series pilot artwork", layout: "full" },      
      { src: "./assets/SiegeTheDay/trailer1.png", alt: "Animated series pilot artwork", layout: "full" },
      { src: "./assets/SiegeTheDay/trailer2.png", alt: "Animated series pilot artwork", layout: "full" }, 
      { src: "./assets/SiegeTheDay/trailer3.png", alt: "Animated series pilot artwork", layout: "full" },     
      { src: "./assets/SiegeTheDay/Bg 2.png", alt: "Animated series pilot artwork", layout: "full" },
      { src: "./assets/SiegeTheDay/sketch2.png", alt: "Animated series pilot artwork", layout: "half" },         
      { src: "./assets/SiegeTheDay/sketch1.png", alt: "Animated series pilot artwork", layout: "half" },
      { src: "./assets/SiegeTheDay/Nigel.png", alt: "Animated series pilot artwork", layout: "full" }, 
      { src: "./assets/SiegeTheDay/Footer_01.png", alt: "Animated series pilot artwork", layout: "full" },        
      { src: "./assets/SiegeTheDay/Header_02.png", alt: "Animated series pilot artwork", layout: "full" },        
      { src: "./assets/SiegeTheDay/1.Peasant.png", alt: "Animated series pilot artwork", layout: "quarter" },  
      { src: "./assets/SiegeTheDay/3.Hedge Knight.png", alt: "Animated series pilot artwork", layout: "quarter" },  
      { src: "./assets/SiegeTheDay/5.Noble.png", alt: "Animated series pilot artwork", layout: "quarter" },  
      { src: "./assets/SiegeTheDay/6.Baron.png", alt: "Animated series pilot artwork", layout: "quarter" }, 
      { src: "./assets/SiegeTheDay/KickstartedLogo.png", alt: "Animated series pilot artwork", layout: "full" },        
      { src: "./assets/SiegeTheDay/Footer_02.png", alt: "Animated series pilot artwork", layout: "full" },            
      { src: "./assets/SiegeTheDay/main.png", alt: "Animated series pilot artwork", layout: "full" },                    
    ]
  },
  
  15: {
    title: "Brigandier",
    images: [
      { src: "./assets/Brigandier/1.jpg", alt: "Brigandier Game Concept Design", layout: "full" },
      { src: "./assets/Brigandier/2.png", alt: "Brigandier Game Concept Design", layout: "half" },
      { src: "./assets/Brigandier/3.jpg", alt: "Brigandier Game Concept Design", layout: "half" },
      { src: "./assets/Brigandier/Page_42.png", alt: "Brigandier Game Concept Design", layout: "full" },  
      { src: "./assets/Brigandier/Page_42_1.png", alt: "Brigandier Game Concept Design", layout: "half" },
      { src: "./assets/Brigandier/Page_42_0.png", alt: "Brigandier Game Concept Design", layout: "half" },    
      { src: "./assets/Brigandier/P21.png", alt: "Brigandier Game Concept Design", layout: "full" },   
      { src: "./assets/Brigandier/P21_1.jpeg", alt: "Brigandier Game Concept Design", layout: "half" },
      { src: "./assets/Brigandier/P21_0.jpeg", alt: "Brigandier Game Concept Design", layout: "half" },          
      { src: "./assets/Brigandier/P21spread.jpg", alt: "Brigandier Game Concept Design", layout: "full" }                 
    ]
  } ,


100: {
    title: "About Me",
    // Optional placeholder images if you still want a gallery, or leave images empty/remove it
    images: [], 
    content: `
      <div class="about-text-container">
        <div class="details-container color-container">
          <p>I'm Nicole, a game developer, UI designer, and digital illustrator based in Jerusalem.</p>
          <p>I specialize in 2D game development using Unity, C#, and creating vintage-inspired digital art and branding.</p>
        </div>
      </div>
    `
  },

  101: {
    title: "Contact",
    images: [],
    content: `
      <div class="contact-text-container">

          <div class="contact-info-container">
              <img src="./assets/email.png" alt="Email icon" class="icon contact-icon"/>
              <p><a href="mailto:raskin.nicole@gmail.com">raskin.nicole@gmail.com</a></p>
          </div>
          <div class="contact-info-container">
              <img src="./assets/ig.png" alt="Email icon" class="icon contact-icon"/>
              <p><a class="contact" href="https://www.instagram.com/raskin.nicole/">Instagram</a></p>
          </div>
          <div class="contact-info-container">
              <img src="./assets/itch.png" alt="Email icon" class="icon contact-icon"/>
              <p><a class="contact" href="https://nicoleraskin.itch.io/">itch.io</a></p>
          </div>              
          <div class="contact-info-container">
              <img src="./assets/linkedin.png" alt="Email icon" class="icon contact-icon"/>
              <p><a class="contact" href="https://www.linkedin.com/in/nicole-raskin">linkedin</a></p>
          </div>             

      </div>
    `
  }
};
