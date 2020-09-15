import { faBookmark, faCloud, faCoffee, faComment, faGamepad, faHeadphones, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import Memo from './Memo/Memo';
import Cloud from './Cloud/Cloud';
import Game from './Game/Game';
import Bookmark from './Bookmark/Bookmark';
import Music from './Music/Music,';
import Coffee from './Coffee/Coffee';


interface RouteTypes {
    name: string,
    path: string,
    component: React.FC<{offset: number}>, 
    icon: IconDefinition,
};


const RouteTable : RouteTypes[] = [
    
    { name: "COFFEE",       path: "/coffee",        component: Coffee,      icon: faCoffee       },
    { name: "MEMO",         path: "/memo",          component: Memo,        icon: faComment      },
    { name: "CLOUD",        path: "/cloud",         component: Cloud,       icon: faCloud        },
    { name: "GAME",         path: "/game",          component: Game,        icon: faGamepad      },
    { name: "BOOKMARK",     path: "/bookmark",      component: Bookmark,    icon: faBookmark     },
    { name: "MUSIC",        path: "/music",         component: Music,       icon: faHeadphones   },

];

export default RouteTable;