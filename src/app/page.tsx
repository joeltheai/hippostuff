import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

const perks = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    description: "Get your digital assets instantly after purchase",
  },
  {
    name: "quality might be guranteed",
    icon: CheckCircle,
    description: "We try our best here to ensure teh quality i guess",
  },
  {
    name: "Bad for the planet",
    icon: Leaf,
    description: "We never pledge to do anything for the environment",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your market place for high quality{" "}
            <span className=" py-2 font-bold bg-gradient-to-r from-pink-600 via-yellow-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              digital Stuff
            </span>
            .
          </h1>
          <p className=" mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to hippo stuff. Every asset on our platform is verified by
            our team to ensure our highest quality standards
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 ">
            <Link href="/products" className={buttonVariants()}>
              Browse stuff
            </Link>
            <Button variant="ghost">Our quality pinky promise &rarr;</Button>
          </div>
        </div>

        {/* TODO: List products */}
      </MaxWidthWrapper>

      <section className=" border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 ">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className=" text-center md:flex md:items-start md:text-left lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-red-200 text-amber-900">
                    {<perk.icon className=" w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className=" text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 test-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
