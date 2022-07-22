import { NextSeo } from "next-seo";
import Link from "next/link";
import { SEO_CONFIG } from ".";
import { Logo } from "../components/logo";

const NotFound = () => {
  return (
    <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
      <NextSeo
        title={SEO_CONFIG.title}
        description={SEO_CONFIG.description}
        canonical={SEO_CONFIG.canonical}
        twitter={{
          handle: "@parabol",
          cardType: "summary_large_image",
        }}
      />

      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex justify-center">
          <a
            href="https://parabol.co"
            className="inline-flex"
            target="_blank"
            rel="noreferrer"
          >
            <Logo className="w-auto h-8" />
          </a>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Page not found.
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Sorry, we could not find the page you are looking for.
            </p>
            <div className="mt-6">
              <Link href="/" className="text-base font-medium" passHref>
                <a>
                  Go back home<span aria-hidden="true"> &rarr;</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
