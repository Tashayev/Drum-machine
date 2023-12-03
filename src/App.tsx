import './styles/styles.scss'
import Buttons from "./Components/Buttons.tsx";
import Panel from "./Components/Panel.tsx";
import React from "react";
import {Provider} from "./Components/BankContext.tsx";

function App(): React.ReactElement {
  return (
    <Provider >
        <div  id="drum-machine">
            <div id="display" className="container">
                <Buttons />
                <Panel/>
                <div className="label">
                    <h5>Make some noise</h5>
                </div>
            </div>
        </div>

    </Provider>
  )
}

export default App
