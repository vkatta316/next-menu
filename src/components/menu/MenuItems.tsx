import { getMenu } from "@/utils";
import Image from "next/image";
import Link from "next/link";


export function MenuItems(){

    const menu = getMenu();
    return (
        <>
        <div className="mb-4">
            
        </div>
        <div className="mb-14">
             <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                {menu.map(item => (
                    <div
                        key={item.slug}
                        data-tip
                        className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
                    >
                         <div className="bg-gray-200 h-56 group-hover:opacity-75 sm:aspect-none relative">
                            <Image 
                                src={item.image} 
                                style={{objectFit: "cover"}}
                                sizes="(max-width: 768px)"
                                fill={true}
                                alt={item.name} 
                            />
                        </div>
                )       <div className="flex-1 p-4 space-y-2 flex flex-col">
                             <h3 className="text-sm font-medium text-gray-900"> 
                             <Link href={`/menu/${item.slug}`}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {item.name}
                            </Link>
                             </h3>
                             <p className="text-sm text-gray-500">{item.description}</p>
                             <div className="flex-1 flex flex-col justify-end">
                                <a
                                    target="_"
                                    href={`/menu/${item.slug}`}
                                    className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
                                    >
                                    See Price
                                </a>
                             </div>

                        </div>
                 </div>
                ))}
            </div>
        </div>
             
        </>

    )
}