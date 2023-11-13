/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RQVLUutrABp
 */
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Why Nike Should Use Vercel for Next.js Deployments
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl">
                Discover the benefits of deploying your Next.js applications on Vercel.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100 flex flex-col items-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-4 lg:gap-12 xl:grid-cols-4">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Scalability</h2>
                <p className="max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With Vercel, scale your application seamlessly to handle any traffic volume. No need to manage
                  infrastructure or upgrade hardware.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Performance</h2>
                <p className="max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Vercel ensures your Next.js applications are served from the edge, close to your users, for optimal
                  loading times and a great user experience.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Developer Experience</h2>
                <p className="max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Enjoy a streamlined developer experience with Vercel's integrated tooling. Deploy directly from Git,
                  preview every commit, and more.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Next.js Expertise</h2>
                <p className="max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With Vercel Enterprise, Nike will have access to the Vercel & Core Next.js teams and our extensive Next.js expertise.
                  This includes personalized support and guidance for all of Nike&apos;s Next.js projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Ready to Get Started?
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl">
                Join the many companies who have made the switch. Start deploying with Vercel today.
              </p>
            </div>
            <Link href="https://vercel.com/contact/sales"
                  className="bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50"
                  variant="default">
                Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

