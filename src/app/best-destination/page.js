export default function BestDestination() {
  return (
    <>
      <div className="w-full min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-[#526b5c]">
        <div className="flex justify-center items-center flex-col pt-4">
          <h2 className="text-4xl font-bold text-white flex items-center justify-center">
            The Best Destination
          </h2>

          <p className="mt-2 text-white max-w-1/2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="grid grid-cols-1 pt-8 h-fit gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
          <a href="#" className="bg-white p-8 rounded-lg">
            <img
              alt=""
              src="/destination.jpeg"
              className="max-w-full h-80 object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
              Lorem, ipsum dolor.
            </h3>

            <p className="mt-2 max-w-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              reiciendis sequi ipsam incidunt.
            </p>
          </a>
          <a href="#" className="bg-white p-8 rounded-lg">
            <img
              alt=""
              src="/destination.jpeg"
              className="max-w-full h-80 object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
              Lorem, ipsum dolor.
            </h3>

            <p className="mt-2 max-w-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              reiciendis sequi ipsam incidunt.
            </p>
          </a>
          <a href="#" className="bg-white p-8 rounded-lg">
            <img
              alt=""
              src="/destination.jpeg"
              className="max-w-full h-80 object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
              Lorem, ipsum dolor.
            </h3>

            <p className="mt-2 max-w-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              reiciendis sequi ipsam incidunt.
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
