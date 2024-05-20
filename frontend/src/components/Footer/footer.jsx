import * as React from "react";

function Footer() {
  return (
    <div className="ml-px w-full max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
          <div className="grow max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[78%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9fef98d0665e44292fafd14e4b26146fafcdc6bddf29447da055527304b224c8?apiKey=8c012395c5cb4299bea1bc5247d52e46&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fef98d0665e44292fafd14e4b26146fafcdc6bddf29447da055527304b224c8?apiKey=8c012395c5cb4299bea1bc5247d52e46&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fef98d0665e44292fafd14e4b26146fafcdc6bddf29447da055527304b224c8?apiKey=8c012395c5cb4299bea1bc5247d52e46&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fef98d0665e44292fafd14e4b26146fafcdc6bddf29447da055527304b224c8?apiKey=8c012395c5cb4299bea1bc5247d52e46&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fef98d0665e44292fafd14e4b26146fafcdc6bddf29447da055527304b224c8?apiKey=8c012395c5cb4299bea1bc5247d52e46&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fef98d0665e44292fafd14e4b26146fafcdc6bddf29447da055527304b224c8?apiKey=8c012395c5cb4299bea1bc5247d52e46&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fef98d0665e44292fafd14e4b26146fafcdc6bddf29447da055527304b224c8?apiKey=8c012395c5cb4299bea1bc5247d52e46&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fef98d0665e44292fafd14e4b26146fafcdc6bddf29447da055527304b224c8?apiKey=8c012395c5cb4299bea1bc5247d52e46&"
                    className="w-full rounded-full mix-blend-difference aspect-[1.22]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6dea1db00c34ca994451d6daae784a6d275ab725d3fafcfb8e06ebce5a6aa50?apiKey=8c012395c5cb4299bea1bc5247d52e46&"
                    className="mt-9 ml-9 max-w-full aspect-[7.69] w-[154px] max-md:ml-2.5"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-5 mt-36 text-base font-medium leading-6 text-slate-900 max-md:mt-10">
                  <div className="text-xl font-bold leading-6">Company</div>
                  <div className="mt-6">About Us</div>
                  <div className="mt-5">Careers</div>
                  <div className="mt-5">Blog</div>
                  <div className="mt-5">Pricing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
          <div className="mt-36 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-5 text-base font-medium leading-6 whitespace-nowrap text-slate-900 max-md:mt-10">
                  <div className="text-xl font-bold leading-6">
                    Destinations
                  </div>
                  <div className="mt-7">Marrkech</div>
                  <div className="mt-3">Tanger</div>
                  <div className="mt-3">Fes</div>
                  <div className="mt-3">Marzouga</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col px-5 text-base font-medium max-md:mt-10 max-md:max-w-full">
                  <div className="text-xl font-bold leading-6 text-slate-900 max-md:max-w-full">
                    Join Our Newsletter
                  </div>
                  <div className="flex gap-5 pl-5 mt-7 tracking-tigh leading-[162.5%] max-md:flex-wrap max-md:max-w-full">
  <input
    type="email"
    placeholder="Your email address"
    className="flex-auto py-2 px-3 text-slate-900 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:border-indigo-500"
  />
  <button className="px-14 py-2 text-white bg-blue-400 rounded-r-md shadow-2xl max-md:px-5">
    Subscribe
  </button>
</div>
                  <div className="mt-7 tracking-tight leading-7 text-slate-900 max-md:max-w-full">
                    * Will send you weekly updates for your better
                    <br />
                    tour packages.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
