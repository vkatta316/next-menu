
import { getMenu } from "@/utils";

export default function menuDetail({params}) {

    const menu = getMenu();

    return (
      <>
            <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className="text-lg font-medium text-gray-100"> 
                Price of the item is : {params.slug}
                </h3>
            </div>    
        
      </>
    )
  }