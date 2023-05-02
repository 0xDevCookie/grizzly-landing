import { siteConfig } from "@/config/site";
import { Social } from "./social";

export default function SiteFooter() { 
    // there is a bug under screen size xl idk why wtf
    return (
        <footer aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Solutions</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {siteConfig.navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {siteConfig.navigation.support.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {siteConfig.navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {siteConfig.navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <img
                            className="h-7"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="grizzly icon"
                        />
                        <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                            Making the world a better place through constructing elegant hierarchies.
                        </p>
                        <div className="flex space-x-6">
                            <Social />
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-900/10 dark:border-gray-100/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-500">&copy; 2020 Grizzly Finance, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
