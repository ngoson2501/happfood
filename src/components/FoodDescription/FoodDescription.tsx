const FoodDescription = () => {
    return (
        <>

            <div className=" space-y-4">
                <details
                    className="group [&_summary::-webkit-details-marker]:hidden"

                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5   py-3 text-gray-900">

                        <p
                            className="text-[25px] font-Inter font-[500] line-clamp-2 truncate whitespace-normal text-clip overflow-hidden"
                            style={{ lineHeight: "1.1" }}
                        >
                            Black Currant Ice Cream bsfdbfj fsbjfs fsbhs fsjbv vsj v sdjsd
                            sdjhbsfd vbsjhbvs bcsj
                        </p>

                        <svg
                            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </summary>

                    <p className=" mt-4  pb-3 leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                        veritatis molestias culpa in, recusandae laboriosam neque
                        aliquid libero nesciunt voluptate dicta quo officiis explicabo
                        consequuntur distinctio corporis earum similique!
                    </p>
                </details>
            </div>

        </>
    )
}

export default FoodDescription