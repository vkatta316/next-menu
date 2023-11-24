import { getMenu } from "@/utils";
import Image from "next/image";
import Link from "next/link";


export function MenuItems(){

    const menu = getMenu();
    return (
        <>
        <div className="content-section-title">Menu</div>
             <div className="content-list">
            { menu.map(item =>
                <div className="content-item" key={item.slug}>
                    <div className="content-item__image-container">
                    <Image 
                        src={item.image} 
                        style={{objectFit: "cover"}}
                        sizes="(max-width: 768px)"
                        fill={true}
                        alt={item.name} 
                    />
                </div>
            <div className="content-item__header">
              <div>{item.name}</div>
              <div>{item.description}</div>
              <Link href={`/menu/${item.slug}`}>See More</Link>
            </div>

          </div>
        )}
      </div>
        </>

    )
}