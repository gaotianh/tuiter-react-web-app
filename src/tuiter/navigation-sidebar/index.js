import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <>
        <div className="list-group">
            <a className="list-group-item" href="/">
                <i className="fab fa-twitter"/></a>
            <a className={`list-group-item list-group-item-action
                    ${active === 'home'?'active':''}`} href="home.html">
                <i className="fas fa-home"/>
                <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Home</span>
            </a>
            <a className={`list-group-item list-group-item-action 
                    ${active === 'explore'?'active':''}`} href="explore.html">
                <i className="fas fa-hashtag"/>
                <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Explore</span>
            </a>
            <a className={`list-group-item list-group-item-action  
                    ${active === 'notifications'?'active':''}`} href="notifications.html">
                <i className="fas fa-bell"/>
                <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Notifications</span>
            </a>
            <a className={`list-group-item list-group-item-action  
                    ${active === 'messages'?'active':''}`} href="messages.html">
                <i className="fas fa-envelope"/>
                <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Messages</span>
            </a>
            <a className={`list-group-item list-group-item-action 
                    ${active === 'bookmarks'?'active':''}`} href="bookmarks.html">
                <i className="fas fa-bookmark"/>
                <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Bookmarks</span>
            </a>
            <a className={`list-group-item list-group-item-action  
                    ${active === 'lists'?'active':''}`} href="lists.html">
                <i className="fas fa-list"/>
                <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Lists</span>
            </a>
            <a className={`list-group-item list-group-item-action
                    ${active === 'profile'?'active':''}`} href="profile.html">
                <i className="fas fa-user"/>
                <span className="d-done d-xl-inline d-none d-sm-none">&nbsp;Profile</span>
            </a>
            <a className={`list-group-item list-group-item-action ps-1 
                    ${active === 'more'?'active':''}`} href="../navigation.html">

                <span className="fa-stack fa-1x">
                            <i className="fas fa-circle fa-stack-1x"/>
                            <i className="fas fa-ellipsis-h fa-stack-1x fa-xs fa-inverse"/>
                </span>
                <span className="d-done d-xl-inline d-none d-sm-none">More</span>
            </a>
        </div>
        <div className="d-grid mt-2">
            <a href="tuit.html"
                className="btn btn-primary btn-block rounded-pill">
                Tweet</a>
        </div>
        </>

    );
};
export default NavigationSidebar;