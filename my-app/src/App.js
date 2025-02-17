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


// import rivehover from './images/rivehover.png';
import './App.css';
import * as rive from "@rive-app/canvas";

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
    <div className="App" style={{backgroundColor: "black"}}>
      {/* <header className="App-header"> */}

      <svg className="svgwindow" fill = "true"
                 width="100%" height={0} aria-label="loading screen">
                  {/* Idk why I had to put this svg window here but it got rid of some of the annoying white space at the top of the page */}
      </svg>
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
  );
}

export default App;
