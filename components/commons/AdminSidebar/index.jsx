import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { sidebarOptions } from "./structure";

const AdminSidebar = () => {
    const [expandedOptions, setExpandedOptions] = useState({});
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleOption = (optionName) => {
        setExpandedOptions(prevState => ({
            ...prevState,
            [optionName]: !prevState[optionName]
        }));
    };

    return (
        <aside
            onClick={() => setIsCollapsed(prev => !prev)}
            className={`flex flex-col justify-between h-[calc(100vh-60px)] ${isCollapsed ? 'w-0' : 'w-fit'} border-r border-r-primary pt-24 pb-12 transition-all duration-500 ease-in-out`}
        >
            <nav className={`${isCollapsed ? 'w-0' : 'w-96'} transition-all duration-500 ease-in-out`}>
                <ol>
                    {
                        sidebarOptions.map(option =>
                            <div>
                                <li
                                    key={option.name}
                                    onClick={() => toggleOption(option.name)}
                                    className="w-full text-2xl py-2 pl-2 border-b border-b-secondary bg-primary hover:bg-primaryHover cursor-pointer"
                                >
                                    <Link href={option.path}>{option.name}</Link>
                                </li>
                                <ol
                                    className="overflow-hidden transition-max-height ease-in-out duration-700"
                                    style={{ maxHeight: expandedOptions[option.name] ? '1000px' : '0' }}
                                >
                                    {option.sub?.map(subOption => (
                                        <li
                                            key={subOption.name}
                                            className="w-full text-2xl py-2 pl-2 border-b border-b-secondary bg-submenu hover:bg-primaryHover cursor-pointer"
                                        >
                                            <Link href={subOption.path}>{subOption.name}</Link>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        )
                    }
                </ol>
            </nav>
            <Image
                src="/assets/icons/Logo-color.svg"
                alt="Logo da SouJunior"
                width={128}
                height={26}
            />
        </aside>
    )
};

export default AdminSidebar;