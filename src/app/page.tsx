import menu from "@/data/menu.js";



export default function Menu() {
    return (
      <div className="relative bg-gray-50">
        <main className="lg:relative homeMargin">
          <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-25 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">V</span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  Spicy Kitchen
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                Founded by Chef Vinay Katta, Guntur Spicy Kitchen explores the world of cuisine by changing our entire menu and dining experience a few times a year, each time focusing on a new culinary region, theme, or moment in time. Guntur Spicy Kitchen has received an unprecedented twenty-one 4-star reviews from the Chicago Tribune, a James Beard Award as Best New Restaurant in America and a Michelin star for three consecutive years.
                We look forward to welcoming you at V Spicy Kitchen.
              </p>
        
              
            </div>
          </div>
          <div className="relative w-full h-64 sm:h-72 md:h-96 hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="/images/HomePage.jpg"
              alt=""
            />
           
          </div>
        </main>
      </div>
    );
  }
