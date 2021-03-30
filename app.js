//March 30

//1a. 
const mulan = {
    title: `Mulan`,
    main: `Fa Mulan`,
//1b
    quote: function(){
        return `Dishonor! Dishonor on your whole family!`;
    },
//1c
    storyline: function(){
        return `The movie ${title} is about ${main}.`; 
    }
}

//2a
const tangled = {
    title: `Tangled`,
    main: `Rapunzel`,
 //2b
    quote: function(){
        return `I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER!`;
    },
//2c
    storyline: function(){
        return `The movie ${this.title} is about ${this.main}.`;
    }
}
console.log(tangled);

//3a.
function DisneyMovie(title, main){
    this.title = title;
    this.main = main;
    // 3b.
    DisneyMovie.prototype.storyline = function(){
        return `Dishonor! Dishonor on your whole family! The movie ${title} is about ${main}. I can't believe I did this! I can't believe I did this! I have to go home! I am never going back! I'm a horrible daughter! BEST DAY EVER! The movie ${this.title} is about ${this.main}.`;
    }
}

//3c
const mulan = new Mulan1(`Mulan`, `Fa Mulan`);

//3d
const tangled = new Tangled1(`Tangled`, `Rapunzel`);

//4a.
class DM {
constructor(title, main){
this.title = title;
this.main = main;
};
//4b
    storyline(){
        return `In the movie ${this.title}, to save her father from death in the army, a young maiden named ${this.main} secretly goes in his place and becomes one of China's greatest heroines in the process. In ${this.title}, The magically long-haired ${this.main} has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is.`
    };
    // 4e
    static loveDisneyMovies(){
        return `I Love Disney Movies!`;
      }
}

//4f
console.log(DM.loveDisneyMovies);


//4c. 
const mulan = new Mulan2(`Mulan`, `Fa Mulan`);

//4d. 
const tangled = new Tangled2(`Tangled`, `Rapunzel`);


//5a. 
class DM extends DMCast{
//5b 5c
constructor(title, main, cast){
    super(title, main);
    this.cast = cast;
    }
}

//5d.  
const mulan = new Mulan3 (`Mulan`, `Fa Mulan`);
{mulan: `Ming-Na Wen`, 
mushu: `Eddie Murphy`, 
shang: `BD Wong`, 
theEmperor: `Pat Morita`}

      
//5e. 
const tangled = new Tangled2(`Tangled`, `Rapunzel`);
{rapunzel: `Mandy Moore`, 
flynnRider: `Zachary Levi`, 
motherGothel: `Donna Murphy`}

//BONUS
//6a. In the DMCast subclass, create a static method called "create" that can be used to create a new DMCast object (HINT: The method will need parameters. Also, you need to use the return keyword)
//6b. Using the DMCast class name, run the "create" method using the following values (`Moana`, `Moana of Motunui`, {moana: `Auli'i Cravalho`, maui: `Dwayne Johnson`, grammaTala: `Rachel House`, chiefTui: `Temuera Morrison`}) and set the object returned from the create method to a const variable called moana
//6c. Finally, console log the value of the moana variable

