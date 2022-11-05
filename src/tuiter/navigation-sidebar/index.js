// import React from "react";
// import {Link} from "react-router-dom";
// import {useLocation} from "react-router";
//
// const NavigationSidebar = (
//     {
//         active = 'explore'
//     }
// ) => {
//     return (
//         <>
//         <div className="list-group">
//             <a className="list-group-item" href="/">
//                 <i className="fab fa-twitter"/></a>
//             <a className={`list-group-item list-group-item-action
//                     ${active === 'home'?'active':''}`} href="home.html">
//                 <i className="fas fa-home"/>
//                 <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Home</span>
//             </a>
//             <a className={`list-group-item list-group-item-action
//                     ${active === 'explore'?'active':''}`} href="explore.html">
//                 <i className="fas fa-hashtag"/>
//                 <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Explore</span>
//             </a>
//             <a className={`list-group-item list-group-item-action
//                     ${active === 'notifications'?'active':''}`} href="notifications.html">
//                 <i className="fas fa-bell"/>
//                 <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Notifications</span>
//             </a>
//             <a className={`list-group-item list-group-item-action
//                     ${active === 'messages'?'active':''}`} href="messages.html">
//                 <i className="fas fa-envelope"/>
//                 <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Messages</span>
//             </a>
//             <a className={`list-group-item list-group-item-action
//                     ${active === 'bookmarks'?'active':''}`} href="bookmarks.html">
//                 <i className="fas fa-bookmark"/>
//                 <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Bookmarks</span>
//             </a>
//             <a className={`list-group-item list-group-item-action
//                     ${active === 'lists'?'active':''}`} href="lists.html">
//                 <i className="fas fa-list"/>
//                 <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Lists</span>
//             </a>
//             <a className={`list-group-item list-group-item-action
//                     ${active === 'profile'?'active':''}`} href="profile.html">
//                 <i className="fas fa-user"/>
//                 <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Profile</span>
//             </a>
//             <a className={`list-group-item list-group-item-action ps-1
//                     ${active === 'more'?'active':''}`} href="../navigation.html">
//
//                 <span className="fa-stack fa-1x">
//                             <i className="fas fa-circle fa-stack-1x"/>
//                             <i className="fas fa-ellipsis-h fa-stack-1x fa-xs fa-inverse"/>
//                 </span>
//                 <span className="d-done d-xl-inline d-none d-sm-none">More</span>
//             </a>
//         </div>
//         <div className="d-grid mt-2">
//             <a href="tuit.html"
//                 className="btn btn-primary btn-block rounded-pill">
//                 Tweet</a>
//         </div>
//         </>
//
//     );
// };
// export default NavigationSidebar;

import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = ({act = "home"}) => {

    const {pathname} = useLocation();

    const paths = pathname.split('/')
    const active = paths[2];
    console.log("active value")
    console.log(active)
    return (
        <div>
            <div className="list-group">
                <span className="list-group-item d-flex"><span className="d-none d-xl-block">Tuiter</span></span>
                
                <Link to="/tuiter/home" className={`list-group-item d-flex
                            ${active === "" || typeof active === "undefined" || 
                              active === 'home'?'active':''}`}>
                    <i className="bi bi-house pe-2"/><span className="d-none d-xl-block">Home</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item d-flex 
                            ${active === 'explore'?'active':''}`}>
                    <i className="bi bi-hash pe-2"/><span className="d-none d-xl-block">Explore</span>
                </Link>
                <Link to="/" className="list-group-item d-flex">
                    <i className="bi bi-asterisk pe-2"/><span className="d-none d-xl-block">Labs</span>
                </Link>
                <Link to="/tuiter/notifications" className={`list-group-item d-flex
                            ${active === 'notifications'?'active':''}`}>
                    <i className="bi bi-bell pe-2"/><span className="d-none d-xl-block">Notifications</span>
                </Link>
                <Link to="/tuiter/messages" className={`list-group-item d-flex
                            ${active === 'messages'?'active':''}`}>
                    <i className="bi bi-envelope pe-2"/><span className="d-none d-xl-block">Messages</span>
                </Link>
                <Link to="/tuiter/bookmarks" className={`list-group-item d-flex
                            ${active === 'bookmarks'?'active':''}`}>
                    <i className="bi bi-bookmark pe-2"/><span className="d-none d-xl-block">Bookmarks</span>
                </Link>
                <Link to="/tuiter/lists" className={`list-group-item d-flex
                            ${active === 'lists'?'active':''}`}>
                    <i className="bi bi-list pe-2"/><span className="d-none d-xl-block">Lists</span>
                </Link>
                <Link to="/tuiter/profile" className={`list-group-item d-flex 
                            ${active === 'profile'?'active':''}`}>
                    <i className="bi bi-person pe-2"/><span className="d-none d-xl-block">Profile</span>
                </Link>
                <Link to="/tuiter/more" className={`list-group-item d-flex
                            ${active === 'more'?'active':''}`}>
                    <i className="bi bi-three-dots pe-2"/><span className="d-none d-xl-block">More</span>
                </Link>
            </div>
            <button className="mt-2 bg-primary text-white rounded-pill w-100 border-0"> Tweet</button>
        </div>
    );
};
export default NavigationSidebar;