import Image from 'next/image';

const Category_2 = ()=>{
    return(
        <>
        
            <div className="bg-blue-300 w-[150px] h-[190px]">
                <div className="bg-yellow-200 h-3/4">
                    <Image
                         
                         src={`/images/FoodDirectory/Ingredient/Spareribs.jpeg`}
                         alt="Spareribs"
                         width={300}
                         height={300}
                         className="w-full h-full object-cover object-center"
                    />
                </div>
                <div className="bg-red-300 h-1/4 flex justify-center items-center">
                    <p>Thịt lợn - Sườn</p>
                </div>
            </div>
        
        </>
    )
}

export default Category_2