import type { CustomFlowbiteTheme } from 'flowbite-react';

export const customTheme: CustomFlowbiteTheme['sidebar'] = {
  root: {
    "base": "h-full",
    "collapsed": {
      "on": "w-16",
      "off": "w-64"
    },
    "inner": "h-full overflow-y-auto overflow-x-hidden rounded  text-base font-normal text-gray-100- py-4 px-3 "
  },
  collapse: {
    "button": "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-100 transition duration-75 hover:bg-white ",
    "icon": {
      "base": "h-6 w-6 text-gray-100 transition duration-75 group-hover:text-gray-100",
      "open": {
        "off": "",
        "on": "text-gray-100"
      }
    },
    label: {
      "base": "ml-3 flex-1 whitespace-nowrap text-left",
      "icon": {
        "base": "h-6 w-6 transition ease-in-out delay-0",
        "open": {
          "on": "rotate-180",
          "off": ""
        }
      }
    },

  },
  
  item: {
    "base": "flex items-center justify-center rounded-lg p-2 text-base font-normal text-white hover:bg-purple-700",
    "active": "bg-purple-600",
    "collapsed": {
      "insideCollapse": "group w-full pl-8 transition duration-75",
      "noIcon": "font-bold"
    },
   
    icon: {
        "base": "h-6 w-6 flex-shrink-0  transition duration-75  ",
        "active": ""
      },
  },
 


};

