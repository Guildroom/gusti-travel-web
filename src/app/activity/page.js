export default function Activity() {
  return (
    <>
      <div className="w-full min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
        <div className="flex justify-center items-center flex-col pt-4">
          <h2 className="text-4xl font-bold text-gray-900 flex items-center justify-center">
            What Activity you looking for
          </h2>

          <p className="mt-2 text-gray-700max-w-1/2 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>

        <div className="w-full pt-8">
          <div className="flex justify-center items-center border-gray-700">
            <label htmlFor="Email" className="relative w-full lg:w-3/4">
              <input
                type="email"
                id="Email"
                placeholder=""
                className="peer mt-0.5 w-full h-10 rounded-xl pl-2 border-gray-700 border-solid border-2 shadow-sm sm:text-m"
              />

              <span className="absolute inset-y-3 start-3 -translate-y-5 bg-[#f6f6f6] text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5">
                Search Activity
              </span>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 pt-8 h-fit gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-4 md:gap-8">
          <a href="/activity/details" className="bg-teal-800  p-8 rounded-lg">
            <h3 className=" text-lg font-bold text-white sm:text-xl">
              Lorem, ipsum dolor.
            </h3>

            <img
              alt=""
              src="/destination.jpeg"
              className=" mt-4 max-w-full h-80 object-cover sm:h-80 lg:h-64"
            />

            <p className="mt-2 max-w-sm text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              reiciendis sequi ipsam incidunt.
            </p>
          </a>
          <a href="/activity/details" className="bg-teal-800  p-8 rounded-lg">
            <h3 className=" text-lg font-bold text-white sm:text-xl">
              Lorem, ipsum dolor.
            </h3>

            <img
              alt=""
              src="/destination.jpeg"
              className=" mt-4 max-w-full h-80 object-cover sm:h-80 lg:h-64"
            />

            <p className="mt-2 max-w-sm text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              reiciendis sequi ipsam incidunt.
            </p>
          </a>
          <a href="/activity/details" className="bg-teal-800  p-8 rounded-lg">
            <h3 className=" text-lg font-bold text-white sm:text-xl">
              Lorem, ipsum dolor.
            </h3>

            <img
              alt=""
              src="/destination.jpeg"
              className=" mt-4 max-w-full h-80 object-cover sm:h-80 lg:h-64"
            />

            <p className="mt-2 max-w-sm text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              reiciendis sequi ipsam incidunt.
            </p>
          </a>
          <a href="/activity/details" className="bg-teal-800  p-8 rounded-lg">
            <h3 className=" text-lg font-bold text-white sm:text-xl">
              Lorem, ipsum dolor.
            </h3>

            <img
              alt=""
              src="/destination.jpeg"
              className=" mt-4 max-w-full h-80 object-cover sm:h-80 lg:h-64"
            />

            <p className="mt-2 max-w-sm text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              reiciendis sequi ipsam incidunt.
            </p>
          </a>
          <a href="/activity/details" className="bg-teal-800  p-8 rounded-lg">
            <h3 className=" text-lg font-bold text-white sm:text-xl">
              Lorem, ipsum dolor.
            </h3>

            <img
              alt=""
              src="/destination.jpeg"
              className=" mt-4 max-w-full h-80 object-cover sm:h-80 lg:h-64"
            />

            <p className="mt-2 max-w-sm text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              reiciendis sequi ipsam incidunt.
            </p>
          </a>
          <a href="/activity/details" className="bg-teal-800  p-8 rounded-lg">
            <h3 className=" text-lg font-bold text-white sm:text-xl">
              Lorem, ipsum dolor.
            </h3>

            <img
              alt=""
              src="/destination.jpeg"
              className=" mt-4 max-w-full h-80 object-cover sm:h-80 lg:h-64"
            />

            <p className="mt-2 max-w-sm text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              reiciendis sequi ipsam incidunt.
            </p>
          </a>
          <a href="/activity/details" className="bg-teal-800  p-8 rounded-lg">
            <h3 className=" text-lg font-bold text-white sm:text-xl">
              Lorem, ipsum dolor.
            </h3>

            <img
              alt=""
              src="/destination.jpeg"
              className=" mt-4 max-w-full h-80 object-cover sm:h-80 lg:h-64"
            />

            <p className="mt-2 max-w-sm text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              reiciendis sequi ipsam incidunt.
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
