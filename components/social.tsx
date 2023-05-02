import * as React from "react"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "./theme-toggle"
import { buttonVariants } from "@/components/ui/button"

export function Social() {
  return (
    <div className="flex flex-1 items-center justify-end space-x-4">
      <nav className="flex items-center space-x-1">
        <Link
          href={siteConfig.links.discord}
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            <Icons.discord className="h-5 w-5" />
            <span className="sr-only">Discord</span>
          </div>
        </Link>
        <Link
          href={siteConfig.links.twitter}
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            <Icons.twitter className="h-5 w-5 fill-current" />
            <span className="sr-only">Twitter</span>
          </div>
        </Link>


        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            <Icons.gitHub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </div>
        </Link>
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
        >
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            <Icons.docs className="h-5 w-5" />
            <span className="sr-only">Docs</span>
          </div>
        </Link>
        <ThemeToggle />
      </nav>
    </div>
  )
}
