import ThemeSwitch from "@/components/ui/ThemeSwitch";

type LayoutAppProps = {
  children: React.ReactElement | React.ReactNode;
};

const LayoutApp = ({ children }: LayoutAppProps) => {
  return (
    <div className="App">
      <div className="min-h-full">
        <nav className="dark:bg-slate-800 border-b dark:border-slate-700 border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0 text-gray-800 dark:text-cyan-400 flex items-center">
                  <svg
                    version="1.1"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                  >
                    <g
                      strokeLinecap="round"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinejoin="round"
                    >
                      <path d="M8,14h-3c-1.105,0 -2,0.895 -2,2v0c0,1.105 0.895,2 2,2h14c1.105,0 2,0.895 2,2v0c0,1.105 -0.895,2 -2,2h-4"></path>
                      <path d="M19.2426,3.75736c2.34315,2.34315 2.34315,6.14214 0,8.48528c-2.34315,2.34315 -6.14214,2.34315 -8.48528,1.77636e-15c-2.34315,-2.34315 -2.34315,-6.14214 -1.77636e-15,-8.48528c2.34315,-2.34315 6.14214,-2.34315 8.48528,0"></path>
                      <path d="M15,5v1"></path>
                      <path d="M15,10v1"></path>
                      <path d="M18,8h-1"></path>
                      <path d="M13,8h-1"></path>
                    </g>
                    <path fill="none" d="M0,0h24v24h-24Z"></path>
                  </svg>
                  <span className="font-thin pl-2 dark:text-white">
                    Nomination
                  </span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <ThemeSwitch />
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <ThemeSwitch />
              </div>
            </div>
          </div>
        </nav>

        <main className="dark:bg-slate-900">
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 sm:px-0 grid grid-cols-3 gap-5">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LayoutApp;
