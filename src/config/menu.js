import {PATH_ABOUT, PATH_FEEDBACK, PATH_PLAYERS_STATS, PATH_STATS, PATH_TOURNEY_STATS} from "./config";

export default [
    { name: "About", link: PATH_ABOUT },
    { name: "Feedback", link: PATH_FEEDBACK, },
    {
        name: "Stats",
        link: PATH_STATS,

        onMouseOver: (e, handleMouseOverOnMenuItem) => handleMouseOverOnMenuItem(e),
        "aria-owns": function (childMenuAnchor) { return childMenuAnchor ? this.name : undefined },
        "aria-haspopup": (childMenuAnchor) => childMenuAnchor ? true : undefined,

        children: [
            { name: "Player stats", link: PATH_PLAYERS_STATS, },
            { name: "Tourney stats", link: PATH_TOURNEY_STATS, },
        ]
    }
]
