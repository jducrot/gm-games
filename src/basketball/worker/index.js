// @flow

import deionWorker from "../../deion/worker";
import * as constants from "../common/constants";
import GameSim from "./core/GameSim";
import player from "./core/player";
import season from "./core/season";
import team from "./core/team";
import util from "./util";
import views from "./views";

// The names were generated by tools/names.js, you probably don't want to edit them by hand.
// If the list of countries changes, update the fake age code in getPlayerFakeAge.js!
//
// This weird conditional require is so Karma doesn't crash when using the big names file.
const names =
    process.env.NODE_ENV === "test"
        ? require("../../deion/worker/data/names-test.json") // eslint-disable-line
        : require("./data/names.json"); // eslint-disable-line

(async () => {
    await deionWorker({
        overrides: {
            constants,
            core: {
                GameSim,
                player,
                season,
                team,
            },
            names,
            util,
            views,
        },
    });
})();
