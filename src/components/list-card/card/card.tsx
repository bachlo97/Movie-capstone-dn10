import React from "react";

type Props = {};

export const Card = (props: Props) => {
    return (
        <div className="group w-1/4 cursor-pointer p-2">
            <div>
                <div className="relative">
                    <div
                        className="rounded border bg-cover bg-center bg-no-repeat pt-[147.9%]"
                        style={{
                            backgroundImage:
                                "url(https://movie0706.cybersoft.edu.vn/hinhanh/ke-doc-hanh_gp09.jpg)",
                        }}
                    >
                        <div className="absolute top-0 h-full w-full bg-gradient-to-r from-black to-transparent opacity-0 hover:opacity-100" />
                    </div>
                    <div className="absolute right-3 top-3 w-[54px] cursor-auto rounded-[4px] border-[1px] border-[#1f2e46] bg-[rgba(12,27,54,0.8)] p-0.5 text-center leading-none  text-white">
                        <p className="m-0 text-[20px] font-semibold">10</p>
                        <p className="m-0 flex items-center justify-center">
                            <span>O</span>
                            <span>O</span>
                        </p>
                    </div>
                </div>
                <div className="relative pt-2.5">
                    <div className="min-h-[100px]">
                        <div className="mb-0 max-h-[42px] overflow-hidden text-ellipsis text-[16px] font-medium leading-5 text-black">
                            <p className="font-semibold">
                                <span className="mr-[8px] inline-block min-w-[33px] rounded-[4px] bg-[#fb4226] px-[5px] pt-[1px] text-center text-[14px] leading-[19px] text-white">
                                    C18
                                </span>
                                Nghề siêu dễ
                            </p>
                        </div>
                        <p className="pt-2">
                            <span className="pt-[5px] text-[14px] text-[#4a4a4a]">
                                120 phút - Tix 10
                            </span>
                        </p>
                    </div>
                    <div className="cursor-pointer">
                        <a
                            className=" absolute left-0 top-[7px] block w-full rounded-[4px] p-[10px] text-center font-semibold text-white no-underline opacity-0 group-hover:opacity-100"
                            href="/phim/10606"
                            style={{ background: "rgb(251, 66, 38)" }}
                        >
                            MUA VÉ
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
