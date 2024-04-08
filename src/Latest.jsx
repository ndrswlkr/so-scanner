import { For } from "solid-js";
import { matches } from "./lib/storage";
 function Latest() {

    return (
        <div>
            <h3>
                Latest
                </h3>
        <ul>
        <For each={matches}>
        {(match) => (
            <li>{match}</li>
        )}
        </For>
        </ul>

        </div>
    );
}
    export default Latest;