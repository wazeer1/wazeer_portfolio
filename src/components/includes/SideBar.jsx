import React from "react";
import styled from "styled-components";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaUserAlt, FaPaintBrush } from "react-icons/fa";
import { MdOutlineInsertComment ,MdContactMail} from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const navigate = useNavigate()
    return (
        <Cover>
            <MenuIcon>
                <HiMenuAlt2 color="white" fontSize="40px" />
            </MenuIcon>
            <MenuItems>
                <ul>
                    <li onClick={()=>navigate('/')}>
                        <FaUserAlt color="white" fontSize="25px" />
                        <p>ABOUT</p>
                    </li>
                    <li onClick={()=>navigate('/resume')}>
                        <CgNotes color="white" fontSize="25px" />
                        <p>RESUME</p>
                    </li>
                    <li onClick={()=>navigate('/works')}>
                        <FaPaintBrush color="white" fontSize="25px"/>
                        <p>WORKS</p>
                    </li>
                    <li onClick={()=>navigate('/blog')}>
                        <MdOutlineInsertComment color="white" fontSize="25px"/>
                        <p>BLOG</p>
                    </li>
                    <li onClick={()=>navigate('/contact')}>
                        <MdContactMail color="white" fontSize="25px"/>
                        <p>CONTACT</p>
                    </li>
                </ul>
            </MenuItems>
        </Cover>
    );
};

export default SideBar;

const Cover = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-right: 20px;
`;
const MenuIcon = styled.div`
    width: 72px;
    height: 72px;
    color: #fff;
    cursor: pointer;
    background-color: var(--secondary-color);
    margin-bottom: 15px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const MenuItems = styled.div`
    ul {
        display: flex;
        flex-direction: column;
        border-radius: 6px;
        overflow: hidden;
        /* gap: 10px; */
        li {
            width: 72px;
            height: 72px;
            background-color: var(--secondary-color);
            display: flex;
            cursor: pointer;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: relative;
            color: #fff;
            p {
                font-size: 10px;
                color: #fff;
                font-weight: 600;
                margin-top: 5px;
            }
            &::after {
                content: "";
                position: absolute;
                width: 100%;
                height: 1px;
                background: linear-gradient(
                    to right,
                    var(--secondary-color),
                    #eee
                );
                left: 0;
                bottom: 0;
            }
            &:last-child {
                &::after {
                    display: none;
                }
            }
        }
    }
`;
