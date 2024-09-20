const NutritionInformation = () => {
    return (
        <>


            <div className=" space-y-4">
                <details
                    className="group [&_summary::-webkit-details-marker]:hidden"

                >
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5   py-3 text-gray-900">
                        <h2 className="font-medium">Nutrition Information</h2>

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

                    {/* <p className="mt-4 px-4 leading-relaxed text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                veritatis molestias culpa in, recusandae laboriosam neque
                aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
              </p> */}

                    <div className="mt-4  pb-3 leading-relaxed text-gray-700">
                        <table className="w-full text-left text-gray-700">
                            <tbody>
                                <tr className="">
                                    <td className="py-2">Calories</td>
                                    <td className="py-2 text-right">219.9 kcal</td>
                                </tr>
                                <tr className="">
                                    <td className="py-2">Total Fat</td>
                                    <td className="py-2 text-right">10.7 g</td>
                                </tr>
                                <tr className="">
                                    <td className="py-2">Protein</td>
                                    <td className="py-2 text-right">7.9 g</td>
                                </tr>
                                <tr className="">
                                    <td className="py-2">Carbohydrate</td>
                                    <td className="py-2 text-right">22.3 g</td>
                                </tr>
                                <tr className="">
                                    <td className="py-2">Cholesterol</td>
                                    <td className="py-2 text-right">37.4 mg</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </details>
            </div>


        </>
    )
}

export default NutritionInformation