import React, { useEffect } from "react";
import { useState } from "react";
import logo from './logo.svg';
import finderhover from './images/finderhover.png';
import findersubmenu from './images/findersubmenu.png';
import findersubmenuhover from './images/findersubmenuhover.png';
import googledocs from './images/googledocs.png';
import googledocshover from './images/googledocshover.png';
import googledocssubmenu from './images/googledocssubmenu.png';
import rivehover from './images/rivehover.png';
import rivesubmenu from './images/rivesubmenu.png';
import rivesubmenuhover from './images/rivesubmenuhover.png';

import inputtable from './images/inputtable.png';
import output1 from './images/output1.png';
import output2 from './images/output2.png';
import output3 from './images/output3.png';

import mouse1 from './images/mouse.png';
import mouse2 from './images/mouse2.png';
import keyboard1 from './images/keyboard.png';
import keyboard2 from './images/keyboard2.png';

import redesigndefault from './images/default.png';
import redesignhovered from './images/hovered.png';

import rattycookersketch from './images/cooker.jpg';
import georgenothy from './images/georgenothy.png';
import lukewarm from './images/lukewarm.png';
import storyboard1 from './images/storyboard_1.jpg';
import storyboard2 from './images/storyboard_2.jpg';


// import rivehover from './images/rivehover.png';
import './App.css';
import * as rive from "@rive-app/canvas";

function accesscomponents(){
  return <div className="App" style={{backgroundColor: "black"}}>
      {/* <header className="App-header"> */}

      <svg className="svgwindow" fill = "true"
                 width="100%" height={0} aria-label="loading screen">
                  {/* Idk why I had to put this svg window here but it got rid of some of the annoying white space at the top of the page */}
      </svg>

      <iframe style={{border: "none"}} width="800" height="500" src="https://rive.app/s/Ad65nUpLXkSd33WXGoFQzQ/embed?runtime=rive-renderer" allowfullscreen allow="autoplay"></iframe>

          <p style = {{fontSize:"32px", color:"hsl(0 100% 100%)", fontFamily:"EB Garamond", fontWeight:"bold"}}>
            <br/>
            ACCESSIBLE COMPONENT DESIGN
          </p>

          {/* <foreignObject x="0" y="175" width="100%" height="8000" > */}
              <p style={{color:"white", fontFamily:"Courier",  marginLeft: "100px", marginRight: "100px", textAlign: "left"}}>
              For this assignment, I chose to study the design of the humble dropdown menu.
              <br/>
              <br/>
              Slim, sleek, and seldom noticed, the dropdown menu forms the backbone of many modern software applications.
              <br/>
              <br/>
              For this assignment, I explored how three different applications implement the dropdown menu: Finder, Google Docs, and Rive Animator. 
              Finder is a commonly used utility application for Mac that manages local file organization and filesearch. Google Docs is an online word processor that lets users create and 
              I started out by exploring each program via mouse and keyboard, keyboard only, and touchscreen.
              </p>
              <img src={finderhover} width = "400" className="screenshot" alt="logo" />
              <img src={findersubmenu} width = "400" className="screenshot" alt="logo" />
              <img src={findersubmenuhover} width = "400" className="screenshot" alt="logo" />
              <p style={{color:"white", fontFamily:"Courier",  marginLeft: "100px", marginRight: "100px", textAlign: "middle"}}>
                <i>Finder's dropdown menu UI</i>
                <br/>
                <br/>
              </p>

              <img src={googledocs} width = "400" className="screenshot" alt="logo" />
              <img src={googledocshover} width = "400" className="screenshot" alt="logo" />
              <img src={googledocssubmenu} width = "400" className="screenshot" alt="logo" />
              <p style={{color:"white", fontFamily:"Courier",  marginLeft: "100px", marginRight: "100px", textAlign: "middle"}}>
                <i>Google docs' dropdown menu UI</i>
                <br/>
                <br/>
              </p>

              <img src={rivehover} width = "400" className="screenshot" alt="logo" />
              <img src={rivesubmenu} width = "400" className="screenshot" alt="logo" />
              <img src={rivesubmenuhover} width = "400" className="screenshot" alt="logo" />
              <p style={{color:"white", fontFamily:"Courier",  marginLeft: "100px", marginRight: "100px", textAlign: "middle"}}>
                <i>Rive's dropdown menu UI</i>
                <br/>
                <br/>
              </p>

              <p style={{color:"white", fontFamily:"Courier",  marginLeft: "100px", marginRight: "100px", textAlign: "left"}}>
              I then compiled a table of notes on how each application responded to each type of input, like so:
              </p>

              <img src={inputtable} width = "1000" className="screenshot" alt="logo" />

              <p style={{color:"white", fontFamily:"Courier",  marginLeft: "100px", marginRight: "100px", textAlign: "left"}}>
              After that, I compiled a table of notes on how each application responded to each type of output:
              </p>

              <img src={output1} width = "1000" className="screenshot" alt="logo" />

              <img src={output2} width = "1000" className="screenshot" alt="logo" />

              <img src={output3} width = "1000" className="screenshot" alt="logo" />

              <p style={{color:"white", fontFamily:"Courier",  marginLeft: "100px", marginRight: "100px", textAlign: "left"}}>
              From here, I had enough data to compile a set of state diagrams for mouse and keyboard users interacting with the Finder dropdown menu. 
              Each node in the diagram represents a unique state of the dropdown menu- the user transitions between different states via different mouse and keyboard inputs.
              </p>

              <img src={mouse1} width = "1000" className="screenshot" alt="logo" />

              <p style={{color:"white", fontFamily:"Courier",  marginLeft: "100px", marginRight: "100px", textAlign: "center"}}>
              <i>Mouse State Diagram</i>
              </p>


              <img src={keyboard1} width = "1000" className="screenshot" alt="logo" />

              <p style={{color:"white", fontFamily:"Courier",  marginLeft: "100px", marginRight: "100px", textAlign: "center"}}>
              <i>Keyboard State Diagram</i>
              </p>

              <p style={{color:"white", fontFamily:"Courier",  marginLeft: "100px", marginRight: "100px", textAlign: "left"}}>
              I then created a set of redesigned state diagrams with the tradeoff that when users click a specific menu item, it no longer closes the menu.
              This makes repetitive actions like copying and pasting easier for the user, as they no longer have to re-open the same menu every single time they wish
              to paste- they simply open the menu and click the "paste" option multiple times. 
              The new arrows on the right that have no text label indicate an immediate transition.
              </p>

              <img src={mouse2} width = "1000" className="screenshot" alt="logo" />

              <p style={{color:"white", fontFamily:"Courier",  marginLeft: "100px", marginRight: "100px", textAlign: "center"}}>
              <i>Redesigned Mouse State Diagram</i>
              </p>

              <img src={keyboard2} width = "1000" className="screenshot" alt="logo" />

              <p style={{color:"white", fontFamily:"Courier",  marginLeft: "100px", marginRight: "100px", textAlign: "center"}}>
              <i>Redesigned Keyboard State Diagram</i>
              </p>

              <p style={{color:"white", fontFamily:"Courier",  marginLeft: "100px", marginRight: "100px", textAlign: "left"}}>
              Finally, I created a new, redesigned version of the dropdown menu itself. I designed the files in Rive and then ported them over to Figma as SVG Files.
              </p>

              <img src={redesigndefault} width = "500" className="screenshot" alt="logo" />

              <p style={{color:"white", fontFamily:"Courier",  marginLeft: "100px", marginRight: "100px", textAlign: "center"}}>
              <i>Redesigned Dropdown Menu: Default</i>
              </p>

              <img src={redesignhovered} width = "500" className="screenshot" alt="logo" />

              <p style={{color:"white", fontFamily:"Courier",  marginLeft: "100px", marginRight: "100px", textAlign: "center"}}>
              <i>Redesigned Dropdown Menu: Hovered</i>
              </p>

              <p style={{color:"white", fontFamily:"Courier",  marginLeft: "100px", marginRight: "100px", textAlign: "left"}}>
              
              <b>PART 4: Reflection</b>
              <br/>
              <br/>
              <b>Where did the components you observed do well in terms of usability and accessibility? How have you applied this to your design?</b>
              <br/>
              &nbsp; The components I observed did a great job of compactly organizing menu items in space and highlighting the selected items so that they sufficiently stand out. However, all of the menu items can be visually somewhat hard to distinguish between unless the user can read english.
              <br/>
              <br/>
              <b>Are there accessibility considerations that were not addressed that you accounted for in your own design?</b>
              <br/>
              &nbsp; Yes, the consideration that visually impaired people may not be able to tell which item they have selected because they cannot tell blue from white or black. Or that people who cannot read english/whichever target language the menu is made in will not be able to read the menu items.
              To account for this, I made it so that selected items now bump out a little sideways onscreen, so that people who cannot easily distinguish colors can see it more easily, and so that people in general can detect and track the motion to quickly locate their selection.
              <br/>
              <br/>
              <b>How does the change you’ve made in your own design solve for a “mismatch” in our world? (using the definition from the video)</b>
              <br/>
              &nbsp; This change accounts for a tactile mismatch, aka that users might expect more of a physical/visual analogue to selecting an item, some spatial cue that they are “picking” it out of a list. In the real world, objects don’t typically change color when you are considering using them, but most people can relate to pulling things out of the shelf and inspecting them, the same way my redesigned menu items offset when hovered.
              <br/>
              <br/>
              <b>Going back to Parts 1 and 2, pick from any of the inputs and outputs you’ve observed from a specific application, and address the following in your hand-in: 
              Give two examples of how the accessibility/inaccessibility of those inputs or outputs could also impact users with impairments either positively or negatively, respectively.</b>
              <br/>
              &nbsp; Example 1(Rive, navigation): The dropdown menu is fairly navigable via mouse/keyboard, but is impossible to navigate through the dropdown menu from keyboard/voiceover only, as hitting VO+space, VO+shift+down, or any of the plain arrow keys fails to open the menu itself. Also the number of items that screen reader says the menu contains is inaccurate, which could throw visually impaired users off.
              <br/>
              &nbsp; Example 2(Rive, hotkeys): Rive has specific hotkeys that allow keyboard users to directly select tools from the tools menu without having to open that menu at all. On one hand, this greatly speeds up the process of switching between tools. On the other hand, the fact that hitting a hotkey does not open the menu associated with that hotkey and select the option itself might be a barrier for sight impaired users, since they might want to use an item that doesn’t have a hotkey but is located just below one that does in the menu. A user might try to access that menu item by hitting the hotkey of the item just above it and then hitting the down arrow, but since hitting a hotkey just immediately uses that item and doesn’t pull up any menu, this method of navigation is denied to the user.

              </p>



              


              {/* TODO: Do state model part */}
              {/* TODO: Add reflection */}



              <br></br>
              <iframe style={{border: "none", float: "left", marginLeft: "100px"}} width="375" height="375" src="https://rive.app/s/jst2RTWkaE_RHw7HLrTy1A/embed?runtime=rive-renderer" allowfullscreen allow="autoplay"></iframe>

          <svg className="svgwindow" fill = "true"
                 width="100%" height={0} aria-label="loading screen">
                  {/* Idk why I had to put this svg window here but it got rid of some of the annoying white space at the top of the page */}
      </svg>
      {/* </header> */}
    </div>
}

function personas(){
  return <div className="App" style={{backgroundColor: "black"}}>
      {/* <header className="App-header"> */}

      <svg className="svgwindow" fill = "true"
                 width="100%" height={0} aria-label="loading screen">
                  {/* Idk why I had to put this svg window here but it got rid of some of the annoying white space at the top of the page */}
      </svg>

      <iframe style={{border: "none"}} width="800" height="500" src="https://rive.app/s/Ad65nUpLXkSd33WXGoFQzQ/embed?runtime=rive-renderer" allowfullscreen allow="autoplay"></iframe>

          <p style = {{fontSize:"32px", color:"hsl(0 100% 100%)", fontFamily:"EB Garamond", fontWeight:"bold"}}>
            <br/>
            PERSONAS AND STORYBOARDING
          </p>

          {/* <foreignObject x="0" y="175" width="100%" height="8000" > */}
              <p className="bodyText">
              <b>PART 1: Preparation</b>
              <br/>
              <br/>
              For this assignment, I studied how users interact with the Ratty pasta cooker, also known as the HATCO RAPIDE CUISINE COUNTERTOP INDUCTION RANGE.
              <br/>
              <br/>
              I observed users at the Ratty and took notes, and then interviewed three people on their experience using the
              interface. I asked each interviewee the same four simple questions. 
                <ul>
                  <li>How do you use this machine? What parameters can you change and how do you change them?</li>
                  <li>If you were to write instructions on how to cook pasta using this device, what would you write?</li>
                  <li>If you were to add labels to this device, where would you place them and what would they say?</li>
                  <li>If you could redesign the physical inputs of this interface, is there anything that you would change?</li>
                </ul>                
              </p>
              <img src={rattycookersketch} width = "400" className="screenshot" alt="logo" />
              <p style={{color:"white", fontFamily:"Courier",  marginLeft: "100px", marginRight: "100px", textAlign: "middle"}}>
                <i>An annotated sketch of the Ratty pasta cooker</i>
                <br/>
                <br/>
              </p>

              <p className="bodyText">
              The induction cooker turns on and off in sort of a strange way- the temperature knob must be pushed in in order to turn the device on and off. You can then turn the knob to set the temperature that the cooktop will heat the pan to, and the induction cooktop immediately starts heating up whatever is on it. Note: the induction cooktop does not actually visually change in any sort of way to indicate that heating has started. Clicking the timer button allows you to change the timer duration using the same temperature knob(must provide input within 3 seconds), upon which the timer will automatically start. When the timer runs out, the power will drop to 0 automatically.
              </p>

              <p className="bodyText">
              
              <b>PART 2: Recording Observations</b>
              <br/>
              <br/>
              <b>Write a few sentences or bullets describing the key observations you gained from observing your users. Do not make any assumptions about the users’ behaviors or thought processes. Make sure you note general patterns in their interactions with the interface. How did the users react while using the interface? How does it differ from other users?</b>
              <ul>
                  <li>One user didn’t turn off the burner when they left</li>
                  <li>All three users knew how to use the machine when they arrived at it, aka they correctly turned the machine on, set the temperature, and cooked their pasta</li>
                  <li>Most users cook for about an average of 2-3 minutes</li>
                  <li>None of the users used the timer function on the cooker</li>
                </ul>    
              <b>List your questions in a numbered list and summarize the responses of your interviewed users. Be sure to highlight the main points or important patterns. Your summary should be both concise and informative.</b>
              <ol>
                <li>How do you use this machine? What parameters can you change and how do you change them?</li>
                <li>If you were to write instructions on how to cook pasta using this device, what would you write?</li>
                <li>If you were to add labels to this device, where would you place them and what would they say?</li>
                <li>If you could redesign the physical inputs of this interface, is there anything that you would change?</li>
              </ol>  
              

              {/* INSERT TABLE HERE! */}

              <table style = {{backgroundColor: "bisque", color: "black"}}>
              <tr>
                <th>Name</th>
                <th>Response</th>
              </tr>
              <tr>
                <td>Adrianna</td>
                <td>
                  <ul>
                    <li>The main thing you use on the machine is the knob. You press it to turn it on and turn the dial to change the heat.</li>
                    <li>Put the pan on the hot plate, put  the pasta in the pan, press the button to turn on, wait until graphic appears, turn clockwise to appropriate heat, turn until satisfied, remove and turn off.</li>
                    <li>Next to power button, put a label that says "press". Some people turn it but you need to press it.</li>
                    <li>Maybe suggest a time limit. Never used the clock button so maybe label that.</li>
                  </ul> 
                </td>
              </tr>
              <tr>
                <td>Mohammad</td>
                <td>
                  <ul>
                    <li>To use the machine, put the pasta on the pan, put it to 85, while it’s cooking, move it continuously. Use the spices and mix it thoroughly for 2-3 minutes.</li>
                    <li>Get what you want, put some preliminary ingredients in there. At the machine, set it to the heat you want, 70s to 80s, don’t do it too high, keep turning the pasta, add spices as need until you feel hot that it's enough.</li>
                    <li>Idk, feel like labels are pretty self explanatory. I wouldn’t add anything except for a do not touch on the hot plate bc looks the same when it's off and when it's on.</li>
                    <li>Um, I don't know. The timer isn’t consistent on there so you just need to do it yourself. Find the optimal time for good heated pasta. Maybe add some weight sensor that gives a better estimate of cook time.</li>
                  </ul> 
                </td>
              </tr>
              <tr>
                <td>Kimberly</td>
                <td>
                  <ul>
                    <li>Get pasta, add ingredients, sauce, turn on the stove, get pan, add stuff, mix it around. Click the button down to turn it on, can turn it up to 100, usually keep it at 40, don’t like it when it’s cold but don’t want to burn it. 3-5 minutes. Once done, take it off, turn it off.</li>
                    <li>I'm not sure. I didn’t know how to turn it on at first, so I watched someone else do it before I tried it.</li>
                    <li>I don't know. Maybe label the temperature knob as an on and off button.</li>
                    <li>It could tell you how many minutes you should cook the pasta for, like some sort of timer. [when asked] I didn't know that the machine has a timer function.</li>
                  </ul> 
                </td>
              </tr>
            </table>

            <br/>

            <b>RESPONSE SUMMARY:</b>

            <ul>
              <li>Two users noted that it seems like the knob is just for turning but you actually have to press it.</li>
              <li>One user said to label the hot plate so that people knew it was hot because it doesn’t visually change at all. Turns out it’s an induction cooktop, so the surface itself doesn't get hot, it just heats the pan.</li>
              <li>Two out of three users didn’t know the burner had a timer function, and the third person noted the timer was inconsistent.</li>
              <li>One user didn’t know how to use the machine at first, so they watched someone else use it before trying to use it themselves.</li>
            </ul> 

            <br/>

            <b>PART 3: Personas</b>
              <br/>
              <br/>
              <b>Using the observations and interviews you collected from parts 1 & 2, construct 2 personas by creating a four-quadrant empathy map, 
                describing what users think, feel, say, and do for one archetypal character ​that will represent part of the spectrum of users you observed. </b>

                <br/>
                <br/>

              <b>For each empathy map, also add a description that covers the following:
              Briefly describe the user  (1 sentence headline)
              Point out the interface problems that your personas face. 
              Explain why and how a given persona represents the users of your chosen interface.
              </b>

              <br/>
              <br/>

            <img src={lukewarm} width = "1000" className="screenshot" alt="logo" />

            <br/>
            <br/>

            <b>Description:</b>

            <br/>
            <br/>

            Stressed, sleep deprived, and self conscious, Lukewarm Tomatopaste (a freshman and aspiring econ concentrator) views life as a never-ending series of unpleasant surprises. 

            <br/>

            Lukewarm tends to go into a panic when things don't go as planned, frantically trying random things until something works out. They dread inconveniencing the lives of others.
            The confusing dual-functionality of the pasta cooker, as well as the inacessibility of the timer button will likely confuse Lukewarm and make them second guess themselves.

            <br/>

            This persona represents the stress that users of the ratty pasta cooker may feel, as I noticed that the lines for the pasta machine can become quite long, and that most users
            rarely go over the 2-3 minute cook time(so as to keep the line moving).

            <br/>
            <br/>

            <img src={georgenothy} width = "1000" className="screenshot" alt="logo" />

            <br/>
            <br/>

            <b>Description:</b>

            <br/>
            <br/>

            Cool, confident, and a culinary commander, Georgenothy Thompsonson (a junior and political science major) takes control of any situation he is placed in, moving with determination, regardless of if they are in the right or the wrong.

            <br/>

            Georgenothy is a veteran ratty-goer. The cafeteria is their domain. Georgenothy frequently cooks for themselves at home using their gas range, so the induction cooktops of the ratty
            pasta machine offer little visual feedback compared to the gas burners at home.

            <br/>

            This persona represents the people I observed at the ratty who navigated the pasta machine with ease, who not only used the interface as intended but went above and beyond, shaking spices and cheeses over their pasta with the skill of a venerable artist painting their latest masterpiece.

            <b>PART 4: Storyboards</b>
              <br/>
              <br/>

            For this storyboard, I mapped out a sequence that someone like Lukewarm might experience when using the Ratty pasta cooker.

            <br/>
            <br/>

            <img src={storyboard1} width = "1000" className="screenshot" alt="logo" />

            <img src={storyboard2} width = "1000" className="screenshot" alt="logo" />

            <br/>
            <br/>

            </p>

              


              {/* TODO: Do state model part */}
              {/* TODO: Add reflection */}



              <br></br>
              <iframe style={{border: "none", float: "left", marginLeft: "100px"}} width="375" height="375" src="https://rive.app/s/jst2RTWkaE_RHw7HLrTy1A/embed?runtime=rive-renderer" allowfullscreen allow="autoplay"></iframe>

          <svg className="svgwindow" fill = "true"
                 width="100%" height={0} aria-label="loading screen">
                  {/* Idk why I had to put this svg window here but it got rid of some of the annoying white space at the top of the page */}
      </svg>
      {/* </header> */}
    </div>
}

function App() {
  const [Timer, setTimer] = useState(0);
  useEffect(() => {
    
    const interval = setInterval(() => {
      // Increase the Timer variable regardless of what's going on, since we have animations in all cases
      setTimer((Timer + 0.001) % 1);
    }
    , 10);

     return () => {clearInterval(interval);
    }
})

  return (
    personas()
  );
}

export default App;
