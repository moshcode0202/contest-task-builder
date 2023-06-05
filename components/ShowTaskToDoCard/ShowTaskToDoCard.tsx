import React, { useEffect, useState } from 'react';
import Vertical6DotsIcon from '../Icons/Vertical6DotsIcon';
import Link from 'next/link';

const ShowTaskToDoCard = ({ index, platform, task }: any) => {
    const formattedTask = task
        .split('_')
        .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    const formattedPlatform = platform
        .split('_')
        .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <div className="px-[17px] pl-6 py-3 mb-3 flex bg-white border-dashed shadow-[0_2px_4px_0_#f9f9ff] items-center rounded-[10px] relative group">
            <div className="handle px-1 absolute top-1/2 -translate-y-1/2 left-1 hidden group-hover:block cursor-pointer">
                <Vertical6DotsIcon />
            </div>
            <div className="h-[27px] w-[27px] mr-3 bg-green text-center rounded-full flex-none">
                <p className="text-[13px] font-bold text-white leading-[27px]">{index}</p>
            </div>
            <div className="text-[13px] truncate font-semibold leading-6 text-black mr-2">
                <div>
                    {formattedTask} On {formattedPlatform}
                </div>
            </div>
            <div aria-label="" data-microtip-position="top" role="tooltip" className="float-none ml-auto shrink-0">
                <Link
                    href=""
                    className="block px-4 py-[5px] rounded-[14px] bg-white border border-[#e7e7f0] text-center text-xs font-bold text-black hover:bg-green hover:text-white hover:border-green transition-colors duration-300 max-w-[120px] truncate capitalize"
                >
                    {formattedTask}
                </Link>
            </div>
        </div>
    );
};

export default ShowTaskToDoCard;
