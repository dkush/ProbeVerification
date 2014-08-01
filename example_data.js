var shuffleSequence = seq("intro","practice", sepWith("sep","practice1"), "pretest", sepWith("sep","test"),"sr","Code");
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: "keypress",
        normalMessage: "Continue?",
        errorMessage: "Wrong Answer. Continue?",
    },
    "DashedSentence", {
        mode: "speeded acceptability",
        display: "in place",
        wordTime: 300,
        wordPauseTime: 150
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        showNumbers: false,
        presentHorizontally: true,
        randomOrder: false
    },
    
    "Probe", {
        showNumbers: false,
        presentHorizontally: true,
        randomOrder: false
    },
    
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var items = [

    // New in Ibex 0.3-beta-9. You can now add a '__SendResults__' controller in your shuffle
    // sequence to send results before the experiment has finished. This is NOT intended to allow
    // for incremental sending of results -- you should send results exactly once per experiment.
    // However, it does permit additional messages to be displayed to participants once the
    // experiment itself is over. If you are manually inserting a '__SendResults__' controller into
    // the shuffle sequence, you must set the 'manualSendResults' configuration variable to 'true', since
    // otherwise, results are automatically sent at the end of the experiment.
    //
    //["sr", "__SendResults__", { }],

    ["sep", "Separator", { }],
    
    

    // New in Ibex 0.3-beta19. You can now determine the point in the experiment at which the counter
    // for latin square designs will be updated. (Previously, this was always updated upon completion
    // of the experiment.) To do this, insert the special '__SetCounter__' controller at the desired
    // point in your running order. If given no options, the counter is incremented by one. If given
    // an 'inc' option, the counter is incremented by the specified amount. If given a 'set' option,
    // the counter is set to the given number. (E.g., { set: 100 }, { inc: -1 })
    //
    //["setcounter", "__SetCounter__", { }],

    // NOTE: You could also use the 'Message' controller for the experiment intro (this provides a simple
    // consent checkbox).

    ["intro", "Form", {
        html: { include: "consent.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],

    
             ["practice", "Message", {consentRequired: false,
                        html: ["div",
                         ["p", "In this experiment, you will read a series of sentences. The sentences will be automatically presented word-by-word, with each word appearing in the center of your computer screen."],
                               ],} ],
    
                  ["practice", "Message", {consentRequired: false,
                        html: ["div",
                         ["p", "Before you read each sentence, you will see a short intro screen that tells you who the people in the sentence are."],
                        ["p", "Sentence characters will either be FICTIONAL (people who do not exist, whose names we made up) or FAMOUS (people who may be known to you as actors, musicians, politicians, sports figures, scientists, etc.)."],
                               ],} ],

                               
              ["practice", "Message", {consentRequired: false,
                        html: ["div",
                         ["p", "You have two tasks in this experiment. The first is to make a judgment. At some point in every sentence a NAME will appear on the screen in capital letters."],
                        ["p", "Your job is to determine whether or not this name appeared in the sentence you are reading. Please do this AS QUICKLY AS POSSIBLE. "],
                        ["p", "When you see the name, press the 'G' key if the name WAS in the sentence you are reading, press the 'H' key if the name WAS NOT in the sentence you are reading."],
                  
                               ],   } ],
          
                               ["practice", "Message", {consentRequired: false,
                        html: ["div",
                         ["p", "These names can appear at any time during a sentence presentation – at the beginning, in the middle, or at the end of a sentence – so you will have to pay attention! "],
                               ],   } ],
              
                 ["practice", "Message", {consentRequired: false,
                        html: ["div",
                         ["p", "After you've finished reading a sentence, you may be asked a comprehension question. Before every question you will see the word 'TEST', after which the question will appear in the center of the screen."],

                        ["p", "The answer choices will appear below the question. If the answer is the option on the left, press the 'G' key; if the answer is the option on the right, please press the 'H' key."],
                 
                       ],} ],
                         
                  
                 ["practice", "Message", {consentRequired: false,
                        html: ["div",
                         ["p", "Before you begin, please place your index and middle fingers on the 'G' and 'H' keys of your keyboard. You will first read some practice sentences in order to familiarize yourself with these tasks."],
                       ],   } ],   
                               
    
                 
                              
    //
    // 2 practice items for self-paced reading (one with a comprehension question).
    //

              ["practice1", "FlashSentence", {s:"FAMOUS: Manny Fresh and Marie Curie"},               "DashedSentence", {s:["Manny","told","Marie","that","he","wanted"]},  "Question", {q: "ANTONIO", as: [["g", "Yes"], ["h", "No"]]},"DashedSentence", {s:"to take the car out for a ride."},],                               
              ["practice1", "FlashSentence", {s:"FICTIONAL: Obediah Schwarzkopf and Jim Fetterling"}, "DashedSentence", {s:"Obediah asked Jim to go down the road to the store."}, "Question", {q: "JIM", as: [["g", "Yes"], ["h", "No"]]},"Question", {q:"Who was asked to go to the store?", as: [["g", "Obediah"],["h","Jim"]]},],
   

         ["practice1", "Message", {consentRequired: false,
                        html: ["div",
                         ["p", "That's the end of the practice, press to continue to the real experiment."],
                       ],   } ],
                                  
        // TEST ITEMS
     
                                  ["pretest", "FlashSentence", {s: "Please make sure your fingers are on the G and H keys before you start."},],
          
                                  ["pretest", "FlashSentence", {s: "To start every test sentence, press G or H when 'Continue?' is displayed."},],
[["test","S1"], "FlashSentence", {s:"FICTIONAL: Aaron McGuire and Gregory Brown"}, "DashedSentence", {s:"Aaron watched Gregory jog around the"}, "Question", {q:"RANDY", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"park and then they raced to the indoor track."},],
[["test","R2"], "FlashSentence", {s:"FAMOUS: Monica Seles and Chloe Grace Moretz"}, "DashedSentence", {s:"Monica asked Chloe for some money"}, "Question", {q:"MARY", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"for groceries and she gave up one hundred dollars."},],
[["test","Q3"], "FlashSentence", {s:"FICTIONAL: Jared Ross and Michael Lee"}, "DashedSentence", {s:"Jared gave Michael a barrel of"}, "Question", {q:"WESLEY", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"green apples but he did not have another barrel."},],
[["test","K4"], "FlashSentence", {s:"FAMOUS: Katy Perry and Amanda Bynes"}, "DashedSentence", {s:"Katy wanted a snapshot of Amanda in front of the museum but she wouldn't pose for the camera."}, "Question", {q:"KATY", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who wouldn't pose for the camera?", as:[ ["g","Katy"],["h","Amanda"]], hasCorrect:1,timeout:1000},],
[["test","D5"], "FlashSentence", {s:"FICTIONAL: Paul Cosgrove and Johnny Bentham"}, "DashedSentence", {s:"Paul tied Johnny to an old wooden chair but Johnny was able to get loose."}, "Question", {q:"PAUL", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who did someone tie to a chair?", as:[ ["g","Paul"],["h","Johnny"]], hasCorrect:1,timeout:1000},],
[["test","Q6"], "FlashSentence", {s:"FAMOUS: Kathryn Janeway and Ashley Greene"}, "DashedSentence", {s:"Kathryn wanted Ashley to come to her house but Kathryn"}, "Question", {q:"CHRISTA", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"could not provide any transportation."},],
[["test","A7"], "FlashSentence", {s:"FAMOUS: Katie Holmes and Shirley Temple"}, "DashedSentence", {s:"Katie cleaned the house for Shirley for several hours one day while Shirley"}, "Question", {q:"KATIE", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"took a nap on the sofa."}, "Question", {q:"Who cleaned the house for someone?", as:[ ["g","Katie"],["h","Shirley"]], hasCorrect:0,timeout:1000},],
[["test","R8"], "FlashSentence", {s:"FICTIONAL: Connor McQueen and Wayne Pulsipher"}, "DashedSentence", {s:"Conor assumed that Wayne wouldn't enjoy the"}, "Question", {q:"MILES", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"French movie but he was familiar with foreign film."},],
[["test","H9"], "FlashSentence", {s:"FICTIONAL: Owen Kennedy and Dave Warren"}, "DashedSentence", {s:"Owen blamed Dave for causing the car accident but Dave was not really at fault."}, "Question", {q:"DAVE", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who did someone blame?", as:[ ["g","Owen"],["h","Dave"]], hasCorrect:1,timeout:1000},],
[["test","J10"], "FlashSentence", {s:"FICTIONAL: Simon McIntyre and Matthew Nesbitt"}, "DashedSentence", {s:"Simon loaned Matthew some tools for the garden and he"}, "Question", {q:"SIMON", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"returned them a week later."}, "Question", {q:"Who returned them a week later.", as:[ ["g","Simon"],["h","Matthew"]], hasCorrect:1,timeout:1000},],
[["test","Q11"], "FlashSentence", {s:"FAMOUS: Hayley Williams and Natasha Henstridge"}, "DashedSentence", {s:"Hayley loaned Natasha some textbooks from last quarter and Hayley only asked for fifty dollars."}, "Question", {q:"MARGARET", as: [ ["g","Yes"], ["h","No"]], timeout:2500},],
[["test","L12"], "FlashSentence", {s:"FICTIONAL: Stevie Winchester and George Dixon"}, "DashedSentence", {s:"Stevie was amusing George by doing some fancy acrobatics and he slipped and broke an arm."}, "Question", {q:"STEVIE", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who broke an arm?", as:[ ["g","Stevie"],["h","George"]], hasCorrect:0,timeout:1000},],
[["test","D13"], "FlashSentence", {s:"FICTIONAL: Joe Scofield and Bruce Davis" }, "DashedSentence", {s:"Joe saw Bruce standing on the river bank and Joe waved hello from the canoe."}, "Question", {q:"JOE", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who was standing on the river bank?", as:[ ["g","Joe"],["h","Bruce"]], hasCorrect:1,timeout:1000},],
[["test","R14"], "FlashSentence", {s:"FICTIONAL: Wentworth Grayson and Ricky Alvarez" }, "DashedSentence", {s:"Wentworth didn't see Ricky jump in the gym pool and Ricky tried hard to stay hidden."}, "Question", {q:"KENNY", as: [ ["g","Yes"], ["h","No"]], timeout:2500},],
[["test","L15"], "FlashSentence", {s:"FICTIONAL: Thomas McCall and Colin West"}, "DashedSentence", {s:"Tyler begged Colin to play for the team and he reluctantly agreed to the proposal."}, "Question", {q:"TYLER", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who agreed to play?", as:[ ["g","Tyler"],["h","Colin"]], hasCorrect:1,timeout:1000},],
[["test","S16"], "FlashSentence", {s:"FAMOUS: Melissa Gilbert and Laci Peterson" }, "DashedSentence", {s:"Melissa fixed Laci up on a blind date and they agreed to discuss details afterwards."}, "Question", {q:"JOANNA", as: [ ["g","Yes"], ["h","No"]], timeout:2500},],
[["test","I17"], "FlashSentence", {s:"FAMOUS: Elizabeth Taylor and Jennifer Lopez"}, "DashedSentence", {s:"Elizabeth gave Jennifer some directions to the zoo and she"}, "Question", {q:"ELIZABETH", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"had no trouble following them."}, "Question", {q:"Who had no trouble following the directions?", as:[ ["g","Elizabeth"],["h","Jennifer"]], hasCorrect:1,timeout:1000},],
[["test","R18"], "FlashSentence", {s:"FAMOUS: Carrie Brownstein and Sheryl Swoops"}, "DashedSentence", {s:"Carrie expected Sheryl to be late"}, "Question", {q:"BEVERLY", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"with rent but she turned it in on time."},],
[["test","D19"], "FlashSentence", {s:"FICTIONAL: Hugh Glazer and Albert Mills"}, "DashedSentence", {s:"Hugh spilled a drink on Albert at the New Year's party and Albert went home to change clothes."}, "Question", {q:"HUGH", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who did someone spill a drink on?", as:[ ["g","Hugh"],["h","Albert"]], hasCorrect:1,timeout:1000},],
[["test","K20"], "FlashSentence", {s:"FAMOUS: Michelle Obama and Serena Williams"}, "DashedSentence", {s:"Michelle was being tickled by Serena during the live television show but she managed not to laugh aloud."}, "Question", {q:"MICHELLE", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who managed not to laugh aloud?", as:[ ["g","Michelle"],["h","Serena"]], hasCorrect:0,timeout:1000},],
[["test","S21"], "FlashSentence", {s:"FICTIONAL: Clive Bemos and Ralph Marsh" }, "DashedSentence", {s:"Clive told Ralph about the new movie downtown, and they decided to see it soon."}, "Question", {q:"OLIVER", as: [ ["g","Yes"], ["h","No"]], timeout:2500},],
[["test","M22"], "FlashSentence", {s:"FAMOUS: Lindsay Lohan and Janet Jackson"}, "DashedSentence", {s:"Lindsay was knitting a scarf for Janet for an early Christmas present but she"}, "Question", {q:"JANET", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"did not have enough yarn."}, "Question", {q:"Who did not have enough yarn?", as:[ ["g","Lindsay"],["h","Janet"]], hasCorrect:0,timeout:1000},],
[["test","F23"], "FlashSentence", {s:"FICTIONAL: Morgan Tate and Kurt Renfro"}, "DashedSentence", {s:"Morgan pitched Kurt a very fast curve ball and Kurt"}, "Question", {q:"KURT", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"hit it into the outfield."}, "Question", {q:"Who did someone pitch a curve ball to?", as:[ ["g","Morgan"],["h","Kurt"]], hasCorrect:1,timeout:1000},],
[["test","R24"], "FlashSentence", {s:"FAMOUS: Nikki Haley and Thandie Newton"}, "DashedSentence", {s:"Nikki tried to help Thandie to move the lounge chair but Thandie wanted to do it alone."}, "Question", {q:"DIANA", as: [ ["g","Yes"], ["h","No"]], timeout:2500},],
[["test","S25"], "FlashSentence", {s:"FAMOUS: Angela Bassett and Shannon Elizabeth" }, "DashedSentence", {s:"Angela saw Shannon light a cigarette outside work and"}, "Question", {q:"LYDIA", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"they shared it during their break."},],
[["test","B26"], "FlashSentence", {s:"FICTIONAL: Jerry Tillman and Richard Duncan"}, "DashedSentence", {s:"Jerry went to visit Richard one rainy afternoon in January but Richard"}, "Question", {q:"JERRY", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"was on a tropical vacation."}, "Question", {q:"Who did someone go to visit?", as:[ ["g","Jerry"],["h","Richard"]], hasCorrect:1,timeout:1000},],
[["test","Q27"], "FlashSentence", {s:"FAMOUS: Zoe Saldana and Amy Smart"}, "DashedSentence", {s:"Zoe wanted to remind Amy to study quantum"}, "Question", {q:"EVEYLN", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"physical mechanics but she couldn't find the telephone number."},],
[["test","F28"], "FlashSentence", {s:"FICTIONAL: Michael Lambert and Jimmy Stokes"}, "DashedSentence", {s:"Michael accidentally locked Jimmy out of the new house and Jimmy"}, "Question", {q:"JIMMY", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"tried to pick the lock."}, "Question", {q:"Who did someone lock out?", as:[ ["g","Michael"],["h","Jimmy"]], hasCorrect:1,timeout:1000},],
[["test","A29"], "FlashSentence", {s:"FAMOUS: Paula Abdul and Martha Stuart"}, "DashedSentence", {s:"Paula stood until Martha provided the specially requested chair and Paula"}, "Question", {q:"PAULA", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"sat down with great relief."}, "Question", {q:"Who was standing?", as:[ ["g","Paula"],["h","Martha"]], hasCorrect:0,timeout:1000},],
[["test","Q30"], "FlashSentence", {s:"FAMOUS: Keke Palmer and Linda McMahon"}, "DashedSentence", {s:"Keke saw Linda buying some chocolate ice cream and Keke decided to buy some too."}, "Question", {q:"KAREN", as: [ ["g","Yes"], ["h","No"]], timeout:2500},],
[["test","A31"], "FlashSentence", {s:"FAMOUS: Marilyn Monroe and Penelope Cruz"}, "DashedSentence", {s:"Marilyn sent Penelope a check for twenty dollars and Penelope"}, "Question", {q:"MARILYN", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"cashed the check that afternoon."}, "Question", {q:"Who sent someone a check?", as:[ ["g","Marilyn"],["h","Penelope"]], hasCorrect:0,timeout:1000},],
[["test","S32"], "FlashSentence", {s:"FICTIONAL: Karl Scotch and Tony Petrovich" }, "DashedSentence", {s:"Karl showed Tony how to build a fire, and they roasted marshmallows and told stories."}, "Question", {q:"TOBY", as: [ ["g","Yes"], ["h","No"]], timeout:2500},],
[["test","J33"], "FlashSentence", {s:"FICTIONAL: Ben Young and Frank Hudgens"}, "DashedSentence", {s:"Ben loaned Frank a blue ball point pen but he"}, "Question", {q:"BEN", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"wanted it back before long"}, "Question", {q:"Who wanted it back?", as:[ ["g","Ben"],["h","Frank"]], hasCorrect:0,timeout:1000},],
[["test","K34"], "FlashSentence", {s:"FAMOUS: Scarlett Johansen and Amy Winehouse" }, "DashedSentence", {s:"Scarlett tutored Amy for the big history test and she charged ten dollars an hour."}, "Question", {q:"SCARLETT", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who charged ten dollars an hour?", as:[ ["g","Scarlett"],["h","Amy"]], hasCorrect:0,timeout:1000},],
[["test","N35"], "FlashSentence", {s:"FICTIONAL: Seth Burns and Drew Robertson"}, "DashedSentence", {s:"Seth saved Drew from drowning in the creek and he"}, "Question", {q:"DREW", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"quickly became a local hero."}, "Question", {q:"Who became a hero?", as:[ ["g","Seth"],["h","Drew"]], hasCorrect:0,timeout:1000},],
[["test","S36"], "FlashSentence", {s:"FAMOUS: Miranda Kerr and Dianne Feinstein"}, "DashedSentence", {s:"Miranda beat Dianne in a game"}, "Question", {q:"DONNA", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"of chess, and they agreed to play a rematch."},],
[["test","C37"], "FlashSentence", {s:"FAMOUS: Angelina Jolie and Natalie Portman"}, "DashedSentence", {s:"Angelina predicted that Natalie would lose the track race but Natalie came in first very easily."}, "Question", {q:"ANGELINA", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who predicted someone would lose?", as:[ ["g","Angelina"],["h","Natalie"]], hasCorrect:0,timeout:1000},],
[["test","R38"], "FlashSentence", {s:"FICTIONAL: Robert Troy and Brad James"}, "DashedSentence", {s:"Robert found out that Brad owned two hundred sailing yachts and Brad"}, "Question", {q:"KYLE", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"asked to sail on one."},],
[["test","Q39"], "FlashSentence", {s:"FAMOUS: Paulina Rubio and Kat Dennings"}, "DashedSentence", {s:"Paulina wanted Kat to correct an English essay so"}, "Question", {q:"ALEXIS", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"she brought it to school today."},],
[["test","S40"], "FlashSentence", {s:"FICTIONAL: Ed Thomas and Sean Burke"}, "DashedSentence", {s:"Ed convinced Sean to apply to graduate school and"}, "Question", {q:"DEREK", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"they discussed various programs at length."},],
[["test","G41"], "FlashSentence", {s:"FAMOUS: Taylor Swift and Britney Spears"}, "DashedSentence", {s:"Taylor urged Britany to apply to law school and Britany got accepted in the fall."}, "Question", {q:"BRITANY", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who urged someone to apply to law school?", as:[ ["g","Taylor"],["h","Britany"]], hasCorrect:0,timeout:1000},],
[["test","N42"], "FlashSentence", {s:"FICTIONAL: William Stark and Jim Tucker"}, "DashedSentence", {s:"William made sure that Jim was already very sound asleep and he"}, "Question", {q:"JIM", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"tiptoed quietly out of the house."}, "Question", {q:"Who tiptoed quietly?", as:[ ["g","William"],["h","Jim"]], hasCorrect:0,timeout:1000},],
[["test","R43"], "FlashSentence", {s:"FAMOUS: Camille Belle and Abbie Cornish"}, "DashedSentence", {s:"Camille showed Abbie things that were for sale but"}, "Question", {q:"JANICE", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"she didn't see anything very nice."},],
[["test","M44"], "FlashSentence", {s:"FAMOUS: Whitney Houston and Cameron Diaz"}, "DashedSentence", {s:"Whitney received from Cameron one of those chain letters but she"}, "Question", {q:"CAMERON", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"did not continue the chain."}, "Question", {q:"Who did not continue the chain?", as:[ ["g","Whitney"],["h","Cameron"]], hasCorrect:0,timeout:1000},],
[["test","B45"], "FlashSentence", {s:"FICTIONAL: Willie Newsome and Tom Lombard"}, "DashedSentence", {s:"Willie saw that Tom was fixing a flat tire and Willie"}, "Question", {q:"WILLIE", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"stopped to offer some help."}, "Question", {q:"Who was fixing a flat tire?", as:[ ["g","Willie"],["h","Tom"]], hasCorrect:1,timeout:1000},],
[["test","R46"], "FlashSentence", {s:"FAMOUS: Annika Sorestam and Meagan Goode"}, "DashedSentence", {s:"Annika thought that Meagan would major in agricultural biology but Meagan"}, "Question", {q:"ISABELLA", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"wanted to major in history."},],
[["test","E47"], "FlashSentence", {s:"FAMOUS: Victoria Beckham and Chelsea Handler"}, "DashedSentence", {s:"Victoria called Chelsea on a brand new iPhone and Chelsea"}, "Question", {q:"CHELSEA", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"answered on the third ring."}, "Question", {q:"Who called someone?", as:[ ["g","Victoria"],["h","Chelsea"]], hasCorrect:0,timeout:1000},],
[["test","P48"], "FlashSentence", {s:"FICTIONAL: Dick Kelly and Ryan Finnegan"}, "DashedSentence", {s:"Dick threw a pie at Ryan that was big and gooey but he ducked before it could hit."}, "Question", {q:"RYAN", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who ducked?", as:[ ["g","Dick"],["h","Ryan"]], hasCorrect:1,timeout:1000},],
[["test","R49"], "FlashSentence", {s:"FAMOUS: Jamie Alexander and Caroline Choi"}, "DashedSentence", {s:"Jamie didn't show Caroline the answers to the homework so"}, "Question", {q:"WENDY", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"she copied answers from the book."},],
[["test","B50"], "FlashSentence", {s:"FICTIONAL: Bill Harlow and Charlie Atkinson"}, "DashedSentence", {s:"Bill handed Charlie some tickets to a concert but Bill"}, "Question", {q:"BILL", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"took the tickets back immediately."}, "Question", {q:"Who was handed some tickets to a concert?", as:[ ["g","Bill"],["h","Charlie"]], hasCorrect:1,timeout:1000},],
[["test","I51"], "FlashSentence", {s:"FAMOUS: Kim Kardashian and Tina Fey"}, "DashedSentence", {s:"Kim gave Tina some truly heart felt advice but she"}, "Question", {q:"KIM", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"didn't take the advice seriously."}, "Question", {q:"Who didn't take the advice seriously?", as:[ ["g","Kim"],["h","Tina"]], hasCorrect:1,timeout:1000},],
[["test","G52"], "FlashSentence", {s:"FAMOUS: Naomi Watts and Rosie O'Donnell"}, "DashedSentence", {s:"Naomi inherited from Rosie a very substantially large fortune and Naomi spent all the money foolishly."}, "Question", {q:"ROSIE", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who inherited a large fortune?", as:[ ["g","Naomi"],["h","Rosie"]], hasCorrect:0,timeout:1000},],
[["test","H53"], "FlashSentence", {s:"FICTIONAL: Clay Johnston and Justin Byrne"}, "DashedSentence", {s:"Clay saw that Justin was in very serious trouble and Clay ran quickly for some help."}, "Question", {q:"JUSTIN", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who was in trouble?", as:[ ["g","Clay"],["h","Justin"]], hasCorrect:1,timeout:1000},],
[["test","S54"], "FlashSentence", {s:"FAMOUS: Kaley Cuoco and Rosie Perez"}, "DashedSentence", {s:"Kaley accused Rosie of denting the parked car and"}, "Question", {q:"ALLISON", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"they got into a fist fight."},],
[["test","R55"], "FlashSentence", {s:"FICTIONAL: Perry Rand and Rufus Wells"}, "DashedSentence", {s:"Perry asked Rufus to take the dog out and"}, "Question", {q:"CRAIG", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"Rufus went to find the leash."},],
[["test","E56"], "FlashSentence", {s:"FAMOUS: Mariah Carey and Julia Roberts"}, "DashedSentence", {s:"Mariah escorted Julia over to the dental appointment but Mariah"}, "Question", {q:"JULIA", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"waited outside in the lobby."}, "Question", {q:"Who escorted someone to the dentist?", as:[ ["g","Mariah"],["h","Julia"]], hasCorrect:0,timeout:1000},],
[["test","O57"], "FlashSentence", {s:"FAMOUS: Halle Berry and Betty White"}, "DashedSentence", {s:"Halle gave Betty a lecture about proper hygiene and she listened very patiently and attentively."}, "Question", {q:"BETTY", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who listened patiently?", as:[ ["g","Halle"],["h","Betty"]], hasCorrect:1,timeout:1000},],
[["test","Q58"], "FlashSentence", {s:"FICTIONAL: Zack Abrams and Hugo Tanner"}, "DashedSentence", {s:"Zack flew with Hugo on a plane towards England and Zack asked the stewardess for peanuts."}, "Question", {q:"EDWARD", as: [ ["g","Yes"], ["h","No"]], timeout:2500},],
[["test","K59"], "FlashSentence", {s:"FAMOUS: Christina Aguilera and Nicki Minaj" }, "DashedSentence", {s:"Christina mailed Nicki a package of classified information and she received it within a week."}, "Question", {q:"CHRISTINA", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who received it within a week?", as:[ ["g","Christina"],["h","Nicki"]], hasCorrect:1,timeout:1000},],
[["test","F60"], "FlashSentence", {s:"FICTIONAL: Jack Bellingham and Stephen Walker"}, "DashedSentence", {s:"Jack poured a drink for Stephen that was really quite strong and Jack"}, "Question", {q:"STEPHEN", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"quickly put the bottle away."}, "Question", {q:"Who was poured a drink?", as:[ ["g","Jack"],["h","Stephen"]], hasCorrect:1,timeout:1000},],
[["test","P61"], "FlashSentence", {s:"FICTIONAL: Will Cummings and Chuck Vanderbilt"}, "DashedSentence", {s:"Will wanted to tell Chuck the exciting and unexpected news but he couldn't find a nearby phone."}, "Question", {q:"CHUCK", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who couldn't find a phone?", as:[ ["g","Will"],["h","Chuck"]], hasCorrect:0,timeout:1000},],
[["test","G62"], "FlashSentence", {s:"FAMOUS: Ellen DeGeneres and Alicia Keys"}, "DashedSentence", {s:"Ellen accused Alicia of committing a big robbery and Alicia was convicted of the crime."}, "Question", {q:"ALICIA", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who accused someone?", as:[ ["g","Ellen"],["h","Alicia"]], hasCorrect:0,timeout:1000},],
[["test","S63"], "FlashSentence", {s:"FICTIONAL: Nolan Banks and Billy O'Farrell"}, "DashedSentence", {s:"Nolan called Billy to sit for"}, "Question", {q:"CHESTER", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"a portrait, but they couldn't agree on a time."},],
[["test","J64"], "FlashSentence", {s:"FICTIONAL: Nicholas Rivera and Mark Potter"}, "DashedSentence", {s:"Nicholas tried to amuse Mark with a somewhat offensive joke but he"}, "Question", {q:"NICHOLAS", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"did not laugh or smile."}, "Question", {q:"Who didn't laugh?", as:[ ["g","Nicholas"],["h","Mark"]], hasCorrect:1,timeout:1000},],
[["test","I66"], "FlashSentence", {s:"FAMOUS: Emma Watson and Courtney Cox"}, "DashedSentence", {s:"Emma interviewed Courtney about cheating in college courses and she"}, "Question", {q:"EMMA", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"asked some very tough questions."}, "Question", {q:"Who asked some tough questions?", as:[ ["g","Emma"],["h","Courtney"]], hasCorrect:0,timeout:1000},],
[["test","D66"], "FlashSentence", {s:"FICTIONAL: Steve Campbell and John Turner"}, "DashedSentence", {s:"Steve broke a leg while skiing with John at the very expensive resort and Steve had to leave on crutches."}, "Question", {q:"STEVE", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who was skiing with someone who broke a leg?", as:[ ["g","Steve"],["h","John"]], hasCorrect:1,timeout:1000},],
[["test","Q67"], "FlashSentence", {s:"FICTIONAL: Billy Whalen and Phil Carter" }, "DashedSentence", {s:"Billy told Phil the party was at six but"}, "Question", {q:"JEFF", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"he was telling a big lie."},],
[["test","F68"], "FlashSentence", {s:"FICTIONAL: Mike Robinson and Harrison Walsh"}, "DashedSentence", {s:"Mike saw Harrison outside stealing a parked car but Mike"}, "Question", {q:"HARRISON", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"did not call the police."}, "Question", {q:"Who sole a car?", as:[ ["g","Mike"],["h","Harrison"]], hasCorrect:1,timeout:1000},],
[["test","Q69"], "FlashSentence", {s:"FAMOUS: Stacy Keibler and Maggie Grace"}, "DashedSentence", {s:"Stacy felt that Maggie had problems with"}, "Question", {q:"LISA", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"drug abuse but she couldn't recommend a good counselor."},],
[["test","C70"], "FlashSentence", {s:"FAMOUS: Pamela Anderson and Cindy Crawford"}, "DashedSentence", {s:"Pamela asked Cindy to play golf on Friday but Cindy had already made other plans."}, "Question", {q:"PAMELA", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who asked someone to play golf?", as:[ ["g","Pamela"],["h","Cindy"]], hasCorrect:0,timeout:1000},],
[["test","Q71"], "FlashSentence", {s:"FAMOUS: Jenna Elfman and Barbara Boxer"}, "DashedSentence", {s:"Jenna went to a concert with Barbara and wanted a concert poster but Jenna"}, "Question", {q:"KELSEY", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:" realized she was dead broke."},],
[["test","R72"], "FlashSentence", {s:"FICTIONAL: Rob Keller and Andrew Sinclair"}, "DashedSentence", {s:"Rob decided that Andrew wouldn't want a red bike but Andrew did want a red one."}, "Question", {q:"PATRICK", as: [ ["g","Yes"], ["h","No"]], timeout:2500},],
[["test","J73"], "FlashSentence", {s:"FICTIONAL: Brad Tremblay and Matt Goreham"}, "DashedSentence", {s:"Brad wrapped a gift for Matt that was a big surprise and he"}, "Question", {q:"BRAD", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"hid it in a closet."}, "Question", {q:"Who hid a gift in the closet?", as:[ ["g","Brad"],["h","Matt"]], hasCorrect:0,timeout:1000},],
[["test","A74"], "FlashSentence", {s:"FAMOUS: Sarah Michelle Gellar and Carrie Underwood"}, "DashedSentence", {s:"Sarah made Carrie a rich chocolate pound cake and Sarah"}, "Question", {q:"SARAH", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"used an old fashioned recipe."}, "Question", {q:"Who made a cake for someone?", as:[ ["g","Sarah"],["h","Carrie"]], hasCorrect:0,timeout:1000},],
[["test","Q75"], "FlashSentence", {s:"FICTIONAL: Gary Porter and Jonathan Washington"}, "DashedSentence", {s:"Gary told Jonathan to pick out a bookshelf and Gary"}, "Question", {q:"BRIAN", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"offered to pay for it."},],
[["test","C76"], "FlashSentence", {s:"FAMOUS: Reese Witherspoon and Anne Hathaway"}, "DashedSentence", {s:"Reese described to Anne how life was in Detroit but Reese didn't mention the terrible pollution."}, "Question", {q:"REESE", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who described life in Detroit?", as:[ ["g","Reese"],["h","Anne"]], hasCorrect:0,timeout:1000},],
[["test","E77"], "FlashSentence", {s:"FAMOUS: Kate Winslet and Sandra Bullock"}, "DashedSentence", {s:"Kate wouldn't allow Sandra to pay with a check but Kate"}, "Question", {q:"SANDRA", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"would accept a credit card."}, "Question", {q:"Who wouldn't accept a check?", as:[ ["g","Kate"],["h","Sandra"]], hasCorrect:0,timeout:1000},],
[["test","R78"], "FlashSentence", {s:"FAMOUS: Rita Rudner and Octavia Spencer"}, "DashedSentence", {s:"Rita found Octavia playing with the neighbor's dog and Octavia invited everyone to play too."}, "Question", {q:"CAROL", as: [ ["g","Yes"], ["h","No"]], timeout:2500},],
[["test","H79"], "FlashSentence", {s:"FICTIONAL: Chris Garland and Robert Banner"}, "DashedSentence", {s:"Chris punched Robert during a bar room brawl and Robert got a terrible black eye."}, "Question", {q:"ROBERT", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who did someone punch?", as:[ ["g","Chris"],["h","Robert"]], hasCorrect:1,timeout:1000},],
[["test","P80"], "FlashSentence", {s:"FICTIONAL: Tim Warnick and Eddie Hillerman" }, "DashedSentence", {s:"Tim handed Eddie the telephone in the den but Sam wanted to continue talking later."}, "Question", {q:"EDDIE", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who wanted to continue talking later?", as:[ ["g","Tim"],["h","Eddie"]], hasCorrect:0,timeout:1000},],
[["test","S81"], "FlashSentence", {s:"FICTIONAL: Larry Schultz and James Rosella" }, "DashedSentence", {s:"Larry mailed a package to James that contained his birthday present and"}, "Question", {q:"JOSHUA", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"they set a date to party."},],
[["test","I82"], "FlashSentence", {s:"FAMOUS: Faith Hill and Gwen Stefani"}, "DashedSentence", {s:"Faith lost to Gwen in the state tennis match but she"}, "Question", {q:"FAITH", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"accepted the major defeat gracefully."}, "Question", {q:"Who accepted defeat gracefully?", as:[ ["g","Faith"],["h","Gwen"]], hasCorrect:0,timeout:1000},],
[["test","S83"], "FlashSentence", {s:"FAMOUS: Lily Tomlin and Piper Perabo"}, "DashedSentence", {s:"Lily learned to hypnotize Piper with a shiny pocket watch, and they"}, "Question", {q:"LAUREN", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"performed the act on stage."},],
[["test","O84"], "FlashSentence", {s:"FAMOUS: Nicole Ritchie and Hilary Clinton"}, "DashedSentence", {s:"Nicole asked Hilary to pick out a card and she drew an ace of diamonds."}, "Question", {q:"HILARY", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who drew an ace of diamonds?", as:[ ["g","Nicole"],["h","Hilary"]], hasCorrect:1,timeout:1000},],
[["test","P85"], "FlashSentence", {s:"FICTIONAL: Donald Torres and Clint Johns"}, "DashedSentence", {s:"Donald passed the football to Clint on a third down play and he ran quickly for a touchdown."}, "Question", {q:"CLINT", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who got a touchdown?", as:[ ["g","Donald"],["h","Clint"]], hasCorrect:1,timeout:1000},],
[["test","R86"], "FlashSentence", {s:"FICTIONAL: Paul Ruiz and Harold Archer"}, "DashedSentence", {s:"Paul saw Harold stealing money from the bank and Harold"}, "Question", {q:"STANLEY", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"threatened him to keep quiet."},],
[["test","Q87"], "FlashSentence", {s:"FICTIONAL: Don Wiseman and Scott Fowler" }, "DashedSentence", {s:"Don thought that Scott might like some new shoes but Don"}, "Question", {q:"DEAN", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"did not have enough money."},],
[["test","O88"], "FlashSentence", {s:"FAMOUS: Megan Fox and Barbra Streisand"}, "DashedSentence", {s:"Megan borrowed a book from Barbra about the Amarican Civil War but she never gave the book back."}, "Question", {q:"BARBRA", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who never gave the book back?", as:[ ["g","Megan"],["h","Barbra"]], hasCorrect:0,timeout:1000},],
[["test","B89"], "FlashSentence", {s:"FICTIONAL: Vince Matlin and Jon Foley"}, "DashedSentence", {s:"Vince tried to beat Jon in a game of chess but Jon"}, "Question", {q:"VINCE", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"managed to win every time."}, "Question", {q:"Who did someone try to beat?", as:[ ["g","Vince"],["h","Jon"]], hasCorrect:1,timeout:1000},],
[["test","G90"], "FlashSentence", {s:"FAMOUS: Lucy Liu and Selena Gomez"}, "DashedSentence", {s:"Lucy took over from Selena all the household laundry chores and Lucy did a much better job."}, "Question", {q:"SELENA", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who took over the chores from someone?", as:[ ["g","Lucy"],["h","Selena"]], hasCorrect:0,timeout:1000},],
[["test","R91"], "FlashSentence", {s:"FAMOUS: Jan Leon and Marion Brewer"}, "DashedSentence", {s:"Jan challenged Marion to run the fifty meter and she"}, "Question", {q:"MOLLY", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"accepted the task with grace."},],
[["test","N92"], "FlashSentence", {s:"FICTIONAL: David Baker and Ricky Perkins"}, "DashedSentence", {s:"David accidentally scratched Ricky with a sharp pocket knife and he"}, "Question", {q:"RICKY", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"started bleeding from the wound."}, "Question", {q:"Who started bleeding?", as:[ ["g","David"],["h","Ricky"]], hasCorrect:1,timeout:1000},],
[["test","Q93"], "FlashSentence", {s:"FAMOUS: Lisa Rinna and Adriana Lima"}, "DashedSentence", {s:"Lisa bought Adriana a brand new green robe and"}, "Question", {q:"EMILY", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"she now doesn't have any money."},],
[["test","L94"], "FlashSentence", {s:"FICTIONAL: Christopher Hall and Arnold Clark"}, "DashedSentence", {s:"Christopher watched Arnold act in a broadway play and he applauded at the final curtain."}, "Question", {q:"CHRISTOPHER", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who applauded?", as:[ ["g","Christopher"],["h","Arnold"]], hasCorrect:0,timeout:1000},],
[["test","Q95"], "FlashSentence", {s:"FICTIONAL: Leonard Kelton and Andre Robinette"}, "DashedSentence", {s:"Leonard asked Andre to take out the trash and Leonard went to clean the sinks."}, "Question", {q:"ELLIOT", as: [ ["g","Yes"], ["h","No"]], timeout:2500},],
[["test","S96"], "FlashSentence", {s:"FAMOUS: Sofia Coppola and Julianne Hough" }, "DashedSentence", {s:"Sofia frightened Julianne into having a heart attack, and they rode in the ambulance together."}, "Question", {q:"HEATHER", as: [ ["g","Yes"], ["h","No"]], timeout:2500},],
[["test","C97"], "FlashSentence", {s:"FAMOUS: Tara Reid and Mandy Moore"}, "DashedSentence", {s:"Tara went to visit Mandy during the hospital's visiting hours and Tara bought a bouquet of flowers."}, "Question", {q:"TARA", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who went to visit someone?", as:[ ["g","Tara"],["h","Mandy"]], hasCorrect:0,timeout:1000},],
[["test","M98"], "FlashSentence", {s:"FAMOUS: Kirsten Dunst and Heidi Klum"}, "DashedSentence", {s:"Kirsten thought that Heidi was hard at work studying but she"}, "Question", {q:"HEIDI", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"had gone to a movie."}, "Question", {q:"Who had gone to a movie?", as:[ ["g","Kirsten"],["h","Heidi"]], hasCorrect:1,timeout:1000},],
[["test","L99"], "FlashSentence", {s:"FICTIONAL: Al Richards and Steven Mitchell"}, "DashedSentence", {s:"Al expected Steven to arrive on the train but he was not on the train."}, "Question", {q:"AL", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who was not on the train?", as:[ ["g","Al"],["h","Steven"]], hasCorrect:1,timeout:1000},],
[["test","S100"], "FlashSentence", {s:"FAMOUS: Rachel Weisz and Holly Madison" }, "DashedSentence", {s:"Rachel splashed Holly with the green garden hose and they"}, "Question", {q:"ANDREA", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"wrestled about on the lawn."},],
[["test","Q101"], "FlashSentence", {s:"FICTIONAL: Anthony Mercer and Jeremy Brandt" }, "DashedSentence", {s:"Anthony warned Jeremy not to touch the stove and"}, "Question", {q:"KELLAN", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"he turned the stove off immediately."},],
[["test","H102"], "FlashSentence", {s:"FICTIONAL: Adam Doyle and Mel O'Brien"}, "DashedSentence", {s:"Adam aimed a pistol at Mel that looked like a toy but Adam did not pull the trigger."}, "Question", {q:"MEL", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who was a pistol aimed at?", as:[ ["g","Adam"],["h","Mel"]], hasCorrect:1,timeout:1000},],
[["test","N103"], "FlashSentence", {s:"FICTIONAL: Sean Kim and Bob Stein"}, "DashedSentence", {s:"Sean sent Bob to do the grocery shopping and he"}, "Question", {q:"BOB", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"returned with several sacks."}, "Question", {q:"Who returned with several sacks?", as:[ ["g","Sean"],["h","Bob"]], hasCorrect:1,timeout:1000},],
[["test","S104"], "FlashSentence", {s:"FAMOUS: Felicity Huffman and Lena Dunham"}, "DashedSentence", {s:"Felicity repeated the question for Lena to clarify the"}, "Question", {q:"ELLA", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"confusing point and they decided to do more research."},],
[["test","S105"], "FlashSentence", {s:"FICTIONAL: Tommy Pineda and Terrence Rhodes"}, "DashedSentence", {s:"Tommy gave Terrence a ride to his school and they"}, "Question", {q:"BYRON", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"talked about physics and literature."},],
[["test","E106"], "FlashSentence", {s:"FAMOUS: Jessica Simpson and Kelly Osbourne"}, "DashedSentence", {s:"Jessica waited for Kelly in the fancy restaurant lounge and Kelly"}, "Question", {q:"KELLY", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"arrived half an hour late."}, "Question", {q:"Who waited for someone?", as:[ ["g","Jessica"],["h","Kelly"]], hasCorrect:0,timeout:1000},],
[["test","O107"], "FlashSentence", {s:"FAMOUS: Rachel Ray and Eva Longoria"}, "DashedSentence", {s:"Rachel bought a car from Eva that was eight years old and she was pleased with its performance."}, "Question", {q:"EVA", as: [ ["g","Yes"], ["h","No"]], timeout:2500}, "Question", {q:"Who was pleased?", as:[ ["g","Rachel"],["h","Eva"]], hasCorrect:0,timeout:1000},],
[["test","S108"], "FlashSentence", {s:"FICTIONAL: Ian Garcia and Chris Haywood" }, "DashedSentence", {s:"Ian sang an original song for Chris during the long recording session and they"}, "Question", {q:"LARRY", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"worked on harmonizing the tune."},],
[["test","Q109"], "FlashSentence", {s:"FICTIONAL: Pete Moses and Trey Lewis" }, "DashedSentence", {s:"Pete saw that Trey needed money for"}, "Question", {q:"BRYCE", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"the bus but he didn't have the dollar."},],
[["test","M110"], "FlashSentence", {s:"FAMOUS: Jessica Alba and Jodie Foster"}, "DashedSentence", {s:"Jessica found out that Jodie was feeling a little sick but she"}, "Question", {q:"JODIE", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"made a very speedy recovery."}, "Question", {q:"Who made a speedy recovery?", as:[ ["g","Jessica"],["h","Jodie"]], hasCorrect:1,timeout:1000},],
[["test","R111"], "FlashSentence", {s:"FICTIONAL: Andy Wagner and Eric Hanson"}, "DashedSentence", {s:"Andy thought that Eric was starting to"}, "Question", {q:"SAMUEL", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"become sick but he wasn't sick just very exhausted."},],
[["test","R112"], "FlashSentence", {s:"FICTIONAL: Mitch Lane and Jason Bond"}, "DashedSentence", {s:"Mitch passed Jason the ball for a shot but"}, "Question", {q:"TRAVIS", as: [ ["g","Yes"], ["h","No"]], timeout:2500},"DashedSentence", {s:"he passed it to someone else."},],

 
["sr", "__SendResults__", { }],   
    
     ["Code", "Message", {consentRequired: false,
                            html: ["div",
                            ["p", "That's the end of the experiment!"],
                            ["p", "Thanks for participating."],
                            ["p", "Your completion code is PVCJ47."],
                    
                            ],
    
    } ],
         


];
