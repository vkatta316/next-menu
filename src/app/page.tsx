
import menu from "@/data/menu.js";
import Image from 'next/image'

export default function Home() {

  return (
    <>
        <div className="content-section-title">Menu</div>
      <div className="content-list">
        { menu.map(item =>
          <div className="content-item" key={item.id}>
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
            </div>

          </div>
        )}
      </div>
    </>
  )
}