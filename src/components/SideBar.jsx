import React, { useState } from "react";
import '../style.css'
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

import { GiShoulderArmor, GiAtomicSlashes } from "react-icons/gi";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiMovie2Fill } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import JarvisWBack from '../assets/sounds/jarvisWback.mp3'
import Armormenu from '../assets/sounds/armormenu.mp3'
import useSound from 'use-sound';
import Settings from "./Settings";
const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const [menuCollapse, setMenuCollapse] = useState(true)

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
    }

    const [playbackRate, setPlaybackRate] = React.useState(1);
    const [play] = useSound(JarvisWBack, {
        playbackRate,
    });

    const [playbackRate2, setPlaybackRate2] = React.useState(1);
    const [play2] = useSound(Armormenu, {
        playbackRate,
    });

    const Armor = () => {
        play2();
    };

    const handleClick = () => {
        play();
    };
    return (
        <div className="sidebarX">
            <div id="header">
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            <p>{menuCollapse ? "STARK" : "STARK INDUSTRY"}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {menuCollapse ? (<FiArrowRightCircle />) : (<FiArrowLeftCircle />)}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="disk">
                            <a href="#home">
                                <MenuItem active="true" icon={<FiHome />}>{menuCollapse ? ("") : ("Home")}</MenuItem>
                            </a>
                            <a href="#catego">
                                <MenuItem onClick={Armor} icon={<GiShoulderArmor />}>{menuCollapse ? ("") : ("Armors")}</MenuItem>
                            </a>
                            <a href="#jarvis">
                                <MenuItem onClick={handleClick} icon={<GiAtomicSlashes />}>{menuCollapse ? ("") : ("Jarvis")}</MenuItem>
                            </a>
                            <a href="#movies">
                                <MenuItem icon={<RiMovie2Fill />}>{menuCollapse ? ("") : ("Movies")}</MenuItem>
                            </a>
                            <MenuItem onClick={togglePopup} icon={<BiCog />}>{menuCollapse ? ("") : ("Settings")}</MenuItem>
                            {isOpen && <Settings handleClose={togglePopup} />}
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter className='sidebar-footer'>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>{menuCollapse ? ("") : ("Logout")}</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </div>
    );
}

export default SideBar;