import menu from "@/data/menu.js";


export async function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    })
}

export function getMenu() {
    const items = menu.map(item =>{
        item.slug =item.Price;
    })

    return menu;
  }